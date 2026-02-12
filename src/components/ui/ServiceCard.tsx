"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  index: number;
}

export function ServiceCard({ number, title, description, index }: ServiceCardProps) {
  return (
    <motion.div
      className="group relative p-8 md:p-10 border-b border-gray-200 hover:-translate-y-1 hover:shadow-lg transition-all duration-400 bg-white"
      variants={fadeUp}
      custom={index}
    >
      <span className="absolute top-4 right-6 font-outfit font-extralight text-[80px] md:text-[100px] leading-none text-gray-100 select-none -z-0">
        {number}
      </span>

      <div className="relative z-10">
        <h3 className="font-cormorant font-normal text-2xl mb-3">
          {title}
        </h3>
        <p className="font-outfit font-light text-gray-600 text-sm leading-relaxed max-w-sm">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
