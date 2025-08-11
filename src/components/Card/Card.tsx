"use client";

import React from "react";
import { CardProps } from "./interface";
import { CardRoot } from "./elements";

export function Card({ as = "a", href, children, padding = 16, elevation = "md", clickable = true, className }: CardProps) {
  return (
    <CardRoot
      as={as as any}
      href={as === "a" ? href : undefined}
      $padding={padding}
      $elevation={elevation}
      $clickable={clickable}
      className={className}
    >
      {children}
    </CardRoot>
  );
}

export default Card;


