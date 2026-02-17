"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const sparkles = [
  { x: 12, y: 8, duration: 3.2, delay: 0.5 },
  { x: 85, y: 15, duration: 4.1, delay: 1.2 },
  { x: 42, y: 72, duration: 2.8, delay: 3.1 },
  { x: 68, y: 35, duration: 3.5, delay: 0.8 },
  { x: 25, y: 55, duration: 4.5, delay: 2.4 },
  { x: 91, y: 82, duration: 2.5, delay: 4.0 },
  { x: 7, y: 43, duration: 3.8, delay: 1.6 },
  { x: 55, y: 18, duration: 4.3, delay: 3.7 },
  { x: 78, y: 65, duration: 2.3, delay: 0.3 },
  { x: 33, y: 91, duration: 3.0, delay: 2.0 },
  { x: 62, y: 48, duration: 4.7, delay: 4.5 },
  { x: 18, y: 25, duration: 2.6, delay: 1.0 },
  { x: 48, y: 5, duration: 3.4, delay: 3.3 },
  { x: 95, y: 52, duration: 4.0, delay: 0.1 },
  { x: 38, y: 78, duration: 2.9, delay: 2.8 },
  { x: 72, y: 12, duration: 3.7, delay: 4.2 },
  { x: 5, y: 68, duration: 4.4, delay: 1.8 },
  { x: 82, y: 95, duration: 2.4, delay: 3.5 },
  { x: 50, y: 38, duration: 3.1, delay: 0.7 },
  { x: 15, y: 85, duration: 4.2, delay: 2.2 },
];

export default function Footer() {
  return (
    <section className="relative min-h-[150vh] flex flex-col items-center justify-center bg-hero-dark overflow-hidden px-6 py-32">
      {/* Warm glows */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-amber-500/[0.06] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-orange-400/[0.04] blur-[100px] pointer-events-none" />

      {/* Birthday message */}
      <ScrollReveal className="text-center z-10 mb-24">
        <p className="font-mono text-xs tracking-[0.3em] uppercase text-stone-500 mb-8">
          17th February 2026
        </p>

        <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl text-stone-200 mb-8 font-light">
          Happy 24th Birthday
        </h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1.5 }}
          className="font-handwriting text-3xl sm:text-4xl md:text-5xl text-amber-200/70"
        >
          Pete
        </motion.p>
      </ScrollReveal>

      {/* Closing letter */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.3, duration: 1.2 }}
        className="max-w-xl mx-auto text-center z-10"
      >
        <p className="font-handwriting text-xl sm:text-2xl text-stone-400 leading-relaxed mb-8">
          Being your big brother is one of the greatest responsibilities of my
          life. To help you, to guide you, to love you with everything I have.
          You and Tim both. That never stops.
        </p>

        <p className="font-handwriting text-xl sm:text-2xl text-stone-400 leading-relaxed mb-8">
          I know you don&apos;t always feel it, but Mom and Dad would be so
          proud of the man you&apos;re becoming. They&apos;re with us in every
          one of these memories, in every laugh, every daft moment, every bit
          of love we share. We carry them with us always.
        </p>

        <p className="font-handwriting text-xl sm:text-2xl text-stone-400 leading-relaxed mb-8">
          I believe in you, Pete. I believe in where you&apos;re heading. This
          year is yours, I can feel it. And no matter what, I&apos;m right
          here. Always have been, always will be.
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 1.5 }}
        >
          <p className="font-handwriting text-2xl sm:text-3xl text-stone-300 mt-12 mb-2">
            Love always,
          </p>
          <p className="font-handwriting text-2xl sm:text-3xl text-stone-300">
            Your big bro, Tom x
          </p>
        </motion.div>
      </motion.div>

      {/* Sparkle elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {sparkles.map((s, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-amber-300/40"
            style={{ left: `${s.x}%`, top: `${s.y}%` }}
            animate={{
              opacity: [0, 0.8, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: s.duration,
              repeat: Infinity,
              delay: s.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </section>
  );
}
