type SectionTitleProps = {
  number: string;
  title: string;
  note?: string;
};

export function SectionTitle({ number, title, note }: SectionTitleProps) {
  return (
    <div className="mb-10.5 max-[420px]:mb-8">
      <div className="mb-6 flex items-center gap-3 max-[420px]:mb-4">
        <span className="font-mono text-[10px] font-bold tracking-[0.14em] text-[#4a63c4] dark:text-[#aebeff]">
          {number} /
        </span>
        <span className="h-px flex-1 bg-[rgba(25,44,62,0.13)] dark:bg-white/11" />
      </div>
      <div className="grid grid-cols-[minmax(0,1fr)_minmax(220px,0.68fr)] items-end gap-8 max-[720px]:grid-cols-1 max-[720px]:gap-3">
        <h2 className="text-[clamp(34px,3.7vw,46px)] leading-none font-bold tracking-[-0.05em] max-[420px]:text-[31px]">
          {title}
        </h2>
        {note && (
          <p className="max-w-107.5 border-l-2 border-[#d28a22]/55 pl-4 text-[13px] leading-[1.65] text-[rgba(25,44,62,0.66)] max-[420px]:text-[12px] dark:text-[rgba(237,241,239,0.61)]">
            {note}
          </p>
        )}
      </div>
    </div>
  );
}
