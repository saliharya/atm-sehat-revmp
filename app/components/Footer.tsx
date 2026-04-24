import Link from "next/link";

const services = [
  "Cek Tekanan Darah",
  "Cek Gula Darah",
  "Cek Kolesterol",
  "Cek Asam Urat",
  "Cek Suhu Tubuh",
];

const quickLinks = [
  { href: "/", label: "Beranda" },
  { href: "/about", label: "Tentang Kami" },
  { href: "/layanan", label: "Layanan" },
  { href: "/kontak", label: "Kontak" },
];

const externalLinks = [
  { href: "https://app.atmsehat.co.id", label: "Member Login" },
  { href: "https://dashboard.atm-sehat.com", label: "Dashboard Klinik" },
  { href: "https://atm-sehat.tsi.co.id", label: "TEA Web App (iOS)" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-500 to-emerald-500 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path
                    d="M10 2a8 8 0 100 16A8 8 0 0010 2zm0 3a1 1 0 011 1v3h3a1 1 0 010 2h-3v3a1 1 0 01-2 0v-3H6a1 1 0 010-2h3V6a1 1 0 011-1z"
                    fill="white"
                  />
                </svg>
              </div>
              <span className="font-bold text-lg text-white">ATM Sehat</span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mb-2">
              Healthy Life for Everyone
            </p>
            <p className="text-xs text-slate-500 leading-relaxed mb-5">
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
                aria-label="Instagram"
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
                aria-label="Facebook"
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
                aria-label="WhatsApp"
              >
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M10 0C4.48 0 0 4.48 0 10c0 1.77.47 3.44 1.28 4.89L0 20l5.26-1.38C6.68 19.5 8.29 20 10 20c5.52 0 10-4.48 10-10S15.52 0 10 0zm4.94 14.13c-.2.56-.99 1.01-1.63 1.14-.43.09-.97.16-2.81-.6-2.37-.96-3.89-3.33-4-3.49-.11-.16-.94-1.24-.94-2.37 0-1.13.59-1.68.8-1.91.2-.22.44-.28.59-.28h.42c.13 0 .31-.05.49.38.18.42.62 1.51.68 1.62.06.11.09.25.02.39-.08.16-.11.25-.22.38-.11.13-.23.29-.32.39-.11.11-.22.22-.1.44.13.22.58.95 1.25 1.54.86.76 1.58 1 1.8 1.1.22.11.36.09.48-.06.13-.16.56-.65.7-.87.14-.22.3-.19.5-.11.2.08 1.27.6 1.49.7.22.11.37.16.42.25.05.1.05.56-.15 1.11z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">Menu</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-sky-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-slate-800">
                <p className="text-xs text-slate-500 uppercase tracking-wider mb-2 mt-1">Tautan</p>
              </li>
              {externalLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-slate-400 hover:text-sky-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">Layanan</h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <Link href="/layanan" className="text-sm text-slate-400 hover:text-sky-400 transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/layanan" className="text-sm text-sky-500 hover:text-sky-400 transition-colors font-medium">
                  Lihat semua layanan →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
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
                <a href="mailto:info@atm-sehat.com" className="hover:text-sky-400 transition-colors">
                  info@atm-sehat.com
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
                <span>Senin–Jumat: 09.00–17.00 WIB<br /><span className="text-slate-500">WhatsApp: 24/7</span></span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            &copy; 2017–{new Date().getFullYear()} PT. Tele Sehat Indonesia. Terdaftar di Kemenkes RI. Semua hak dilindungi.
          </p>
          <div className="flex gap-6 text-xs text-slate-500">
            <Link href="/kontak" className="hover:text-slate-300 transition-colors">
              Kebijakan Privasi
            </Link>
            <Link href="/kontak" className="hover:text-slate-300 transition-colors">
              Syarat &amp; Ketentuan
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
