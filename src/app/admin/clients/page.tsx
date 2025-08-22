"use client";

import React, { useState } from "react";
import * as S from "../elements";
import { AppButton } from "@/components/Button/Button";
import Swal from "sweetalert2";

interface Client {
  id: number;
  name: string;
  email: string;
  status: "pending" | "approved" | "rejected";
  date: string;
}

export default function ClientsApproval() {
  const [clients, setClients] = useState<Client[]>([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      status: "pending",
      date: "08/20/2025"
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      status: "pending",
      date: "08/19/2025"
    },
    {
      id: 3,
      name: "Robert Johnson",
      email: "robert@example.com",
      status: "pending",
      date: "08/18/2025"
    },
    {
      id: 4,
      name: "Emily Davis",
      email: "emily@example.com",
      status: "approved",
      date: "08/17/2025"
    },
    {
      id: 5,
      name: "Michael Wilson",
      email: "michael@example.com",
      status: "rejected",
      date: "08/16/2025"
    }
  ]);

  const handleApprove = (id: number) => {
    setClients(clients.map(client =>
      client.id === id ? { ...client, status: "approved" } : client
    ));
  };

  const handleReject = (id: number) => {
    setClients(clients.map(client =>
      client.id === id ? { ...client, status: "rejected" } : client
    ));
  };

  const handleArchive = (id: number) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, archive it!"
    }).then((result) => {
      if (result.isConfirmed) {
        setClients(clients.filter(client => client.id !== id));
        Swal.fire({
          title: "Archived!",
          text: "The client has been archived.",
          icon: "success"
        });
      }
    });
  };

  return (
      <S.MainContent>
        <S.Title>Clients Approval</S.Title>

        <S.TableContainer>
        <S.Table>
          <S.TableHead>
            <tr>
              <S.TableHeader>NAME</S.TableHeader>
              <S.TableHeader>EMAIL</S.TableHeader>
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
                </S.TableCell>
                <S.TableCell>{client.email}</S.TableCell>
                <S.TableCell>
                  <S.StatusBadge status={client.status}>
                    {client.status.charAt(0).toUpperCase() + client.status.slice(1)}
                  </S.StatusBadge>
                </S.TableCell>
                <S.TableCell>{client.date}</S.TableCell>
                <S.TableCell>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    {client.status === "pending" ? (
                      <>
                        <S.ActionButton
                          onClick={() => handleApprove(client.id)}
                          style={{ backgroundColor: "#e6f7ed", color: "#027a48", marginRight: "8px" }}
                        >
                          Approve
                        </S.ActionButton>
                        <S.ActionButton
                          onClick={() => handleReject(client.id)}
                          style={{ backgroundColor: "#ffebee", color: "#c62828", marginRight: "8px" }}
                        >
                          Reject
                        </S.ActionButton>
                      </>
                    ) : (
                      <span style={{
                        color: client.status === "approved" ? "#027a48" : "#c62828",
                        marginRight: "8px",
                        minWidth: "150px" // To align with pending actions
                      }}>
                        {client.status === "approved" ? "Approved" : "Rejected"}
                      </span>
                    )}
                    <S.ActionButton
                        onClick={() => handleArchive(client.id)}
                        style={{ backgroundColor: "#fbeeebee", color: "#c62828" }}
                      >
                        Archive
                      </S.ActionButton>
                  </div>
                </S.TableCell>
              </S.TableRow>
            ))}
          </tbody>
        </S.Table>
      </S.TableContainer>
    </S.MainContent>
  );
}