import Link from "next/link";
import Image from "next/image";

const quickLinks = [
  { href: "/", label: "Beranda" },
  { href: "/about", label: "Tentang Kami" },
  { href: "/layanan", label: "Layanan" },
  { href: "/kontak", label: "Kontak" },
];

const platforms = [
  {
    href: "https://app.atmsehat.co.id",
    label: "TEA App — Member Login",
    iconPath: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
  },
  {
    href: "https://dashboard.atm-sehat.com",
    label: "Dashboard Klinik",
    iconPath: "M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7",
  },
  {
    href: "https://atm-sehat.tsi.co.id",
    label: "TEA Web App",
    iconPath: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064",
  },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <Image
                src="https://atmsehat.co.id/wp-content/uploads/2024/09/cropped-1.png"
                alt="ATM Sehat"
                width={36}
                height={36}
                className="rounded-xl object-contain"
              />
              <span className="font-bold text-lg text-white">ATM Sehat</span>
            </Link>
            <p className="text-sm text-slate-400 font-medium leading-relaxed mb-1">Healthy Life for Everyone</p>
            <p className="text-xs text-slate-500 leading-relaxed mb-6">
              PT. Tele Sehat Indonesia<br />
              Tenant Room DISTP UI, Lt. 2<br />
              Gedung ILRC, Kampus UI<br />
              Depok, Jawa Barat, Indonesia
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/atm_sehat/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-pink-600 flex items-center justify-center transition-colors"
                aria-label="Instagram ATM Sehat"
              >
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/TelehealthIndonesia/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-sky-600 flex items-center justify-center transition-colors"
                aria-label="Facebook ATM Sehat"
              >
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a
                href="https://wa.me/6282348371262"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-green-600 flex items-center justify-center transition-colors"
                aria-label="WhatsApp ATM Sehat"
              >
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M10 0C4.48 0 0 4.48 0 10c0 1.77.47 3.44 1.28 4.89L0 20l5.26-1.38C6.68 19.5 8.29 20 10 20c5.52 0 10-4.48 10-10S15.52 0 10 0zm4.94 14.13c-.2.56-.99 1.01-1.63 1.14-.43.09-.97.16-2.81-.6-2.37-.96-3.89-3.33-4-3.49-.11-.16-.94-1.24-.94-2.37 0-1.13.59-1.68.8-1.91.2-.22.44-.28.59-.28h.42c.13 0 .31-.05.49.38.18.42.62 1.51.68 1.62.06.11.09.25.02.39-.08.16-.11.25-.22.38-.11.13-.23.29-.32.39-.11.11-.22.22-.1.44.13.22.58.95 1.25 1.54.86.76 1.58 1 1.8 1.1.22.11.36.09.48-.06.13-.16.56-.65.7-.87.14-.22.3-.19.5-.11.2.08 1.27.6 1.49.7.22.11.37.16.42.25.05.1.05.56-.15 1.11z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigasi */}
          <div>
            <h3 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">Navigasi</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-sky-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Aplikasi & Platform */}
          <div>
            <h3 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">Aplikasi & Platform</h3>
            <ul className="space-y-4">
              {platforms.map((p) => (
                <li key={p.href}>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-slate-800 group-hover:bg-sky-600 flex items-center justify-center transition-colors shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
                        <path d={p.iconPath} />
                      </svg>
                    </div>
                    <span className="text-sm text-slate-400 group-hover:text-sky-400 transition-colors leading-snug">
                      {p.label}
                    </span>
                  </a>
                </li>
              ))}
              <li className="pt-2 border-t border-slate-800">
                <Link
                  href="/layanan"
                  className="text-sm text-sky-500 hover:text-sky-400 transition-colors font-medium"
                >
                  Lihat 8 Layanan Kesehatan →
                </Link>
              </li>
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h3 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">Kontak</h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <svg className="shrink-0 mt-0.5 text-sky-500" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>Tenant Room DISTP UI, Lt. 2, Gedung ILRC, Kampus UI, Depok, Jawa Barat</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="shrink-0 mt-0.5 text-sky-500" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <a href="mailto:contact@tsi.co.id" className="hover:text-sky-400 transition-colors break-all">
                  contact@tsi.co.id
                </a>
              </li>
              <li className="flex items-start gap-3">
                <svg className="shrink-0 mt-0.5 text-sky-500" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.06 1.22 2 2 0 012.06 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                <a href="tel:+6282348371262" className="hover:text-sky-400 transition-colors">
                  +62 823-4837-1262
                </a>
              </li>
              <li className="flex items-start gap-3">
                <svg className="shrink-0 mt-0.5 text-sky-500" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span>
                  Senin–Jumat: 09.00–17.00 WIB
                  <br />
                  <span className="text-slate-500">WhatsApp: 24/7</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Legalitas Perusahaan */}
        <div className="border-t border-slate-800 pt-10 pb-12">
          <h3 className="font-semibold text-white mb-2 text-sm uppercase tracking-wider">Legalitas Perusahaan</h3>
          <p className="text-xs text-slate-500 mb-6 max-w-2xl">
            PT Tele Sehat Indonesia adalah badan usaha yang terdaftar resmi dan memenuhi
            persyaratan legalitas serta perpajakan di Republik Indonesia.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* SK Pendirian — official company establishment certificate from Kemenkomham */}
            <a
              href="https://atm-sehat.com/wp-content/uploads/2024/09/SK-Kemenkumham-PT.-TSI-1.png"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-slate-700 bg-slate-950/40 p-4 hover:border-sky-500 hover:bg-slate-900 transition-all group cursor-pointer"
            >
              <p className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-3 group-hover:text-sky-400 transition-colors">
                SK Pendirian
              </p>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://atm-sehat.com/wp-content/uploads/2024/09/SK-Kemenkumham-PT.-TSI-1.png"
                alt="SK Pendirian PT Tele Sehat Indonesia"
                className="w-full h-32 object-cover rounded-lg mb-2"
                loading="lazy"
              />
              <p className="text-[10px] text-slate-500">Klik untuk lihat dokumen lengkap →</p>
            </a>

            {/* NIB — Nomor Induk Berusaha from OSS (Sistem Registrasi Elektronik) */}
            <a
              href="https://atm-sehat.com/wp-content/uploads/2024/09/UPDATE_NIB-OSS-RBA_PT-TSI_page-0001-1.png"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-slate-700 bg-slate-950/40 p-4 hover:border-emerald-500 hover:bg-slate-900 transition-all group cursor-pointer"
            >
              <p className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-3 group-hover:text-emerald-400 transition-colors">
                NIB
              </p>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://atm-sehat.com/wp-content/uploads/2024/09/UPDATE_NIB-OSS-RBA_PT-TSI_page-0001-1.png"
                alt="NIB (Nomor Induk Berusaha) PT Tele Sehat Indonesia"
                className="w-full h-32 object-cover rounded-lg mb-2"
                loading="lazy"
              />
              <p className="text-[10px] text-slate-500">Terdaftar di sistem OSS →</p>
            </a>

            {/* NPWP — Nomor Pokok Wajib Pajak from Direktorat Jenderal Pajak */}
            <a
              href="https://atm-sehat.com/wp-content/uploads/2024/09/NPWP-PT.-TSI-300x201.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-slate-700 bg-slate-950/40 p-4 hover:border-violet-500 hover:bg-slate-900 transition-all group cursor-pointer"
            >
              <p className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-3 group-hover:text-violet-400 transition-colors">
                NPWP
              </p>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://atm-sehat.com/wp-content/uploads/2024/09/NPWP-PT.-TSI-300x201.jpg"
                alt="NPWP (Nomor Pokok Wajib Pajak) PT Tele Sehat Indonesia"
                className="w-full h-32 object-cover rounded-lg mb-2"
                loading="lazy"
              />
              <p className="text-[10px] text-slate-500">DJP, Kemenkeu RI →</p>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 text-center sm:text-left">
            &copy; 2017–{new Date().getFullYear()} PT. Tele Sehat Indonesia. Terdaftar di Kemenkes RI. Semua hak dilindungi.
          </p>
          <div className="flex gap-6 text-xs text-slate-500">
            <Link href="/kebijakan-privasi" className="hover:text-slate-300 transition-colors">
              Kebijakan Privasi
            </Link>
            <Link href="/syarat-ketentuan" className="hover:text-slate-300 transition-colors">
              Syarat &amp; Ketentuan
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
