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
  imageSrc,
  imageAlt,
  imageLeft = true,
  index,
}: ServiceCardProps) {
  const isEven = index % 2 === 0;
  const actualImagePath = getImagePath(title);

  return (
    <motion.div
      className="relative w-full max-w-4xl mx-auto px-8 py-14 md:py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
    >
      {/* Layout: imagen + texto, alternando lados */}
      <div
        className="flex flex-col items-center gap-8 md:gap-14"
        style={{
          flexDirection: "column",
        }}
      >
        {/* En desktop: fila alternada */}
        <div
          className="hidden md:flex items-center gap-14 w-full"
          style={{ flexDirection: imageLeft ? "row" : "row-reverse" }}
        >
          {/* Imagen 3D */}
          <motion.div
            className="flex-shrink-0 relative"
            initial={{ opacity: 0, x: imageLeft ? -40 : 40, rotate: isEven ? -3 : 3 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            whileHover={{ scale: 1.04, rotate: isEven ? 2 : -2 }}
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
                background: "radial-gradient(ellipse at center, rgba(200,210,220,0.13) 0%, rgba(150,160,170,0.05) 45%, transparent 70%)",
                filter: "blur(28px)",
                pointerEvents: "none",
              }}
              animate={{ opacity: [0.4, 1, 0.4], scale: [0.95, 1.08, 0.95] }}
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
                width: "clamp(180px, 25vw, 300px)",
                height: "clamp(180px, 25vw, 360px)",
                filter: "drop-shadow(0 20px 50px rgba(0,0,0,0.5))",
              }}
            >
              <Image
                src={actualImagePath}
                alt={imageAlt}
                width={300}
                height={360}
                className="w-full h-full object-contain"
                style={{
                  filter: "drop-shadow(0 10px 30px rgba(0,0,0,0.3))",
                }}
              />
            </div>
          </motion.div>

          {/* Texto desktop */}
          <div
            className="flex-1 min-w-0"
            style={{ textAlign: imageLeft ? "left" : "right", maxWidth: "42ch" }}
          >
            <motion.h3
              className="font-bold leading-none mb-3"
              style={{
                fontFamily: "'Sulphur Point', sans-serif",
                fontSize: "clamp(26px, 4vw, 48px)",
                letterSpacing: "-2px",
                background: imageLeft
                  ? "linear-gradient(90deg, #ffffff 15%, rgba(255,255,255,0.1) 100%)"
                  : "linear-gradient(270deg, #ffffff 15%, rgba(255,255,255,0.1) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
              initial={{ opacity: 0, x: imageLeft ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.25 }}
            >
              {title}
            </motion.h3>

            <motion.div
              className="h-px mb-4"
              style={{
                background: imageLeft
                  ? "linear-gradient(90deg, rgba(255,255,255,0.25) 0%, transparent 100%)"
                  : "linear-gradient(270deg, rgba(255,255,255,0.25) 0%, transparent 100%)",
                transformOrigin: imageLeft ? "left" : "right",
              }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />

            <motion.p
              className="text-[#c8c5c5] leading-relaxed"
              style={{
                fontFamily: "'Roboto Condensed', sans-serif",
                fontSize: "clamp(14px, 1.5vw, 17px)",
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

        {/* En mobile: siempre centrado, imagen arriba */}
        <div className="flex md:hidden flex-col items-center gap-6 w-full text-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Luz de fondo animada mobile */}
            <motion.div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: "160%",
                height: "160%",
                transform: "translate(-50%, -50%)",
                borderRadius: "50%",
                background: "radial-gradient(ellipse at center, rgba(200,210,220,0.12) 0%, transparent 70%)",
                filter: "blur(22px)",
                pointerEvents: "none",
              }}
              animate={{ opacity: [0.4, 1, 0.4], scale: [0.95, 1.08, 0.95] }}
              transition={{
                duration: 4 + (index % 3),
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.6,
              }}
            />
            <div
              className="relative mx-auto"
              style={{
                width: "200px",
                height: "220px",
                filter: "drop-shadow(0 16px 40px rgba(0,0,0,0.5))",
              }}
            >
              <Image
                src={actualImagePath}
                alt={imageAlt}
                width={200}
                height={220}
                className="w-full h-full object-contain"
                style={{
                  filter: "drop-shadow(0 10px 30px rgba(0,0,0,0.3))",
                }}
              />
            </div>
          </motion.div>

          <div className="w-full">
            <motion.h3
              className="font-bold leading-none mb-3 text-center"
              style={{
                fontFamily: "'Sulphur Point', sans-serif",
                fontSize: "clamp(26px, 7vw, 38px)",
                letterSpacing: "-1.5px",
                background:
                  "linear-gradient(90deg, rgba(255,255,255,0.2) 0%, #ffffff 40%, #ffffff 60%, rgba(255,255,255,0.2) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              {title}
            </motion.h3>

            <div
              className="h-px mx-auto mb-3"
              style={{
                width: "60px",
                background: "rgba(255,255,255,0.2)",
              }}
            />

            <motion.p
              className="text-[#c8c5c5] text-[15px] leading-relaxed text-center mx-auto"
              style={{ fontFamily: "'Roboto Condensed', sans-serif", maxWidth: "36ch" }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {description}
            </motion.p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
