"use client";

import styled from "@emotion/styled";

import { palette } from "@/theme/palette";
import { breakpoints } from "@/theme/breakpoints";
import { typography } from "@/theme/typography";
const NAVY = palette.navy;
const WHITE = palette.white;
const TEXT_DARK = palette.textDark;
const ACCENT = palette.accent;


export const HeaderRoot = styled("header")({
  width: "100%",
  backgroundColor: NAVY,
  padding: "12px 8px 22px 8px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 8,
  ["--header-total-height" as string]: "116px",
  [`@media (min-width:${breakpoints.md}px)`]: {
    paddingLeft: 0,
    paddingRight: 0,
    ["--header-total-height" as string]: "116px",
  },
});

export const AddressBar = styled("div")({
  width: "100%",
  maxWidth: breakpoints.containerMaxWidth,
  height: 28,
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  paddingInline: 16,
  color: "#D9E6F2",
  fontSize: typography.address.fontSize,
  fontFamily: typography.fontFamily,
  gap: 8,
});

export const Bar = styled("div")({
  width: "100%",
  maxWidth: breakpoints.containerMaxWidth,
  backgroundColor: WHITE,
  borderRadius: 10,
  height: 76,
  display: "grid",
  gridTemplateColumns: "auto 1fr auto",
  alignItems: "center",
  paddingInline: 6,
  gap: 8,
  [`@media (min-width:${breakpoints.sm}px)`]: { paddingInline: 12, gap: 10 },
  [`@media (min-width:${breakpoints.md}px)`]: { paddingInline: 16, gap: 14 },
  [`@media (min-width:${breakpoints.lg}px)`]: { paddingInline: 20, gap: 16 },
});

export const Nav = styled("nav")({
  display: "flex",
  alignItems: "center",
  gap: 20,
  fontFamily: typography.fontFamily,
});

export const RightContent = styled("div")({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  gap: 20,
  minWidth: 0,
  flexWrap: "nowrap",
  [`@media (max-width:${breakpoints.md - 1}px)`]: {
    gap: 6,
  },
});

export const LogoWrap = styled("div")({
  paddingInline: 0,
  justifySelf: "center",
  display: "flex",
  alignItems: "center",
});

export const LogoImg = styled("img")({
  height: 56,
  width: "auto",
  display: "block",
  objectFit: "contain",
  [`@media (max-width:${breakpoints.md - 1}px)`]: {
    height: 52,
    maxWidth: 220,
  },
});

export const LinkItem = styled("a")({
  color: TEXT_DARK,
  textDecoration: "none",
  fontSize: typography.navItem.fontSize,
  fontFamily: typography.fontFamily,
  fontWeight: typography.weight.medium,
  lineHeight: 1,
  padding: "6px 8px",
  borderRadius: 6,
  whiteSpace: "nowrap",
  position: "relative",
  cursor: "pointer",
  transition: "color 200ms ease",
  "&::after": {
    content: '""',
    position: "absolute",
    left: 8,
    right: 8,
    bottom: 2,
    height: 2,
    background: TEXT_DARK,
    opacity: 0.9,
    transformOrigin: "left center",
    transform: "scaleX(0)",
    transition: "transform 220ms ease",
    borderRadius: 2,
  },
  ":hover": { backgroundColor: "transparent" },
  ":hover::after": { transform: "scaleX(1)" },
  ":focus-visible": { outline: `2px solid ${palette.primary}`, outlineOffset: 2 },
  [`@media (max-width:${breakpoints.md - 1}px)`]: { "&::after": { left: 4, right: 4 } },
});

export const IconRow = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: 16,
  flexShrink: 0,
  [`@media (max-width:${breakpoints.md - 1}px)`]: {
    gap: 6,
  },
});

export const IconButton = styled("button")({
  position: "relative",
  height: 36,
  width: 36,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  border: 0,
  background: "transparent",
  cursor: "pointer",
  borderRadius: 8,
  color: TEXT_DARK,
  transition: "background-color 200ms ease, transform 200ms ease",
  ":hover": { backgroundColor: "#F2F5F7", transform: "translateY(-1px)" },
  ":focus-visible": { outline: `2px solid ${palette.primary}`, outlineOffset: 2 },
  [`@media (max-width:${breakpoints.md - 1}px)`]: { height: 28, width: 28 },
});

export const CartBadge = styled("span")({
  position: "absolute",
  top: -6,
  right: -8,
  minWidth: 18,
  height: 18,
  paddingInline: 4,
  borderRadius: 999,
  background: ACCENT,
  color: WHITE,
  fontSize: 11,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: 600,
  border: `2px solid ${WHITE}`,
  pointerEvents: "none",
});

