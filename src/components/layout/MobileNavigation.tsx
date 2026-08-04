import { NAVIGATION } from "../../constants/portfolio";
import { useLanguage } from "../../contexts/LanguageContext";
import { localize } from "../../utils/localize";
import { navigateToSection } from "../../utils/smoothScroll";
import { NavigationIcon } from "../ui/NavigationIcon";

export function MobileNavigation() {
  const { language } = useLanguage();

  return (
    <nav
      className="fixed right-2.5 bottom-2.5 left-2.5 z-50 hidden items-center justify-around rounded-[18px] border border-white/10 bg-[#252a2df2] p-2 text-white shadow-[0_12px_32px_rgba(25,44,62,0.24)] backdrop-blur-xl max-[900px]:flex max-[420px]:right-1.5 max-[420px]:bottom-1.5 max-[420px]:left-1.5 max-[420px]:rounded-2xl max-[420px]:p-1.5 dark:border-[#8fb7ff]/15 dark:bg-[#071727]/95 dark:shadow-[0_12px_32px_rgba(2,8,18,0.42)]"
      aria-label="Mobile navigation"
    >
      {NAVIGATION.map((item) => (
        <a
          key={item.href}
          href={item.href}
          onClick={(event) => navigateToSection(event, item.href)}
          className="flex min-w-12 flex-col items-center gap-1 px-1.5 py-2 text-[10px] font-semibold max-[420px]:min-w-0 max-[420px]:flex-1 max-[420px]:px-1 max-[420px]:text-[9px] [&>svg]:text-[#a8b397]"
        >
          <NavigationIcon name={item.icon} size={16} />
          <span className="leading-none">{localize(item.label, language)}</span>
        </a>
      ))}
    </nav>
  );
}
