"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: "#07080c" }}
    >
      {/* ── IMAGEN BASE — fondo.png a pantalla completa ── */}
      <motion.img
        src="/fondo.png"
        alt=""
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          mixBlendMode: "screen",
        }}
        animate={{ opacity: [0.12, 0.2, 0.12] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ── CAPA DE INTENSIFICACIÓN — refuerza el cruce de luz central ── */}
      <motion.div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 60% 45% at 50% 52%, rgba(200,200,200,0.05) 0%, transparent 80%)",
        }}
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ── ARCO INFERIOR-IZQ ── */}
      <motion.div
        style={{
          position: "absolute",
          bottom: "-10%",
          left: "-5%",
          width: "65%",
          height: "70%",
          borderRadius: "0 100% 0 0",
          background:
            "radial-gradient(ellipse at 80% 90%, rgba(160,160,160,0.06) 0%, transparent 65%)",
          filter: "blur(32px)",
        }}
        animate={{ opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* ── ARCO SUPERIOR-DER ── */}
      <motion.div
        style={{
          position: "absolute",
          top: "-10%",
          right: "-5%",
          width: "60%",
          height: "65%",
          borderRadius: "0 0 0 100%",
          background:
            "radial-gradient(ellipse at 20% 10%, rgba(160,160,160,0.06) 0%, transparent 65%)",
          filter: "blur(32px)",
        }}
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      {/* ── DESTELLO DEL CRUCE ── */}
      <motion.div
        style={{
          position: "absolute",
          top: "42%",
          left: "38%",
          width: "280px",
          height: "180px",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse at center, rgba(220,220,220,0.08) 0%, transparent 75%)",
          filter: "blur(18px)",
        }}
        animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.15, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />

      {/* Grid técnico sutil */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.004) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.004) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
    </div>
  );
}
