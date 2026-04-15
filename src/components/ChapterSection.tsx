import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

interface ChapterSectionProps {
  index: number;
  total: number;
  chapter: string;
  title: string;
  content: string;
}

export default function ChapterSection({
  index,
  total,
  chapter,
  title,
  content,
}: ChapterSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={containerRef} className="min-h-screen flex items-center justify-center px-8 py-32 max-w-4xl mx-auto overflow-hidden">
      <motion.div
        style={{ opacity, scale, y }}
        className="text-center"
      >
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="font-sans text-[11px] font-extralight tracking-[0.8em] text-gold uppercase block mb-10"
        >
          {chapter}
        </motion.span>
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          className="font-serif-display text-[clamp(40px,8vw,80px)] italic font-normal text-white leading-tight mb-12"
        >
          {title}
        </motion.h2>
        
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: "60px" }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.4, ease: "easeInOut" }}
          className="h-px bg-gold/40 mx-auto mb-12"
        />
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="font-serif-body text-[clamp(20px,4vw,32px)] font-light leading-[1.8] text-cream-dim max-w-2xl mx-auto"
        >
          {content}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.3 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 1 }}
          className="mt-20 text-[20px] text-gold tracking-[1em]"
        >
          ✦
        </motion.div>
      </motion.div>
    </section>
  );
}
