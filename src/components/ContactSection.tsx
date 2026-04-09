"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const imgMail = "https://www.figma.com/api/mcp/asset/aba4daf7-ae2d-4eef-9bb5-e4db92b889e2";
const imgInstagram = "https://www.figma.com/api/mcp/asset/3a3f9fb4-d0c3-4e8f-b92d-93b4535f45ff";
const imgLogoNodo = "https://www.figma.com/api/mcp/asset/4454751b-41d9-4e84-937b-cfd950aad42d";

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
    <section className="relative z-10 w-full px-6 py-40 md:py-48 flex flex-col items-center">
      {/* NOSOTROS label */}
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
          Hablemos
        </h2>
      </motion.div>

      {/* Contact cards */}
      <div className="flex flex-col gap-6 md:gap-7 w-full max-w-4xl">
        {contacts.map((contact, index) => (
          <motion.a
            key={contact.text}
            href={contact.href}
            target={contact.isInstagram ? "_blank" : undefined}
            rel={contact.isInstagram ? "noopener noreferrer" : undefined}
            className="flex items-center gap-6 md:gap-8 px-8 md:px-10 py-6 md:py-7 rounded-2xl group cursor-pointer"
            style={{
              textDecoration: "none",
              background: "linear-gradient(135deg, rgba(255,255,255,0.10), rgba(255,255,255,0.03))",
              border: "1px solid rgba(255,255,255,0.12)",
              backdropFilter: "blur(12px)",
            }}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.15 * index,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.16), rgba(255,255,255,0.06))",
              borderColor: "rgba(255,255,255,0.25)",
              y: -4,
              scale: 1.01,
              boxShadow: "0 12px 36px rgba(0,0,0,0.35)",
            }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Icon */}
            <div className="flex-shrink-0 w-[56px] h-[56px] relative flex items-center justify-center">
              <Image
                src={contact.icon}
                alt={contact.isInstagram ? "Instagram" : "Mail"}
                width={contact.isInstagram ? 50 : 56}
                height={contact.isInstagram ? 46 : 32}
                className="object-contain opacity-80 group-hover:opacity-100 transition-opacity"
              />
            </div>

            {/* Text */}
            <span
              className="text-white/85 group-hover:text-white transition-colors font-light tracking-tight flex-1"
              style={{
                fontFamily: "'Sulphur Point', sans-serif",
                fontSize: "clamp(17px, 2.8vw, 28px)",
              }}
            >
              {contact.text}
            </span>

            {/* Arrow indicator */}
            <motion.div
              className="ml-auto opacity-0 group-hover:opacity-100 text-white/70 text-2xl"
              initial={{ x: -10 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              →
            </motion.div>
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
    </section>
  );
}
