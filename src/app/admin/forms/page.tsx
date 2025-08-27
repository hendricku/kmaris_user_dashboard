'use client';
import React, { useState, useEffect, useCallback } from 'react';
import * as S from '../elements';
import Swal from 'sweetalert2';
import styled from '@emotion/styled';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 12px;
  width: 500px;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
`;

const ModalHeader = styled.h2`
    margin: 0;
    font-size: 24px;
    font-weight: 600;
    color: #111827;
    margin-bottom: 1.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  margin-bottom: 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  font-size: 14px;
  background-color: #fff;
  color: #111827;
  transition: all 0.3s ease;

  &:focus {
    border-color: #2563eb;
    box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.1);
    outline: none;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 12px 16px;
  margin-bottom: 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  font-size: 14px;
  background-color: white;
  color: #111827;
  transition: all 0.3s ease;

  &:focus {
    border-color: #2563eb;
    box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.1);
    outline: none;
  }
`;

const ModalActions = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
    margin-top: 1.5rem;
`;


interface Form {
  id: string;
  title: string;
  type: string;
  subtitle: string;
  package?: string;
  status: 'active' | 'pending';
}

const FormsPage = () => {
  const [forms, setForms] = useState<Form[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentForm, setCurrentForm] = useState<Form | null>(null);

  const fetchForms = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/forms');
      const data = await response.json();
      setForms(data.forms || []);
    } catch (error) {
      console.error('Failed to fetch forms:', error);
      Swal.fire('Error', 'Failed to fetch forms', 'error');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchForms();
  }, [fetchForms]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    };

    const filteredForms = forms.filter(form =>
      form.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleDelete = (id: string) => {
      Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await fetch('/api/forms', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id }),
          });
          Swal.fire('Deleted!', 'Your form has been deleted.', 'success');
          fetchForms();
        } catch (error) {
          console.error('Failed to delete form:', error);
          Swal.fire('Error', 'Failed to delete form', 'error');
        }
      }
    });
  };

  const handleSave = async (formData: Form | Omit<Form, 'id'>) => {
    const isEditing = 'id' in formData;
    const url = '/api/forms';
    const method = isEditing ? 'PUT' : 'POST';

    try {
      const response = await fetch(url, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(isEditing ? 'Failed to update form' : 'Failed to create form');
      }
      
      Swal.fire('Saved!', `Form has been ${isEditing ? 'updated' : 'created'}.`, 'success');
      fetchForms();
      setIsModalOpen(false);
      setCurrentForm(null);
    } catch (error) {
      console.error('Failed to save form:', error);
      Swal.fire('Error', 'Failed to save form', 'error');
    }
  };

  const openModal = (form: Form | null) => {
    setCurrentForm(form);
    setIsModalOpen(true);
  };

  return (
    <S.MainContent>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <S.Title>All Forms</S.Title>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <S.SearchContainer style={{marginBottom: 0}}>
                <S.SearchInput
                type="text"
                placeholder="Search by form title..."
                value={searchTerm}
                onChange={handleSearchChange}
                />
                <S.SearchIcon>
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                </S.SearchIcon>
            </S.SearchContainer>
            <S.ActionButton onClick={() => openModal(null)} style={{ backgroundColor: "#e6f7ed", color: "#027a48" }}>
                Add Form
            </S.ActionButton>
        </div>
      </div>
      
      {isLoading ? (
        <p>Loading forms...</p>
      ) : (
        <S.TableContainer>
            <S.Table>
                <S.TableHead>
                <tr>
                    <S.TableHeader>Title</S.TableHeader>
                    <S.TableHeader>Subtitle</S.TableHeader>
                    <S.TableHeader>Type</S.TableHeader>
                    <S.TableHeader>Status</S.TableHeader>
                    <S.TableHeader>Actions</S.TableHeader>
                </tr>
                </S.TableHead>
                <tbody>
                {filteredForms.map(form => {
                    const status = form.status || 'pending';
                    return (
                    <S.TableRow key={form.id}>
                    <S.TableCell>{form.title}</S.TableCell>
                    <S.TableCell>{form.subtitle}</S.TableCell>
                    <S.TableCell>{form.type}</S.TableCell>
                    <S.TableCell>
                        <S.StatusBadge status={status === 'active' ? 'approved' : 'pending'}>
                          {status.charAt(0).toUpperCase() + status.slice(1)}
                        </S.StatusBadge>
                    </S.TableCell>
                    <S.TableCell>
                        <S.ActionButton onClick={() => openModal(form)}>Edit</S.ActionButton>
                        <S.ActionButton onClick={() => handleDelete(form.id)} style={{ backgroundColor: "#ffebee", color: "#c62828", marginLeft: '8px' }}>Delete</S.ActionButton>
                    </S.TableCell>
                    </S.TableRow>
                )})}
                </tbody>
            </S.Table>
        </S.TableContainer>
      )}
      {isModalOpen && (
        <FormModal
          onClose={() => setIsModalOpen(false)}
          onSave={handleSave}
          form={currentForm}
        />
      )}
    </S.MainContent>
  );
};

interface FormModalProps {
  onClose: () => void;
  onSave: (data: any) => void;
  form?: Form | null;
}

const FormModal: React.FC<FormModalProps> = ({ onClose, onSave, form }) => {
  const [formData, setFormData] = useState({
    title: form?.title || '',
    subtitle: form?.subtitle || '',
    type: form?.type || '',
    package: form?.package || '',
    status: form?.status || 'active',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(form ? { ...formData, id: form.id } : formData);
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <ModalHeader>{form ? 'Edit Form' : 'Add New Form'}</ModalHeader>
        <form onSubmit={handleSubmit}>
          <Input name="title" value={formData.title} onChange={handleChange} placeholder="Title" required />
          <Input name="subtitle" value={formData.subtitle} onChange={handleChange} placeholder="Subtitle" required />
          <Input name="type" value={formData.type} onChange={handleChange} placeholder="Type" required />
          <Input name="package" value={formData.package} onChange={handleChange} placeholder="Package (optional)" />
          <Select name="status" value={formData.status} onChange={handleChange}>
            <option value="active">Active</option>
            <option value="pending">Pending</option>
          </Select>
          <ModalActions>
            <S.ActionButton type="button" onClick={onClose}>Cancel</S.ActionButton>
            <S.ActionButton type="submit" style={{ backgroundColor: "#e6f7ed", color: "#027a48" }}>Save</S.ActionButton>
          </ModalActions>
        </form>
      </ModalContent>
    </ModalOverlay>
  );
};

export default FormsPage;