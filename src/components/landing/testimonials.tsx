import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Reveal } from "@/components/landing/reveal";
import { REMAINING, TESTIMONIALS } from "@/lib/campaign";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [video, setVideo] = useState<string | null>(null);
  const item = TESTIMONIALS[index] ?? TESTIMONIALS[0];

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % TESTIMONIALS.length);
    }, 9000);
    return () => window.clearInterval(id);
  }, []);

  if (!item) return null;

  return (
    <section id="stories" className="bg-ivory-deep px-5 py-16 md:px-10 md:py-24 lg:px-14">
      <Reveal>
        <p className="kicker text-forest">From those who already own</p>
        <h2 className="mt-5 font-serif text-headline leading-[0.95] tracking-display text-forest">
          105 buyers started here.
        </h2>
      </Reveal>

      <div className="mt-12 grid items-center gap-10 lg:grid-cols-12">
        <button
          type="button"
          onClick={() => setVideo(item.video)}
          className="relative overflow-hidden rounded-lg lg:col-span-5"
          aria-label={`Watch ${item.name}'s story`}
        >
          <img src={item.image} alt={item.name} className="aspect-video w-full object-cover" />
          <span className="kicker absolute bottom-3 left-3 rounded-lg bg-forest/85 px-3 py-1.5 text-cream">Watch the story</span>
        </button>

        <div className="lg:col-span-7">
          <blockquote className="font-serif text-subhead leading-snug tracking-display text-forest italic">
            “{item.quote}”
          </blockquote>
          <p className="mt-3 text-sm font-medium text-ink">{item.name}</p>
          <p className="kicker mt-1 text-muted">{item.place}</p>
          <p className="mt-4 text-sm text-ink">Only {REMAINING} opportunities remain.</p>

          <div className="mt-5 flex items-center gap-3">
            <button
              type="button"
              aria-label="Previous testimonial"
              className="flex size-9 items-center justify-center rounded-lg border border-forest/20 text-forest transition-colors hover:border-forest"
              onClick={() => setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              type="button"
              aria-label="Next testimonial"
              className="flex size-9 items-center justify-center rounded-lg border border-forest/20 text-forest transition-colors hover:border-forest"
              onClick={() => setIndex((i) => (i + 1) % TESTIMONIALS.length)}
            >
              <ChevronRight className="size-4" />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((t, i) => (
                <button
                  key={t.name}
                  type="button"
                  aria-label={`Show ${t.name}`}
                  className={`h-1.5 w-8 ${i === index ? "bg-gold" : "bg-forest/20"}`}
                  onClick={() => setIndex(i)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <Dialog open={Boolean(video)} onOpenChange={(o) => !o && setVideo(null)}>
        <DialogContent aria-describedby={undefined}>
          <DialogTitle className="sr-only">Customer story</DialogTitle>
          {video ? (
            <iframe
              title="Customer testimonial"
              src={`${video}?autoplay=1`}
              className="aspect-video w-full"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          ) : null}
        </DialogContent>
      </Dialog>
    </section>
  );
}
