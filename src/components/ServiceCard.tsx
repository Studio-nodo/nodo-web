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
  imageSrc,
  imageAlt,
  imageLeft = true,
  index,
}: ServiceCardProps) {
  const isEven = index % 2 === 0;
  const actualImagePath = getImagePath(title);

  return (
    <motion.div
      className="relative w-full max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Layout: imagen + texto, alternando lados */}
      <div
        className="flex flex-col items-center gap-10 md:gap-16"
        style={{
          flexDirection: "column",
        }}
      >
        {/* En desktop: fila alternada */}
        <div
          className="hidden md:flex items-center justify-center gap-16 lg:gap-20 w-full"
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
            className="flex-1 min-w-0 flex flex-col"
            style={{ alignItems: imageLeft ? "flex-start" : "flex-end", maxWidth: "48ch" }}
          >
            <motion.h3
              className="font-bold leading-none mb-5 text-center"
              style={{
                fontFamily: "'Sulphur Point', sans-serif",
                fontSize: "clamp(28px, 4.5vw, 52px)",
                letterSpacing: "-2px",
                background: "linear-gradient(90deg, rgba(255,255,255,0.3) 0%, #ffffff 35%, #ffffff 65%, rgba(255,255,255,0.3) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                width: "100%",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.25 }}
            >
              {title}
            </motion.h3>

            <motion.div
              className="h-px mb-6 w-full"
              style={{
                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.25) 50%, transparent)",
              }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />

            <motion.p
              className="text-[#c8c5c5] leading-relaxed mb-8 text-center w-full"
              style={{
                fontFamily: "'Roboto Condensed', sans-serif",
                fontSize: "clamp(15px, 1.8vw, 18px)",
              }}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.35 }}
            >
              {description}
            </motion.p>

            {/* CTA Button Desktop */}
            <motion.a
              href={getMailtoLink(title)}
              className="inline-block px-7 py-3 rounded-lg text-sm font-medium self-center"
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
              transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
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

        {/* En mobile: siempre centrado, imagen arriba */}
        <div className="flex md:hidden flex-col items-center gap-8 w-full text-center">
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

          <div className="w-full flex flex-col items-center">
            <motion.h3
              className="font-bold leading-none mb-5 text-center"
              style={{
                fontFamily: "'Sulphur Point', sans-serif",
                fontSize: "clamp(28px, 7vw, 40px)",
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

            <motion.div
              className="h-px mb-6"
              style={{
                width: "80px",
                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
              }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
            />

            <motion.p
              className="text-[#c8c5c5] leading-relaxed text-center mx-auto mb-8"
              style={{
                fontFamily: "'Roboto Condensed', sans-serif",
                fontSize: "clamp(15px, 4vw, 17px)",
                maxWidth: "40ch"
              }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {description}
            </motion.p>

            {/* CTA Button Mobile */}
            <motion.a
              href={getMailtoLink(title)}
              className="inline-block px-7 py-3 rounded-lg text-sm font-medium"
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
              transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.24), rgba(255,255,255,0.14))",
                borderColor: "rgba(255,255,255,0.35)",
                scale: 1.04,
                boxShadow: "0 6px 20px rgba(0,0,0,0.4)",
              }}
              whileTap={{ scale: 0.96 }}
            >
              Solicitar presupuesto
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
