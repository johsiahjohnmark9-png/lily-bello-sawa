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
    title: "The Experience",
    content: "Can’t wait to see you headlining The Experience. Just remember, when you’re famous, I expect a VIP seat and a shoutout for being your first fan lol"
  },
  {
    chapter: "Chapter Two",
    title: "Heart of Gold",
    content: "Jokes aside, your dream of opening an orphanage is the coolest thing about you. Your heart is actually bigger than your ego (and that’s saying a lot!). ❤️"
  },
  {
    chapter: "Chapter Three",
    title: "The Eviction Notice",
    content: "There are only two ways I’m leaving your DMs: 1. You say 'I do' at the altar to some lucky guy and ill be happy for you. 2. You tell me to get lost. Until then? You’re stuck with me. lol"
  },
  {
    chapter: "Chapter Four",
    title: "Reasons",
    content: "This website is 10% appreciation, 90% me trying to make you give me a review and how you like the site and if it did made you blush. Hope it made you smile. You're the best"
  },
  {
    chapter: "Chapter Five",
    title: "Your Hands",
    content: "well i have to say you have a pretty hands and nails, and just know that if we meet ill Definitely hold your hands guy lol"
  },
  {
    chapter: "Chapter Six",
    title: "Self-Respect",
    content: "In a world of people doing anything for likes, I really respect how you carry yourself. You're a 'Social Media Person' with actual values. Rare find. 💎"
  },
  {
    chapter: "Chapter Seven",
    title: "Movie Recommendation",
    content: "i have a movie ill like you watch, its not on netflix tho, but the name is ''hacksaw ridge''"
  },
  {
    chapter: "Chapter Eight",
    title: "Don't Mind Me Pls",
    content: "i may be creepy and weird, but omo it only happens when am in your dm ne fa lol"
  },
  {
    chapter: "Chapter Nine",
    title: "Honesty",
    content: "the very day LYSA you feel like i josiah disrespects you, please cut me, but for now sincely tell me if you liked it and give me a review lol"
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
        LYSA
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
              className="inline-block font-serif-display text-[clamp(64px,18vw,160px)] font-bold tracking-[0.04em] text-gold leading-none"
            >
              LYSA
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
            total={chapters.length}
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
          LYSA
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
          Made with love · LYSA · All rights reserved
        </p>
      </footer>
    </div>
  );
}
