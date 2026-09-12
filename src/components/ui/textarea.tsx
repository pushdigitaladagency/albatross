import * as React from "react";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<HTMLTextAreaElement, React.ComponentProps<"textarea">>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-24 w-full bg-transparent px-0 py-2 text-base text-ink placeholder:text-ink/35",
          "border-0 border-b border-forest/20 rounded-none shadow-none resize-none",
          "transition-colors duration-200",
          "focus-visible:border-gold focus-visible:outline-none",
          "disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        suppressHydrationWarning
        ref={ref}
        {...props}
      />
    );
  },
);
Textarea.displayName = "Textarea";

export { Textarea };
