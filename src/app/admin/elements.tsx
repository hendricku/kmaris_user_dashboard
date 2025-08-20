"use client";

import styled from "@emotion/styled";
import { palette } from "@/theme/palette";
import { typography } from "@/theme/typography";

export const AdminLayout = styled.div`
  display: flex;
  background: #f8f9fa;
  min-height: 100vh;
`;

export const MainContent = styled.div`
  flex: 1;
  margin-left: 250px;
  padding: 88px 24px 24px; 
  transition: margin-left 0.3s ease;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
  background: white;
  border-bottom: 1px solid #e9ecef;
  position: sticky;
  top: 0;
  z-index: 100;
  margin: -24px -24px 24px -24px;
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

export const SearchBar = styled.div`
  position: relative;
  width: 300px;

  input {
    width: 100%;
    padding: 8px 16px;
    border: 1px solid #e9ecef;
    border-radius: 6px;
    font-size: 14px;

    &:focus {
      outline: none;
      border-color: ${palette.primary};
    }
  }
`;

export const UserSection = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const DashboardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-bottom: 32px;
`;

export const StatCard = styled.div`
  background: white;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);

  .stat-title {
    font-size: 14px;
    color: #6c757d;
    margin-bottom: 8px;
  }

  .stat-value {
    font-size: 24px;
    font-weight: ${typography.weight.bold};
    color: ${palette.navy};
  }
`;

export const TableContainer = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  margin-top: 32px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHead = styled.thead`
  background: #f8f9fa;
`;

export const TableHeader = styled.th`
  padding: 16px 24px;
  text-align: left;
  font-weight: 600;
  font-size: 14px;
  color: #495057;
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #e9ecef;

  &:last-child {
    border-bottom: none;
  }
`;

export const TableCell = styled.td`
  padding: 16px 24px;
  font-size: 14px;
  color: #495057;
`;

export const StatusBadge = styled.span<{ status: string }>`
  padding: 4px 12px;
  border-radius: 50px;
  font-size: 13px;
  font-weight: 500;

  ${({ status }) => {
    switch (status.toLowerCase()) {
      case "active":
        return "background: #e6f7ed; color: #027a48;";
      case "pending":
        return "background: #fff3e0; color: #b76e00;";
      case "inactive":
        return "background: #ffebee; color: #c62828;";
      default:
        return "background: #e9ecef; color: #495057;";
    }
  }}
`;

export const ActionButton = styled.button`
  padding: 6px 16px;
  border-radius: 6px;
  border: 1px solid #e9ecef;
  background: transparent;
  color: #495057;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #f8f9fa;
    border-color: #dee2e6;
  }
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
  background: #ff3b30;
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