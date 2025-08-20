import type React from "react";

export type CardElevation = "none" | "sm" | "md";

export interface CardProps {
  as?: "div" | "a";
  href?: string;
  children: React.ReactNode;
  padding?: number;
  elevation?: CardElevation;
  clickable?: boolean;
  className?: string;
}


