"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/data/landing";
import { LogoIcon } from "./Icons";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 border-b border-clay/10 bg-cream/90 backdrop-blur-2xl transition-all duration-300 ${
        scrolled ? "navbar-scrolled shadow-md" : "shadow-sm shadow-clay/5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2.5 transition-transform hover:scale-[1.03]" onClick={closeMenu}>
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-forest shadow-sm shadow-forest/30">
              <LogoIcon />
            </span>
            <span className="font-serif text-xl font-bold tracking-tight text-ink">
              FlowHR
            </span>
          </a>

          <div className="hidden items-center gap-7 text-sm font-medium text-ink-soft md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-dot relative transition-colors duration-200 hover:text-clay"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href="#login"
              className="px-3 py-2 text-sm font-semibold text-ink-soft transition-colors hover:text-clay"
            >
              Login
            </a>
            <a href="#register" className="btn-primary shimmer rounded-xl px-5 py-2.5 text-sm">
              Register Free →
            </a>
          </div>

          <button
            type="button"
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-lg transition-colors hover:bg-clay-pale md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={`block h-0.5 w-5 rounded-full bg-ink transition-all duration-300 ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 rounded-full bg-clay transition-all duration-300 ${
                open ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100"
              }`}
            />
            <span
              className={`block h-0.5 rounded-full bg-ink transition-all duration-300 ${
                open ? "w-5 -translate-y-2 -rotate-45" : "w-3.5"
              }`}
            />
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t border-clay/10 backdrop-blur-xl transition-[max-height,opacity] duration-300 md:hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-1 px-5 py-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-xl px-4 py-3 text-sm font-medium text-ink-soft transition-all hover:bg-clay-pale hover:text-clay"
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
          <div className="mt-1 flex flex-col gap-2 border-t border-clay/10 pt-2">
            <a
              href="#login"
              className="rounded-xl border border-ink/15 px-4 py-2.5 text-center text-sm font-semibold text-ink-soft transition-all hover:border-clay/30 hover:text-clay"
              onClick={closeMenu}
            >
              Login
            </a>
            <a
              href="#register"
              className="btn-primary rounded-xl px-4 py-2.5 text-center text-sm"
              onClick={closeMenu}
            >
              Register Free →
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
