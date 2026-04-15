"use client";

import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "LANDING PAGE",
    category: "WEB",
    description: "Páginas estratégicas para convertir visitas en clientes, rápidas, mobile-first y con formularios inteligentes que capturan leads.",
    imageSrc: "/original-designs/landing.png",
    imageAlt: "Desarrollo de Landing Page de alta conversión - Studio Nodo",
  },
  {
    title: "E-COMMERCE",
    category: "WEB",
    description: "Tiendas online con pagos integrados, stock y panel administrativo. Tu negocio vendiendo 24/7.",
    imageSrc: "/original-designs/ecommerce.png",
    imageAlt: "Desarrollo de E-Commerce y tienda online - Studio Nodo",
  },
  {
    title: "WEB CORPORATIVA",
    category: "WEB",
    description: "Sitios profesionales que reflejan tu empresa, con CMS, blog, formularios y secciones personalizadas.",
    imageSrc: "/original-designs/webcorp.png",
    imageAlt: "Desarrollo de Web Corporativa profesional - Studio Nodo",
  },
  {
    title: "AUTOMATIZACIÓN",
    category: "IA",
    description: "Flujos a medida sobre infraestructura propia: leads, notificaciones y seguimiento automático.",
    imageSrc: "/original-designs/automatizacion.png",
    imageAlt: "Automatización de Procesos de Negocio - Studio Nodo",
  },
  {
    title: "AGENTE IA",
    category: "IA",
    description: "Agente entrenado con tu negocio: responde consultas, califica leads y agenda citas 24/7.",
    imageSrc: "/original-designs/agente-ia.png",
    imageAlt: "Agente de Atención al Cliente con IA - Studio Nodo",
    imagePosition: "center bottom",
  },
  {
    title: "DASHBOARD IA",
    category: "IA",
    description: "Panel centralizado que conecta tus datos y responde preguntas con visuales al instante.",
    imageSrc: "/original-designs/dashboard-ia.png",
    imageAlt: "Dashboard de Decisiones con IA para negocios - Studio Nodo",
  },
  {
    title: "BRANDING",
    category: "DISEÑO",
    description: "Identidad visual completa: logo, paleta, tipografías, manual y papelería digital.",
    imageSrc: "/original-designs/branding.png",
    imageAlt: "Diseño de Branding e identidad de marca - Studio Nodo",
  },
  {
    title: "REDES SOCIALES",
    category: "DISEÑO",
    description: "Gestión de Instagram, Facebook y LinkedIn con estrategia, diseño, programación y reportes de métricas.",
    imageSrc: "/original-designs/redes.png",
    imageAlt: "Gestión de Redes Sociales para empresas - Studio Nodo",
  },
  {
    title: "LOGOTIPO",
    category: "DISEÑO",
    description: "Diseño a medida con 3 propuestas y 2 ajustes. Entrega en AI, SVG, PNG y PDF.",
    imageSrc: "/original-designs/logo.png",
    imageAlt: "Diseño de Logotipo profesional a medida - Studio Nodo",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="servicios"
      className="relative z-10 w-full flex flex-col items-center px-5 sm:px-8"
      style={{
        paddingTop: "clamp(100px, 6.25rem, 128px)",
        paddingBottom: "clamp(80px, 5rem, 100px)",
      }}
    >
      {/* Header */}
      <motion.div
        className="text-center mb-24 md:mb-32 w-full"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.span
          className="tracking-[10px] uppercase font-normal mb-4 block section-label"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
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
            letterSpacing: "0.5px",
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
            imagePosition={service.imagePosition}
          />
        ))}
      </div>
    </section>
  );
}