export const MobileOnly = styled("div")({
  display: "flex",
  alignItems: "center",
  [`@media (min-width:${breakpoints.md}px)`]: {
    display: "none",
  },
});

export const DesktopOnly = styled("div")({
  display: "none",
  alignItems: "center",
  [`@media (min-width:${breakpoints.md}px)`]: {
    display: "flex",
  },
});

export const HideOnXs = styled("div")({
  [`@media (max-width:${breakpoints.sm - 1}px)`]: {
    display: "none",
  },
});

// Mobile drawer (below md)
export const MobileDrawerOverlay = styled("div")<{
  open: boolean;
}>(({ open }) => ({
  position: "fixed",
  inset: 0,
  background: open ? "rgba(0, 21, 37, 0.45)" : "transparent",
  backdropFilter: open ? "blur(2px)" : "none",
  pointerEvents: open ? "auto" : "none",
  transition: "background 200ms ease, backdrop-filter 200ms ease",
  zIndex: 1000,
  display: "none",
  [`@media (max-width:${breakpoints.md - 1}px)`]: {
    display: "block",
  },
}));

export const MobileDrawerPanel = styled("div")<{ open: boolean }>(({ open }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  height: "100%",
  width: "86vw",
  maxWidth: 360,
  background: WHITE,
  boxShadow: "0 24px 48px rgba(0,0,0,0.22)",
  borderRight: "1px solid #EEF2F5",
  transform: open ? "translateX(0)" : "translateX(-100%)",
  transition: "transform 300ms cubic-bezier(0.22, 1, 0.36, 1)",
  zIndex: 1001,
  display: "flex",
  flexDirection: "column",
  overflowY: "auto",
  paddingBottom: "env(safe-area-inset-bottom)",
}));

export const DrawerHeader = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "14px 16px",
  background: NAVY,
  color: WHITE,
  borderBottom: "1px solid rgba(255,255,255,0.08)",
});

export const DrawerHeaderBrand = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: 10,
});

export const DrawerHeaderLogo = styled("img")({
  height: 28,
  width: "auto",
  display: "block",
});

export const DrawerNav = styled("nav")({
  display: "flex",
  flexDirection: "column",
  padding: 12,
  gap: 8,
});

export const DrawerLink = styled("a")({
  color: TEXT_DARK,
  textDecoration: "none",
  padding: "14px 14px",
  borderRadius: 12,
  fontSize: 16,
  fontWeight: 600,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  position: "relative",
  transition: "background-color 140ms ease, transform 120ms ease",
  ":hover": { background: "#F6F8FA", transform: "translateX(1px)" },
  ":focus-visible": { outline: `2px solid ${palette.primary}`, outlineOffset: 2 },
  "&::before": {
    content: '""',
    position: "absolute",
    left: 10,
    top: 10,
    bottom: 10,
    width: 3,
    background: "transparent",
    borderRadius: 2,
    transition: "background 160ms ease",
  },
  "&::after": {
    content: '""',
    width: 8,
    height: 8,
    borderRadius: 999,
    background: palette.primary,
    opacity: 0,
    transition: "opacity 160ms ease, transform 160ms ease",
    transform: "scale(0.8)",
  },
  ":hover::before": { background: palette.primary },
  ":hover::after": { opacity: 1, transform: "scale(1)" },
});

export const DrawerDivider = styled("div")({
  height: 1,
  background: "#EEF2F5",
  margin: "8px 12px",
});

export const DrawerActionRow = styled("div")({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: 10,
  padding: "8px 12px 12px 12px",
});

export const DrawerActionButton = styled("a")<{ primary?: boolean }>(({ primary }) => ({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  height: 42,
  borderRadius: 10,
  textDecoration: "none",
  fontWeight: 600,
  fontSize: 14,
  color: primary ? WHITE : NAVY,
  background: primary ? palette.primary : "transparent",
  border: primary ? "none" : `1px solid ${"#D6DEE6"}`,
  transition: "background 160ms ease, border-color 160ms ease",
  ":hover": {
    background: primary ? "#c5181e" : "#F6F8FA",
    borderColor: primary ? undefined : "#CBD6E2",
  },
}));

export const DrawerCloseButton = styled("button")({
  height: 36,
  width: 36,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  border: 0,
  background: "transparent",
  color: WHITE,
  cursor: "pointer",
  borderRadius: 8,
  transition: "background-color 120ms ease, transform 120ms ease",
  ":hover": { backgroundColor: "rgba(255,255,255,0.12)", transform: "translateY(-1px)" },
});