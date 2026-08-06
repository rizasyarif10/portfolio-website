import { Redis } from "@upstash/redis";

const TOTAL_VIEWS_KEY = "portfolio:profile-views:total";
const VISITOR_KEY_PREFIX = "portfolio:profile-views:visitor";
const FINGERPRINT_KEY_PREFIX = "portfolio:profile-views:fingerprint";
const VISITOR_COOKIE_NAME = "portfolio-visitor-id";
const VISITOR_TTL_SECONDS = 60 * 60 * 24;
const VISITOR_COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 365;
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

function getCookieVisitorId(request: Request) {
  const cookieHeader = request.headers.get("cookie");
  if (!cookieHeader) return null;

  for (const cookie of cookieHeader.split(";")) {
    const [name, ...valueParts] = cookie.trim().split("=");
    if (name !== VISITOR_COOKIE_NAME) continue;

    try {
      const visitorId = decodeURIComponent(valueParts.join("="));
      return VISITOR_ID_PATTERN.test(visitorId) ? visitorId : null;
    } catch {
      return null;
    }
  }

  return null;
}

function isSecureRequest(request: Request) {
  const forwardedProto = request.headers.get("x-forwarded-proto");
  if (forwardedProto) {
    return forwardedProto.split(",")[0].trim().toLowerCase() === "https";
  }

  try {
    return new URL(request.url).protocol === "https:";
  } catch {
    return false;
  }
}

function createVisitorCookie(visitorId: string, secure: boolean) {
  const attributes = [
    `${VISITOR_COOKIE_NAME}=${encodeURIComponent(visitorId)}`,
    "Path=/",
    `Max-Age=${VISITOR_COOKIE_MAX_AGE_SECONDS}`,
    "HttpOnly",
    "SameSite=Lax",
  ];

  // A `Secure` cookie is silently dropped over plain http (local dev), which
  // would leave every reload looking like a brand new visitor.
  if (secure) attributes.push("Secure");

  return attributes.join("; ");
}

function getClientIp(request: Request) {
  const forwardedFor =
    request.headers.get("x-vercel-forwarded-for") ??
    request.headers.get("x-forwarded-for");

  if (forwardedFor) {
    const ip = forwardedFor.split(",")[0].trim();
    if (ip) return ip;
  }

  return request.headers.get("x-real-ip")?.trim() || null;
}

async function createFingerprint(request: Request) {
  const ip = getClientIp(request);
  if (!ip) return null;

  const parts = [
    process.env.PROFILE_VIEWS_SALT ?? "portfolio-profile-views",
    ip,
    request.headers.get("user-agent") ?? "",
    request.headers.get("accept-language") ?? "",
  ];

  const digest = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(parts.join("|")),
  );

  return Array.from(new Uint8Array(digest), (byte) =>
    byte.toString(16).padStart(2, "0"),
  )
    .join("")
    .slice(0, 32);
}

function sendJson(
  payload: ProfileViewsResponse | { error: string },
  status = 200,
  headers?: HeadersInit,
) {
  const responseHeaders = new Headers(headers);
  responseHeaders.set("Cache-Control", "no-store, max-age=0");

  return Response.json(payload, {
    status,
    headers: responseHeaders,
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

    const cookieVisitorId = getCookieVisitorId(request);

    try {
      const currentViews = async () =>
        (await redis.get<number>(TOTAL_VIEWS_KEY)) ?? 0;

      if (request.method === "GET") {
        return sendJson({
          views: await currentViews(),
          counted: false,
          configured: true,
        });
      }

      let body: unknown;
      try {
        body = await request.json();
      } catch {
        return sendJson({ error: "Invalid JSON body" }, 400);
      }

      // The cookie wins over the client-supplied id: it survives a cleared
      // localStorage, so a returning visitor keeps the same identity.
      const visitorId = cookieVisitorId ?? getVisitorId(body);
      if (!visitorId) {
        return sendJson({ error: "Invalid visitor ID" }, 400);
      }

      // Only issue the cookie when the browser did not already send one back,
      // otherwise a stale localStorage id could overwrite the sticky identity.
      const responseHeaders = cookieVisitorId
        ? undefined
        : {
            "Set-Cookie": createVisitorCookie(
              visitorId,
              isSecureRequest(request),
            ),
          };

      const userAgent = request.headers.get("user-agent") ?? "";
      if (BOT_USER_AGENT_PATTERN.test(userAgent)) {
        return sendJson(
          { views: await currentViews(), counted: false, configured: true },
          200,
          responseHeaders,
        );
      }

      const claim = async (key: string) =>
        (await redis.set(key, "1", { nx: true, ex: VISITOR_TTL_SECONDS })) ===
        "OK";

      // Second line of defence: a salted hash of ip + user agent. It catches
      // the case where both localStorage and the cookie are gone (incognito,
      // cleared site data, a different browser profile on the same machine).
      const fingerprint = await createFingerprint(request);

      const [visitorClaimed, fingerprintClaimed] = await Promise.all([
        claim(`${VISITOR_KEY_PREFIX}:${visitorId}`),
        fingerprint
          ? claim(`${FINGERPRINT_KEY_PREFIX}:${fingerprint}`)
          : Promise.resolve(true),
      ]);

      const counted = visitorClaimed && fingerprintClaimed;
      const views = counted
        ? await redis.incr(TOTAL_VIEWS_KEY)
        : await currentViews();

      return sendJson(
        { views, counted, configured: true },
        200,
        responseHeaders,
      );
    } catch (error) {
      console.error("Unable to update profile views", error);
      return sendJson({ error: "Unable to load profile views" }, 500);
    }
  },
};
