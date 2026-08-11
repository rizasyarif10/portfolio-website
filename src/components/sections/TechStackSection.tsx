import {
  Activity,
  BadgeCheck,
  Bot,
  Check,
  Code2,
  Database,
  Map,
  Palette,
  PanelsTopLeft,
} from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { SKILL_GROUPS, TEXT } from "@/constants/portfolio";
import { useLanguage } from "@/hooks/useLanguage";
import { localize } from "@/utils/localize";

export function TechStackSection() {
  const { language } = useLanguage();
  const groupIcons = [
    Code2,
    PanelsTopLeft,
    Palette,
    Map,
    Database,
    BadgeCheck,
    Activity,
  ] as const;

  return (
    <section
      id="skills"
      className="scroll-mt-0 border-b border-[rgba(25,44,62,0.12)] px-[clamp(38px,5vw,72px)] py-19 max-[620px]:px-6.25 max-[620px]:py-15.5 max-[420px]:px-4 max-[420px]:py-13 dark:border-white/11"
    >
      <SectionTitle
        number="04"
        title={localize(TEXT.skills.title, language)}
        note={localize(TEXT.skills.note, language)}
      />
      <div className="grid grid-cols-2 gap-3 max-[720px]:grid-cols-1">
        {SKILL_GROUPS.map((group, index) => {
          const label = localize(group.label, language);
          const GroupIcon = groupIcons[index];

          return (
            <article
              key={label}
              className={`rounded-[22px] border border-[rgba(25,44,62,0.11)] bg-white/40 p-5 transition-[transform,border-color,background-color,box-shadow] duration-420 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform hover:-translate-y-0.5 hover:border-[#5874d8]/25 hover:bg-white/65 hover:shadow-[0_16px_36px_rgba(25,44,62,0.07)] motion-reduce:transform-none motion-reduce:transition-none max-[720px]:col-span-1 max-[420px]:rounded-[18px] max-[420px]:p-4 dark:border-white/10 dark:bg-white/[0.035] dark:hover:border-[#aebeff]/25 dark:hover:bg-white/5.5 dark:hover:shadow-[0_16px_36px_rgba(0,0,0,0.14)] ${
                index === SKILL_GROUPS.length - 1 &&
                SKILL_GROUPS.length % 2 === 1
                  ? "col-span-2"
                  : ""
              }`}
            >
              <div className="mb-5 flex items-center justify-between border-b border-[rgba(25,44,62,0.09)] pb-4 dark:border-white/8">
                <div className="flex items-center gap-2.5">
                  <span className="grid size-8 place-items-center rounded-[10px] bg-[#5874d8]/10 text-[#4a63c4] dark:bg-[#aebeff]/10 dark:text-[#aebeff]">
                    <GroupIcon size={15} strokeWidth={1.8} />
                  </span>
                  <h3 className="text-sm font-bold tracking-[-0.015em]">
                    {label}
                  </h3>
                </div>
                <span className="font-mono text-[9px] font-bold text-[#4a63c4] dark:text-[#aebeff]">
                  0{index + 1}
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span
                    className="rounded-full border border-[rgba(25,44,62,0.1)] bg-white/55 px-2.5 py-2 text-[10px] font-semibold text-[rgba(25,44,62,0.66)] dark:border-white/10 dark:bg-white/4 dark:text-[rgba(237,241,239,0.68)]"
                    key={item}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
      <div className="mt-8 border-t border-[rgba(25,44,62,0.1)] pt-7 dark:border-white/9">
        <div className="mb-5 flex items-center gap-3">
          <span className="grid size-9 place-items-center rounded-xl bg-[#5874d8]/10 text-[#4a63c4] dark:bg-[#aebeff]/10 dark:text-[#aebeff]">
            <Bot size={17} strokeWidth={1.8} />
          </span>
          <div className="flex flex-col">
            <span className="block font-mono text-[8px] font-bold tracking-[0.13em] text-[#56666e] uppercase dark:text-[#b4c0a5]">
              {localize(TEXT.skills.aiEyebrow, language)}
            </span>
            <h3 className="text-[15px] font-bold tracking-[-0.02em]">
              {localize(TEXT.skills.aiTitle, language)}
            </h3>
          </div>
        </div>

        <article className="grid grid-cols-[minmax(0,1.25fr)_minmax(210px,0.75fr)] gap-5 rounded-[22px] border border-[rgba(25,44,62,0.11)] bg-white/40 p-5 transition-[transform,border-color,background-color,box-shadow] duration-420 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform hover:-translate-y-0.5 hover:border-[#5874d8]/25 hover:bg-white/65 hover:shadow-[0_16px_36px_rgba(25,44,62,0.07)] motion-reduce:transform-none motion-reduce:transition-none max-[720px]:grid-cols-1 max-[420px]:rounded-[18px] max-[420px]:p-4 dark:border-white/10 dark:bg-white/[0.035] dark:hover:border-[#aebeff]/25 dark:hover:bg-white/5.5 dark:hover:shadow-[0_16px_36px_rgba(0,0,0,0.14)]">
          <div>
            <span className="font-mono text-[8px] font-bold tracking-[0.13em] text-[#56666e] uppercase dark:text-[#b4c0a5]">
              {localize(TEXT.skills.aiTools, language)}
            </span>
            <p className="mt-2.5 max-w-130 text-[12px] leading-[1.7] text-[rgba(25,44,62,0.66)] dark:text-[rgba(237,241,239,0.61)]">
              {localize(TEXT.skills.aiDescription, language)}
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {["Claude", "Claude Code"].map((tool) => (
                <span
                  className="rounded-full border border-[#5874d8]/15 bg-[#5874d8]/6 px-2.5 py-1.5 text-[9px] font-semibold text-[#4b628f] dark:border-[#aebeff]/15 dark:bg-[#aebeff]/6 dark:text-[#cbd5ff]"
                  key={tool}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div className="border-l border-[rgba(25,44,62,0.09)] pl-5 max-[720px]:border-t max-[720px]:border-l-0 max-[720px]:pt-5 max-[720px]:pl-0 dark:border-white/8">
            <span className="mb-3 block font-mono text-[8px] font-bold tracking-[0.13em] text-[#56666e] uppercase dark:text-[#b4c0a5]">
              {localize(TEXT.skills.aiStagesLabel, language)}
            </span>
            <div className="grid grid-cols-2 gap-2">
              {TEXT.skills.aiStages.map((stage) => {
                const label = localize(stage, language);

                return (
                  <span
                    className="flex items-center gap-2 rounded-[10px] border border-[rgba(25,44,62,0.08)] bg-white/45 px-2.5 py-2 text-[9px] font-semibold text-[rgba(25,44,62,0.66)] dark:border-white/8 dark:bg-white/[0.035] dark:text-[rgba(237,241,239,0.67)]"
                    key={label}
                  >
                    <span className="grid size-4 shrink-0 place-items-center rounded-full bg-[#5874d8]/10 text-[#4a63c4] dark:bg-[#aebeff]/10 dark:text-[#aebeff]">
                      <Check size={9} strokeWidth={2.5} />
                    </span>
                    {label}
                  </span>
                );
              })}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
