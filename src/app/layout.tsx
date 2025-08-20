import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/header";
import EmotionRegistry from "./emotion";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "KMARIS - Immigration Forms Expert | Professional Immigration Services",
  description: "Specialized in Family-Based Immigration, Adjustment of Status, Consular Processing, Asylum/Refugee Applications, Non-Immigrant Visas, VAWA, and other immigration services. Expert legal assistance for all your immigration needs.",
  keywords: "immigration, immigration forms, family-based immigration, adjustment of status, consular processing, asylum, refugee, VAWA, green card, visa services",
  authors: [{ name: "KMARIS Immigration Services" }],
  creator: "KMARIS",
  publisher: "KMARIS Immigration Services",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://kmaris.com"),
  openGraph: {
    title: "KMARIS - Immigration Forms Expert",
    description: "Professional immigration services specializing in family-based immigration, adjustment of status, and more.",
    url: "https://kmaris.com",
    siteName: "KMARIS Immigration Services",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KMARIS - Immigration Forms Expert",
    description: "Professional immigration services specializing in family-based immigration, adjustment of status, and more.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#002542" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body>
        <EmotionRegistry>
          <Header />
          {children}
        </EmotionRegistry>
      </body>
    </html>
  );
}
