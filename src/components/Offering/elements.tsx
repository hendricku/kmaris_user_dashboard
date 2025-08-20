"use client";

import styled from "@emotion/styled";
import { breakpoints } from "@/theme/breakpoints";
import { palette } from "@/theme/palette";
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

export const Grid = styled("div")({
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: 40,
  alignItems: "center",
  [`@media (min-width:${breakpoints.sm}px)`]: {
    gap: 48,
  },
  [`@media (min-width:${breakpoints.md}px)`]: {
    gap: 56,
  },
  [`@media (min-width:${breakpoints.lg}px)`]: { 
    gridTemplateColumns: "1fr 1fr", 
    gap: 64,
  },
  [`@media (min-width:${breakpoints.xl}px)`]: {
    gap: 80,
  },
});

export const Image = styled("img")({
  width: "100%",
  height: "auto",
  display: "block",
  borderRadius: 16,
  boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
  transition: "transform 300ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 300ms ease",
  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow: "0 16px 48px rgba(0,0,0,0.15)",
  },
  [`@media (max-width:${breakpoints.sm - 1}px)`]: {
    borderRadius: 12,
  },
});

export const Content = styled("div")({
  color: palette.textDark,
  animation: "fadeInUp 0.8s ease-out 0.3s both",
  textAlign: "left",
});


export const Title = styled("h2")({
  fontFamily: typography.fontFamily,
  fontWeight: typography.weight.extrabold,
  fontSize: "clamp(26px, 4vw, 36px)",
  lineHeight: 1.15,
  marginBottom: 18,
  letterSpacing: "-0.01em",
  
});

export const Description = styled("p")({
  fontFamily: typography.fontFamily,
  fontSize: "clamp(14px, 2.2vw, 15px)",
  lineHeight: 1.6,
  opacity: 0.9,
  marginBottom: 28,

});

export const ButtonWrapper = styled("div")({
  width: "100%",
  [`@media (min-width:${breakpoints.lg}px)`]: {
    maxWidth: "300px",
  },
  display: "flex",
  justifyContent: "center",
});


