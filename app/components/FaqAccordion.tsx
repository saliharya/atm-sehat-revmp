"use client";

import { useState, type ReactNode } from "react";

export type FaqItem = {
  q: string;
  /** Plain string or JSX for rich answers (e.g. links, lists) */
  a: ReactNode;
};

interface FaqAccordionProps {
  items: FaqItem[];
  className?: string;
}

/**
 * Reusable collapsible FAQ accordion.
 * Only one item open at a time.
 */
export default function FaqAccordion({ items, className = "" }: FaqAccordionProps) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className={`space-y-3 ${className}`}>
      {items.map((item, i) => (
        <div key={i} className="border border-slate-200 rounded-2xl overflow-hidden">
          <button
            type="button"
            className="w-full flex items-center justify-between px-6 py-5 text-left text-sm font-semibold text-slate-900 hover:bg-slate-50 transition-colors"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span className="pr-8">{item.q}</span>
            <svg
              className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                open === i ? "rotate-180" : ""
              }`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>

          {open === i && (
            <div className="px-6 pb-5 pt-4 text-sm text-slate-600 leading-relaxed border-t border-slate-100">
              {item.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
