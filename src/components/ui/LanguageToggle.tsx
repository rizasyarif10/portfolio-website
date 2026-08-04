import { useLanguage } from "../../contexts/LanguageContext";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const nextLanguage = language === "en" ? "id" : "en";
  const nextLanguageName = nextLanguage === "id" ? "Bahasa Indonesia" : "English";
  const activeFlag = language === "en" ? "🇬🇧" : "🇮🇩";

  return (
    <button
      type="button"
      className="absolute top-4 left-4 z-2 flex h-10 min-w-14.5 cursor-pointer items-center justify-center gap-1.5 rounded-full border border-white/50 bg-[rgba(247,245,238,0.9)] px-2.5 text-[10px] font-extrabold tracking-[0.08em] text-[#53666f] shadow-[0_8px_24px_rgba(25,44,62,0.15)] backdrop-blur-[10px] transition-[color,background-color,transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_10px_28px_rgba(25,44,62,0.2)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5874d8] dark:border-white/20 dark:bg-[rgba(9,17,25,0.86)] dark:text-[#d4dcc9] dark:hover:bg-[#111c26]"
      onClick={() => setLanguage(nextLanguage)}
      aria-label={`Switch to ${nextLanguageName}`}
      title={`Switch to ${nextLanguageName}`}
    >
      <span className="text-sm leading-none" aria-hidden="true">
        {activeFlag}
      </span>
      <span>{language.toUpperCase()}</span>
    </button>
  );
}
