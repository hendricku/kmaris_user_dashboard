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
});

export const Container = styled("div")({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  boxShadow: "0 15px 50px rgba(0,0,0,0.15)",
  margin: "auto",
  maxWidth: "1100px",
  borderRadius: "16px",
  overflow: "hidden",
  backgroundColor: "#fff",

  [`@media (min-width: ${breakpoints.md}px)`]: {
    flexDirection: "row",
    height: "640px",
    maxHeight: "85vh",
  },
});

export const FormSection = styled("div")({
  width: "100%",
  padding: "30px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  background: "#ffffff",
  position: "relative",

  [`@media (min-width: ${breakpoints.md}px)`]: {
    width: "50%",
    padding: "0 50px",
  },
});

export const ImageSection = styled("div")({
  display: "none",
  [`@media (min-width: ${breakpoints.md}px)`]: {
    display: "block",
    width: "50%",
    background: palette.navy,
    position: "relative",
    overflow: "hidden",
    
    "&::after": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: "linear-gradient(135deg, rgba(0,37,66,0.8) 0%, rgba(0,37,66,0.5) 100%)",
      zIndex: 1,
    }
  },
});

export const ImageContent = styled("div")({
  position: "absolute",
  zIndex: 2,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  padding: "40px",
  color: "#fff",
});

export const ImageTitle = styled("h2")({
  fontSize: "32px",
  fontWeight: typography.weight.bold,
  marginBottom: "16px",
  textShadow: "0 2px 4px rgba(0,0,0,0.2)",
});

export const ImageText = styled("p")({
  fontSize: "16px",
  lineHeight: 1.6,
  maxWidth: "400px",
  marginBottom: "24px",
  opacity: 0.9,
});

export const FeatureList = styled("ul")({
  listStyle: "none",
  padding: 0,
  margin: "0 0 30px 0",
  textAlign: "left",
  width: "100%",
  maxWidth: "300px",
});

export const FeatureItem = styled("li")({
  display: "flex",
  alignItems: "center",
  marginBottom: "12px",
  fontSize: "15px",
  
  "&:before": {
    content: '"✓"',
    marginRight: "10px",
    color: palette.primary,
    fontWeight: "bold",
  }
});

export const LogoWrap = styled("div")({
  textAlign: "center",
  marginBottom: "30px", // Adjusted for spacing inside ImageContent
  position: "relative",
  display: "flex",
  justifyContent: "center",
  
  "& img": {
    objectFit: "contain",
  },
  
  // This is the style for the logo when it's in the form section.
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: "-10px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "60px",
    height: "3px",
    background: palette.primary,
    borderRadius: "2px",
  },
  
  // When the logo is in the ImageSection, we don't want the underline.
  [`${ImageSection} &`]: {
    marginBottom: 0, 
    "&::after": {
      display: "none",
    }
  }
});

export const Title = styled("h1")({
  fontSize: "30px",
  fontWeight: typography.weight.bold,
  color: palette.navy,
  textAlign: "center",
  marginBottom: "10px",
  letterSpacing: "-0.5px",
});

export const Subtitle = styled("p")({
  fontSize: "16px",
  color: palette.textDark,
  textAlign: "center",
  marginBottom: "30px",
  opacity: 0.7,
  maxWidth: "320px",
  margin: "0 auto 30px",
  lineHeight: "1.5",
});

export const Form = styled("form")({
  maxWidth: "400px",
  width: "100%",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
});

export const InputGroup = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "6px",
});

export const Label = styled("label")({
  fontSize: "14px",
  fontWeight: typography.weight.medium,
  color: palette.navy,
});

export const InputWrapper = styled("div")({
  position: "relative",
});

export const Input = styled("input")({
  width: "100%",
  padding: "14px 18px",
  fontSize: 15,
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

export const IconButton = styled("button")({
  position: "absolute",
  right: "16px",
  top: "50%",
  transform: "translateY(-50%)",
  background: "none",
  border: "none",
  cursor: "pointer",
  padding: "4px",
  color: palette.textDark,
  opacity: 0.6,
  transition: "opacity 200ms ease",
  zIndex: 2,

  "&:hover": {
    opacity: 1,
  },
});

export const SubmitButton = styled("button")({
  width: "100%",
  padding: "14px",
  fontSize: "16px",
  fontWeight: typography.weight.semibold,
  color: palette.white,
  backgroundColor: palette.primary,
  border: "none",
  cursor: "pointer",
  transition: "all 200ms ease",
  borderRadius: "8px",
  boxShadow: "0 4px 12px rgba(221, 28, 35, 0.2)",
  position: "relative",
  overflow: "hidden",
  
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

export const ForgotPassword = styled("a")({
  fontSize: "14px",
  color: palette.navy,
  textAlign: "right",
  fontWeight: typography.weight.medium,
  textDecoration: "none",
  marginTop: "-12px",

  "&:hover": {
    textDecoration: "underline",
  },
});

export const Divider = styled("div")({
  display: "flex",
  alignItems: "center",
  margin: "15px 0",
  gap: "16px",
  color: palette.textDark,
  opacity: 0.6,
  fontSize: "14px",
  fontWeight: typography.weight.medium,

  "&::before, &::after": {
    content: '""',
    flex: 1,
    height: 1,
    background: palette.border,
  },
});

export const SignUpButton = styled("button")({
  width: "100%",
  padding: "14px",
  fontSize: "16px",
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