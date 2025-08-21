"use client";

import styled from "@emotion/styled";
import { palette } from "@/theme/palette";
import { typography } from "@/theme/typography";
import { breakpoints } from "@/theme/breakpoints";
import { Card } from "../Card/Card"; 

export const Container = styled("div")({
  padding: "40px 24px",
  maxWidth: 1440,
  margin: "0 auto",
  backgroundColor: "#FFFFFF",
  minHeight: "100vh",
  isolation: "isolate", 
  [`@media (max-width: ${breakpoints.md}px)`]: {
    padding: "32px 16px",
  },
});

export const TabsWrapper = styled("div")({
  borderBottom: "1px solid #E5E5E5",
  marginBottom: 40,
  overflowX: "auto",
  WebkitOverflowScrolling: "touch",
  "&::-webkit-scrollbar": {
    display: "none",
  },
});

export const Tabs = styled("div")({
  display: "flex",
  minWidth: "min-content",
  padding: "16px 0",
  margin: "0 auto",
  gap: "48px",
  [`@media (max-width: ${breakpoints.md}px)`]: {
    gap: "32px",
    padding: "16px 8px",
  },
});

export const Tab = styled("button", {
  shouldForwardProp: (prop) => prop !== '$active',
})<{ $active?: boolean }>(({ $active }) => ({
  background: "none",
  border: "none",
  padding: 0,
  fontSize: 15,
  fontWeight: 600,
  whiteSpace: "nowrap",
  color: $active ? "#FF3B30" : palette.textDark,
  cursor: "pointer",
  fontFamily: typography.fontFamily,
}));

export const Grid = styled("div")({
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "24px",
  justifyContent: "center",
  
  [`@media (min-width: ${breakpoints.sm}px)`]: {
    gridTemplateColumns: "repeat(2, minmax(280px, 1fr))",
  },

  [`@media (min-width: ${breakpoints.md}px)`]: {
    gridTemplateColumns: "repeat(3, minmax(280px, 1fr))",
  },

  [`@media (min-width: ${breakpoints.lg}px)`]: {
    gridTemplateColumns: "repeat(4, minmax(280px, 1fr))",
  },
});

export const FormCard = styled("div")({
  width: "100%",
  height: "300px",
  background: "#FFFFFF",
  display: "flex",
  flexDirection: "column",
  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
}) as typeof Card;

export const FormHeader = styled("div")({
  backgroundColor: palette.navy,
  padding: "32px 20px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "12px",
  height: "220px", // Fixed header height
  justifyContent: "center",
});

export const FormId = styled("h3")({
  color: "#FFFFFF",
  fontSize: "36px", // Slightly smaller font
  fontWeight: 700,
  margin: 0,
  fontFamily: typography.fontFamily,
  letterSpacing: 0,
  lineHeight: 1.2,
});

export const StatusBadge = styled("div")({
  background: "#FFFFFF",
  padding: "4px 16px",
  minWidth: "120px", // Ensure minimum width
  textAlign: "center",
});

export const StatusText = styled("span")({
  color: "#FF3B30",
  fontSize: "18px", // Slightly smaller
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: "0.5px",
  display: "block", // Ensure text stays in one line
  whiteSpace: "nowrap",
});

export const PackageText = styled("div")({
  color: "#FFFFFF",
  fontSize: "14px", // Smaller font
  fontWeight: 500,
  textTransform: "uppercase",
  letterSpacing: "0.5px",
  textAlign: "center",
  marginTop: "4px",
});

export const FormContent = styled("div")({
  padding: "16px",
  textAlign: "center",
  borderTop: "1px solid #E5E5E5",
  height: "80px", // Fixed content height
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden", // Hide overflow text
});

export const FormTitle = styled("p")({
  margin: 0,
  fontSize: "14px",
  color: "#333333",
  fontFamily: typography.fontFamily,
  lineHeight: 1.5,
  fontWeight: 500,
  display: "-webkit-box",
  "-webkit-line-clamp": 2, // Limit to 2 lines
  "-webkit-box-orient": "vertical",
  overflow: "hidden",
});


export const PageWrapper = styled("div")({
  backgroundColor: "#FFFFFF",
  minHeight: "100vh",
  width: "100%",
  position: "relative",
  isolation: "isolate",
});

export const PageContainer = styled("div")({
  width: "100%",
  maxWidth: "1440px", // Set maximum width
  margin: "0 auto",   // Center the container
  padding: "40px 24px",
  
  [`@media (min-width: ${breakpoints.md}px)`]: {
    padding: "60px 40px",
  },
});