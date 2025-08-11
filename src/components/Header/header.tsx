"use client";

import React from "react";
import { HeaderProps } from "./interface";
import { HeaderRoot, Bar, Nav, LogoWrap, LogoImg, LinkItem, IconRow, IconButton, CartBadge, AddressBar, RightContent, MobileOnly, DesktopOnly, MobileDrawerOverlay, MobileDrawerPanel, DrawerHeader, DrawerHeaderBrand, DrawerHeaderLogo, DrawerNav, DrawerLink, DrawerDivider, DrawerCloseButton } from "./elements";

import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import MenuIcon from "@mui/icons-material/Menu";

const defaultLeft = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#" },
  { label: "All Forms", href: "#" },

];

const defaultRight = [
  { label: "Filling Services", href: "#" },
  { label: "Immigration News", href: "#" },
  { label: "Videos", href: "#" },
];

export function Header({
  leftLinks = defaultLeft,
  rightLinks = defaultRight,
  logoSrc = "/logo.png",
  cartCount = 2,
  onSearchClick,
  onCartClick,
  onProfileClick,
  onMenuClick,
}: HeaderProps) {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const toggleDrawer = () => setDrawerOpen((v) => !v);
  const closeDrawer = () => setDrawerOpen(false);
  return (
    <HeaderRoot>
      <AddressBar>
        <LocationOnRoundedIcon fontSize="small" />
        5900 Balcones Dr, Austin Texas 78731, United States
      </AddressBar>

      <Bar>
    
        <DesktopOnly>
          <Nav aria-label="Primary">
            {leftLinks.map((item) => (
              <LinkItem key={item.label} href={item.href}>
                {item.label}
              </LinkItem>
            ))}
          </Nav>
        </DesktopOnly>
        <MobileOnly>
          <IconButton aria-label={drawerOpen ? "Close menu" : "Open menu"} onClick={() => { toggleDrawer(); onMenuClick?.(); }}>
            {drawerOpen ? <CloseRoundedIcon /> : <MenuIcon />}
          </IconButton>
        </MobileOnly>

 
        <LogoWrap>
          <a href="#" aria-label="KMARIS Home">
            <LogoImg src={logoSrc} alt="KMARIS" />
          </a>
        </LogoWrap>

        <RightContent>
          <DesktopOnly>
            <Nav aria-label="Secondary">
              {rightLinks.map((item) => (
                <LinkItem key={item.label} href={item.href}>
                  {item.label}
                </LinkItem>
              ))}
            </Nav>
          </DesktopOnly>
          <IconRow>
            <IconButton aria-label="Search" onClick={onSearchClick}>
              <SearchIcon />
            </IconButton>
            <IconButton aria-label="Cart" onClick={onCartClick}>
              <ShoppingCartOutlinedIcon />
              {cartCount > 0 && <CartBadge>{cartCount}</CartBadge>}
            </IconButton>
            <IconButton aria-label="Profile" onClick={onProfileClick}>
              <AccountCircleOutlinedIcon />
            </IconButton>
          </IconRow>
        </RightContent>
      </Bar>


      <MobileDrawerOverlay open={drawerOpen} onClick={closeDrawer} />
      <MobileDrawerPanel open={drawerOpen}>
        <DrawerHeader>
          <DrawerHeaderBrand>
            <DrawerHeaderLogo src={"/whitelogo.png"} alt="KMARIS" />
          </DrawerHeaderBrand>
          <DrawerCloseButton aria-label="Close" onClick={closeDrawer}>
            <CloseRoundedIcon />
          </DrawerCloseButton>
        </DrawerHeader>

        <DrawerNav>
          {leftLinks.map((item) => (
            <DrawerLink key={`m-left-${item.label}`} href={item.href} onClick={closeDrawer}>
              {item.label}
            </DrawerLink>
          ))}
          <DrawerDivider />
          {rightLinks.map((item) => (
            <DrawerLink key={`m-right-${item.label}`} href={item.href} onClick={closeDrawer}>
              {item.label}
            </DrawerLink>
          ))}
        </DrawerNav>
      </MobileDrawerPanel>
    </HeaderRoot>
  );
}

export default Header;