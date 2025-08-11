"use client";

import styled from "@emotion/styled";
import { palette } from "@/theme/palette";
import { breakpoints } from "@/theme/breakpoints";

export const ButtonRoot = styled("a")<{
  size?: 'small' | 'medium' | 'large';
  variant?: 'default' | 'compact';
  withArrow?: boolean;
  long?: boolean;
}>(({ size = 'large', variant = 'default', withArrow = false, long = false }) => {
  const tokensBySize = {
    small: { minHeight: 36, padY: 8, padX: 14, fontSize: 13 },
    medium: { minHeight: 42, padY: 10, padX: 18, fontSize: 14 },
    large: { minHeight: 48, padY: 12, padX: 24, fontSize: 15 },
  } as const;
  const t = tokensBySize[size];
  const compactPad = t.padY + 2;
  const padding = variant === 'compact' ? `${compactPad}px ${compactPad}px` : `${t.padY}px ${t.padX}px`;

  return {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    border: 0,
    background: palette.primary,
    color: palette.white,
    textDecoration: "none",
    fontWeight: 600,
    letterSpacing: 0.2,
    transition: "background 120ms ease",
    boxShadow: "none !important",
    filter: "none",
    textShadow: "none",
    cursor: "pointer",
    outline: "none",
    gap: withArrow ? 12 : 8,
    padding,
    fontSize: t.fontSize,
    minHeight: t.minHeight,
    // Responsive min-width for long buttons
    ...(long && {
      minWidth: size === 'small' ? 140 : size === 'medium' ? 160 : 180,
      [`@media (min-width:${breakpoints.sm}px)`]: {
        minWidth: size === 'small' ? 150 : size === 'medium' ? 170 : 190,
      },
      [`@media (min-width:${breakpoints.md}px)`]: {
        minWidth: size === 'small' ? 160 : size === 'medium' ? 180 : 200,
      },
    }),
    ":hover": { background: "#c5181e" },
    ":focus-visible": { outline: `2px solid ${palette.white}`, outlineOffset: 2 },
  };
});

// Arrow without container - just the arrow character
export const Arrow = styled("span")({
  display: "inline-block",
  fontSize: "inherit",
  fontWeight: "inherit",
  lineHeight: 1,
});


