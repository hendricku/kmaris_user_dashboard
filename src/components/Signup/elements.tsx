"use client";

import styled from "@emotion/styled";
import { palette } from "@/theme/palette";
import { typography } from "@/theme/typography";
import { breakpoints } from "@/theme/breakpoints";

export const PageWrapper = styled("div")({
  minHeight: "100vh",
  width: "100%",
  display: "flex",
  background: "linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%)",
  padding: "20px",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
});

export const Container = styled("div")({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  boxShadow: "0 15px 50px rgba(0,0,0,0.15)",
  margin: "auto",
  maxWidth: "980px", // Further reduced for a compact appearance
  borderRadius: "16px",
  overflow: "hidden",
  backgroundColor: "#fff",

  [`@media (min-width: ${breakpoints.md}px)`]: {
    flexDirection: "row",
    height: "auto",
    maxHeight: "90vh",
  },
});

export const LeftSection = styled("div")({
  display: "none",
  [`@media (min-width: ${breakpoints.md}px)`]: {
    display: "flex",
    width: "45%",
    background: palette.navy,
    position: "relative",
    overflow: "hidden",
    padding: "40px",
    
    "& img": {
      objectFit: "cover",
    },
  },
});

export const Overlay = styled("div")({
  position: "absolute",
  inset: 0,
  background: "linear-gradient(135deg, rgba(0,37,66,0.8) 0%, rgba(0,37,66,0.5) 100%)",
  zIndex: 1,
});

export const LeftContentWrapper = styled("div")({
  position: "relative",
  zIndex: 2,
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  textAlign: "left",
  width: "100%",
  height: "100%",
});

export const LogoWrap = styled("div")({
  width: "100%",
  marginBottom: "70px", // Reduced
  cursor: "pointer",
  
  "& img": {
    objectFit: "contain",
    maxWidth: "170px", // Reduced
    height: "auto",
  },
});

export const ImageContent = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  color: "#fff",
});

export const ImageTitle = styled("h2")({
  fontSize: "28px", // Reduced
  fontWeight: typography.weight.bold,
  marginBottom: "14px", // Reduced
  textShadow: "0 2px 4px rgba(0,0,0,0.2)",
});

export const ImageText = styled("p")({
  fontSize: "14px", // Reduced
  lineHeight: 1.6,
  maxWidth: "360px",
  marginBottom: "22px", // Reduced
  opacity: 0.9,
});

export const FeatureList = styled("ul")({
  listStyle: "none",
  padding: 0,
  margin: "0",
});

export const FeatureItem = styled("li")({
  display: "flex",
  alignItems: "center",
  marginBottom: "10px", // Reduced
  fontSize: "14px", // Reduced
  
  "&:before": {
    content: '"✓"',
    marginRight: "10px",
    color: palette.primary,
    fontWeight: "bold",
  }
});

export const FormSection = styled("div")({
  width: "100%",
  padding: "25px 20px", // Reduced
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  background: "#ffffff",

  [`@media (min-width: ${breakpoints.md}px)`]: {
    width: "55%",
    padding: "0 45px", // Reduced
  },
});

export const Title = styled("h1")({
  fontSize: "26px", 
  position: "relative",
  fontWeight: typography.weight.bold,
  color: palette.navy,
  textAlign: "center",
  marginBottom: "1rem",
  marginTop:"2rem", 
  letterSpacing: "-0.5px",

  "&::after": {
    content: '""',
    position: "absolute",
    bottom: "-8px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "50px",
    height: "3px",
    background: palette.primary,
    borderRadius: "2px",
  }
});

export const Subtitle = styled("p")({
  fontSize: "14px", // Reduced
  color: palette.textDark,
  textAlign: "center",
  opacity: 0.85,
  maxWidth: "380px",
  margin: "18px auto 22px", // Reduced
  lineHeight: "1.5",
  fontWeight: typography.weight.medium,
});

