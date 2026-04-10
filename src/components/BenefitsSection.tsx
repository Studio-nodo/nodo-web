"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MacOSDock, { DockApp } from "@/components/ui/mac-os-dock";

// macOS-style app icons
const iconStyle: React.CSSProperties = {
  width: "100%", height: "100%", borderRadius: "22%", overflow: "hidden",
  background: "linear-gradient(145deg, #3a3a3a 0%, #1c1c1c 40%, #0a0a0a 100%)",
  display: "flex", alignItems: "center", justifyContent: "center",
  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.18), inset 0 -1px 0 rgba(0,0,0,0.5), inset 1px 0 0 rgba(255,255,255,0.06)",
};

const ZapAppIcon = () => (
  <div style={iconStyle}>
    <svg viewBox="0 0 24 24" fill="none" style={{ width: "52%", height: "52%" }}>
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
        fill="white" stroke="white" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
);

const PesoAppIcon = () => (
  <div style={iconStyle}>
    <svg viewBox="0 0 24 24" fill="none" style={{ width: "52%", height: "52%" }}>
      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"
        stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
);

const SupportAppIcon = () => (
  <div style={iconStyle}>
    <svg viewBox="0 0 24 24" fill="none" style={{ width: "52%", height: "52%" }}>
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="9" cy="7" r="4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
);


const SeoAppIcon = () => (
  <div style={iconStyle}>
    <svg viewBox="0 0 24 24" fill="none" style={{ width: "52%", height: "52%" }}>
      <circle cx="11" cy="11" r="7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M21 21l-4.35-4.35" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 11h6M11 8v6" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  </div>
);

const TeamAppIcon = () => (
  <div style={iconStyle}>
    <svg viewBox="0 0 24 24" fill="none" style={{ width: "52%", height: "52%" }}>
      <polyline points="16 18 22 12 16 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="8 6 2 12 8 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="12" y1="4" x2="12" y2="20" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2" />
    </svg>
  </div>
);

const apps: DockApp[] = [
  {
    id: "entrega",
    name: "Entrega rápida",
    icon: <ZapAppIcon />,
    description: "Tu proyecto en producción en 2-4 semanas. Sin demoras innecesarias.",
  },
  {
    id: "precio",
    name: "Precio transparente",
    icon: <PesoAppIcon />,
    description: "Presupuesto fijo sin sorpresas. Sabés exactamente qué pagás y qué obtenés.",
  },
  {
    id: "soporte",
    name: "Soporte continuo",
    icon: <SupportAppIcon />,
    description: "No te dejamos solo después del lanzamiento. Estamos para acompañarte.",
  },
{
    id: "seo",
    name: "SEO incluido",
    icon: <SeoAppIcon />,
    description: "Estructura técnica optimizada para buscadores desde el inicio, no como add-on.",
  },
  {
    id: "equipo",
    name: "Ingeniería & Diseño",
    icon: <TeamAppIcon />,
    description: "Expertise técnico y visual integrado en cada proyecto desde el primer día.",
  },
];

export default function BenefitsSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const activeApp = apps.find(a => a.id === hoveredId) ?? null;

  return (
    <section
      id="beneficios"
      className="relative z-10 w-full flex flex-col items-center px-6"
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
          className="font-bold mt-8"
          style={{
            fontFamily: "'Sulphur Point', sans-serif",
            fontSize: "clamp(24px, 4vw, 42px)",
            letterSpacing: "-2px",
            backgroundImage: "linear-gradient(90deg, rgba(255,255,255,0.15) 0%, #ffffff 25%, #ffffff 75%, rgba(255,255,255,0.15) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Por qué elegirnos
        </h2>
      </motion.div>

      {/* Dock */}
      <motion.div
        className="flex flex-col items-center gap-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        <MacOSDock
          apps={apps}
          onAppHover={setHoveredId}
          onAppClick={(id) => setHoveredId(prev => prev === id ? null : id)}
        />

        {/* Description tooltip below dock */}
        <div style={{ minHeight: "110px", display: "flex", alignItems: "flex-start", justifyContent: "center" }}>
          <AnimatePresence mode="wait">
            {activeApp ? (
              <motion.div
                key={activeApp.id}
                className="text-center"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  padding: "clamp(16px, 2vw, 24px) clamp(24px, 3vw, 40px)",
                  borderRadius: "18px",
                  background: "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "1px solid rgba(255,255,255,0.09)",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.07)",
                  maxWidth: "clamp(280px, 90vw, 420px)",
                }}
              >
                <p
                  className="font-bold mb-2"
                  style={{
                    fontFamily: "'Sulphur Point', sans-serif",
                    fontSize: "clamp(18px, 2.5vw, 24px)",
                    letterSpacing: "-0.5px",
                    backgroundImage: "linear-gradient(90deg, rgba(255,255,255,0.3) 0%, #ffffff 35%, #ffffff 65%, rgba(255,255,255,0.3) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {activeApp.name}
                </p>
                <p
                  style={{
                    fontFamily: "'Roboto Condensed', sans-serif",
                    fontSize: "clamp(14px, 1.6vw, 17px)",
                    color: "rgba(200, 197, 197, 0.85)",
                    lineHeight: 1.6,
                  }}
                >
                  {activeApp.description}
                </p>
              </motion.div>
            ) : (
              <motion.p
                key="hint"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  fontFamily: "'Roboto Condensed', sans-serif",
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.2)",
                  letterSpacing: "0.5px",
                }}
              >
                Tocá los íconos para ver los detalles
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}
