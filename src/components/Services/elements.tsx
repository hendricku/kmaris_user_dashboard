"use client";

import styled from "@emotion/styled";
import { palette } from "@/theme/palette";
import { breakpoints } from "@/theme/breakpoints";
import { typography } from "@/theme/typography";

export const Section = styled("section")({
  width: "100%",
  background: palette.white,
  padding: "48px 16px",
  [`@media (min-width:${breakpoints.sm}px)`]: { padding: "56px 24px" },
  [`@media (min-width:${breakpoints.lg}px)`]: { padding: "64px 64px" },
});

export const Container = styled("div")({
  width: "100%",
  maxWidth: breakpoints.containerMaxWidth,
  margin: "0 auto",
});

export const HeaderRow = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: 16,
  marginBottom: 24,
  [`@media (min-width:${breakpoints.md}px)`]: { 
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 28 
  },
});

// Deprecated: use shared Heading component instead
export const Title = styled("h2")({
  fontFamily: typography.fontFamily,
  color: palette.navy,
  fontSize: 36,
  lineHeight: 1.15,
  fontWeight: typography.weight.extrabold,
  maxWidth: 560,
  [`@media (min-width:${breakpoints.md}px)`]: { fontSize: 40 },
});

// export const CTA = styled("a")({
//   display: "inline-flex",
//   alignItems: "center",
//   justifyContent: "center",
//   background: palette.primary,
//   color: palette.white,
//   textDecoration: "none",
//   height: 40,
//   padding: "0 16px",
//   borderRadius: 8,
//   fontWeight: typography.weight.medium,
//   letterSpacing: 0.2,
//   transition: "background 120ms ease",
//   ":hover": { background: "#595959ff" },
// });

export const Grid = styled("div")({
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: 18,
  alignItems: "stretch",
  [`@media (min-width:${breakpoints.sm}px)`]: {
    gridTemplateColumns: "1fr 1fr",
    gap: 20,
  },
  [`@media (min-width:${breakpoints.lg}px)`]: {
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 24,
  },
});

// Deprecated: use shared Card component instead
export const Card = styled("a")({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  textDecoration: "none",
  background: palette.white,
  borderRadius: 12,
  boxShadow: "0 12px 28px rgba(16,24,40,0.10), 0 2px 6px rgba(16,24,40,0.06)",
});

export const ThumbWrap = styled("div")({
  padding: "18px 18px 0 18px",
});

export const Thumb = styled("img")({
  width: "100%",
  height: 250,
  objectFit: "cover",
  objectPosition: "center",
  borderRadius: 0,
  [`@media (min-width:${breakpoints.md}px)`]: { height: 276 },
});

export const CardBody = styled("div")({
  padding: "16px 18px 18px 18px",
  display: "flex",
  flexDirection: "column",
  gap: 12,
  flex: 1,
});

// Deprecated: use shared Heading component instead
export const CardTitle = styled("h3")({
  fontFamily: typography.fontFamily,
  color: palette.textDark,
  fontSize: 18,
  lineHeight: 1.25,
  fontWeight: typography.weight.extrabold,
  textTransform: "uppercase",
  letterSpacing: 0.4,
  [`@media (min-width:${breakpoints.md}px)`]: { fontSize: 24 },
});

export const ButtonRow = styled("div")({
  marginTop: "auto",
  display: "flex",
  justifyContent: "flex-start",
  [`@media (min-width:${breakpoints.md}px)`]: {
    justifyContent: "flex-start",
  },
});

export const ReadMore = styled("span")({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 12,
  marginTop: 12,
  background: palette.primary,
  color: palette.white,
  borderRadius: 8,
  height: 38,
  padding: "0 16px",
  fontSize: 13,
  fontWeight: typography.weight.bold,
});

export const ReadMoreArrow = styled("span")({
  display: "inline-block",
  width: 16,
  height: 16,
  borderRadius: 999,
  position: "relative",
  "&::after": {
    content: '"→"',
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});


