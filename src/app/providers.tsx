"use client";

import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "@emotion/react";
import { theme } from "@/theme";

interface Props {
  children: React.ReactNode;
}

export default function Providers({ children }: Props) {
  return (
    <SessionProvider>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </SessionProvider>
  );
}