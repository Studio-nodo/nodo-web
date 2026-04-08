import AnimatedBackground from "@/components/AnimatedBackground";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import ParticleField from "@/components/ParticleField";
import ScrollProgress from "@/components/ScrollProgress";
import Image from "next/image";

const imgLogoNodo = "https://www.figma.com/api/mcp/asset/4454751b-41d9-4e84-937b-cfd950aad42d";

export default function Home() {
  return (
    <main className="relative" style={{ background: "#07080c" }}>
      {/* Barra de progreso */}
      <ScrollProgress />

      {/* Partículas */}
      <ParticleField />

      {/* Fondo fijo */}
      <AnimatedBackground />

      {/* Logo fijo — abajo a la derecha, pegado al borde, igual que en Figma */}
      <div className="fixed bottom-4 right-4 z-20 pointer-events-none">
        <Image
          src={imgLogoNodo}
          alt="Studio Nodo"
          width={120}
          height={88}
          className="object-contain opacity-50"
        />
      </div>

      {/* Contenido */}
      <div className="relative z-10">
        <HeroSection />
        <ServicesSection />
        <ContactSection />
      </div>
    </main>
  );
}
