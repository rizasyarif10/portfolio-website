import { useEffect, useRef, useState } from "react";
import { LocateFixed } from "lucide-react";
import {
  AttributionControl,
  Map,
  Marker,
  Popup,
  type Map as MapLibreMap,
  type StyleSpecification,
} from "maplibre-gl";
import type { BaseMapLayer } from "../../types/map";

const SOUTH_TANGERANG: [number, number] = [106.7457983, -6.3115675];
const INITIAL_ZOOM = 9.7;

const BASE_LAYER_CONFIG: Record<
  BaseMapLayer,
  { tiles: string[]; attribution: string }
> = {
  street: {
    tiles: ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
    attribution: "",
  },
  light: {
    tiles: ["https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"],
    attribution: "",
  },
  satellite: {
    tiles: [
      "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    ],
    attribution: "",
  },
};

function createMapStyle(layer: BaseMapLayer): StyleSpecification {
  const config = BASE_LAYER_CONFIG[layer];
  return {
    version: 8,
    sources: {
      basemap: {
        type: "raster",
        tiles: config.tiles,
        tileSize: 256,
        attribution: config.attribution,
      },
    },
    layers: [{ id: "basemap", type: "raster", source: "basemap" }],
  };
}

type ContactMapProps = {
  locationLabel: string;
  availabilityText: string;
  resetLabel: string;
  baseLayer: BaseMapLayer;
};

export function ContactMap({
  locationLabel,
  availabilityText,
  resetLabel,
  baseLayer,
}: ContactMapProps) {
  const containerRef = useRef<HTMLElement>(null);
  const mapRef = useRef<MapLibreMap | null>(null);
  const markerElementRef = useRef<HTMLDivElement | null>(null);
  const popupRef = useRef<Popup | null>(null);
  const [zoomLevel, setZoomLevel] = useState(INITIAL_ZOOM);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const map = new Map({
      container: containerRef.current,
      style: createMapStyle(baseLayer),
      center: SOUTH_TANGERANG,
      zoom: INITIAL_ZOOM,
      minZoom: 3,
      cooperativeGestures: false,
      scrollZoom: true,
      attributionControl: false,
    });

    map.cooperativeGestures.disable();
    map.scrollZoom.enable();
    map.addControl(new AttributionControl({ compact: true }), "bottom-right");
    map.on("zoom", () => setZoomLevel(map.getZoom()));

    const markerElement = document.createElement("div");
    markerElement.className =
      "relative grid size-13.5 cursor-pointer place-items-center";
    markerElement.setAttribute("role", "img");
    const radarRings = Array.from({ length: 3 }, (_, index) => {
      const ring = document.createElement("span");
      const delayClass =
        index === 1
          ? "[animation-delay:-0.8s]"
          : index === 2
            ? "[animation-delay:-1.6s]"
            : "";
      ring.className = `pointer-events-none absolute inset-2.75 rounded-full border-[2.5px] border-[rgba(245,158,11,0.92)] shadow-[0_0_14px_rgba(245,158,11,0.42)] animate-[map-marker-radar_2.4s_cubic-bezier(0.16,1,0.3,1)_infinite] ${delayClass}`;
      return ring;
    });
    const markerCore = document.createElement("div");
    markerCore.className =
      "z-1 grid size-8 place-items-center rounded-full border-[2.5px] border-white bg-[linear-gradient(145deg,#6685e4,#3f5fc4)] shadow-[0_8px_22px_rgba(23,38,72,0.42),0_0_0_5px_rgba(79,111,206,0.2)]";

    const pinIcon = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg",
    );
    pinIcon.setAttribute("viewBox", "0 0 24 24");
    pinIcon.setAttribute("aria-hidden", "true");
    pinIcon.setAttribute(
      "class",
      "block size-3.75 -translate-y-px fill-none stroke-white [stroke-linecap:round] [stroke-linejoin:round] stroke-2",
    );

    const pinPath = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path",
    );
    pinPath.setAttribute(
      "d",
      "M20 10c0 5-5.5 11-7.4 12.9a.83.83 0 0 1-1.2 0C9.5 21 4 15 4 10a8 8 0 1 1 16 0Z",
    );
    const pinDot = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle",
    );
    pinDot.setAttribute("cx", "12");
    pinDot.setAttribute("cy", "10");
    pinDot.setAttribute("r", "2.5");

    pinIcon.append(pinPath, pinDot);
    markerCore.appendChild(pinIcon);
    markerElement.append(...radarRings, markerCore);

    const popup = new Popup({ offset: 32, closeButton: false });
    new Marker({ element: markerElement, anchor: "center" })
      .setLngLat(SOUTH_TANGERANG)
      .setPopup(popup)
      .addTo(map);

    mapRef.current = map;
    markerElementRef.current = markerElement;
    popupRef.current = popup;

    return () => {
      map.remove();
      mapRef.current = null;
      markerElementRef.current = null;
      popupRef.current = null;
    };
  }, []);

  useEffect(() => {
    mapRef.current?.setStyle(createMapStyle(baseLayer));
  }, [baseLayer]);

  useEffect(() => {
    markerElementRef.current?.setAttribute(
      "aria-label",
      `${locationLabel} location`,
    );

    const popupContent = document.createElement("div");
    const popupTitle = document.createElement("strong");
    const popupCopy = document.createElement("span");
    popupTitle.textContent = locationLabel;
    popupCopy.textContent = availabilityText;
    popupContent.append(popupTitle, document.createElement("br"), popupCopy);
    popupRef.current?.setDOMContent(popupContent);
  }, [availabilityText, locationLabel]);

  const changeZoom = (direction: 1 | -1) => {
    const map = mapRef.current;
    if (!map) return;

    const nextZoom = Math.min(
      map.getMaxZoom(),
      Math.max(map.getMinZoom(), map.getZoom() + direction),
    );
    map.easeTo({ zoom: nextZoom, duration: 240 });
  };

  const resetView = () => {
    mapRef.current?.easeTo({
      center: SOUTH_TANGERANG,
      zoom: INITIAL_ZOOM,
      bearing: 0,
      pitch: 0,
      duration: 600,
    });
  };

  return (
    <div className="relative h-full w-full">
      <section
        ref={containerRef}
        className="h-full w-full"
        aria-label={`Map of ${locationLabel}`}
      />
      <div className="absolute top-2.5 right-2.5 z-10 flex w-8 flex-col gap-1.5 text-[#282c2f]">
        <div className="flex flex-col items-center overflow-hidden rounded-[10px] border border-[rgba(25,44,62,0.14)] bg-white/95 shadow-[0_6px_16px_rgba(25,44,62,0.18)] backdrop-blur-xl">
          <button
            type="button"
            className="grid h-7 w-full cursor-pointer place-items-center text-base font-medium transition-colors hover:bg-[#657780] hover:text-white"
            onClick={() => changeZoom(1)}
            aria-label="Zoom in"
          >
            +
          </button>
          <output
            className="grid h-5.5 w-full place-items-center border-y border-[rgba(25,44,62,0.12)] font-mono text-[9px] font-bold tabular-nums"
            aria-label={`Current zoom ${Math.round(zoomLevel)}`}
          >
            {Math.round(zoomLevel)}
          </output>
          <button
            type="button"
            className="grid h-7 w-full cursor-pointer place-items-center text-base font-medium transition-colors hover:bg-[#657780] hover:text-white"
            onClick={() => changeZoom(-1)}
            aria-label="Zoom out"
          >
            −
          </button>
        </div>
        <button
          type="button"
          className="grid size-8 cursor-pointer place-items-center rounded-[10px] border border-[rgba(25,44,62,0.14)] bg-white/95 shadow-[0_6px_16px_rgba(25,44,62,0.18)] backdrop-blur-xl transition-colors hover:bg-[#657780] hover:text-white"
          onClick={resetView}
          aria-label={resetLabel}
          title={resetLabel}
        >
          <LocateFixed size={14} strokeWidth={2.2} />
        </button>
      </div>
    </div>
  );
}
