"use client";

export default function FilmGrain() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[100]"
      aria-hidden="true"
    >
      {/* Scan lines */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(0,0,0,0.3) 1px, rgba(0,0,0,0.3) 2px)",
          backgroundSize: "100% 4px",
        }}
      />
      {/* Grain noise */}
      <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay animate-grain" />
    </div>
  );
}
