import type React from "react";

export type CardElevation = "none" | "sm" | "md";

export interface CardProps {
  as?: "div" | "a";
  href?: string;
  children: React.ReactNode;
  padding?: number | string;
  elevation?: CardElevation;
  clickable?: boolean;
  className?: string;
  accentBottom?: boolean;
  accentColor?: string;
  accentOffsetLeft?: number | string; // e.g., 150 or '10%'
  accentWidth?: number | string; // e.g., 280 or '40%'
  minHeight?: number; // enforce minimum height when needed
}


