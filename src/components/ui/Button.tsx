"use client";

import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "outline-light" | "outline-dark" | "solid-dark" | "solid-light";
  href?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  className?: string;
}

export function Button({
  children,
  variant = "outline-light",
  href,
  type = "button",
  onClick,
  className = "",
}: ButtonProps) {
  const variants = {
    "outline-light":
      "border border-white/80 text-white hover:bg-white hover:text-black",
    "outline-dark":
      "border border-black text-black hover:bg-black hover:text-white",
    "solid-dark":
      "bg-black text-white hover:bg-gray-800",
    "solid-light":
      "bg-white text-black hover:bg-gray-100",
  };

  const baseClasses = `
    inline-flex items-center justify-center gap-2
    px-8 py-4
    font-outfit font-light text-sm tracking-[0.15em] uppercase
    transition-all duration-400 ease-out
    ${variants[variant]}
    ${className}
  `;

  if (href) {
    return (
      <motion.a
        href={href}
        className={baseClasses}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={baseClasses}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
}
