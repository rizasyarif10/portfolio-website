import { lazy, Suspense, useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Layers3,
  Mail,
  Map as MapIcon,
  MapPinned,
  Satellite,
  SunMedium,
  type LucideIcon,
} from "lucide-react";
import { CONTACT, PROFILE, TEXT } from "../../constants/portfolio";
import { useLanguage } from "../../contexts/LanguageContext";
import type { BaseMapLayer } from "../../types/map";
import { localize } from "../../utils/localize";
import { SectionTitle } from "../ui/SectionTitle";
import { WhatsAppIcon } from "../ui/WhatsAppIcon";

const ContactMap = lazy(() =>
  import("../maps/ContactMap").then((module) => ({
    default: module.ContactMap,
  })),
);

export function ContactSection() {
  const { language } = useLanguage();
  const [baseLayer, setBaseLayer] = useState<BaseMapLayer>("light");
  const [isLayerMenuOpen, setIsLayerMenuOpen] = useState(false);
  const layerControlRef = useRef<HTMLDivElement>(null);
  const location = localize(PROFILE.location, language);
  const mapLayers: readonly {
    value: BaseMapLayer;
    label: string;
    icon: LucideIcon;
    previewClass: string;
  }[] = [
    {
      value: "light",
      label: localize(TEXT.contact.lightLayer, language),
      icon: SunMedium,
      previewClass:
        "text-[#52606b] bg-[linear-gradient(28deg,transparent_43%,#c0c8cd_44%_49%,transparent_50%),#e9edef]",
    },
    {
      value: "street",
      label: localize(TEXT.contact.streetLayer, language),
      icon: MapIcon,
      previewClass:
        "text-[#657780] bg-[linear-gradient(35deg,transparent_43%,rgba(143,159,127,0.75)_44%_48%,transparent_49%),linear-gradient(145deg,#dbe8d0_0_38%,#d8e6ee_39%_62%,#eee8d9_63%)]",
    },
    {
      value: "satellite",
      label: localize(TEXT.contact.satelliteLayer, language),
      icon: Satellite,
      previewClass:
        "text-white bg-[linear-gradient(32deg,transparent_42%,rgba(209,194,151,0.72)_43%_49%,transparent_50%),linear-gradient(145deg,#446b55_0_38%,#36596c_39%_62%,#6e6c4d_63%)]",
    },
  ];

  useEffect(() => {
    if (!isLayerMenuOpen) return;

    const closeOnOutsideClick = (event: PointerEvent) => {
      if (!layerControlRef.current?.contains(event.target as Node)) {
        setIsLayerMenuOpen(false);
      }
    };

    document.addEventListener("pointerdown", closeOnOutsideClick);
    return () =>
      document.removeEventListener("pointerdown", closeOnOutsideClick);
  }, [isLayerMenuOpen]);

  return (
    <section id="contact" className="scroll-mt-0 border-b border-[rgba(25,44,62,0.12)] px-[clamp(38px,5vw,72px)] py-[76px] max-[620px]:px-[25px] max-[620px]:py-[62px] max-[420px]:px-4 max-[420px]:py-[52px] dark:border-white/[0.11]">
      <SectionTitle
        number="05"
        title={localize(TEXT.contact.title, language)}
        note={localize(TEXT.contact.note, language)}
      />
      <div className="overflow-hidden rounded-[24px] border border-[#7189df]/45 bg-[#252a2d] dark:border-[#8fb7ff]/30 dark:bg-[#0d2238]">
        <header className="flex min-h-[74px] items-center justify-between gap-4 px-5 py-[14px] text-[#f2f4ef] max-[620px]:flex-col max-[620px]:items-start max-[620px]:gap-2 max-[620px]:px-4 max-[620px]:py-4 max-[420px]:px-3.5 max-[420px]:py-3.5">
          <div className="relative pl-4 before:absolute before:top-0 before:bottom-0 before:left-0 before:w-[2px] before:rounded-full before:bg-[linear-gradient(to_bottom,#5874d8,#f2a541)]">
            <strong className="block text-xs font-bold">
              {localize(TEXT.contact.based, language)} {location}, Banten,
              Indonesia
            </strong>
            <p className="mt-1 text-[10px] text-[rgba(242,244,239,0.58)]">{localize(TEXT.contact.remote, language)}</p>
          </div>
          <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 text-[9px] font-extrabold tracking-[0.08em] text-[#b7c3a8] uppercase">
            <MapPinned size={15} /> MapLibre
          </span>
        </header>
        <div className="relative h-[310px] overflow-hidden border-t border-white/10 max-[420px]:h-[280px]">
          <Suspense
            fallback={
              <div className="grid h-full place-items-center bg-[#dedbd2] text-xs font-semibold text-[rgba(25,44,62,0.5)] dark:bg-[#0c141c] dark:text-[rgba(237,241,239,0.5)]">
                {localize(TEXT.contact.mapLoading, language)}
              </div>
            }
          >
            <ContactMap
              locationLabel={location}
              availabilityText={localize(TEXT.contact.mapPopup, language)}
              baseLayer={baseLayer}
            />
          </Suspense>
          <div
            ref={layerControlRef}
            className="absolute right-3 bottom-3 z-[5] flex flex-row-reverse items-end gap-2 max-[620px]:right-2.5 max-[620px]:bottom-8 max-[620px]:max-w-[calc(100%_-_20px)]"
          >
            <button
              type="button"
              className={`grid size-[38px] shrink-0 cursor-pointer place-items-center rounded-[14px] border border-[rgba(25,44,62,0.14)] shadow-[0_10px_30px_rgba(25,44,62,0.24)] backdrop-blur-xl transition duration-150 ${
                isLayerMenuOpen
                  ? "rotate-[4deg] bg-[#657780] text-white"
                  : "bg-white/95 text-[#282c2f] hover:bg-[#657780] hover:text-white"
              }`}
              onClick={() => setIsLayerMenuOpen((isOpen) => !isOpen)}
              aria-label={localize(TEXT.contact.layerSelector, language)}
              aria-expanded={isLayerMenuOpen}
              aria-controls="map-layer-options"
            >
              <Layers3 size={19} />
            </button>
            {isLayerMenuOpen && (
              <div
                id="map-layer-options"
                className="flex gap-[3px] rounded-2xl border border-[rgba(25,44,62,0.12)] bg-white/90 p-[5px] shadow-[0_10px_30px_rgba(25,44,62,0.24)] backdrop-blur-xl [animation:map-layer-enter_160ms_ease-out]"
                role="group"
                aria-label={localize(TEXT.contact.layerSelector, language)}
              >
                {mapLayers.map((layer) => {
                  const Icon = layer.icon;
                  return (
                    <button
                      key={layer.value}
                      type="button"
                      data-layer={layer.value}
                      className={`flex min-h-[49px] w-[54px] cursor-pointer flex-col items-center justify-center gap-[5px] rounded-[11px] p-1 transition duration-150 max-[620px]:w-[52px] ${
                        baseLayer === layer.value
                          ? "bg-white text-[#192c3e] shadow-[inset_0_0_0_2px_#657780]"
                          : "bg-transparent text-[rgba(25,44,62,0.58)] hover:bg-[rgba(25,44,62,0.06)] hover:text-[#192c3e]"
                      }`}
                      onClick={() => setBaseLayer(layer.value)}
                      aria-pressed={baseLayer === layer.value}
                    >
                      <span className={`grid h-[25px] w-11 place-items-center overflow-hidden rounded-lg ${layer.previewClass}`}>
                        <Icon size={17} />
                      </span>
                      <small className="max-w-full overflow-hidden text-[8px] leading-none font-bold text-ellipsis whitespace-nowrap">{layer.label}</small>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-3 max-[620px]:grid-cols-1">
        <a className="group grid grid-cols-[38px_1fr_18px] items-center gap-3 rounded-[18px] border border-[rgba(25,44,62,0.11)] bg-white/45 p-4 transition-[transform,border-color,background-color,box-shadow] duration-[420ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform hover:-translate-y-0.5 hover:border-[#5874d8]/30 hover:bg-white/75 hover:shadow-[0_14px_30px_rgba(25,44,62,0.07)] motion-reduce:transform-none motion-reduce:transition-none max-[420px]:p-3.5 dark:border-white/10 dark:bg-white/[0.035] dark:text-[rgba(237,241,239,0.68)] dark:hover:border-[#aebeff]/30 dark:hover:bg-white/[0.06] dark:hover:shadow-[0_14px_30px_rgba(0,0,0,0.14)]" href={`mailto:${CONTACT.email}`}>
          <span className="grid size-[38px] place-items-center rounded-[12px] border border-[#5874d8]/15 bg-[#5874d8]/[0.07] text-[#5874d8] dark:border-[#aebeff]/15 dark:bg-[#aebeff]/[0.07] dark:text-[#aebeff]">
            <Mail size={17} />
          </span>
          <span className="text-[9px] font-bold tracking-[0.08em] text-[rgba(25,44,62,0.48)] uppercase dark:text-[rgba(237,241,239,0.46)]">
            {localize(TEXT.contact.email, language)}
            <strong className="mt-[3px] block overflow-hidden text-[11px] font-semibold tracking-normal text-ellipsis whitespace-nowrap text-[#192c3e] normal-case dark:text-[#edf1ef]">{CONTACT.email}</strong>
          </span>
          <ArrowUpRight size={16} className="transition-transform duration-[420ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
        <a
          className="group grid grid-cols-[38px_1fr_18px] items-center gap-3 rounded-[18px] border border-[rgba(25,44,62,0.11)] bg-white/45 p-4 transition-[transform,border-color,background-color,box-shadow] duration-[420ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform hover:-translate-y-0.5 hover:border-[#5874d8]/30 hover:bg-white/75 hover:shadow-[0_14px_30px_rgba(25,44,62,0.07)] motion-reduce:transform-none motion-reduce:transition-none max-[420px]:p-3.5 dark:border-white/10 dark:bg-white/[0.035] dark:text-[rgba(237,241,239,0.68)] dark:hover:border-[#aebeff]/30 dark:hover:bg-white/[0.06] dark:hover:shadow-[0_14px_30px_rgba(0,0,0,0.14)]"
          href={CONTACT.whatsappHref}
          target="_blank"
          rel="noreferrer"
        >
          <span className="grid size-[38px] place-items-center rounded-[12px] border border-[#5874d8]/15 bg-[#5874d8]/[0.07] text-[#5874d8] dark:border-[#aebeff]/15 dark:bg-[#aebeff]/[0.07] dark:text-[#aebeff]">
            <WhatsAppIcon size={17} />
          </span>
          <span className="text-[9px] font-bold tracking-[0.08em] text-[rgba(25,44,62,0.48)] uppercase dark:text-[rgba(237,241,239,0.46)]">
            {localize(TEXT.contact.phone, language)}
            <strong className="mt-[3px] block overflow-hidden text-[11px] font-semibold tracking-normal text-ellipsis whitespace-nowrap text-[#192c3e] normal-case dark:text-[#edf1ef]">{CONTACT.phoneDisplay}</strong>
          </span>
          <ArrowUpRight size={16} className="transition-transform duration-[420ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </div>
      <footer className="mt-[45px] border-t border-[rgba(25,44,62,0.1)] pt-5 text-center font-mono text-[9px] tracking-[0.04em] text-[rgba(25,44,62,0.43)] dark:border-white/[0.09] dark:text-[rgba(237,241,239,0.46)]">
        © 2026 {PROFILE.name}
      </footer>
    </section>
  );
}
