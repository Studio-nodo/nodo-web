"use client";

import dynamic from "next/dynamic";

const AnimatedBackground = dynamic(() => import("./AnimatedBackground"), { ssr: false });
const ParticleField = dynamic(() => import("./ParticleField"), { ssr: false });
const MiniNavbar = dynamic(() => import("./ui/mini-navbar").then((m) => ({ default: m.MiniNavbar })), { ssr: false });
const ScrollProgress = dynamic(() => import("./ScrollProgress"), { ssr: false });
const WhatsAppButton = dynamic(() => import("./WhatsAppButton"), { ssr: false });

export default function VisualEffects() {
  return (
    <>
      <AnimatedBackground />
      <ParticleField />
      <ScrollProgress />
      <MiniNavbar />
      <WhatsAppButton />
    </>
  );
}
