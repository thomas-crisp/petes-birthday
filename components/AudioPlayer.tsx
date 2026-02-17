"use client";

import { useState, useRef, useEffect } from "react";

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasAudio, setHasAudio] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const playingRef = useRef(false);

  useEffect(() => {
    const audio = new Audio("/audio/ambient.mp3");
    audio.loop = true;
    audio.volume = 0.3;
    audio.preload = "auto";
    audioRef.current = audio;

    const tryPlay = () => {
      if (playingRef.current || !audioRef.current) return;
      audioRef.current.play().then(() => {
        playingRef.current = true;
        setIsPlaying(true);
        // Only remove listeners after successful playback
        events.forEach((e) => document.removeEventListener(e, tryPlay, true));
      }).catch(() => {
        // Still blocked, listeners stay active for next interaction
      });
    };

    const events = ["click", "scroll", "touchstart", "keydown", "mousedown", "pointerdown"];

    audio.addEventListener("canplaythrough", () => {
      setHasAudio(true);
      // Attempt autoplay immediately
      tryPlay();
    });

    audio.addEventListener("error", () => setHasAudio(false));
    audio.load();

    // Register listeners on capture phase so we catch interactions early
    events.forEach((e) => document.addEventListener(e, tryPlay, { capture: true, passive: true }));

    return () => {
      events.forEach((e) => document.removeEventListener(e, tryPlay, true));
      audio.pause();
      audio.src = "";
    };
  }, []);

  const toggle = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      playingRef.current = false;
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        playingRef.current = true;
        setIsPlaying(true);
      });
    }
  };

  if (!hasAudio) return null;

  return (
    <button
      onClick={toggle}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-stone-800/80 backdrop-blur-sm text-stone-200 flex items-center justify-center transition-all duration-300 shadow-lg opacity-0 hover:opacity-100"
      aria-label={isPlaying ? "Pause music" : "Play music"}
    >
      {isPlaying ? (
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 5.25v13.5m-7.5-13.5v13.5"
          />
        </svg>
      ) : (
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 010 1.972l-11.54 6.347a1.125 1.125 0 01-1.667-.986V5.653z"
          />
        </svg>
      )}
    </button>
  );
}
