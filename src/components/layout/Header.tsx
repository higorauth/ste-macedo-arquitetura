"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Logo } from "@/components/brand/Logo";
import { MobileMenu } from "./MobileMenu";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { NAV_LINKS } from "@/lib/constants";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isAtTop } = useScrollDirection();
  const pathname = usePathname();
  const isHome = pathname === "/" || pathname === "";

  const headerLight = isHome && isAtTop;

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          headerLight
            ? "bg-transparent"
            : "bg-black/20 backdrop-blur-md"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" aria-label="Ir para o início">
              <Logo
                variant="monogram"
                color="light"
                size={40}
              />
            </Link>

            <nav className="hidden lg:flex items-center gap-10">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link font-outfit font-light text-[13px] tracking-[0.15em] uppercase transition-colors duration-300 text-white/90 hover:text-white ${pathname === link.href ? "!text-accent" : ""}`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden flex flex-col items-end justify-center gap-[6px] w-11 h-11"
              aria-label="Abrir menu"
            >
              <span
                className={`block h-[1px] w-8 transition-colors duration-300 ${
                  "bg-white"
                }`}
              />
              <span
                className={`block h-[1px] w-5 transition-colors duration-300 ${
                  "bg-white"
                }`}
              />
              <span
                className={`block h-[1px] w-7 transition-colors duration-300 ${
                  "bg-white"
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
