import { useEffect, useState } from "react";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PHONE_TEL, REMAINING, WHATSAPP_URL } from "@/lib/campaign";
import { scrollToId } from "@/lib/utils";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.5 2 2 6.48 2 12.02c0 1.77.46 3.5 1.34 5.02L2 22l5.1-1.34A10 10 0 0 0 12.04 22C17.6 22 22.1 17.52 22.1 12s-4.5-9.09-3.05-7.09zM12.04 20.15c-1.5 0-2.97-.4-4.26-1.16l-.3-.18-3.03.8.81-2.95-.2-.31A8.13 8.13 0 0 1 3.9 12.02c0-4.48 3.66-8.13 8.15-8.13 2.18 0 4.22.85 5.76 2.38a8.1 8.1 0 0 1 2.39 5.75c-.01 4.48-3.67 8.13-8.16 8.13zm4.47-6.09c-.24-.12-1.45-.71-1.67-.8-.22-.08-.39-.12-.55.12-.16.24-.63.8-.78.96-.14.16-.29.18-.53.06-.24-.12-1.02-.37-1.94-1.2-.72-.64-1.2-1.42-1.34-1.66-.14-.24-.02-.37.1-.49.11-.11.24-.29.37-.43.12-.14.16-.24.24-.41.08-.16.04-.31-.02-.43-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.43.06-.65.31-.22.24-.86.84-.86 2.05 0 1.21.88 2.38 1 2.54.12.16 1.77 2.7 4.29 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.45-.59 1.65-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.47-.28z" />
    </svg>
  );
}

function shouldShowBar() {
  if (window.scrollY <= window.innerHeight * 0.7) return false;
  const footer = document.getElementById("site-footer");
  if (!footer) return true;
  return footer.getBoundingClientRect().top > window.innerHeight - 16;
}

export function StickyBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(shouldShowBar());
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  if (!show) return null;

  return (
    <>
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 hidden justify-end p-6 md:flex">
        <div className="pointer-events-auto flex items-center gap-4 rounded-lg border border-gold/40 bg-forest px-4 py-2.5 text-cream shadow-lift">
          <p className="kicker text-gold">{REMAINING} plots remain</p>
          <Button variant="invert" size="sm" onClick={() => scrollToId("enquiry")}>
            Book a site visit
            <ArrowRight className="size-3.5" />
          </Button>
        </div>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-forest/15 bg-ivory pb-[env(safe-area-inset-bottom)] md:hidden">
        <div className="grid grid-cols-3">
          <a
            href={`tel:${PHONE_TEL}`}
            className="flex h-14 flex-col items-center justify-center gap-0.5 text-kicker font-medium uppercase tracking-label text-forest"
          >
            <Phone className="size-4" strokeWidth={1.6} />
            Call
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="flex h-14 flex-col items-center justify-center gap-0.5 text-kicker font-medium uppercase tracking-label text-forest"
          >
            <WhatsAppIcon className="size-4" />
            WhatsApp
          </a>
          <button
            type="button"
            onClick={() => scrollToId("enquiry")}
            className="flex h-14 flex-col items-center justify-center bg-forest text-kicker font-medium uppercase tracking-label text-cream"
          >
            Book visit
          </button>
        </div>
      </div>
    </>
  );
}
