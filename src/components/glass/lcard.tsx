import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

// Colored Glass Morphism component for cards
interface ColoredGlassMorphismProps {
  variant?:
    | "default"
    | "primary"
    | "secondary"
    | "accent"
    | "success"
    | "warning"
    | "danger";
  intensity?: "light" | "medium" | "strong";
  className?: string;
  children: React.ReactNode;
}

function ColoredGlassMorphism({
  variant = "default",
  intensity = "medium",
  className,
  children,
  ...props
}: ColoredGlassMorphismProps & React.HTMLAttributes<HTMLDivElement>) {
  const intensityStyles = {
    light: {
      background: "rgba(255, 255, 255, 0.03)",
      backdropFilter: "blur(0.5px)",
    },
    medium: {
      background: "rgba(255, 255, 255, 0.05)",
      backdropFilter: "blur(1px)",
    },
    strong: {
      background: "rgba(255, 255, 255, 0.08)",
      backdropFilter: "blur(2px)",
    },
  };

  const borderColors = {
    default: "rgba(255, 255, 255, 0.3)", // white
    primary: "rgba(59, 130, 246, 0.4)", // blue
    secondary: "rgba(107, 114, 128, 0.4)", // gray
    accent: "rgba(147, 51, 234, 0.4)", // purple
    success: "rgba(34, 197, 94, 0.4)", // green
    warning: "rgba(234, 179, 8, 0.4)", // yellow
    danger: "rgba(239, 68, 68, 0.4)", // red
  };

  return (
    <div
      className={cn("relative overflow-hidden rounded-2xl", className)}
      {...props}
    >
      {/* Glass effect background layer */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          filter: "url(#glass-distortion)",
          transform: "scale(4)",
          ...intensityStyles[intensity],
        }}
      />

      {/* Colored border */}
      <div
        className="absolute inset-0 pointer-events-none rounded-2xl"
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

const lcardVariants = cva(
  "relative overflow-hidden transition-all duration-300",
  {
    variants: {
      variant: {
        default: "hover:shadow-white/10",
        primary: "hover:shadow-blue-500/25 bg-blue-500/5",
        secondary: "hover:shadow-gray-500/25 bg-gray-500/5",
        accent: "hover:shadow-purple-500/25 bg-purple-500/5",
        success: "hover:shadow-green-500/25 bg-green-500/5",
        warning: "hover:shadow-yellow-500/25 bg-yellow-500/5",
        danger: "hover:shadow-red-500/25 bg-red-500/5",
      },
      size: {
        sm: "p-4 rounded-lg",
        default: "p-6 rounded-xl",
        lg: "p-8 rounded-2xl",
        xl: "p-10 rounded-3xl",
      },
      interactive: {
        true: "hover:scale-[1.02] hover:-translate-y-1 cursor-pointer",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      interactive: false,
    },
  }
);

interface LCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof lcardVariants> {
  intensity?: "light" | "medium" | "strong";
  children: React.ReactNode;
}

function LCard({
  className,
  variant,
  size,
  interactive,
  intensity = "medium",
  children,
  ...props
}: LCardProps) {
  return (
    <ColoredGlassMorphism
      variant={variant || "default"}
      intensity={intensity}
      className={cn(lcardVariants({ variant, size, interactive }), className)}
      {...props}
    >
      {children}
    </ColoredGlassMorphism>
  );
}

export { LCard, lcardVariants };
