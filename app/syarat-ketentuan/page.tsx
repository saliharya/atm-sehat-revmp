import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Syarat & Ketentuan",
  description:
    "Syarat dan Ketentuan Penggunaan ATM Sehat menguraikan hak dan kewajiban pengguna dalam menggunakan platform kami.",
  path: "/syarat-ketentuan",
});

function Icon({ path, className = "w-5 h-5" }: { path: string; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={path} />
    </svg>
  );
}

function CheckIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 12l2 2 4-4" /><circle cx="12" cy="12" r="10" />
    </svg>
  );
}

const toc = [
  { id: "penerimaan",     label: "Penerimaan Syarat" },
  { id: "layanan",        label: "Deskripsi Layanan" },
  { id: "eligibilitas",   label: "Eligibilitas Pengguna" },
  { id: "kewajiban",      label: "Kewajiban Pengguna" },
  { id: "batasan-medis",  label: "Batasan Layanan Medis" },
  { id: "hki",            label: "Hak Kekayaan Intelektual" },
  { id: "tanggung-jawab", label: "Batasan Tanggung Jawab" },
  { id: "pembayaran",     label: "Biaya & Pembayaran" },
  { id: "penghentian",    label: "Penghentian Akun" },
  { id: "kontak",         label: "Kontak" },
];

