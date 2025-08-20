"use client";

import React, { useState, ChangeEvent } from "react";
import Image from "next/image";
import * as S from "./elements";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

interface SignupFormData {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  password: string;
  confirmPassword: string;
}

export interface SignupProps {
  onSubmit: (data: SignupFormData) => void;
  onLogin: () => void;
}

export function Signup({ onSubmit, onLogin }: SignupProps) {
  const [formData, setFormData] = useState<SignupFormData>({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <S.PageWrapper>
      <S.Container>
        <S.LeftSection>
          <Image
            src="/Herologo.webp"
            alt="Immigration Services"
            fill
            priority
            style={{ objectFit: "cover" }}
          />
          <S.Overlay />
          <S.ImageContent>
            <S.ImageTitle>Join KMARIS LLC</S.ImageTitle>
            <S.ImageText>
              We provide comprehensive immigration services to help you navigate the complex immigration process.
            </S.ImageText>
            <S.FeatureList>
              <S.FeatureItem>Expert immigration consultants</S.FeatureItem>
              <S.FeatureItem>Personalized service</S.FeatureItem>
              <S.FeatureItem>Secure document handling</S.FeatureItem>
              <S.FeatureItem>Regular status updates</S.FeatureItem>
              <S.FeatureItem>Affordable service packages</S.FeatureItem>
            </S.FeatureList>
          </S.ImageContent>
        </S.LeftSection>

        <S.FormSection>
          <S.LogoWrap>
            <Image
              src="/Logo.png"
              alt="KMARIS LLC"
              width={180}
              height={48}
              priority
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </S.LogoWrap>
          <S.Title>Create Your Account</S.Title>
          <S.Subtitle>
            Join us to access premium immigration services and stay updated on your application status
          </S.Subtitle>

          <S.Form onSubmit={handleSubmit}>
            <S.Row>
              <S.InputGroup>
                <S.Label>First Name</S.Label>
                <S.Input
                  name="firstName"
                  type="text"
                  placeholder="Enter your first name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </S.InputGroup>

              <S.InputGroup>
                <S.Label>Last Name</S.Label>
                <S.Input
                  name="lastName"
                  type="text"
                  placeholder="Enter your last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </S.InputGroup>
            </S.Row>

            <S.InputGroup>
              <S.Label>Email</S.Label>
              <S.Input
                name="email"
                type="email"
                placeholder="sample@gmail.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </S.InputGroup>

            <S.InputGroup>
              <S.Label>Mobile No.</S.Label>
              <S.Input
                name="mobile"
                type="tel"
                placeholder="+1 (555) 000-0000"
                value={formData.mobile}
                onChange={handleChange}
                required
              />
            </S.InputGroup>

            <S.Row>
              <S.InputGroup>
                <S.Label>Password</S.Label>
                <S.InputWrapper>
                  <S.Input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter password"
                    value={formData.password}
                    onChange={handleChange}
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

              <S.InputGroup>
                <S.Label>Confirm Password</S.Label>
                <S.InputWrapper>
                  <S.Input
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                  <S.IconButton
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                  </S.IconButton>
                </S.InputWrapper>
              </S.InputGroup>
            </S.Row>

            <S.SubmitButton type="submit">Create Account</S.SubmitButton>

            <S.Divider>OR</S.Divider>

            <S.LoginButton type="button" onClick={onLogin}>
              Login now
            </S.LoginButton>
          </S.Form>
        </S.FormSection>
      </S.Container>
    </S.PageWrapper>
  );
}

export default Signup;