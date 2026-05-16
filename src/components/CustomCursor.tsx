"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Outer ring — slightly laggy for trail effect
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  // Inner dot — snappy
  const dotSpringConfig = { damping: 50, stiffness: 1000, mass: 0.1 };
  const dotX = useSpring(mouseX, dotSpringConfig);
  const dotY = useSpring(mouseY, dotSpringConfig);

  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Outer ring — uses only transform (scale) and opacity — GPU-composited ✓ */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden sm:block"
        style={{ x: cursorX, y: cursorY }}
      >
        <motion.div
          className={`w-10 h-10 -ml-5 -mt-5 rounded-full border-2 flex items-center justify-center ${
            isHovering
              ? "border-violet-500/80 bg-violet-500/10"
              : "border-cyan-400/50 bg-transparent"
          }`}
          animate={{
            scale: isHovering ? 1.5 : 1,
            opacity: isHovering ? 0.9 : 0.7,
          }}
          transition={{ duration: 0.15 }}
          style={{
            // Use box-shadow via CSS variable to avoid non-composited animation
            boxShadow: isHovering
              ? "0 0 25px rgba(124, 58, 237, 0.5)"
              : "0 0 15px rgba(0, 229, 255, 0.3)",
          }}
        />
      </motion.div>

      {/* Inner dot — only transform + opacity */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[10000] hidden sm:block"
        style={{ x: dotX, y: dotY }}
      >
        <motion.div
          className="w-2 h-2 -ml-1 -mt-1 rounded-full bg-cyan-400 shadow-[0_0_10px_#00E5FF]"
          animate={{
            scale: isHovering ? 0 : 1,
            opacity: isHovering ? 0 : 1,
          }}
          transition={{ duration: 0.15 }}
        />
      </motion.div>
    </>
  );
}
