"use client";

import styled from "@emotion/styled";
import { breakpoints } from "@/theme/breakpoints";
import { palette } from "@/theme/palette";
import { typography } from "@/theme/typography";
import { HeadingVariant, HeadingAlign } from "./interface"; // Assuming these types are correctly defined in interface.ts

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
  color: ${({ $color }) => $color || palette.textDark};
  text-align: ${({ $align }) => $align || 'left'};
  text-transform: ${({ $uppercase }) => ($uppercase ? 'uppercase' : 'none')};

  /* --- DYNAMIC STYLES BASED ON PROPS --- */
  max-width: ${({ $maxWidth }) => {
    if (typeof $maxWidth === 'number') {
      return `${$maxWidth}px`;
    }
    return $maxWidth || 'none';
  }};

  margin-bottom: ${({ $marginBottom }) =>
    $marginBottom ? `${$marginBottom}px` : '0'};

  /* --- VARIANT-SPECIFIC STYLES --- */
  ${({ $variant }) => {
    // Base styles for each variant on mobile
    const baseVariantStyles = {
      hero: `
        font-size: 28px;
        font-weight: ${typography.weight.extrabold};
        line-height: 1.1;
      `,
      section: `
        font-size: 36px;
        font-weight: ${typography.weight.extrabold};
        line-height: 1.15;
        color: ${palette.navy};
      `,
      card: `
        font-size: 18px;
        font-weight: ${typography.weight.extrabold};
        line-height: 1.25;
        letter-spacing: 0.4px;
      `,
      group: `
        font-size: 16px;
        font-weight: 600;
        line-height: 1.5;
        letter-spacing: 0.8px;
        opacity: 0.95;
      `,
    };

    // Responsive styles that apply on larger screens
    const responsiveStyles = {
      hero: `
        @media (min-width: ${breakpoints.sm}px) {
          font-size: 36px;
        }
        @media (min-width: ${breakpoints.md}px) {
          font-size: 48px;
        }
        @media (min-width: ${breakpoints.lg}px) {
          font-size: 56px;
        }
      `,
      section: `
        @media (min-width: ${breakpoints.md}px) {
          font-size: 40px;
        }
      `,
      card: `
        @media (min-width: ${breakpoints.md}px) {
          font-size: 24px;
        }
      `,
      group: '', // No responsive overrides for group
    };

    // Combine and return the CSS string for the selected variant
    return `
      ${baseVariantStyles[$variant] || ''}
      ${responsiveStyles[$variant] || ''}
    `;
  }}
`;