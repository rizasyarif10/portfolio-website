import { useState } from "react";
import { BriefcaseBusiness, Eye, GitFork, MapPin } from "lucide-react";
import { CONTACT, PROFILE, TEXT } from "../../constants/portfolio";
import { useLanguage } from "../../contexts/LanguageContext";
import { localize } from "../../utils/localize";
import { LanguageToggle } from "../ui/LanguageToggle";
import { PdfPreviewModal } from "../ui/PdfPreviewModal";
import { ProfileViewCounter } from "../ui/ProfileViewCounter";
import { ThemeToggle } from "../ui/ThemeToggle";
import { WhatsAppIcon } from "../ui/WhatsAppIcon";

export function ProfileCard() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const { language } = useLanguage();

  return (
    <>
      <aside
        className="profile-card flex min-h-0 flex-col overflow-hidden rounded-[28px] border border-[#7189df]/45 bg-[linear-gradient(155deg,#6c787e_0%,#3d464b_100%)] text-white max-[900px]:order-1 max-[900px]:grid max-[900px]:min-h-105 max-[900px]:grid-cols-[minmax(230px,0.9fr)_1.1fr] max-[620px]:flex max-[620px]:min-h-0 max-[420px]:rounded-[22px] dark:border-[#8fb7ff]/30 dark:bg-[linear-gradient(155deg,#17314a_0%,#0b1b2b_100%)]"
        aria-label="Profile summary"
      >
        <div className="relative h-[45%] min-h-63.75 overflow-hidden bg-[#d8d8d0] max-[900px]:h-full max-[900px]:min-h-0 max-[620px]:h-[clamp(290px,90vw,360px)] max-[620px]:min-h-[clamp(290px,90vw,360px)]">
          <picture className="block h-full w-full">
            <source
              type="image/webp"
              srcSet={PROFILE.photoWebpSrcSet}
              sizes={PROFILE.photoSizes}
            />
            <img
              className="h-full w-full origin-[center_24%] scale-[1.22] object-cover object-[center_18%] max-[900px]:scale-[1.4] max-[620px]:scale-100 max-[620px]:object-[center_12%]"
              src={PROFILE.photo}
              width="1066"
              height="1600"
              alt={PROFILE.name}
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </picture>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-[36%] bg-[linear-gradient(to_top,rgba(49,56,60,1)_0%,rgba(49,56,60,0.94)_34%,rgba(49,56,60,0.48)_68%,transparent_100%)] max-[620px]:h-[24%] max-[620px]:bg-[linear-gradient(to_top,rgba(49,56,60,0.96)_0%,rgba(49,56,60,0.72)_38%,rgba(49,56,60,0.24)_72%,transparent_100%)] dark:bg-[linear-gradient(to_top,rgba(11,27,43,1)_0%,rgba(11,27,43,0.94)_34%,rgba(11,27,43,0.48)_68%,transparent_100%)] dark:max-[620px]:bg-[linear-gradient(to_top,rgba(11,27,43,0.96)_0%,rgba(11,27,43,0.72)_38%,rgba(11,27,43,0.24)_72%,transparent_100%)]"
          />
          <LanguageToggle />
          <ThemeToggle />
          <span className="absolute right-4 bottom-4 left-4 z-1 flex w-fit items-center gap-2 rounded-full border border-white/55 bg-[rgba(247,245,238,0.9)] px-3 py-2.25 text-[10px] font-bold text-[#192c3e] backdrop-blur-lg">
            <i className="size-1.75 rounded-full bg-[#43a34c] shadow-[0_0_0_3px_rgba(67,163,76,0.17)]" />
            {localize(PROFILE.availability, language)}
          </span>
        </div>
        <div className="flex min-h-0 flex-1 flex-col p-7 max-[1120px]:p-5.75 max-[620px]:min-h-0 max-[420px]:p-5">
          <p className="mb-2.75 text-[11px] font-bold tracking-[0.12em] text-[#8f9f7f] uppercase dark:text-[#b4c0a5]">
            {localize(PROFILE.role, language)}
          </p>
          <h2 className="text-[clamp(29px,2.8vw,39px)] leading-[1.02] font-bold tracking-[-0.055em] max-[1120px]:text-[31px] max-[900px]:text-[clamp(32px,6vw,48px)] max-[420px]:text-[28px]">
            {PROFILE.nameLines.map((line) => (
              <span key={line}>
                {line}
                <br />
              </span>
            ))}
          </h2>
          <p className="mt-4.25 flex items-center gap-1.75 text-[11px] text-white/80 max-[420px]:text-[10px]">
            <MapPin size={15} /> {localize(PROFILE.location, language)} · {PROFILE.timezone}
          </p>
          <ProfileViewCounter />
          <div className="mt-6 flex gap-2 max-[420px]:mt-5">
            <a className="grid size-10 place-items-center rounded-full border border-white/20 transition duration-200 hover:bg-[#f7f5ee] hover:text-[#192c3e]" href={PROFILE.linkedIn} target="_blank" rel="noreferrer" aria-label="LinkedIn"><BriefcaseBusiness size={18} /></a>
            <a className="grid size-10 place-items-center rounded-full border border-white/20 transition duration-200 hover:bg-[#f7f5ee] hover:text-[#192c3e]" href={PROFILE.github} target="_blank" rel="noreferrer" aria-label="GitHub"><GitFork size={18} /></a>
            <a className="grid size-10 place-items-center rounded-full border border-white/20 transition duration-200 hover:bg-[#f7f5ee] hover:text-[#192c3e]" href={CONTACT.whatsappHref} target="_blank" rel="noreferrer" aria-label="WhatsApp"><WhatsAppIcon size={18} /></a>
          </div>
          <button
            type="button"
            className="mt-auto flex w-full cursor-pointer items-center justify-between rounded-[14px] bg-[#f7f5ee] px-4.5 py-4 text-left text-xs font-bold text-[#282c2f] transition duration-200 hover:bg-white max-[620px]:mt-8 max-[420px]:mt-7 max-[420px]:py-3.5"
            onClick={() => setIsPreviewOpen(true)}
          >
            {localize(TEXT.profile.previewCv, language)} <Eye size={17} />
          </button>
        </div>
      </aside>

      <PdfPreviewModal
        fileUrl={PROFILE.cv}
        fileName={`${PROFILE.name} — Curriculum Vitae`}
        secondaryDownload={{
          url: PROFILE.atsCv,
          label: localize(TEXT.pdf.downloadAts, language),
        }}
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
      />
    </>
  );
}
