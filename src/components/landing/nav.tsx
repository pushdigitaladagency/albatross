import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { scrollToId } from "@/lib/utils";

export function Nav() {
  return (
    <header className="pointer-events-none absolute inset-x-0 top-0 z-40">
      <div className="flex items-center justify-between px-5 py-5 md:px-10 md:py-7">
        <a href="#top" className="pointer-events-auto flex items-center" aria-label="Sri Baby Properties">
          <img
            src="/assets/logo/sribaby-logo-light.svg"
            alt="Sri Baby Properties"
            className="h-9 w-auto md:h-11"
          />
        </a>
        <nav className="pointer-events-auto hidden items-center gap-8 lg:flex">
          <button
            type="button"
            className="kicker text-cream transition-colors hover:text-gold"
            onClick={() => scrollToId("final-five")}
          >
            The last 5
          </button>
          <button
            type="button"
            className="kicker text-cream transition-colors hover:text-gold"
            onClick={() => scrollToId("location")}
          >
            Location
          </button>
          <Button variant="invert" size="sm" onClick={() => scrollToId("enquiry")}>
            Book a site visit
            <ArrowRight className="size-3.5" strokeWidth={1.75} />
          </Button>
        </nav>
        <Button
          className="pointer-events-auto lg:hidden"
          variant="invert"
          size="sm"
          onClick={() => scrollToId("enquiry")}
        >
          Book visit
        </Button>
      </div>
    </header>
  );
}
