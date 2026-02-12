"use client";

interface LogoProps {
  variant?: "monogram" | "full";
  color?: "light" | "dark";
  size?: number;
}

function SMMonogram({ size = 48, color = "dark" }: { size?: number; color?: "light" | "dark" }) {
  const fill = color === "dark" ? "#0A0A0A" : "#FAFAFA";

  return (
    <svg
      width={size}
      height={size * 0.75}
      viewBox="0 0 120 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="SM - Stephanie Macêdo"
    >
      <path
        d={`
          M 8 72
          C 4 72, 2 68, 4 64
          Q 6 52, 22 46
          Q 36 40, 38 32
          Q 40 24, 32 20
          Q 24 16, 16 22
          Q 12 25, 10 30
          C 8 34, 4 33, 5 29
          Q 8 18, 18 13
          Q 30 8, 42 14
          Q 52 20, 48 34
          Q 44 46, 26 52
          Q 14 56, 12 64
          Q 10 68, 16 70
          Q 24 72, 34 66
          Q 38 63, 40 58
          C 42 54, 46 55, 44 59
          Q 40 68, 30 74
          Q 20 80, 10 74
          Z
        `}
        fill={fill}
      />
      <path
        d={`
          M 50 70
          C 48 72, 44 70, 46 66
          L 56 22
          C 57 18, 58 16, 60 16
          Q 62 16, 64 20
          L 78 52
          L 92 20
          Q 94 16, 96 16
          C 98 16, 99 18, 100 22
          L 110 66
          C 112 70, 108 72, 106 70
          L 98 34
          L 84 62
          Q 82 66, 80 66
          Q 78 66, 76 62
          L 62 34
          L 54 66
          C 53 69, 51 71, 50 70
          Z
        `}
        fill={fill}
      />
    </svg>
  );
}

export function Logo({ variant = "monogram", color = "dark", size = 48 }: LogoProps) {
  const textColor = color === "dark" ? "text-black" : "text-white";

  if (variant === "monogram") {
    return <SMMonogram size={size} color={color} />;
  }

  return (
    <div className="flex flex-col items-center gap-3">
      <SMMonogram size={size} color={color} />
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
