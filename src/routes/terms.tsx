import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalSection, LegalShell } from "@/components/landing/legal-shell";
import {
  ACRES,
  EMAIL,
  OFFICE,
  PHONE_DISPLAY,
  PHONE_TEL,
  REMAINING,
  SITE_OFFICE,
  SOLD,
  TOTAL,
} from "@/lib/campaign";

const UPDATED = "15 September 2026";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms and Conditions | Albatross | Sri Baby Properties" },
      {
        name: "description",
        content:
          "Terms and Conditions for the Albatross campaign website operated by Sri Baby Property Developers Private Limited, Coimbatore.",
      },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <LegalShell kicker="Legal" title="Terms and Conditions" updated={UPDATED}>
      <p>
        Please read these Terms and Conditions carefully before using this Albatross campaign website or
        sending an enquiry. By accessing the site, requesting a site visit, or contacting us through the form
        or WhatsApp, you agree to be bound by these terms.
      </p>

      <LegalSection title="1. Definitions">
        <p>
          <strong className="font-medium text-ink">“Company”, “we”, “us”</strong> means Sri Baby Property
          Developers Private Limited, trading as Sri Baby Properties.
        </p>
        <p>
          <strong className="font-medium text-ink">“Project” or “Albatross”</strong> means the plotted
          community at Pattanam / Peedampalli, Coimbatore, across about {ACRES} acres with {TOTAL} plots.
        </p>
        <p>
          <strong className="font-medium text-ink">“Website”</strong> means this Albatross campaign website,
          including the enquiry form, location map, photographs, film, and related pages (Privacy Policy and
          these Terms and Conditions).
        </p>
        <p>
          <strong className="font-medium text-ink">“Visitor” or “you”</strong> means any person who views the
          Website or sends an enquiry.
        </p>
        <p>
          Head office: {OFFICE}
          <br />
          Site office: {SITE_OFFICE}
        </p>
      </LegalSection>

      <LegalSection title="2. Acceptance">
        <p>
          If you do not agree to these Terms and Conditions, do not use the Website. If you are viewing the
          Website on behalf of another person, you confirm that you are authorised to bind that person to these
          terms.
        </p>
        <p>
          You must be at least 18 years of age to send an enquiry or book a site visit. The Website is not
          directed at children.
        </p>
      </LegalSection>

      <LegalSection title="3. About this Website">
        <p>
          The Website is a campaign page for the remaining inventory at Albatross. It describes the Project,
          shows location context, and lets you request a site visit. It is not a broker portal, not an e-commerce
          checkout, and not an online allotment system.
        </p>
        <p>
          The official developer website is{" "}
          <a
            className="text-forest underline-offset-4 hover:underline"
            href="https://www.sribabyproperties.com"
            target="_blank"
            rel="noreferrer"
          >
            www.sribabyproperties.com
          </a>
          . If anything on this campaign page differs from documents later issued by the Company, those
          documents prevail.
        </p>
      </LegalSection>

      <LegalSection title="4. RERA and project status">
        <p>
          Albatross is a DTCP-approved layout at Peedampalli Village, Sulur Taluk, Coimbatore, and is registered
          under the Real Estate (Regulation and Development) Act, 2016, as applicable in Tamil Nadu.
        </p>
        <p>
          RERA registration: TN/11/Layout/3726/2024 and TN/11/Layout/3931/2024.
        </p>
        <p>
          You may verify registration on the Tamil Nadu RERA portal. Statutory rights available to an allottee
          under RERA are not limited by these website terms.
        </p>
      </LegalSection>

      <LegalSection title="5. Not an offer, prospectus, or booking">
        <p>
          Nothing on the Website is a prospectus, invitation to subscribe, offer to sell, agreement for sale,
          or booking confirmation. Display of the Project does not create any right, title, or interest in any
          plot.
        </p>
        <p>
          Availability stated on the Website ({SOLD} plots sold, {REMAINING} of {TOTAL} remaining at the time
          these terms were written) is given in good faith. It must be confirmed in writing by our team before
          you rely on it. Inventory can change as visits and discussions complete.
        </p>
        <p>
          A site visit, a WhatsApp message, a phone call, or submission of the enquiry form does not:
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>reserve or block a plot;</li>
          <li>fix a price;</li>
          <li>create a contract of sale; or</li>
          <li>amount to an allotment under RERA.</li>
        </ul>
        <p>
          Allotment, if any, happens only through the Company’s separate application, KYC, payment, and
          documentation process, in the form required by law.
        </p>
      </LegalSection>

      <LegalSection title="6. Prices, plot numbers, and commercial terms">
        <p>
          This campaign Website does not publish plot numbers, rate per square foot or cent, booking amounts,
          payment schedules, or last-date offers. Any figure you hear from a third-party listing or forwarding
          message should be treated as unverified until our team confirms it.
        </p>
        <p>
          Commercial terms are discussed only after a visit or a direct conversation with authorised staff.
          Taxes, stamp duty, registration, development charges, and other statutory costs — if applicable —
          are as per law and the documents you later sign, not as per this Website.
        </p>
      </LegalSection>

      <LegalSection title="7. Site visits">
        <p>
          Site visits are by request and subject to staff availability, weather, and access to the layout.
          You are responsible for reaching the site office at {SITE_OFFICE}. We may reschedule or decline a
          visit if the request appears false, automated, or not made in good faith.
        </p>
        <p>
          Visitors attend at their own risk. The layout is an outdoor plotted community with roads and open
          ground. Wear suitable footwear and follow any instruction given by site staff. We are not
          responsible for loss of personal belongings during a visit.
        </p>
      </LegalSection>

      <LegalSection title="8. Enquiries and communications">
        <p>
          When you submit the form you confirm that your name and mobile number are yours (or that you are
          authorised to give them), that the number can receive calls and WhatsApp, and that we may contact you
          about Albatross, remaining plots, and your visit.
        </p>
        <p>
          You agree not to send abusive, misleading, or automated enquiries. We may stop corresponding if a
          request is not genuine.
        </p>
        <p>
          Personal information is handled as described in our{" "}
          <Link to="/privacy" className="text-forest underline-offset-4 hover:underline">
            Privacy Policy
          </Link>
          . Please read it before you submit the form.
        </p>
      </LegalSection>

      <LegalSection title="9. Information on the Website">
        <p>
          Photographs, aerials, and film are of the Albatross project. Amenities shown (including play area,
          landscaped spaces, roads, and related facilities) reflect the Project as built or provided at the
          time of capture. Landscaping and surroundings can change with seasons and neighbouring development.
        </p>
        <p>
          Distances and drive times to the L&T Bypass, schools, hospital, airport, railway station, and other
          places are indicative, based on mapped locations. Actual time depends on traffic, the route, and the
          exact destination.
        </p>
        <p>
          We try to keep the Website accurate. It may still contain delays, omissions, or technical errors. If
          you need information for a purchase decision, confirm it with us in writing.
        </p>
      </LegalSection>

      <LegalSection title="10. User obligations">
        <p>You agree that you will:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>use the Website only for lawful, personal, non-commercial enquiry about Albatross;</li>
          <li>provide true particulars in the enquiry form;</li>
          <li>not impersonate another person or submit another person’s number without consent;</li>
          <li>not copy, scrape, republish, or reuse photographs, layout imagery, or copy for another listing or development;</li>
          <li>not attempt to disrupt, reverse-engineer, or overload the Website;</li>
          <li>not use the Website to mislead buyers about Albatross or Sri Baby Properties.</li>
        </ul>
      </LegalSection>

      <LegalSection title="11. Intellectual property">
        <p>
          The Sri Baby Properties name and mark, the Albatross project name, photographs, film, layout
          imagery, text, and the design of this Website are owned by the Company or used with permission. All
          rights are reserved.
        </p>
        <p>
          You may view the Website and share a link to it. You may not reproduce project materials in
          advertisements, portals, or social posts that present you as the developer, or that alter the
          photographs in a misleading way, without our written consent.
        </p>
      </LegalSection>

      <LegalSection title="12. Third-party services">
        <p>The Website uses or links out to independent services, including:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>OpenStreetMap, for the location map tiles;</li>
          <li>Google Maps, when you open directions;</li>
          <li>WhatsApp (Meta), when you send or continue an enquiry.</li>
        </ul>
        <p>
          Those services have their own terms and privacy notices. We do not control them and are not
          responsible for their availability, content, or how they handle your data once you leave this
          Website.
        </p>
      </LegalSection>

      <LegalSection title="13. Disclaimer">
        <p>
          The Website is provided on an “as is” and “as available” basis. To the fullest extent permitted by
          Indian law, we disclaim warranties of uninterrupted access, error-free operation, or fitness for a
          particular purchase decision.
        </p>
        <p>
          Views of neighbouring land, future civic works, or corridor growth mentioned in campaign copy are
          observational. They are not guarantees of appreciation, infrastructure delivery, or government
          timelines.
        </p>
      </LegalSection>

      <LegalSection title="14. Limitation of liability">
        <p>
          To the fullest extent permitted by Indian law, the Company is not liable for indirect, incidental,
          special, or consequential loss arising from:
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>your use of, or inability to use, the Website;</li>
          <li>reliance on campaign information without written confirmation from us;</li>
          <li>third-party maps, messaging apps, or links;</li>
          <li>unauthorised access to data you stored in your own browser.</li>
        </ul>
        <p>
          Nothing in these Terms and Conditions limits liability that cannot be limited by law, including
          liability for fraud or for rights that RERA or other mandatory statute preserves for an allottee.
        </p>
      </LegalSection>

      <LegalSection title="15. Indemnity">
        <p>
          You agree to indemnify the Company and its staff against claims, losses, and reasonable costs
          arising from your misuse of the Website, your breach of these terms, or content you submit that is
          untrue or unlawful.
        </p>
      </LegalSection>

      <LegalSection title="16. Changes">
        <p>
          We may update these Terms and Conditions from time to time. The effective date at the top of this
          page will change when we do. Continued use of the Website after an update means you accept the
          revised terms. If you have already begun a documented allotment, that process follows the documents
          you signed, not a later website revision.
        </p>
      </LegalSection>

      <LegalSection title="17. Severability">
        <p>
          If any part of these terms is held unenforceable, the remaining parts continue in effect. A failure
          to enforce a provision is not a waiver of it.
        </p>
      </LegalSection>

      <LegalSection title="18. Governing law and disputes">
        <p>
          These Terms and Conditions are governed by the laws of India. Subject to any exclusive forum that
          RERA or other mandatory law provides for allottees, courts in Coimbatore, Tamil Nadu, shall have
          jurisdiction over disputes arising from use of this Website.
        </p>
      </LegalSection>

      <LegalSection title="19. Contact">
        <p>
          For questions about these Terms and Conditions, the Website, or Albatross:
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
          <Link to="/privacy" className="text-forest underline-offset-4 hover:underline">
            Privacy Policy
          </Link>
          .
        </p>
      </LegalSection>
    </LegalShell>
  );
}
