"use client";

import { Login } from "@/components/Login/login";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = async (email: string, password: string) => {
    try {
      console.log("Logging in:", email, password);
      router.push("/");
    } catch (error) {
      console.error("Login failed:", error);
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
    />
  );
}