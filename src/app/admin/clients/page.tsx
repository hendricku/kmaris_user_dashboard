"use client";

import React, { useState } from "react";
import * as S from "../elements";
import * as C from "./styles";
import Swal from "sweetalert2";
import { Visibility, VisibilityOff } from "@mui/icons-material";

interface Client {
  id: string;
  name: string;
  email: string;
  status: "pending" | "approved" | "rejected" | "archived";
  date: string;
}

interface NewClient {
  firstName: string;
  lastName: string;
  email: string;
  mobileNumber: string;
  password?: string;
}

export default function ClientsApproval() {
  const [clients, setClients] = useState<Client[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [newClient, setNewClient] = useState<NewClient>({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    password: "",
  });

  React.useEffect(() => {
    fetchClients().finally(() => setIsLoading(false));
  }, []);

  // Fetch clients on component mount
  const fetchClients = async () => {
    try {
      console.log('Fetching clients...');
      const response = await fetch('/api/clients', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        cache: 'no-store'
      });
      
      console.log('Response status:', response.status);
      
      // Check if the response is JSON
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error(`Expected JSON response but got ${contentType}`);
      }
      
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

  const handleAddClient = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setNewClient({
      firstName: "",
      lastName: "",
      email: "",
      mobileNumber: "",
      password: "",
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewClient((prev) => ({ ...prev, [name]: value }));
  };

  const generatePassword = () => {
    const randomPassword = Math.random().toString(36).slice(-8);
    setNewClient((prev) => ({ ...prev, password: randomPassword }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/clients/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newClient),
      });
      //failed to add client nag add lang nito just to notify if it failed testing only

      if (!response.ok) {
        throw new Error('Failed to add client');
      }

      await fetchClients();
      handleCloseModal();

      Swal.fire({
        title: 'Success!',
        text: 'Client added successfully',
        icon: 'success',
        timer: 2000,
        showConfirmButton: false
      });
    } catch (error) {
      console.error('Error adding client:', error);
      Swal.fire({
        title: 'Error',
        text: 'Failed to add client',
        icon: 'error'
      });
    }
  };

  const handleConfirm = () => {
    // Logic to add the new client
    console.log("New client data:", newClient);
    // Close the modal
    setIsModalOpen(false);
  };

  const clientsPerPage = 10;
  const totalPages = Math.ceil(clients.length / clientsPerPage);

  const paginatedClients = clients.slice(
    (currentPage - 1) * clientsPerPage,
    currentPage * clientsPerPage
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <S.Header>
        <S.Title>Clients</S.Title>
        <S.HeaderRight>
          <S.Button
            className="primary"
            onClick={() => setIsModalOpen(true)}
            style={{ width: "200px" }}
          >
            Add New Client
          </S.Button>
        </S.HeaderRight>
      </S.Header>

      <S.TableContainer>
        <S.Table>
          <S.TableHead>
            <S.TableRow>
              <S.TableHeader>Name</S.TableHeader>
              <S.TableHeader>Email</S.TableHeader>
              <S.TableHeader>Date</S.TableHeader>
              <S.TableHeader>Status</S.TableHeader>
              <S.TableHeader>Actions</S.TableHeader>
            </S.TableRow>
          </S.TableHead>
          <tbody>
            {isLoading ? (
              <S.TableRow>
                <S.TableCell colSpan={5} style={{ textAlign: "center" }}>
                  Loading...
                </S.TableCell>
              </S.TableRow>
            ) : (
              paginatedClients.map((client) => (
                <S.TableRow key={client.id}>
                  <S.TableCell>{client.name}</S.TableCell>
                  <S.TableCell>{client.email}</S.TableCell>
                  <S.TableCell>{client.date}</S.TableCell>
                  <S.TableCell>
                    <C.StatusBadge status={client.status}>
                      {client.status}
                    </C.StatusBadge>
                  </S.TableCell>
                  <S.TableCell>
                    <div style={{ display: "flex", gap: "10px" }}>
                      {client.status === "pending" && (
                        <S.Button
                          className="primary"
                          onClick={() => handleApprove(client.id)}
                        >
                          Approve
                        </S.Button>
                      )}
                      {client.status === "pending" && (
                        <S.Button
                          className="secondary"
                          onClick={() => handleReject(client.id)}
                        >
                          Reject
                        </S.Button>
                      )}
                      {client.status !== "pending" && (
                        <S.Button
                          className="secondary"
                          onClick={() => handleArchive(client.id)}
                        >
                          Archive
                        </S.Button>
                      )}
                    </div>
                  </S.TableCell>
                </S.TableRow>
              ))
            )}
          </tbody>
        </S.Table>
      </S.TableContainer>

      {totalPages > 1 && (
        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginTop: '1rem' }}>
          <span>Page {currentPage} of {totalPages}</span>
          <S.ActionButton onClick={handlePrevPage} disabled={currentPage === 1} style={{ marginLeft: '1rem' }}>
            Previous
          </S.ActionButton>
          <S.ActionButton onClick={handleNextPage} disabled={currentPage === totalPages} style={{ marginLeft: '0.5rem' }}>
            Next
          </S.ActionButton>
        </div>
      )}
    </>
  );
}