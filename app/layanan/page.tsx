import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Layanan",
  description:
    "Temukan semua layanan ATM Sehat: cek tekanan darah, gula darah, kolesterol, asam urat, suhu tubuh, saturasi oksigen, konsultasi dokter online, dan kesehatan anak. Mulai dari Rp 5.000.",
};

const services = [
  {
    id: "tekanan-darah",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
    title: "Pemeriksaan Tekanan Darah",
    tagline: "Cegah Hipertensi, Jaga Jantung Anda",
    desc: "Tekanan darah tinggi (hipertensi) seringkali disebut 'silent killer' karena jarang menimbulkan gejala hingga komplikasi serius terjadi. Pemantauan rutin adalah kunci pencegahan.",
    details: [
      "Pengukuran tekanan darah sistolik dan diastolik",
      "Deteksi dini hipertensi dan hipotensi",
      "Hasil instan dan tersimpan otomatis di aplikasi",
      "Riwayat pengukuran dapat dipantau kapan saja",
      "Rekomendasi gaya hidup dari HELENA AI",
    ],
    why: "70% penderita hipertensi di Indonesia tidak menyadari kondisinya hingga terlambat.",
    color: "sky",
    price: "Mulai Rp 5.000",
  },
  {
    id: "gula-darah",
    icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
    title: "Pemeriksaan Gula Darah",
    tagline: "Deteksi Dini Diabetes, Hidup Lebih Sehat",
    desc: "Indonesia adalah negara dengan jumlah penderita diabetes terbanyak ke-5 di dunia. Sebagian besar kasus bisa dicegah dengan deteksi dini dan perubahan gaya hidup.",
    details: [
      "Pemeriksaan kadar glukosa darah sewaktu dan puasa",
      "Indikator risiko diabetes tipe 1 dan tipe 2",
      "Analisis tren gula darah dari waktu ke waktu",
      "Panduan diet dan aktivitas dari AI",
      "Notifikasi otomatis jika kadar abnormal",
    ],
    why: "Indonesia memiliki 19,5 juta penderita diabetes — dan jutaan belum terdiagnosis.",
    color: "emerald",
    price: "Mulai Rp 15.000",
  },
  {
    id: "kolesterol",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    title: "Pemeriksaan Kolesterol",
    tagline: "Jaga Kesehatan Jantung & Pembuluh Darah",
    desc: "Kolesterol tinggi adalah faktor risiko utama penyakit jantung koroner dan stroke. Pemeriksaan rutin memungkinkan intervensi dini sebelum komplikasi serius terjadi.",
    details: [
      "Pengukuran kolesterol total, LDL, dan HDL",
      "Penilaian risiko kardiovaskular",
      "Perbandingan dengan nilai normal berdasarkan usia",
      "Rekomendasi diet dan olahraga personal",
      "Laporan kesehatan jantung komprehensif",
    ],
    why: "Penyakit jantung adalah penyebab kematian nomor 1 di Indonesia.",
    color: "violet",
    price: "Mulai Rp 20.000",
  },
  {
    id: "asam-urat",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    title: "Pemeriksaan Asam Urat",
    tagline: "Atasi Nyeri Sendi Sejak Dini",
    desc: "Kadar asam urat yang tinggi (hiperurisemia) menyebabkan gout — kondisi yang sangat menyakitkan. Deteksi dini memungkinkan penanganan sebelum kondisi bertambah parah.",
    details: [
      "Pengukuran kadar asam urat dalam darah",
      "Deteksi risiko gout dan batu ginjal",
      "Analisis pola makan dan rekomendasi diet",
      "Pemantauan kadar asam urat berkala",
      "Edukasi pengelolaan gout dari HELENA AI",
    ],
    why: "Prevalensi gout di Indonesia terus meningkat, terutama di usia produktif.",
    color: "amber",
    price: "Mulai Rp 20.000",
  },
  {
    id: "suhu-tubuh",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    title: "Pemeriksaan Suhu Tubuh",
    tagline: "Deteksi Infeksi & Kondisi Demam",
    desc: "Suhu tubuh adalah indikator vital kondisi kesehatan. Pengukuran yang akurat dan konsisten membantu deteksi dini infeksi, peradangan, dan berbagai kondisi medis lainnya.",
    details: [
      "Pengukuran suhu tubuh non-invasif presisi tinggi",
      "Deteksi demam, hipotermia, dan kondisi abnormal",
      "Pencatatan riwayat suhu tubuh otomatis",
      "Ideal untuk pemantauan pasca sakit",
      "Notifikasi jika suhu di luar batas normal",
    ],
    why: "Deteksi suhu sejak dini dapat mencegah komplikasi penyakit infeksi serius.",
    color: "rose",
    price: "Mulai Rp 5.000",
  },
  {
    id: "saturasi-oksigen",
    icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
    title: "Pemeriksaan Saturasi Oksigen",
    tagline: "Pantau Kesehatan Pernapasan Anda",
    desc: "Saturasi oksigen (SpO2) mengukur seberapa efisien darah membawa oksigen ke seluruh tubuh. Indikator penting untuk kesehatan paru-paru, jantung, dan kondisi pernapasan.",
    details: [
      "Pengukuran SpO2 (saturasi oksigen darah)",
      "Pemantauan kondisi PPOK, asma, dan COVID-19",
      "Detak jantung real-time bersamaan",
      "Peringatan dini jika SpO2 di bawah ambang normal",
      "Riwayat pemantauan oksigen tersimpan di aplikasi",
    ],
    why: "SpO2 di bawah 95% mengindikasikan kondisi yang membutuhkan perhatian medis segera.",
    color: "cyan",
    price: "Mulai Rp 10.000",
  },
  {
    id: "konsultasi-dokter",
    icon: "M15 10l4.553-2.069A1 1 0 0121 8.847v6.306a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z",
    title: "Konsultasi Dokter Online",
    tagline: "Dokter Spesialis di Ujung Jari Anda",
    desc: "Konsultasikan hasil pemeriksaan Anda langsung dengan dokter berpengalaman melalui video call berteknologi tinggi. Dapatkan diagnosis, resep, dan saran medis dari mana saja.",
    details: [
      "Video call dengan dokter umum & spesialis",
      "Data hasil pemeriksaan langsung tersedia bagi dokter",
      "Rekam medis digital yang tersimpan aman",
      "Rujukan ke faskes jika diperlukan",
      "Tersedia 7 hari, dari pagi hingga malam",
    ],
    why: "Jarak bukan lagi hambatan untuk mendapat layanan medis profesional.",
    color: "sky",
    price: "Sesuai layanan",
  },
  {
    id: "kesehatan-anak",
    icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
    title: "Kesehatan Anak & Stunting",
    tagline: "Tumbuh Kembang Optimal untuk Generasi Emas",
    desc: "Layanan khusus pemantauan tumbuh kembang anak, deteksi risiko stunting, dan konsultasi gizi anak. Mendukung program pemerintah dalam menurunkan angka stunting nasional.",
    details: [
      "Pengukuran berat dan tinggi badan anak",
      "Analisis pertumbuhan berdasarkan kurva WHO",
      "Deteksi risiko stunting dan malnutrisi",
      "Konsultasi gizi dan tumbuh kembang",
      "Pemantauan berkala dengan grafik perkembangan",
    ],
    why: "21,6% balita Indonesia mengalami stunting. Deteksi dini adalah kunci penanganannya.",
    color: "emerald",
    price: "Mulai Rp 10.000",
  },
];

