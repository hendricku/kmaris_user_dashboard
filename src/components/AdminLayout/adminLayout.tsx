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

const MainContent = styled('main')`
  flex: 1;
  padding: 72px 24px 24px;
  background-color: #f8f9fa;
  min-height: 100vh;
  
  @media (max-width: 768px) {
    padding: 72px 16px 24px;
  }
`;
// a
const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  
  return (
      <LayoutContainer>
        <Sidebar isOpen={sidebarOpen} onToggle={toggleSidebar} />
        <AdminHeader sidebarOpen={sidebarOpen} />
        <MainContent>
                {children}
              </MainContent>
      </LayoutContainer>
    );
};

export default AdminLayout;