import { useState } from "react";
import { Play } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Reveal } from "@/components/landing/reveal";
import { IMAGES, SOLD } from "@/lib/campaign";

export function Film() {
  const [open, setOpen] = useState(false);

  return (
    <section id="film" className="relative isolate overflow-hidden bg-forest text-cream">
      <img
        src={IMAGES.aerial01}
        alt="Cinematic aerial of Albatross"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-forest/70" />
      <div className="relative z-10 flex flex-col items-center justify-center px-5 py-20 text-center md:py-28">
        <Reveal>
          <p className="kicker text-gold">Project film</p>
          <h2 className="mt-5 max-w-3xl font-serif text-headline leading-[0.95] tracking-display text-cream">
            See why {SOLD} buyers chose Albatross.
          </h2>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="mt-8 inline-flex items-center gap-4 text-ivory transition-opacity hover:opacity-80"
          >
            <span className="flex size-16 items-center justify-center rounded-full border border-ivory/40">
              <Play className="size-5 fill-ivory" strokeWidth={0} />
            </span>
            <span className="kicker">Watch project film</span>
          </button>
        </Reveal>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent aria-describedby={undefined}>
          <DialogTitle className="sr-only">Albatross project film</DialogTitle>
          <video
            className="aspect-video w-full bg-ink"
            controls
            autoPlay
            playsInline
            poster={IMAGES.hero}
          >
            <source src={IMAGES.film} type="video/mp4" />
          </video>
        </DialogContent>
      </Dialog>
    </section>
  );
}
