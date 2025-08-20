"use client";

import { Hero } from "@/components/Hero/Hero";
import { Services } from "@/components/Services/Services";
import { Offering } from "@/components/Offering/Offering";
import { Feedback } from "@/components/Feedback/Feedback";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main className="animate-fade-in">
      <Hero />
      <Services />
      <Offering />
      <Feedback />
      <Footer />
    </main>
  );
}