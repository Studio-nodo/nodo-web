"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imageLeft?: boolean;
  index: number;
}

const getMailtoLink = (serviceName: string) => {
  const subject = encodeURIComponent(`Consulta sobre ${serviceName}`);
  const body = encodeURIComponent(
    `Hola,\n\nEstoy interesado en obtener más información sobre el servicio de ${serviceName}.\n\nGracias.`
  );
  return `mailto:mmartone@studio-nodo.com?subject=${subject}&body=${body}`;
};

const getImagePath = (title: string) => {
  switch (title) {
    case "LANDING PAGE":
      return "/original-designs/landing.png";
    case "E-COMMERCE":
      return "/original-designs/ecommerce.png";
    case "WEB CORPORATIVA":
      return "/original-designs/webcorp.png";
    case "BRANDING":
      return "/original-designs/branding.png";
    case "REDES SOCIALES":
      return "/original-designs/redes.png";
    case "LOGOTIPO":
      return "/original-designs/logo.png";
    default:
      return "/original-designs/landing.png";
  }
};

export default function ServiceCard({
  title,
  description,
  imageAlt,
  index,
}: ServiceCardProps) {
  const actualImagePath = getImagePath(title);

  return (
    <motion.div
      className="relative w-full max-w-6xl mx-auto px-6 md:px-12 py-20 md:py-24"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Layout: imagen + texto, siempre centrado */}
      <div className="flex flex-col items-center gap-12 md:gap-20 w-full">
        {/* Imagen 3D */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          whileHover={{ scale: 1.04 }}
        >
          {/* Luz de fondo animada */}
          <motion.div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "140%",
              height: "140%",
              transform: "translate(-50%, -50%)",
              borderRadius: "50%",
              background: "radial-gradient(ellipse at center, rgba(200,210,220,0.15) 0%, rgba(150,160,170,0.08) 45%, transparent 70%)",
              filter: "blur(28px)",
              pointerEvents: "none",
            }}
            animate={{ opacity: [0.5, 1, 0.5], scale: [0.95, 1.08, 0.95] }}
            transition={{
              duration: 4 + (index % 3),
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.6,
            }}
          />
          <div
            className="relative"
            style={{
              width: "clamp(200px, 30vw, 320px)",
              height: "clamp(220px, 30vw, 380px)",
              filter: "drop-shadow(0 20px 50px rgba(0,0,0,0.5))",
            }}
          >
            <Image
              src={actualImagePath}
              alt={imageAlt}
              width={320}
              height={380}
              className="w-full h-full object-contain"
              style={{
                filter: "drop-shadow(0 10px 30px rgba(0,0,0,0.3))",
              }}
            />
          </div>
        </motion.div>

        {/* Contenido de texto - siempre centrado */}
        <div className="flex flex-col items-center w-full max-w-3xl px-4">
          <motion.h3
            className="font-bold leading-none mb-6 text-center w-full"
            style={{
              fontFamily: "'Sulphur Point', sans-serif",
              fontSize: "clamp(30px, 5vw, 56px)",
              letterSpacing: "-2px",
              background: "linear-gradient(90deg, rgba(255,255,255,0.3) 0%, #ffffff 35%, #ffffff 65%, rgba(255,255,255,0.3) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            {title}
          </motion.h3>

          <motion.div
            className="h-px mb-8 w-32"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
            }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.35 }}
          />

          <motion.p
            className="text-[#c8c5c5] leading-relaxed mb-12 md:mb-14 text-center w-full"
            style={{
              fontFamily: "'Roboto Condensed', sans-serif",
              fontSize: "clamp(16px, 2vw, 19px)",
              lineHeight: "1.8",
              maxWidth: "45ch",
            }}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.45 }}
          >
            {description}
          </motion.p>

          {/* CTA Button - Professional Design */}
          <motion.div
            className="relative group"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Glow effect behind button */}
            <motion.div
              className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: "radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)",
                filter: "blur(20px)",
                transform: "scale(1.1)",
              }}
            />

            <motion.a
              href={getMailtoLink(title)}
              className="relative inline-flex items-center gap-3 px-8 py-4 rounded-xl text-base font-medium overflow-hidden"
              style={{
                fontFamily: "'Sulphur Point', sans-serif",
                background: "linear-gradient(135deg, rgba(255,255,255,0.18), rgba(255,255,255,0.10))",
                border: "1px solid rgba(255,255,255,0.25)",
                color: "#ffffff",
                textDecoration: "none",
                backdropFilter: "blur(12px)",
                boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
              }}
              whileHover={{
                y: -4,
                boxShadow: "0 12px 32px rgba(0,0,0,0.4)",
              }}
              whileTap={{ scale: 0.97 }}
            >
              {/* Animated gradient overlay on hover */}
              <motion.div
                className="absolute inset-0 opacity-0"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.25), rgba(255,255,255,0.15))",
                }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />

              <span className="relative z-10 tracking-wide">Solicitar presupuesto</span>

              {/* Arrow icon */}
              <motion.svg
                className="relative z-10"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                initial={{ x: 0 }}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <path
                  d="M3 8H13M13 8L9 4M13 8L9 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
