import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Footer } from "@/components/landing/footer";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function LegalShell({
  kicker,
  title,
  updated,
  children,
}: {
  kicker: string;
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-ivory text-ink">
      <header className="border-b border-forest/10 bg-ivory">
        <div className="flex items-center justify-between px-5 py-5 md:px-10 md:py-6 lg:px-14">
          <Link to="/" className="flex items-center" aria-label="Albatross home">
            <img
              src="/assets/logo/sribaby-logo-forest.svg"
              alt="Sri Baby Properties"
              className="h-8 w-auto md:h-9"
            />
          </Link>
          <div className="flex items-center gap-5">
            <Link to="/" className="kicker hidden text-forest hover:text-gold sm:inline">
              Albatross
            </Link>
            <Button variant="solid" size="sm" asChild>
              <Link to="/" hash="enquiry">
                Book a site visit
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="px-5 py-16 md:px-10 md:py-24 lg:px-14">
        <div className="mx-auto max-w-3xl">
          <p className="kicker text-forest">{kicker}</p>
          <h1 className="mt-5 font-serif text-headline leading-[0.95] tracking-display text-forest">
            {title}
          </h1>
          <p className="mt-4 text-sm text-muted">Effective {updated}</p>
          <LegalTabs />
          <div className="mt-12 space-y-10 text-sm leading-relaxed text-muted">{children}</div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function LegalTabs() {
  return (
    <div className="mt-8 flex gap-6 border-b border-forest/10">
      <Tab to="/privacy">Privacy Policy</Tab>
      <Tab to="/terms">Terms and Conditions</Tab>
    </div>
  );
}

function Tab({ to, children }: { to: "/privacy" | "/terms"; children: ReactNode }) {
  return (
    <Link
      to={to}
      className="relative pb-3 kicker text-muted transition-colors hover:text-forest"
      activeProps={{
        className: cn(
          "relative pb-3 kicker text-forest after:absolute after:inset-x-0 after:-bottom-px after:h-px after:bg-gold",
        ),
      }}
    >
      {children}
    </Link>
  );
}

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="font-serif text-subhead tracking-display text-forest">{title}</h2>
      <div className="mt-3 space-y-3">{children}</div>
    </section>
  );
}
