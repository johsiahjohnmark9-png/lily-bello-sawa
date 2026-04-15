import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { useEffect, useState, useRef } from "react";
import { Music, Music2, Volume2, VolumeX } from "lucide-react";
import MusicNotes from "./components/MusicNotes";
import Equalizer from "./components/Equalizer";
import Waveform from "./components/Waveform";
import LuxuryBackground from "./components/LuxuryBackground";
import QuoteInterlude from "./components/QuoteInterlude";
import VinylInterlude from "./components/VinylInterlude";
import ChapterSection from "./components/ChapterSection";

const chapters = [
  {
    chapter: "Chapter One",
    title: "The Golden Hour",
    content: "There are people who carry their light within them — Lily is one of those rare souls. In this moment, captured in the warmth of the golden hour, she reminds us that beauty is not just what you see. It is what you feel standing in someone's presence."
  },
  {
    chapter: "Chapter Two",
    title: "Soulful",
    content: "Depth. That is the first word that comes to mind. Behind those eyes lies a universe — stories untold, dreams still flowering, wisdom quietly gathering. Lily does not just inhabit a room; she transforms it entirely."
  },
  {
    chapter: "Chapter Three",
    title: "Radiance",
    content: "She glows — not from the light around her, but from the life within her. Lily's radiance is the kind that does not dim with seasons or distance. It multiplies. It reaches across every room, every silence, every year."
  },
  {
    chapter: "Chapter Four",
    title: "The Dreamer",
    content: "Dreams are her native language. She speaks them not with words, but with the way she moves through the world — purposefully, beautifully, always a little ahead of where the rest of us are still standing."
  },
  {
    chapter: "Chapter Five",
    title: "In Her Element",
    content: "Watch her when she is fully herself — unbothered, unfaded, completely at ease. This is Lily in her element. Confident not from pride, but from a quiet knowing that she is exactly where she is meant to be."
  },
  {
    chapter: "Chapter Six",
    title: "Timeless",
    content: "Elegance is not a trend for Lily — it is her nature. Effortlessly timeless in every expression, every glance, every smile. Years from now, these photographs will still feel like they were taken in a golden age."
  },
  {
    chapter: "Chapter Seven",
    title: "The Muse",
    content: "Artists search lifetimes for a subject like this. Lily is a muse not because she poses perfectly, but because she exists honestly. Every frame tells a story. Every expression is an invitation to feel something real."
  },
  {
    chapter: "Chapter Eight",
    title: "Bloom",
    content: "Like the finest things in nature, she is always becoming more beautiful. Lily blooms not all at once, but steadily — in the way gold is refined, in the way great songs find you slowly, then all at once."
  },
  {
    chapter: "Chapter Nine",
    title: "Luminous",
    content: "There is a particular kind of light that only certain people carry — warm, unwavering, generous. Lily is that light. In her presence, rooms become warmer, conversations grow richer, and moments become memories."
  },
  {
    chapter: "Chapter Ten",
    title: "Legacy",
    content: "Every photograph is a promise to the future — that she was here, that she shone, that her story mattered. Lily Bello Sawa is not just a name. She is a legacy being written, one radiant chapter at a time."
  }
];

function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7, delay: 1.2, ease: "easeInOut" }}
      className="fixed inset-0 bg-black-rich z-[9999] flex flex-col items-center justify-center gap-7"
    >
      <div className="w-[72px] h-[72px] rounded-full border border-gold-dim border-t-gold animate-spin relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-lg text-gold animate-[spin_1.2s_linear_infinite_reverse]">
          ✦
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="font-serif-display text-[13px] font-normal tracking-[0.7em] text-gold uppercase"
      >
        Lily Bello Sawa
      </motion.div>
    </motion.div>
  );
}

