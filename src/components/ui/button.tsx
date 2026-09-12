import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "btn-type inline-flex items-center justify-center gap-2 font-sans font-medium whitespace-nowrap transition-[color,background-color,border-color,transform,opacity] duration-200 ease-[var(--ease-out-soft)] active:not-disabled:scale-[0.96] disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold rounded-lg",
  {
    variants: {
      variant: {
        solid: "bg-forest text-ivory hover:bg-forest-soft",
        invert: "bg-ivory text-forest hover:bg-sand",
        gold: "bg-gold text-forest hover:bg-gold-hover",
        ghost:
          "bg-ivory/20 text-ivory border border-ivory hover:bg-ivory hover:text-forest",
        ghostDark:
          "bg-transparent text-forest border border-forest/25 hover:border-forest hover:bg-forest/5",
        line: "bg-transparent text-current px-0 h-auto rounded-none border-b border-gold hover:border-gold-hover",
      },
      size: {
        default: "h-12 px-7",
        lg: "h-14 px-8",
        sm: "h-10 px-5",
      },
    },
    defaultVariants: {
      variant: "solid",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size }), className)} ref={ref} {...props} />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
