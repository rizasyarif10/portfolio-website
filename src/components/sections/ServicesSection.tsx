import { Code2, Layers3, TestTube2, type LucideIcon } from "lucide-react";
import { SERVICES, TEXT } from "../../constants/portfolio";
import { useLanguage } from "../../contexts/LanguageContext";
import type { ServiceIcon } from "../../types/portfolio";
import { localize } from "../../utils/localize";
import { SectionTitle } from "../ui/SectionTitle";

const SERVICE_ICONS: Record<ServiceIcon, LucideIcon> = {
  code: Code2,
  layers: Layers3,
  quality: TestTube2,
};

export function ServicesSection() {
  const { language } = useLanguage();

  return (
    <section className="scroll-mt-0 border-b border-[rgba(25,44,62,0.12)] px-[clamp(38px,5vw,72px)] py-[76px] max-[620px]:px-[25px] max-[620px]:py-[62px] max-[420px]:px-4 max-[420px]:py-[52px] dark:border-white/[0.11]">
      <SectionTitle
        number="01"
        title={localize(TEXT.services.title, language)}
        note={localize(TEXT.services.note, language)}
      />
      <div className="grid grid-cols-3 gap-3 max-[1120px]:grid-cols-1">
        {SERVICES.map((service, index) => {
          const Icon = SERVICE_ICONS[service.icon];
          const title = localize(service.title, language);

          return (
            <article
              className="group relative flex min-h-[285px] flex-col overflow-hidden rounded-[24px] border border-[rgba(25,44,62,0.12)] bg-white/40 p-6 shadow-[0_14px_38px_rgba(25,44,62,0.035)] transition-[transform,border-color,background-color,box-shadow] duration-[420ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform hover:-translate-y-0.5 hover:border-[#5874d8]/30 hover:bg-white/70 hover:shadow-[0_18px_42px_rgba(25,44,62,0.09)] motion-reduce:transform-none motion-reduce:transition-none max-[1120px]:min-h-0 max-[420px]:rounded-[18px] max-[420px]:p-4 dark:border-white/10 dark:bg-white/[0.035] dark:shadow-none dark:hover:border-[#aebeff]/30 dark:hover:bg-white/[0.06] dark:hover:shadow-[0_18px_42px_rgba(0,0,0,0.16)]"
              key={title}
            >
              <div className="flex items-center justify-between">
                <div className="grid size-11 place-items-center rounded-[14px] border border-[#5874d8]/15 bg-[#5874d8]/[0.07] text-[#5874d8] transition-colors duration-[420ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:bg-[#5874d8] group-hover:text-white dark:border-[#aebeff]/15 dark:bg-[#aebeff]/[0.07] dark:text-[#aebeff]">
                  <Icon size={19} />
                </div>
                <span className="font-mono text-[9px] font-bold tracking-[0.12em] text-[rgba(25,44,62,0.34)] dark:text-white/30">
                  0{index + 1}
                </span>
              </div>
              <h3 className="mt-auto pt-10 text-xl leading-[1.1] font-bold tracking-[-0.03em] max-[1120px]:mt-2 max-[1120px]:pt-3">
                {title}
              </h3>
              <p className="mt-3 text-[13px] leading-[1.7] text-[rgba(25,44,62,0.6)] dark:text-[rgba(237,241,239,0.61)]">
                {localize(service.description, language)}
              </p>
              <span className="absolute right-6 bottom-0 left-6 h-[2px] origin-left scale-x-[0.28] bg-[linear-gradient(90deg,#5874d8,#d28a22)] transition-transform duration-[520ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100" />
            </article>
          );
        })}
      </div>
    </section>
  );
}
