"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Qué tipos de proyectos web desarrollan?",
    a: "Desarrollamos landing pages de alta conversión, e-commerce, webs corporativas y aplicaciones web con Next.js y React. Todos los proyectos incluyen diseño a medida, SEO técnico y optimización de rendimiento desde la base.",
  },
  {
    q: "Qué es una automatización con IA y cómo puede beneficiar a mi empresa?",
    a: "Una automatización con IA conecta tus herramientas y sistemas para ejecutar tareas de forma autónoma. Construimos flujos a medida sobre nuestra propia infraestructura que automatizan captación de leads, seguimiento de clientes y notificaciones, reduciendo errores y maximizando la eficiencia operativa.",
  },
  {
    q: "Qué es un agente de IA con RAG?",
    a: "RAG (Retrieval-Augmented Generation) es una técnica que entrena a un agente de inteligencia artificial con la información específica de tu negocio. El resultado es un asistente capaz de responder consultas, calificar leads y gestionar agenda de forma autónoma, con conocimiento real de tus productos y servicios.",
  },
  {
    q: "Cuánto tiempo tarda en estar lista una web?",
    a: "Una landing page tarda entre 2 y 4 semanas. Un e-commerce o web corporativa entre 4 y 8 semanas. El timeline exacto depende del alcance del proyecto y la disponibilidad de materiales del cliente.",
  },
  {
    q: "Ofrecen servicios de branding para empresas nuevas?",
    a: "Sí. Diseñamos identidades de marca completas: logo, paleta de colores, tipografías, manual de marca y papelería digital. Trabajamos con startups y empresas consolidadas que buscan construir o renovar su imagen.",
  },
  {
    q: "El SEO está incluido en el desarrollo web?",
    a: "Sí. Todos nuestros proyectos web incluyen SEO técnico base: estructura de encabezados optimizada, metadatos, schema markup con JSON-LD, velocidad de carga y sitemap. Para estrategias de contenido y link building ofrecemos consultoría adicional.",
  },
  {
    q: "Trabajan con empresas de todo el país o solo en Buenos Aires?",
    a: "Trabajamos de forma remota con empresas de toda Argentina. Estamos basados en Buenos Aires y también hemos colaborado con clientes del exterior.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="relative z-10 w-full flex flex-col items-center px-5 sm:px-8"
      style={{
        paddingTop: "clamp(80px, 5rem, 100px)",
        paddingBottom: "clamp(80px, 5rem, 100px)",
      }}
    >
      {/* Header */}
      <motion.div
        className="text-center mb-16 md:mb-20 w-full"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <span
          className="tracking-[10px] uppercase font-normal mb-4 block"
          style={{ fontFamily: "'Sulphur Point', sans-serif", color: "#ffffff", fontSize: "clamp(12px, 1.2vw, 14px)" }}
        >
          FAQ
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
          Preguntas frecuentes
        </h2>
      </motion.div>

      {/* FAQ List */}
      <div className="w-full max-w-3xl flex flex-col">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.05 }}
            >
              <div
                role="button"
                tabIndex={0}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") setOpenIndex(isOpen ? null : index); }}
                className="w-full flex items-start justify-between gap-4 py-5 cursor-pointer group"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.08)", paddingLeft: "clamp(8px, 2vw, 16px)", paddingRight: "clamp(4px, 1vw, 8px)" }}
                aria-expanded={isOpen}
              >
                <h3
                  style={{
                    fontFamily: "'Sulphur Point', sans-serif",
                    fontSize: "clamp(14px, 1.8vw, 20px)",
                    fontWeight: 700,
                    letterSpacing: "-0.2px",
                    color: isOpen ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.65)",
                    transition: "color 0.25s ease",
                    textAlign: "left",
                    flex: 1,
                  }}
                >
                  {faq.q}
                </h3>
                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="shrink-0"
                >
                  <span
                    style={{
                      display: "block",
                      marginTop: "2px",
                      color: isOpen ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.25)",
                      fontSize: "22px",
                      lineHeight: 1,
                    }}
                  >
                    +
                  </span>
                </motion.span>
              </div>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    style={{ overflow: "hidden" }}
                  >
                    <p
                      style={{
                        fontFamily: "'Roboto Condensed', sans-serif",
                        fontSize: "clamp(13px, 1.5vw, 17px)",
                        color: "rgba(255,255,255,0.55)",
                        lineHeight: 1.75,
                        paddingTop: "12px",
                        paddingBottom: "20px",
                        paddingLeft: "clamp(16px, 5vw, 48px)",
                        paddingRight: "clamp(16px, 5vw, 48px)",
                        maxWidth: "62ch",
                      }}
                    >
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
