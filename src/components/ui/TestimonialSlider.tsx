"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TESTIMONIALS } from "@/lib/constants";

export function TestimonialSlider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  return (
    <div
      className="relative max-w-3xl mx-auto text-center"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 font-cormorant text-[120px] md:text-[160px] leading-none text-gray-800/30 select-none pointer-events-none">
        &ldquo;
      </div>

      <div className="relative min-h-[200px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="px-4"
          >
            <p className="font-cormorant font-light text-2xl md:text-3xl text-white leading-relaxed mb-8 italic">
              {TESTIMONIALS[current].text}
            </p>
            <div className="flex flex-col items-center gap-1">
              <span className="font-outfit font-normal text-sm tracking-[0.1em] text-white">
                {TESTIMONIALS[current].author}
              </span>
              <span className="font-outfit font-light text-xs tracking-[0.15em] uppercase text-gray-400">
                {TESTIMONIALS[current].project}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-center gap-3 mt-10">
        {TESTIMONIALS.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-8 h-[2px] transition-all duration-300 ${
              index === current ? "bg-white" : "bg-gray-600"
            }`}
            aria-label={`Depoimento ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
