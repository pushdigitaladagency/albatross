import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-12 w-full bg-transparent px-0 py-2 text-base text-ink placeholder:text-ink/35",
          "border-0 border-b border-forest/20 rounded-none shadow-none",
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
Input.displayName = "Input";

export { Input };
