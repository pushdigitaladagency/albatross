import { Reveal } from "@/components/landing/reveal";
import { WHY } from "@/lib/campaign";

export function Why() {
  return (
    <section id="why" className="bg-ivory px-5 py-16 md:px-10 md:py-24 lg:px-14">
      <Reveal>
        <p className="kicker text-forest">The reasons</p>
        <h2 className="mt-5 max-w-3xl font-serif text-headline leading-[0.95] tracking-display text-forest">
          Why are buyers choosing Albatross?
        </h2>
      </Reveal>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {WHY.map((item, i) => (
          <Reveal key={item.n} delay={i * 40}>
            <article className="overflow-hidden rounded-lg border border-forest/10 bg-cream">
              <img src={item.image} alt={item.alt} className="aspect-video w-full object-cover" />
              <div className="p-5">
                <p className="font-serif text-xl text-gold">{item.n}</p>
                <h3 className="mt-2 font-serif text-2xl leading-tight tracking-display text-forest">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink">{item.copy}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
