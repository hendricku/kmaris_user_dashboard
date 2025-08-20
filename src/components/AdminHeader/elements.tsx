"use client";

import styled from "@emotion/styled";
import { palette } from "@/theme/palette";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
  background: white;
  border-bottom: 1px solid #e9ecef;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1000;
  margin-left: 250px;
  transition: margin-left 0.3s ease;
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
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
  background: ${palette.danger};
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
  font-size: 24px;
  font-weight: 600;
  color: ${palette.navy};
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
    color: ${palette.danger};
  }

  svg {
    opacity: 0.7;
  }

  &:hover svg {
    opacity: 1;
  }
`;