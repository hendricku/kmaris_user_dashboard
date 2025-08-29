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
      const response = await fetch("/api/auth/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('user', JSON.stringify(data.user));

        Swal.fire({
          icon: 'success',
          title: 'Login Successful',
          text: 'Redirecting...',
          timer: 2000,
          showConfirmButton: false
        }).then(() => {
          window.location.href = 'https://kmaris.netlify.app/';
        });
      } else {
        const errorData = await response.json();
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: errorData.message || 'An unknown error occurred.',
        });
      }
    } catch (error) {
      console.error("Login error:", error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong! Please try again later.',
      });
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