"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const dotWrapRef = useRef<HTMLDivElement>(null);
  const ringWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only on fine-pointer (mouse) devices — skip touch / stylus
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const dotWrap = dotWrapRef.current;
    const ringWrap = ringWrapRef.current;
    if (!dotWrap || !ringWrap) return;

    const dot = dotWrap.firstElementChild as HTMLElement;
    const ring = ringWrap.firstElementChild as HTMLElement;

    let mx = -300, my = -300;
    let rx = -300, ry = -300;
    let raf: number;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };

    // RAF loop: dot follows instantly, ring lags with lerp
    const tick = () => {
      dotWrap.style.transform = `translate(${mx}px, ${my}px)`;
      rx += (mx - rx) * 0.1;
      ry += (my - ry) * 0.1;
      ringWrap.style.transform = `translate(${rx}px, ${ry}px)`;
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    window.addEventListener("mousemove", onMove, { passive: true });

    // Expand ring & shrink dot when hovering interactive elements
    const onEnter = () => {
      dot.classList.add("cursor-dot--hover");
      ring.classList.add("cursor-ring--hover");
    };
    const onLeave = () => {
      dot.classList.remove("cursor-dot--hover");
      ring.classList.remove("cursor-ring--hover");
    };

    // Bind after a short delay so the DOM is fully hydrated
    const timer = setTimeout(() => {
      document.querySelectorAll("a, button, [data-hover]").forEach((el) => {
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
    }, 300);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timer);
      window.removeEventListener("mousemove", onMove);
      document.querySelectorAll("a, button, [data-hover]").forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Dot — follows mouse exactly */}
      <div
        ref={dotWrapRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          top: "-4px",
          left: "-4px",
          pointerEvents: "none",
          zIndex: 99999,
          willChange: "transform",
        }}
      >
        <div className="cursor-dot" />
      </div>

      {/* Ring — lags behind with spring feel */}
      <div
        ref={ringWrapRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          top: "-18px",
          left: "-18px",
          pointerEvents: "none",
          zIndex: 99998,
          willChange: "transform",
        }}
      >
        <div className="cursor-ring" />
      </div>
    </>
  );
}
