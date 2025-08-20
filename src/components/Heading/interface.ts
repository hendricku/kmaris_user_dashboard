import type { ReactNode } from "react";

// Defines the allowed heading tags (h1-h6)
export type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

// Defines the stylistic variations for the heading
export type HeadingVariant = "hero" | "section" | "card" | "group";

// Defines the allowed text alignment options
// FIX: This type is now created and exported.
export type HeadingAlign = "left" | "center" | "right";

// Defines all the props the Heading component can accept
export interface HeadingProps {
  /** The underlying HTML heading element to render (e.g., 1 for <h1>) */
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  /** The stylistic variant to apply */
  variant?: HeadingVariant;
  /** The text content of the heading */
  children: ReactNode;
  /** Optional text color */
  color?: string;
  /** If true, transforms the text to uppercase */
  uppercase?: boolean;
  /** Text alignment */
  align?: HeadingAlign; // Use the exported type here
  /** Maximum width of the heading element */
  maxWidth?: number | string;
  /** Bottom margin in pixels */
  marginBottom?: number;
}