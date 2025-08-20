"use client";

import React from "react";
import { HeadingRoot } from "./elements";
import { HeadingProps } from "./interface";

// Define HeadingTag type for h1-h6 tags
type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export function Heading({
  level = 2,
  variant = "section",
  color,
  uppercase = false,
  align = "left",
  maxWidth,
  marginBottom,
  children,
}: HeadingProps) {
  // Ensure the level is within the valid range of 1-6 for h1-h6 tags.
  const sanitizedLevel = Math.min(Math.max(level, 1), 6);
  const Tag = `h${sanitizedLevel}` as HeadingTag;

  return (
    <HeadingRoot
      as={Tag} // FIX: Changed 'asTag' to 'Tag' to match the variable name
      $variant={variant}
      $color={color}
      $uppercase={uppercase}
      $align={align}
      $maxWidth={maxWidth}
      $marginBottom={marginBottom}
    >
      {children}
    </HeadingRoot>
  );
}

export default Heading;