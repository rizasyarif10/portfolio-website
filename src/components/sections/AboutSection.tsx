import {
  ArrowUpRight,
  Braces,
  BriefcaseBusiness,
  LayoutDashboard,
  Map,
} from "lucide-react";
import { CAREER_STATS, TEXT } from "../../constants/portfolio";
import { useLanguage } from "../../contexts/LanguageContext";
import { localize } from "../../utils/localize";
import { navigateToSection } from "../../utils/smoothScroll";

export function AboutSection() {
  const { language } = useLanguage();

  const profileData = [
    {
      icon: BriefcaseBusiness,
      label: localize(TEXT.about.experienceLabel, language),
      value: `${CAREER_STATS[0].value} ${localize(TEXT.about.yearsLabel, language)}`,
      accent: "text-[#5874d8] dark:text-[#aebeff]",
    },
    {
      icon: LayoutDashboard,
      label: localize(TEXT.about.focusLabel, language),
      value: localize(TEXT.about.focusValue, language),
      accent: "text-[#657780] dark:text-[#b4c0a5]",
    },
    {
      icon: Braces,
      label: localize(TEXT.about.stackLabel, language),
      value: "React · TypeScript · Vite",
      accent: "text-[#d28a22] dark:text-[#f2b85c]",
    },
    {
      icon: Map,
      label: localize(TEXT.about.specialtyLabel, language),
      value: localize(TEXT.about.specialtyValue, language),
      accent: "text-[#5874d8] dark:text-[#aebeff]",
    },
  ] as const;

  return (
    <section
      id="about"
      className="relative flex min-h-[calc(100dvh-34px)] scroll-mt-0 flex-col justify-center overflow-hidden border-b border-[rgba(25,44,62,0.12)] px-[clamp(38px,5vw,72px)] py-[72px] max-[900px]:min-h-[620px] max-[620px]:min-h-0 max-[620px]:px-[25px] max-[620px]:py-[52px] max-[420px]:px-4 dark:border-white/[0.11]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.38] [background-image:linear-gradient(rgba(88,116,216,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(88,116,216,0.08)_1px,transparent_1px)] [background-size:34px_34px] [mask-image:linear-gradient(to_bottom,black,transparent_88%)] dark:opacity-[0.2]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[12%] right-[-125px] h-[310px] w-[360px] rotate-[-7deg] rounded-[38px] border border-[#5874d8]/10 before:absolute before:inset-[44px] before:rounded-[28px] before:border before:border-[#5874d8]/10 after:absolute after:top-[116px] after:right-[72px] after:left-[72px] after:h-[74px] after:rounded-[18px] after:border after:border-[#d28a22]/20 dark:border-[#aebeff]/10 dark:before:border-[#aebeff]/10"
      />

      <div className="relative z-[1]">
        <div className="mb-10 flex items-center gap-3 max-[620px]:mb-8">
          <span className="font-mono text-[10px] font-bold tracking-[0.14em] text-[#5874d8] dark:text-[#aebeff]">
            01 / ABOUT
          </span>
          <span className="h-px flex-1 bg-[rgba(25,44,62,0.13)] dark:bg-white/[0.11]" />
          <span className="font-mono text-[9px] tracking-[0.12em] text-[rgba(25,44,62,0.38)] uppercase dark:text-white/35">
            {localize(TEXT.about.process, language)}
          </span>
        </div>

        <div className="grid grid-cols-[minmax(0,1.4fr)_minmax(215px,0.6fr)] gap-[clamp(28px,4vw,52px)] max-[720px]:grid-cols-1 max-[720px]:gap-10">
          <div className="flex flex-col items-start">
            <h1 className="max-w-[690px] text-[clamp(38px,3.85vw,50px)] leading-[1] font-bold tracking-[-0.055em] max-[620px]:text-[36px] max-[420px]:text-[33px]">
              {localize(TEXT.about.headlineStart, language)}{" "}
              <span className="text-[#5874d8] dark:text-[#aebeff]">
                {localize(TEXT.about.headlineEmphasis, language)}
              </span>
            </h1>

            <p className="mt-7 max-w-[610px] border-l-2 border-[#d28a22]/65 pl-5 text-[16px] leading-[1.75] text-[rgba(25,44,62,0.66)] max-[620px]:text-[15px] max-[420px]:mt-6 max-[420px]:pl-4 max-[420px]:text-[14px] dark:text-[rgba(237,241,239,0.62)]">
              {localize(TEXT.about.summary, language)}
            </p>

            <a
              href="#projects"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#252a2d] px-5 py-3 text-xs font-bold text-white transition-[transform,background-color] duration-300 hover:-translate-y-0.5 hover:bg-[#5874d8] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#5874d8] dark:bg-[#edf1ef] dark:text-[#181c1f] dark:hover:bg-[#aebeff]"
              onClick={(event) => navigateToSection(event, "#projects")}
            >
              {localize(TEXT.about.exploreWork, language)}
              <ArrowUpRight size={15} />
            </a>
          </div>

          <aside
            className="w-full self-center overflow-hidden rounded-[24px] border border-[rgba(25,44,62,0.12)] bg-[rgba(255,255,255,0.48)] shadow-[0_18px_48px_rgba(25,44,62,0.06)] backdrop-blur-[10px] dark:border-white/[0.1] dark:bg-white/[0.035] dark:shadow-[0_18px_48px_rgba(0,0,0,0.16)]"
            aria-label={localize(TEXT.about.profileIndex, language)}
          >
            <div className="flex items-center justify-between border-b border-[rgba(25,44,62,0.1)] px-5 py-4 dark:border-white/[0.09]">
              <span className="font-mono text-[9px] font-bold tracking-[0.14em] text-[rgba(25,44,62,0.46)] uppercase dark:text-white/40">
                {localize(TEXT.about.profileIndex, language)}
              </span>
              <span className="size-2 rounded-full bg-[#f2a541] shadow-[0_0_0_4px_rgba(242,165,65,0.14)]" />
            </div>

            {profileData.map(({ icon: Icon, label, value, accent }, index) => (
              <div
                key={label}
                className={`px-5 py-[18px] ${
                  index < profileData.length - 1
                    ? "border-b border-[rgba(25,44,62,0.1)] dark:border-white/[0.09]"
                    : ""
                }`}
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="font-mono text-[9px] font-bold tracking-[0.12em] text-[rgba(25,44,62,0.43)] uppercase dark:text-white/38">
                    {label}
                  </span>
                  <Icon size={14} className={accent} />
                </div>
                <strong className="block text-[15px] leading-[1.35] font-bold tracking-[-0.02em] text-[#252a2d] dark:text-[#edf1ef]">
                  {value}
                </strong>
              </div>
            ))}
          </aside>
        </div>
      </div>
    </section>
  );
}
