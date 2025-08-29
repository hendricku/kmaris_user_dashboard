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
  padding: 24px;
  transition: margin-left 0.3s ease;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  background: ${palette.white};
  border-bottom: 1px solid ${palette.border};
  position: sticky;
  top: 0;
  z-index: 100;
  margin: -24px -24px 24px -24px;
  border-radius: 12px 12px 0 0;
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

export const Title = styled.h1`
  margin: 0;
  font-size: 24px;
  font-weight: ${typography.weight.semibold};
  color: ${palette.navy};
`;

export const SearchContainer = styled.div`
  position: relative;
  max-width: 400px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 12px 40px 12px 16px;
  border: 1px solid ${palette.border};
  border-radius: 8px;
  font-size: 14px;
  outline: none;
  transition: all 0.3s ease;
  background-color: ${palette.white};
  color: ${palette.textDark};

  &:focus {
    border-color: ${palette.primary};
    box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.1);
  }

  &::placeholder {
    color: #9ca3af;
  }
`;

export const SearchIcon = styled.div`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #6b7280;
  pointer-events: none;
`;

export const SearchBar = styled.div`
  position: relative;
  width: 300px;

  input {
    width: 100%;
    padding: 8px 16px;
    border: 1px solid ${palette.border};
    border-radius: 6px;
    font-size: 14px;
    background-color: ${palette.white};
    color: ${palette.textDark};

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
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 24px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    margin-bottom: 20px;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 16px;
    margin-bottom: 16px;
  }
`;

export const StatCard = styled.div`
  background: ${palette.white};
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid ${palette.border};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
    cursor: pointer;
  }

  .stat-title {
    font-size: 14px;
    color: #6c757d;
    margin-bottom: 8px;
    font-weight: ${typography.weight.medium};
  }

  .stat-value {
    font-size: 28px;
    font-weight: ${typography.weight.extrabold};
    color: ${palette.navy};
    line-height: 1.2;
  }
`;

export const TableContainer = styled.div`
  background: ${palette.white};
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  margin-top: 32px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
`;

export const TableHead = styled.thead`
  background: #f8f9fa;
  
  th:first-of-type {
    border-top-left-radius: 12px;
  }
  
  th:last-of-type {
    border-top-right-radius: 12px;
  }
`;

export const TableHeader = styled.th`
  padding: 16px 20px;
  text-align: left;
  font-weight: ${typography.weight.bold};
  font-size: 13px;
  color: #495057;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const TableRow = styled.tr`
  &:nth-of-type(even) {
    background-color: #f8f9fa;
  }

  &:hover {
    background-color: #f1f3f5;
  }
`;

export const TableCell = styled.td`
  padding: 16px 20px;
  border-bottom: 1px solid ${palette.border};
  color: ${palette.textDark};
  font-size: 14px;
`;

export const Button = styled.button`
  padding: 8px 12px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: ${typography.weight.medium};
  transition: all 0.2s ease;

  &.primary {
    background-color: ${palette.primary};
    color: ${palette.white};

    &:hover {
      background-color: #c5181e;
    }
  }

  &.secondary {
    background-color: ${palette.white};
    color: ${palette.navy};
    border: 1px solid ${palette.border};

    &:hover {
      background-color: #f8f9fa;
    }
  }
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