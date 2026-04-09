"use client";

import { motion } from "framer-motion";

const benefits = [
  {
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Entrega rápida",
    description: "Tu proyecto en producción en 2-4 semanas. Sin demoras innecesarias.",
  },
  {
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Precio transparente",
    description: "Presupuesto fijo sin sorpresas. Sabés exactamente qué pagás y qué obtenés.",
  },
  {
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Soporte continuo",
    description: "No te dejamos solo después del lanzamiento. Estamos para acompañarte.",
  },
];

export default function BenefitsSection() {
  return (
    <section className="relative z-10 w-full flex flex-col items-center px-6 py-40 md:py-48">
      {/* Section label */}
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
          BENEFICIOS
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
          Por qué elegirnos
        </h2>
      </motion.div>

      {/* Benefits grid */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-10">
        {benefits.map((benefit, index) => (
          <motion.div
            key={benefit.title}
            className="relative p-10 md:p-12 rounded-2xl text-center"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.10), rgba(255,255,255,0.03))",
              border: "1px solid rgba(255,255,255,0.12)",
              backdropFilter: "blur(12px)",
            }}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.9,
              delay: index * 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0.05))",
              borderColor: "rgba(255,255,255,0.25)",
              y: -6,
              scale: 1.02,
              boxShadow: "0 12px 40px rgba(0,0,0,0.3)",
            }}
          >
            {/* Icon with glow */}
            <motion.div
              className="mb-8 text-white relative flex justify-center"
              initial={{ scale: 0.7, opacity: 0, rotate: -8 }}
              whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.15 + 0.25,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="inline-block relative">
                {/* Animated glow effect */}
                <motion.div
                  className="absolute inset-0"
                  style={{
                    background: "radial-gradient(circle, rgba(255,255,255,0.25) 0%, transparent 70%)",
                    filter: "blur(20px)",
                    transform: "scale(1.8)",
                  }}
                  animate={{
                    opacity: [0.5, 1, 0.5],
                    scale: [1.6, 1.9, 1.6],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3,
                  }}
                />
                <div className="relative" style={{ opacity: 0.95 }}>{benefit.icon}</div>
              </div>
            </motion.div>

            {/* Title */}
            <motion.h3
              className="text-white font-bold mb-5"
              style={{
                fontFamily: "'Sulphur Point', sans-serif",
                fontSize: "clamp(22px, 3vw, 28px)",
                letterSpacing: "-0.8px",
              }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 + 0.25 }}
            >
              {benefit.title}
            </motion.h3>

            {/* Description */}
            <motion.p
              className="text-[#c8c5c5] leading-relaxed"
              style={{
                fontFamily: "'Roboto Condensed', sans-serif",
                fontSize: "clamp(15px, 1.8vw, 17px)",
                lineHeight: "1.7",
              }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 + 0.35 }}
            >
              {benefit.description}
            </motion.p>

            {/* Decorative corner accent */}
            <div
              className="absolute top-0 right-0 w-20 h-20 opacity-30 pointer-events-none"
              style={{
                background: "radial-gradient(circle at top right, rgba(255,255,255,0.1), transparent)",
                borderRadius: "0 12px 0 0",
              }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
