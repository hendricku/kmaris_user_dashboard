"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { LoginProps } from "./interface";
import * as S from "./elements";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export function Login({ onSignUp, onForgotPassword, isLoading }: LoginProps) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [loginError, setLoginError] = useState<string>("");
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError(""); // Clear any previous errors
    
    try {
      const response = await fetch('/api/auth/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setLoginError(data.error || 'Login failed');
        return;
      }

      // Store user info in localStorage
      const userInfo = {
        name: `${data.user.firstName} ${data.user.lastName}`.trim(),
        role: data.user.role,
        email: data.user.email
      };
      localStorage.setItem('userInfo', JSON.stringify(userInfo));

      // Show welcome notification
      Swal.fire({
        title: `Welcome back, ${data.user.firstName}!`,
        icon: 'success',
        timer: 2000,
        showConfirmButton: false,
        position: 'top-end',
        toast: true,
        customClass: {
          popup: 'welcome-toast'
        }
      });

      // If user is admin, redirect to admin dashboard
      if (data.user.role === 'admin') {
        router.push('/admin');
      } else {
        // For regular clients, redirect to client dashboard or home
        router.push('/');
      }
    } catch (error) {
      console.error('Login error:', error);
      setLoginError('An unexpected error occurred. Please try again.');
    }
  };

  const handleGoToHomepage = () => {
    router.push("/");
  };

  return (
    <S.PageWrapper>
      <S.Container>
        <S.ImageSection>
          <Image
            src="/Herologo.webp"
            alt="Background"
            fill
            style={{ objectFit: "cover" }}
          />
          <S.ImageContent>
            <S.LogoWrap onClick={handleGoToHomepage}>
              <Image 
                src="/whitelogo.png" 
                alt="KMARIS LLC" 
                width={180} 
                height={100}
                priority
              />
            </S.LogoWrap>
            <S.ImageTitle>Welcome to KMARIS LLC</S.ImageTitle>
            <S.ImageText>
              Your trusted partner for professional immigration services
            </S.ImageText>
            <S.FeatureList>
              <S.FeatureItem>Expert immigration consultations</S.FeatureItem>
              <S.FeatureItem>Visa and green card applications</S.FeatureItem>
              <S.FeatureItem>Document preparation assistance</S.FeatureItem>
              <S.FeatureItem>Case status tracking</S.FeatureItem>
            </S.FeatureList>
          </S.ImageContent>
        </S.ImageSection>
        
        <S.FormSection>
          <S.Title>Welcome Back</S.Title>
          <S.Subtitle>Login into your account</S.Subtitle>
          
          <S.Form onSubmit={handleSubmit}>
            <S.InputGroup>
              <S.Label>Email</S.Label>
              <S.Input
                type="email"
                placeholder="sample@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </S.InputGroup>

            <S.InputGroup>
              <S.Label>Password</S.Label>
              <S.InputWrapper>
                <S.Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <S.IconButton
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </S.IconButton>
              </S.InputWrapper>
            </S.InputGroup>

            {loginError && (
              <S.ErrorMessage>{loginError}</S.ErrorMessage>
            )}
            
                        <S.ForgotPassword href="#" onClick={onForgotPassword}>
                          Forgot Password?
                        </S.ForgotPassword>
            
                        <S.SubmitButton type="submit" disabled={isLoading}>
                          {isLoading ? "Logging in..." : "Login now"}
                        </S.SubmitButton>

            <S.Divider>OR</S.Divider>

            <S.SignUpButton type="button" onClick={onSignUp}>
              Sign up now
            </S.SignUpButton>

            <S.GoBackButton type="button" onClick={handleGoToHomepage}>
              Return to Homepage
            </S.GoBackButton>
          </S.Form>
        </S.FormSection>
      </S.Container>
    </S.PageWrapper>
  );
}

export default Login;