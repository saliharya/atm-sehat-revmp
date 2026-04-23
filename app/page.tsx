import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ATM Sehat – Cek Kesehatan Semudah Cek Saldo",
  description:
    "Layanan cek kesehatan lengkap berbasis IoT: tekanan darah, gula darah, kolesterol, dan konsultasi dokter online. Tersedia di 9 provinsi Indonesia.",
};

/* ─── Icon helpers ─── */
function Icon({
  path,
  className = "w-6 h-6",
}: {
  path: string;
  className?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={path} />
    </svg>
  );
}

/* ─── Data ─── */
const stats = [
  { value: "145+", label: "Unit Terpasang", icon: "M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" },
  { value: "9", label: "Provinsi", icon: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0zM12 10h.01" },
  { value: "19", label: "Mitra Institusi", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" },
  { value: "6.500+", label: "Pengguna Aktif", icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" },
];

const services = [
  {
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
    title: "Tekanan Darah",
    desc: "Pemantauan tekanan darah real-time dengan teknologi sensor presisi tinggi.",
    color: "sky",
  },
  {
    icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
    title: "Gula Darah",
    desc: "Deteksi dini diabetes dengan pemeriksaan kadar glukosa darah yang akurat.",
    color: "emerald",
  },
  {
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    title: "Kolesterol",
    desc: "Pantau kadar kolesterol total untuk mencegah risiko penyakit jantung.",
    color: "violet",
  },
  {
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    title: "Asam Urat",
    desc: "Pemeriksaan asam urat untuk deteksi dini penyakit gout dan komplikasinya.",
    color: "amber",
  },
  {
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    title: "Suhu Tubuh",
    desc: "Pengukuran suhu tubuh presisi untuk deteksi infeksi dan kondisi demam.",
    color: "rose",
  },
  {
    icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
    title: "Saturasi Oksigen",
    desc: "Pemantauan kadar oksigen darah (SpO2) untuk kesehatan pernapasan.",
    color: "cyan",
  },
  {
    icon: "M15 10l4.553-2.069A1 1 0 0121 8.847v6.306a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z",
    title: "Konsultasi Dokter",
    desc: "Konsultasi langsung dengan dokter berpengalaman melalui video call.",
    color: "sky",
  },
  {
    icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
    title: "Kesehatan Anak",
    desc: "Pemeriksaan dan konsultasi stunting untuk tumbuh kembang optimal anak.",
    color: "emerald",
  },
];

const colorMap: Record<string, string> = {
  sky: "bg-sky-50 text-sky-600 group-hover:bg-sky-100",
  emerald: "bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100",
  violet: "bg-violet-50 text-violet-600 group-hover:bg-violet-100",
  amber: "bg-amber-50 text-amber-600 group-hover:bg-amber-100",
  rose: "bg-rose-50 text-rose-600 group-hover:bg-rose-100",
  cyan: "bg-cyan-50 text-cyan-600 group-hover:bg-cyan-100",
};

const steps = [
  {
    number: "01",
    title: "Temukan Stasiun Terdekat",
    desc: "Cari ATM Sehat di sekitar Anda — tersedia di klinik, kantor, pusat perbelanjaan, stasiun, dan area publik lainnya.",
    icon: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z",
  },
  {
    number: "02",
    title: "Pilih Layanan Kesehatan",
    desc: "Sentuh layar interaktif dan pilih pemeriksaan yang Anda butuhkan. Mudah, cepat, tanpa antrian.",
    icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
  },
  {
    number: "03",
    title: "Dapatkan Hasil Instan",
    desc: "Hasil pemeriksaan otomatis tersinkronisasi ke aplikasi ponsel Anda via IOMT — tersimpan aman dan dapat dipantau kapan saja.",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
  },
  {
    number: "04",
    title: "Konsultasi dengan Dokter",
    desc: "Jika diperlukan, lanjutkan dengan sesi konsultasi online bersama dokter spesialis kami — dari mana saja.",
    icon: "M15 10l4.553-2.069A1 1 0 0121 8.847v6.306a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z",
  },
];

const technologies = [
  {
    badge: "AI Kesehatan",
    title: "HELENA AI",
    subtitle: "Health Education, Literation, Empowerment Nursing Avatar",
    desc: "Sistem AI cerdas yang menganalisis data kesehatan Anda secara real-time, memberikan edukasi kesehatan personal, dan membantu memahami hasil pemeriksaan dengan bahasa yang mudah dimengerti.",
    features: ["Analisis data kesehatan otomatis", "Edukasi kesehatan personal", "Rekomendasi gaya hidup sehat", "Komunikasi dua arah via chat & video"],
    gradient: "from-sky-600 to-cyan-500",
    bgGradient: "from-sky-50 to-cyan-50",
  },
  {
    badge: "Teknologi IoT",
    title: "IOMT Integration",
    subtitle: "Internet of Medical Things",
    desc: "Platform IoT medis yang menghubungkan perangkat kesehatan ATM Sehat dengan aplikasi mobile secara real-time tanpa input manual. Data kesehatan Anda tersimpan aman dan dapat diakses kapan saja.",
    features: ["Sinkronisasi data real-time", "Rekam medis digital aman", "Koneksi ke seluruh perangkat health", "Laporan kesehatan harian otomatis"],
    gradient: "from-emerald-600 to-teal-500",
    bgGradient: "from-emerald-50 to-teal-50",
  },
];

const awards = [
  {
    year: "2018",
    title: "Juara 1",
    event: "Tanoto Awards",
    org: "Tanoto Foundation",
    icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
    color: "amber",
  },
  {
    year: "2019",
    title: "ASEAN ICT Award",
    event: "ASEAN ICT Awards",
    org: "ASEAN, Laos",
    icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064",
    color: "sky",
  },
  {
    year: "2019",
    title: "Juara 2",
    event: "IdenTIK",
    org: "Kementerian Kominfo RI",
    icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
    color: "violet",
  },
  {
    year: "2019",
    title: "Didanai",
    event: "GK Plug and Play",
    org: "Plug and Play Indonesia",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    color: "emerald",
  },
];

const awardColorMap: Record<string, string> = {
  amber: "bg-amber-50 border-amber-200 text-amber-700",
  sky: "bg-sky-50 border-sky-200 text-sky-700",
  violet: "bg-violet-50 border-violet-200 text-violet-700",
  emerald: "bg-emerald-50 border-emerald-200 text-emerald-700",
};

const problems = [
  {
    pct: "70%",
    stat: "Belum Pernah Tes Darah",
    desc: "Mayoritas masyarakat Indonesia tidak pernah melakukan pemeriksaan darah dasar.",
    source: "HonestDocs Survey",
  },
  {
    pct: "51%",
    stat: "Terkendala Waktu",
    desc: "Lebih dari separuh responden menyebut keterbatasan waktu sebagai hambatan utama cek kesehatan.",
    source: "HonestDocs Survey",
  },
  {
    pct: "24%",
    stat: "Takut & Tidak Nyaman",
    desc: "Seperempat responden enggan cek kesehatan karena rasa takut dan ketidaknyamanan.",
    source: "HonestDocs Survey",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center hero-gradient overflow-hidden pt-16">
        {/* Background decorative circles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-white/5 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-white/3 blur-[100px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-4xl">
            {/* Award badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 text-white/90 text-sm font-medium px-4 py-2 rounded-full border border-white/20 mb-8 animate-fade-in">
              <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Peraih ASEAN ICT Awards 2019 · Tanoto Awards 2018
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in-up">
              Cek Kesehatan
              <br />
              <span className="text-sky-300">Semudah Cek Saldo</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-10 max-w-2xl animate-fade-in-up delay-100">
              ATM Sehat menghadirkan layanan cek kesehatan lengkap dan konsultasi dokter online
              langsung ke komunitas Anda — tanpa antrian, tanpa janji temu, tanpa biaya mahal.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-in-up delay-200">
              <Link
                href="/kontak"
                className="inline-flex items-center justify-center gap-2 bg-white text-sky-700 font-semibold px-7 py-4 rounded-xl hover:bg-sky-50 transition-colors shadow-lg shadow-black/20 text-base"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0zM12 10h.01" />
                </svg>
                Temukan Stasiun Terdekat
              </Link>
              <Link
                href="/layanan"
                className="inline-flex items-center justify-center gap-2 bg-white/10 text-white font-semibold px-7 py-4 rounded-xl border border-white/30 hover:bg-white/20 transition-colors text-base"
              >
                Lihat Semua Layanan
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 animate-fade-in-up delay-300">
              {stats.map((s) => (
                <div key={s.label} className="text-center sm:text-left">
                  <div className="text-3xl font-bold text-white mb-1">{s.value}</div>
                  <div className="text-sm text-white/60">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 inset-x-0">
          <svg viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none" className="w-full h-16 lg:h-20" aria-hidden="true">
            <path d="M0 80L1440 80L1440 40C1200 80 960 0 720 40C480 80 240 0 0 40L0 80Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ── Problem Section ── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-sky-600 font-semibold text-sm uppercase tracking-wider mb-3">
              Tantangan Kesehatan Indonesia
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Mengapa Masyarakat Enggan Cek Kesehatan?
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
              Survei nasional mengungkap fakta mengejutkan tentang akses layanan kesehatan di Indonesia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {problems.map((p) => (
              <div
                key={p.stat}
                className="relative bg-slate-50 rounded-2xl p-8 border border-slate-100 overflow-hidden"
              >
                <div className="absolute top-0 right-0 text-8xl font-bold text-slate-100 leading-none select-none pointer-events-none" aria-hidden="true">
                  {p.pct.replace("%", "")}
                </div>
                <div className="relative">
                  <div className="text-4xl font-bold text-sky-600 mb-2">{p.pct}</div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">{p.stat}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
                  <p className="text-xs text-slate-400 mt-4 font-medium">Sumber: {p.source}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Solution bridge */}
          <div className="bg-gradient-to-br from-sky-600 to-emerald-600 rounded-3xl p-8 lg:p-12 text-white text-center">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              ATM Sehat Hadir sebagai Solusi
            </h3>
            <p className="text-white/85 max-w-2xl mx-auto text-lg leading-relaxed mb-8">
              Kami menghapus semua hambatan tersebut dengan menyediakan stasiun kesehatan pintar yang
              mudah diakses, terjangkau, dan memberikan hasil instan — mulai dari Rp 5.000 saja.
            </p>
            <Link
              href="/layanan"
              className="inline-flex items-center gap-2 bg-white text-sky-700 font-semibold px-7 py-3.5 rounded-xl hover:bg-sky-50 transition-colors"
            >
              Lihat Layanan Lengkap
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-emerald-600 font-semibold text-sm uppercase tracking-wider mb-3">
              Layanan Lengkap
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              8 Layanan Kesehatan dalam Satu Stasiun
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
              Dari pemeriksaan dasar hingga konsultasi dokter spesialis — semua tersedia di ATM Sehat.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s) => (
              <div
                key={s.title}
                className="group bg-white rounded-2xl p-6 border border-slate-100 card-hover cursor-default"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors ${colorMap[s.color] ?? colorMap.sky}`}
                >
                  <Icon path={s.icon} className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2 text-base">{s.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/layanan"
              className="inline-flex items-center gap-2 text-sky-600 font-semibold hover:text-sky-700 transition-colors"
            >
              Pelajari selengkapnya
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-sky-600 font-semibold text-sm uppercase tracking-wider mb-3">
              Cara Kerja
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Cek Kesehatan dalam 4 Langkah Mudah
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
              Proses yang sederhana, cepat, dan nyaman — tanpa perlu antrian atau janji dokter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={step.number} className="relative">
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-px bg-slate-200 z-0 -translate-y-1/2" style={{ left: "calc(50% + 40px)", width: "calc(100% - 80px)" }} aria-hidden="true" />
                )}
                <div className="relative bg-slate-50 rounded-2xl p-7 border border-slate-100 h-full z-10">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-sky-600 flex items-center justify-center shrink-0">
                      <Icon path={step.icon} className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-4xl font-bold text-slate-100 leading-none mt-1">{step.number}</span>
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-3 text-base">{step.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Technology ── */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-violet-600 font-semibold text-sm uppercase tracking-wider mb-3">
              Teknologi Terdepan
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Didukung Inovasi Kelas Dunia
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
              Perpaduan AI, IoT, dan telemedicine untuk pengalaman kesehatan yang komprehensif.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {technologies.map((tech) => (
              <div
                key={tech.title}
                className={`rounded-3xl p-8 lg:p-10 bg-gradient-to-br ${tech.bgGradient} border border-white`}
              >
                <span
                  className={`inline-block text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full bg-gradient-to-r ${tech.gradient} text-white mb-6`}
                >
                  {tech.badge}
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mb-1">{tech.title}</h3>
                <p className="text-sm text-slate-500 mb-4 font-medium">{tech.subtitle}</p>
                <p className="text-slate-600 leading-relaxed mb-7">{tech.desc}</p>
                <ul className="space-y-3">
                  {tech.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-slate-700">
                      <svg className="w-5 h-5 text-emerald-500 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M9 12l2 2 4-4" />
                        <circle cx="12" cy="12" r="10" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Satellite connectivity note */}
          <div className="mt-8 bg-white rounded-2xl p-6 border border-slate-100 flex items-start gap-5">
            <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center shrink-0">
              <svg className="w-6 h-6 text-slate-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-1">Jangkauan Satellite Internet</h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                ATM Sehat mendukung konektivitas satelit internet, memungkinkan layanan kesehatan menjangkau
                daerah terpencil dan pelosok Indonesia yang belum memiliki infrastruktur internet terrestrial.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Awards ── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-amber-600 font-semibold text-sm uppercase tracking-wider mb-3">
              Penghargaan & Pengakuan
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Diakui Secara Nasional & Internasional
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
              Inovasi ATM Sehat telah mendapat pengakuan dari berbagai lembaga bergengsi.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {awards.map((a) => (
              <div
                key={a.event}
                className={`rounded-2xl p-6 border ${awardColorMap[a.color]} text-center card-hover`}
              >
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mx-auto mb-5 shadow-sm">
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d={a.icon} />
                  </svg>
                </div>
                <div className="text-xs font-bold uppercase tracking-wider opacity-70 mb-2">{a.year}</div>
                <div className="text-xl font-bold mb-1">{a.title}</div>
                <div className="font-medium text-sm mb-1">{a.event}</div>
                <div className="text-xs opacity-70">{a.org}</div>
              </div>
            ))}
          </div>

          {/* Incubation */}
          <div className="mt-10 text-center">
            <p className="text-slate-400 text-sm mb-4">Juga didukung oleh</p>
            <div className="flex flex-wrap items-center justify-center gap-6">
              {["DIRBT UI Incubation Program", "GK Plug and Play Indonesia", "Kementerian Kominfo RI"].map((p) => (
                <span key={p} className="inline-flex items-center gap-2 text-slate-600 font-medium text-sm bg-slate-50 px-4 py-2 rounded-full border border-slate-200">
                  <svg className="w-4 h-4 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M9 12l2 2 4-4" />
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 lg:py-28 hero-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-5">
            Mulai Perjalanan Kesehatan Anda Hari Ini
          </h2>
          <p className="text-white/80 text-lg mb-10 leading-relaxed">
            Bergabunglah dengan 6.500+ pengguna yang telah merasakan kemudahan pemantauan
            kesehatan bersama ATM Sehat. Tersedia di 9 provinsi dan terus berkembang.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontak"
              className="inline-flex items-center justify-center gap-2 bg-white text-sky-700 font-semibold px-8 py-4 rounded-xl hover:bg-sky-50 transition-colors shadow-lg shadow-black/20 text-base"
            >
              Hubungi Kami
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 bg-white/10 text-white font-semibold px-8 py-4 rounded-xl border border-white/30 hover:bg-white/20 transition-colors text-base"
            >
              Tentang ATM Sehat
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
