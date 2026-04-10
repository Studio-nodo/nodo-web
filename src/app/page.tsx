"use client";

import { useState, useEffect } from "react";
import AnimatedBackground from "@/components/AnimatedBackground";
import { MiniNavbar } from "@/components/ui/mini-navbar";
import ScrollProgress from "@/components/ScrollProgress";
import ParticleField from "@/components/ParticleField";
import WhatsAppButton from "@/components/WhatsAppButton";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import BenefitsSection from "@/components/BenefitsSection";
import ProcessSection from "@/components/ProcessSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { setMounted(true); }, []);

  if (!mounted) {
    return <main style={{ background: "#000000", minHeight: "100vh" }} />;
  }

  return (
    <main className="relative" style={{ background: "#000000" }}>
      <AnimatedBackground />
      <ParticleField />
      <ScrollProgress />
      <MiniNavbar />
      <WhatsAppButton />
      <div className="relative z-10">
        <HeroSection />
        <ServicesSection />
        <BenefitsSection />
        <ProcessSection />
        <ContactSection />
      </div>
    </main>
  );
}
