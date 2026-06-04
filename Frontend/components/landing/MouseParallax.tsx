"use client";

import { useEffect, useRef, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  /**
   * Max pixel offset at screen edge. Positive = moves WITH mouse,
   * negative = moves AGAINST mouse (depth/depth-behind effect).
   */
  depth?: number;
  className?: string;
};

/**
 * Wraps children and smoothly translates them as the mouse moves,
 * creating a parallax depth illusion. Only activates on fine-pointer
 * (mouse) devices; degrades gracefully on touch.
 */
export function MouseParallax({ children, depth = 15, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    let tx = 0, ty = 0;
    let cx = 0, cy = 0;
    let raf: number;

    const onMove = (e: MouseEvent) => {
      // Normalise to -1…+1 then scale by depth
      cx = ((e.clientX / window.innerWidth) - 0.5) * 2 * depth;
      cy = ((e.clientY / window.innerHeight) - 0.5) * 2 * depth;
    };

    const tick = () => {
      // Smooth lerp so the parallax feels silky
      tx += (cx - tx) * 0.06;
      ty += (cy - ty) * 0.06;
      el.style.transform = `translate(${tx}px, ${ty}px)`;
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    window.addEventListener("mousemove", onMove, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
    };
  }, [depth]);

  return (
    <div ref={ref} className={className} style={{ willChange: "transform" }}>
      {children}
    </div>
  );
}
