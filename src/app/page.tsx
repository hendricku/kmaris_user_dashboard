"use client";

import React, { useState, useEffect } from "react";
import AdminLayout from "@/components/AdminLayout/adminLayout";
import * as S from "./admin/elements";

export default function UserDashboard() {
  const [stats, setStats] = useState([
    { title: "Approved Clients", value: "0" },
    { title: "Total Forms", value: "0" },
    { title: "Pending Forms", value: "0" },
    { title: "Pending Clients", value: "0" },
  ]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('/api/dashboard-stats');
        const data = await response.json();
        setStats([
          { title: "Approved Clients", value: data.approvedClients.toString() },
          { title: "Total Forms", value: data.totalForms.toString() },
          { title: "Pending Forms", value: data.pendingForms.toString() },
          { title: "Pending Clients", value: data.pendingClients.toString() },
        ]);
      } catch (error) {
        console.error("Failed to fetch dashboard stats:", error);
      }
    };

    fetchStats();
  }, []);

  return (
    <AdminLayout>
      <S.MainContent>
        <S.Title>User Dashboard</S.Title>
        <S.DashboardGrid>
          {stats.map((stat, index) => (
            <S.StatCard key={index}>
              <div className="stat-title">{stat.title}</div>
              <div className="stat-value">{stat.value}</div>
            </S.StatCard>
          ))}
        </S.DashboardGrid>
      </S.MainContent>
    </AdminLayout>
  );
}
