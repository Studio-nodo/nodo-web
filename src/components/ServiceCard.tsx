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

  const isImageLeft = index % 2 === 0;

  return (
    <motion.div
      className="relative w-full flex justify-center px-6"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Layout: imagen al costado alternando izquierda/derecha */}
      <div className={`flex flex-col ${isImageLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-10 md:gap-16 w-full max-w-5xl`}>
        {/* Imagen 3D */}
        <motion.div
          className="relative flex-shrink-0"
          initial={{ opacity: 0, x: isImageLeft ? -30 : 30 }}
          whileInView={{ opacity: 1, x: 0 }}
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
              width: "clamp(180px, 25vw, 280px)",
              height: "clamp(200px, 25vw, 340px)",
              filter: "drop-shadow(0 20px 50px rgba(0,0,0,0.5))",
            }}
          >
            <Image
              src={actualImagePath}
              alt={imageAlt}
              width={280}
              height={340}
              className="w-full h-full object-contain"
              style={{
                filter: "drop-shadow(0 10px 30px rgba(0,0,0,0.3))",
              }}
            />
          </div>
        </motion.div>

        {/* Contenido de texto */}
        <div className="flex flex-col items-start flex-1 w-full">
          <motion.h3
            className="font-bold leading-none mb-5"
            style={{
              fontFamily: "'Sulphur Point', sans-serif",
              fontSize: "clamp(26px, 4.5vw, 48px)",
              letterSpacing: "-2px",
              backgroundImage: "linear-gradient(90deg, rgba(255,255,255,0.15) 0%, #ffffff 25%, #ffffff 75%, rgba(255,255,255,0.15) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            {title}
          </motion.h3>

          <motion.p
            className="text-[#c8c5c5] leading-relaxed"
            style={{
              fontFamily: "'Roboto Condensed', sans-serif",
              fontSize: "clamp(16px, 2vw, 19px)",
              lineHeight: "1.8",
            }}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            {description}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}
