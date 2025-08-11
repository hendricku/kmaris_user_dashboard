"use client";

import styled from "@emotion/styled";
import { breakpoints } from "@/theme/breakpoints";
import { palette } from "@/theme/palette";
import { typography } from "@/theme/typography";

export const Section = styled("section")({
  width: "100%",
  background: palette.navy,
  padding: "80px 16px",
  color: palette.white,
});

export const Container = styled("div")({
  width: "100%",
  maxWidth: breakpoints.containerMaxWidth,
  margin: "0 auto",
});

export const Grid = styled("div")({
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: 32,
  alignItems: "stretch",
  [`@media (min-width:${breakpoints.md}px)`]: {
    gridTemplateColumns: "1fr 1fr",
    gap: 24,
  },
  [`@media (min-width:${breakpoints.lg}px)`]: {
    gap: 28,
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
  rowGap: 14,
  columnGap: 0,
  alignItems: "start",
  height: "100%",
  [`@media (min-width:${breakpoints.md}px)`]: {
    gridTemplateColumns: "auto 1fr",
    gridTemplateRows: "auto auto",
    gridTemplateAreas: `
      "avatar text"
      "stars meta"
    `,
    columnGap: 32,
  },
});

export const ContentWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  height: "100%",
});

export const Avatar = styled("img")({
  width: 120,
  height: 120,
  borderRadius: 16,
  objectFit: "cover",
  background: "#eee",
  [`@media (min-width:${breakpoints.md}px)`]: {
    width: 128,
    height: 128,
  },
  gridArea: "avatar",
});

export const Text = styled("p")({
  color: palette.textDark,
  lineHeight: 1.65,
  fontSize: 14,
  margin: 0,
  gridArea: "text",
  [`@media (min-width:${breakpoints.md}px)`]: {
    fontSize: 15,
    lineHeight: 1.7,
  },
});

export const MetaRow = styled("div")({
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "space-between",
  gap: 16,
  marginTop: "auto",
  paddingTop: 24, // Ensures space between text and meta info
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
  fontSize: 16,
});

export const Role = styled("div")({
  color: palette.textDark,
  opacity: 0.7,
  fontSize: 12,
  textTransform: "uppercase",
  letterSpacing: "0.5px",
});

// AccentLine removed per request

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

export const IndicatorDot = styled("span")<{ active?: boolean }>(({ active = true }) => ({
  width: 10,
  height: 10,
  borderRadius: 999,
  background: palette.primary,
  display: "inline-block",
  opacity: active ? 1 : 0.4,
}));

export const Subheading = styled("div")({
  fontSize: 12,
  textTransform: "uppercase",
  opacity: 0.75,
  letterSpacing: 0.6,
  textAlign: "center",
  marginBottom: 10,
});