const colorMap: Record<string, { icon: string; badge: string; border: string }> = {
  sky: {
    icon: "bg-sky-50 text-sky-600",
    badge: "bg-sky-50 text-sky-700 border-sky-200",
    border: "border-sky-100",
  },
  emerald: {
    icon: "bg-emerald-50 text-emerald-600",
    badge: "bg-emerald-50 text-emerald-700 border-emerald-200",
    border: "border-emerald-100",
  },
  violet: {
    icon: "bg-violet-50 text-violet-600",
    badge: "bg-violet-50 text-violet-700 border-violet-200",
    border: "border-violet-100",
  },
  amber: {
    icon: "bg-amber-50 text-amber-600",
    badge: "bg-amber-50 text-amber-700 border-amber-200",
    border: "border-amber-100",
  },
  rose: {
    icon: "bg-rose-50 text-rose-600",
    badge: "bg-rose-50 text-rose-700 border-rose-200",
    border: "border-rose-100",
  },
  cyan: {
    icon: "bg-cyan-50 text-cyan-600",
    badge: "bg-cyan-50 text-cyan-700 border-cyan-200",
    border: "border-cyan-100",
  },
};

export default function LayananPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 hero-gradient overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-sky-300 font-semibold text-sm uppercase tracking-wider mb-4">
            Layanan Kami
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            8 Layanan Kesehatan
            <br />
            <span className="text-sky-300">dalam Satu Stasiun</span>
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            Dari pemeriksaan vital dasar hingga konsultasi dokter spesialis — semua tersedia
            dengan harga terjangkau, mudah diakses, dan hasil yang akurat.
          </p>
          <div className="inline-flex items-center gap-2 bg-white/10 text-white text-sm font-medium px-5 py-2.5 rounded-full border border-white/20">
            <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" />
            </svg>
            Hasil instan · Mulai dari Rp 5.000 · Tersedia di 9 provinsi
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0">
          <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" className="w-full h-12" aria-hidden="true">
            <path d="M0 60L1440 60L1440 30C1200 60 960 0 720 30C480 60 240 0 0 30L0 60Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Services list */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {services.map((s, i) => {
              const c = colorMap[s.color] ?? colorMap.sky;
              const isEven = i % 2 === 0;
              return (
                <div
                  key={s.id}
                  id={s.id}
                  className={`bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden scroll-mt-24`}
                >
                  <div className={`grid grid-cols-1 lg:grid-cols-2 ${isEven ? "" : "lg:grid-flow-col-dense"}`}>
                    {/* Content */}
                    <div className={`p-8 lg:p-12 ${isEven ? "" : "lg:col-start-2"}`}>
                      <div className="flex items-start gap-4 mb-6">
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${c.icon}`}>
                          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d={s.icon} />
                          </svg>
                        </div>
                        <div>
                          <h2 className="text-xl font-bold text-slate-900">{s.title}</h2>
                          <p className="text-slate-500 text-sm mt-0.5">{s.tagline}</p>
                        </div>
                      </div>

                      <p className="text-slate-600 leading-relaxed mb-6">{s.desc}</p>

                      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6 text-sm">
                        <span className="font-semibold text-amber-800">Tahukah Anda? </span>
                        <span className="text-amber-700">{s.why}</span>
                      </div>

                      <ul className="space-y-3 mb-8">
                        {s.details.map((d) => (
                          <li key={d} className="flex items-start gap-3 text-sm text-slate-700">
                            <svg className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M9 12l2 2 4-4" /><circle cx="12" cy="12" r="10" />
                            </svg>
                            {d}
                          </li>
                        ))}
                      </ul>

                      <div className="flex items-center justify-between flex-wrap gap-4">
                        <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold border ${c.badge}`}>
                          {s.price}
                        </span>
                        <Link
                          href="/kontak"
                          className="inline-flex items-center gap-2 text-sky-600 font-semibold text-sm hover:text-sky-700 transition-colors"
                        >
                          Cari stasiun terdekat
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>

                    {/* Visual panel */}
                    <div
                      className={`relative min-h-52 lg:min-h-full flex items-center justify-center p-12 bg-gradient-to-br ${
                        s.color === "sky" ? "from-sky-50 to-sky-100" :
                        s.color === "emerald" ? "from-emerald-50 to-emerald-100" :
                        s.color === "violet" ? "from-violet-50 to-violet-100" :
                        s.color === "amber" ? "from-amber-50 to-amber-100" :
                        s.color === "rose" ? "from-rose-50 to-rose-100" :
                        "from-cyan-50 to-cyan-100"
                      } ${isEven ? "" : "lg:col-start-1 lg:row-start-1"}`}
                    >
                      <div className={`w-32 h-32 rounded-3xl flex items-center justify-center ${c.icon} opacity-40`}>
                        <svg className="w-20 h-20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d={s.icon} />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Package summary */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Paket Pemeriksaan Komprehensif
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Hemat lebih banyak dengan memeriksa beberapa parameter sekaligus.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Paket Dasar",
                price: "Rp 25.000",
                includes: ["Tekanan Darah", "Suhu Tubuh", "Saturasi Oksigen"],
                color: "from-sky-600 to-sky-700",
                popular: false,
              },
              {
                name: "Paket Standar",
                price: "Rp 50.000",
                includes: ["Tekanan Darah", "Gula Darah", "Kolesterol", "Asam Urat", "Suhu Tubuh", "Saturasi Oksigen"],
                color: "from-emerald-600 to-teal-600",
                popular: true,
              },
              {
                name: "Paket Keluarga",
                price: "Hubungi Kami",
                includes: ["Semua layanan standar", "Kesehatan Anak & Stunting", "Konsultasi Dokter", "Laporan Kesehatan Keluarga"],
                color: "from-violet-600 to-indigo-600",
                popular: false,
              },
            ].map((pkg) => (
              <div
                key={pkg.name}
                className={`relative bg-white rounded-2xl border overflow-hidden card-hover ${
                  pkg.popular ? "border-emerald-300 shadow-xl shadow-emerald-100" : "border-slate-100 shadow-sm"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 inset-x-0 text-center">
                    <span className="inline-block bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider px-6 py-1.5 rounded-b-xl">
                      Paling Populer
                    </span>
                  </div>
                )}
                <div className={`h-2 bg-gradient-to-r ${pkg.color}`} />
                <div className="p-8 pt-6">
                  <h3 className="font-bold text-slate-900 text-lg mb-1">{pkg.name}</h3>
                  <div className="text-3xl font-bold text-slate-900 mb-6">
                    {pkg.price}
                    {pkg.price !== "Hubungi Kami" && <span className="text-base font-normal text-slate-500 ml-1">/ kunjungan</span>}
                  </div>
                  <ul className="space-y-3 mb-8">
                    {pkg.includes.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-slate-700">
                        <svg className="w-5 h-5 text-emerald-500 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M9 12l2 2 4-4" /><circle cx="12" cy="12" r="10" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/kontak"
                    className={`block text-center font-semibold py-3 px-6 rounded-xl transition-colors text-sm ${
                      pkg.popular
                        ? "bg-emerald-600 text-white hover:bg-emerald-700"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                  >
                    Pilih Paket
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-slate-400 text-sm mt-8">
            * Harga dapat bervariasi tergantung lokasi. Hubungi kami untuk informasi harga terkini.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 hero-gradient">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Siap Mulai Cek Kesehatan?
          </h2>
          <p className="text-white/80 mb-8 text-lg">
            Temukan stasiun ATM Sehat terdekat atau konsultasikan kebutuhan kesehatan
            Anda bersama tim kami.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontak"
              className="inline-flex items-center justify-center bg-white text-sky-700 font-semibold px-8 py-4 rounded-xl hover:bg-sky-50 transition-colors shadow-lg"
            >
              Temukan Stasiun Terdekat
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center bg-white/10 text-white font-semibold px-8 py-4 rounded-xl border border-white/30 hover:bg-white/20 transition-colors"
            >
              Pelajari Teknologi Kami
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
