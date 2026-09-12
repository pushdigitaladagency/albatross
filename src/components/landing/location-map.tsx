import { useEffect, useRef } from "react";
import type { Map as LeafletMap, Marker, Polyline } from "leaflet";
import { MAP_LAT, MAP_LNG } from "@/lib/campaign";

export type MapDest = {
  label: string;
  lat: number;
  lng: number;
  mins: string;
  km: number;
};

function leafletNS(mod: unknown): typeof import("leaflet") {
  const rec = mod as { default?: typeof import("leaflet") } & typeof import("leaflet");
  return rec.default ?? rec;
}

const SITE_PIN =
  '<span class="alba-pin alba-pin-site" title="Albatross"><i></i></span>';
const DEST_PIN = '<span class="alba-pin alba-pin-dest"><i></i></span>';

export function LocationMap({ dest }: { dest: MapDest | null }) {
  const mapEl = useRef<HTMLDivElement>(null);
  const mapRef = useRef<LeafletMap | null>(null);
  const LRef = useRef<typeof import("leaflet") | null>(null);
  const destMarker = useRef<Marker | null>(null);
  const kmMarker = useRef<Marker | null>(null);
  const lineRef = useRef<Polyline | null>(null);
  const destRef = useRef(dest);
  destRef.current = dest;

  function clearRoute() {
    destMarker.current?.remove();
    kmMarker.current?.remove();
    lineRef.current?.remove();
    destMarker.current = null;
    kmMarker.current = null;
    lineRef.current = null;
  }

  function applyDest(next: MapDest | null) {
    const map = mapRef.current;
    const L = LRef.current;
    if (!map || !L) return;

    const size = map.getSize();
    if (size.x < 120 || size.y < 120) {
      map.invalidateSize();
      window.setTimeout(() => applyDest(destRef.current), 120);
      return;
    }

    clearRoute();
    map.invalidateSize();

    if (!next) {
      map.setView([MAP_LAT, MAP_LNG], 14);
      return;
    }

    const destIcon = L.divIcon({
      className: "alba-marker",
      html: DEST_PIN,
      iconSize: [30, 40],
      iconAnchor: [15, 38],
      popupAnchor: [0, -36],
    });

    destMarker.current = L.marker([next.lat, next.lng], {
      icon: destIcon,
      title: next.label,
      zIndexOffset: 800,
    })
      .addTo(map)
      .bindPopup(next.label)
      .openPopup();

    lineRef.current = L.polyline(
      [
        [MAP_LAT, MAP_LNG],
        [next.lat, next.lng],
      ],
      { color: "#c6a164", weight: 4, opacity: 0.95 },
    ).addTo(map);

    const mid: [number, number] = [(MAP_LAT + next.lat) / 2, (MAP_LNG + next.lng) / 2];
    kmMarker.current = L.marker(mid, {
      icon: L.divIcon({
        className: "alba-km-label",
        html: `<span>${next.km.toFixed(1)} km · ${next.mins} min</span>`,
        iconSize: [160, 32],
        iconAnchor: [80, 16],
      }),
      interactive: false,
      keyboard: false,
      zIndexOffset: 900,
    }).addTo(map);

    map.fitBounds(
      [
        [MAP_LAT, MAP_LNG],
        [next.lat, next.lng],
      ],
      { padding: [72, 72], maxZoom: 12, animate: false },
    );
  }

  useEffect(() => {
    if (!mapEl.current || mapRef.current) return;
    let cancelled = false;
    let ro: ResizeObserver | null = null;
    const timers: number[] = [];

    void import("leaflet")
      .then((mod) => {
        if (cancelled || !mapEl.current) return;
        const L = leafletNS(mod);
        LRef.current = L;

        const map = L.map(mapEl.current, {
          scrollWheelZoom: false,
          zoomControl: true,
        }).setView([MAP_LAT, MAP_LNG], 14);

        L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
          attribution: "&copy; OpenStreetMap &copy; CARTO",
          subdomains: "abcd",
          maxZoom: 19,
          keepBuffer: 4,
        }).addTo(map);

        const siteIcon = L.divIcon({
          className: "alba-marker",
          html: SITE_PIN,
          iconSize: [30, 40],
          iconAnchor: [15, 38],
          popupAnchor: [0, -36],
        });

        L.marker([MAP_LAT, MAP_LNG], { icon: siteIcon, title: "Albatross" })
          .addTo(map)
          .bindPopup("Albatross — Peedampalli");

        mapRef.current = map;

        const sync = () => {
          if (cancelled || !mapRef.current) return;
          mapRef.current.invalidateSize();
          applyDest(destRef.current);
        };

        ro = new ResizeObserver(() => {
          map.invalidateSize();
        });
        ro.observe(mapEl.current);
        timers.push(window.setTimeout(sync, 0));
        timers.push(window.setTimeout(sync, 200));
        timers.push(window.setTimeout(sync, 600));
      })
      .catch(() => {
        /* overlay + list still show distance if tiles fail */
      });

    return () => {
      cancelled = true;
      ro?.disconnect();
      timers.forEach((id) => window.clearTimeout(id));
      clearRoute();
      mapRef.current?.remove();
      mapRef.current = null;
      LRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    applyDest(dest);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dest]);

  return <div ref={mapEl} className="h-full min-h-80 w-full" data-map="albatross" />;
}
