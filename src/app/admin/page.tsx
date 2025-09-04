"use client";

import React, { useState, useEffect } from "react";
import * as S from "./elements";


// const clients = [
//   {
//     id: 1,
//     name: "Ninong",
//     position: "CEO A.K.A The Boss",
//     status: "Active",
//     date: "08/20/2025"
//   },
//   {
//     id: 2,
//     name: "Sir Nacho Spadiccini",
//     position: "The Big Boss",
//     status: "Delayed",
//     date: "08/10/2025"
//   },
//   {
//     id: 3,
//     name: "Lorem Ipsum",
//     position: "Lorem Ipsum",
//     status: "Pending",
//     date: "08/20/2025"
//   },

// ];

export default function AdminDashboard() {

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
    <S.MainContent>
      <S.Title>Client Dashboard</S.Title>
      <S.DashboardGrid>
        {stats.map((stat, index) => (
          <S.StatCard key={index}>
            <div className="stat-title">{stat.title}</div>
            <div className="stat-value">{stat.value}</div>
          </S.StatCard>
        ))}
      </S.DashboardGrid>

      {/* <S.TableContainer>
        <S.Table>
          <S.TableHead>
            <tr>
              <S.TableHeader>NAME</S.TableHeader>
              <S.TableHeader>STATUS</S.TableHeader>
              <S.TableHeader>DATE</S.TableHeader>
              <S.TableHeader>ACTION</S.TableHeader>
            </tr>
          </S.TableHead>
          <tbody>
            {clients.map(client => (
              <S.TableRow key={client.id}>
                <S.TableCell>
                  <div style={{ fontWeight: 500 }}>{client.name}</div>
                  <div style={{ fontSize: '12px', color: '#6c757d' }}>{client.position}</div>
                </S.TableCell>

                <S.TableCell>
                  <S.StatusBadge status={client.status}>
                    {client.status}
                  </S.StatusBadge>
                </S.TableCell>
                <S.TableCell>{client.date}</S.TableCell>
                <S.TableCell>
                  <S.ActionButton>View</S.ActionButton>
                </S.TableCell>
              </S.TableRow>
            ))}
          </tbody>
        </S.Table>
      </S.TableContainer> */}
    </S.MainContent>
  );
}