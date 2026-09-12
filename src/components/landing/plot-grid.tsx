import { REMAINING, SOLD, TOTAL } from "@/lib/campaign";
import { cn } from "@/lib/utils";

const OPEN = new Set([14, 33, 52, 71, 96]);

export function PlotGrid({
  className,
  dark,
}: {
  className?: string;
  dark?: boolean;
}) {
  return (
    <div className={cn("flex h-full min-h-0 w-full flex-col", className)}>
      <div
        className="grid min-h-0 flex-1 grid-cols-11 content-stretch gap-[3px] p-1"
        style={{ gridTemplateRows: "repeat(10, minmax(0, 1fr))" }}
        role="img"
        aria-label={`${SOLD} of ${TOTAL} plots sold. ${REMAINING} remaining, shown in gold.`}
      >
        {Array.from({ length: TOTAL }, (_, i) => {
          const open = OPEN.has(i);
          return (
            <span
              key={i}
              className={cn("plot-cell min-h-0 min-w-0", open && "is-open")}
              title={open ? "Available — one of the last 5" : "Sold"}
            />
          );
        })}
      </div>
      <div className="mt-4 flex shrink-0 flex-wrap items-center gap-4 text-[11px]">
        <span className={cn("flex items-center gap-1.5", dark ? "text-cream/75" : "text-muted")}>
          <span className="plot-cell inline-block size-2.5" />
          {SOLD} sold
        </span>
        <span className="flex items-center gap-1.5 font-semibold text-gold">
          <span className="plot-cell is-open inline-block size-2.5 !transform-none" />
          {REMAINING} remaining
        </span>
      </div>
    </div>
  );
}
