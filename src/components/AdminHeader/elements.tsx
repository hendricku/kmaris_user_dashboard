"use client";

import styled from "@emotion/styled";
import { palette } from "@/theme/palette";

export const MenuButton = styled.button`
  background: none;
  border: none;
  color: ${palette.textDark};
  padding: 8px;
  cursor: pointer;
  margin-right: 16px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }
`;

export const Header = styled('header', {
  shouldForwardProp: (prop) => prop !== 'sidebarOpen',
})<{ sidebarOpen: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px;
  background: white;
  border-bottom: 1px solid #e9ecef;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1000;
  margin-left: ${props => props.sidebarOpen ? "0px" : "0px"}; /* Ensure no margin for mobile */
  padding: 0; /* Ensure no padding for mobile */
  transition: margin-left 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  height: 60px;
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const IconButton = styled.button`
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: #495057;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;

  &:hover {
    background: #f8f9fa;
  }
`;

export const Badge = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  background: ${palette.primary};
  color: white;
  font-size: 12px;
  font-weight: 600;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AvatarButton = styled(IconButton)`
  background: #f8f9fa;

  &:hover {
    background: #e9ecef;
  }
`;

export const DashboardTitle = styled.h1`
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  color: ${palette.navy};
`;

export const HeaderCenter = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  color: ${palette.navy};
  font-weight: 600;
  font-size: 18px;
`;

export const WelcomeText = styled.div`
  margin: 0;
  padding: 0;
`;

export const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 8px;
  border: 1px solid #e9ecef;
  background: white;
  color: #495057;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 14px;
  font-weight: 500;

  &:hover {
    background: #f8f9fa;
    border-color: #dee2e6;
    color: ${palette.primary};
  }

  svg {
    opacity: 0.7;
  }

  &:hover svg {
    opacity: 1;
  }
`;

export const NotificationDropdown = styled.div`
  position: absolute;
  top: 60px;
  right: 10px;
  width: 300px;
  background: white;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  z-index: 1000;
  max-height: 400px;
  overflow-y: auto;
`;

export const NotificationItem = styled.div<{ read: boolean }>`
  padding: 12px 16px;
  border-bottom: 1px solid #e9ecef;
  cursor: pointer;
  background: ${props => props.read ? 'white' : '#f8f9fa'};

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: #e9ecef;
  }

  p {
    margin: 0;
    font-size: 14px;
    line-height: 1.4;
  }

  small {
    font-size: 12px;
    color: #6c757d;
  }
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 8px;
`;

export const ActionButton = styled.button<{ approve?: boolean }>`
  padding: 4px 8px;
  border-radius: 4px;
  border: 1px solid transparent;
  background-color: ${(props) => (props.approve ? '#28a745' : '#dc3545')};
  color: white;
  cursor: pointer;
  font-size: 12px;
  font-weight: 500;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) => (props.approve ? '#218838' : '#c82333')};
  }
`;