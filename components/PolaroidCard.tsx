"use client";

import ScrollReveal from "./ScrollReveal";

interface PolaroidCardProps {
  src: string;
  caption: string;
  year: string;
  rotation: number;
  index: number;
}

export default function PolaroidCard({
  src,
  caption,
  year,
  rotation,
  index,
}: PolaroidCardProps) {
  const direction = index % 2 === 0 ? "left" : "right";

  return (
    <ScrollReveal direction={direction} delay={index * 0.15}>
      <div
        className="group relative bg-white p-3 pb-16 sm:p-4 sm:pb-20 shadow-polaroid hover:shadow-polaroid-hover transition-all duration-500 cursor-default w-[260px] sm:w-[300px]"
        style={{
          transform: `rotate(${rotation}deg)`,
        }}
      >
        <div className="relative overflow-hidden aspect-[4/3]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={caption}
            className="w-full h-full object-cover filter sepia-[0.15] saturate-[0.9] contrast-[1.05] brightness-[0.98] group-hover:sepia-0 group-hover:saturate-100 group-hover:scale-105 transition-all duration-700"
            loading="lazy"
          />
          {/* Subtle vignette overlay */}
          <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.15)]" />
        </div>

        <p className="font-handwriting text-lg sm:text-xl mt-3 sm:mt-4 text-stone-700 leading-snug">
          {caption}
        </p>
        <p className="font-mono text-[10px] sm:text-xs mt-1 text-stone-400 tracking-wider uppercase">
          {year}
        </p>
      </div>
    </ScrollReveal>
  );
}
