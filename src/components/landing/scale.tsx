import { CountUp } from "@/components/landing/count-up";
import { Reveal } from "@/components/landing/reveal";
import { ACRES, REMAINING, SOLD, TOTAL } from "@/lib/campaign";

export function Scale() {
  return (
    <section className="bg-ivory px-5 py-16 md:px-10 md:py-20 lg:px-14">
      <Reveal>
        <p className="kicker text-forest">Project scale</p>
        <h2 className="sr-only">Six acres, one hundred and ten plots, one hundred and five sold, five remaining</h2>
      </Reveal>
      <div className="mt-10 grid gap-10 border-t border-forest/10 pt-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        <Stat n={ACRES} pad={2} label="Acres" muted />
        <Stat n={TOTAL} label="Plots" muted />
        <Stat n={SOLD} label="Sold" />
        <Stat n={REMAINING} pad={2} label="Remaining" gold />
      </div>
    </section>
  );
}

function Stat({
  n,
  label,
  pad,
  gold,
  muted,
}: {
  n: number;
  label: string;
  pad?: number;
  gold?: boolean;
  muted?: boolean;
}) {
  return (
    <Reveal>
      <p
        className={`font-serif text-display leading-none tracking-display ${
          gold ? "text-gold" : muted ? "text-forest" : "text-forest"
        }`}
      >
        <CountUp to={n} pad={pad} />
      </p>
      <p className={`kicker mt-3 ${gold ? "text-forest" : "text-muted"}`}>{label}</p>
    </Reveal>
  );
}
