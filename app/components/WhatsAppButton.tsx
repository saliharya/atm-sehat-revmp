import type { ReactNode } from "react";

export const WA_NUMBER = "6282348371262";
export const WA_DEFAULT_MSG = "Halo%2C+saya+tertarik+dengan+ATM+Sehat";
export const WA_URL = `https://wa.me/${WA_NUMBER}?text=${WA_DEFAULT_MSG}`;

/** Build a WhatsApp URL with a custom pre-filled message */
export function buildWaUrl(message = WA_DEFAULT_MSG) {
  return `https://wa.me/${WA_NUMBER}?text=${message}`;
}

const WhatsAppIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden="true"
    className="shrink-0"
  >
    <path d="M10 0C4.48 0 0 4.48 0 10c0 1.77.47 3.44 1.28 4.89L0 20l5.26-1.38C6.68 19.5 8.29 20 10 20c5.52 0 10-4.48 10-10S15.52 0 10 0zm4.94 14.13c-.2.56-.99 1.01-1.63 1.14-.43.09-.97.16-2.81-.6-2.37-.96-3.89-3.33-4-3.49-.11-.16-.94-1.24-.94-2.37 0-1.13.59-1.68.8-1.91.2-.22.44-.28.59-.28h.42c.13 0 .31-.05.49.38.18.42.62 1.51.68 1.62.06.11.09.25.02.39-.08.16-.11.25-.22.38-.11.13-.23.29-.32.39-.11.11-.22.22-.1.44.13.22.58.95 1.25 1.54.86.76 1.58 1 1.8 1.1.22.11.36.09.48-.06.13-.16.56-.65.7-.87.14-.22.3-.19.5-.11.2.08 1.27.6 1.49.7.22.11.37.16.42.25.05.1.05.56-.15 1.11z" />
  </svg>
);

interface WhatsAppButtonProps {
  children?: ReactNode;
  className?: string;
  /** Custom URL-encoded pre-fill message */
  message?: string;
  variant?: "primary" | "outline" | "ghost";
}

/**
 * Reusable WhatsApp CTA button.
 * Always opens wa.me/6282348371262 in a new tab.
 */
export default function WhatsAppButton({
  children = "Hubungi via WhatsApp",
  className = "",
  message,
  variant = "primary",
}: WhatsAppButtonProps) {
  const href = message ? buildWaUrl(message) : WA_URL;

  const variantClasses: Record<string, string> = {
    primary:
      "bg-green-500 text-white hover:bg-green-600 shadow-sm px-7 py-4",
    outline:
      "border-2 border-green-500 text-green-600 hover:bg-green-50 px-7 py-4",
    ghost: "text-green-600 hover:text-green-700 hover:bg-green-50 px-4 py-2.5",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-colors text-base ${className} ${variantClasses[variant]}`}
    >
      <WhatsAppIcon />
      {children}
    </a>
  );
}
