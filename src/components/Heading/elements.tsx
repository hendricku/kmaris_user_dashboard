"use client";

import styled from "@emotion/styled";
import { breakpoints } from "@/theme/breakpoints";
import { palette } from "@/theme/palette";
import { typography } from "@/theme/typography";

export const HeadingRoot = styled("h1")<{
  $variant: "hero" | "section" | "card" | "group";
  $color?: string;
  $uppercase?: boolean;
  $align?: "left" | "center" | "right";
  $maxWidth?: number | string;
  $marginBottom?: number;
}>(({ $variant, $color, $uppercase, $align, $maxWidth, $marginBottom }) => {
  const base = {
    margin: 0,
    color: $color || palette.textDark,
    textTransform: $uppercase ? "uppercase" : "none",
    textAlign: $align || "left",
    fontFamily: typography.fontFamily,
    marginBottom: $marginBottom ?? 0,
    maxWidth: $maxWidth ?? "none",
  } as const;

  const variants: Record<string, object> = {
    hero: {
      fontWeight: typography.weight.extrabold,
      lineHeight: 1.1,
      fontSize: 28,
      [`@media (min-width:${breakpoints.sm}px)`]: { fontSize: 36 },
      [`@media (min-width:${breakpoints.md}px)`]: { fontSize: 48 },
      [`@media (min-width:${breakpoints.lg}px)`]: { fontSize: 56 },
    },
    section: {
      color: palette.navy,
      fontWeight: typography.weight.extrabold,
      lineHeight: 1.15,
      fontSize: 36,
      [`@media (min-width:${breakpoints.md}px)`]: { fontSize: 40 },
    },
    card: {
      fontWeight: typography.weight.extrabold,
      lineHeight: 1.25,
      letterSpacing: 0.4,
      fontSize: 18,
      [`@media (min-width:${breakpoints.md}px)`]: { fontSize: 24 },
      textTransform: "uppercase",
    },
    group: {
      fontWeight: 600,
      letterSpacing: 0.8,
      textTransform: "uppercase",
      fontSize: 16,
      opacity: 0.95,
    },
  };

  // Ensure the explicit color prop always wins over variant defaults
  const style = { ...base, ...(variants[$variant] || {}) } as object;
  if ($color) {
    (style as any).color = $color;
  }
  return style;
});


