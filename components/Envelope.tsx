"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Envelope() {
  const [phase, setPhase] = useState<"sealed" | "opening" | "done">("sealed");

  // Lock body scroll while envelope is showing
  useEffect(() => {
    if (phase !== "done") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [phase]);

  // Dismiss overlay after opening animation completes
  useEffect(() => {
    if (phase === "opening") {
      const timer = setTimeout(() => setPhase("done"), 2400);
      return () => clearTimeout(timer);
    }
  }, [phase]);

  if (phase === "done") return null;

  const isOpening = phase === "opening";

  return (
    <motion.div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-hero-dark"
      onClick={() => phase === "sealed" && setPhase("opening")}
      animate={isOpening ? { opacity: 0 } : { opacity: 1 }}
      transition={isOpening ? { delay: 1.6, duration: 0.8, ease: "easeOut" } : {}}
      style={{ cursor: isOpening ? "default" : "pointer" }}
    >
      {/* Warm ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-amber-500/[0.05] blur-[150px] pointer-events-none" />

      {/* Envelope */}
      <motion.div
        className="relative"
        initial={{ opacity: 0, y: 20 }}
        animate={
          isOpening
            ? { opacity: 1, y: -20, scale: 0.97 }
            : { opacity: 1, y: 0, scale: 1 }
        }
        transition={
          isOpening
            ? { delay: 0.8, duration: 0.6, ease: "easeInOut" }
            : { duration: 1, ease: "easeOut" }
        }
      >
        {/* Envelope body */}
        <div className="relative w-[300px] h-[200px] sm:w-[400px] sm:h-[260px] md:w-[460px] md:h-[300px]">
          {/* Back panel (visible behind opened flap) */}
          <div className="absolute inset-0 rounded-md bg-[#d8cab2]" />

          {/* Front panel */}
          <div className="absolute inset-0 rounded-md bg-[#e8dcc8] shadow-[0_20px_60px_rgba(0,0,0,0.4)] border border-[#d4c4a8]" />

          {/* Flap */}
          <div
            className="absolute -top-[1px] left-[1px] right-[1px] z-10"
            style={{ perspective: 800 }}
          >
            <motion.div
              className="origin-top"
              animate={isOpening ? { rotateX: -180 } : { rotateX: 0 }}
              transition={{
                duration: 0.7,
                ease: [0.4, 0, 0.2, 1],
                delay: isOpening ? 0.15 : 0,
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Front of flap */}
              <div
                className="h-[100px] sm:h-[130px] md:h-[150px] bg-[#e2d5be] border border-[#d4c4a8]"
                style={{
                  clipPath: "polygon(0 0, 50% 100%, 100% 0)",
                  backfaceVisibility: "hidden",
                }}
              />
              {/* Back of flap (visible when opened) */}
              <div
                className="absolute top-0 left-0 w-full h-[100px] sm:h-[130px] md:h-[150px] bg-[#cbbfa6]"
                style={{
                  clipPath: "polygon(0 0, 50% 100%, 100% 0)",
                  backfaceVisibility: "hidden",
                  transform: "rotateX(180deg)",
                }}
              />
            </motion.div>
          </div>

          {/* Text on envelope */}
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none"
            animate={isOpening ? { opacity: 0, y: -8 } : { opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: isOpening ? 0.4 : 0,
            }}
          >
            <p className="font-handwriting text-3xl sm:text-4xl md:text-5xl text-[#4a3728] mb-2">
              Dear Pete...
            </p>
            <p className="font-mono text-[8px] sm:text-[9px] tracking-[0.25em] uppercase text-[#8b7d6b]">
              17th February 2026
            </p>
          </motion.div>

          {/* Wax seal */}
          <motion.div
            className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-11 h-11 sm:w-14 sm:h-14 rounded-full shadow-lg z-30 flex items-center justify-center border border-[#5a1008]/30"
            style={{
              background:
                "radial-gradient(circle at 35% 35%, #b83a28, #6b1a0f)",
            }}
            animate={
              isOpening
                ? { scale: [1, 1.15, 0], opacity: [1, 1, 0] }
                : { scale: 1, opacity: 1 }
            }
            transition={
              isOpening ? { duration: 0.4, times: [0, 0.3, 1] } : {}
            }
          >
            <span className="font-serif text-[#e8c49a] text-sm sm:text-base font-bold select-none drop-shadow-sm">
              T
            </span>
          </motion.div>
        </div>
      </motion.div>

      {/* Click to open hint */}
      <motion.p
        className="absolute bottom-10 sm:bottom-16 font-mono text-[10px] tracking-[0.3em] uppercase text-stone-600 select-none"
        initial={{ opacity: 0 }}
        animate={
          isOpening ? { opacity: 0 } : { opacity: [0.3, 0.6, 0.3] }
        }
        transition={
          isOpening
            ? { duration: 0.2 }
            : {
                repeat: Infinity,
                duration: 2.5,
                ease: "easeInOut",
                delay: 1.2,
              }
        }
      >
        Click to open
      </motion.p>
    </motion.div>
  );
}
