import { motion } from "motion/react";

interface QuoteInterludeProps {
  quote: string;
}

export default function QuoteInterlude({ quote }: QuoteInterludeProps) {
  return (
    <div className="py-16 px-8 text-center bg-black-rich relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-[30px] bg-gradient-to-b from-transparent to-gold-dim" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-[30px] bg-gradient-to-t from-transparent to-gold-dim" />
      
      <div className="w-[7px] h-[7px] bg-gold rotate-45 mx-auto mb-[26px] opacity-70" />
      
      <motion.p
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-12%" }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        className="font-serif-display text-[clamp(17px,4.5vw,23px)] italic font-normal text-cream leading-[1.7] tracking-[0.02em]"
        dangerouslySetInnerHTML={{ __html: quote }}
      />
    </div>
  );
}
