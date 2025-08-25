"use client";

import React, { useState } from "react";
import * as S from "../elements";
// Removed unused import
import Swal from "sweetalert2";

interface Client {
  id: string;
  name: string;
  email: string;
  status: "pending" | "approved" | "rejected" | "archived";
  date: string;
}

export default function ClientsApproval() {
  const [clients, setClients] = useState<Client[]>([]);

  // Fetch clients on component mount
  const fetchClients = async () => {
    try {
      console.log('Fetching clients...');
      const response = await fetch('/api/clients/');
      console.log('Response status:', response.status);
      
      const data = await response.json();
      console.log('Response data:', data);
      
      if (!response.ok) {
        throw new Error(data.details || data.error || 'Failed to fetch clients');
      }
      
      if (!Array.isArray(data)) {
        console.error('Unexpected data format:', data);
        throw new Error('Received invalid data format from server');
      }
      
      // Transform the data to match our Client interface
      interface ClientData {
        _id: { toString(): string };
        firstName: string;
        lastName: string;
        email: string;
        status: string;
        createdAt: string;
      }
      
      const formattedClients = data.map((client: ClientData) => ({
        id: client._id.toString(), // Convert MongoDB ObjectId to string
        name: `${client.firstName || ''} ${client.lastName || ''}`.trim() || 'Unknown',
        email: client.email || 'No email',
        status: (client.status || 'pending') as Client['status'],
        date: client.createdAt ? new Date(client.createdAt).toLocaleDateString() : 'Unknown date'
      }));
      
      console.log('Formatted clients:', formattedClients);
      setClients(formattedClients);
    } catch (error) {
      console.error('Error fetching clients:', error);
      Swal.fire({
        title: 'Error',
        text: error instanceof Error ? error.message : 'Failed to fetch clients',
        icon: 'error'
      });
    }
  };

  // Fetch clients on component mount and after status updates
  React.useEffect(() => {
    fetchClients();
  }, []);

  const updateClientStatus = async (id: string, newStatus: string) => {
    try {
      const response = await fetch('/api/clients/update-status/', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          clientId: id, 
          status: newStatus 
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to update client status');
      }

      // Refresh the client list after update
      await fetchClients();

      // Show success message
      Swal.fire({
        title: 'Success!',
        text: `Client ${newStatus} successfully`,
        icon: 'success',
        timer: 2000,
        showConfirmButton: false
      });
    } catch (error) {
      console.error('Error updating client status:', error);
      Swal.fire({
        title: 'Error',
        text: 'Failed to update client status',
        icon: 'error'
      });
    }
  };

  const handleApprove = (id: string) => {
    updateClientStatus(id, 'approved');
  };

  const handleReject = (id: string) => {
    Swal.fire({
      title: 'Confirm Rejection',
      text: 'Are you sure you want to reject this client?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, reject'
    }).then((result) => {
      if (result.isConfirmed) {
        updateClientStatus(id, 'rejected');
      }
    });
  };

  const handleArchive = (id: string) => {
    Swal.fire({
      title: "Archive Client",
      text: "The client will be moved to the archive. You can restore them from the Archive page.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, archive it!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await fetch('/api/clients/update-status/', {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              clientId: id,
              status: 'archived'
            }),
          });

          if (!response.ok) {
            throw new Error('Failed to archive client');
          }

          // Remove the archived client from the current list
          setClients(clients.filter(client => client.id !== id));

          Swal.fire({
            title: 'Archived!',
            text: 'The client has been moved to the Archive page',
            icon: 'success',
            timer: 2000,
            showConfirmButton: false
          });
        } catch (error) {
          console.error('Error archiving client:', error);
          Swal.fire({
            title: 'Error',
            text: 'Failed to archive client',
            icon: 'error'
          });
        }
      }
    });
  };

  const [searchTerm, setSearchTerm] = useState("");

  const filteredClients = clients.filter(client => 
    client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
      <S.MainContent>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <S.Title>Clients Approval</S.Title>
          
          <S.SearchContainer>
            <S.SearchInput
              type="text"
              placeholder="Search by name or email..."
              value={searchTerm}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
            />
            <S.SearchIcon>
              <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </S.SearchIcon>
          </S.SearchContainer>
        </div>

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
            {filteredClients.map(client => (
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