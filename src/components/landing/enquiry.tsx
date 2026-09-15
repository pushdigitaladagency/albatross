import { useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Reveal } from "@/components/landing/reveal";
import { PLOT_SIZES, WHATSAPP_URL } from "@/lib/campaign";
import { cn } from "@/lib/utils";

export function Enquiry() {
  const [size, setSize] = useState<(typeof PLOT_SIZES)[number]>("Not sure yet");
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    if (name.length < 2) {
      toast.error("Please enter your name.");
      return;
    }
    if (!/^[6-9]\d{9}$/.test(phone.replace(/\s+/g, ""))) {
      toast.error("Please enter a valid 10-digit Indian mobile number.");
      return;
    }
    const payload = {
      name,
      phone: phone.replace(/\s+/g, ""),
      size,
      message,
      at: new Date().toISOString(),
      project: "Albatross — final 5",
    };
    try {
      const prev = JSON.parse(localStorage.getItem("albatross-enquiries") ?? "[]") as unknown[];
      localStorage.setItem("albatross-enquiries", JSON.stringify([payload, ...prev].slice(0, 20)));
    } catch {
      /* ignore quota */
    }
    const text = encodeURIComponent(
      `Hello, I am ${name}. I would like to request a site visit for one of the final 5 plots at Albatross.\nPhone: ${payload.phone}\nPreferred size: ${size}${message ? `\n${message}` : ""}`,
    );
    window.open(`https://wa.me/918870044870?text=${text}`, "_blank", "noopener,noreferrer");
    setSent(true);
    toast.success("Request received. Opening WhatsApp to confirm your visit.");
  }

  return (
    <section id="enquiry" className="bg-ivory px-5 py-16 md:px-10 md:py-24 lg:px-14">
      <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <p className="kicker text-forest">Site visit</p>
          <h2 className="mt-5 font-serif text-headline leading-[0.95] tracking-display text-forest">
            Interested in one of the final 5?
          </h2>
          <p className="mt-5 text-lead leading-relaxed text-muted">
            Twenty seconds. We will share the latest availability and arrange a walk through Albatross.
          </p>
        </Reveal>

        <Reveal className="lg:col-span-7" delay={80}>
          {sent ? (
            <div className="rounded-lg border border-gold/40 bg-sand p-6 md:p-8">
              <p className="kicker text-forest">Received</p>
              <h3 className="mt-4 font-serif text-3xl tracking-display text-forest">
                Thank you. The last plots move quietly.
              </h3>
              <p className="mt-4 text-ink">
                Our team will confirm your site visit. If WhatsApp did not open, write to us directly.
              </p>
              <Button className="mt-8" asChild>
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                  Continue on WhatsApp
                  <ArrowRight className="size-4" />
                </a>
              </Button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="flex flex-col gap-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" autoComplete="name" required placeholder="Your full name" />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="phone">Phone number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    autoComplete="tel"
                    inputMode="numeric"
                    required
                    placeholder="10-digit mobile"
                  />
                </div>
              </div>
              <fieldset>
                <legend className="kicker text-forest">Preferred plot size</legend>
                <div className="mt-4 flex flex-wrap gap-2">
                  {PLOT_SIZES.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setSize(option)}
                      className={cn(
                        "h-10 rounded-lg px-3.5 text-xs uppercase tracking-label border transition-colors",
                        size === option
                          ? "border-gold bg-gold text-forest"
                          : "border-forest/20 text-forest hover:border-forest",
                      )}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </fieldset>
              <div className="flex flex-col gap-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" placeholder="Anything we should know before your visit" />
              </div>
              <Button type="submit" size="lg" className="self-start">
                Request a site visit
                <ArrowRight className="size-4" strokeWidth={1.75} />
              </Button>
              <p className="text-xs leading-relaxed text-muted">
                By requesting a visit you agree to our{" "}
                <a href="/privacy" className="text-forest underline-offset-4 hover:underline">
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a href="/terms" className="text-forest underline-offset-4 hover:underline">
                  Terms and Conditions
                </a>
                . We will contact you on the number you provide, including WhatsApp.
              </p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
