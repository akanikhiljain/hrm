"use client";

import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-clay/10">
      {items.map((item, index) => (
        <div key={item.question} className="py-5">
          <button
            type="button"
            className="flex w-full items-center justify-between gap-4 text-left"
            onClick={() => setOpen(open === index ? null : index)}
            aria-expanded={open === index}
          >
            <span className="text-base font-semibold text-ink">{item.question}</span>
            <span
              className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-clay-pale text-clay transition-transform duration-300 ${
                open === index ? "rotate-45" : ""
              }`}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path
                  d="M7 1v12M1 7h12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              open === index ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <p className="pt-3 text-sm leading-relaxed text-ink-soft">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