function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => console.log("Audio play failed:", e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed top-6 right-6 z-[500] flex items-center gap-4">
      <audio
        ref={audioRef}
        loop
        src="https://cdn.pixabay.com/audio/2022/03/10/audio_c8c8a73456.mp3" // Soft Romantic Piano
      />
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleMusic}
        className="flex items-center gap-3 px-4 py-2 rounded-full border border-gold/30 bg-black-rich/40 backdrop-blur-md text-gold text-[10px] uppercase tracking-[0.2em] transition-colors hover:bg-gold/10"
      >
        {isPlaying ? <Volume2 size={14} /> : <VolumeX size={14} />}
        <span>{isPlaying ? "Music On" : "Play Music"}</span>
      </motion.button>
    </div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative selection:bg-gold/30">
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" />}
      </AnimatePresence>
      
      <LuxuryBackground />
      <MusicNotes />
      <Equalizer />
      <MusicPlayer />

      <section id="hero" className="h-screen flex flex-col items-center justify-center relative overflow-hidden">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="font-sans text-[9px] font-extralight tracking-[0.65em] text-gold uppercase mb-[22px]"
        >
          -LYSA-
        </motion.p>

        <h1 className="text-center relative z-[2]">
          <div className="block overflow-hidden">
            <motion.span
              initial={{ y: "115%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block font-serif-display text-[clamp(64px,16vw,120px)] font-bold tracking-[0.04em] text-cream leading-none"
            >
              Lily
            </motion.span>
          </div>
          <div className="block overflow-hidden">
            <motion.span
              initial={{ y: "115%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.1, delay: 0.48, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block font-serif-display text-[clamp(48px,12vw,80px)] font-normal italic text-gold leading-[1.1]"
            >
              Bello
            </motion.span>
          </div>
          <div className="block overflow-hidden">
            <motion.span
              initial={{ y: "115%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.1, delay: 0.66, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block font-serif-display text-[clamp(32px,8vw,56px)] font-normal tracking-[0.28em] text-cream-dim leading-[1.2]"
            >
              Sawa
            </motion.span>
          </div>
        </h1>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "60%" }}
          transition={{ duration: 1.2, delay: 0.8, ease: "easeInOut" }}
          className="h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent my-[32px] relative z-[2]"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="font-serif-body text-[clamp(16px,4vw,22px)] font-light text-cream-dim tracking-[0.15em] text-center px-9"
        >
          i better hurry up and pay this 2500😅
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <span className="font-sans text-[8px] font-extralight tracking-[0.6em] text-gold-dim uppercase">
            Scroll
          </span>
          <div className="w-px h-16 overflow-hidden relative">
            <div className="absolute w-full h-full bg-gradient-to-b from-transparent to-gold animate-needle-drop" />
          </div>
        </motion.div>
      </section>

      <Waveform id="wf1" />

      {chapters.map((chap, i) => (
        <div key={i}>
          <ChapterSection
            index={i}
            total={10}
            chapter={chap.chapter}
            title={chap.title}
            content={chap.content}
          />
          {i === 2 && <VinylInterlude />}
          {i === 4 && <QuoteInterlude quote="&quot;Some people bloom in silence.<br>Others light up the entire garden.&quot;" />}
          {i === 7 && <QuoteInterlude quote="&quot;She is the melody you cannot stop humming —<br>the note that lingers long after the music fades.&quot;" />}
        </div>
      ))}

      <section id="finale" className="min-h-screen flex flex-col items-center justify-center p-8 text-center gap-[32px] relative">
        <motion.span
          initial={{ opacity: 0.5, scale: 1 }}
          whileInView={{ opacity: 1, scale: 1.1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
          className="text-[24px] text-gold tracking-[0.5em]"
        >
          ✦ ✦ ✦
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.25, ease: "easeOut" }}
          className="font-serif-display text-[clamp(48px,12vw,96px)] italic font-normal text-gold"
        >
          Lily Bello Sawa
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.55, ease: "easeOut" }}
          className="font-serif-body text-[clamp(18px,5vw,28px)] font-light text-cream-dim leading-[1.9] max-w-xl"
        >
          A soul that shines. A story still unfolding. A name the world will not forget.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-12"
        >
          <div className="w-px h-24 bg-gradient-to-b from-gold to-transparent mx-auto" />
        </motion.div>
      </section>

      <footer className="p-12 text-center border-t border-gold/10 bg-black-rich/20 backdrop-blur-sm">
        <p className="font-sans text-[9px] font-extralight tracking-[0.6em] text-gold-dim uppercase">
          Made with love · Lily Bello Sawa · All rights reserved
        </p>
      </footer>
    </div>
  );
}
