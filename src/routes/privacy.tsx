import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalSection, LegalShell } from "@/components/landing/legal-shell";
import { EMAIL, OFFICE, PHONE_DISPLAY, PHONE_TEL, SITE_OFFICE } from "@/lib/campaign";

const UPDATED = "15 September 2026";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Albatross | Sri Baby Properties" },
      {
        name: "description",
        content:
          "Privacy Policy for the Albatross campaign website operated by Sri Baby Property Developers Private Limited, Coimbatore.",
      },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <LegalShell kicker="Legal" title="Privacy Policy" updated={UPDATED}>
      <LegalSection title="Who we are">
        <p>
          This website is the Albatross campaign site of{" "}
          <strong className="font-medium text-ink">Sri Baby Property Developers Private Limited</strong>{" "}
          (“Sri Baby Properties”, “we”, “us”). Albatross is a plotted community at Pattanam / Peedampalli,
          Coimbatore.
        </p>
        <p>
          Head office: {OFFICE}
          <br />
          Site office: {SITE_OFFICE}
        </p>
      </LegalSection>

      <LegalSection title="What this policy covers">
        <p>
          It explains how we handle personal information when you use this Albatross website, request a site
          visit, or write to us about the remaining plots. It is a notice under the Digital Personal Data
          Protection Act, 2023 (India) and related rules.
        </p>
        <p>
          This campaign site does not create user accounts, take online payments, or run a logged-in area.
        </p>
      </LegalSection>

      <LegalSection title="Information we collect">
        <p>Only if you send an enquiry or contact us. That may include:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Name</li>
          <li>Mobile number</li>
          <li>Preferred plot size</li>
          <li>Any message you choose to write</li>
        </ul>
        <p>
          We do not ask for Aadhaar, PAN, payment cards, or documents on this website. Those, if ever needed
          for an allotment, are collected later through our sales process — not through this form.
        </p>
        <p>
          When the location map loads, OpenStreetMap’s tile service may receive a standard network request
          (typically including your IP address) in order to draw the map. If you open “Directions”, you leave
          this site and use Google Maps under Google’s terms.
        </p>
      </LegalSection>

      <LegalSection title="How we use it">
        <p>We use enquiry details only to:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Confirm remaining plot availability at Albatross</li>
          <li>Arrange or follow up a site visit</li>
          <li>Answer the question you sent</li>
        </ul>
        <p>We do not sell personal information. We do not use it for unrelated marketing lists.</p>
      </LegalSection>

      <LegalSection title="How it is shared">
        <p>
          When you submit the form, a message opens in WhatsApp to{" "}
          <a className="text-forest underline-offset-4 hover:underline" href={`tel:${PHONE_TEL}`}>
            {PHONE_DISPLAY}
          </a>{" "}
          so our team can reply. WhatsApp is operated by Meta; their own privacy policy applies to that
          conversation.
        </p>
        <p>
          A copy of the enquiry may also be stored in your own browser (local storage) so the form can show
          that it was sent. That copy stays on your device unless you clear site data.
        </p>
        <p>
          Our sales staff at Sri Baby Properties can see the details you send, solely to handle your visit.
        </p>
      </LegalSection>

      <LegalSection title="Cookies and similar storage">
        <p>
          This campaign site does not use advertising or analytics cookies. Your browser may keep a local
          record of an enquiry you submitted, as described above. Essential hosting cookies, if any, are used
          only to deliver the page.
        </p>
      </LegalSection>

      <LegalSection title="How long we keep it">
        <p>
          We keep enquiry details for as long as needed to complete your site visit and any discussion that
          follows, or until you ask us to erase them — whichever is earlier, unless a longer period is required
          by law (for example, if an allotment is in progress).
        </p>
      </LegalSection>

      <LegalSection title="Your rights">
        <p>
          You may request access to the personal information we hold about you, ask us to correct it, or ask
          us to erase it, subject to the Digital Personal Data Protection Act, 2023. Write to us using the
          contact below. We will respond as required by law.
        </p>
      </LegalSection>

      <LegalSection title="Children">
        <p>
          This website is meant for adults considering a plot purchase. We do not knowingly collect personal
          information from anyone under 18.
        </p>
      </LegalSection>

      <LegalSection title="How to reach us">
        <p>
          Privacy and grievance requests for this website:
          <br />
          Email:{" "}
          <a className="text-forest underline-offset-4 hover:underline" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
          <br />
          Phone:{" "}
          <a className="text-forest underline-offset-4 hover:underline" href={`tel:${PHONE_TEL}`}>
            {PHONE_DISPLAY}
          </a>
        </p>
        <p>
          Also see our{" "}
          <Link to="/terms" className="text-forest underline-offset-4 hover:underline">
            Terms and Conditions
          </Link>
          .
        </p>
      </LegalSection>

      <LegalSection title="Changes">
        <p>
          If this policy changes, we will update this page and the effective date above. Continued use of the
          website after an update means you have read the revised notice.
        </p>
      </LegalSection>
    </LegalShell>
  );
}
