import type React from "react";

export type CardElevation = "sm" | "md" | "lg";

export interface CardProps {
  as?: "div" | "a";
  href?: string;
  children: React.ReactNode;
  padding?: number;
  elevation?: CardElevation;
  clickable?: boolean;
  className?: string;
}


