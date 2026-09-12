import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PlotGrid } from "@/components/landing/plot-grid";
import { Reveal } from "@/components/landing/reveal";
import { IMAGES, REMAINING, SOLD, TOTAL } from "@/lib/campaign";
import { scrollToId } from "@/lib/utils";

export function Scarcity() {
  return (
    <section id="final-five" className="bg-ivory-deep px-5 py-16 text-ink md:px-10 md:py-24 lg:px-14">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
        <Reveal className="max-w-2xl">
          <p className="kicker text-forest">The final inventory</p>
          <h2 className="mt-5 font-serif text-headline leading-[0.95] tracking-display text-forest">
            Your window is getting smaller.
          </h2>
          <p className="mt-5 max-w-xl text-lead leading-relaxed text-muted">
            With {SOLD} plots already sold, only five opportunities remain at Albatross. Gold squares
            mark the last 5.
          </p>
        </Reveal>
        <Reveal className="flex flex-col gap-5 sm:flex-row sm:items-end sm:gap-8" delay={40}>
          <p className="font-serif text-5xl tracking-display text-gold md:text-6xl">
            0{REMAINING} <span className="text-2xl text-muted">plots left</span>
          </p>
          <Button size="lg" onClick={() => scrollToId("enquiry")}>
            Request availability
            <ArrowRight className="size-4" strokeWidth={1.75} />
          </Button>
        </Reveal>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:gap-8">
        <Reveal>
          <img
            src={IMAGES.aerialLayout}
            alt="Albatross plotted layout seen from above"
            className="aspect-square h-auto w-full rounded-lg object-cover"
          />
        </Reveal>
        <Reveal delay={80}>
          <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-ivory">
            <div className="absolute inset-0 flex flex-col p-5 md:p-7">
              <p className="kicker mb-4 shrink-0 text-gold">Last 5 highlighted</p>
              <PlotGrid />
            </div>
          </div>
        </Reveal>
      </div>

      <p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted">
        Albatross is now in its final inventory stage. {SOLD} of {TOTAL} plots have already been sold.
        What remains is not a launch — it is a last allocation.
      </p>
    </section>
  );
}
