"use client";

import styled from "@emotion/styled";
import { breakpoints } from "@/theme/breakpoints";
import { palette } from "@/theme/palette";
import { typography } from "@/theme/typography";

export const Section = styled("section")({
  width: "100%",
  background: palette.navy,
  padding: "48px 16px",
  color: palette.white,
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 1,
    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
  },

});

export const Container = styled("div")({
  width: "100%",
  maxWidth: breakpoints.containerMaxWidth,
  margin: "0 auto",
});

export const Grid = styled("div")({
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: 24,
  alignItems: "stretch",
  [`@media (min-width:${breakpoints.sm}px)`]: {
    gap: 28,
  },
  [`@media (min-width:${breakpoints.md}px)`]: {
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: 32,
  },
  [`@media (min-width:${breakpoints.lg}px)`]: {
    gap: 36,
  },
  [`@media (min-width:${breakpoints.xl}px)`]: {
    gap: 40,
  },
});

export const CardInner = styled("div")({
  display: "grid",
  gridTemplateColumns: "1fr",
  gridTemplateAreas: `
    "avatar"
    "stars"
    "text"
    "meta"
  `,
  rowGap: 16,
  columnGap: 0,
  alignItems: "start",
  height: "100%",
  [`@media (min-width:${breakpoints.sm}px)`]: {
    rowGap: 18,
    
  },
  [`@media (min-width:${breakpoints.md}px)`]: {
    gridTemplateColumns: "auto 1fr",
    gridTemplateRows: "auto auto",
    gridTemplateAreas: `
      "avatar text"
      "stars meta"
    `,
    columnGap: 24,
    rowGap: 20,
  },
  [`@media (min-width:${breakpoints.lg}px)`]: {
    columnGap: 32,
    rowGap: 24,
  },
});

export const ContentWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  height: "100%",
});

export const Avatar = styled("img")({
  width: 100,
  height: 100,
  borderRadius: 16,
  objectFit: "cover",
  background: "#eee",
  transition: "transform 200ms ease",
  "&:hover": {
    transform: "scale(1.05)",
  },
  [`@media (min-width:${breakpoints.sm}px)`]: {
    width: 110,
    height: 110,
  },
  [`@media (min-width:${breakpoints.md}px)`]: {
    width: 120,
    height: 120,
  },
  [`@media (min-width:${breakpoints.lg}px)`]: {
    width: 128,
    height: 128,
  },
  gridArea: "avatar",
});

export const Text = styled("p")({
  color: palette.textDark,
  lineHeight: 1.65,
  fontSize: "clamp(14px, 2.5vw, 15px)",
  margin: 0,
  gridArea: "text",
  [`@media (min-width:${breakpoints.md}px)`]: {
    lineHeight: 1.7,
  },
});

export const MetaRow = styled("div")({
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "space-between",
  gap: 16,
  marginTop: "auto",
  paddingTop: 24, 
  flexWrap: "wrap",
});

export const MetaGroup = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: 24,
});

export const NameRoleWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
});

export const NameRole = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: 4,
});

export const Name = styled("div")({
  fontFamily: typography.fontFamily,
  fontWeight: typography.weight.bold,
  color: palette.textDark,
  textTransform: "uppercase",
  fontSize: "clamp(20px, 3vw, 24px)",
  letterSpacing: "0.5px",
});

export const Role = styled("div")({
  color: palette.textDark,
  opacity: 0.7,
  fontSize: 12,
  textTransform: "uppercase",
  letterSpacing: "0.5px",
  [`@media (min-width:${breakpoints.sm}px)`]: {
    fontSize: 13,
  },
});
export const Rating = styled("div")({
  color: palette.primary,
  display: "flex",
  gap: 4,
  fontSize: 22,
});

export const StarsRow = styled("div")({
  gridArea: "stars",
  display: "flex",
  alignItems: "center",
  gap: 6,
  color: palette.primary,
  fontSize: 18,
  [`@media (min-width:${breakpoints.sm}px)`]: {
    fontSize: 20,
    fontWeight: typography.weight.bold,  
  },
  [`@media (min-width:${breakpoints.md}px)`]: {
    fontSize: 20,
  },
});

export const MetaCol = styled("div")({
  gridArea: "meta",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: 6,
});

export const Indicators = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: 8,
});

export const IndicatorDot = styled("span", {
  shouldForwardProp: (prop) => prop !== 'active',
})<{ active?: boolean }>(({ active = true }) => ({
  width: 10,
  height: 10,
  borderRadius: 999,
  background: palette.primary,
  display: "inline-block",
  opacity: active ? 1 : 0.4,
  transition: "opacity 200ms ease",
}));

export const Subheading = styled("div")({
  fontSize: 12,
  textTransform: "uppercase",
  opacity: 0.75,
  letterSpacing: 0.6,
  textAlign: "center",
  marginBottom: 10,
  [`@media (min-width:${breakpoints.sm}px)`]: {
    fontSize: 13,
    marginBottom: 12,
  },
});