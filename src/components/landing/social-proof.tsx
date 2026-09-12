import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CountUp } from "@/components/landing/count-up";
import { Reveal } from "@/components/landing/reveal";
import { ACRES, IMAGES, REMAINING, SOLD, TOTAL } from "@/lib/campaign";
import { scrollToId } from "@/lib/utils";

export function SocialProof() {
  return (
    <section id="demand" className="bg-ivory px-5 py-16 md:px-10 md:py-24 lg:px-14">
      <div className="grid items-center gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <p className="kicker text-forest">Demand, already proven</p>
          <h2 className="mt-5 max-w-xl font-serif text-headline leading-[0.95] tracking-display text-forest">
            {SOLD} families have already chosen Albatross.
          </h2>
          <p className="mt-5 max-w-md text-lead leading-relaxed text-muted">
            Of {TOTAL} plots in this gated community, {SOLD} are already spoken for. Only {REMAINING} remain.
          </p>
          <Button className="mt-8" variant="solid" size="lg" onClick={() => scrollToId("final-five")}>
            See the last 5
            <ArrowRight className="size-4" strokeWidth={1.75} />
          </Button>
        </Reveal>
        <Reveal className="lg:col-span-7" delay={80}>
          <img
            src={IMAGES.aerial03}
            alt="Albatross master layout from the air"
            className="aspect-video w-full rounded-lg object-cover"
          />
        </Reveal>
      </div>
      <div className="mt-12 grid grid-cols-2 gap-8 border-t border-forest/10 pt-10 sm:grid-cols-4">
        <MiniStat n={ACRES} pad={2} label="Acres" />
        <MiniStat n={TOTAL} label="Plots" />
        <MiniStat n={SOLD} label="Sold" />
        <MiniStat n={REMAINING} pad={2} label="Remaining" gold />
      </div>
    </section>
  );
}

function MiniStat({
  n,
  label,
  pad,
  gold,
}: {
  n: number;
  pad?: number;
  label: string;
  gold?: boolean;
}) {
  return (
    <div>
      <p className={`font-serif text-display leading-none tracking-display ${gold ? "text-gold" : "text-forest"}`}>
        <CountUp to={n} pad={pad} />
      </p>
      <p className={`kicker mt-3 ${gold ? "text-gold" : "text-muted"}`}>{label}</p>
    </div>
  );
}
