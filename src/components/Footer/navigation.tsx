"use client";

import styled from "@emotion/styled";
import { palette } from "@/theme/palette";
import { typography } from "@/theme/typography";

export const Group = styled("div")({});

export const GroupTitle = styled("h4")({
  fontFamily: typography.fontFamily,
  fontSize: 16,
  fontWeight: 600,
  letterSpacing: 0.8,
  textTransform: "uppercase",
  opacity: 0.95,
  marginBottom: 20,
});

export const LinkList = styled("ul")({
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "grid",
  gap: 12,
});

export const LinkItem = styled("a")({
  color: palette.white,
  textDecoration: "none",
  fontSize: 15,
  opacity: 0.85,
  transition: "opacity 120ms ease, transform 120ms ease",
  ":hover": { opacity: 1, transform: "translateX(2px)" },
});