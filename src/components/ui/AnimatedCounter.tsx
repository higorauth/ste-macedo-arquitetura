"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

interface AnimatedCounterProps {
  value: number;
  suffix: string;
  label: string;
}

export function AnimatedCounter({ value, suffix, label }: AnimatedCounterProps) {
  const { ref, isInView } = useInView({ threshold: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="font-cormorant font-light text-5xl md:text-6xl mb-2">
        {count}
        <span className="text-accent">{suffix}</span>
      </div>
      <div className="font-outfit font-light text-sm tracking-[0.15em] uppercase text-gray-400">
        {label}
      </div>
    </motion.div>
  );
}
