"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { WA_URL } from "./WhatsAppButton";

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/about", label: "Tentang Kami" },
  { href: "/layanan", label: "Layanan" },
  { href: "/kontak", label: "Kontak" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const headerSolid = scrolled || isOpen;

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          headerSolid
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://atmsehat.co.id/wp-content/uploads/2024/09/cropped-1.png"
                alt="ATM Sehat"
                width={36}
                height={36}
                className="rounded-xl object-contain"
              />
              <span
                className={`font-bold text-lg tracking-tight transition-colors ${
                  headerSolid ? "text-slate-900" : "text-white"
                }`}
              >
                ATM Sehat
              </span>
            </Link>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? "text-sky-600 bg-sky-50"
                      : scrolled
                      ? "text-slate-600 hover:text-sky-600 hover:bg-slate-50"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex">
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-green-600 transition-colors shadow-sm"
              >
                Hubungi Kami
              </a>
            </div>

            {/* Mobile hamburger — animates to × */}
            <button
              className={`md:hidden w-10 h-10 flex items-center justify-center rounded-lg transition-colors ${
                headerSolid
                  ? "text-slate-700 hover:bg-slate-100"
                  : "text-white hover:bg-white/10"
              }`}
              onClick={() => setIsOpen((v) => !v)}
              aria-label={isOpen ? "Tutup menu" : "Buka menu"}
              aria-expanded={isOpen}
            >
              <div className="w-5 flex flex-col gap-[5px]">
                <motion.span
                  className="block h-0.5 bg-current rounded-full origin-center"
                  animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                />
                <motion.span
                  className="block h-0.5 bg-current rounded-full"
                  animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="block h-0.5 bg-current rounded-full origin-center"
                  animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                />
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile full-screen overlay with brand gradient */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden fixed top-16 inset-x-0 bottom-0 z-40 hero-gradient overflow-y-auto"
          >
            <div className="flex flex-col h-full px-6 pt-6 pb-10">
              {/* Nav links */}
              <nav className="flex flex-col flex-1" aria-label="Menu navigasi mobile">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07, duration: 0.25 }}
                  >
                    <Link
                      href={link.href}
                      className={`flex items-center justify-between px-5 py-4 rounded-2xl text-lg font-semibold transition-colors ${
                        pathname === link.href
                          ? "bg-white/15 text-white"
                          : "text-white/70 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      {link.label}
                      {pathname === link.href && (
                        <span className="w-2 h-2 rounded-full bg-sky-400" aria-hidden="true" />
                      )}
                    </Link>
                    {i < navLinks.length - 1 && (
                      <div className="mx-5 h-px bg-white/10" aria-hidden="true" />
                    )}
                  </motion.div>
                ))}
              </nav>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.25 }}
              >
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full bg-green-500 hover:bg-green-400 text-white px-6 py-4 rounded-2xl text-base font-semibold transition-colors"
                >
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M10 0C4.48 0 0 4.48 0 10c0 1.77.47 3.44 1.28 4.89L0 20l5.26-1.38C6.68 19.5 8.29 20 10 20c5.52 0 10-4.48 10-10S15.52 0 10 0zm4.94 14.13c-.2.56-.99 1.01-1.63 1.14-.43.09-.97.16-2.81-.6-2.37-.96-3.89-3.33-4-3.49-.11-.16-.94-1.24-.94-2.37 0-1.13.59-1.68.8-1.91.2-.22.44-.28.59-.28h.42c.13 0 .31-.05.49.38.18.42.62 1.51.68 1.62.06.11.09.25.02.39-.08.16-.11.25-.22.38-.11.13-.23.29-.32.39-.11.11-.22.22-.1.44.13.22.58.95 1.25 1.54.86.76 1.58 1 1.8 1.1.22.11.36.09.48-.06.13-.16.56-.65.7-.87.14-.22.3-.19.5-.11.2.08 1.27.6 1.49.7.22.11.37.16.42.25.05.1.05.56-.15 1.11z" />
                  </svg>
                  Hubungi via WhatsApp
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
