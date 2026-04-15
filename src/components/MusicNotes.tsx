import { motion } from "motion/react";

const notes = [
  { left: "8%", duration: 7, delay: 0, size: 14, rotation: -20, char: "♪" },
  { left: "22%", duration: 9, delay: 1.8, size: 12, rotation: 15, char: "♫" },
  { left: "48%", duration: 6, delay: 3.5, size: 16, rotation: -10, char: "♩" },
  { left: "68%", duration: 8, delay: 0.9, size: 13, rotation: 25, char: "♬" },
  { left: "84%", duration: 7.5, delay: 2.6, size: 11, rotation: -30, char: "♪" },
];

export default function MusicNotes() {
  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {notes.map((note, i) => (
        <motion.div
          key={i}
          initial={{ y: "105vh", opacity: 0, rotate: 0 }}
          animate={{
            y: "-10vh",
            opacity: [0, 0.25, 0.12, 0],
            rotate: note.rotation,
          }}
          transition={{
            duration: note.duration,
            delay: note.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            left: note.left,
            fontSize: note.size,
          }}
          className="absolute text-gold"
        >
          {note.char}
        </motion.div>
      ))}
    </div>
  );
}
