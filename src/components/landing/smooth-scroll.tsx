import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function SmoothScroll() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    let destroyed = false;
    let ticker: ((time: number) => void) | undefined;
    let instance: { raf: (t: number) => void; destroy: () => void } | undefined;

    void import("lenis").then(({ default: Lenis }) => {
      if (destroyed) return;
      const lenis = new Lenis({
        duration: 1.15,
        smoothWheel: true,
        wheelMultiplier: 0.9,
      });
      instance = lenis;
      window.__lenis = lenis;
      lenis.on("scroll", () => ScrollTrigger.update());
      ticker = (time: number) => {
        lenis.raf(time * 1000);
      };
      gsap.ticker.add(ticker);
      gsap.ticker.lagSmoothing(0);
    });

    return () => {
      destroyed = true;
      if (ticker) gsap.ticker.remove(ticker);
      instance?.destroy();
      window.__lenis = undefined;
    };
  }, []);

  return null;
}
