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
    <section
      id="beneficios"
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
          className="text-xs md:text-sm tracking-[10px] text-white/35 uppercase font-light mb-4 block"
          style={{ fontFamily: "'Sulphur Point', sans-serif" }}
        >
          BENEFICIOS
        </span>
        <h2
          className="font-bold mt-4"
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

      {/* Benefits grid */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
        {benefits.map((benefit, index) => (
          <motion.div
            key={benefit.title}
            className="relative p-10 md:p-12 text-center"
            style={{
              filter: "drop-shadow(0 20px 60px rgba(0,0,0,0.4))",
            }}
            initial={{ opacity: 0, y: 60, scale: 0.9, rotateX: -15 }}
            whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 1,
              delay: index * 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{
              y: -10,
              scale: 1.03,
              filter: "drop-shadow(0 32px 90px rgba(0,0,0,0.6))",
              transition: { duration: 0.3 }
            }}
          >
            {/* Icon with glow */}
            <motion.div
              className="mb-10 relative flex justify-center"
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
                    background: "radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)",
                    filter: "blur(28px)",
                    transform: "scale(2)",
                  }}
                  animate={{
                    opacity: [0.4, 0.8, 0.4],
                    scale: [1.8, 2.2, 1.8],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.4,
                  }}
                />
                <div className="relative text-white" style={{ opacity: 0.9 }}>{benefit.icon}</div>
              </div>
            </motion.div>

            {/* Title */}
            <motion.h3
              className="font-bold mb-6"
              style={{
                fontFamily: "'Sulphur Point', sans-serif",
                fontSize: "clamp(22px, 3vw, 26px)",
                letterSpacing: "-0.8px",
                backgroundImage: "linear-gradient(90deg, rgba(255,255,255,0.3) 0%, #ffffff 35%, #ffffff 65%, rgba(255,255,255,0.3) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 + 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              {benefit.title}
            </motion.h3>

            {/* Description */}
            <motion.p
              className="text-[#c8c5c5] leading-relaxed"
              style={{
                fontFamily: "'Roboto Condensed', sans-serif",
                fontSize: "clamp(15px, 2vw, 18px)",
                lineHeight: "1.8",
              }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 + 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              {benefit.description}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
