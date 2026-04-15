import { motion } from "motion/react";

export default function LuxuryBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black-rich">
      {/* Layered Atmospheric Gradients */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -top-1/4 -left-1/4 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(201,165,80,0.15)_0%,_transparent_70%)] blur-[100px]"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -40, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -bottom-1/4 -right-1/4 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(122,96,48,0.1)_0%,_transparent_70%)] blur-[120px]"
      />

      {/* Floating Stardust Particles */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          initial={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
            opacity: Math.random() * 0.3,
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            y: [null, "-20vh"],
            opacity: [null, 0.5, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: Math.random() * 10,
            ease: "linear",
          }}
          className="absolute w-1 h-1 bg-gold rounded-full"
        />
      ))}

      {/* Subtle Grid Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(var(--color-gold-dim) 1px, transparent 1px), linear-gradient(90deg, var(--color-gold-dim) 1px, transparent 1px)', backgroundSize: '60px 60px' }} 
      />
    </div>
  );
}
