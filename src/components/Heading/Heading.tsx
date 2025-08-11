"use client";

import React from "react";
import { HeadingProps } from "./interface";
import { HeadingRoot } from "./elements";

export function Heading({
  level = 2,
  variant = "section",
  color,
  uppercase,
  align = "left",
  maxWidth,
  marginBottom,
  children,
}: HeadingProps) {
  const asTag = ((): keyof JSX.IntrinsicElements => {
    switch (level) {
      case 1:
        return "h1";
      case 2:
        return "h2";
      case 3:
        return "h3";
      case 4:
        return "h4";
      case 5:
        return "h5";
      case 6:
        return "h6";
      default:
        return "h2";
    }
  })();

  return (
    <HeadingRoot
      as={asTag}
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


