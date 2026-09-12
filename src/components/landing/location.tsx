import { useMemo, useState } from "react";
import { Reveal } from "@/components/landing/reveal";
import { LocationMap } from "@/components/landing/location-map";
import {
  CONNECTIVITY,
  MAP_LAT,
  MAP_LNG,
  MAP_LINK,
  SITE_OFFICE,
} from "@/lib/campaign";
import { cn, distanceKm } from "@/lib/utils";

export function Location() {
  const [activeLabel, setActiveLabel] = useState<string | null>(null);

  const places = useMemo(
    () =>
      CONNECTIVITY.map((item) => ({
        ...item,
        km: distanceKm({ lat: MAP_LAT, lng: MAP_LNG }, { lat: item.lat, lng: item.lng }),
      })),
    [],
  );

  const active = places.find((p) => p.label === activeLabel) ?? null;
  const directions = active
    ? `https://www.google.com/maps/dir/${MAP_LAT},${MAP_LNG}/${active.lat},${active.lng}`
    : MAP_LINK;

  return (
    <section id="location" className="bg-forest text-cream">
      <div className="grid lg:grid-cols-12">
        <div className="relative z-0 h-80 overflow-hidden sm:h-96 lg:col-span-6 lg:h-auto lg:min-h-full">
          <LocationMap dest={active} />
          <div className="pointer-events-none absolute inset-x-4 top-4 alba-map-overlay rounded-lg bg-forest/92 px-4 py-3 text-cream shadow-lift">
            {active ? (
              <>
                <p className="kicker text-gold">{active.label}</p>
                <p className="mt-1 font-serif text-2xl tracking-display">
                  {active.km.toFixed(1)} km from the plots
                </p>
                <p className="mt-1 text-sm uppercase tracking-label text-cream/80">
                  {active.mins} min drive
                </p>
              </>
            ) : (
              <>
                <p className="kicker text-gold">Albatross</p>
                <p className="mt-1 text-sm text-cream/85">
                  Select a destination to pin it on the map and see the distance
                </p>
              </>
            )}
          </div>
        </div>

        <div className="relative z-10 px-5 py-16 md:px-10 md:py-20 lg:col-span-6 lg:px-14 lg:pb-28">
          <Reveal>
            <p className="kicker text-gold">Location map</p>
            <h2 className="mt-5 max-w-xl font-serif text-headline leading-[0.95] tracking-display text-cream">
              A location worth arriving early for.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-cream/85">{SITE_OFFICE}</p>
            <a
              href={directions}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-block text-sm text-gold underline-offset-4 hover:underline"
            >
              {active ? `Directions to ${active.label}` : "Open in Google Maps"}
            </a>
          </Reveal>
          <div className="mt-8 divide-y divide-ivory/10 border-y border-ivory/10">
            {places.map((item) => {
              const selected = activeLabel === item.label;
              return (
                <button
                  key={item.label}
                  type="button"
                  data-location={item.label}
                  aria-pressed={selected}
                  onClick={() => setActiveLabel(selected ? null : item.label)}
                  className={cn(
                    "flex min-h-14 w-full items-center justify-between gap-6 py-4 text-left transition-colors",
                    selected ? "text-gold" : "text-cream hover:text-gold",
                  )}
                >
                  <span className="flex min-w-0 flex-col">
                    <span className="font-serif text-3xl tracking-display md:text-4xl">
                      {item.mins}
                      <span
                        className={cn(
                          "kicker ml-2",
                          selected ? "text-gold" : "text-cream/80",
                        )}
                      >
                        min
                      </span>
                    </span>
                    {selected ? (
                      <span className="mt-1 text-xs uppercase tracking-label text-gold">
                        {item.km.toFixed(1)} km from the plots
                      </span>
                    ) : null}
                  </span>
                  <span className="text-right text-sm">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
