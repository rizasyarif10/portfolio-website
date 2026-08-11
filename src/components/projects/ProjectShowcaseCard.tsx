import { ArrowUpRight } from "lucide-react";
import { ProjectGallery } from "@/components/projects/ProjectGallery";
import { TEXT } from "@/constants/portfolio";
import type { Language, Project } from "@/types/portfolio";
import { localize } from "@/utils/localize";

type ProjectShowcaseCardProps = {
  readonly project: Project;
  readonly index: number;
  readonly language: Language;
  readonly reverse?: boolean;
};

export function ProjectShowcaseCard({
  project,
  index,
  language,
  reverse = false,
}: ProjectShowcaseCardProps) {
  return (
    <article
      className={`group relative grid h-full gap-5 overflow-hidden rounded-3xl border border-[rgba(25,44,62,0.12)] bg-white/45 p-5 transition-[border-color,background-color] duration-420 ease-[cubic-bezier(0.22,1,0.36,1)] before:absolute before:top-0 before:right-0 before:left-0 before:h-0.75 before:origin-left before:scale-x-0 before:bg-[linear-gradient(90deg,#5874d8,#d28a22)] before:transition-transform before:duration-520 before:ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-[#5874d8]/30 hover:bg-white/75 hover:before:scale-x-100 motion-reduce:transition-none max-[760px]:grid-cols-1 max-[760px]:grid-rows-[auto_1fr] max-[420px]:gap-4 max-[420px]:rounded-[20px] max-[420px]:p-3.5 dark:border-white/10 dark:bg-white/[0.035] dark:hover:border-[#aebeff]/30 dark:hover:bg-white/6.5 ${
        reverse
          ? "grid-cols-[minmax(240px,0.78fr)_minmax(0,1.22fr)]"
          : "grid-cols-[minmax(0,1.22fr)_minmax(240px,0.78fr)]"
      }`}
    >
      <div
        className={reverse ? "order-2 max-[760px]:order-1" : "order-1"}
      >
        <ProjectGallery
          projectTitle={project.title}
          previews={project.previews}
          language={language}
        />
      </div>

      <div
        className={`flex min-w-0 flex-col ${
          reverse ? "order-1 max-[760px]:order-2" : "order-2"
        }`}
      >
        <div className="flex min-h-8 items-center gap-3">
          <span className="font-mono text-[9px] font-bold text-[#4a63c4] dark:text-[#aebeff]">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="text-[9px] font-bold tracking-[0.12em] text-[#56666e] uppercase dark:text-[#b4c0a5]">
            {localize(project.type, language)}
          </span>
        </div>

        <h3 className="mt-6 text-[25px] leading-[1.04] font-bold tracking-[-0.04em] max-[420px]:mt-4 max-[420px]:text-[22px]">
          {project.title}
        </h3>
        <p className="mt-3 text-[13px] leading-[1.68] text-[rgba(25,44,62,0.66)] max-[420px]:text-[12px] dark:text-[rgba(237,241,239,0.61)]">
          {localize(project.description, language)}
        </p>
        <div className="mt-4 border-t border-[rgba(25,44,62,0.09)] pt-4 dark:border-white/8">
          <span className="block text-[8px] font-bold tracking-[0.11em] text-[#56666e] uppercase dark:text-[#b4c0a5]">
            {localize(TEXT.work.contribution, language)}
          </span>
          <strong className="mt-1.5 block text-[11px] font-semibold">
            {localize(project.role, language)}
          </strong>
        </div>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.map((technology) => (
            <small
              className="rounded-full border border-[rgba(25,44,62,0.1)] bg-white/55 px-2.5 py-1.5 text-[9px] font-bold text-[#56666e] dark:border-white/10 dark:bg-white/4 dark:text-[#b4c0a5]"
              key={technology}
            >
              {technology}
            </small>
          ))}
        </div>
        {project.href && (
          <a
            className="mt-5 flex w-fit items-center gap-2 rounded-full bg-[#252a2d] px-4 py-2.5 text-[10px] font-bold text-white transition-[transform,background-color] duration-300 hover:-translate-y-px hover:bg-[#5874d8] dark:bg-[#edf1ef] dark:text-[#0b1726] dark:hover:bg-[#aebeff]"
            href={project.href}
            target="_blank"
            rel="noreferrer"
            aria-label={`${localize(TEXT.work.open, language)} ${project.title}`}
          >
            {localize(TEXT.work.open, language)}
            <ArrowUpRight size={14} />
          </a>
        )}
      </div>
    </article>
  );
}
