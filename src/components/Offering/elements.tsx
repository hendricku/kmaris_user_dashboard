"use client";

import styled from "@emotion/styled";
import { breakpoints } from "@/theme/breakpoints";
import { palette } from "@/theme/palette";
import { typography } from "@/theme/typography";

export const Section = styled("section")({
  width: "100%",
  background: palette.white,
  padding: "64px",
});

export const Container = styled("div")({
  width: "100%",
  maxWidth: breakpoints.containerMaxWidth,
  margin: "0 auto",
});

export const Grid = styled("div")({
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: 64,
  alignItems: "center",
  [`@media (min-width:${breakpoints.lg}px)`]: { gridTemplateColumns: "1fr 1fr", gap: 64 },
});

export const Image = styled("img")({
  width: "100%",
  height: "auto",
  display: "block",
});

export const Content = styled("div")({
  color: palette.textDark,
});

// Deprecated: use shared Heading component instead
export const Title = styled("h2")({
  fontFamily: typography.fontFamily,
  fontWeight: typography.weight.extrabold,
  fontSize: 42,
  lineHeight: 1.12,
  marginBottom: 16,
  [`@media (max-width:${breakpoints.md - 1}px)`]: { fontSize: 30 },
});

export const Description = styled("p")({
  fontFamily: typography.fontFamily,
  fontSize: 15,
  lineHeight: 1.7,
  opacity: 0.9,
  marginBottom: 24,
  [`@media (min-width:${breakpoints.md}px)`]: { fontSize: 16 },
});


