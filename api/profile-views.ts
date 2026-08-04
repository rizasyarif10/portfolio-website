import { Redis } from "@upstash/redis";

const TOTAL_VIEWS_KEY = "portfolio:profile-views:total";
const VISITOR_KEY_PREFIX = "portfolio:profile-views:visitor";
const VISITOR_TTL_SECONDS = 60 * 60 * 24;
const VISITOR_ID_PATTERN = /^[a-zA-Z0-9_-]{16,80}$/;
const BOT_USER_AGENT_PATTERN =
  /bot|crawler|spider|crawling|facebookexternalhit|preview|slurp/i;

type ProfileViewsResponse = {
  views: number | null;
  counted: boolean;
  configured: boolean;
};

function getRedis() {
  const url =
    process.env.UPSTASH_REDIS_REST_URL ?? process.env.KV_REST_API_URL;
  const token =
    process.env.UPSTASH_REDIS_REST_TOKEN ?? process.env.KV_REST_API_TOKEN;

  if (!url || !token) return null;

  return new Redis({ url, token });
}

function getVisitorId(body: unknown) {
  if (!body || typeof body !== "object" || !("visitorId" in body)) return null;

  const { visitorId } = body as { visitorId?: unknown };
  if (typeof visitorId !== "string" || !VISITOR_ID_PATTERN.test(visitorId)) {
    return null;
  }

  return visitorId;
}

function sendJson(
  payload: ProfileViewsResponse | { error: string },
  status = 200,
) {
  return Response.json(payload, {
    status,
    headers: { "Cache-Control": "no-store, max-age=0" },
  });
}

export default {
  async fetch(request: Request) {
    if (request.method !== "GET" && request.method !== "POST") {
      return new Response(JSON.stringify({ error: "Method not allowed" }), {
        status: 405,
        headers: {
          Allow: "GET, POST",
          "Cache-Control": "no-store, max-age=0",
          "Content-Type": "application/json",
        },
      });
    }

    const redis = getRedis();
    if (!redis) {
      return sendJson(
        { views: null, counted: false, configured: false },
        503,
      );
    }

    try {
      if (request.method === "GET") {
        const views = (await redis.get<number>(TOTAL_VIEWS_KEY)) ?? 0;
        return sendJson({ views, counted: false, configured: true });
      }

      let body: unknown;
      try {
        body = await request.json();
      } catch {
        return sendJson({ error: "Invalid JSON body" }, 400);
      }

      const visitorId = getVisitorId(body);
      if (!visitorId) {
        return sendJson({ error: "Invalid visitor ID" }, 400);
      }

      const userAgent = request.headers.get("user-agent") ?? "";
      const currentViews = async () =>
        (await redis.get<number>(TOTAL_VIEWS_KEY)) ?? 0;

      if (BOT_USER_AGENT_PATTERN.test(userAgent)) {
        return sendJson({
          views: await currentViews(),
          counted: false,
          configured: true,
        });
      }

      const claimed = await redis.set(
        `${VISITOR_KEY_PREFIX}:${visitorId}`,
        "1",
        { nx: true, ex: VISITOR_TTL_SECONDS },
      );
      const counted = claimed === "OK";
      const views = counted
        ? await redis.incr(TOTAL_VIEWS_KEY)
        : await currentViews();

      return sendJson({ views, counted, configured: true });
    } catch (error) {
      console.error("Unable to update profile views", error);
      return sendJson({ error: "Unable to load profile views" }, 500);
    }
  },
};
