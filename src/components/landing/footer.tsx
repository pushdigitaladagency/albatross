import { EMAIL, OFFICE, PHONE_DISPLAY, PHONE_TEL, SITE_OFFICE } from "@/lib/campaign";

export function Footer() {
  return (
    <footer className="bg-forest px-5 py-14 text-cream md:px-10 lg:px-14">
      <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div>
          <img
            src="/assets/logo/sribaby-logo-light.svg"
            alt="Sri Baby Properties"
            className="h-8 w-auto"
          />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-cream/85">
            Premium DTCP and RERA-approved plotted communities in Coimbatore. Albatross, Pattanam / Peedampalli.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <p className="kicker text-gold">Contact</p>
            <a className="mt-3 block text-sm hover:text-gold" href={`tel:${PHONE_TEL}`}>
              {PHONE_DISPLAY}
            </a>
            <a className="mt-1 block text-sm hover:text-gold" href={`mailto:${EMAIL}`}>
              {EMAIL}
            </a>
          </div>
          <div>
            <p className="kicker text-gold">Offices</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-cream/85">{OFFICE}</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-cream/85">{SITE_OFFICE}</p>
          </div>
        </div>
      </div>
      <div className="mt-8 flex flex-col gap-2 border-t border-cream/15 pt-5 text-xs text-cream/75 sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} Sri Baby Property Developers Private Limited.</p>
        <p>105 sold · 5 remaining · Albatross, Coimbatore</p>
      </div>
    </footer>
  );
}
