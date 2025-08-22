"use client";

import React from "react";
import styled from "@emotion/styled";
import { palette } from "@/theme/palette";
import { typography } from "@/theme/typography";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

// Icons
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import DescriptionIcon from "@mui/icons-material/Description";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

interface SidebarProps {
  isOpen?: boolean;
  onToggle?: () => void;
}

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  isActive?: boolean;
}

const SidebarContainer = styled('div', {
  shouldForwardProp: (prop) => prop !== 'isOpen',
})<{ isOpen: boolean }>`
  width: ${props => props.isOpen ? "250px" : "70px"};
  height: 100vh;
  background-color: ${palette.navy};
  color: ${palette.white};
  transition: width 0.3s ease, transform 0.3s ease;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 900;
  padding-top: 60px; /* Space for the header */
  overflow-x: hidden;
  
  @media (max-width: 768px) {
    transform: ${props => props.isOpen ? "translateX(0)" : "translateX(-100%)"};
    width: 250px;
  }
`;

const Logo = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  
  img {
    max-width: 100%;
    height: auto;
  }
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NavItemStyled = styled('li', {
  shouldForwardProp: (prop) => prop !== 'isActive',
})<{ isActive: boolean }>`
  margin: 5px 10px;
  border-radius: 8px;
  background-color: ${props => props.isActive ? "rgba(255, 255, 255, 0.1)" : "transparent"};
  transition: background-color 0.2s;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const NavLinkStyled = styled(Link, {
  shouldForwardProp: (prop) => prop !== 'isOpen',
})<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  padding: 12px 15px;
  color: ${palette.white};
  text-decoration: none;
  white-space: nowrap;
  
  .icon {
    min-width: 24px;
    margin-right: ${props => props.isOpen ? "15px" : "0"};
    display: flex;
    justify-content: center;
  }
  
  .label {
    opacity: ${props => props.isOpen ? 1 : 0};
    transition: opacity 0.2s;
    font-weight: ${typography.weight.medium};
  }
`;

const ToggleButton = styled('button', {
  shouldForwardProp: (prop) => prop !== 'isOpen',
})<{ isOpen: boolean }>`
  position: absolute;
  top: 70px;
  right: -12px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${palette.white};
  border: 1px solid ${palette.navy};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
  
  &::before {
    content: "";
    width: 0;
    height: 0;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-right: 5px solid ${palette.navy};
    transform: ${props => props.isOpen ? "rotate(180deg)" : "rotate(0deg)"};
    transition: transform 0.3s ease;
  }
`;

const Footer = styled('div', {
  shouldForwardProp: (prop) => prop !== 'isOpen',
})<{ isOpen: boolean }>`
  position: absolute;
  bottom: 20px;
  width: 100%;
  padding: 0 10px;
  opacity: ${props => props.isOpen ? 1 : 0};
  transition: opacity 0.2s;
`;

const NavItem: React.FC<NavItemProps & { isOpen: boolean }> = ({ icon, label, href, isActive = false, isOpen }) => {
  return (
    <NavItemStyled isActive={isActive}>
      <NavLinkStyled href={href} isOpen={isOpen}>
        <span className="icon">{icon}</span>
        <span className="label">{label}</span>
      </NavLinkStyled>
    </NavItemStyled>
  );
};

export const Sidebar: React.FC<SidebarProps> = ({ isOpen = true, onToggle }) => {
  const pathname = usePathname();
  const router = useRouter();
  
  const navItems = [
      { icon: <DashboardIcon />, label: "Dashboard", href: "/admin" },
      { icon: <PeopleIcon />, label: "Clients", href: "/admin/clients" },
      { icon: <DescriptionIcon />, label: "Forms", href: "/admin/forms" },
    ];
  
  const handleLogout = () => {
    // Implement logout functionality here
    router.push("/");
  };
  
  return (
    <SidebarContainer isOpen={isOpen}>
      {onToggle && (
              <ToggleButton onClick={onToggle} isOpen={isOpen} />
            )}
      
      {isOpen && (
        <Logo>
          <Image src="/whitelogo.png" alt="KMARIS" width={120} height={50} />
        </Logo>
      )}
      
      <NavList>
        {navItems.map((item, index) => (
          <NavItem
            key={index}
            icon={item.icon}
            label={item.label}
            href={item.href}
            isActive={pathname === item.href}
            isOpen={isOpen}
          />
        ))}
      </NavList>
      
      <Footer isOpen={isOpen}>
            </Footer>
    </SidebarContainer>
  );
};

export default Sidebar;