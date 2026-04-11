"use client";

import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "LANDING PAGE",
    category: "WEB",
    description: "Páginas estratégicas diseñadas para convertir visitas en clientes. Optimizadas para carga rápida, mobile-first y con formularios inteligentes que capturan leads efectivamente.",
    imageSrc: "/original-designs/landing.png",
    imageAlt: "Desarrollo de Landing Page de alta conversión - Studio Nodo",
  },
  {
    title: "E-COMMERCE",
    category: "WEB",
    description: "Tiendas online completas con pasarelas de pago integradas, gestión de stock, panel administrativo y sistema de envíos. Tu negocio vendiendo 24/7.",
    imageSrc: "/original-designs/ecommerce.png",
    imageAlt: "Desarrollo de E-Commerce y tienda online - Studio Nodo",
  },
  {
    title: "WEB CORPORATIVA",
    category: "WEB",
    description: "Sitios profesionales que proyectan la esencia de tu empresa. Incluye CMS para gestión autónoma, blog, formularios y secciones personalizadas según tus necesidades.",
    imageSrc: "/original-designs/webcorp.png",
    imageAlt: "Desarrollo de Web Corporativa profesional - Studio Nodo",
  },
  {
    title: "BRANDING",
    category: "DISEÑO",
    description: "Identidad visual completa: logotipo con variantes, paleta de colores, tipografías, manual de marca y aplicaciones en papelería digital. Tu marca con personalidad única.",
    imageSrc: "/original-designs/branding.png",
    imageAlt: "Diseño de Branding e identidad de marca - Studio Nodo",
  },
  {
    title: "REDES SOCIALES",
    category: "DISEÑO",
    description: "Gestión integral de Instagram, Facebook y LinkedIn. Estrategia de contenidos, diseño de piezas, programación y reportes mensuales con métricas reales de alcance y engagement.",
    imageSrc: "/original-designs/redes.png",
    imageAlt: "Gestión de Redes Sociales para empresas - Studio Nodo",
  },
  {
    title: "LOGOTIPO",
    category: "DISEÑO",
    description: "Diseño profesional a medida con 3 propuestas conceptuales y 2 rondas de ajustes. Entrega en todos los formatos (AI, SVG, PNG, PDF) y versiones para cualquier aplicación.",
    imageSrc: "/original-designs/logo.png",
    imageAlt: "Diseño de Logotipo profesional a medida - Studio Nodo",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="servicios"
      className="relative z-10 w-full flex flex-col items-center px-6"
      style={{
        paddingTop: "clamp(100px, 6.25rem, 128px)",
        paddingBottom: "clamp(80px, 5rem, 100px)",
      }}
    >
      {/* Header */}
      <motion.div
        className="text-center mb-20 md:mb-28 w-full"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.span
          className="tracking-[10px] uppercase font-normal mb-4 block"
          style={{ fontFamily: "'Sulphur Point', sans-serif", color: "#ffffff", fontSize: "clamp(14px, 1.2vw, 16px)" }}
          initial={{ opacity: 0, letterSpacing: "15px" }}
          whileInView={{ opacity: 1, letterSpacing: "10px" }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          SERVICIOS
        </motion.span>
        <h2
          className="font-bold mt-4 text-gradient"
          style={{
            fontFamily: "'Sulphur Point', sans-serif",
            fontSize: "clamp(24px, 4vw, 42px)",
            letterSpacing: "-2px",
            backgroundImage: "linear-gradient(90deg, rgba(255,255,255,0.15) 0%, #ffffff 25%, #ffffff 75%, rgba(255,255,255,0.15) 100%)",
          }}
        >
          Nuestros servicios
        </h2>
      </motion.div>

      {/* Cards verticales */}
      <div className="w-full flex flex-col items-center gap-7 md:gap-9">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            category={service.category}
            description={service.description}
            imageSrc={service.imageSrc}
            imageAlt={service.imageAlt}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
