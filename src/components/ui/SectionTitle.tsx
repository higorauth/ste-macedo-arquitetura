"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  color?: "light" | "dark";
  align?: "left" | "center";
}

export function SectionTitle({
  title,
  subtitle,
  color = "dark",
  align = "center",
}: SectionTitleProps) {
  const titleColor = color === "dark" ? "text-black" : "text-white";
  const subtitleColor = color === "dark" ? "text-gray-600" : "text-gray-400";
  const lineColor = color === "dark" ? "bg-accent" : "bg-accent";
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <motion.div
      className={`flex flex-col ${alignment} gap-4 mb-12 md:mb-16 lg:mb-20`}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      <motion.h2
        className={`font-cormorant font-light text-3xl md:text-5xl lg:text-[56px] leading-tight ${titleColor}`}
        variants={fadeUp}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          className={`font-outfit font-light text-base md:text-lg tracking-wide ${subtitleColor} max-w-xl`}
          variants={fadeUp}
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div
        className={`w-12 h-[1px] ${lineColor} mt-2`}
        variants={fadeUp}
      />
    </motion.div>
  );
}
