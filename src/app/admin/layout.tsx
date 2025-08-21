"use client";

import React from "react";
import { Inter } from "next/font/google";
import AdminLayout from "@/components/AdminLayout/adminLayout";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={inter.className} suppressHydrationWarning>
      <AdminLayout>
        {children}
      </AdminLayout>
    </div>
  );
}