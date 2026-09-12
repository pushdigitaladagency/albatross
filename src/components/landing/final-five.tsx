import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PlotGrid } from "@/components/landing/plot-grid";
import { Reveal } from "@/components/landing/reveal";
import { IMAGES, REMAINING, SOLD } from "@/lib/campaign";
import { scrollToId } from "@/lib/utils";

export function FinalFive() {
  return (
    <section id="final-five" className="bg-ivory-deep px-5 py-16 md:px-10 md:py-24 lg:px-14">
      <div className="grid items-center gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-6">
          <p className="kicker text-forest">Available now</p>
          <h2 className="mt-5 font-serif text-headline leading-[0.95] tracking-display text-forest">
            Your window is getting smaller.
          </h2>
          <p className="mt-5 max-w-md text-lead leading-relaxed text-muted">
            With {SOLD} plots already sold, only five opportunities remain at Albatross. Gold squares mark the last 5.
          </p>
          <p className="mt-6 font-serif text-5xl tracking-display text-gold md:text-6xl">
            0{REMAINING} <span className="text-2xl text-muted">plots left</span>
          </p>
          <Button className="mt-8" size="lg" onClick={() => scrollToId("enquiry")}>
            Request availability
            <ArrowRight className="size-4" strokeWidth={1.75} />
          </Button>
        </Reveal>

        <Reveal className="lg:col-span-6" delay={80}>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
            <img
              src={IMAGES.aerialLayout}
              alt="Albatross plotted layout seen from above"
              className="h-48 w-full rounded-lg object-cover sm:h-56 sm:w-64 sm:shrink-0"
            />
            <div>
              <p className="kicker mb-3 text-gold">Last 5 highlighted</p>
              <PlotGrid />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
