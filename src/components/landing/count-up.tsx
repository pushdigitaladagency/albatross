import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export function CountUp({
  to,
  pad = 0,
  className,
  duration = 1400,
}: {
  to: number;
  pad?: number;
  className?: string;
  duration?: number;
}) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting || started.current) return;
        started.current = true;
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (reduce) {
          setValue(to);
          return;
        }
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - t, 3);
          setValue(Math.round(to * eased));
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);

  const text = pad > 0 ? String(value).padStart(pad, "0") : String(value);

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {text}
    </span>
  );
}
