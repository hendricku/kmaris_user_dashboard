import type React from "react";
export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export type HeadingVariant = "hero" | "section" | "card" | "group";

export interface HeadingProps {
  level?: HeadingLevel;
  variant?: HeadingVariant;
  color?: string;
  uppercase?: boolean;
  align?: "left" | "center" | "right";
  maxWidth?: number | string;
  marginBottom?: number;
  children: React.ReactNode;
}


