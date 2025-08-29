import { palette } from "./palette";
import { typography } from "./typography";
import { breakpoints } from "./breakpoints";

export const theme = {
  palette,
  typography,
  breakpoints,
} as const;

export type Theme = typeof theme;