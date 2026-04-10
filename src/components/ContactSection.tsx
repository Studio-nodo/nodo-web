"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const imgMail = "https://www.figma.com/api/mcp/asset/aba4daf7-ae2d-4eef-9bb5-e4db92b889e2";
const imgInstagram = "https://www.figma.com/api/mcp/asset/3a3f9fb4-d0c3-4e8f-b92d-93b4535f45ff";

const contacts = [
  {
    icon: imgMail,
    text: "mmartone@studio-nodo.com",
    href: "mailto:mmartone@studio-nodo.com",
  },
  {
    icon: imgMail,
    text: "strezeguet@studio-nodo.com",
    href: "mailto:strezeguet@studio-nodo.com",
  },
  {
    icon: imgInstagram,
    text: "studio-nodo",
    href: "https://instagram.com/studio-nodo",
    isInstagram: true,
  },
];

export default function ContactSection() {
  return (
    <section
      id="contacto"
      className="relative z-10 w-full px-6 flex flex-col items-center"
      style={{
        paddingTop: "clamp(80px, 5rem, 100px)",
        paddingBottom: "clamp(120px, 7.5rem, 150px)",
      }}
    >
      {/* Header */}
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
          CONTACTO
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
          Hablemos
        </h2>
      </motion.div>

      {/* Contact cards */}
      <div className="flex flex-col items-center gap-4 md:gap-5 w-full">
        {contacts.map((contact, index) => (
          <motion.a
            key={contact.text}
            href={contact.href}
            target={contact.isInstagram ? "_blank" : undefined}
            rel={contact.isInstagram ? "noopener noreferrer" : undefined}
            className="flex items-center gap-4 md:gap-5 px-6 py-4 rounded-xl group cursor-pointer"
            style={{
              textDecoration: "none",
              background: "linear-gradient(135deg, rgba(255,255,255,0.10), rgba(255,255,255,0.03))",
              border: "1px solid rgba(255,255,255,0.12)",
              backdropFilter: "blur(12px)",
              width: "fit-content",
              maxWidth: "calc(100vw - 48px)",
            }}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 * index, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.16), rgba(255,255,255,0.06))",
              borderColor: "rgba(255,255,255,0.25)",
              y: -4,
              scale: 1.01,
              boxShadow: "0 12px 36px rgba(0,0,0,0.35)",
            }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex-shrink-0 w-[40px] h-[40px] relative flex items-center justify-center">
              <Image
                src={contact.icon}
                alt={contact.isInstagram ? "Instagram" : "Mail"}
                width={contact.isInstagram ? 36 : 40}
                height={contact.isInstagram ? 33 : 24}
                className="object-contain opacity-80 group-hover:opacity-100 transition-opacity"
              />
            </div>

            <span
              className="text-white/85 group-hover:text-white transition-colors font-light tracking-tight"
              style={{ fontFamily: "'Sulphur Point', sans-serif", fontSize: "clamp(13px, 2vw, 22px)", wordBreak: "break-all" }}
            >
              {contact.text}
            </span>

            <span className="opacity-0 group-hover:opacity-100 text-white/70 text-xl ml-2 transition-opacity duration-300">
              →
            </span>
          </motion.a>
        ))}
      </div>

      {/* Copyright */}
      <motion.p
        className="text-center text-white/25 text-sm mt-20 md:mt-24 tracking-wider w-full"
        style={{ fontFamily: "'Roboto Condensed', sans-serif" }}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        © 2025 Studio Nodo. Todos los derechos reservados.
      </motion.p>

      {/* Logo abajo a la derecha */}
      <motion.div
        className="w-full flex justify-end mt-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <Image
          src="/logo.png"
          alt="Studio Nodo"
          width={80}
          height={59}
          className="object-contain"
          style={{ filter: "brightness(0) invert(1)", opacity: 0.25 }}
        />
      </motion.div>
    </section>
  );
}
