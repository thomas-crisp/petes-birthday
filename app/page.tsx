import Hero from "@/components/Hero";
import LetterSection from "@/components/LetterSection";
import Footer from "@/components/Footer";
import FilmGrain from "@/components/FilmGrain";
import AudioPlayer from "@/components/AudioPlayer";
import { sections } from "@/lib/photos";

export default function Home() {
  return (
    <>
      <FilmGrain />
      <AudioPlayer />
      <Hero />
      <main className="bg-warm">
        {sections.map((section, index) => (
          <LetterSection key={section.era} section={section} index={index} />
        ))}
      </main>
      <Footer />
    </>
  );
}
