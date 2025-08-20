"use client";

import React, { useState } from "react";
import styled from "@emotion/styled";
import Sidebar from "@/components/Sidebar/sidebar";
import AdminHeader from "@/components/AdminHeader/adminHeader";

interface AdminLayoutProps {
  children: React.ReactNode;
}

const LayoutContainer = styled.div`
  display: flex;
  min-height: 100vh;
`;

const MainContent = styled('main', {
  shouldForwardProp: (prop) => prop !== 'sidebarOpen',
})<{ sidebarOpen: boolean }>`
  flex: 1;
  margin-left: ${props => props.sidebarOpen ? "250px" : "70px"};
  padding: 84px 24px 24px;
  transition: all 0.3s ease;
  background-color: #f8f9fa;
  min-height: 100vh;
`;

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  
  return (
    <LayoutContainer>
      <Sidebar isOpen={sidebarOpen} onToggle={toggleSidebar} />
      <AdminHeader onMenuToggle={toggleSidebar} />
      <MainContent sidebarOpen={sidebarOpen}>
        {children}
      </MainContent>
    </LayoutContainer>
  );
};

export default AdminLayout;