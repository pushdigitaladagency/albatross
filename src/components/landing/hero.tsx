import { ArrowDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CountUp } from "@/components/landing/count-up";
import { IMAGES, REMAINING, SOLD } from "@/lib/campaign";
import { scrollToId } from "@/lib/utils";

export function Hero() {
  return (
    <section id="top" className="relative isolate min-h-dvh overflow-hidden bg-forest text-cream">
      <div className="absolute inset-0">
        <video
          className="hero-media h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={IMAGES.hero}
          aria-label="Aerial film of Albatross, Coimbatore"
        >
          <source src={IMAGES.film} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-forest/70 via-forest/35 to-forest/25" />
        <div className="absolute inset-0 bg-gradient-to-b from-forest/55 via-forest/20 to-forest/82" />
      </div>

      <div className="hero-copy relative z-10 flex min-h-dvh flex-col justify-end px-5 pb-16 pt-28 md:px-10 md:pb-20 lg:px-14">
        <p className="kicker mb-5 text-gold">Final release</p>

        <h1 className="max-w-5xl font-serif text-display leading-[0.9] tracking-display text-cream">
          105 plots sold.
          <br />
          Only 5 remain.
        </h1>

        <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="font-serif text-subhead italic text-cream">Albatross</p>
            <p className="mt-1 max-w-md text-sm text-cream/90 md:text-base">
              Premium plotted community · Pattanam / Peedampalli, Coimbatore
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button variant="invert" size="lg" onClick={() => scrollToId("enquiry")}>
                Book a site visit
                <ArrowRight className="size-4" strokeWidth={1.75} />
              </Button>
              <Button variant="ghost" size="lg" onClick={() => scrollToId("final-five")}>
                View the last 5 plots
                <ArrowDown className="size-4" strokeWidth={1.75} />
              </Button>
            </div>
          </div>

          <div className="flex gap-10 md:gap-16">
            <div>
              <p className="font-serif text-display leading-none tracking-display text-cream">
                <CountUp to={SOLD} />
              </p>
              <p className="kicker mt-2 text-cream/90">Plots sold</p>
            </div>
            <div>
              <p className="font-serif text-display leading-none tracking-display text-gold">
                <CountUp to={REMAINING} pad={2} />
              </p>
              <p className="kicker mt-2 text-gold">Plots remaining</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
