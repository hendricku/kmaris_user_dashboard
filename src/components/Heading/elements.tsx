"use client";

import styled from "@emotion/styled";
import { breakpoints } from "@/theme/breakpoints";
import { palette } from "@/theme/palette";
import { typography } from "@/theme/typography";
import { HeadingVariant, HeadingAlign } from "./interface";

// Interface for the props that style the component
interface StyledHeadingProps {
  $variant: HeadingVariant;
  $color?: string;
  $uppercase?: boolean;
  $align?: HeadingAlign;
  $maxWidth?: number | string;
  $marginBottom?: number;
}

// A single, clean definition for the HeadingRoot styled component
export const HeadingRoot = styled.div<StyledHeadingProps>`
  /* --- BASE STYLES --- */
  margin: 0;
  font-family: ${typography.fontFamily};
  /* Correct syntax: Arrow function returning a value */
  color: ${({ $color }) => $color || palette.textDark};
  text-align: ${({ $align }) => $align || 'left'};
  text-transform: ${({ $uppercase }) => ($uppercase ? 'uppercase' : 'none')};

  /* --- DYNAMIC STYLES BASED ON PROPS --- */
  /* Correct syntax: Function that returns a complete CSS property as a string */
  max-width: ${({ $maxWidth }) =>
    typeof $maxWidth === 'number' ? `${$maxWidth}px` : $maxWidth || 'none'};

  margin-bottom: ${({ $marginBottom }) =>
    $marginBottom ? `${$marginBottom}px` : '0'};

  /* --- VARIANT-SPECIFIC STYLES --- */
  /* Correct syntax: A function that returns a multi-line string of CSS rules */
  ${({ $variant }) => {
    const styles = {
      hero: `
        font-size: 28px;
        font-weight: ${typography.weight.extrabold};
        line-height: 1.1;
        @media (min-width: ${breakpoints.sm}px) { font-size: 36px; }
        @media (min-width: ${breakpoints.md}px) { font-size: 48px; }
        @media (min-width: ${breakpoints.lg}px) { font-size: 56px; }
      `,
      section: `
        font-size: 36px;
        font-weight: ${typography.weight.extrabold};
        line-height: 1.15;
        color: ${palette.navy};
        @media (min-width: ${breakpoints.md}px) { font-size: 40px; }
      `,
      card: `
        font-size: 18px;
        font-weight: ${typography.weight.extrabold};
        line-height: 1.25;
        letter-spacing: 0.4px;
        @media (min-width: ${breakpoints.md}px) { font-size: 24px; }
      `,
      group: `
        font-size: 16px;
        font-weight: 600;
        line-height: 1.5;
        letter-spacing: 0.8px;
        opacity: 0.95;
      `,
    };
    
    return styles[$variant] || '';
  }}
`;