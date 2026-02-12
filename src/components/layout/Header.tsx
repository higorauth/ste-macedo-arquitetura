"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Logo } from "@/components/brand/Logo";
import { MobileMenu } from "./MobileMenu";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { NAV_LINKS } from "@/lib/constants";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isAtTop } = useScrollDirection();

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isAtTop
            ? "bg-transparent"
            : "bg-white/80 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.05)]"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <a href="#inicio" aria-label="Ir para o início">
              <Logo
                variant="monogram"
                color={isAtTop ? "light" : "dark"}
                size={40}
              />
            </a>

            <nav className="hidden lg:flex items-center gap-10">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`nav-link font-outfit font-light text-[13px] tracking-[0.15em] uppercase transition-colors duration-300 ${
                    isAtTop
                      ? "text-white/90 hover:text-white"
                      : "text-gray-600 hover:text-black"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden flex flex-col items-end gap-[6px] w-8"
              aria-label="Abrir menu"
            >
              <span
                className={`block h-[1px] w-8 transition-colors duration-300 ${
                  isAtTop ? "bg-white" : "bg-black"
                }`}
              />
              <span
                className={`block h-[1px] w-5 transition-colors duration-300 ${
                  isAtTop ? "bg-white" : "bg-black"
                }`}
              />
              <span
                className={`block h-[1px] w-7 transition-colors duration-300 ${
                  isAtTop ? "bg-white" : "bg-black"
                }`}
              />
            </button>
          </div>
        </div>
      </motion.header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
