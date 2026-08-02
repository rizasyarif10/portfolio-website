import { useEffect } from "react";
import { createPortal } from "react-dom";
import { Download, FileText, X } from "lucide-react";
import { TEXT } from "../../constants/portfolio";
import { useLanguage } from "../../contexts/LanguageContext";
import { localize } from "../../utils/localize";

type PdfPreviewModalProps = {
  fileUrl: string;
  fileName: string;
  isOpen: boolean;
  onClose: () => void;
};

export function PdfPreviewModal({ fileUrl, fileName, isOpen, onClose }: PdfPreviewModalProps) {
  const { language } = useLanguage();

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const closeLabel = localize(TEXT.pdf.closePreview, language);

  return createPortal(
    <div className="fixed inset-0 z-[100] grid place-items-center p-[22px] max-[620px]:p-2" role="dialog" aria-modal="true" aria-labelledby="pdf-preview-title">
      <button className="absolute inset-0 cursor-pointer border-0 bg-[rgba(12,22,31,0.72)] backdrop-blur-[9px]" type="button" onClick={onClose} aria-label={closeLabel} />
      <div className="relative grid h-[calc(100dvh_-_44px)] max-h-[880px] w-full max-w-[960px] grid-rows-[auto_minmax(0,1fr)_auto] overflow-hidden rounded-3xl border border-white/30 bg-[#f7f5ee] shadow-[0_30px_90px_rgba(12,22,31,0.38)] max-[620px]:h-[calc(100dvh_-_16px)] max-[620px]:rounded-[18px] dark:bg-[#181c1f] dark:text-[#edf1ef]">
        <header className="flex items-center justify-between border-b border-[rgba(25,44,62,0.12)] bg-[#f7f5ee] px-[18px] py-[15px] max-[620px]:px-3 max-[620px]:py-[11px] dark:border-white/10 dark:bg-[#181c1f]">
          <div className="flex min-w-0 items-center gap-[11px]">
            <FileText size={19} />
            <span className="flex min-w-0 flex-col">
              <small className="text-[9px] font-bold tracking-[0.08em] text-[rgba(25,44,62,0.48)] uppercase dark:text-[rgba(237,241,239,0.46)]">{localize(TEXT.pdf.preview, language)}</small>
              <strong className="mt-0.5 overflow-hidden text-xs text-ellipsis whitespace-nowrap" id="pdf-preview-title">{fileName}</strong>
            </span>
          </div>
          <button className="grid size-[38px] shrink-0 cursor-pointer place-items-center rounded-full border border-[rgba(25,44,62,0.13)] bg-transparent text-[#192c3e] dark:border-white/10 dark:text-[#edf1ef]" type="button" onClick={onClose} aria-label={closeLabel}><X size={20} /></button>
        </header>
        <div className="min-h-0 bg-[#d8d6ce] p-2.5 dark:bg-[#080e14]">
          <iframe className="block h-full w-full rounded-xl border-0 bg-white" src={`${fileUrl}#toolbar=1&navpanes=0&view=FitH`} title={`${fileName} preview`} />
        </div>
        <footer className="flex items-center justify-between gap-2.5 border-t border-[rgba(25,44,62,0.12)] bg-[#f7f5ee] px-[18px] py-[15px] max-[620px]:px-3 max-[620px]:py-[11px] dark:border-white/10 dark:bg-[#181c1f]">
          <button className="inline-flex min-h-10 cursor-pointer items-center justify-center gap-2 rounded-[11px] border border-[rgba(25,44,62,0.14)] bg-transparent px-[17px] text-[11px] font-bold text-[#282c2f] max-[620px]:px-[13px] dark:border-white/10 dark:text-[#edf1ef]" type="button" onClick={onClose}>{localize(TEXT.pdf.close, language)}</button>
          <a className="ml-auto inline-flex min-h-10 cursor-pointer items-center justify-center gap-2 rounded-[11px] bg-[#657780] px-[17px] text-[11px] font-bold text-white max-[620px]:px-[13px] dark:bg-[#71838b]" href={fileUrl} download>{localize(TEXT.pdf.download, language)} <Download size={16} /></a>
        </footer>
      </div>
    </div>,
    document.body,
  );
}
