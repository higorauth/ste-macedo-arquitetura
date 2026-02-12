"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/lib/constants";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-11 h-11 flex items-center justify-center"
            aria-label="Fechar menu"
          >
            <div className="relative w-6 h-6">
              <span className="absolute top-1/2 left-0 w-full h-[1px] bg-white rotate-45" />
              <span className="absolute top-1/2 left-0 w-full h-[1px] bg-white -rotate-45" />
            </div>
          </button>

          <nav className="flex flex-col items-center gap-6 md:gap-8">
            {NAV_LINKS.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.08, duration: 0.5 }}
              >
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="font-cormorant font-light text-3xl md:text-5xl text-white hover:text-accent transition-colors duration-300"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          <motion.div
            className="absolute bottom-10 flex flex-col items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <span className="font-outfit font-light text-xs tracking-[0.3em] uppercase text-gray-500">
              Stephanie Macêdo
            </span>
            <span className="font-outfit font-extralight text-[10px] tracking-[0.2em] uppercase text-gray-600">
              Arquitetura e Design
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
