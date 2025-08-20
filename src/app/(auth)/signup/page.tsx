"use client";

import { Signup } from "@/components/Signup";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();

  const handleSignup = async (formData: {
    firstName: string;
    lastName: string;
    email: string;
    mobile: string;
    password: string;
    confirmPassword: string;
  }) => {
    try {
      console.log("Signing up:", formData);
      router.push("/");
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  const handleLogin = () => {
    router.push("/Login");
  };

  return <Signup onSubmit={handleSignup} onLogin={handleLogin} />;
}