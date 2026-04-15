import { motion } from "motion/react";

export default function VinylInterlude() {
  return (
    <div className="py-16 flex flex-col items-center bg-black-soft gap-6 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-20%" }}
        transition={{ duration: 1, ease: [0.34, 1.56, 0.64, 1] }}
        className="w-[150px] h-[150px] rounded-full relative shadow-[0_0_0_1px_#7A6030,0_0_50px_rgba(201,165,80,0.15),inset_0_0_24px_rgba(0,0,0,0.9)]"
        style={{
          background: "radial-gradient(circle at center, #181818 0%, #0a0a0a 28%, #1c1c1c 29%, #0a0a0a 54%, #1c1c1c 55%, #0a0a0a 100%)",
        }}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30px] h-[30px] rounded-full bg-[radial-gradient(circle,_#E8C97A_0%,_#C9A550_100%)] shadow-[0_0_12px_rgba(201,165,80,0.5)]" />
      </motion.div>
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="font-sans text-[9px] font-extralight tracking-[0.55em] text-gold-dim uppercase"
      >
        Now Playing · Her Story
      </motion.span>
    </div>
  );
}
