"use client";

import styled from "@emotion/styled";
import { palette } from "@/theme/palette";
import { breakpoints } from "@/theme/breakpoints";
import { typography } from "@/theme/typography";

export const FooterRoot = styled("footer")({
  width: "100%",
  background: palette.navy,
  color: palette.white,
  fontFamily: typography.fontFamily,
});

export const Top = styled("div")({
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: 40,
  padding: "48px 16px",
  maxWidth: breakpoints.containerMaxWidth,
  margin: "0 auto",
  [`@media (min-width:${breakpoints.md}px)`]: {
    gridTemplateColumns: "1.5fr 1fr 1.5fr",
    padding: "64px 24px",
  },
  [`@media (min-width:${breakpoints.lg}px)`]: {
    padding: "80px 64px",
  },
});

export const Brand = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: 24,
});

export const Logo = styled("img")({
  height: 72,
  width: "auto",
  alignSelf: "flex-start",
});

export const Address = styled("div")({
  fontSize: 15,
  lineHeight: 1.7,
  opacity: 0.9,
});

export const Divider = styled("hr")({
  border: 0,
  height: 1,
  backgroundColor: palette.white,
  opacity: 0.5,
  width: "80%",
  margin: "0",
});

export const Socials = styled("div")({
  display: "flex",
  gap: 12,
});

export const SocialLinkItem = styled("a")({
  color: palette.navy,
  background: palette.white,
  height: 40,
  width: 40,
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "opacity 120ms ease",
  svg: {
    color: palette.navy,
    fontSize: 22,
  },
  "&.facebook": {
    background: palette.primary,
    svg: { color: palette.white },
  },
  ":hover": {
    opacity: 0.85,
  },
});

export const Group = styled("div")({});

export const GroupTitle = styled("h4")({
  fontFamily: typography.fontFamily,
  fontSize: 16,
  fontWeight: 600,
  letterSpacing: 0.8,
  textTransform: "uppercase",
  opacity: 0.95,
  marginBottom: 20,
});

export const LinkList = styled("ul")({
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "grid",
  gap: 12,
});

export const LinkItem = styled("a")({
  color: palette.white,
  textDecoration: "none",
  fontSize: 15,
  opacity: 0.85,
  transition: "opacity 120ms ease, transform 120ms ease",
  ":hover": { opacity: 1, transform: "translateX(2px)" },
});

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

export const Bottom = styled("div")({
  borderTop: "1px solid rgba(255,255,255,0.15)",
});

export const BottomInner = styled("div")({
  maxWidth: breakpoints.containerMaxWidth,
  margin: "0 auto",
  padding: "24px 16px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 16,
  fontSize: 14,
  opacity: 0.9,
  [`@media (min-width:${breakpoints.md}px)`]: {
    flexDirection: "row",
    padding: "24px 64px",
  },
});

export const BottomLinks = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: 24,
  a: {
    color: palette.white,
    textDecoration: "none",
    opacity: 0.85,
    ":hover": { opacity: 1, textDecoration: "underline" },
  },
});