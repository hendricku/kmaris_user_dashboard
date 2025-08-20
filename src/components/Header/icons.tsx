"use client";

import styled from "@emotion/styled";
import { palette } from "@/theme/palette";
import { breakpoints } from "@/theme/breakpoints";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';


export const StyledSearchIcon = styled(SearchOutlinedIcon)({
  fontSize: 24,
});

export const StyledCartIcon = styled(ShoppingCartOutlinedIcon)({
  fontSize: 24,
});

export const StyledAccountIcon = styled(AccountCircleOutlinedIcon)({
  fontSize: 24,
});

// Common styles will be applied to specific components

// Icon Container Components
export const IconRow = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: 12,
  marginLeft: 'auto',
  
  [`@media (max-width: ${breakpoints.md}px)`]: {
    gap: 8,
  }
});

export const IconButton = styled("button")({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 40,
  height: 40,
  padding: 0,
  border: "none",
  borderRadius: 8,
  backgroundColor: "transparent",
  color: palette.textDark,
  cursor: "pointer",
  transition: "all 200ms ease",
  
  "&:hover": {
    backgroundColor: "rgba(221, 28, 35, 0.08)",
    color: palette.primary,
    transform: "translateY(-1px)",
  },

  "&:active": {
    transform: "translateY(0)",
  },

  "&:focus-visible": {
    outline: `2px solid ${palette.primary}`,
    outlineOffset: 2,
  },

  [`@media (max-width: ${breakpoints.md}px)`]: {
    width: 36,
    height: 36,
  },

  [`@media (max-width: ${breakpoints.sm}px)`]: {
    width: 32,
    height: 32,
  }
});

export const CartBadge = styled("span")({
  position: "absolute",
  top: -6,
  right: -6,
  minWidth: 18,
  height: 18,
  padding: "0 5px",
  borderRadius: 999,
  backgroundColor: palette.primary,
  color: "#fff",
  fontSize: 11,
  fontWeight: 600,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 2px 4px rgba(221, 28, 35, 0.2)",
});

// Usage Example:
/*
<IconRow>
  <IconButton>
    <StyledSearchIcon />
  </IconButton>
  <IconButton>
    <StyledCartIcon />
    <CartBadge>2</CartBadge>
  </IconButton>
  <IconButton>
    <StyledAccountIcon />
  </IconButton>
</IconRow>
*/