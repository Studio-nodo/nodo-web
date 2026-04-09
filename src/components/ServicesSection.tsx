"use client";

import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";

const imgLanding = "https://www.figma.com/api/mcp/asset/9d6a951d-3864-455b-aa5c-f1aed192149e";
const imgEcommerce = "https://www.figma.com/api/mcp/asset/775d23a2-f937-477a-897f-f4170545cec4";
const imgWebCorp = "https://www.figma.com/api/mcp/asset/6ce6152e-f6ea-4136-8a08-4f5171ea5612";
const imgBranding = "https://www.figma.com/api/mcp/asset/7b4ac5ad-7477-47ba-b7aa-8ff78452a3f1";
const imgRedes = "https://www.figma.com/api/mcp/asset/7a6c154e-e2ec-4e80-81ce-bc0035483c06";
const imgLogo = "https://www.figma.com/api/mcp/asset/fe50c364-2d5a-453e-8ed9-9b7882cc087f";

const services = [
  {
    title: "LANDING PAGE",
    description: "Páginas estratégicas diseñadas para convertir visitas en clientes. Optimizadas para carga rápida, mobile-first y con formularios inteligentes que capturan leads efectivamente.",
    imageSrc: imgLanding,
    imageAlt: "Desarrollo de Landing Page de alta conversión - Studio Nodo",
    imageLeft: true,
  },
  {
    title: "E-COMMERCE",
    description: "Tiendas online completas con pasarelas de pago integradas, gestión de stock, panel administrativo y sistema de envíos. Tu negocio vendiendo 24/7.",
    imageSrc: imgEcommerce,
    imageAlt: "Desarrollo de E-Commerce y tienda online - Studio Nodo",
    imageLeft: false,
  },
  {
    title: "WEB CORPORATIVA",
    description: "Sitios profesionales que proyectan la esencia de tu empresa. Incluye CMS para gestión autónoma, blog, formularios y secciones personalizadas según tus necesidades.",
    imageSrc: imgWebCorp,
    imageAlt: "Desarrollo de Web Corporativa profesional - Studio Nodo",
    imageLeft: true,
  },
  {
    title: "BRANDING",
    description: "Identidad visual completa: logotipo con variantes, paleta de colores, tipografías, manual de marca y aplicaciones en papelería digital. Tu marca con personalidad única.",
    imageSrc: imgBranding,
    imageAlt: "Diseño de Branding e identidad de marca - Studio Nodo",
    imageLeft: false,
  },
  {
    title: "REDES SOCIALES",
    description: "Gestión integral de Instagram, Facebook y LinkedIn. Estrategia de contenidos, diseño de piezas, programación y reportes mensuales con métricas reales de alcance y engagement.",
    imageSrc: imgRedes,
    imageAlt: "Gestión de Redes Sociales para empresas - Studio Nodo",
    imageLeft: true,
  },
  {
    title: "LOGOTIPO",
    description: "Diseño profesional a medida con 3 propuestas conceptuales y 2 rondas de ajustes. Entrega en todos los formatos (AI, SVG, PNG, PDF) y versiones para cualquier aplicación.",
    imageSrc: imgLogo,
    imageAlt: "Diseño de Logotipo profesional a medida - Studio Nodo",
    imageLeft: false,
  },
];

// Category labels shown before each group
const categoryLabels: Record<number, string> = {
  0: "DESARROLLO WEB",
  3: "DISEÑO GRÁFICO",
};

export default function ServicesSection() {
  return (
    <section className="relative z-10 w-full flex flex-col items-center px-6 py-32 md:py-40">
      {/* Services header */}
      <motion.div
        className="text-center mb-24 md:mb-32 w-full"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <span
          className="text-xs md:text-sm tracking-[10px] text-white/35 uppercase font-light mb-4 block"
          style={{ fontFamily: "'Sulphur Point', sans-serif" }}
        >
          SERVICIOS
        </span>
        <h2
          className="text-white font-bold mt-4"
          style={{
            fontFamily: "'Sulphur Point', sans-serif",
            fontSize: "clamp(28px, 5vw, 48px)",
            letterSpacing: "-1.5px",
            background: "linear-gradient(90deg, rgba(255,255,255,0.2) 0%, #ffffff 30%, #ffffff 70%, rgba(255,255,255,0.2) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Nuestros servicios
        </h2>
      </motion.div>

      {/* Services list */}
      <div className="relative w-full flex flex-col items-center gap-12 md:gap-16">
        {services.map((service, index) => (
          <div key={service.title} className="w-full">
            {/* Category label */}
            {categoryLabels[index] && (
              <motion.div
                className="text-center pt-12 md:pt-16 pb-16 md:pb-20"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <span
                  className="text-xs md:text-sm tracking-[10px] text-white/50 uppercase font-light"
                  style={{ fontFamily: "'Sulphur Point', sans-serif" }}
                >
                  {categoryLabels[index]}
                </span>
              </motion.div>
            )}

            <ServiceCard
              {...service}
              index={index}
            />

            {/* Separator between services - solo si no hay category label siguiente */}
            {index < services.length - 1 && !categoryLabels[index + 1] && (
              <motion.div
                className="w-full max-w-4xl mx-auto px-6 my-12 md:my-16"
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                <div
                  className="h-px"
                  style={{
                    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
                  }}
                />
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
