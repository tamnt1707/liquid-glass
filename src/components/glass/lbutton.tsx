import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

// Colored Glass Background component for buttons
interface ColoredGlassBackgroundProps {
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "success";
  className?: string;
  children: React.ReactNode;
}

function ColoredGlassBackground({
  variant = "default",
  className,
  children,
}: ColoredGlassBackgroundProps) {
  const borderColors = {
    default: "rgba(59, 130, 246, 0.4)", // blue
    destructive: "rgba(239, 68, 68, 0.4)", // red
    outline: "rgba(255, 255, 255, 0.4)", // white
    secondary: "rgba(107, 114, 128, 0.4)", // gray
    ghost: "rgba(255, 255, 255, 0.2)", // subtle white
    success: "rgba(34, 197, 94, 0.4)", // green
  };

  return (
    <div className={cn("relative overflow-hidden rounded-[50px]", className)}>
      {/* Glass effect background layer */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          filter: "url(#glass-distortion)",
          transform: "scale(3)",
          background: "rgba(255, 255, 255, 0.05)",
          backdropFilter: "blur(1px)",
        }}
      />

      {/* Colored border */}
      <div
        className="absolute inset-0 pointer-events-none rounded-[50px]"
        style={{
          border: `1px solid ${borderColors[variant]}`,
          background: "transparent",
        }}
      />

      {/* Content layer */}
      <div className="relative z-10 bg-transparent h-full w-full">
        {children}
      </div>
    </div>
  );
}

const lbuttonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-3xl text-sm font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none transform hover:-translate-y-1 hover:scale-105 focus-visible:ring-2 focus-visible:ring-white/50",
  {
    variants: {
      variant: {
        default: "text-white hover:shadow-blue-500/25 bg-blue-500/10",
        destructive: "text-white hover:shadow-red-500/25 bg-red-500/10",
        outline: "text-white hover:shadow-white/10 bg-white/5",
        secondary: "text-white hover:shadow-gray-500/25 bg-gray-500/10",
        ghost:
          "text-white hover:shadow-white/10 bg-transparent hover:bg-white/5",
        success: "text-white hover:shadow-green-500/25 bg-green-500/10",
      },
      size: {
        default: "h-11 px-6 py-2 has-[>svg]:px-5",
        sm: "h-9 rounded-2xl gap-1.5 px-4 has-[>svg]:px-3 text-xs",
        lg: "h-13 rounded-3xl px-8 has-[>svg]:px-6 text-base font-semibold",
        icon: "size-11 rounded-3xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function LButton({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof lbuttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <ColoredGlassBackground
      variant={variant || "default"}
      className={cn(lbuttonVariants({ variant, size }), className)}
    >
      <Comp
        data-slot="lbutton"
        className="w-full h-full bg-transparent border-none outline-none flex items-center justify-center gap-2"
        {...props}
      >
        {props.children}
      </Comp>
    </ColoredGlassBackground>
  );
}

export { LButton, lbuttonVariants };
