import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/landing/reveal";
import { EMAIL, IMAGES, PHONE_DISPLAY, PHONE_TEL, REMAINING, SOLD } from "@/lib/campaign";
import { scrollToId } from "@/lib/utils";

export function Conversion() {
  return (
    <section className="relative isolate overflow-hidden bg-forest text-cream">
      <img
        src={IMAGES.aerial01}
        alt="Aerial of Albatross at dusk light"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-forest/78" />
      <div className="relative z-10 flex flex-col justify-end px-5 py-20 md:px-10 md:py-24 lg:px-14">
        <Reveal>
          <p className="kicker text-gold">The final five</p>
          <h2 className="mt-5 max-w-3xl font-serif text-headline leading-[0.95] tracking-display text-cream">
            {SOLD} have already chosen.
            <br />
            Only {REMAINING} remain.
          </h2>
          <p className="mt-5 max-w-md text-lead text-cream/90">
            Book your site visit before the final plots are gone.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button variant="invert" size="lg" onClick={() => scrollToId("enquiry")}>
              Book a site visit
              <ArrowRight className="size-4" strokeWidth={1.75} />
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <a href={`tel:${PHONE_TEL}`}>
                <Phone className="size-4" strokeWidth={1.75} />
                Call now
              </a>
            </Button>
          </div>
          <p className="mt-6 text-sm text-cream/90">
            <a className="hover:text-gold" href={`tel:${PHONE_TEL}`}>
              {PHONE_DISPLAY}
            </a>
            <span className="mx-3 text-cream/50">·</span>
            <a className="hover:text-gold" href={`mailto:${EMAIL}`}>
              {EMAIL}
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
