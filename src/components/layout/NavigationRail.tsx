import { useEffect, useState } from "react";
import { Mail } from "lucide-react";
import { CONTACT, NAVIGATION } from "../../constants/portfolio";
import { useLanguage } from "../../contexts/LanguageContext";
import { localize } from "../../utils/localize";
import { navigateToSection } from "../../utils/smoothScroll";
import { NavigationIcon } from "../ui/NavigationIcon";

export function NavigationRail() {
  const { language } = useLanguage();
  const [activeHref, setActiveHref] = useState("#about");

  useEffect(() => {
    const scrollRoot = document.querySelector(".content-deck");
    const sections = NAVIGATION.map((item) =>
      document.querySelector<HTMLElement>(item.href),
    ).filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const activeEntry = entries.find((entry) => entry.isIntersecting);
        if (activeEntry) setActiveHref(`#${activeEntry.target.id}`);
      },
      {
        root: scrollRoot,
        rootMargin: "-38% 0px -56% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <aside
      className="nav-rail flex min-h-0 flex-col items-center overflow-hidden rounded-3xl border border-[rgba(25,44,62,0.12)] bg-[#252a2d] text-[#eef1ed] shadow-[0_14px_45px_rgba(25,44,62,0.08)] max-[900px]:hidden dark:border-white/[0.09] dark:bg-[#0d1012] dark:shadow-[0_16px_50px_rgba(0,0,0,0.28)]"
      aria-label="Portfolio navigation"
    >
      <a
        href="#about"
        className="grid h-[86px] w-full shrink-0 place-items-center border-b border-white/10 text-xl font-extrabold tracking-[-0.06em] transition-colors hover:bg-white/[0.06]"
        aria-label="Go to about section"
        onClick={(event) => {
          setActiveHref("#about");
          navigateToSection(event, "#about");
        }}
      >
        MR
      </a>
      <nav className="flex w-full flex-1 flex-col justify-center gap-[3px] p-2.5">
        {NAVIGATION.map((item) => {
          const label = localize(item.label, language);
          const isActive = activeHref === item.href;
          return (
            <a
              key={item.href}
              href={item.href}
              aria-label={label}
              aria-current={isActive ? "page" : undefined}
              onClick={(event) => {
                setActiveHref(item.href);
                navigateToSection(event, item.href);
              }}
              className={`group relative flex min-h-[67px] w-full flex-col items-center justify-center gap-1 rounded-[14px] transition duration-200 [&>svg]:transition [&>svg]:duration-200 hover:[&>svg]:-translate-y-px ${
                isActive
                  ? "bg-[rgba(79,111,206,0.24)] text-white [&>svg]:text-[#aebeff]"
                  : "text-white/50 hover:bg-white/[0.09] hover:text-white [&>svg]:text-[#91a8b3] hover:[&>svg]:text-white"
              }`}
            >
              <NavigationIcon name={item.icon} size={17} />
              <strong className="text-[10px] font-semibold">
                {label}
              </strong>
              {isActive && (
                <span
                  aria-hidden="true"
                  className="absolute right-0 h-5 w-[3px] rounded-l-full bg-[#f59e0b]"
                />
              )}
            </a>
          );
        })}
      </nav>
      <a
        className="grid h-[68px] w-full shrink-0 place-items-center border-t border-white/10 transition duration-200 hover:bg-[#4f6fce] hover:text-white"
        href={`mailto:${CONTACT.email}`}
        aria-label="Email"
      >
        <Mail size={17} />
      </a>
    </aside>
  );
}
