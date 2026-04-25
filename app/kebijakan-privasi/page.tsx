import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Kebijakan Privasi",
  description:
    "Kebijakan privasi ATM Sehat menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi data pribadi Anda.",
  path: "/kebijakan-privasi",
});

function Icon({ path, className = "w-5 h-5" }: { path: string; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={path} />
    </svg>
  );
}

function CheckIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 12l2 2 4-4" /><circle cx="12" cy="12" r="10" />
    </svg>
  );
}

const toc = [
  { id: "pendahuluan",    label: "Pendahuluan" },
  { id: "data",           label: "Data yang Dikumpulkan" },
  { id: "penggunaan",     label: "Penggunaan Data" },
  { id: "keamanan",       label: "Keamanan Data" },
  { id: "hak-pengguna",   label: "Hak Pengguna" },
  { id: "cookies",        label: "Cookies & Tracking" },
  { id: "perubahan",      label: "Perubahan Kebijakan" },
  { id: "kontak",         label: "Kontak Kami" },
];

export default function PrivacyPolicy() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="hero-gradient pt-20 pb-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-white/50 text-sm mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Beranda</Link>
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg>
            <span className="text-white/80 font-medium">Kebijakan Privasi</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 bg-white/10 text-white/90 text-xs font-semibold px-3 py-1.5 rounded-full border border-white/20 mb-5">
                <Icon path="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" className="w-3.5 h-3.5 text-emerald-400" />
                Efektif sejak 1 Januari 2025
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Kebijakan Privasi</h1>
              <p className="text-white/65 text-lg leading-relaxed">
                PT Tele Sehat Indonesia berkomitmen melindungi data Anda. Dokumen ini menjelaskan apa yang kami kumpulkan dan bagaimana kami menggunakannya.
              </p>
            </div>

            {/* Quick stats */}
            <div className="flex gap-6 lg:shrink-0">
              {[
                { label: "Pasal", value: "8" },
                { label: "Menit baca", value: "~4" },
                { label: "Update", value: "2025" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-2xl font-bold text-white">{s.value}</div>
                  <div className="text-xs text-white/50 mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Wave */}
        <svg viewBox="0 0 1440 56" fill="none" preserveAspectRatio="none" className="w-full h-14 block" aria-hidden="true">
          <path d="M0 56L1440 56L1440 28C1200 56 960 0 720 28C480 56 240 0 0 28L0 56Z" fill="#f8fafc" />
        </svg>
      </section>

      {/* ── Content ── */}
      <div className="bg-slate-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

          {/* Mobile TOC */}
          <div className="lg:hidden mb-8 overflow-x-auto scrollbar-hide">
            <div className="flex gap-2 pb-2">
              {toc.map((item, i) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="flex items-center gap-1.5 whitespace-nowrap bg-white border border-slate-200 hover:border-sky-300 hover:text-sky-600 text-slate-600 text-xs font-medium px-3 py-2 rounded-full transition-colors shrink-0"
                >
                  <span className="w-4 h-4 rounded-full bg-slate-100 text-[9px] font-bold text-slate-500 flex items-center justify-center">{i + 1}</span>
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Desktop: sidebar + content */}
          <div className="flex gap-10 items-start">

            {/* Sidebar */}
            <aside className="hidden lg:block w-64 shrink-0">
              <div className="sticky top-24 bg-white rounded-2xl border border-slate-200 overflow-hidden">
                <div className="px-5 py-4 border-b border-slate-100">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Daftar Isi</p>
                </div>
                <nav className="p-3">
                  {toc.map((item, i) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="flex items-center gap-3 text-sm text-slate-600 hover:text-sky-600 hover:bg-sky-50 rounded-xl px-3 py-2.5 transition-colors group"
                    >
                      <span className="w-6 h-6 rounded-lg bg-slate-100 group-hover:bg-sky-100 text-[10px] font-bold text-slate-400 group-hover:text-sky-600 flex items-center justify-center shrink-0 transition-colors">
                        {i + 1}
                      </span>
                      <span className="leading-snug">{item.label}</span>
                    </a>
                  ))}
                </nav>
                <div className="px-5 py-4 border-t border-slate-100 bg-slate-50">
                  <Link href="/syarat-ketentuan" className="flex items-center gap-2 text-xs text-slate-500 hover:text-sky-600 transition-colors font-medium">
                    <Icon path="M9 5l7 7-7 7" className="w-3.5 h-3.5" />
                    Syarat &amp; Ketentuan
                  </Link>
                </div>
              </div>
            </aside>

            {/* Sections */}
            <div className="flex-1 min-w-0 space-y-5">

              {/* 01 */}
              <section id="pendahuluan" className="bg-white rounded-2xl border border-slate-200 overflow-hidden scroll-mt-24">
                <div className="flex items-center gap-3 px-7 py-5 border-b border-slate-100 bg-slate-50/50">
                  <div className="w-8 h-8 rounded-lg bg-sky-100 flex items-center justify-center shrink-0">
                    <Icon path="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" className="w-4 h-4 text-sky-600" />
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">01</span>
                    <h2 className="text-base font-bold text-slate-900">Pendahuluan</h2>
                  </div>
                </div>
                <div className="px-7 py-6">
                  <p className="text-slate-600 leading-relaxed text-sm">
                    PT Tele Sehat Indonesia ("Kami" atau "ATM Sehat") berkomitmen untuk melindungi privasi Anda. Kebijakan ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda saat menggunakan platform kami — termasuk kiosk ATM Sehat, aplikasi TEA, dan situs web atm-sehat.com.
                  </p>
                  <div className="mt-5 flex items-start gap-3 bg-sky-50 border border-sky-100 rounded-xl p-4">
                    <Icon path="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
                    <p className="text-xs text-sky-700 leading-relaxed">Dengan menggunakan layanan kami, Anda menyetujui pengumpulan dan penggunaan data sesuai kebijakan ini.</p>
                  </div>
                </div>
              </section>

              {/* 02 */}
              <section id="data" className="bg-white rounded-2xl border border-slate-200 overflow-hidden scroll-mt-24">
                <div className="flex items-center gap-3 px-7 py-5 border-b border-slate-100 bg-slate-50/50">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center shrink-0">
                    <Icon path="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">02</span>
                    <h2 className="text-base font-bold text-slate-900">Data yang Dikumpulkan</h2>
                  </div>
                </div>
                <div className="px-7 py-6">
                  <p className="text-slate-600 leading-relaxed text-sm mb-5">Kami mengumpulkan informasi yang Anda berikan secara langsung maupun otomatis saat menggunakan layanan kami.</p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      { label: "Data Kesehatan", desc: "Tekanan darah, gula darah, kolesterol, saturasi oksigen, suhu tubuh", color: "rose" },
                      { label: "Data Identitas", desc: "Nama, email, nomor telepon, tanggal lahir, jenis kelamin", color: "sky" },
                      { label: "Data Lokasi", desc: "Kota dan provinsi untuk menemukan layanan terdekat", color: "violet" },
                      { label: "Data Teknis", desc: "IP address, log aktivitas, metadata perangkat dan sesi", color: "amber" },
                    ].map((item) => (
                      <div key={item.label} className="rounded-xl border border-slate-100 bg-slate-50 p-4">
                        <p className="text-sm font-semibold text-slate-900 mb-1">{item.label}</p>
                        <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* 03 */}
              <section id="penggunaan" className="bg-white rounded-2xl border border-slate-200 overflow-hidden scroll-mt-24">
                <div className="flex items-center gap-3 px-7 py-5 border-b border-slate-100 bg-slate-50/50">
                  <div className="w-8 h-8 rounded-lg bg-violet-100 flex items-center justify-center shrink-0">
                    <Icon path="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" className="w-4 h-4 text-violet-600" />
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">03</span>
                    <h2 className="text-base font-bold text-slate-900">Penggunaan Data</h2>
                  </div>
                </div>
                <div className="px-7 py-6">
                  <ul className="space-y-2.5">
                    {[
                      "Menyediakan dan meningkatkan layanan kesehatan yang Anda minta",
                      "Mengirim hasil pemeriksaan dan notifikasi kesehatan",
                      "Menghubungkan Anda dengan dokter untuk konsultasi lanjutan",
                      "Menganalisis tren kesehatan untuk penelitian anonim",
                      "Memenuhi kewajiban hukum dan regulasi Kemenkes RI",
                      "Mencegah penipuan dan menjaga keamanan platform",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-slate-600">
                        <CheckIcon className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* 04 */}
              <section id="keamanan" className="bg-white rounded-2xl border border-slate-200 overflow-hidden scroll-mt-24">
                <div className="flex items-center gap-3 px-7 py-5 border-b border-slate-100 bg-slate-50/50">
                  <div className="w-8 h-8 rounded-lg bg-sky-100 flex items-center justify-center shrink-0">
                    <Icon path="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" className="w-4 h-4 text-sky-600" />
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">04</span>
                    <h2 className="text-base font-bold text-slate-900">Keamanan Data</h2>
                  </div>
                </div>
                <div className="px-7 py-6">
                  <p className="text-slate-600 leading-relaxed text-sm mb-5">Kami mengimplementasikan keamanan berlapis untuk melindungi data Anda dari akses tidak sah.</p>
                  <div className="grid sm:grid-cols-3 gap-3">
                    {[
                      { title: "Enkripsi SSL/TLS", desc: "Semua transmisi data dienkripsi end-to-end" },
                      { title: "Akses Terbatas", desc: "Hanya personel terotorisasi yang dapat mengakses data medis" },
                      { title: "Audit Berkala", desc: "Audit keamanan rutin sesuai standar ISO 27001" },
                    ].map((item) => (
                      <div key={item.title} className="bg-sky-50 border border-sky-100 rounded-xl p-4">
                        <p className="font-semibold text-slate-900 text-sm mb-1">{item.title}</p>
                        <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* 05 */}
              <section id="hak-pengguna" className="bg-white rounded-2xl border border-slate-200 overflow-hidden scroll-mt-24">
                <div className="flex items-center gap-3 px-7 py-5 border-b border-slate-100 bg-slate-50/50">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center shrink-0">
                    <Icon path="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">05</span>
                    <h2 className="text-base font-bold text-slate-900">Hak Pengguna</h2>
                  </div>
                </div>
                <div className="px-7 py-6">
                  <p className="text-slate-600 text-sm leading-relaxed mb-5">Anda memiliki kendali penuh atas data pribadi Anda. Hubungi kami kapan saja untuk menggunakan hak berikut:</p>
                  <div className="grid sm:grid-cols-2 gap-2.5">
                    {[
                      { right: "Akses Data", desc: "Minta salinan seluruh data yang kami simpan" },
                      { right: "Koreksi", desc: "Perbaiki data yang tidak akurat atau tidak lengkap" },
                      { right: "Penghapusan", desc: "Hapus akun dan seluruh data terkait Anda" },
                      { right: "Pembatasan", desc: "Batasi cara kami memproses data Anda" },
                      { right: "Portabilitas", desc: "Terima data Anda dalam format terstruktur" },
                      { right: "Keberatan", desc: "Tolak penggunaan data untuk tujuan tertentu" },
                    ].map((item) => (
                      <div key={item.right} className="flex items-start gap-3 bg-slate-50 border border-slate-100 rounded-xl px-4 py-3">
                        <CheckIcon className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                        <div>
                          <p className="text-sm font-semibold text-slate-800">{item.right}</p>
                          <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* 06 */}
              <section id="cookies" className="bg-white rounded-2xl border border-slate-200 overflow-hidden scroll-mt-24">
                <div className="flex items-center gap-3 px-7 py-5 border-b border-slate-100 bg-slate-50/50">
                  <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center shrink-0">
                    <Icon path="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" className="w-4 h-4 text-amber-600" />
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">06</span>
                    <h2 className="text-base font-bold text-slate-900">Cookies &amp; Tracking</h2>
                  </div>
                </div>
                <div className="px-7 py-6 space-y-4">
                  <p className="text-slate-600 text-sm leading-relaxed">Kami menggunakan cookies untuk meningkatkan pengalaman Anda. Anda dapat menonaktifkan cookies melalui pengaturan browser, namun beberapa fitur mungkin tidak berfungsi optimal.</p>
                  <div className="flex items-start gap-3 bg-amber-50 border border-amber-100 rounded-xl p-4">
                    <Icon path="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <p className="text-xs text-amber-800">Kami <strong>tidak menjual atau memperdagangkan</strong> data pribadi Anda kepada pihak ketiga untuk tujuan pemasaran.</p>
                  </div>
                </div>
              </section>

              {/* 07 */}
              <section id="perubahan" className="bg-white rounded-2xl border border-slate-200 overflow-hidden scroll-mt-24">
                <div className="flex items-center gap-3 px-7 py-5 border-b border-slate-100 bg-slate-50/50">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center shrink-0">
                    <Icon path="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" className="w-4 h-4 text-slate-600" />
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">07</span>
                    <h2 className="text-base font-bold text-slate-900">Perubahan Kebijakan</h2>
                  </div>
                </div>
                <div className="px-7 py-6">
                  <p className="text-slate-600 text-sm leading-relaxed">Kebijakan ini dapat diperbarui sewaktu-waktu. Perubahan signifikan akan diberitahukan melalui email atau notifikasi di platform minimal <strong className="text-slate-800">7 hari</strong> sebelum berlaku. Tanggal "Efektif sejak" di bagian atas selalu mencerminkan versi terkini.</p>
                </div>
              </section>

              {/* 08 */}
              <section id="kontak" className="bg-white rounded-2xl border border-slate-200 overflow-hidden scroll-mt-24">
                <div className="flex items-center gap-3 px-7 py-5 border-b border-slate-100 bg-slate-50/50">
                  <div className="w-8 h-8 rounded-lg bg-sky-100 flex items-center justify-center shrink-0">
                    <Icon path="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" className="w-4 h-4 text-sky-600" />
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">08</span>
                    <h2 className="text-base font-bold text-slate-900">Kontak Kami</h2>
                  </div>
                </div>
                <div className="px-7 py-6">
                  <p className="text-slate-600 text-sm leading-relaxed mb-5">Ada pertanyaan tentang privasi data Anda? Tim kami siap membantu.</p>
                  <div className="bg-gradient-to-br from-sky-50 to-emerald-50 rounded-xl border border-sky-100 p-5">
                    <p className="font-bold text-slate-900 text-sm mb-4">PT Tele Sehat Indonesia</p>
                    <div className="space-y-2.5">
                      <a href="mailto:contact@tsi.co.id" className="flex items-center gap-3 text-sm text-slate-700 hover:text-sky-600 transition-colors">
                        <Icon path="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" className="w-4 h-4 text-sky-400 shrink-0" />
                        contact@tsi.co.id
                      </a>
                      <a href="tel:+6282348371262" className="flex items-center gap-3 text-sm text-slate-700 hover:text-sky-600 transition-colors">
                        <Icon path="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" className="w-4 h-4 text-sky-400 shrink-0" />
                        +62 823-4837-1262
                      </a>
                      <p className="flex items-start gap-3 text-sm text-slate-500">
                        <Icon path="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                        Tenant Room DISTP UI, Lt. 2, Gedung ILRC, Kampus UI, Depok, Jawa Barat
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Footer nav */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-2">
                <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-slate-700 transition-colors">
                  <Icon path="M10 19l-7-7m0 0l7-7m-7 7h18" className="w-4 h-4" />
                  Kembali ke Beranda
                </Link>
                <Link href="/syarat-ketentuan" className="inline-flex items-center gap-2 text-sm font-semibold text-sky-600 hover:text-sky-700 transition-colors">
                  Syarat &amp; Ketentuan
                  <Icon path="M14 5l7 7m0 0l-7 7m7-7H3" className="w-4 h-4" />
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
