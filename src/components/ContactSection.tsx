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
    <section className="relative z-10 w-full px-6 py-20 md:py-32 flex flex-col items-center">
      {/* NOSOTROS label */}
      <motion.div
        className="text-center mb-12 w-full max-w-2xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <span
          className="text-xs md:text-sm tracking-[10px] text-white/35 uppercase font-light"
          style={{ fontFamily: "'Sulphur Point', sans-serif" }}
        >
          NOSOTROS
        </span>
      </motion.div>

      {/* Contact cards */}
      <div className="flex flex-col gap-4 max-w-2xl mx-auto">
        {contacts.map((contact, index) => (
          <motion.a
            key={contact.text}
            href={contact.href}
            target={contact.isInstagram ? "_blank" : undefined}
            rel={contact.isInstagram ? "noopener noreferrer" : undefined}
            className="glass flex items-center gap-6 px-8 py-5 group transition-all duration-300 cursor-pointer"
            style={{
              textDecoration: "none",
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 * index }}
            whileHover={{
              backgroundColor: "rgba(137,133,133,0.25)",
              y: -2,
              boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
            }}
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
              className="text-white/80 group-hover:text-white transition-colors text-[clamp(16px,2.5vw,26px)] font-light tracking-tight"
              style={{ fontFamily: "'Sulphur Point', sans-serif" }}
            >
              {contact.text}
            </span>

            {/* Arrow indicator */}
            <motion.div
              className="ml-auto opacity-0 group-hover:opacity-100 text-white/60"
              initial={{ x: -5 }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.2 }}
            >
              →
            </motion.div>
          </motion.a>
        ))}
      </div>

      {/* Copyright */}
      <motion.p
        className="text-center text-white/20 text-xs mt-8 tracking-wider w-full max-w-2xl"
        style={{ fontFamily: "'Roboto Condensed', sans-serif" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        © 2025 Studio Nodo. Todos los derechos reservados.
      </motion.p>
    </section>
  );
}