export default function TermsAndConditions() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="hero-gradient pt-20 pb-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-white/50 text-sm mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Beranda</Link>
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg>
            <span className="text-white/80 font-medium">Syarat &amp; Ketentuan</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 bg-white/10 text-white/90 text-xs font-semibold px-3 py-1.5 rounded-full border border-white/20 mb-5">
                <Icon path="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" className="w-3.5 h-3.5 text-sky-300" />
                Efektif sejak 1 Januari 2025
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Syarat &amp; Ketentuan</h1>
              <p className="text-white/65 text-lg leading-relaxed">
                Dokumen ini mengatur hak dan kewajiban Anda sebagai pengguna platform ATM Sehat. Mohon baca dengan seksama sebelum menggunakan layanan kami.
              </p>
            </div>

            <div className="flex gap-6 lg:shrink-0">
              {[
                { label: "Pasal", value: "10" },
                { label: "Menit baca", value: "~5" },
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

          {/* Consent banner */}
          <div className="flex items-start gap-3 bg-sky-50 border border-sky-200 rounded-2xl p-5 mb-8">
            <Icon path="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
            <p className="text-sm text-sky-800 leading-relaxed">
              Dengan mengakses dan menggunakan platform ATM Sehat, Anda menyatakan telah membaca, memahami, dan menyetujui seluruh Syarat &amp; Ketentuan ini.
            </p>
          </div>

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
                  <Link href="/kebijakan-privasi" className="flex items-center gap-2 text-xs text-slate-500 hover:text-sky-600 transition-colors font-medium">
                    <Icon path="M9 5l7 7-7 7" className="w-3.5 h-3.5" />
                    Kebijakan Privasi
                  </Link>
                </div>
              </div>
            </aside>

            {/* Sections */}
            <div className="flex-1 min-w-0 space-y-5">

              {/* 01 */}
              <section id="penerimaan" className="bg-white rounded-2xl border border-slate-200 overflow-hidden scroll-mt-24">
                <div className="flex items-center gap-3 px-7 py-5 border-b border-slate-100 bg-slate-50/50">
                  <div className="w-8 h-8 rounded-lg bg-sky-100 flex items-center justify-center shrink-0">
                    <Icon path="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" className="w-4 h-4 text-sky-600" />
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">01</span>
                    <h2 className="text-base font-bold text-slate-900">Penerimaan Syarat</h2>
                  </div>
                </div>
                <div className="px-7 py-6">
                  <p className="text-slate-600 text-sm leading-relaxed">Dengan mengakses dan menggunakan platform ATM Sehat — termasuk kiosk fisik, aplikasi TEA, dan situs web — Anda menyetujui untuk terikat oleh Syarat dan Ketentuan ini. Jika Anda tidak setuju, mohon hentikan penggunaan layanan kami.</p>
                </div>
              </section>

              {/* 02 */}
              <section id="layanan" className="bg-white rounded-2xl border border-slate-200 overflow-hidden scroll-mt-24">
                <div className="flex items-center gap-3 px-7 py-5 border-b border-slate-100 bg-slate-50/50">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center shrink-0">
                    <Icon path="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">02</span>
                    <h2 className="text-base font-bold text-slate-900">Deskripsi Layanan</h2>
                  </div>
                </div>
                <div className="px-7 py-6">
                  <p className="text-slate-600 text-sm leading-relaxed mb-5">ATM Sehat adalah platform telehealth berbasis IoT yang menyediakan:</p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      { title: "Pemeriksaan Mandiri", desc: "8 parameter kesehatan via kiosk berteknologi IoT" },
                      { title: "Rekam Medis Digital", desc: "Data kesehatan tersimpan aman di TEA App" },
                      { title: "Konsultasi Online", desc: "Terhubung dengan dokter berlisensi via video call" },
                      { title: "HELENA AI", desc: "Analisis dan edukasi kesehatan berbasis AI" },
                    ].map((item) => (
                      <div key={item.title} className="bg-slate-50 border border-slate-100 rounded-xl p-4">
                        <p className="font-semibold text-slate-900 text-sm mb-1">{item.title}</p>
                        <p className="text-xs text-slate-500">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* 03 */}
              <section id="eligibilitas" className="bg-white rounded-2xl border border-slate-200 overflow-hidden scroll-mt-24">
                <div className="flex items-center gap-3 px-7 py-5 border-b border-slate-100 bg-slate-50/50">
                  <div className="w-8 h-8 rounded-lg bg-violet-100 flex items-center justify-center shrink-0">
                    <Icon path="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" className="w-4 h-4 text-violet-600" />
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">03</span>
                    <h2 className="text-base font-bold text-slate-900">Eligibilitas Pengguna</h2>
                  </div>
                </div>
                <div className="px-7 py-6">
                  <ul className="space-y-2.5">
                    {[
                      "Berusia minimal 18 tahun (atau memiliki persetujuan orang tua/wali jika di bawah 18)",
                      "Memiliki kapasitas hukum untuk memasuki perjanjian yang mengikat",
                      "Menyetujui memberikan informasi yang akurat, lengkap, dan terkini",
                      "Tidak pernah diblokir dari platform ATM Sehat sebelumnya",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-slate-600">
                        <CheckIcon className="w-4 h-4 text-violet-500 shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* 04 */}
              <section id="kewajiban" className="bg-white rounded-2xl border border-slate-200 overflow-hidden scroll-mt-24">
                <div className="flex items-center gap-3 px-7 py-5 border-b border-slate-100 bg-slate-50/50">
                  <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center shrink-0">
                    <Icon path="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" className="w-4 h-4 text-amber-600" />
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">04</span>
                    <h2 className="text-base font-bold text-slate-900">Kewajiban Pengguna</h2>
                  </div>
                </div>
                <div className="px-7 py-6">
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">Anda bertanggung jawab atas hal berikut:</p>
                  <div className="space-y-2">
                    {[
                      { ok: true,  text: "Keakuratan informasi kesehatan yang Anda masukkan ke sistem" },
                      { ok: true,  text: "Menjaga kerahasiaan akun dan password Anda" },
                      { ok: true,  text: "Melaporkan akses tidak sah ke akun Anda sesegera mungkin" },
                      { ok: false, text: "Menggunakan platform untuk tujuan ilegal atau merugikan" },
                      { ok: false, text: "Menyebarkan informasi palsu atau menyesatkan" },
                      { ok: false, text: "Mencoba mengakses data pengguna lain tanpa izin" },
                    ].map((item) => (
                      <div key={item.text} className={`flex items-start gap-3 rounded-xl px-4 py-3 text-sm ${item.ok ? "bg-emerald-50 border border-emerald-100 text-emerald-800" : "bg-red-50 border border-red-100 text-red-800"}`}>
                        {item.ok
                          ? <CheckIcon className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          : <Icon path="M6 18L18 6M6 6l12 12" className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                        }
                        <span>{item.ok ? "" : <strong>Dilarang: </strong>}{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* 05 */}
              <section id="batasan-medis" className="bg-white rounded-2xl border border-slate-200 overflow-hidden scroll-mt-24">
                <div className="flex items-center gap-3 px-7 py-5 border-b border-slate-100 bg-rose-50/60">
                  <div className="w-8 h-8 rounded-lg bg-rose-100 flex items-center justify-center shrink-0">
                    <Icon path="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" className="w-4 h-4 text-rose-600" />
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-rose-400 uppercase tracking-widest">05</span>
                    <h2 className="text-base font-bold text-slate-900">Batasan Layanan Medis</h2>
                  </div>
                </div>
                <div className="px-7 py-6 space-y-4">
                  <div className="flex items-start gap-3 bg-rose-50 border border-rose-200 rounded-xl p-4">
                    <Icon path="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                    <p className="text-sm text-rose-800 font-medium leading-relaxed">
                      ATM Sehat adalah alat bantu pemantauan kesehatan, <strong>bukan pengganti diagnosis atau penanganan medis profesional</strong>.
                    </p>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Hasil pemeriksaan di kiosk ATM Sehat bersifat indikatif. Untuk diagnosis, penanganan, atau resep obat, silakan kunjungi dokter atau puskesmas/klinik terdekat.
                  </p>
                </div>
              </section>

              {/* 06 */}
              <section id="hki" className="bg-white rounded-2xl border border-slate-200 overflow-hidden scroll-mt-24">
                <div className="flex items-center gap-3 px-7 py-5 border-b border-slate-100 bg-slate-50/50">
                  <div className="w-8 h-8 rounded-lg bg-sky-100 flex items-center justify-center shrink-0">
                    <Icon path="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" className="w-4 h-4 text-sky-600" />
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">06</span>
                    <h2 className="text-base font-bold text-slate-900">Hak Kekayaan Intelektual</h2>
                  </div>
                </div>
                <div className="px-7 py-6">
                  <p className="text-slate-600 text-sm leading-relaxed">Seluruh konten di platform ATM Sehat — termasuk logo, desain, kode, teks, dan teknologi HELENA AI — merupakan milik PT Tele Sehat Indonesia dan dilindungi oleh hukum kekayaan intelektual Indonesia. Dilarang menyalin, mendistribusikan, atau memodifikasi konten tanpa izin tertulis.</p>
                </div>
              </section>

              {/* 07 */}
              <section id="tanggung-jawab" className="bg-white rounded-2xl border border-slate-200 overflow-hidden scroll-mt-24">
                <div className="flex items-center gap-3 px-7 py-5 border-b border-slate-100 bg-slate-50/50">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center shrink-0">
                    <Icon path="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" className="w-4 h-4 text-slate-500" />
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">07</span>
                    <h2 className="text-base font-bold text-slate-900">Batasan Tanggung Jawab</h2>
                  </div>
                </div>
                <div className="px-7 py-6">
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">ATM Sehat tidak bertanggung jawab atas:</p>
                  <div className="grid sm:grid-cols-2 gap-2.5">
                    {[
                      "Keputusan medis yang diambil berdasarkan hasil pemeriksaan",
                      "Gangguan layanan akibat kondisi di luar kendali kami",
                      "Kehilangan data akibat force majeure",
                      "Akses tidak sah yang disebabkan kelalaian pengguna",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-2.5 bg-slate-50 border border-slate-100 rounded-xl px-4 py-3">
                        <Icon path="M18 12H6" className="w-4 h-4 text-slate-300 shrink-0 mt-0.5" />
                        <p className="text-sm text-slate-600">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* 08 */}
              <section id="pembayaran" className="bg-white rounded-2xl border border-slate-200 overflow-hidden scroll-mt-24">
                <div className="flex items-center gap-3 px-7 py-5 border-b border-slate-100 bg-slate-50/50">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center shrink-0">
                    <Icon path="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">08</span>
                    <h2 className="text-base font-bold text-slate-900">Biaya &amp; Pembayaran</h2>
                  </div>
                </div>
                <div className="px-7 py-6">
                  <p className="text-slate-600 text-sm leading-relaxed">Beberapa layanan ATM Sehat memerlukan biaya mulai dari <strong className="text-slate-800">Rp 5.000</strong>. Dengan melakukan transaksi, Anda menyetujui harga yang ditampilkan. Harga dapat berubah tanpa pemberitahuan sebelumnya. Pembayaran diproses melalui penyedia pembayaran pihak ketiga yang telah bersertifikat.</p>
                </div>
              </section>

              {/* 09 */}
              <section id="penghentian" className="bg-white rounded-2xl border border-slate-200 overflow-hidden scroll-mt-24">
                <div className="flex items-center gap-3 px-7 py-5 border-b border-slate-100 bg-slate-50/50">
                  <div className="w-8 h-8 rounded-lg bg-rose-50 flex items-center justify-center shrink-0">
                    <Icon path="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" className="w-4 h-4 text-rose-500" />
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">09</span>
                    <h2 className="text-base font-bold text-slate-900">Penghentian Akun</h2>
                  </div>
                </div>
                <div className="px-7 py-6">
                  <p className="text-slate-600 text-sm leading-relaxed">Kami berhak menangguhkan atau menghapus akun tanpa pemberitahuan jika Anda melanggar Syarat &amp; Ketentuan ini, melakukan aktivitas ilegal, atau membahayakan keamanan platform. Anda juga dapat menutup akun kapan saja melalui menu pengaturan di TEA App.</p>
                </div>
              </section>

              {/* 10 */}
              <section id="kontak" className="bg-white rounded-2xl border border-slate-200 overflow-hidden scroll-mt-24">
                <div className="flex items-center gap-3 px-7 py-5 border-b border-slate-100 bg-slate-50/50">
                  <div className="w-8 h-8 rounded-lg bg-sky-100 flex items-center justify-center shrink-0">
                    <Icon path="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" className="w-4 h-4 text-sky-600" />
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">10</span>
                    <h2 className="text-base font-bold text-slate-900">Kontak</h2>
                  </div>
                </div>
                <div className="px-7 py-6">
                  <p className="text-slate-600 text-sm leading-relaxed mb-5">Pertanyaan terkait Syarat &amp; Ketentuan ini? Tim kami siap membantu.</p>
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
                <Link href="/kebijakan-privasi" className="inline-flex items-center gap-2 text-sm font-semibold text-sky-600 hover:text-sky-700 transition-colors">
                  Kebijakan Privasi
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
