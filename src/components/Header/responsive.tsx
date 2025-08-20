"use client";

import styled from "@emotion/styled";
import { breakpoints } from "@/theme/breakpoints";

export const MobileOnly = styled("div")(`
  display: flex;
  align-items: center;
  
  @media (min-width: ${breakpoints.md}px) {
    display: none;
  }
`);

export const DesktopOnly = styled("div")(`
  display: none;
  align-items: center;
  
  @media (min-width: ${breakpoints.md}px) {
    display: flex;
  }
`);

export const HideOnXs = styled("div")(`
  @media (max-width: ${breakpoints.sm - 1}px) {
    display: none;
  }
`);