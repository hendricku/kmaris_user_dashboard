"use client";

import React from "react";
import { ButtonRoot, Arrow } from "./elements";
import { AppButtonProps } from "./interface";

export function AppButton({ label, onClick, href, size = 'large', variant = 'default', withArrow = false }: AppButtonProps) {
  const content = (
    <>
      <span>{label}</span>
      {withArrow && <Arrow aria-hidden>→</Arrow>}
    </>
  );

  if (href) {
    return (
      <ButtonRoot href={href} onClick={onClick} size={size} variant={variant} withArrow={withArrow}>
        {content}
      </ButtonRoot>
    );
  }
  return (
    <ButtonRoot as="button" onClick={onClick} size={size} variant={variant} withArrow={withArrow}>
      {content}
    </ButtonRoot>
  );
}

export default AppButton;


