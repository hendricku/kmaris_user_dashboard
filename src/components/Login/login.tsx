"use client";

import React, { useState } from "react";
import Image from "next/image";
import { LoginProps } from "./interface";
import * as S from "./elements";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export function Login({ onSubmit, onSignUp, onForgotPassword }: LoginProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(email, password);
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
            <S.LogoWrap>
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

            <S.ForgotPassword href="#" onClick={onForgotPassword}>
              Forgot Password?
            </S.ForgotPassword>

            <S.SubmitButton type="submit">
              Login now
            </S.SubmitButton>

            <S.Divider>OR</S.Divider>

            <S.SignUpButton type="button" onClick={onSignUp}>
              Sign up now
            </S.SignUpButton>
          </S.Form>
        </S.FormSection>
      </S.Container>
    </S.PageWrapper>
  );
}

export default Login;