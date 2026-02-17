"use client";

import { type LetterSection as LetterSectionType } from "@/lib/photos";
import PolaroidCard from "./PolaroidCard";
import ScrollReveal from "./ScrollReveal";

interface LetterSectionProps {
  section: LetterSectionType;
  index: number;
}

export default function LetterSection({ section, index }: LetterSectionProps) {
  const isEven = index % 2 === 0;

  return (
    <section className="relative py-20 sm:py-32 px-6 overflow-hidden">
      {/* Subtle light leak for alternating sections */}
      {isEven && (
        <div className="absolute -top-20 -right-20 w-[300px] h-[300px] rounded-full bg-amber-400/[0.04] blur-[80px] pointer-events-none" />
      )}

      <div className="max-w-6xl mx-auto">
        {/* Era header */}
        <ScrollReveal>
          <div className="mb-12 sm:mb-16">
            <p className="font-mono text-[10px] sm:text-xs tracking-[0.3em] uppercase text-stone-400 mb-2">
              {section.yearRange}
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-stone-800 font-light">
              {section.era}
            </h2>
          </div>
        </ScrollReveal>

        {/* Narrative + Photos layout */}
        <div
          className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 lg:gap-16 items-start`}
        >
          {/* Narrative text */}
          <ScrollReveal
            direction={isEven ? "left" : "right"}
            className="lg:w-2/5 lg:sticky lg:top-32"
          >
            <p className="font-handwriting text-2xl sm:text-3xl text-stone-600 leading-relaxed">
              {section.narrative}
            </p>
          </ScrollReveal>

          {/* Photos */}
          <div className="lg:w-3/5 flex flex-wrap justify-center gap-8 sm:gap-10">
            {section.photos.map((photo, photoIndex) => (
              <PolaroidCard
                key={photo.src}
                src={photo.src}
                caption={photo.caption}
                year={photo.year}
                rotation={photo.rotation}
                index={photoIndex}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Section divider */}
      <div className="mt-20 sm:mt-32 flex justify-center">
        <div className="w-1 h-16 bg-gradient-to-b from-stone-300 to-transparent rounded-full" />
      </div>
    </section>
  );
}
