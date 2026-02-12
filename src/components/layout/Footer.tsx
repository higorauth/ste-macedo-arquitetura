"use client";

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Instagram, Facebook } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { CONTACT_INFO } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/animations";

export function Footer() {
  const pathname = usePathname();
  const isHome = pathname === "/" || pathname === "/ste-macedo-arquitetura" || pathname === "/ste-macedo-arquitetura/";

  return (
    <footer className="relative bg-black pt-20 pb-8">
      <div className="absolute -top-24 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-black pointer-events-none" />

      <motion.div
        className="max-w-7xl mx-auto px-6 lg:px-8"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {isHome ? (
          <>
            <motion.div className="flex flex-col items-center mb-16" variants={fadeUp}>
              <Logo variant="full" color="light" size={56} />
            </motion.div>

            <motion.div
              className="text-center mb-12 max-w-xl mx-auto"
              variants={fadeUp}
            >
              <p className="font-cormorant font-light text-lg md:text-xl text-gray-300 leading-relaxed">
                Projetos que refletem sua identidade, desde a concepção à execução!
              </p>
              <p className="font-cormorant font-light text-sm md:text-base text-gray-500 mt-3 tracking-wide">
                Residencial | Comercial | Gerenciamento de obras
              </p>
            </motion.div>

            <motion.div
              className="flex items-center justify-center gap-6 mb-12"
              variants={fadeUp}
            >
              <a
                href={CONTACT_INFO.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white hover:-translate-y-0.5 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={CONTACT_INFO.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white hover:-translate-y-0.5 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </motion.div>

            <motion.div variants={fadeUp}>
              <div className="border-t border-gray-800 pt-8 flex items-center justify-center">
                <span className="font-outfit font-light text-xs text-gray-600">
                  © 2026 Stephanie Macêdo Arquitetura e Design. Todos os direitos reservados.
                </span>
              </div>
            </motion.div>
          </>
        ) : (
          <>
            <motion.div className="flex flex-col items-center gap-4 mb-8" variants={fadeUp}>
              <Logo variant="monogram" color="light" size={56} />
              <span className="font-cormorant font-light text-base text-gray-400 tracking-[0.2em] uppercase">
                Stephanie Macêdo
              </span>
            </motion.div>

            <motion.div
              className="flex items-center justify-center gap-6 mb-12"
              variants={fadeUp}
            >
              <a
                href={CONTACT_INFO.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white hover:-translate-y-0.5 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={CONTACT_INFO.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white hover:-translate-y-0.5 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </motion.div>

            <motion.div variants={fadeUp}>
              <div className="border-t border-gray-800 pt-8 flex items-center justify-center">
                <span className="font-outfit font-light text-xs text-gray-600">
                  © 2026 Stephanie Macêdo Arquitetura e Design. Todos os direitos reservados.
                </span>
              </div>
            </motion.div>
          </>
        )}
      </motion.div>
    </footer>
  );
}
