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
      className="relative w-full max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Layout: imagen + texto, siempre centrado */}
      <div className="flex flex-col items-center gap-10 md:gap-16 w-full">
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
            className="text-[#c8c5c5] leading-relaxed mb-10 text-center w-full"
            style={{
              fontFamily: "'Roboto Condensed', sans-serif",
              fontSize: "clamp(16px, 2vw, 19px)",
              lineHeight: "1.7",
            }}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.45 }}
          >
            {description}
          </motion.p>

          {/* CTA Button */}
          <motion.a
            href={getMailtoLink(title)}
            className="inline-block px-8 py-3.5 rounded-lg text-sm font-medium"
            style={{
              fontFamily: "'Roboto Condensed', sans-serif",
              background: "linear-gradient(135deg, rgba(255,255,255,0.14), rgba(255,255,255,0.08))",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "#ffffff",
              textDecoration: "none",
              backdropFilter: "blur(10px)",
            }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.24), rgba(255,255,255,0.14))",
              borderColor: "rgba(255,255,255,0.35)",
              y: -3,
              boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
              scale: 1.02,
            }}
            whileTap={{ scale: 0.98 }}
          >
            Solicitar presupuesto
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}
