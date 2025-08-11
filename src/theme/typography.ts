export const typography = {
  fontFamily: 'var(--font-inter)',
  weight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
  navItem: {
    fontSize: 14,
  },
  address: {
    fontSize: 12,
  },
  heroTitle: {
    fontSize: 72,
    fontWeight: 800,
  },
  heroDescription: {
    fontSize: 24,
    fontWeight: 300,
  },
} as const;

export type Typography = typeof typography;


