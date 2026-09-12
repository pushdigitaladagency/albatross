import { Reveal } from "@/components/landing/reveal";
import { AMENITIES } from "@/lib/campaign";

export function Amenities() {
  return (
    <section id="amenities" className="bg-ivory py-16 md:py-24">
      <div className="px-5 md:px-10 lg:px-14">
        <Reveal>
          <p className="kicker text-forest">Amenities</p>
          <h2 className="mt-4 max-w-2xl font-serif text-headline leading-[0.95] tracking-display text-forest">
            A community that feels complete.
          </h2>
        </Reveal>
      </div>

      <div className="amenity-track mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 md:px-10 lg:px-14">
        {AMENITIES.map((item) => (
          <figure
            key={item.title}
            className="relative w-56 shrink-0 snap-start overflow-hidden rounded-lg sm:w-64 lg:w-72"
          >
            <img src={item.image} alt={item.alt} className="aspect-video w-full object-cover" />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest/85 to-transparent p-4">
              <p className="kicker text-ivory">{item.title}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
