"use client";

import styled from "@emotion/styled";
import { palette } from "@/theme/palette";
import { typography } from "@/theme/typography";
import { breakpoints } from "@/theme/breakpoints";

export const FooterRoot = styled("footer")({
  width: "100%",
  background: palette.navy,
  color: palette.white,
  fontFamily: typography.fontFamily,
});

export const Top = styled("div")({
  width: "100%",
  maxWidth: breakpoints.containerMaxWidth,
  margin: "0 auto",
  padding: "64px 16px",
  display: "grid",
  gap: 48,
  gridTemplateColumns: "1fr",

  [`@media (min-width:${breakpoints.md}px)`]: {
    padding: "80px 32px",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: 64,
  },

  [`@media (min-width:${breakpoints.lg}px)`]: {
    padding: "96px 64px",
    gridTemplateColumns: "2fr 1fr 2fr",
    gap: 80,
  },
});

export const Bottom = styled("div")({
  width: "100%",
  borderTop: `1px solid rgba(255,255,255,0.1)`,
});

export const BottomInner = styled("div")({
  width: "100%",
  maxWidth: breakpoints.containerMaxWidth,
  margin: "0 auto",
  padding: "24px 16px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 16,
  fontSize: 14,

  [`@media (min-width:${breakpoints.md}px)`]: {
    padding: "24px 32px",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export const BottomLinks = styled("div")({
  display: "flex",
  gap: 24,

  "a": {
    color: palette.white,
    textDecoration: "none",
    opacity: 0.8,
    transition: "opacity 200ms ease",
    "&:hover": {
      opacity: 1,
    },
  },
});