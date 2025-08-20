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
    transition: "all 200ms cubic-bezier(0.4, 0, 0.2, 1)",
    boxShadow: "0 2px 8px rgba(221,28,35,0.2)",
    filter: "none",
    textShadow: "none",
    cursor: "pointer",
    outline: "none",
    gap: withArrow ? 12 : 8,
    padding,
    fontSize: t.fontSize,
    minHeight: t.minHeight,
    position: "relative",
    overflow: "hidden",
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: -100,
      width: "100%",
      height: "100%",
      background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
      transition: "left 0.5s ease",
    },

    ...(long && {
      minWidth: size === 'small' ? 140 : size === 'medium' ? 160 : 180,
      [`@media (min-width:${breakpoints.sm}px)`]: {
        minWidth: size === 'small' ? 150 : size === 'medium' ? 170 : 190,
      },
      [`@media (min-width:${breakpoints.md}px)`]: {
        minWidth: size === 'small' ? 160 : size === 'medium' ? 180 : 200,
      },
    }),
    ":hover": { 
      background: "#c5181e",
      transform: "translateY(-2px)",
      boxShadow: "0 4px 16px rgba(221,28,35,0.3)",
    },
    ":hover::before": {
      left: "100%",
    },
    ":active": {
      transform: "translateY(0)",
      boxShadow: "0 2px 8px rgba(221,28,35,0.2)",
    },
    ":focus-visible": { 
      outline: `2px solid ${palette.white}`, 
      outlineOffset: 2,
      boxShadow: "0 0 0 4px rgba(221,28,35,0.2)",
    },
 
    [`@media (max-width:${breakpoints.sm - 1}px)`]: {
      fontSize: size === 'small' ? 12 : size === 'medium' ? 13 : 14,
      minHeight: size === 'small' ? 32 : size === 'medium' ? 38 : 44,
      padding: variant === 'compact' 
        ? `${Math.max(compactPad - 2, 6)}px ${Math.max(compactPad - 2, 6)}px`
        : `${Math.max(t.padY - 2, 8)}px ${Math.max(t.padX - 4, 12)}px`,
    },
  };
});

// Arrow without container - just the arrow character
export const Arrow = styled("span")({
  display: "inline-block",
  fontSize: "inherit",
  fontWeight: "inherit",
  lineHeight: 1,
  transition: "transform 200ms cubic-bezier(0.4, 0, 0.2, 1)",
  "&:hover": {
    transform: "translateX(2px)",
  },
});


