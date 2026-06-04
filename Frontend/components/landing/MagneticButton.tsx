"use client";

import { useRef, type CSSProperties, type MouseEvent, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  href?: string;
  className?: string;
  style?: CSSProperties;
  /** How much the element moves toward the cursor (0–1). Default: 0.38 */
  strength?: number;
};

/**
 * An <a> wrapper that pulls slightly toward the cursor (magnetic effect).
 * On mouse-leave it springs back with an overshoot easing.
 */
export function MagneticButton({
  children,
  href = "#",
  className = "",
  style,
  strength = 0.38,
}: Props) {
  const ref = useRef<HTMLAnchorElement>(null);

  const onEnter = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transition = "transform 0.15s ease";
  };

  const onMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    el.style.transform = `translate(${dx * strength}px, ${dy * strength}px)`;
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transition = "transform 0.55s cubic-bezier(0.34, 1.56, 0.64, 1)";
    el.style.transform = "translate(0px, 0px)";
  };

  return (
    <a
      ref={ref}
      href={href}
      className={className}
      style={style}
      onMouseEnter={onEnter}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </a>
  );
}
