"use client";

import styled from "@emotion/styled";
import { breakpoints } from "@/theme/breakpoints";
import { palette } from "@/theme/palette";

export const HeroSection = styled("section")({
  width: "100%",
  backgroundColor: palette.navy,
  position: "relative",
  overflow: "hidden",
});

export const HeroInner = styled("div")({
  width: "100%",
  maxWidth: 1440,
  margin: "0 auto",
  position: "relative",
});

export const HeroImageWrap = styled("div")({
  position: "relative",
  minHeight: "clamp(500px, 85vh, 800px)",
  overflow: "hidden",

  display: "flex",
  alignItems: "center",
});

export const BgImage = styled("div")<{
  src: string;
}>(({ src }) => ({
  position: "absolute",
  inset: 0,
  backgroundImage: `url(${src})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  // filter: "brightness(0.5) contrast(1.1)",
  // transform: "scale(1.05)",
  // transition: "transform 0.3s ease-out",
  // "&:hover": {
  //   transform: "scale(1.02)",
  // },
}));

export const Overlay = styled("div")({
  position: "absolute",
  inset: 0,
  background: "linear-gradient(135deg, rgba(0,37,66,0.9) 0%, rgba(0,37,66,0.7) 40%, rgba(0,37,66,0.4) 70%, rgba(0,37,66,0.2) 100%)",
  "&::before": {
    content: '""',
    position: "absolute",
    // top: 0,
    // left: 0,
    // right: 0,
    // bottom: 0,
    background: "radial-gradient(circle at 30% 50%, rgba(221,28,35,0.1) 0%, transparent 50%)",
  },
});

export const Content = styled("div")({
  position: "absolute",
  height: "100%",
  display: "flex",
  alignItems: "center",
  padding: "0 16px",
  zIndex: 2,
  [`@media (min-width:${breakpoints.sm}px)`]: {
    padding: "0 24px",
  },
  [`@media (min-width:${breakpoints.md}px)`]: {
    padding: "0 48px",
  },
  [`@media (min-width:${breakpoints.lg}px)`]: {
    padding: "0 64px",
  },
  [`@media (min-width:${breakpoints.xl}px)`]: {
    padding: "0 80px",
  },
});

export const ContentBox = styled("div")({
  maxWidth: "100%",
  color: palette.white,
  fontFamily: "var(--font-inter)",
  animation: "fadeInUp 0.8s ease-out 0.2s both",
  [`@media (min-width:${breakpoints.sm}px)`]: {
    maxWidth: 520,
  },
  [`@media (min-width:${breakpoints.md}px)`]: {
    maxWidth: 580,
  },
  [`@media (min-width:${breakpoints.lg}px)`]: {
    maxWidth: 640,
  },
  [`@media (min-width:${breakpoints.xl}px)`]: {
    maxWidth: 680,
  },
});

export const ContentRow = styled("div")({
  display: "flex",
  alignItems: "flex-start",
  gap: 12,
  [`@media (min-width:${breakpoints.sm}px)`]: {
    gap: 16,
  },
  [`@media (min-width:${breakpoints.md}px)`]: {
    gap: 20,
  },
  [`@media (min-width:${breakpoints.lg}px)`]: {
    gap: 24,
  },
});

export const AccentLine = styled("span")({
  width: 3,
  background: `linear-gradient(180deg, ${palette.primary} 0%, rgba(221,28,35,0.6) 100%)`,
  borderRadius: 2,
  marginTop: -20,
  minHeight: 200,
  flexShrink: 0,
  position: "relative",
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 40,
    background: "linear-gradient(180deg, transparent 0%, rgba(221,28,35,0.3) 100%)",
    borderRadius: 2,
  },
  [`@media (min-width:${breakpoints.sm}px)`]: {
    minHeight: 240,
    width: 4,
  },
  [`@media (min-width:${breakpoints.md}px)`]: {
    minHeight: 280,
  },
  [`@media (min-width:${breakpoints.lg}px)`]: {
    minHeight: 320,
  },
});


export const Title = styled("h1")({
  fontFamily: "var(--font-inter)",
  fontSize: "clamp(28px, 5vw, 56px)",
  lineHeight: 1.1,
  fontWeight: 800,
  marginBottom: 12,
  letterSpacing: "-0.02em",
  whiteSpace: "pre-line",
  textShadow: "0 2px 4px rgba(0,0,0,0.3)",
  // [`@media (min-width:${breakpoints.sm}px)`]: {
  //   marginBottom: 16,
  // },
  // [`@media (min-width:${breakpoints.md}px)`]: {
  //   marginBottom: 20,
  // },
  // [`@media (min-width:${breakpoints.lg}px)`]: {
  //   marginBottom: 24,
  // },
});

export const Description = styled("p")({
  fontSize: "clamp(14px, 2.5vw, 18px)",
  lineHeight: 1.6,
  opacity: 0.95,
  marginBottom: 24,
  fontFamily: "var(--font-inter)",
  fontWeight: 400,
  maxWidth: "100%",

});

export const TextBox = styled("div")({
  maxWidth: 720,
});

export const CtaRow = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: 16,
  flexWrap: "wrap",
  [`@media (max-width:${breakpoints.sm - 1}px)`]: {
    flexDirection: "column",  
    alignItems: "flex-start",
    gap: 12,
  },
});


