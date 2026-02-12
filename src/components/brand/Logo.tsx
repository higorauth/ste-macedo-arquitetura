"use client";

interface LogoProps {
  variant?: "monogram" | "full";
  color?: "light" | "dark";
  size?: number;
}

const LOGO_SRC = "/ste-macedo-arquitetura/images/logo.png";

export function Logo({ variant = "monogram", color = "dark", size = 48 }: LogoProps) {
  const textColor = color === "dark" ? "text-black" : "text-white";
  const isLight = color === "light";

  const logoImg = (
    <img
      src={LOGO_SRC}
      alt="SM - Stephanie Macêdo"
      className="object-contain"
      style={{
        width: size,
        height: "auto",
        filter: isLight ? "invert(1)" : "none",
      }}
    />
  );

  if (variant === "monogram") {
    return logoImg;
  }

  return (
    <div className="flex flex-col items-center gap-3">
      {logoImg}
      <div className="flex flex-col items-center gap-1">
        <span
          className={`font-outfit font-light text-sm tracking-[0.3em] uppercase ${textColor}`}
        >
          Stephanie Macêdo
        </span>
        <span
          className={`font-outfit font-extralight text-xs tracking-[0.2em] uppercase ${textColor} opacity-70`}
        >
          Arquitetura e Design
        </span>
      </div>
    </div>
  );
}
