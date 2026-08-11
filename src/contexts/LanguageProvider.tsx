import { useEffect, useMemo, useState, type ReactNode } from "react";

import { LanguageContext } from "@/contexts/LanguageContext";
import type { Language } from "@/types/portfolio";

function getInitialLanguage(): Language {
  const savedLanguage = localStorage.getItem("portfolio-language");
  if (savedLanguage === "en" || savedLanguage === "id") return savedLanguage;
  return navigator.language.toLowerCase().startsWith("id") ? "id" : "en";
}

export function LanguageProvider({ children }: Readonly<{ children: ReactNode }>) {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    document.documentElement.lang = language;
    localStorage.setItem("portfolio-language", language);
  }, [language]);

  const value = useMemo(() => ({ language, setLanguage }), [language]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
