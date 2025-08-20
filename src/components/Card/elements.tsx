"use client";

import styled from "@emotion/styled";
import { palette } from "@/theme/palette";
import { breakpoints } from "@/theme/breakpoints";

export const CardRoot = styled("a")<{
  $padding?: number | string;
  $elevation?: "none" | "sm" | "md";
  $clickable?: boolean;
  $accentBottom?: boolean;
  $accentColor?: string;
  $accentOffsetLeft?: number | string;
  $accentWidth?: number | string;
  $minHeight?: number;
}>(({ $padding = 16, $elevation = "md", $clickable = true, $accentBottom = false, $accentColor = "#D91F26", $accentOffsetLeft = 150, $accentWidth = 280, $minHeight }) => {
  const boxShadow =
    $elevation === "md"
      ? "0 4px 12px rgba(16,24,40,0.08), 0 2px 4px rgba(16,24,40,0.04)"
      : $elevation === "sm"
      ? "0 2px 8px rgba(16,24,40,0.06), 0 1px 2px rgba(16,24,40,0.04)"
      : "none";

  return {
    display: "flex",
    flexDirection: "column",
    background: palette.white,
    borderRadius: 16,
    textDecoration: "none",
    boxShadow,
    padding: typeof $padding === "number" ? `${$padding}px` : $padding,
    transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1)",
    cursor: $clickable ? "pointer" : "default",
    position: "relative",
    minHeight: $minHeight,
    overflow: "hidden",
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: "linear-gradient(135deg, rgba(221,28,35,0.02) 0%, transparent 100%)",
      opacity: 0,
      transition: "opacity 300ms ease",
      pointerEvents: "none",
    },
    "&::after": $accentBottom
      ? {
          content: '""',
          position: "absolute",
          left: typeof $accentOffsetLeft === "number" ? `${$accentOffsetLeft}px` : $accentOffsetLeft,
          width: typeof $accentWidth === "number" ? `${$accentWidth}px` : $accentWidth,
          bottom: 0,
          height: 4,
          background: $accentColor,
          borderBottomLeftRadius: 16,
          borderBottomRightRadius: 16,
        }
      : undefined,
    ":hover": $clickable
      ? { 
          transform: "translateY(-4px)",
          boxShadow: "0 12px 32px rgba(16,24,40,0.12), 0 4px 8px rgba(16,24,40,0.08)",
          "&::before": {
            opacity: 1,
          },
        }
      : undefined,
    ":focus-visible": {
      outline: `2px solid ${palette.primary}`,
      outlineOffset: 2,
    },
    // Responsive adjustments
    [`@media (max-width:${breakpoints.sm - 1}px)`]: {
      borderRadius: 12,
      padding: typeof $padding === "number" ? `${Math.max($padding - 4, 12)}px` : $padding,
    },
  } as const;
});


