"use client";

import styled from "@emotion/styled";
import { breakpoints } from "@/theme/breakpoints";
import { palette } from "@/theme/palette";

export const HeroSection = styled("section")({
  width: "100%",
  backgroundColor: palette.navy,
});

export const HeroInner = styled("div")({
  width: "100%",
  margin: 0,
  position: "relative",
});

export const HeroImageWrap = styled("div")({
  position: "relative",
  minHeight: "clamp(520px, 80vh, 760px)",
  overflow: "hidden",
  borderRadius: 0,
});

export const BgImage = styled("div")<{
  src: string;
}>(({ src }) => ({
  position: "absolute",
  inset: 0,
  backgroundImage: `url(${src})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  filter: "brightness(0.6)",
}));

export const Overlay = styled("div")({
  position: "absolute",
  inset: 0,
  background: "linear-gradient(90deg, rgba(0,37,66,0.85) 0%, rgba(0,37,66,0.4) 50%, rgba(0,37,66,0.1) 100%)",
});

export const Content = styled("div")({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  height: "100%",
  display: "flex",
  alignItems: "center",
  padding: "0 16px",
  [`@media (min-width:${breakpoints.sm}px)`]: {
    padding: "0 32px",
  },
  [`@media (min-width:${breakpoints.md}px)`]: {
    padding: "0 48px",
  },
  [`@media (min-width:${breakpoints.lg}px)`]: {
    padding: "0 64px",
  },
});

export const ContentBox = styled("div")({
  maxWidth: "100%",
  color: palette.white,
  fontFamily: "var(--font-inter)",
  [`@media (min-width:${breakpoints.sm}px)`]: {
    maxWidth: 480,
  },
  [`@media (min-width:${breakpoints.md}px)`]: {
    maxWidth: 520,
  },
  [`@media (min-width:${breakpoints.lg}px)`]: {
    maxWidth: 580,
  },
});

export const ContentRow = styled("div")({
  display: "flex",
  alignItems: "flex-start",
  gap: 12,
  [`@media (min-width:${breakpoints.md}px)`]: {
    gap: 16,
  },
});

export const AccentLine = styled("span")({
  width: 2,
  background: palette.primary,
  borderRadius: 2,
  marginTop: -20,
  minHeight: 200,
  flexShrink: 0,
  [`@media (min-width:${breakpoints.sm}px)`]: {
    minHeight: 240,
  },
  [`@media (min-width:${breakpoints.md}px)`]: {
    minHeight: 280,
  },
});

// Deprecated: use shared Heading component instead
export const Title = styled("h1")({
  fontFamily: "var(--font-inter)",
  fontSize: 28,
  lineHeight: 1.1,
  fontWeight: 800,
  marginBottom: 12,
  letterSpacing: 0,
  whiteSpace: "pre-line",
  [`@media (min-width:${breakpoints.sm}px)`]: {
    fontSize: 36,
    marginBottom: 14,
  },
  [`@media (min-width:${breakpoints.md}px)`]: {
    fontSize: 48,
    marginBottom: 16,
  },
  [`@media (min-width:${breakpoints.lg}px)`]: {
    fontSize: 56,
  },
});

export const Description = styled("p")({
  fontSize: 13,
  lineHeight: 1.6,
  opacity: 0.95,
  marginBottom: 20,
  fontFamily: "var(--font-inter)",
  fontWeight: 300,
  maxWidth: "100%",
  [`@media (min-width:${breakpoints.sm}px)`]: {
    fontSize: 14,
    maxWidth: 440,
  },
  [`@media (min-width:${breakpoints.md}px)`]: {
    fontSize: 16,
    maxWidth: 480,
  },
  [`@media (min-width:${breakpoints.lg}px)`]: {
    fontSize: 18,
    maxWidth: 520,
  },
});

export const TextBox = styled("div")({
  maxWidth: 720,
});

export const CtaRow = styled("div")({
  display: "flex",
  alignItems: "center",
});


