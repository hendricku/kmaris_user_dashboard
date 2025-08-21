"use client";

import styled from "@emotion/styled";
import CloseIcon from '@mui/icons-material/Close';
import { palette } from "@/theme/palette";
import { typography } from "@/theme/typography";
import { breakpoints } from "@/theme/breakpoints";


export const MobileDrawerOverlay = styled("div", {
  shouldForwardProp: (prop) => prop !== 'open',
})<{ open: boolean }>(({ open }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100vh",
  background: "rgba(0,0,0,0.5)",
  opacity: open ? 1 : 0,
  visibility: open ? "visible" : "hidden",
  transition: "all 300ms ease",
  zIndex: 1000,
  
  [`@media (min-width: ${breakpoints.md}px)`]: {
    display: 'none',
  },
}));

export const MobileDrawerPanel = styled("div", {
  shouldForwardProp: (prop) => prop !== 'open',
})<{ open: boolean }>(({ open }) => ({
  position: "fixed",
  top: 0,
  right: 0, // Changed from left to right
  height: "100vh",
  width: "100%",
  maxWidth: 360,
  background: palette.navy,
  transform: open ? "translateX(0)" : "translateX(100%)", // Updated transform
  transition: "transform 500ms cubic-bezier(0.16, 1, 0.3, 1)",
  zIndex: 1001, // Increased z-index to be above the overlay
  display: "flex",
  flexDirection: "column",
  overflowY: "auto",

  [`@media (min-width: ${breakpoints.md}px)`]: {
    display: 'none',
  },
}));

export const MobileDrawerHeader = styled("div")({
  padding: "32px 24px 0 24px",
  marginBottom: 32,  
  position: "relative",
});

export const DrawerLogo = styled("img")({
  height: 100, 
  width: "auto",
});

export const DrawerClose = styled(CloseIcon)({
  fontSize: 28,
  color: palette.white,
});

export const DrawerCloseButton = styled("button")({
  position: "absolute",
  top: 32, 
  right: 24,
  width: 40,
  height: 40,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "none",
  background: "transparent",
  cursor: "pointer",
  transition: "all 200ms ease",
  
  "&:hover": {
    transform: "scale(1.1)",
  },
  "&:active": {
    transform: "scale(0.95)",
  }
});

export const DrawerNav = styled("nav")({
  display: "flex",
  flexDirection: "column",
  padding: "0 24px",
});

export const DrawerLink = styled("a")({
  color: palette.white,
  textDecoration: "none",
  padding: "16px 0",
  fontSize: 16,
  fontFamily: typography.fontFamily,
  fontWeight: 500,
  transition: "all 200ms ease",
  "&:hover": {
    color: palette.primary,
    transform: "translateX(-4px)", // Nudge left on hover
  }
});

export const DrawerDivider = styled("hr")({
  border: 0,
  height: 1,
  background: "rgba(255,255,255,0.1)",
  margin: "8px 0",
  width: "100%",
});