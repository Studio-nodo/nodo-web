"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      <div
        className="relative z-10 text-center px-5 sm:px-8 w-full max-w-[1800px] mx-auto mt-16"
      >
        {/* Headline */}
        <div className="mb-4">
          <motion.h1
            className="font-bold leading-tight text-gradient hero-title"
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            suppressHydrationWarning
          >
            {"TECNOLOGÍA Y DISEÑO EN\u00a0UNIÓN."}
          </motion.h1>
        </div>

        {/* Subtítulo */}
        <motion.p
          className="font-light tracking-wide mb-14 text-gradient hero-subtitle px-4 sm:px-0"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.65 }}
        >
          Desarrollo web, IA y diseño digital para empresas
        </motion.p>

        {/* Scroll arrow */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg
              width="42"
              height="14"
              viewBox="0 0 42 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ opacity: 0.45 }}
            >
              <path
                d="M1 1L21 13L41 1"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
