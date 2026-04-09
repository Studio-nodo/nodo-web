"use client";

import { motion } from "framer-motion";
import AnimatedBackground from "@/components/AnimatedBackground";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import BenefitsSection from "@/components/BenefitsSection";
import ProcessSection from "@/components/ProcessSection";
import ContactSection from "@/components/ContactSection";
import Navbar from "@/components/Navbar";
import ParticleField from "@/components/ParticleField";
import ScrollProgress from "@/components/ScrollProgress";
import WhatsAppButton from "@/components/WhatsAppButton";
import Image from "next/image";

const imgLogoNodo = "https://www.figma.com/api/mcp/asset/4454751b-41d9-4e84-937b-cfd950aad42d";

export default function Home() {
  return (
    <main className="relative" style={{ background: "#07080c" }}>
      {/* Navbar */}
      <Navbar />

      {/* Barra de progreso */}
      <ScrollProgress />

      {/* Partículas */}
      <ParticleField />

      {/* WhatsApp floating button */}
      <WhatsAppButton />

      {/* Fondo fijo */}
      <AnimatedBackground />

      {/* Logo fijo — abajo a la derecha, con animación sutil */}
      <motion.div
        className="fixed bottom-4 right-4 z-20 pointer-events-none"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{
          duration: 1.5,
          ease: [0.16, 1, 0.3, 1],
          delay: 1
        }}
      >
        <motion.div
          animate={{
            opacity: [0.5, 0.65, 0.5],
            scale: [1, 1.02, 1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Image
            src={imgLogoNodo}
            alt="Studio Nodo"
            width={120}
            height={88}
            className="object-contain"
          />
        </motion.div>
      </motion.div>

      {/* Contenido */}
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
