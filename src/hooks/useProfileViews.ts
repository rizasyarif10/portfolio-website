import { useEffect, useState } from "react";

const VISITOR_ID_STORAGE_KEY = "portfolio-visitor-id";
const VISITOR_ID_PATTERN = /^[a-zA-Z0-9_-]{16,80}$/;
let memoryVisitorId: string | null = null;

type ProfileViewsResponse = {
  views: number | null;
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

export function useProfileViews() {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function loadProfileViews() {
      try {
        const response = await fetch("/api/profile-views", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ visitorId: getVisitorId() }),
          cache: "no-store",
          signal: controller.signal,
        });

        if (!response.ok) return;

        const data = (await response.json()) as ProfileViewsResponse;
        if (
          typeof data.views === "number" &&
          Number.isFinite(data.views) &&
          data.views >= 0
        ) {
          setViews(Math.trunc(data.views));
        }
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError")
          return;
      }
    }

    void loadProfileViews();
    return () => controller.abort();
  }, []);

  return views;
}
