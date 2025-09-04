"use client";

import React from "react";
import * as S from "./elements";
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';

import Image from "next/image";
import Swal from 'sweetalert2';
// --- 1. REMOVED UNUSED IMPORT ---
// import { useRouter } from 'next/navigation'; 
import { useEffect, useState } from "react";

interface AdminHeaderProps {
  sidebarOpen: boolean;
  welcomeText?: string;
}

interface Notification {
  _id: string;
  message: string;
  read: boolean;
  createdAt: string;
  userId: string;
  formId?: string;
  userName?: string;
  formName?: string;
}

export default function AdminHeader({ sidebarOpen, welcomeText = "Welcome Admin" }: AdminHeaderProps) {
  // --- 2. REMOVED UNUSED VARIABLE ---
  // const router = useRouter(); 
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [showNotifications, setShowNotifications] = useState(false);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await fetch('/api/notifications');
        if (response.ok) {
          const data = await response.json();
          setNotifications(data);
        }
      } catch (error) {
        console.error("Failed to fetch notifications:", error);
      }
    };

    fetchNotifications();
  }, []);

  const unreadNotificationsCount = notifications.filter(n => !n.read).length;

  const handleAction = async (notificationId: string, userId: string, formId: string, action: 'grant' | 'reject') => {
    try {
      const response = await fetch('/api/form-access', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId,
          formId,
          action,
        }),
      });

      if (response.ok) {
        // Remove the notification from the list
        setNotifications(notifications.filter(n => n._id !== notificationId));
        Swal.fire('Success', `Form access has been ${action}ed.`, 'success');
      } else {
        const errorData = await response.json();
        Swal.fire('Error', errorData.message || 'An error occurred.', 'error');
      }
    } catch (error) {
      console.error('Failed to handle action:', error);
      Swal.fire('Error', 'An unexpected error occurred.', 'error');
    }
  };

  const handleNotificationClick = async (notification: Notification) => {
    // This function can be expanded if clicking the notification body should do something
    // For now, we just mark it as read if it's not already
    if (!notification.read) {
      try {
        const response = await fetch(`/api/notifications`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id: notification._id, read: true }),
        });

        if (response.ok) {
          setNotifications(notifications.map(n => n._id === notification._id ? { ...n, read: true } : n));
        }
      } catch (error) {
        console.error("Failed to mark notification as read:", error);
      }
    }
  };

  const handleLogout = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You will be logged out from your account.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, logout!'
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem('user');
        Swal.fire(
          'Logged Out!',
          'You have been successfully logged out.',
          'success'
        ).then(() => {
          window.location.href = 'https://accesskmaris.vercel.app/';
        });
      }
    });
  };

  return (
      <S.Header sidebarOpen={sidebarOpen}>
      <S.HeaderLeft>
        <a href="https://kmaris.netlify.app/">
          <Image
            src="/whitelogo.png"
            alt="Logo"
            width={140}
            height={40}
            style={{ objectFit: 'contain' }}
          />
        </a>
      </S.HeaderLeft>
              
      <S.HeaderCenter>
                <S.WelcomeText>{welcomeText}</S.WelcomeText>
              </S.HeaderCenter>
      
      <S.HeaderRight>
        <S.IconButton onClick={() => setShowNotifications(!showNotifications)}>
          <NotificationsIcon sx={{ fontSize: 24 }} />
          {unreadNotificationsCount > 0 && <S.Badge>{unreadNotificationsCount}</S.Badge>}
        </S.IconButton>
        {showNotifications && (
          <S.NotificationDropdown>
            {notifications.length > 0 ? (
              notifications.map(notification => (
                <S.NotificationItem key={notification._id} onClick={() => handleNotificationClick(notification)} read={notification.read}>
                  {notification.userName && notification.formName ? (
                    <p><b>{notification.userName}</b> requested <b>{notification.formName}</b></p>
                  ) : (
                    <p>{notification.message}</p>
                  )}
                  <small>{new Date(notification.createdAt).toLocaleString()}</small>
                  {notification.formId && !notification.read && (
                    <S.ActionButtons>
                      <S.ActionButton approve onClick={(e) => { e.stopPropagation(); handleAction(notification._id, notification.userId, notification.formId!, 'grant'); }}>
                        Grant Access
                      </S.ActionButton>
                      <S.ActionButton onClick={(e) => { e.stopPropagation(); handleAction(notification._id, notification.userId, notification.formId!, 'reject'); }}>
                        Reject
                      </S.ActionButton>
                    </S.ActionButtons>
                  )}
                </S.NotificationItem>
              ))
            ) : (
              <S.NotificationItem read>No new notifications</S.NotificationItem>
            )}
          </S.NotificationDropdown>
        )}
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