"use client";

import React from "react";
import { HeaderProps } from "./interface";
import { usePathname } from 'next/navigation';

import { HeaderRoot, Bar, Nav, LogoWrap, LinkItem, AddressBar, RightSection } from "./base";
import { MobileOnly, DesktopOnly } from "./responsive";
import { IconRow, IconButton, StyledSearchIcon, StyledCartIcon, StyledAccountIcon, CartBadge } from './icons';
import { 
  MobileDrawerOverlay, 
  MobileDrawerPanel, 
  DrawerClose, 
  DrawerCloseButton,
  MobileDrawerHeader,
  DrawerLogo,
  DrawerNav,
  DrawerLink,
  DrawerDivider
} from './drawer';

import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { styled } from '@mui/system';

const defaultLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "#" },
  { label: "All Forms", href: "/All_forms" },
  { label: "Filling Services", href: "#" },
  { label: "Immigration News", href: "#" },
  { label: "Videos", href: "#" },
];

const ProfileMenu = styled("div")({
  position: "relative",
  display: "inline-block",
});

const DropdownContent = styled("div", {
  shouldForwardProp: (prop) => prop !== 'isOpen'
})<{ isOpen: boolean }>(({ isOpen }) => ({
  position: "absolute",
  right: 0,
  top: "calc(100% + 8px)",
  background: "white",
  minWidth: "180px",
  boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  borderRadius: "4px",
  padding: "8px 0",
  opacity: isOpen ? 1 : 0,
  visibility: isOpen ? "visible" : "hidden",
  transform: isOpen ? "translateY(0)" : "translateY(-8px)",
  transition: "all 200ms ease",
  zIndex: 1000,
}));

const MenuItem = styled("a")({
  display: "flex",
  alignItems: "center",
  padding: "12px 16px",
  color: "#333",
  fontSize: "14px",
  textDecoration: "none",
  transition: "background 200ms ease",
  cursor: "pointer",

  "&:hover": {
    background: "#f5f5f5",
  },
});

export function Header({
  navLinks = defaultLinks,
  cartCount = 2,
  onSearchClick,
  onCartClick,
  onMenuClick,
}: HeaderProps) {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);
  const router = useRouter();

  React.useEffect(() => {
    if (drawerOpen) {
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.classList.remove('mobile-menu-open');
    }

    return () => {
      document.body.classList.remove('mobile-menu-open');
    };
  }, [drawerOpen]);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (pathname === '/Login' || pathname === '/signup' || pathname ==='/admin'  || pathname === '/admin/clients') return null;
  
  const toggleDrawer = () => {
    setDrawerOpen((v) => !v);
  };
  
  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  const handleProfileClick = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const navigateToLogin = () => {
    router.push('/Login'); 
    setDropdownOpen(false);
  };

  return (
    <HeaderRoot>
      <AddressBar>
        <LocationOnRoundedIcon />
        <span style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "4px" }}>
          5900 Balcones Dr, Austin,
          <span style={{ whiteSpace: "nowrap" }}>Texas 78731,</span>
          <span style={{ whiteSpace: "nowrap" }}>United States</span>
        </span>
      </AddressBar>

      <Bar>
        <LogoWrap>
          <Link href="/" aria-label="KMARIS Home">
            <Image
              src="/Logo.png"
              alt="KMARIS Logo"
              width={150}
              height={80}
              priority
            />
          </Link>
        </LogoWrap>
        
        <RightSection>
          <DesktopOnly>
            <Nav aria-label="Primary Navigation">
              {navLinks.map((item) => (
                <LinkItem key={item.label} href={item.href}>
                  {item.label}
                </LinkItem>
              ))}
            </Nav>
          </DesktopOnly>
          
          <IconRow>
            <IconButton onClick={onSearchClick}>
              <StyledSearchIcon />
            </IconButton>
            <IconButton onClick={onCartClick}>
              <StyledCartIcon />
              {cartCount > 0 && <CartBadge>{cartCount}</CartBadge>}
            </IconButton>
            <ProfileMenu ref={dropdownRef}>
              <IconButton onClick={handleProfileClick}>
                <StyledAccountIcon />
              </IconButton>
              <DropdownContent isOpen={dropdownOpen}>
                <MenuItem onClick={navigateToLogin}>Sign In</MenuItem>
                <MenuItem onClick={() => router.push('/signup')}>Create Account</MenuItem>
              </DropdownContent>
            </ProfileMenu>
          </IconRow>

          <MobileOnly>
            <IconButton aria-label={drawerOpen ? "Close menu" : "Open menu"} onClick={() => { toggleDrawer(); onMenuClick?.(); }}>
              {drawerOpen ? <CloseRoundedIcon /> : <MenuIcon />}
            </IconButton>
          </MobileOnly>

        </RightSection>
      </Bar>

      <MobileDrawerOverlay open={drawerOpen} onClick={closeDrawer} />
      <MobileDrawerPanel open={drawerOpen}>
        <MobileDrawerHeader>
          <DrawerLogo src="/whitelogo.png" alt="Logo" />
          <DrawerCloseButton onClick={closeDrawer}>
            <DrawerClose />
          </DrawerCloseButton>
        </MobileDrawerHeader>
        
        <DrawerNav>
          {navLinks.map((item) => (
            <DrawerLink key={`m-${item.label}`} href={item.href} onClick={closeDrawer}>
              {item.label}
            </DrawerLink>
          ))}
        </DrawerNav>
      </MobileDrawerPanel>
    </HeaderRoot>
  );
}

export default Header;