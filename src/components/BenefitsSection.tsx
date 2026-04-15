"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const MorphingCardStack = dynamic(
  () => import("@/components/ui/morphing-card-stack").then((m) => ({ default: m.MorphingCardStack })),
  { ssr: false }
);

const benefits = [
  {
    id: "entrega",
    title: "Entrega rápida",
    description: "Tu proyecto en producción en 2-4 semanas. Sin demoras innecesarias ni excusas.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" style={{ width: "100%", height: "100%" }}>
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
          stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "precio",
    title: "Precio transparente",
    description: "Presupuesto fijo sin sorpresas: sabés qué pagás desde el primer día.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" style={{ width: "100%", height: "100%" }}>
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"
          stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "soporte",
    title: "Soporte continuo",
    description: "No te dejamos solo después del lanzamiento. Estamos para acompañarte en cada etapa.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" style={{ width: "100%", height: "100%" }}>
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="9" cy="7" r="4" stroke="white" strokeWidth="1.8" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "seo",
    title: "SEO incluido",
    description: "Estructura técnica optimizada para SEO desde el inicio, como base.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" style={{ width: "100%", height: "100%" }}>
        <circle cx="11" cy="11" r="7" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M21 21l-4.35-4.35M8 11h6M11 8v6" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "equipo",
    title: "Ingeniería & Diseño",
    description: "Expertise técnico y visual integrado desde el día uno, sin tercerizar.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" style={{ width: "100%", height: "100%" }}>
        <polyline points="16 18 22 12 16 6" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="8 6 2 12 8 18" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function BenefitsSection() {
  return (
    <section
      id="beneficios"
      className="relative z-10 w-full flex flex-col items-center px-5 sm:px-8"
      style={{
        paddingTop: "clamp(80px, 5rem, 100px)",
        paddingBottom: "clamp(80px, 5rem, 100px)",
      }}
    >
      {/* Header */}
      <motion.div
        className="text-center mb-24 md:mb-32 w-full"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <span
          className="tracking-[10px] uppercase font-normal mb-4 block"
          style={{ fontFamily: "'Sulphur Point', sans-serif", color: "#ffffff", fontSize: "clamp(14px, 1.2vw, 16px)" }}
        >
          BENEFICIOS
        </span>
        <h2
          className="font-bold mt-4 text-gradient"
          style={{
            fontFamily: "'Sulphur Point', sans-serif",
            fontSize: "clamp(24px, 4vw, 42px)",
            letterSpacing: "0.5px",
            backgroundImage: "linear-gradient(90deg, rgba(255,255,255,0.15) 0%, #ffffff 25%, #ffffff 75%, rgba(255,255,255,0.15) 100%)",
          }}
        >
          Por qué elegirnos
        </h2>
      </motion.div>

      {/* Card Stack */}
      <div className="w-full flex justify-center">
        <MorphingCardStack cards={benefits} />
      </div>
    </section>
  );
}
