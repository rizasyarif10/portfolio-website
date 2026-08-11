import { useEffect } from "react";
import { createPortal } from "react-dom";
import { Download, FileText, X } from "lucide-react";
import { TEXT } from "@/constants/portfolio";
import { useLanguage } from "@/hooks/useLanguage";
import { localize } from "@/utils/localize";

type PdfPreviewModalProps = {
  fileUrl: string;
  fileName: string;
  secondaryDownload?: {
    url: string;
    label: string;
  };
  isOpen: boolean;
  onClose: () => void;
};

export function PdfPreviewModal({
  fileUrl,
  fileName,
  secondaryDownload,
  isOpen,
  onClose,
}: PdfPreviewModalProps) {
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
    <div className="fixed inset-0 z-100 grid place-items-center p-5.5 max-[620px]:p-2" role="dialog" aria-modal="true" aria-labelledby="pdf-preview-title">
      <button className="absolute inset-0 cursor-pointer border-0 bg-[rgba(12,22,31,0.72)] backdrop-blur-[9px]" type="button" onClick={onClose} aria-label={closeLabel} />
      <div className="relative grid h-[calc(100dvh-44px)] max-h-220 w-full max-w-240 grid-rows-[auto_minmax(0,1fr)_auto] overflow-hidden rounded-3xl border border-white/30 bg-[#f7f5ee] shadow-[0_30px_90px_rgba(12,22,31,0.38)] max-[620px]:h-[calc(100dvh-16px)] max-[620px]:rounded-[18px] dark:border-[#8fb7ff]/15 dark:bg-[#0b1726] dark:text-[#edf1f8]">
        <header className="flex items-center justify-between border-b border-[rgba(25,44,62,0.12)] bg-[#f7f5ee] px-4.5 py-3.75 max-[620px]:px-3 max-[620px]:py-2.75 dark:border-[#8fb7ff]/15 dark:bg-[#0b1726]">
          <div className="flex min-w-0 items-center gap-2.75">
            <FileText size={19} />
            <span className="flex min-w-0 flex-col">
              <small className="text-[9px] font-bold tracking-[0.08em] text-[rgba(25,44,62,0.66)] uppercase dark:text-[rgba(237,241,239,0.5)]">{localize(TEXT.pdf.preview, language)}</small>
              <strong className="mt-0.5 overflow-hidden text-xs text-ellipsis whitespace-nowrap" id="pdf-preview-title">{fileName}</strong>
            </span>
          </div>
          <button className="grid size-9.5 shrink-0 cursor-pointer place-items-center rounded-full border border-[rgba(25,44,62,0.13)] bg-transparent text-[#192c3e] dark:border-white/10 dark:text-[#edf1ef]" type="button" onClick={onClose} aria-label={closeLabel}><X size={20} /></button>
        </header>
        <div className="min-h-0 bg-[#d8d6ce] p-2.5 dark:bg-[#06101d]">
          <iframe className="block h-full w-full rounded-xl border-0 bg-white" src={`${fileUrl}#toolbar=1&navpanes=0&view=FitH`} title={`${fileName} preview`} />
        </div>
        <footer className="flex items-center justify-between gap-2.5 border-t border-[rgba(25,44,62,0.12)] bg-[#f7f5ee] px-4.5 py-3.75 max-[620px]:px-3 max-[620px]:py-2.75 max-[420px]:gap-1.5 dark:border-[#8fb7ff]/15 dark:bg-[#0b1726]">
          <button className="inline-flex min-h-10 cursor-pointer items-center justify-center gap-2 rounded-[11px] border border-[rgba(25,44,62,0.14)] bg-transparent px-4.25 text-[11px] font-bold text-[#282c2f] max-[620px]:px-3.25 max-[420px]:px-2 max-[420px]:text-[10px] dark:border-white/10 dark:text-[#edf1ef]" type="button" onClick={onClose}>{localize(TEXT.pdf.close, language)}</button>
          {secondaryDownload && (
            <a
              className="ml-auto inline-flex min-h-10 cursor-pointer items-center justify-center gap-2 rounded-[11px] border border-[rgba(25,44,62,0.14)] bg-transparent px-4.25 text-[11px] font-bold text-[#282c2f] max-[620px]:px-3.25 max-[420px]:px-2 max-[420px]:text-[10px] dark:border-white/10 dark:text-[#edf1ef]"
              href={secondaryDownload.url}
              download
            >
              {secondaryDownload.label} <Download size={15} />
            </a>
          )}
          <a className={`${secondaryDownload ? "" : "ml-auto"} inline-flex min-h-10 cursor-pointer items-center justify-center gap-2 rounded-[11px] bg-[#657780] px-4.25 text-[11px] font-bold text-white max-[620px]:px-3.25 max-[420px]:px-2 max-[420px]:text-[10px] dark:bg-[#71838b]`} href={fileUrl} download>{localize(TEXT.pdf.download, language)} <Download size={16} /></a>
        </footer>
      </div>
    </div>,
    document.body,
  );
}
