import { useEffect, useState } from "react";

const VISITOR_ID_STORAGE_KEY = "portfolio-visitor-id";
const LAST_VISIT_STORAGE_KEY = "portfolio-last-profile-visit";
const VISIT_WINDOW_MS = 24 * 60 * 60 * 1000;
const VISITOR_ID_PATTERN = /^[a-zA-Z0-9_-]{16,80}$/;
let memoryVisitorId: string | null = null;
let memoryLastVisit = 0;
let pendingRequest: Promise<number | null> | null = null;

type ProfileViewsResponse = {
  views: number | null;
  counted: boolean;
  configured: boolean;
};

function createVisitorId() {
  if (typeof globalThis.crypto.randomUUID === "function") {
    return globalThis.crypto.randomUUID();
  }

  const randomBytes = globalThis.crypto.getRandomValues(new Uint8Array(16));
  return Array.from(randomBytes, (byte) =>
    byte.toString(16).padStart(2, "0"),
  ).join("");
}

function getVisitorId() {
  try {
    const savedVisitorId = localStorage.getItem(VISITOR_ID_STORAGE_KEY);
    if (savedVisitorId && VISITOR_ID_PATTERN.test(savedVisitorId)) {
      return savedVisitorId;
    }

    const visitorId = createVisitorId();
    localStorage.setItem(VISITOR_ID_STORAGE_KEY, visitorId);
    return visitorId;
  } catch {
    memoryVisitorId ??= createVisitorId();
    return memoryVisitorId;
  }
}

function readLastVisit() {
  try {
    const storedVisit = localStorage.getItem(LAST_VISIT_STORAGE_KEY);
    const parsedVisit = storedVisit === null ? 0 : Number(storedVisit);
    return Number.isFinite(parsedVisit) ? parsedVisit : 0;
  } catch {
    return memoryLastVisit;
  }
}

function hasRecentVisit() {
  const lastVisit = readLastVisit();
  if (lastVisit <= 0) return false;

  // A timestamp in the future means the device clock moved backwards. Treat it
  // as a recent visit so a wrong clock cannot inflate the counter.
  const elapsed = Date.now() - lastVisit;
  return elapsed < VISIT_WINDOW_MS;
}

function writeLastVisit(visitedAt: number) {
  memoryLastVisit = visitedAt;

  try {
    if (visitedAt > 0) {
      localStorage.setItem(LAST_VISIT_STORAGE_KEY, String(visitedAt));
    } else {
      localStorage.removeItem(LAST_VISIT_STORAGE_KEY);
    }
  } catch {
    // Storage is unavailable; the in-memory value still covers this page load.
  }
}

async function requestProfileViews() {
  const previousVisit = readLastVisit();
  const shouldCountVisit = !hasRecentVisit();

  // Claim the visit window before the request resolves so a second mount
  // (React StrictMode, a remount) cannot fire a second counting request.
  if (shouldCountVisit) writeLastVisit(Date.now());

  let response: Response;
  try {
    response = await fetch("/api/profile-views", {
      method: shouldCountVisit ? "POST" : "GET",
      headers: shouldCountVisit
        ? { "Content-Type": "application/json" }
        : undefined,
      body: shouldCountVisit
        ? JSON.stringify({ visitorId: getVisitorId() })
        : undefined,
      cache: "no-store",
      credentials: "same-origin",
    });
  } catch (error) {
    // The request never reached the server, so release the claimed window.
    if (shouldCountVisit) writeLastVisit(previousVisit);
    throw error;
  }

  if (!response.ok) {
    if (shouldCountVisit) writeLastVisit(previousVisit);
    return null;
  }

  const data = (await response.json()) as ProfileViewsResponse;
  if (
    typeof data.views === "number" &&
    Number.isFinite(data.views) &&
    data.views >= 0
  ) {
    return Math.trunc(data.views);
  }

  return null;
}

export function useProfileViews() {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    let active = true;

    // Share a single in-flight request across mounts so the counter is hit
    // once per page load no matter how many times the effect runs.
    pendingRequest ??= requestProfileViews().catch(() => null);
    const request = pendingRequest;

    void request
      .then((result) => {
        if (active && result !== null) setViews(result);
      })
      .finally(() => {
        if (pendingRequest === request) pendingRequest = null;
      });

    return () => {
      active = false;
    };
  }, []);

  return views;
}
