"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { fadeUp } from "@/lib/animations";

interface ProjectCardProps {
  title: string;
  category: string;
  area: string;
  image: string;
  index: number;
  isLarge?: boolean;
}

export function ProjectCard({
  title,
  category,
  area,
  image,
  index,
  isLarge = false,
}: ProjectCardProps) {
  return (
    <motion.div
      className={`group relative overflow-hidden ${
        isLarge ? "aspect-[4/5] md:aspect-[3/4]" : "aspect-square"
      }`}
      variants={fadeUp}
      custom={index}
    >
      <Image
        src={image}
        alt={`${title} — ${category}, ${area}`}
        fill
        sizes={isLarge ? "(max-width: 768px) 100vw, 60vw" : "(max-width: 768px) 100vw, 40vw"}
        className="object-cover grayscale group-hover:grayscale-[30%] transition-all duration-700 ease-out group-hover:scale-103"
      />

      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-all duration-500" />

      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
        <span className="font-outfit font-light text-xs tracking-[0.2em] uppercase text-gray-300 mb-2">
          {category} — {area}
        </span>
        <div className="flex items-end justify-between">
          <h3 className="font-cormorant font-light text-2xl md:text-3xl text-white">
            {title}
          </h3>
          <motion.div
            className="text-white"
            initial={{ x: -10, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
          >
            <ArrowRight className="w-5 h-5" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
