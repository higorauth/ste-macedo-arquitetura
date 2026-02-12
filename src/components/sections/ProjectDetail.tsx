"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryItem {
  src: string;
  label: string;
}

interface ProjectDetailProps {
  title: string;
  category: string;
  location: string;
  lot: string;
  builtArea: string;
  architect: string;
  description: string;
  image: string;
  gallery: GalleryItem[];
}

export function ProjectDetail({
  title,
  category,
  location,
  lot,
  builtArea,
  architect,
  description,
  image,
  gallery,
}: ProjectDetailProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () =>
    setLightboxIndex((prev) =>
      prev !== null ? (prev - 1 + gallery.length) % gallery.length : null
    );
  const nextImage = () =>
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % gallery.length : null
    );

  return (
    <>
      <div className="min-h-screen bg-black">
        {/* Hero do projeto */}
        <div className="relative h-[50vh] md:h-[70vh] overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />

          <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-16 lg:p-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="font-outfit font-light text-xs tracking-[0.2em] uppercase text-white/70 mb-3 block">
                {category}
              </span>
              <h1 className="font-cormorant font-light text-3xl md:text-6xl lg:text-7xl text-white mb-4">
                {title}
              </h1>
              <p className="font-outfit font-light text-sm md:text-base text-white/70 max-w-xl">
                {location}
              </p>
            </motion.div>
          </div>
        </div>

        {/* Informações do projeto */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-24">
          {/* Botão voltar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <Link
              href="/projetos"
              className="inline-flex items-center gap-3 font-outfit font-light text-sm tracking-[0.1em] uppercase text-gray-400 hover:text-white transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Voltar aos projetos
            </Link>
          </motion.div>

          {/* Grid de informações */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Descrição */}
            <div className="lg:col-span-2">
              <h2 className="font-cormorant font-light text-2xl md:text-3xl text-white mb-6">
                Sobre o Projeto
              </h2>
              <p className="font-outfit font-light text-base md:text-lg text-gray-400 leading-relaxed">
                {description}
              </p>
            </div>

            {/* Ficha técnica */}
            <div className="border-t lg:border-t-0 lg:border-l border-white/10 pt-8 lg:pt-0 lg:pl-8">
              <h3 className="font-outfit font-light text-xs tracking-[0.2em] uppercase text-white/50 mb-6">
                Ficha Técnica
              </h3>
              <div className="space-y-4">
                <div>
                  <span className="block font-outfit font-light text-xs tracking-[0.1em] uppercase text-white/40 mb-1">
                    Localização
                  </span>
                  <span className="font-outfit font-light text-sm text-white">
                    {location}
                  </span>
                </div>
                {lot !== "—" && (
                  <div>
                    <span className="block font-outfit font-light text-xs tracking-[0.1em] uppercase text-white/40 mb-1">
                      Lote
                    </span>
                    <span className="font-outfit font-light text-sm text-white">
                      {lot}
                    </span>
                  </div>
                )}
                <div>
                  <span className="block font-outfit font-light text-xs tracking-[0.1em] uppercase text-white/40 mb-1">
                    Área Construída
                  </span>
                  <span className="font-outfit font-light text-sm text-white">
                    {builtArea}
                  </span>
                </div>
                <div>
                  <span className="block font-outfit font-light text-xs tracking-[0.1em] uppercase text-white/40 mb-1">
                    Categoria
                  </span>
                  <span className="font-outfit font-light text-sm text-white">
                    {category}
                  </span>
                </div>
                <div>
                  <span className="block font-outfit font-light text-xs tracking-[0.1em] uppercase text-white/40 mb-1">
                    Autor
                  </span>
                  <span className="font-outfit font-light text-sm text-white">
                    {architect}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Galeria de imagens */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="font-cormorant font-light text-2xl md:text-3xl text-white mb-10">
              Galeria
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {gallery.map((item, index) => (
                <motion.div
                  key={index}
                  className={`relative overflow-hidden cursor-pointer group ${
                    index === 0 ? "md:col-span-2 aspect-[16/9]" : "aspect-[4/3]"
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  onClick={() => openLightbox(index)}
                >
                  <Image
                    src={item.src}
                    alt={item.label}
                    fill
                    sizes={index === 0 ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                    <span className="font-outfit font-light text-sm tracking-[0.1em] text-white">
                      {item.label}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA para contato */}
          <motion.div
            className="text-center mt-20 pt-16 border-t border-white/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="font-cormorant font-light text-2xl md:text-3xl text-white mb-4">
              Gostou deste projeto?
            </h3>
            <p className="font-outfit font-light text-sm text-gray-400 mb-8">
              Entre em contato e transforme seus espaços
            </p>
            <Link
              href="/contato"
              className="inline-block font-outfit font-light text-sm tracking-[0.15em] uppercase border border-white/30 text-white px-8 py-4 hover:bg-white hover:text-black transition-all duration-500"
            >
              Fale Conosco
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <button
              type="button"
              aria-label="Fechar galeria"
              onClick={closeLightbox}
              className="absolute top-4 right-4 md:top-6 md:right-6 w-11 h-11 flex items-center justify-center text-white/60 hover:text-white transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              type="button"
              aria-label="Imagem anterior"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-2 md:left-8 w-11 h-11 flex items-center justify-center text-white/60 hover:text-white transition-colors z-10"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <motion.div
              key={lightboxIndex}
              className="relative w-[90vw] h-[80vh] max-w-6xl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={gallery[lightboxIndex].src}
                alt={gallery[lightboxIndex].label}
                fill
                className="object-contain"
                sizes="90vw"
              />
              <div className="absolute bottom-0 left-0 right-0 text-center pb-4">
                <span className="font-outfit font-light text-sm tracking-[0.1em] text-white/70">
                  {gallery[lightboxIndex].label}
                </span>
                <span className="block font-outfit font-light text-xs text-white/40 mt-1">
                  {lightboxIndex + 1} / {gallery.length}
                </span>
              </div>
            </motion.div>

            <button
              type="button"
              aria-label="Próxima imagem"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-2 md:right-8 w-11 h-11 flex items-center justify-center text-white/60 hover:text-white transition-colors z-10"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
