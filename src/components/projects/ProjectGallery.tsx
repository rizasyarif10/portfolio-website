import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import { TEXT } from "@/constants/portfolio";
import type {
  Language,
  ProjectPreview,
  ProjectPreviewVariant,
} from "@/types/portfolio";
import { localize } from "@/utils/localize";

type ProjectGalleryProps = {
  readonly projectTitle: string;
  readonly previews: readonly ProjectPreview[];
  readonly language: Language;
};

function PlaceholderCanvas({ variant }: { variant: ProjectPreviewVariant }) {
  const shell =
    "rounded-[7px] border border-white/8 bg-white/[0.07]";

  return (
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(88,116,216,0.34),transparent_34%),linear-gradient(145deg,#1d2529_0%,#293237_100%)] p-[clamp(9px,2vw,16px)]">
      <div className="flex h-full flex-col overflow-hidden rounded-[10px] border border-white/10 bg-[#171d20]/88 shadow-[0_18px_42px_rgba(0,0,0,0.25)]">
        <div className="flex h-7 shrink-0 items-center gap-1.5 border-b border-white/[0.07] px-2.5">
          <span className="size-1.5 rounded-full bg-[#f2b85c]/75" />
          <span className="size-1.5 rounded-full bg-white/20" />
          <span className="size-1.5 rounded-full bg-[#aebeff]/55" />
          <span className="ml-auto h-1.5 w-14 rounded-full bg-white/8" />
        </div>

        {variant === "dashboard" && (
          <div className="grid min-h-0 flex-1 grid-cols-[22%_1fr] gap-2 p-2">
            <div className={`${shell} space-y-2 p-2`}>
              <span className="block size-5 rounded-[5px] bg-[#f2b85c]/65" />
              <span className="block h-1.5 rounded-full bg-white/20" />
              <span className="block h-1.5 w-4/5 rounded-full bg-white/10" />
              <span className="block h-1.5 w-3/5 rounded-full bg-white/10" />
            </div>
            <div className="grid min-w-0 grid-rows-[auto_1fr] gap-2">
              <div className="grid grid-cols-3 gap-2">
                {["01", "02", "03"].map((item) => (
                  <span className={`${shell} h-9 p-2`} key={item}>
                    <span className="block h-1 w-2/5 rounded-full bg-white/15" />
                    <span className="mt-2 block h-1.5 w-3/5 rounded-full bg-[#aebeff]/45" />
                  </span>
                ))}
              </div>
              <div className={`${shell} flex items-end gap-1.5 p-3`}>
                {["h-8", "h-12", "h-7", "h-16", "h-10", "h-14"].map(
                  (height, index) => (
                    <span
                      className={`flex-1 rounded-t-[3px] bg-[linear-gradient(to_top,rgba(88,116,216,0.65),rgba(174,190,255,0.24))] ${height}`}
                      key={`${height}-${index}`}
                    />
                  ),
                )}
              </div>
            </div>
          </div>
        )}

        {variant === "operations" && (
          <div className="grid min-h-0 flex-1 grid-cols-2 gap-2 p-2">
            {["01", "02", "03", "04"].map((item, index) => (
              <div className={`${shell} p-2`} key={item}>
                <div className="flex items-center gap-2">
                  <span
                    className={`size-7 rounded-[7px] ${index % 2 === 0 ? "bg-[#f2b85c]/55" : "bg-[#aebeff]/40"}`}
                  />
                  <span className="flex-1 space-y-1.5">
                    <span className="block h-1.5 w-4/5 rounded-full bg-white/20" />
                    <span className="block h-1 w-3/5 rounded-full bg-white/10" />
                  </span>
                </div>
                <span className="mt-3 block h-1.5 rounded-full bg-white/8" />
                <span className="mt-1.5 block h-1.5 w-4/5 rounded-full bg-white/8" />
              </div>
            ))}
          </div>
        )}

        {variant === "mobile" && (
          <div className="grid min-h-0 flex-1 place-items-center p-2">
            <div className="h-[92%] w-[34%] min-w-18 rounded-[13px] border border-white/15 bg-[#20282c] p-1.5 shadow-[0_14px_28px_rgba(0,0,0,0.3)]">
              <div className="h-full rounded-[9px] bg-white/6 p-2">
                <span className="mx-auto block h-1 w-7 rounded-full bg-white/15" />
                <span className="mt-3 block h-12 rounded-[7px] bg-[linear-gradient(135deg,rgba(88,116,216,0.72),rgba(242,184,92,0.42))]" />
                <div className="mt-2 grid grid-cols-2 gap-1.5">
                  <span className={`${shell} h-8`} />
                  <span className={`${shell} h-8`} />
                </div>
                <span className={`${shell} mt-2 block h-7`} />
              </div>
            </div>
          </div>
        )}

        {variant === "landing" && (
          <div className="grid min-h-0 flex-1 grid-cols-[1.05fr_0.95fr] gap-3 p-3">
            <div className="flex flex-col justify-center">
              <span className="h-1.5 w-16 rounded-full bg-[#f2b85c]/65" />
              <span className="mt-3 h-3 w-4/5 rounded-full bg-white/45" />
              <span className="mt-2 h-3 w-3/5 rounded-full bg-white/30" />
              <span className="mt-3 h-1.5 w-full rounded-full bg-white/10" />
              <span className="mt-1.5 h-1.5 w-4/5 rounded-full bg-white/10" />
              <span className="mt-4 h-6 w-20 rounded-full bg-[#aebeff]/45" />
            </div>
            <div className="rounded-[9px] bg-[linear-gradient(145deg,rgba(174,190,255,0.4),rgba(88,116,216,0.12))] p-2">
              <span className="block h-full rounded-[7px] border border-white/10 bg-[radial-gradient(circle_at_60%_35%,rgba(242,184,92,0.45),transparent_25%),linear-gradient(150deg,rgba(255,255,255,0.14),rgba(255,255,255,0.02))]" />
            </div>
          </div>
        )}

        {variant === "portfolio" && (
          <div className="grid min-h-0 flex-1 grid-cols-3 gap-2 p-2">
            {["01", "02", "03", "04", "05", "06"].map((item, index) => (
              <span
                className={`${shell} min-h-0 bg-[linear-gradient(145deg,rgba(174,190,255,0.16),rgba(255,255,255,0.03))] p-2`}
                key={item}
              >
                <span
                  className={`block h-2/3 rounded-sm ${index % 2 === 0 ? "bg-[#aebeff]/24" : "bg-[#f2b85c]/22"}`}
                />
                <span className="mt-2 block h-1 w-3/4 rounded-full bg-white/20" />
              </span>
            ))}
          </div>
        )}

        {variant === "detail" && (
          <div className="grid min-h-0 flex-1 grid-cols-[1fr_34%] gap-2 p-2">
            <span className="rounded-lg bg-[linear-gradient(145deg,rgba(174,190,255,0.36),rgba(88,116,216,0.08))]" />
            <div className={`${shell} flex flex-col p-3`}>
              <span className="h-1.5 w-2/5 rounded-full bg-[#f2b85c]/60" />
              <span className="mt-3 h-2 w-full rounded-full bg-white/30" />
              <span className="mt-2 h-2 w-4/5 rounded-full bg-white/20" />
              <span className="mt-4 h-1.5 w-full rounded-full bg-white/10" />
              <span className="mt-1.5 h-1.5 w-3/4 rounded-full bg-white/10" />
              <span className="mt-auto h-6 w-16 rounded-full bg-[#aebeff]/40" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function ProjectGallery({
  projectTitle,
  previews,
  language,
}: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const thumbnailRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const activePreview = previews[activeIndex];

  const selectPreview = (nextIndex: number) => {
    const normalizedIndex =
      (nextIndex + previews.length) % previews.length;

    setActiveIndex(normalizedIndex);
    thumbnailRefs.current[normalizedIndex]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "nearest",
    });
  };

  const showPrevious = () => {
    selectPreview(activeIndex - 1);
  };

  const showNext = () => {
    selectPreview(activeIndex + 1);
  };

  return (
    <div>
      <div className="group/gallery relative aspect-5/3 overflow-hidden rounded-[18px] border border-[rgba(25,44,62,0.12)] bg-[#20282c] max-[420px]:rounded-[14px] dark:border-white/10">
        {activePreview.kind === "image" ? (
          <img
            className="absolute inset-0 size-full object-contain"
            src={activePreview.image}
            alt={`${projectTitle} — ${localize(activePreview.label, language)}`}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <PlaceholderCanvas variant={activePreview.variant} />
        )}
        <div className="pointer-events-none absolute inset-x-0 top-0 flex items-center justify-between bg-[linear-gradient(to_bottom,rgba(11,15,17,0.7),transparent)] px-3 py-2.5 text-white">
          <span className="text-[8px] font-bold tracking-[0.12em] uppercase text-white/85">
            {localize(
              activePreview.kind === "image"
                ? TEXT.work.preview
                : TEXT.work.placeholder,
              language,
            )}
          </span>
          {previews.length > 1 && (
            <span className="font-mono text-[8px] font-bold text-white/90">
              {String(activeIndex + 1).padStart(2, "0")} / {String(previews.length).padStart(2, "0")}
            </span>
          )}
        </div>
        {previews.length > 1 && (
          <div className="absolute right-3 bottom-3 flex gap-1.5 opacity-0 transition-opacity duration-300 group-hover/gallery:opacity-100 max-[760px]:opacity-100">
            <button
              type="button"
              className="grid size-7 place-items-center rounded-full border border-white/15 bg-[#171d20]/80 text-white backdrop-blur transition-colors hover:bg-white hover:text-[#192c3e]"
              onClick={showPrevious}
              aria-label={`${projectTitle}: previous preview`}
            >
              <ChevronLeft size={14} />
            </button>
            <button
              type="button"
              className="grid size-7 place-items-center rounded-full border border-white/15 bg-[#171d20]/80 text-white backdrop-blur transition-colors hover:bg-white hover:text-[#192c3e]"
              onClick={showNext}
              aria-label={`${projectTitle}: next preview`}
            >
              <ChevronRight size={14} />
            </button>
          </div>
        )}
      </div>

      {previews.length > 1 && (
        <div
          className={
            previews.length > 4
              ? "mt-2 flex snap-x gap-2 overflow-x-auto scroll-smooth pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              : `mt-2 grid gap-2 ${
                  previews.length === 4 ? "grid-cols-4" : "grid-cols-3"
                }`
          }
        >
          {previews.map((preview, index) => {
            const label = localize(preview.label, language);
            const isActive = activeIndex === index;

            return (
              <button
                type="button"
                ref={(element) => {
                  thumbnailRefs.current[index] = element;
                }}
                className={`group/thumb overflow-hidden rounded-[10px] border p-1 text-left transition-[border-color,background-color,transform] duration-300 hover:-translate-y-px max-[420px]:p-0.5 ${
                  previews.length > 4
                    ? "w-28 shrink-0 snap-start max-[520px]:w-23"
                    : ""
                } ${
                  isActive
                    ? "border-[#5874d8]/60 bg-[#5874d8]/8 dark:border-[#aebeff]/55 dark:bg-[#aebeff]/[0.07]"
                    : "border-[rgba(25,44,62,0.1)] bg-white/30 dark:border-white/8 dark:bg-white/2.5"
                }`}
                onClick={() => selectPreview(index)}
                aria-label={`${projectTitle}: ${label}`}
                aria-pressed={isActive}
                key={label}
              >
                <span className="relative block h-12 overflow-hidden rounded-md bg-[#20282c] max-[520px]:h-10">
                  {preview.kind === "image" ? (
                    <img
                      className="absolute inset-0 size-full object-contain"
                      src={preview.image}
                      alt=""
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <PlaceholderCanvas variant={preview.variant} />
                  )}
                </span>
                <span className="block truncate px-1 pt-1.5 pb-0.5 text-[8px] font-semibold text-[rgba(25,44,62,0.66)] dark:text-[rgba(237,241,239,0.56)]">
                  {label}
                </span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
