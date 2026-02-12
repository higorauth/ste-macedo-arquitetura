"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Instagram, Facebook } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { NAV_LINKS, CONTACT_INFO } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/animations";

export function Footer() {
  return (
    <footer className="relative bg-black pt-20 pb-8">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-accent" />

      <motion.div
        className="max-w-7xl mx-auto px-6 lg:px-8"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="flex flex-col items-center mb-16" variants={fadeUp}>
          <Logo variant="full" color="light" size={56} />
        </motion.div>

        <motion.nav
          className="flex flex-wrap items-center justify-center gap-8 mb-12"
          variants={fadeUp}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link font-outfit font-light text-[13px] tracking-[0.15em] uppercase text-gray-400 hover:text-white transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </motion.nav>

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
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
              <span className="font-outfit font-light text-xs text-gray-600">
                © 2026 Stephanie Macêdo Arquitetura e Design. Todos os direitos reservados.
              </span>
              <span className="font-outfit font-light text-xs text-gray-700">
                CNPJ: {CONTACT_INFO.cnpj}
              </span>
            </div>
            <span className="font-outfit font-light text-[11px] text-gray-700 tracking-wide">
              Desenvolvido por AuthLike
            </span>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
