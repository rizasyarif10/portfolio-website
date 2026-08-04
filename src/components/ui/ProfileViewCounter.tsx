import { Eye } from "lucide-react";
import { TEXT } from "../../constants/portfolio";
import { useLanguage } from "../../contexts/LanguageContext";
import { useProfileViews } from "../../hooks/useProfileViews";
import { localize } from "../../utils/localize";

export function ProfileViewCounter() {
  const { language } = useLanguage();
  const views = useProfileViews();

  return (
    <div className="mt-2.5 min-h-4" aria-live="polite">
      {views !== null && (
        <span className="flex items-center gap-1.75 text-[10px] text-white/55">
          <Eye size={14} aria-hidden="true" />
          <span className="font-semibold tabular-nums text-white/75">
            {new Intl.NumberFormat(language === "id" ? "id-ID" : "en-US").format(
              views,
            )}
          </span>
          {localize(TEXT.profile.views, language)}
        </span>
      )}
    </div>
  );
}
