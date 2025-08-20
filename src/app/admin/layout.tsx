"use client";

import React from "react";
import { Inter } from "next/font/google";
import styled from "@emotion/styled";

const inter = Inter({ subsets: ["latin"] });

const LayoutWrapper = styled.div({
  display: "flex",
  minHeight: "100vh",
});

const MainContent = styled.main({
  flex: 1,
  padding: "20px",
});

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={inter.className} suppressHydrationWarning>
      <LayoutWrapper>
        <MainContent>{children}</MainContent>
      </LayoutWrapper>
    </div>
  );
}