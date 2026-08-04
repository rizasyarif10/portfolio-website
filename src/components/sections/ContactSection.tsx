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
  const activeLayerLabel =
    mapLayers.find((layer) => layer.value === baseLayer)?.label ??
    localize(TEXT.contact.lightLayer, language);

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
    <section id="contact" className="scroll-mt-0 border-b border-[rgba(25,44,62,0.12)] px-[clamp(38px,5vw,72px)] py-19 max-[620px]:px-6.25 max-[620px]:py-15.5 max-[420px]:px-4 max-[420px]:py-13 dark:border-white/11">
      <SectionTitle
        number="05"
        title={localize(TEXT.contact.title, language)}
        note={localize(TEXT.contact.note, language)}
      />
      <div className="grid min-h-107.5 grid-cols-[minmax(235px,0.72fr)_minmax(0,1.45fr)] overflow-hidden rounded-[28px] border border-[rgba(25,44,62,0.13)] bg-white/45 shadow-[0_22px_55px_rgba(25,44,62,0.08)] max-[760px]:grid-cols-1 max-[420px]:rounded-[22px] dark:border-[#8fb7ff]/15 dark:bg-white/[0.035] dark:shadow-[0_24px_60px_rgba(2,8,18,0.28)]">
        <div className="relative flex min-h-0 flex-col overflow-hidden bg-[#192c3e] p-6 text-white max-[900px]:p-5 max-[760px]:order-2 max-[760px]:min-h-0 max-[420px]:p-4 dark:bg-[#071727]">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -right-24 size-64 rounded-full border border-[#8fb7ff]/15 bg-[radial-gradient(circle,rgba(88,116,216,0.24),transparent_65%)]"
          />

          <div className="relative z-1">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-3 py-2 text-[8px] font-bold tracking-[0.12em] text-[#b8c9e8] uppercase">
              <span className="size-1.5 rounded-full bg-[#57c86b] shadow-[0_0_0_3px_rgba(87,200,107,0.16)]" />
              {localize(PROFILE.availability, language)}
            </span>
            <div className="mt-7 grid size-11 place-items-center rounded-[14px] border border-[#8fb7ff]/20 bg-[#8fb7ff]/10 text-[#b9d0ff]">
              <MapPinned size={20} strokeWidth={1.8} />
            </div>
            <p className="mt-5 font-mono text-[8px] font-bold tracking-[0.13em] text-[#8fa6ba] uppercase">
              {localize(TEXT.contact.based, language)}
            </p>
            <h3 className="mt-2 max-w-62.5 text-[25px] leading-[1.08] font-bold tracking-[-0.045em] max-[420px]:text-[22px]">
              {location}, Banten
            </h3>
            <p className="mt-3 max-w-71.25 text-[11px] leading-[1.7] text-white/56">
              {localize(TEXT.contact.remote, language)}
            </p>
          </div>

          <div className="relative z-1 mt-auto grid grid-cols-1 gap-2 pt-7 max-[760px]:grid-cols-2 max-[420px]:grid-cols-1">
            <a
              className="group grid grid-cols-[34px_1fr_16px] items-center gap-2.5 rounded-[15px] border border-white/10 bg-white/5.5 p-3 transition-[border-color,background-color] duration-300 hover:border-[#8fb7ff]/35 hover:bg-white/10"
              href={`mailto:${CONTACT.email}`}
            >
              <span className="grid size-8.5 place-items-center rounded-[10px] bg-[#8fb7ff]/12 text-[#b9d0ff]">
                <Mail size={15} />
              </span>
              <span className="min-w-0 text-[8px] font-bold tracking-widest text-white/42 uppercase">
                {localize(TEXT.contact.email, language)}
                <strong className="mt-1 block overflow-hidden text-[10px] font-semibold tracking-normal text-ellipsis whitespace-nowrap text-white normal-case">
                  {CONTACT.email}
                </strong>
              </span>
              <ArrowUpRight size={14} className="text-white/45 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
            </a>
            <a
              className="group grid grid-cols-[34px_1fr_16px] items-center gap-2.5 rounded-[15px] border border-white/10 bg-white/5.5 p-3 transition-[border-color,background-color] duration-300 hover:border-[#8fb7ff]/35 hover:bg-white/10"
              href={CONTACT.whatsappHref}
              target="_blank"
              rel="noreferrer"
            >
              <span className="grid size-8.5 place-items-center rounded-[10px] bg-[#8fb7ff]/12 text-[#b9d0ff]">
                <WhatsAppIcon size={15} />
              </span>
              <span className="min-w-0 text-[8px] font-bold tracking-widest text-white/42 uppercase">
                {localize(TEXT.contact.phone, language)}
                <strong className="mt-1 block overflow-hidden text-[10px] font-semibold tracking-normal text-ellipsis whitespace-nowrap text-white normal-case">
                  {CONTACT.phoneDisplay}
                </strong>
              </span>
              <ArrowUpRight size={14} className="text-white/45 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
            </a>
          </div>
        </div>

        <div className="relative min-h-107.5 overflow-hidden max-[760px]:order-1 max-[760px]:min-h-72.5 max-[420px]:min-h-65">
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
              resetLabel={localize(TEXT.contact.resetMap, language)}
              baseLayer={baseLayer}
            />
          </Suspense>
          <div className="pointer-events-none absolute top-3 left-3 z-4 flex max-w-[calc(100%-70px)] items-center gap-2 rounded-[13px] border border-[rgba(25,44,62,0.12)] bg-white/90 px-3 py-2.5 text-[#192c3e] shadow-[0_8px_24px_rgba(25,44,62,0.14)] backdrop-blur-xl">
            <span className="grid size-7 shrink-0 place-items-center rounded-[9px] bg-[#5874d8]/10 text-[#5874d8]">
              <MapPinned size={14} />
            </span>
            <span className="min-w-0">
              <strong className="block truncate text-[9px] font-bold">
                {location} · Indonesia
              </strong>
              <small className="mt-0.5 block truncate text-[8px] font-semibold tracking-[0.08em] text-[rgba(25,44,62,0.46)] uppercase">
                MapLibre · {activeLayerLabel}
              </small>
            </span>
          </div>
          <div
            ref={layerControlRef}
            className="absolute right-3 bottom-3 z-5 flex flex-row-reverse items-end gap-2 max-[620px]:right-2.5 max-[620px]:bottom-8 max-[620px]:max-w-[calc(100%-20px)]"
          >
            <button
              type="button"
              className={`grid size-9.5 shrink-0 cursor-pointer place-items-center rounded-[14px] border border-[rgba(25,44,62,0.14)] shadow-[0_10px_30px_rgba(25,44,62,0.24)] backdrop-blur-xl transition duration-150 ${
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
                className="flex gap-0.75 rounded-2xl border border-[rgba(25,44,62,0.12)] bg-white/90 p-1.25 shadow-[0_10px_30px_rgba(25,44,62,0.24)] backdrop-blur-xl animate-[map-layer-enter_160ms_ease-out]"
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
                      className={`flex min-h-12.25 w-13.5 cursor-pointer flex-col items-center justify-center gap-1.25 rounded-[11px] p-1 transition duration-150 max-[620px]:w-13 ${
                        baseLayer === layer.value
                          ? "bg-white text-[#192c3e] shadow-[inset_0_0_0_2px_#657780]"
                          : "bg-transparent text-[rgba(25,44,62,0.58)] hover:bg-[rgba(25,44,62,0.06)] hover:text-[#192c3e]"
                      }`}
                      onClick={() => setBaseLayer(layer.value)}
                      aria-pressed={baseLayer === layer.value}
                    >
                      <span className={`grid h-6.25 w-11 place-items-center overflow-hidden rounded-lg ${layer.previewClass}`}>
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
      <footer className="mt-9 border-t border-[rgba(25,44,62,0.1)] pt-5 text-center font-mono text-[9px] tracking-[0.04em] text-[rgba(25,44,62,0.43)] dark:border-white/9 dark:text-[rgba(237,241,239,0.46)]">
        © 2026 {PROFILE.name}
      </footer>
    </section>
  );
}
