"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Consulta inicial",
    description: "Primera reunión para entender tu proyecto y objetivos.",
  },
  {
    number: "02",
    title: "Propuesta",
    description: "Presupuesto detallado, timeline y stack tecnológico.",
  },
  {
    number: "03",
    title: "Desarrollo",
    description: "Diseño, desarrollo y revisiones con seguimiento en cada etapa.",
  },
  {
    number: "04",
    title: "Entrega",
    description: "Deploy, capacitación y documentación para gestión autónoma.",
  },
  {
    number: "05",
    title: "Soporte",
    description: "Soporte post-lanzamiento con ajustes y acompañamiento continuo.",
  },
];

export default function ProcessSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="proceso"
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
          PROCESO
        </span>
        <h2
          className="font-bold mt-4 text-gradient"
          style={{
            fontFamily: "'Sulphur Point', sans-serif",
            fontSize: "clamp(24px, 4vw, 42px)",
            letterSpacing: "-2px",
            backgroundImage: "linear-gradient(90deg, rgba(255,255,255,0.15) 0%, #ffffff 25%, #ffffff 75%, rgba(255,255,255,0.15) 100%)",
          }}
        >
          Cómo trabajamos
        </h2>
      </motion.div>

      {/* Steps */}
      <div className="w-full max-w-4xl flex flex-col">
        {steps.map((step, index) => {
          const isRight = index % 2 !== 0;
          const isOpen = openIndex === index;

          const titleBlock = (
            <motion.button
              onClick={() => toggle(index)}
              className="group w-full"
              whileHover={{ x: isRight ? 6 : -6 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Number + Title row */}
              <div
                className="flex items-center gap-3"
                style={{ flexDirection: isRight ? "row" : "row-reverse" }}
              >
                {/* Number */}
                <span
                  style={{
                    fontFamily: "'Sulphur Point', sans-serif",
                    fontSize: "clamp(13px, 1.2vw, 15px)",
                    letterSpacing: "3px",
                    color: isOpen ? "rgba(255,255,255,0.55)" : "rgba(255,255,255,0.25)",
                    flexShrink: 0,
                    transition: "color 0.3s ease",
                  }}
                >
                  {step.number}
                </span>

                <h3
                  className="flex-1 text-gradient"
                  style={{
                    fontFamily: "'Sulphur Point', sans-serif",
                    fontSize: "clamp(17px, 2.4vw, 26px)",
                    fontWeight: 700,
                    letterSpacing: "-0.5px",
                    backgroundImage: isOpen
                      ? "linear-gradient(90deg, rgba(255,255,255,0.8) 0%, #ffffff 40%, #ffffff 60%, rgba(255,255,255,0.8) 100%)"
                      : "linear-gradient(90deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.85) 40%, rgba(255,255,255,0.85) 60%, rgba(255,255,255,0.5) 100%)",
                    textAlign: isRight ? "left" : "right",
                    transition: "opacity 0.25s ease",
                  }}
                >
                  {step.title}
                </h3>
              </div>

              {/* Short line under title only */}
              <div
                style={{
                  height: "1px",
                  width: "45%",
                  marginTop: "12px",
                  marginLeft: isRight ? 0 : "auto",
                  marginRight: isRight ? "auto" : 0,
                  background: isOpen ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.08)",
                  transition: "background 0.3s ease",
                }}
              />

              {/* Description */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    style={{ overflow: "hidden" }}
                  >
                    <p
                      style={{
                        fontFamily: "'Roboto Condensed', sans-serif",
                        fontSize: "clamp(13px, 1.4vw, 15px)",
                        color: "rgba(255,255,255,0.65)",
                        lineHeight: 1.7,
                        paddingTop: "12px",
                        paddingBottom: "18px",
                        textAlign: isRight ? "left" : "right",
                        maxWidth: "34ch",
                        marginLeft: isRight ? 0 : "auto",
                      }}
                    >
                      {step.description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          );

          return (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
              className="grid items-start mb-6"
              style={{ gridTemplateColumns: "1fr 1fr", gap: "0 8px" }}
            >
              {/* Desktop: alternating columns */}
              <div className="hidden sm:block pr-4">{!isRight && titleBlock}</div>
              <div className="hidden sm:block pl-4">{isRight && titleBlock}</div>
              {/* Mobile: full width, always left-aligned */}
              <div className="block sm:hidden col-span-2">
                <motion.button
                  onClick={() => toggle(index)}
                  className="group w-full text-left"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="flex items-center gap-3">
                    <span style={{ fontFamily: "'Sulphur Point', sans-serif", fontSize: "13px", letterSpacing: "3px", color: isOpen ? "rgba(255,255,255,0.55)" : "rgba(255,255,255,0.25)", flexShrink: 0, transition: "color 0.3s ease" }}>{step.number}</span>
                    <h3 className="text-gradient" style={{ fontFamily: "'Sulphur Point', sans-serif", fontSize: "clamp(17px, 5vw, 24px)", fontWeight: 700, letterSpacing: "-0.5px", backgroundImage: isOpen ? "linear-gradient(90deg, rgba(255,255,255,0.8) 0%, #ffffff 40%, #ffffff 60%, rgba(255,255,255,0.8) 100%)" : "linear-gradient(90deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.85) 40%, rgba(255,255,255,0.85) 60%, rgba(255,255,255,0.5) 100%)" }}>{step.title}</h3>
                  </div>
                  <div style={{ height: "1px", width: "45%", marginTop: "10px", background: isOpen ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.08)", transition: "background 0.3s ease" }} />
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }} style={{ overflow: "hidden" }}>
                        <p style={{ fontFamily: "'Roboto Condensed', sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.65)", lineHeight: 1.7, paddingTop: "10px", paddingBottom: "16px" }}>{step.description}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
