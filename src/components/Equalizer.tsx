import { motion } from "motion/react";

const bars = [
  { min: 5, max: 16, duration: 0.55, delay: 0 },
  { min: 4, max: 26, duration: 0.40, delay: 0.08 },
  { min: 7, max: 20, duration: 0.65, delay: 0.16 },
  { min: 4, max: 28, duration: 0.48, delay: 0.05 },
  { min: 5, max: 14, duration: 0.72, delay: 0.12 },
  { min: 3, max: 22, duration: 0.38, delay: 0.20 },
];

export default function Equalizer() {
  return (
    <div className="fixed bottom-[22px] right-[18px] flex items-end gap-[3px] z-[200]">
      {bars.map((bar, i) => (
        <motion.div
          key={i}
          initial={{ height: bar.min, opacity: 0.35 }}
          animate={{ height: bar.max, opacity: 0.85 }}
          transition={{
            duration: bar.duration,
            delay: bar.delay,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          className="w-[3px] rounded-[2px] bg-gold"
        />
      ))}
    </div>
  );
}
