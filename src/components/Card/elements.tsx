"use client";

import styled from "@emotion/styled";
import { palette } from "@/theme/palette";

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
      ? "0 12px 28px rgba(16,24,40,0.10), 0 2px 6px rgba(16,24,40,0.06)"
      : $elevation === "sm"
      ? "0 6px 14px rgba(16,24,40,0.10), 0 1px 3px rgba(16,24,40,0.06)"
      : "none";

  return {
    display: "flex",
    flexDirection: "column",
    background: palette.white,
    borderRadius: 12,
    textDecoration: "none",
    boxShadow,
    padding: typeof $padding === "number" ? `${$padding}px` : $padding,
    transition: "transform 120ms ease, box-shadow 120ms ease",
    cursor: $clickable ? "pointer" : "default",
    position: "relative",
    minHeight: $minHeight,
    "&::after": $accentBottom
      ? {
          content: '""',
          position: "absolute",
          left: typeof $accentOffsetLeft === "number" ? `${$accentOffsetLeft}px` : $accentOffsetLeft,
          width: typeof $accentWidth === "number" ? `${$accentWidth}px` : $accentWidth,
          bottom: 0,
          height: 4,
          background: $accentColor,
          borderBottomLeftRadius: 12,
          borderBottomRightRadius: 12,
        }
      : undefined,
    ":hover": $clickable
      ? { transform: "translateY(-1px)" }
      : undefined,
  } as const;
});


