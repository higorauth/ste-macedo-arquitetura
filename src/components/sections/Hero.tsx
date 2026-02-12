"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Logo } from "@/components/brand/Logo";
import { PROJECTS } from "@/lib/constants";

const HERO_IMAGES = PROJECTS.map((p) => ({
  src: p.image.replace("w=1200", "w=1920"),
  alt: p.title,
}));

export function Hero() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const timerRef = useRef<ReturnType<typeof setInterval>>(null);

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
  }, []);

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startTimer]);

  const goTo = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
    startTimer();
  };

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%" }),
    center: { x: "0%" },
    exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%" }),
  };

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={HERO_IMAGES[current].src}
            alt={HERO_IMAGES[current].alt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-black/50 z-[1]" />

      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Logo variant="full" color="light" size={72} />
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
        {HERO_IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className={`w-6 h-[2px] transition-all duration-300 ${
              index === current ? "bg-white" : "bg-white/30"
            }`}
            aria-label={`Imagem ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
