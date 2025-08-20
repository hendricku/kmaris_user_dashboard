"use client";

import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { palette } from "@/theme/palette";
import { breakpoints } from "@/theme/breakpoints";
import { typography } from "@/theme/typography";


const NAVY = palette.navy;
const WHITE = palette.white;
const TEXT_DARK = palette.textDark;


const flexCenter = css`
  display: flex;
  align-items: center;
`;

const responsiveSpacing = css`
  @media (max-width: ${breakpoints.md - 1}px) {
    gap: 16px;
  }
  @media (max-width: ${breakpoints.sm - 1}px) {
    gap: 6px;
  }
`;

export const HeaderRoot = styled("header")(`
  width: 100%;
  background-color: ${NAVY};
  padding: 12px 8px 22px 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  position: sticky;
  top: 0;
  z-index: 1000;
  backdrop-filter: blur(8px);
  --header-total-height: 116px;
  
  @media (min-width: ${breakpoints.md}px) {
    padding-left: 0;
    padding-right: 0;
    --header-total-height: 116px;
  }
`);

export const AddressBar = styled("div")({
  width: "100%",
  maxWidth: breakpoints.containerMaxWidth,
  minHeight: 28,
  display: "flex",
  alignItems: "center",
  gap: 6,
  padding: "8px 24px", 
  color: "#D9E6F2",
  fontSize: 14,
  lineHeight: 1.4,
  justifyContent: "flex-start",

  "& svg": {
    fontSize: 16,
    flexShrink: 0,
    opacity: 0.9,
  },

  [`@media (max-width: ${breakpoints.md}px)`]: {
    fontSize: 13,
    padding: "6px 12px",
    gap: 4,
    justifyContent: "center", // Center on mobile
    textAlign: "center",

    "& svg": {
      fontSize: 14,
    }
  },

  [`@media (max-width: ${breakpoints.sm}px)`]: {
    fontSize: 12,
    "& svg": {
      fontSize: 13,
    }
  }
});

export const Bar = styled("div")(`
  width: 100%;
  max-width: ${breakpoints.containerMaxWidth}px;
  background-color: ${WHITE};
  border-radius: 12px;
  height: 76px;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  padding-inline: 6px;
  gap: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  transition: box-shadow 0.2s ease, transform 0.2s ease;
  
  &:hover {
    box-shadow: 0 6px 20px rgba(0,0,0,0.12);
  }
  
  @media (min-width: ${breakpoints.sm}px) { 
    padding-inline: 12px; 
    gap: 10px;
    border-radius: 14px;
  }
  
  @media (min-width: ${breakpoints.md}px) { 
    padding-inline: 16px; 
    gap: 14px;
    height: 80px;
  }
  
  @media (min-width: ${breakpoints.lg}px) { 
    padding-inline: 20px; 
    gap: 16px;
    height: 84px;
  }
`);

export const Nav = styled("nav")(`
  ${flexCenter};
  gap: 20px;
  font-family: ${typography.fontFamily};
  
  @media (max-width: ${breakpoints.md - 1}px) {
    gap: 16px;
  }
`);

export const RightContent = styled("div")(`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
  min-width: 0;
  flex-wrap: nowrap;
  ${responsiveSpacing};
`);

export const LogoWrap = styled("div")(`
  padding-inline: 0;
  justify-self: center;
  ${flexCenter};
  transition: transform 0.2s ease;
  
  &:hover {
    transform: scale(1.02);
  }
`);

export const LogoImg = styled("img")(`
  height: 56px;
  width: auto;
  display: block;
  object-fit: contain;
  
  @media (max-width: ${breakpoints.md - 1}px) {
    height: 48px;
    max-width: 200px;
  }
  
  @media (max-width: ${breakpoints.sm - 1}px) {
    height: 44px;
    max-width: 180px;
  }
`);

export const LinkItem = styled("a")(`
  color: ${TEXT_DARK};
  text-decoration: none;
  font-size: ${typography.navItem.fontSize};
  font-family: ${typography.fontFamily};
  font-weight: ${typography.weight.medium};
  line-height: 1;
  padding: 8px 12px;
  border-radius: 8px;
  white-space: nowrap;
  position: relative;
  cursor: pointer;
  transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
  
  &::after {
    content: "";
    position: absolute;
    left: 8px;
    right: 8px;
    bottom: 2px;
    height: 2px;
    background: ${palette.primary};
    opacity: 0;
    transform-origin: left center;
    transform: scaleX(0);
    transition: all 220ms cubic-bezier(0.4, 0, 0.2, 1);
    border-radius: 2px;
  }
  
  &:hover { 
    background-color: rgba(221,28,35,0.05);
    color: ${palette.primary};
  }
  
  &:hover::after { 
    opacity: 1;
    transform: scaleX(1);
  }
  
  &:focus-visible { 
    outline: 2px solid ${palette.primary}; 
    outline-offset: 2px;
  }
  
  @media (max-width: ${breakpoints.md - 1}px) { 
    &::after { 
      left: 4px; 
      right: 4px;
    }
    padding: 6px 8px;
    font-size: 14px;
  }
`);