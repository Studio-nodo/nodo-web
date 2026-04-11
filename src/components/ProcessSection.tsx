"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Consulta inicial",
    description: "Primera reunión para entender tu proyecto, objetivos y necesidades específicas.",
  },
  {
    number: "02",
    title: "Propuesta",
    description: "Presentamos presupuesto detallado, timeline realista y stack tecnológico a utilizar.",
  },
  {
    number: "03",
    title: "Desarrollo",
    description: "Diseño → Desarrollo → Revisiones. Te mantenemos al tanto en cada etapa del proceso.",
  },
  {
    number: "04",
    title: "Entrega",
    description: "Deploy a producción, capacitación para gestión autónoma y documentación completa.",
  },
  {
    number: "05",
    title: "Soporte",
    description: "Acompañamiento post-lanzamiento, ajustes y soporte técnico continuo.",
  },
];

export default function ProcessSection() {
  return (
    <section
      id="proceso"
      className="relative z-10 w-full flex flex-col items-center px-6"
      style={{
        paddingTop: "clamp(80px, 5rem, 100px)",
        paddingBottom: "clamp(80px, 5rem, 100px)",
      }}
    >
      {/* Section label */}
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
      <div className="w-full max-w-5xl">
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            className="relative flex gap-10 md:gap-16 mb-20 md:mb-24 last:mb-0"
            initial={{ opacity: 0, y: 40, x: -20 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.9,
              delay: index * 0.12,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {/* Number column */}
            <div className="flex-shrink-0 flex flex-col items-center">
              {/* Number circle */}
              <motion.div
                className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center relative"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.14), rgba(255,255,255,0.06))",
                  border: "1px solid rgba(255,255,255,0.18)",
                  backdropFilter: "blur(10px)",
                }}
                initial={{ scale: 0.8, rotate: -12 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.12 + 0.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{
                  scale: 1.1,
                  borderColor: "rgba(255,255,255,0.35)",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
                }}
              >
                {/* Animated glow behind number */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: "radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)",
                    filter: "blur(12px)",
                  }}
                  animate={{
                    opacity: [0.6, 1, 0.6],
                    scale: [0.9, 1.1, 0.9],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.4,
                  }}
                />
                <span
                  className="text-white font-bold relative z-10"
                  style={{
                    fontFamily: "'Sulphur Point', sans-serif",
                    fontSize: "clamp(14px, 1.5vw, 16px)",
                  }}
                >
                  {step.number}
                </span>
              </motion.div>

              {/* Connecting line */}
              {index < steps.length - 1 && (
                <motion.div
                  className="w-0.5 flex-1 mt-4"
                  style={{
                    background: "linear-gradient(180deg, rgba(255,255,255,0.25), rgba(255,255,255,0.12), rgba(255,255,255,0.05))",
                    minHeight: "60px",
                    transformOrigin: "top",
                  }}
                  initial={{ scaleY: 0, opacity: 0 }}
                  whileInView={{ scaleY: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                    delay: index * 0.12 + 0.4,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                />
              )}
            </div>

            {/* Content column */}
            <div className="flex-1 pb-4">
              <motion.h3
                className="font-bold mb-5 text-gradient"
                style={{
                  fontFamily: "'Sulphur Point', sans-serif",
                  fontSize: "clamp(22px, 3.5vw, 30px)",
                  letterSpacing: "-0.8px",
                  backgroundImage: "linear-gradient(90deg, rgba(255,255,255,0.3) 0%, #ffffff 35%, #ffffff 65%, rgba(255,255,255,0.3) 100%)",
                }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.12 + 0.3,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {step.title}
              </motion.h3>

              <motion.p
                className="text-[#c8c5c5] leading-relaxed"
                style={{
                  fontFamily: "'Roboto Condensed', sans-serif",
                  fontSize: "clamp(16px, 2vw, 19px)",
                  lineHeight: "1.8",
                }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.12 + 0.4,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {step.description}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