export const Form = styled("form")({
  display: "flex",
  flexDirection: "column",
  gap: "14px", // Reduced
  width: "100%",
  maxWidth: "420px",
  margin: "0 auto",
});

export const Row = styled("div")({
  display: "grid",
  gap: "14px", // Reduced
  gridTemplateColumns: "1fr",

  [`@media (min-width: ${breakpoints.sm}px)`]: {
    gridTemplateColumns: "1fr 1fr",
  },
});

export const InputGroup = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "5px", // Reduced
});

export const Label = styled("label")({
  fontSize: "13px", // Reduced
  fontWeight: typography.weight.medium,
  color: palette.navy,
});

export const Input = styled("input")({
  width: "100%",
  padding: "10px 15px", // Reduced
  fontSize: "14px", // Reduced
  border: `1px solid ${palette.border}`,
  borderRadius: "8px",
  backgroundColor: palette.white,
  color: palette.textDark,
  transition: "all 200ms ease",
  boxShadow: "0 2px 4px rgba(0,0,0,0.02)",

  "&:focus": {
    outline: "none",
    borderColor: palette.navy,
    boxShadow: "0 0 0 3px rgba(0,37,66,0.1)",
  },

  "&::placeholder": {
    color: "rgba(0, 0, 0, 0.4)",
  },
});

export const SubmitButton = styled("button")({
  width: "100%",
  padding: "11px", // Reduced
  fontSize: "15px", // Reduced
  fontWeight: typography.weight.semibold,
  color: palette.white,
  backgroundColor: palette.primary,
  border: "none",
  cursor: "pointer",
  transition: "all 200ms ease",
  borderRadius: "8px",
  boxShadow: "0 4px 12px rgba(221, 28, 35, 0.2)",
  
  "&:hover": {
    backgroundColor: "#c5181e",
    transform: "translateY(-2px)",
    boxShadow: "0 6px 16px rgba(221, 28, 35, 0.3)",
  },
  
  "&:active": {
    transform: "translateY(0)",
    boxShadow: "0 2px 8px rgba(221, 28, 35, 0.2)",
  }
});

export const Divider = styled("div")({
  display: "flex",
  alignItems: "center",
  margin: "8px 0", // Reduced
  gap: "16px",
  color: palette.textDark,
  opacity: 0.6,
  fontSize: "13px", // Reduced
  fontWeight: typography.weight.medium,

  "&::before, &::after": {
    content: '""',
    flex: 1,
    height: 1,
    background: palette.border,
  },
});

export const LoginButton = styled("button")({
  width: "100%",
  padding: "10px", // Reduced
  fontSize: "15px", // Reduced
  fontWeight: typography.weight.medium,
  color: palette.navy,
  backgroundColor: "rgba(0, 37, 66, 0.03)",
  border: `1px solid ${palette.border}`,
  cursor: "pointer",
  transition: "all 200ms ease",
  borderRadius: "8px",

  "&:hover": {
    color: palette.primary,
    borderColor: palette.primary,
    backgroundColor: "rgba(221, 28, 35, 0.05)",
  },
});

export const InputWrapper = styled("div")({
  position: "relative",
  width: "100%",
});

export const IconButton = styled("button")({
  position: "absolute",
  right: "12px", // Adjusted
  top: "50%",
  transform: "translateY(-50%)",
  background: "none",
  border: "none",
  padding: "6px", // Reduced
  cursor: "pointer",
  color: palette.textDark,
  opacity: 0.6,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 2,
  transition: "opacity 200ms ease",

  "&:hover": {
    opacity: 1,
  },
});

export const GoBackButton = styled("button")({
  width: "100%",
  padding: "8px", 
  fontSize: "13px", 
  fontWeight: typography.weight.medium,
  color: palette.textDark,
  backgroundColor: "transparent",
  border: "none",
  cursor: "pointer",
  transition: "all 200ms ease",
  marginTop: "5px", 
  opacity: 0.7,
  marginBottom:"20px",

  "&:hover": {
    color: palette.navy,
    opacity: 1,
    textDecoration: "underline",
  },
});