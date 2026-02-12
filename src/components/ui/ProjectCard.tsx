"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { fadeUp } from "@/lib/animations";

interface ProjectCardProps {
  slug: string;
  title: string;
  category: string;
  area: string;
  location: string;
  lot: string;
  builtArea: string;
  architect: string;
  image: string;
  index: number;
  isLarge?: boolean;
}

export function ProjectCard({
  slug,
  title,
  category,
  area,
  location,
  lot,
  builtArea,
  architect,
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
      <Link href={`/projetos/${slug}`} className="absolute inset-0 z-10">
        <span className="sr-only">Ver projeto {title}</span>
      </Link>

      <Image
        src={image}
        alt={`${title} — ${category}, ${area}`}
        fill
        sizes={isLarge ? "(max-width: 768px) 100vw, 60vw" : "(max-width: 768px) 100vw, 40vw"}
        className="object-cover transition-all duration-700 ease-out group-hover:scale-105"
      />

      {/* Overlay rosa/warm no hover — inspirado na referência */}
      <div className="absolute inset-0 bg-[#c4956a]/0 group-hover:bg-[#c4956a]/70 transition-all duration-500" />

      {/* Conteúdo do overlay — centralizado com infos do projeto */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 md:px-10 opacity-0 group-hover:opacity-100 transition-all duration-500">
        {/* Título do projeto */}
        <h3 className="font-cormorant font-light text-2xl md:text-3xl lg:text-4xl text-white text-center mb-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          {title}
        </h3>

        {/* Linha separadora */}
        <div className="w-12 h-[1px] bg-white/60 mb-6 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100" />

        {/* Detalhes do projeto */}
        <div className="flex flex-col items-center gap-1 text-center translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
          <span className="font-outfit font-light text-xs md:text-sm tracking-[0.1em] text-white/90">
            {location}
          </span>
          {lot !== "—" && (
            <span className="font-outfit font-light text-xs md:text-sm tracking-[0.1em] text-white/90">
              Lote: {lot}
            </span>
          )}
          <span className="font-outfit font-light text-xs md:text-sm tracking-[0.1em] text-white/90">
            Área Construída: {builtArea}
          </span>
          <span className="font-outfit font-light text-xs md:text-sm tracking-[0.1em] text-white/90">
            Autor: {architect}
          </span>
        </div>
      </div>

      {/* Nome da arquiteta no canto inferior direito — sempre visível no hover */}
      <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
        <span className="font-cormorant font-light italic text-sm md:text-base text-white/80 tracking-wide">
          stephanie macêdo
        </span>
        <span className="block font-outfit font-light text-[10px] md:text-xs text-white/50 tracking-[0.15em] uppercase">
          arquitetura & design
        </span>
      </div>
    </motion.div>
  );
}
