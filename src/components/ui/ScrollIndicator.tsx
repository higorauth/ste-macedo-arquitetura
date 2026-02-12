"use client";

import { motion } from "framer-motion";

export function ScrollIndicator() {
  return (
    <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 1 }}
    >
      <span className="font-outfit font-light text-[10px] tracking-[0.3em] uppercase text-white/60">
        Scroll
      </span>
      <div className="w-[1px] h-8 bg-white/30 relative overflow-hidden">
        <div className="w-full h-full bg-white scroll-indicator" />
      </div>
    </motion.div>
  );
}
