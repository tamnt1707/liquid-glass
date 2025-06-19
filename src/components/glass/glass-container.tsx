import { cn } from "@/lib/utils";
import React from "react";

interface GlassContainerProps {
  children: React.ReactNode;
  className?: string;
  intensity?: "light" | "medium" | "strong";
  scale?: number;
  borderRadius?: "sm" | "md" | "lg" | "xl" | "custom";
  customRadius?: string;
  variant?: "water-drop" | "glass" | "morphism" | "simple";
  centerContent?: boolean;
}

export function GlassContainer({
  children,
  className,
  intensity = "medium",
  scale = 1.7,
  borderRadius = "md",
  customRadius,
  variant = "water-drop",
  centerContent = false,
}: GlassContainerProps) {
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

  const radiusStyles = {
    sm: "rounded-[25px]",
    md: "rounded-[35px]",
    lg: "rounded-[45px]",
    xl: "rounded-[60px]",
    custom: customRadius || "rounded-[35px]",
  };

  // Auto-configure based on variant
  const getVariantConfig = () => {
    switch (variant) {
      case "water-drop":
        return {
          radius: radiusStyles[borderRadius],
          scale: scale,
          showBorders: true,
          contentClass: "flex items-center justify-center p-2",
        };
      case "glass":
        return {
          radius:
            borderRadius === "custom"
              ? customRadius || "rounded-[35px]"
              : radiusStyles[borderRadius],
          scale: scale || 3,
          showBorders: "single",
          contentClass: "",
        };
      case "morphism":
        return {
          radius: "rounded-2xl",
          scale: scale || 3,
          showBorders: "single",
          contentClass: "",
        };
      case "simple":
        return {
          radius: radiusStyles[borderRadius],
          scale: scale,
          showBorders: false,
          contentClass: "",
        };
      default:
        return {
          radius: radiusStyles[borderRadius],
          scale: scale,
          showBorders: true,
          contentClass: "flex items-center justify-center p-2",
        };
    }
  };

  const config = getVariantConfig();

  return (
    <div className={cn("relative overflow-hidden", config.radius, className)}>
      {/* Glass effect background layer */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          filter: "url(#glass-distortion)",
          transform: `scale(${config.scale})`,
          ...intensityStyles[intensity],
        }}
      />

      {/* Border layers based on variant */}
      {config.showBorders === true && (
        <>
          {/* Outer border */}
          <div
            className={cn(
              "absolute inset-0 pointer-events-none",
              config.radius
            )}
            style={{
              border: "1px solid rgba(255, 255, 255, 0.4)",
              background: "transparent",
            }}
          />
          {/* Inner highlight border */}
          <div
            className={cn(
              "absolute inset-[1px] pointer-events-none",
              config.radius
            )}
            style={{
              border: "1px solid rgba(255, 255, 255, 0.1)",
              background: "transparent",
            }}
          />
        </>
      )}

      {config.showBorders === "single" && (
        <div
          className={cn("absolute inset-0 pointer-events-none", config.radius)}
          style={{
            border: "1px solid rgba(255, 255, 255, 0.3)",
            background: "transparent",
          }}
        />
      )}

      {/* Content layer */}
      <div
        className={cn(
          "relative z-10 bg-transparent h-full w-full",
          centerContent && "flex items-center justify-center",
          !centerContent && config.contentClass
        )}
      >
        {children}
      </div>
    </div>
  );
}

export const GlassBackground = ({ ...props }: GlassContainerProps) =>
  GlassContainer({
    ...props,
    variant: "glass",
    scale: props.scale || 3,
    borderRadius: "custom",
    customRadius: props.customRadius || "rounded-[50px]",
  });

export const GlassMorphism = ({
  className,
  ...props
}: Omit<GlassContainerProps, "variant" | "borderRadius" | "scale">) =>
  GlassContainer({
    ...props,
    variant: "morphism",
    scale: 3,
    className: cn("rounded-2xl", className),
  });
