import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { TEXT } from "../../constants/portfolio";
import { useLanguage } from "../../contexts/LanguageContext";
import { localize } from "../../utils/localize";

type Theme = "light" | "dark";

function getCurrentTheme(): Theme {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(getCurrentTheme);
  const { language } = useLanguage();

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const isDark = theme === "dark";
  const label = localize(isDark ? TEXT.theme.light : TEXT.theme.dark, language);

  return (
    <button
      type="button"
      className="absolute top-4 right-4 z-[2] grid size-[42px] cursor-pointer place-items-center rounded-full border border-white/50 bg-[rgba(247,245,238,0.9)] text-[#192c3e] shadow-[0_8px_24px_rgba(25,44,62,0.15)] backdrop-blur-[10px] transition duration-200 hover:rotate-[8deg] hover:scale-[1.04] hover:bg-white dark:border-white/20 dark:bg-[rgba(9,17,25,0.86)] dark:text-[#c6d2b4] dark:hover:bg-[#091119]"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={label}
      title={label}
    >
      {isDark ? <Sun size={17} /> : <Moon size={17} />}
    </button>
  );
}
