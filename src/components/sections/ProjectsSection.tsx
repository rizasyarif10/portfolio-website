import {
  INDEPENDENT_PROJECTS,
  PROFESSIONAL_PROJECTS,
  TEXT,
} from "../../constants/portfolio";
import { useLanguage } from "../../contexts/LanguageContext";
import { localize } from "../../utils/localize";
import { ProjectCarousel } from "../projects/ProjectCarousel";
import { SectionTitle } from "../ui/SectionTitle";

export function ProjectsSection() {
  const { language } = useLanguage();

  return (
    <section
      id="projects"
      className="scroll-mt-0 border-b border-[rgba(25,44,62,0.12)] px-[clamp(38px,5vw,72px)] py-19 max-[620px]:px-6.25 max-[620px]:py-15.5 max-[420px]:px-4 max-[420px]:py-13 dark:border-white/11"
    >
      <SectionTitle
        number="02"
        title={localize(TEXT.work.title, language)}
        note={localize(TEXT.work.note, language)}
      />
      <ProjectCarousel
        projects={PROFESSIONAL_PROJECTS}
        title={localize(TEXT.work.professional, language)}
        language={language}
        variant="professional"
      />

      <div className="mt-8 border-t border-[rgba(25,44,62,0.1)] pt-7 dark:border-white/9">
        <ProjectCarousel
          projects={INDEPENDENT_PROJECTS}
          title={localize(TEXT.work.independent, language)}
          language={language}
          variant="independent"
        />
      </div>
    </section>
  );
}
