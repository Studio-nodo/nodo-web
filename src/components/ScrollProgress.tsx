"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div style={{ position: "fixed", top: 0, left: 0, right: 0, height: "2px", zIndex: 50 }}>
      <motion.div
        className="h-full origin-left"
        style={{
          scaleX,
          background: "linear-gradient(90deg, rgba(100,140,255,0.8), rgba(200,220,255,0.4))",
        }}
      />
    </div>
  );
}
