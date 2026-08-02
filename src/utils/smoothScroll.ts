import type { MouseEvent } from "react";

const SCROLL_DURATION = 500;
let activeAnimationFrame: number | null = null;

const easeInOutCubic = (progress: number) =>
  progress < 0.5
    ? 4 * progress * progress * progress
    : 1 - Math.pow(-2 * progress + 2, 3) / 2;

export function navigateToSection(
  event: MouseEvent<HTMLAnchorElement>,
  href: string,
) {
  const target = document.querySelector<HTMLElement>(href);
  const scrollContainer = document.querySelector<HTMLElement>(".content-deck");

  if (!target || !scrollContainer) return;

  event.preventDefault();

  if (activeAnimationFrame !== null) {
    cancelAnimationFrame(activeAnimationFrame);
  }

  const usesDocumentScroll = window.matchMedia("(max-width: 900px)").matches;
  const startPosition = usesDocumentScroll
    ? window.scrollY
    : scrollContainer.scrollTop;
  const targetPosition = usesDocumentScroll
    ? target.getBoundingClientRect().top + window.scrollY - 10
    : target.getBoundingClientRect().top -
      scrollContainer.getBoundingClientRect().top +
      startPosition;

  const setScrollPosition = (position: number) => {
    if (usesDocumentScroll) {
      window.scrollTo(0, position);
      return;
    }

    scrollContainer.scrollTop = position;
  };

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    setScrollPosition(targetPosition);
    window.history.pushState(null, "", href);
    return;
  }

  const distance = targetPosition - startPosition;
  const startTime = performance.now();

  const animate = (currentTime: number) => {
    const progress = Math.min((currentTime - startTime) / SCROLL_DURATION, 1);
    setScrollPosition(startPosition + distance * easeInOutCubic(progress));

    if (progress < 1) {
      activeAnimationFrame = requestAnimationFrame(animate);
      return;
    }

    activeAnimationFrame = null;
    window.history.pushState(null, "", href);
  };

  activeAnimationFrame = requestAnimationFrame(animate);
}
