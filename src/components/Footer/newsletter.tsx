"use client";

import styled from "@emotion/styled";
import { palette } from "@/theme/palette";
import { breakpoints } from "@/theme/breakpoints";
import { typography } from "@/theme/typography";

export const Newsletter = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: 16,
  width: "100%",
  maxWidth: 520,
  alignSelf: "start",
  [`@media (min-width:${breakpoints.md}px)`]: { maxWidth: 560 },
});

export const NewsletterDescription = styled("p")({
  fontSize: 15,
  lineHeight: 1.7,
  opacity: 0.9,
  margin: 0,
});

export const NewsletterForm = styled("form")({
  display: "flex",
  position: "relative",
  height: 50,
  width: "100%",
});

export const NewsletterInput = styled("input")({
  flex: 1,
  padding: "0 60px 0 20px",
  border: "none",
  borderRadius: 8,
  background: palette.white,
  color: palette.navy,
  fontFamily: typography.fontFamily,
  fontSize: 15,
  "::placeholder": {
    color: "#6b7280",
  },
});

export const NewsletterButton = styled("button")({
  position: "absolute",
  right: 6,
  top: 6,
  bottom: 6,
  width: 42,
  border: "none",
  background: palette.primary,
  color: palette.white,
  borderRadius: "50%",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "background 120ms ease",
  ":hover": {
    background: "#c5181e",
  },
  "& svg": {
    fontSize: 20,
  },
});