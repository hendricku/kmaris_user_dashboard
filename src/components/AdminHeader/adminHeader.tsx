"use client";

import React from "react";
import * as S from "./elements";
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import Image from "next/image";
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';

interface AdminHeaderProps {
  onMenuToggle: () => void;
  sidebarOpen: boolean;
}

export default function AdminHeader({ onMenuToggle, sidebarOpen }: AdminHeaderProps) {
  const router = useRouter();

  const handleLogout = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You will be logged out from the dashboard",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, logout!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Logged Out!',
          'You have been successfully logged out.',
          'success'
        ).then(() => {
          router.push('/Login');
        });
      }
    });
  };

  return (
      <S.Header sidebarOpen={sidebarOpen}>
      <S.HeaderLeft>
     
        <Image
                  src="/whitelogo.png"
                  alt="Logo"
                  width={140}
                  height={40}
                  style={{ objectFit: 'contain' }}
                />
        </S.HeaderLeft>
              
              <S.HeaderCenter>
                <S.WelcomeText>Welcome Admin</S.WelcomeText>
              </S.HeaderCenter>
      
      <S.HeaderRight>
        <S.IconButton>
          <NotificationsIcon sx={{ fontSize: 24 }} />
          <S.Badge>3</S.Badge>
        </S.IconButton>
        <S.IconButton>
          <SettingsIcon sx={{ fontSize: 24 }} />
        </S.IconButton>
        <S.AvatarButton>
          <PersonIcon sx={{ fontSize: 24 }} />
        </S.AvatarButton>
        <S.LogoutButton onClick={handleLogout}>
          <LogoutIcon sx={{ fontSize: 20 }} />
          <span>Logout</span>
        </S.LogoutButton>
      </S.HeaderRight>
    </S.Header>
  );
}