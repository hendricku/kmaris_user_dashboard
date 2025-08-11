export const breakpoints = {

  xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,


  containerMaxWidth: 1400,
} as const;

export type Breakpoints = typeof breakpoints;


