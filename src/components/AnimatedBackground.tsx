"use client";

import { MeshGradient } from "@paper-design/shaders-react";

export default function AnimatedBackground() {
  return (
    <div
      aria-hidden="true"
      style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }}
    >
      <MeshGradient
        className="w-full h-full"
        colors={["#000000", "#1a1a1a", "#2e2e2e", "#606060"]}
        speed={0.9}
        distortion={0.4}
        swirl={0.3}
        grainMixer={0.1}
      />
    </div>
  );
}
