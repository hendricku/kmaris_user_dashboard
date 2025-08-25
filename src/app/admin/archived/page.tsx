"use client";

import React, { useState, useEffect } from "react";
import * as S from "../../admin/elements";
import Swal from "sweetalert2";

interface ArchivedClient {
  id: string;
  name: string;
  email: string;
  status: string;
  date: string;
}

export default function ArchivedClients() {
  const [clients, setClients] = useState<ArchivedClient[]>([]);

  const fetchArchivedClients = async () => {
    try {
      const response = await fetch('/api/clients/archived/');
      if (!response.ok) {
        throw new Error('Failed to fetch archived clients');
      }
      const data = await response.json();
      
      const formattedClients = data.map((client: any) => ({
        id: client._id.toString(),
        name: `${client.firstName || ''} ${client.lastName || ''}`.trim() || 'Unknown',
        email: client.email || 'No email',
        status: client.status,
        date: client.updatedAt ? new Date(client.updatedAt).toLocaleDateString() : 'Unknown date'
      }));
      
      setClients(formattedClients);
    } catch (error) {
      console.error('Error:', error);
      Swal.fire({
        title: 'Error',
        text: 'Failed to fetch archived clients',
        icon: 'error'
      });
    }
  };

  useEffect(() => {
    fetchArchivedClients();
  }, []);

  const handleAction = async (id: string, action: 'approve' | 'delete') => {
    try {
      if (action === 'delete') {
        const result = await Swal.fire({
          title: 'Delete Permanently',
          text: "This action cannot be undone!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#d33',
          cancelButtonColor: '#3085d6',
          confirmButtonText: 'Yes, delete permanently!'
        });

        if (!result.isConfirmed) return;
      } else {
        // Confirmation for restoring
        const result = await Swal.fire({
          title: 'Restore Client',
          text: "Client will be restored as pending and will need approval again",
          icon: 'info',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, restore as pending'
        });

        if (!result.isConfirmed) return;
      }

      const response = await fetch('/api/clients/update-status/', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          clientId: id,
          status: action === 'approve' ? 'pending' : 'deleted'
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to update client');
      }

      // Refresh the list
      await fetchArchivedClients();

      Swal.fire({
        title: 'Success!',
        text: action === 'approve' 
          ? 'Client restored and pending approval'
          : 'Client deleted permanently',
        icon: 'success',
        timer: 2000,
        showConfirmButton: false
      });
    } catch (error) {
      console.error('Error:', error);
      Swal.fire({
        title: 'Error',
        text: `Failed to ${action === 'approve' ? 'restore' : 'delete'} client`,
        icon: 'error'
      });
    }
  };

  return (
    <S.MainContent>
      <S.Title>Archived Clients</S.Title>

      <S.TableContainer>
        <S.Table>
          <S.TableHead>
            <tr>
              <S.TableHeader>NAME</S.TableHeader>
              <S.TableHeader>EMAIL</S.TableHeader>
              <S.TableHeader>ARCHIVED DATE</S.TableHeader>
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
                <S.TableCell>{client.date}</S.TableCell>
                <S.TableCell>
                  <div style={{ display: "flex", gap: "8px" }}>
                    <S.ActionButton
                      onClick={() => handleAction(client.id, 'approve')}
                      style={{ backgroundColor: "#e6f7ed", color: "#027a48" }}
                      title="Restore client as pending for approval"
                    >
                      Restore to Pending
                    </S.ActionButton>
                    <S.ActionButton
                      onClick={() => handleAction(client.id, 'delete')}
                      style={{ backgroundColor: "#ffebee", color: "#c62828" }}
                      title="Permanently delete client"
                    >
                      Delete Permanently
                    </S.ActionButton>
                  </div>
                </S.TableCell>
              </S.TableRow>
            ))}
            {clients.length === 0 && (
              <tr>
                <td colSpan={4} style={{ textAlign: 'center', padding: '2rem' }}>
                  No archived clients found
                </td>
              </tr>
            )}
          </tbody>
        </S.Table>
      </S.TableContainer>
    </S.MainContent>
  );
}
