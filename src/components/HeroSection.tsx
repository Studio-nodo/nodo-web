"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const imgNodo = "https://www.figma.com/api/mcp/asset/b41caea0-5f27-4d69-bc0b-8216837cf44d";

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Logo top-left */}
      <motion.div
        className="absolute top-8 left-8 md:top-10 md:left-10 z-20"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <Image
          src={imgNodo}
          alt="Studio Nodo"
          width={130}
          height={58}
          className="object-contain"
          priority
        />
      </motion.div>

      {/* Contenido hero */}
      <motion.div
        className="relative z-10 text-center px-6 w-full max-w-3xl mx-auto mt-16"
        style={{ y: textY, opacity }}
      >
        {/* Headline */}
        <div className="overflow-hidden mb-4">
          <motion.h1
            className="font-bold leading-tight whitespace-nowrap"
            style={{
              fontFamily: "'Sulphur Point', sans-serif",
              fontSize: "clamp(18px, 3.8vw, 56px)",
              letterSpacing: "-2px",
              background:
                "linear-gradient(90deg, rgba(255,255,255,0.15) 0%, #ffffff 25%, #ffffff 75%, rgba(255,255,255,0.15) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          >
            TECNOLOGÍA Y DISEÑO EN UNIÓN.
          </motion.h1>
        </div>

        {/* Subtítulo */}
        <motion.p
          className="font-light tracking-wide mb-14"
          style={{
            fontFamily: "'Sulphur Point', sans-serif",
            fontSize: "clamp(14px, 2vw, 22px)",
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 5%, #ffffff 35%, #ffffff 65%, rgba(255,255,255,0) 95%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.65 }}
        >
          Construimos experiencias digitales
        </motion.p>

        {/* Flecha scroll — SVG inline igual a la del Figma */}
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
      </motion.div>

    </section>
  );
}
