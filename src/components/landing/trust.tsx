import { Reveal } from "@/components/landing/reveal";
import { TRUST } from "@/lib/campaign";

export function Trust() {
  return (
    <section id="trust" className="bg-ivory px-5 py-16 md:px-10 md:py-24 lg:px-14">
      <Reveal>
        <p className="kicker text-forest">The developer</p>
        <h2 className="mt-5 max-w-3xl font-serif text-headline leading-[0.95] tracking-display text-forest">
          Why buy from Sri Baby Properties?
        </h2>
        <p className="mt-5 max-w-xl text-lead leading-relaxed text-muted">
          Three decades of Coimbatore enterprise — textiles, energy, then land — brought to families through DTCP
          and RERA-approved plotted communities. Build with restraint. Communicate with clarity. Deliver with care.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-8 border-t border-forest/10 pt-10 md:grid-cols-3">
        {TRUST.map((item, i) => (
          <Reveal key={item.label} delay={i * 80}>
            <p className="font-serif text-display leading-none tracking-display text-forest">{item.value}</p>
            <p className="kicker mt-3 text-muted">{item.label}</p>
          </Reveal>
        ))}
      </div>
      <p className="mt-10 max-w-xl text-xs leading-relaxed text-muted">
        RERA: TN/11/Layout/3726/2024 · TN/11/Layout/3931/2024. DTCP-approved layout at Peedampalli Village, Sulur
        Taluk, Coimbatore.
      </p>
    </section>
  );
}
