import { BriefcaseBusiness, GraduationCap } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { EDUCATION, EXPERIENCES, TEXT } from "@/constants/portfolio";
import { useLanguage } from "@/hooks/useLanguage";
import { localize } from "@/utils/localize";

export function ResumeSection() {
  const { language } = useLanguage();

  return (
    <section
      id="resume"
      className="scroll-mt-0 border-b border-[rgba(25,44,62,0.12)] px-[clamp(38px,5vw,72px)] py-19 max-[620px]:px-6.25 max-[620px]:py-15.5 max-[420px]:px-4 max-[420px]:py-13 dark:border-white/11"
    >
      <SectionTitle
        number="03"
        title={localize(TEXT.resume.title, language)}
        note={localize(TEXT.resume.note, language)}
      />
      <div className="mb-5 flex items-center gap-3">
        <span className="grid size-9 place-items-center rounded-xl bg-[#5874d8]/10 text-[#4a63c4] dark:bg-[#aebeff]/10 dark:text-[#aebeff]">
          <BriefcaseBusiness size={17} strokeWidth={1.8} />
        </span>
        <div>
          <span className="block font-mono text-[8px] font-bold tracking-[0.14em] text-[#56666e] uppercase dark:text-[#b4c0a5]">
            2017 — {language === "en" ? "Present" : "Sekarang"}
          </span>
          <h3 className="mt-0.5 text-[15px] font-bold tracking-[-0.02em]">
            {localize(TEXT.resume.experience, language)}
          </h3>
        </div>
      </div>
      <div className="relative before:absolute before:top-6 before:bottom-6 before:left-30 before:w-px before:bg-[linear-gradient(to_bottom,#5874d8,rgba(88,116,216,0.08))] max-[620px]:before:left-1.75">
        {EXPERIENCES.map((item, index) => (
          <article
            className="relative grid grid-cols-[104px_16px_1fr] gap-2 py-2.5 max-[620px]:grid-cols-[14px_1fr] max-[620px]:gap-x-3"
            key={item.company}
          >
            <p className="pt-5 font-mono text-[9px] leading-normal font-bold tracking-[0.04em] text-[rgba(25,44,62,0.66)] uppercase max-[620px]:col-span-2 max-[620px]:pl-7 max-[620px]:pt-1 dark:text-[rgba(237,241,239,0.5)]">
              {localize(item.period, language)}
            </p>
            <span className="relative z-1 mt-5.25 grid size-3.25 justify-self-center place-items-center rounded-full border-2 border-[#f4f3ef] bg-[#5874d8] shadow-[0_0_0_3px_rgba(88,116,216,0.13)] max-[620px]:mt-6.25 dark:border-[#0b1726] dark:bg-[#aebeff]">
              <span className="size-0.75 rounded-full bg-white dark:bg-[#0b1726]" />
            </span>
            <div className="rounded-[22px] border border-[rgba(25,44,62,0.11)] bg-white/40 p-5 transition-[transform,border-color,background-color,box-shadow] duration-420 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform hover:-translate-y-0.5 hover:border-[#5874d8]/25 hover:bg-white/65 hover:shadow-[0_16px_36px_rgba(25,44,62,0.07)] motion-reduce:transform-none motion-reduce:transition-none max-[620px]:mt-2 max-[420px]:rounded-[18px] max-[420px]:p-4 dark:border-white/10 dark:bg-white/[0.035] dark:hover:border-[#aebeff]/25 dark:hover:bg-white/5.5 dark:hover:shadow-[0_16px_36px_rgba(0,0,0,0.14)]">
              <div className="flex items-center justify-between gap-4">
                <span className="text-[10px] font-bold tracking-widest text-[#56666e] uppercase dark:text-[#b4c0a5]">
                  {localize(item.role, language)}
                </span>
                <span className="font-mono text-[9px] text-[rgba(25,44,62,0.66)] dark:text-white/50">
                  0{index + 1}
                </span>
              </div>
              <h3 className="mt-2 text-xl font-bold tracking-[-0.03em]">
                {item.company}
              </h3>
              <p className="mt-2.5 text-[13px] leading-[1.7] text-[rgba(25,44,62,0.66)] dark:text-[rgba(237,241,239,0.61)]">
                {localize(item.description, language)}
              </p>
              {item.responsibilities && (
                <ul className="mt-4 space-y-2.5 border-t border-[rgba(25,44,62,0.08)] pt-4 dark:border-white/8">
                  {item.responsibilities.map((responsibility) => {
                    const text = localize(responsibility, language);

                    return (
                      <li
                        className="grid grid-cols-[7px_1fr] gap-2.5 text-[12px] leading-[1.65] text-[rgba(25,44,62,0.66)] dark:text-[rgba(237,241,239,0.62)]"
                        key={text}
                      >
                        <span className="mt-1.75 size-1.25 rounded-full bg-[#5874d8] shadow-[0_0_0_3px_rgba(88,116,216,0.09)] dark:bg-[#aebeff]" />
                        <span>{text}</span>
                      </li>
                    );
                  })}
                </ul>
              )}
              {item.projectGroups && (
                <div className="mt-4 border-t border-[rgba(25,44,62,0.08)] pt-4 dark:border-white/8">
                  <span className="mb-2.5 block font-mono text-[8px] font-bold tracking-[0.12em] text-[#56666e] uppercase dark:text-[#b4c0a5]">
                    {localize(TEXT.resume.selectedProjects, language)}
                  </span>
                  <div className="grid grid-cols-2 gap-2.5 max-[720px]:grid-cols-1">
                    {item.projectGroups.map((group, groupIndex) => (
                      <div
                        className={`rounded-[14px] border border-[rgba(25,44,62,0.08)] bg-white/35 p-3 dark:border-white/8 dark:bg-white/2.5 ${
                          groupIndex === item.projectGroups!.length - 1
                            ? "col-span-2 max-[720px]:col-span-1"
                            : ""
                        }`}
                        key={localize(group.label, language)}
                      >
                        <span className="mb-2.5 block text-[8px] font-bold tracking-widest text-[#4a63c4] uppercase dark:text-[#aebeff]">
                          {localize(group.label, language)}
                        </span>
                        <ul
                          className={`grid gap-2.5 ${
                            groupIndex === item.projectGroups!.length - 1
                              ? "grid-cols-2 max-[520px]:grid-cols-1"
                              : "grid-cols-1"
                          }`}
                        >
                          {group.items.map((project) => (
                            <li
                              className="grid grid-cols-[5px_1fr] gap-2 text-[10px] leading-normal text-[rgba(25,44,62,0.66)] dark:text-[rgba(237,241,239,0.65)]"
                              key={project.name}
                            >
                              <span className="mt-1.25 size-1 rounded-full bg-[#f2b85c]" />
                              <span>
                                <strong className="font-semibold text-[rgba(25,44,62,0.78)] dark:text-[rgba(237,241,239,0.8)]">
                                  {project.name}
                                </strong>
                                {project.detail && (
                                  <span className="text-[rgba(25,44,62,0.66)] dark:text-[rgba(237,241,239,0.5)]">
                                    {" — "}
                                    {localize(project.detail, language)}
                                  </span>
                                )}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 border-t border-[rgba(25,44,62,0.1)] pt-7 dark:border-white/9">
        <div className="mb-5 flex items-center gap-3">
          <span className="grid size-9 place-items-center rounded-xl bg-[#5874d8]/10 text-[#4a63c4] dark:bg-[#aebeff]/10 dark:text-[#aebeff]">
            <GraduationCap size={17} strokeWidth={1.8} />
          </span>
          <h3 className="text-[15px] font-bold tracking-[-0.02em]">
            {localize(TEXT.resume.education, language)}
          </h3>
        </div>

        <article className="rounded-[22px] border border-[rgba(25,44,62,0.11)] bg-white/40 p-5 transition-[transform,border-color,background-color,box-shadow] duration-420 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform hover:-translate-y-0.5 hover:border-[#5874d8]/25 hover:bg-white/65 hover:shadow-[0_16px_36px_rgba(25,44,62,0.07)] motion-reduce:transform-none motion-reduce:transition-none max-[420px]:rounded-[18px] max-[420px]:p-4 dark:border-white/10 dark:bg-white/[0.035] dark:hover:border-[#aebeff]/25 dark:hover:bg-white/5.5 dark:hover:shadow-[0_16px_36px_rgba(0,0,0,0.14)]">
          <span className="block font-mono text-[9px] font-bold tracking-widest text-[#4a63c4] uppercase dark:text-[#aebeff]">
            {EDUCATION.period}
          </span>
          <h3 className="mt-2.5 text-xl font-bold tracking-[-0.025em]">
            {EDUCATION.institution}
          </h3>
          <p className="mt-2 text-[13px] leading-[1.65] text-[rgba(25,44,62,0.66)] dark:text-[rgba(237,241,239,0.61)]">
            {localize(EDUCATION.degree, language)}
          </p>
        </article>
      </div>
    </section>
  );
}
