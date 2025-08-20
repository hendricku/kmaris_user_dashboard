"use client";

import styled from "@emotion/styled";
import { palette } from "@/theme/palette";
import { breakpoints } from "@/theme/breakpoints";
import { typography } from "@/theme/typography";

export const Section = styled("section")({
  width: "100%",
  background: palette.white,
  padding: "48px 16px",
  position: "relative",
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
  gap: 20,
  marginBottom: 32,
  [`@media (min-width:${breakpoints.md}px)`]: { 
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 40,
    gap: 24,
  },
  [`@media (min-width:${breakpoints.lg}px)`]: { 
    marginBottom: 48,
  },
});

// Deprecated: use shared Heading component instead
export const Title = styled("h2")({
  fontFamily: typography.fontFamily,
  color: palette.navy,
  fontSize: "clamp(28px, 4vw, 40px)",
  lineHeight: 1.15,
  fontWeight: typography.weight.extrabold,
  maxWidth: 560,
  letterSpacing: "-0.02em",
  [`@media (min-width:${breakpoints.md}px)`]: { 
    fontSize: "clamp(32px, 3.5vw, 44px)",
  },
});


export const Grid = styled("div")({
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: 20,
  alignItems: "stretch",
  [`@media (min-width:${breakpoints.sm}px)`]: {
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: 24,
  },
  [`@media (min-width:${breakpoints.md}px)`]: {
    gap: 28,
  },
  [`@media (min-width:${breakpoints.lg}px)`]: {
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 32,
  },
  [`@media (min-width:${breakpoints.xl}px)`]: {
    gap: 36,
  },
});


export const Card = styled("a")({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  textDecoration: "none",
  background: palette.white,
  borderRadius: 16,
  boxShadow: "0 4px 12px rgba(16,24,40,0.08), 0 2px 4px rgba(16,24,40,0.04)",
  transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1)",
  overflow: "hidden",
  position: "relative",
  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow: "0 12px 32px rgba(16,24,40,0.12), 0 4px 8px rgba(16,24,40,0.08)",
  },
  "&:focus-visible": {
    outline: `2px solid ${palette.primary}`,
    outlineOffset: 2,
  },
});

export const ThumbWrap = styled("div")({
  padding: "20px 20px 0 20px",
  position: "relative",
  overflow: "hidden",
  // [`@media (min-width:${breakpoints.md}px)`]: {
  //   padding: "24px 24px 0 24px",
  // },
  // [`@media (min-width:${breakpoints.lg}px)`]: {
  //   padding: "28px 28px 0 28px",
  // },
});

export const Thumb = styled("img")({
  width: "100%",
  height: 220,
  objectFit: "cover",
  objectPosition: "center",
  borderRadius: 12,
  transition: "transform 300ms cubic-bezier(0.4, 0, 0.2, 1)",
  // [`@media (min-width:${breakpoints.sm}px)`]: { 
  //   height: 240,
  // },
  // [`@media (min-width:${breakpoints.md}px)`]: { 
  //   height: 260,
  // },
  // [`@media (min-width:${breakpoints.lg}px)`]: { 
  //   height: 280,
  // },
  "&:hover": {
    transform: "scale(1.05)",
  },
});

export const CardBody = styled("div")({
  padding: "20px 20px 24px 20px",
  display: "flex",
  flexDirection: "column",
  gap: 16,
  flex: 1,
  [`@media (min-width:${breakpoints.md}px)`]: {
    padding: "24px 24px 28px 24px",
    gap: 18,
  },
  [`@media (min-width:${breakpoints.lg}px)`]: {
    padding: "28px 28px 32px 28px",
    gap: 20,
  },
});


export const CardTitle = styled("h3")({
  fontFamily: typography.fontFamily,
  color: palette.textDark,
  fontSize: "clamp(16px, 2.5vw, 20px)",
  lineHeight: 1.3,
  fontWeight: typography.weight.extrabold,
  textTransform: "uppercase",
  letterSpacing: 0.4,
  margin: 0,
  [`@media (min-width:${breakpoints.md}px)`]: { 
    fontSize: "clamp(18px, 2vw, 22px)",
  },
  [`@media (min-width:${breakpoints.lg}px)`]: { 
    fontSize: "clamp(20px, 1.8vw, 24px)",
  },
});

export const ButtonRow = styled("div")({
  marginTop: "auto",
  display: "flex",
  justifyContent: "flex-start",
  width: "100%", 
  [`@media (min-width:${breakpoints.md}px)`]: {
    justifyContent: "flex-start",
  },
});


export const ServiceButton = styled("div")({
  width: "100%",
  "& .app-button": {
    width: "100%",
    padding: "16px",
    fontSize: "15px",
    fontWeight: 600,
    borderRadius: "4px",
    backgroundColor: palette.primary,
    color: palette.white,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    transition: "all 200ms ease",
    textTransform: "uppercase", 
    letterSpacing: "0.5px", 

    "&:hover": {
      backgroundColor: "#c5181e",
      transform: "translateY(-1px)",
    },

    "& .arrow": {
      marginLeft: "8px",
      fontSize: "18px", 
    },
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
  transition: "all 200ms cubic-bezier(0.4, 0, 0.2, 1)",
  "&:hover": {
    background: "#c5181e",
    transform: "translateY(-1px)",
  },
});

export const ReadMoreArrow = styled("span")({
  display: "inline-block",
  width: 16,
  height: 16,
  borderRadius: 999,
  position: "relative",
  transition: "transform 200ms ease",
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
  "&:hover": {
    transform: "translateX(2px)",
  },
});


