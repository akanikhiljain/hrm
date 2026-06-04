"use client";

import { useRef, type CSSProperties, type ReactNode, type MouseEvent } from "react";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  glowColor?: string;
  style?: CSSProperties;
};

export function TiltCard({
  children,
  className = "",
  glowColor = "rgba(92,39,254,0.18)",
  style,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = ref.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);   // -1 … 1
    const dy = (e.clientY - cy) / (rect.height / 2);  // -1 … 1

    const rotateX = -dy * 12;   // tilt up/down
    const rotateY = dx * 12;    // tilt left/right

    // Move inner glow to follow cursor
    const glowX = ((e.clientX - rect.left) / rect.width) * 100;
    const glowY = ((e.clientY - rect.top) / rect.height) * 100;

    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.04)`;
    card.style.boxShadow = `0 24px 60px rgba(13,10,30,0.15), 0 0 0 1px rgba(92,39,254,0.15)`;
    card.style.setProperty("--glow-x", `${glowX}%`);
    card.style.setProperty("--glow-y", `${glowY}%`);
    card.style.setProperty("--glow-color", glowColor);
  };

  const handleMouseLeave = () => {
    const card = ref.current;
    if (!card) return;
    card.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)";
    card.style.boxShadow = "";
  };

  return (
    <div
      ref={ref}
      className={`tilt-card ${className}`}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
}
