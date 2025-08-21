"use client";

import React from "react";
import { HeadingRoot } from "./elements";
import { HeadingProps, HeadingTag } from "./interface";

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
  const sanitizedLevel = Math.min(Math.max(level, 1), 6);
  const Tag = `h${sanitizedLevel}` as HeadingTag;

  return (
    <HeadingRoot
      as={Tag}
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