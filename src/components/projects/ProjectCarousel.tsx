import {
  BriefcaseBusiness,
  ChevronLeft,
  ChevronRight,
  FolderOpen,
} from "lucide-react";
import { useRef, useState } from "react";
import { TEXT } from "../../constants/portfolio";
import type { Language, Project } from "../../types/portfolio";
import { localize } from "../../utils/localize";
import { ProjectShowcaseCard } from "./ProjectShowcaseCard";

type ProjectCarouselProps = {
  readonly projects: readonly Project[];
  readonly title: string;
  readonly language: Language;
  readonly variant: "professional" | "independent";
};

export function ProjectCarousel({
  projects,
  title,
  language,
  variant,
}: ProjectCarouselProps) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const Icon = variant === "professional" ? BriefcaseBusiness : FolderOpen;

  const moveTo = (nextIndex: number) => {
    const normalizedIndex = (nextIndex + projects.length) % projects.length;
    const viewport = viewportRef.current;

    setActiveIndex(normalizedIndex);
    viewport?.scrollTo({
      left: normalizedIndex * viewport.clientWidth,
      behavior: "smooth",
    });
  };

  const updateActiveSlide = () => {
    const viewport = viewportRef.current;

    if (!viewport || viewport.clientWidth === 0) return;

    const nextIndex = Math.round(viewport.scrollLeft / viewport.clientWidth);
    setActiveIndex(Math.min(projects.length - 1, Math.max(0, nextIndex)));
  };

  return (
    <div>
      <div className="mb-5 flex items-center justify-between gap-4 max-[420px]:gap-2">
        <div className="flex items-center gap-3">
          <span className="grid size-9 place-items-center rounded-[12px] bg-[#5874d8]/10 text-[#5874d8] max-[420px]:size-8 max-[420px]:rounded-[10px] dark:bg-[#aebeff]/10 dark:text-[#aebeff]">
            <Icon size={17} strokeWidth={1.8} />
          </span>
          <h3 className="text-[15px] font-bold tracking-[-0.02em] max-[420px]:text-[13px]">{title}</h3>
        </div>

        {projects.length > 1 && (
          <div className="flex items-center gap-2">
            <span className="mr-1 font-mono text-[8px] font-bold tracking-[0.08em] text-[rgba(25,44,62,0.45)] max-[420px]:hidden dark:text-white/40">
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(projects.length).padStart(2, "0")}
            </span>
            <button
              type="button"
              className="grid size-8 place-items-center rounded-full border border-[rgba(25,44,62,0.12)] bg-white/40 text-[#192c3e] transition-[transform,background-color,color] duration-300 hover:-translate-y-px hover:bg-[#252a2d] hover:text-white dark:border-white/10 dark:bg-white/[0.04] dark:text-[#edf1ef] dark:hover:bg-[#edf1ef] dark:hover:text-[#0b1726]"
              onClick={() => moveTo(activeIndex - 1)}
              aria-label={localize(TEXT.work.previousProject, language)}
            >
              <ChevronLeft size={15} />
            </button>
            <button
              type="button"
              className="grid size-8 place-items-center rounded-full border border-[rgba(25,44,62,0.12)] bg-white/40 text-[#192c3e] transition-[transform,background-color,color] duration-300 hover:-translate-y-px hover:bg-[#252a2d] hover:text-white dark:border-white/10 dark:bg-white/[0.04] dark:text-[#edf1ef] dark:hover:bg-[#edf1ef] dark:hover:text-[#0b1726]"
              onClick={() => moveTo(activeIndex + 1)}
              aria-label={localize(TEXT.work.nextProject, language)}
            >
              <ChevronRight size={15} />
            </button>
          </div>
        )}
      </div>

      <div
        ref={viewportRef}
        className="flex snap-x snap-mandatory touch-pan-x items-stretch overflow-x-auto overflow-y-hidden overscroll-x-contain scroll-smooth pb-1 transition-[height] duration-300 ease-out [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        onScroll={updateActiveSlide}
        aria-label={title}
      >
        {projects.map((project, index) => (
          <div
            className="min-w-full snap-start"
            key={project.title}
          >
            <ProjectShowcaseCard
              project={project}
              index={index}
              language={language}
              reverse={index % 2 === 1}
            />
          </div>
        ))}
      </div>

      {projects.length > 1 && (
        <div className="mt-3 flex justify-center gap-1.5">
          {projects.map((project, index) => (
            <button
              type="button"
              className={`h-1.5 rounded-full transition-[width,background-color] duration-300 ${
                activeIndex === index
                  ? "w-6 bg-[#5874d8] dark:bg-[#aebeff]"
                  : "w-1.5 bg-[rgba(25,44,62,0.16)] hover:bg-[#5874d8]/45 dark:bg-white/15 dark:hover:bg-[#aebeff]/45"
              }`}
              onClick={() => moveTo(index)}
              aria-label={`${title}: ${project.title}`}
              aria-current={activeIndex === index ? "true" : undefined}
              key={project.title}
            />
          ))}
        </div>
      )}
    </div>
  );
}
