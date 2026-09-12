import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import * as React from "react";
import { cn } from "@/lib/utils";

const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogPortal = DialogPrimitive.Portal;
const DialogClose = DialogPrimitive.Close;

const DialogOverlay = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn("fixed inset-0 z-50 bg-forest/88", className)}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed inset-x-4 top-1/2 z-50 -translate-y-1/2 md:inset-x-auto md:left-1/2 md:w-full md:max-w-5xl md:-translate-x-1/2",
        "border border-gold/25 bg-forest p-3 shadow-lift outline-none rounded-lg md:p-5",
        className,
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close
        className="absolute -top-11 right-0 flex size-11 items-center justify-center rounded-md text-cream transition-colors hover:text-gold"
        aria-label="Close"
      >
        <X className="size-6" strokeWidth={1.5} />
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogTitle = DialogPrimitive.Title;

export { Dialog, DialogTrigger, DialogPortal, DialogClose, DialogOverlay, DialogContent, DialogTitle };
