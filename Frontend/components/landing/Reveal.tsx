"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealVariant = "up" | "left" | "right" | "scale" | "fade";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: RevealVariant;
  /** IntersectionObserver threshold (0–1) */
  threshold?: number;
};

const hiddenStyles: Record<RevealVariant, React.CSSProperties> = {
  up:    { opacity: 0, transform: "translateY(32px)", filter: "blur(6px)" },
  left:  { opacity: 0, transform: "translateX(-32px)", filter: "blur(5px)" },
  right: { opacity: 0, transform: "translateX(32px)",  filter: "blur(5px)" },
  scale: { opacity: 0, transform: "scale(0.92)",        filter: "blur(6px)" },
  fade:  { opacity: 0, transform: "none",               filter: "blur(4px)" },
};

const visibleStyles: React.CSSProperties = {
  opacity: 1,
  transform: "none",
  filter: "blur(0px)",
};

export function Reveal({
  children,
  className = "",
  delay = 0,
  variant = "up",
  threshold = 0.12,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={`reveal-base ${className}`}
      style={{
        ...(visible ? visibleStyles : hiddenStyles[variant]),
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}ms, filter 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

