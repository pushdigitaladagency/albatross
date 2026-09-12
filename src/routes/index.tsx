import { createFileRoute } from "@tanstack/react-router";
import { Amenities } from "@/components/landing/amenities";
import { Conversion } from "@/components/landing/conversion";
import { Enquiry } from "@/components/landing/enquiry";
import { Film } from "@/components/landing/film";
import { Footer } from "@/components/landing/footer";
import { Hero } from "@/components/landing/hero";
import { Location } from "@/components/landing/location";
import { Nav } from "@/components/landing/nav";
import { Scarcity } from "@/components/landing/scarcity";
import { SmoothScroll } from "@/components/landing/smooth-scroll";
import { SocialProof } from "@/components/landing/social-proof";
import { StickyBar } from "@/components/landing/sticky-bar";
import { Testimonials } from "@/components/landing/testimonials";
import { Trust } from "@/components/landing/trust";
import { Why } from "@/components/landing/why";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <div className="bg-ivory pb-14 md:pb-0">
      <a
        href="#enquiry"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-ivory focus:px-4 focus:py-2 focus:text-forest"
      >
        Skip to enquiry
      </a>
      <SmoothScroll />
      <Nav />
      <main>
        <Hero />
        <SocialProof />
        <Scarcity />
        <Why />
        <Film />
        <Location />
        <Amenities />
        <Trust />
        <Testimonials />
        <Conversion />
        <Enquiry />
      </main>
      <Footer />
      <StickyBar />
    </div>
  );
}
