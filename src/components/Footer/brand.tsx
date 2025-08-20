"use client";

import styled from "@emotion/styled";
import { breakpoints } from "@/theme/breakpoints";
import { palette } from "@/theme/palette"; 

export const Brand = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: 24,
});

export const Logo = styled("img")({
  height: 150, 
  width: "auto",
  alignSelf: "flex-start",
  // [`@media (max-width:${breakpoints.md}px)`]: {
  //   height: 150,
  // },
  // [`@media (max-width:${breakpoints.sm}px)`]: {
  //   height: 130, 
  // },
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