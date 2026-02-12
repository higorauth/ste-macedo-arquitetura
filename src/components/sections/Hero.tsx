"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";
import { Logo } from "@/components/brand/Logo";
import { staggerContainer, wordReveal, fadeUp } from "@/lib/animations";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative h-screen w-full overflow-hidden flex items-center"
    >
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80"
          alt="Interior contemporâneo minimalista"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <motion.div
            className="mb-8 opacity-60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <Logo variant="full" color="light" size={48} />
          </motion.div>

          <motion.div
            className="mb-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {["Projetamos", "espaços que"].map((word, i) => (
              <motion.div key={i} className="overflow-hidden" variants={wordReveal}>
                <span className="font-cormorant font-light italic text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1]">
                  {word}
                </span>
              </motion.div>
            ))}
            <motion.div className="overflow-hidden" variants={wordReveal}>
              <span className="font-cormorant font-light italic text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] relative">
                inspiram
                <span className="absolute bottom-1 left-0 w-full h-[1px] bg-accent/60" />
              </span>
            </motion.div>
          </motion.div>

          <motion.p
            className="font-outfit font-light text-base md:text-lg text-gray-300 max-w-lg mb-10 leading-relaxed"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.8 }}
          >
            Arquitetura moderna e contemporânea que transforma ambientes em experiências
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <Button variant="outline-light" href="#projetos">
              Conheça nossos projetos
            </Button>
          </motion.div>
        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
}
