import { motion } from "motion/react";

interface WaveformProps {
  id: string;
}

const heights = [6, 10, 18, 26, 16, 10, 22, 30, 14, 8, 24, 28, 12, 18, 26, 10, 20, 22, 8, 14, 28, 18, 12, 20, 6, 10, 16];

export default function Waveform({ id }: WaveformProps) {
  return (
    <div id={id} className="w-full px-4 h-11 flex items-center justify-center gap-[2px] bg-black-rich">
      {heights.map((h, i) => {
        const duration = 0.28 + Math.random() * 0.6;
        const delay = Math.random() * 0.45;
        return (
          <motion.div
            key={i}
            initial={{ height: Math.ceil(h / 3) }}
            animate={{ height: h }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
            className="flex-1 max-w-[5px] bg-gold opacity-20 rounded-[2px]"
          />
        );
      })}
    </div>
  );
}
