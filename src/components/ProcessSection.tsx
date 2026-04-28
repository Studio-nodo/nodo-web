"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

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
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

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
      <div
        className={`text-center mb-24 md:mb-32 w-full${mounted ? " fade-in-up" : ""}`}
        style={mounted ? { animationDuration: "0.8s" } : {}}
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
            letterSpacing: "0.5px",
            backgroundImage: "linear-gradient(90deg, rgba(255,255,255,0.15) 0%, #ffffff 25%, #ffffff 75%, rgba(255,255,255,0.15) 100%)",
          }}
        >
          Cómo trabajamos
        </h2>
      </div>

      {/* Steps */}
      <div className="w-full max-w-4xl flex flex-col">
        {steps.map((step, index) => {
          const isRight = index % 2 !== 0;
          const isOpen = openIndex === index;

          const titleBlock = () => (
            <motion.div
              onClick={() => toggle(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") toggle(index); }}
              className="group w-full"
              style={{ cursor: "pointer" }}
              whileHover={{ x: isRight ? -4 : 4 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className={`flex items-center gap-3${!isRight ? " flex-row-reverse" : ""}`}>
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
                  className={`flex-1 text-gradient${!isRight ? " text-right" : ""}`}
                  style={{
                    fontFamily: "'Sulphur Point', sans-serif",
                    fontSize: "clamp(17px, 2.4vw, 26px)",
                    fontWeight: 700,
                    letterSpacing: "-0.5px",
                    backgroundImage: isOpen
                      ? "linear-gradient(90deg, rgba(255,255,255,0.8) 0%, #ffffff 40%, #ffffff 60%, rgba(255,255,255,0.8) 100%)"
                      : "linear-gradient(90deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.85) 40%, rgba(255,255,255,0.85) 60%, rgba(255,255,255,0.5) 100%)",
                    transition: "opacity 0.25s ease",
                  }}
                >
                  {step.title}
                </h3>
              </div>

              <div
                style={{
                  height: "1px",
                  width: "100%",
                  marginTop: "12px",
                  background: isOpen ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.08)",
                  transition: "background 0.3s ease",
                }}
              />

              <motion.div
                animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                initial={false}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                style={{ overflow: "hidden" }}
              >
                <p
                  className={!isRight ? "text-right" : ""}
                  style={{
                    fontFamily: "'Roboto Condensed', sans-serif",
                    fontSize: "clamp(13px, 1.4vw, 16px)",
                    color: "rgba(255,255,255,0.65)",
                    lineHeight: 1.7,
                    paddingTop: "12px",
                    paddingBottom: "18px",
                    paddingRight: "8px",
                    paddingLeft: "8px",
                  }}
                >
                  {step.description}
                </p>
              </motion.div>
            </motion.div>
          );

          return (
            <div
              key={step.number}
              className="grid items-start mb-6 grid-cols-2"
              style={{ gap: "0 8px" }}
            >
              <div
                style={{
                  gridColumnStart: isRight ? 2 : 1,
                  paddingLeft: isRight ? "16px" : "4px",
                  paddingRight: isRight ? "4px" : "16px",
                }}
              >
                {titleBlock()}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
