"use client";

import { Login } from "@/components/Login/login";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      setError(null);
      console.log("Logging in:", email, password);
      
     
      if (email === "ninong@gmail.com" && password === "admin123") {
        router.push("/admin");
      } else if (email && password) {
       
        router.push("/");
      } else {
        // Invalid credentials
        setError("Invalid email or password");
      }
    } catch (error) {
      console.error("Login failed:", error);
      setError("Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignUp = () => {
    router.push("/signup");
  };

  const handleForgotPassword = () => {
    router.push("/forgot-password");
  };

  return (
      <Login
        onSubmit={handleLogin}
        onSignUp={handleSignUp}
        onForgotPassword={handleForgotPassword}
        error={error}
        isLoading={isLoading}
      />
    );
}