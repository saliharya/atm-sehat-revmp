import type { Metadata } from "next";
import Link from "next/link";
import WhatsAppButton, { WA_URL } from "./components/WhatsAppButton";
import { AnimateIn, StaggerGrid, StaggerItem } from "./components/AnimateIn";

export const metadata: Metadata = {
  title: "ATM Sehat – Kiosk Kesehatan Digital IoT | Cek Kesehatan Mudah & Terjangkau",
  description:
    "ATM Sehat adalah kiosk kesehatan digital terdepan di Indonesia. Cek tekanan darah, gula darah, kolesterol, asam urat dalam 1 stasiun. Mulai dari Rp 5.000. Telah beroperasi di 9 provinsi. Konsultasi dokter online tersedia.",
};

/* ─── Shared icon helper ─── */
function Icon({ path, className = "w-6 h-6" }: { path: string; className?: string }) {
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

/* ─── Reusable section badge ─── */
function SectionBadge({ children, color = "sky" }: { children: string; color?: string }) {
  const colors: Record<string, string> = {
    sky: "text-sky-600",
    emerald: "text-emerald-600",
    violet: "text-violet-600",
    amber: "text-amber-600",
    teal: "text-teal-600",
  };
  return (
    <span className={`inline-block font-semibold text-sm uppercase tracking-wider mb-3 ${colors[color] ?? colors.sky}`}>
      {children}
    </span>
  );
}

/* ─── Data ─── */
const stats = [
  { value: "145+", label: "Unit Terpasang" },
  { value: "6.500+", label: "Pengguna Aktif" },
  { value: "9", label: "Provinsi" },
  { value: "Kemenkes RI", label: "Bermitra Resmi" },
];

const services = [
  { icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z", title: "Tekanan Darah", desc: "Pemantauan tekanan darah real-time. Deteksi hipertensi sejak dini.", brand: "Omron — AKL 20501220368", color: "sky" },
  { icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z", title: "Gula Darah", desc: "Deteksi dini diabetes dengan pemeriksaan kadar glukosa akurat.", brand: "Andesfit", color: "emerald" },
  { icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z", title: "Kolesterol", desc: "Pantau kadar kolesterol untuk mencegah risiko penyakit jantung.", brand: "Strip Test Klinis", color: "violet" },
  { icon: "M13 10V3L4 14h7v7l9-11h-7z", title: "Asam Urat", desc: "Pemeriksaan asam urat untuk deteksi dini penyakit gout.", brand: "Strip Test Klinis", color: "amber" },
  { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", title: "Suhu Tubuh", desc: "Pengukuran suhu presisi untuk deteksi infeksi dan kondisi demam.", brand: "Infrared — AKL 20901028159", color: "rose" },
  { icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z", title: "Saturasi Oksigen", desc: "Pemantauan kadar SpO2 untuk kesehatan pernapasan optimal.", brand: "Pulse Oximeter — AKL 20502121110", color: "cyan" },
  { icon: "M15 10l4.553-2.069A1 1 0 0121 8.847v6.306a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z", title: "Konsultasi Dokter", desc: "Konsultasi langsung dengan dokter melalui video call.", brand: "Telekonsultasi Digital", color: "sky" },
  { icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z", title: "Kesehatan Anak & Stunting", desc: "Pemantauan tumbuh kembang anak dan deteksi stunting dini.", brand: "FR.03.04/IVA/01588/2023", color: "emerald" },
];

const colorMap: Record<string, string> = {
  sky: "bg-sky-50 text-sky-600 group-hover:bg-sky-100",
  emerald: "bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100",
  violet: "bg-violet-50 text-violet-600 group-hover:bg-violet-100",
  amber: "bg-amber-50 text-amber-600 group-hover:bg-amber-100",
  rose: "bg-rose-50 text-rose-600 group-hover:bg-rose-100",
  cyan: "bg-cyan-50 text-cyan-600 group-hover:bg-cyan-100",
};

const productVariants = [
  { src: "https://atmsehat.co.id/wp-content/uploads/2024/09/2_1-1024x1024.png", label: "Unit Standar" },
  { src: "https://atmsehat.co.id/wp-content/uploads/2024/09/3-1024x1024.png", label: "Unit Compact" },
  { src: "https://atmsehat.co.id/wp-content/uploads/2024/09/6-1024x1024.png", label: "Unit Korporat" },
  { src: "https://atmsehat.co.id/wp-content/uploads/2024/09/5_1-1024x1024.png", label: "Unit Posyandu" },
  { src: "https://atmsehat.co.id/wp-content/uploads/2024/09/4-1024x1024.png", label: "Unit Apotek" },
  { src: "https://atmsehat.co.id/wp-content/uploads/2024/09/7-1024x1024.png", label: "Unit Premium" },
  { src: "https://atmsehat.co.id/wp-content/uploads/2024/09/phone-204x300.png", label: "TEA App" },
];

const useCases = [
  { title: "Klinik & Puskesmas", desc: "Kurangi antrian, tingkatkan kapasitas tanpa tambah staf medis.", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4", color: "sky" },
  { title: "Pabrik & Industri", desc: "Pantau kesehatan karyawan langsung di lokasi kerja.", icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z", color: "emerald" },
  { title: "Apotek & Retail", desc: "Nilai tambah layanan apotek, tingkatkan loyalitas pelanggan.", icon: "M12 3l1.5 4.5h4.5l-3.75 2.75 1.5 4.5L12 12l-3.75 2.75 1.5-4.5L6 7.5h4.5L12 3z", color: "violet" },
  { title: "Posyandu & Komunitas", desc: "Deteksi dini & cek stunting anak untuk ibu, balita, dan lansia.", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z", color: "amber" },
  { title: "Korporat & HR", desc: "Program wellness karyawan terukur, terintegrasi dengan sistem HR.", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", color: "rose" },
];

const steps = [
  { number: "01", title: "Pasang Alat", desc: "Hubungkan ke tablet Android via Bluetooth. Instalasi selesai dalam 30 menit oleh teknisi kami.", icon: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" },
  { number: "02", title: "Pasien Cek Mandiri", desc: "Login via Google. Ikuti panduan layar sentuh. Hasil lengkap dalam 5–10 menit.", icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" },
  { number: "03", title: "Data Tersimpan Otomatis", desc: "Rekam medis digital langsung di TEA App. Dokter bisa akses dari mana saja.", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" },
  { number: "04", title: "Konsultasi Dokter", desc: "Jika diperlukan, lanjutkan konsultasi online dengan dokter melalui TEA App.", icon: "M15 10l4.553-2.069A1 1 0 0121 8.847v6.306a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" },
];

const technologies = [
  {
    badge: "AI Kesehatan",
    title: "HELENA AI",
    subtitle: "Health Education, Literation, Empowerment Nursing Avatar",
    desc: "Sistem AI cerdas yang menganalisis data kesehatan Anda secara real-time, memberikan edukasi kesehatan personal, dan membantu memahami hasil pemeriksaan.",
    features: ["Analisis data kesehatan otomatis", "Edukasi kesehatan personal", "Rekomendasi gaya hidup sehat", "Komunikasi dua arah via chat & video"],
    gradient: "from-sky-600 to-cyan-500",
    bgGradient: "from-sky-50 to-cyan-50",
  },
  {
    badge: "Teknologi IoT",
    title: "IOMT Integration",
    subtitle: "Internet of Medical Things",
    desc: "Platform IoT medis yang menghubungkan perangkat ATM Sehat dengan aplikasi mobile secara real-time. Data kesehatan tersimpan aman dan dapat diakses kapan saja.",
    features: ["Sinkronisasi data real-time", "Rekam medis digital aman", "Koneksi ke seluruh perangkat health", "Laporan kesehatan harian otomatis"],
    gradient: "from-emerald-600 to-teal-500",
    bgGradient: "from-emerald-50 to-teal-50",
  },
];

const awards = [
  { year: "2018", title: "Juara 1", event: "Tanoto Awards", org: "Tanoto Foundation", icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z", color: "amber" },
  { year: "2019", title: "ASEAN ICT Award", event: "ASEAN ICT Awards", org: "ASEAN, Laos", icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064", color: "sky" },
  { year: "2019", title: "Juara 2", event: "IdenTIK Kominfo", org: "Kementerian Kominfo RI", icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z", color: "violet" },
  { year: "2019", title: "Didanai", event: "GK Plug and Play", org: "Plug and Play APAC", icon: "M13 10V3L4 14h7v7l9-11h-7z", color: "emerald" },
];

const awardColorMap: Record<string, string> = {
  amber: "bg-amber-50 border-amber-200 text-amber-700",
  sky: "bg-sky-50 border-sky-200 text-sky-700",
  violet: "bg-violet-50 border-violet-200 text-violet-700",
  emerald: "bg-emerald-50 border-emerald-200 text-emerald-700",
};


const certifications = [
  { name: "Tensimeter (Omron)", num: "KEMENKES RI AKL 20501220368" },
  { name: "Timbangan Badan", num: "KEMENKES RI AKL 10901220081" },
  { name: "Termometer Infrared", num: "KEMENKES RI AKL 20901028159" },
  { name: "Pulse Oximeter", num: "KEMENKES RI AKL 20502121110" },
  { name: "Pengukur Tinggi Badan", num: "SURAT KET. FR.03.04/IVA/01588/2023" },
  { name: "Kalibrasi Rutin", num: "Setiap 1 tahun — bersertifikat resmi" },
];

const galleryPhotos = [
  { src: "https://atmsehat.co.id/wp-content/gallery/gallery/12.jpg", alt: "ATM Sehat di lapangan", wide: true },
  { src: "https://atmsehat.co.id/wp-content/gallery/gallery/16.jpg", alt: "Penggunaan ATM Sehat", wide: false },
  { src: "https://atmsehat.co.id/wp-content/gallery/gallery/17.jpg", alt: "Event ATM Sehat", wide: false },
  { src: "https://atmsehat.co.id/wp-content/uploads/2024/09/1_1-1024x1024.png", alt: "Unit ATM Sehat", wide: false },
  { src: "https://atmsehat.co.id/wp-content/uploads/2024/09/Jenis-Produk-ATM-Sehat1-1024x576.png", alt: "Varian Produk ATM Sehat", wide: false },
];

const problems = [
  { pct: "70%", stat: "Belum Pernah Tes Darah", desc: "Mayoritas masyarakat Indonesia tidak pernah melakukan pemeriksaan darah dasar.", source: "HonestDocs Survey" },
  { pct: "51%", stat: "Terkendala Waktu", desc: "Lebih dari separuh responden menyebut keterbatasan waktu sebagai hambatan utama cek kesehatan.", source: "HonestDocs Survey" },
  { pct: "24%", stat: "Takut & Tidak Nyaman", desc: "Seperempat responden enggan cek kesehatan karena rasa takut dan ketidaknyamanan.", source: "HonestDocs Survey" },
];

/* ─── Reusable CertBadge ─── */
function CertBadge({ name, num }: { name: string; num: string }) {
  return (
    <div className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3">
      <p className="text-xs font-bold text-slate-700">{name}</p>
      <p className="text-xs font-mono text-slate-500 mt-0.5">{num}</p>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center hero-gradient overflow-hidden pt-16">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-white/5 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: copy */}
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 text-white/90 text-sm font-medium px-4 py-2 rounded-full border border-white/20 mb-8 animate-fade-in">
                <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Peraih ASEAN ICT Awards 2019 · Tanoto Awards 2018
              </div>

              <p className="text-sky-300 text-sm font-semibold uppercase tracking-wider mb-3 animate-fade-in-up">
                Anjungan Telehealth Masyarakat Sehat
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in-up">
                Cek Kesehatan<br />
                <span className="text-sky-300">Semudah Cek Saldo</span>
              </h1>
              <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-8 max-w-xl animate-fade-in-up delay-100">
                Stasiun kesehatan pintar yang memudahkan cek tekanan darah, gula darah, kolesterol, dan konsultasi dokter — dari Rp 5.000. Sudah dipercaya oleh{" "}
                <span className="text-white font-semibold">19+ mitra fasilitas kesehatan</span>.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-12 animate-fade-in-up delay-200">
                <WhatsAppButton className="shadow-lg shadow-black/30 text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5 font-bold">
                  💬 Hubungi Kami via WhatsApp
                </WhatsAppButton>
                <Link
                  href="/layanan"
                  className="inline-flex items-center justify-center gap-2 bg-white/15 text-white font-semibold px-6 py-4 rounded-xl border border-white/40 hover:bg-white/25 transition-colors text-sm"
                >
                  Lihat Layanan
                  <Icon path="M5 12h14M12 5l7 7-7 7" className="w-4 h-4" />
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 animate-fade-in-up delay-300">
                {stats.map((s) => (
                  <div key={s.label} className="text-center sm:text-left">
                    <div className="text-2xl lg:text-3xl font-bold text-white mb-1">{s.value}</div>
                    <div className="text-xs text-white/60">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: product image */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-full max-w-sm">
                <div className="absolute inset-0 bg-white/10 rounded-3xl blur-xl" />
                <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-6">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://atmsehat.co.id/wp-content/uploads/2024/09/1_1-1024x1024.png"
                    alt="ATM Sehat Device"
                    className="w-full rounded-2xl object-contain"
                    loading="eager"
                  />
                  <div className="mt-4 bg-white/10 rounded-xl px-4 py-3 text-center">
                    <p className="text-white font-semibold text-sm">ATM Sehat Kit</p>
                    <p className="text-white/60 text-xs mt-0.5">8 parameter · Akurasi 95% · 24/7</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Simple wave divider only */}
        <div className="absolute bottom-0 inset-x-0">
          <svg viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none" className="w-full h-16 lg:h-20" aria-hidden="true">
            <path d="M0 80L1440 80L1440 40C1200 80 960 0 720 40C480 80 240 0 0 40L0 80Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ── Problem ── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <div className="text-center mb-14">
              <SectionBadge>Tantangan Kesehatan Indonesia</SectionBadge>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                Mengapa Masyarakat Enggan Cek Kesehatan?
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto text-lg">
                Survei nasional mengungkap fakta mengejutkan tentang akses layanan kesehatan di Indonesia.
              </p>
            </div>
          </AnimateIn>

          <StaggerGrid className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {problems.map((p) => (
              <StaggerItem key={p.stat} className="relative bg-slate-50 rounded-2xl p-8 border border-slate-100 overflow-hidden">
                <div className="absolute top-0 right-0 text-8xl font-bold text-slate-100 leading-none select-none pointer-events-none" aria-hidden="true">
                  {p.pct.replace("%", "")}
                </div>
                <div className="relative">
                  <div className="text-4xl font-bold text-sky-600 mb-2">{p.pct}</div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">{p.stat}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
                  <p className="text-xs text-slate-400 mt-4 font-medium">Sumber: {p.source}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>

          <div className="bg-gradient-to-br from-sky-600 to-emerald-600 rounded-3xl p-8 lg:p-12 text-white text-center">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">Siap Tingkatkan Layanan Kesehatan Anda?</h3>
            <p className="text-white/85 max-w-2xl mx-auto text-lg leading-relaxed mb-8">
              ATM Sehat menghapus semua hambatan: mudah diakses, terjangkau (mulai Rp 5.000), dan hasil instan.
              Tim kami siap membantu dari konsultasi gratis hingga instalasi.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <WhatsAppButton variant="outline" className="text-base font-bold px-8 py-3.5 bg-white text-emerald-600 border-0 hover:bg-emerald-50">
                ✓ Konsultasi Gratis via WhatsApp
              </WhatsAppButton>
              <Link
                href="/kontak"
                className="inline-flex items-center justify-center gap-2 bg-white/20 text-white font-semibold px-7 py-3.5 rounded-xl border border-white/40 hover:bg-white/30 transition-colors"
              >
                Hubungi Tim Kami
                <Icon path="M5 12h14M12 5l7 7-7 7" className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <div className="text-center mb-14">
              <SectionBadge color="emerald">Parameter Ukur</SectionBadge>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                8 Parameter Kesehatan dalam Satu Stasiun
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto text-lg">
                Alat bermerek tersertifikasi Kemenkes RI. Akurasi rata-rata 95%.
              </p>
            </div>
          </AnimateIn>

          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s) => (
              <StaggerItem key={s.title} className="group bg-white rounded-2xl p-6 border border-slate-100 card-hover cursor-default">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${colorMap[s.color] ?? colorMap.sky}`}>
                  <Icon path={s.icon} className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-1 text-base">{s.title}</h3>
                <p className="text-xs text-slate-400 mb-2 font-medium">{s.brand}</p>
                <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
              </StaggerItem>
            ))}
          </StaggerGrid>

          <div className="text-center mt-10">
            <Link href="/layanan" className="inline-flex items-center gap-2 text-sky-600 font-semibold hover:text-sky-700 transition-colors">
              Pelajari selengkapnya
              <Icon path="M5 12h14M12 5l7 7-7 7" className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Use Cases ── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <SectionBadge>Pengguna</SectionBadge>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Cocok untuk Berbagai Kebutuhan
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
              ATM Sehat dirancang fleksibel untuk berbagai lingkungan kerja dan komunitas.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {useCases.map((uc) => (
              <div
                key={uc.title}
                className={`group bg-slate-50 rounded-2xl p-6 border border-slate-100 card-hover cursor-default`}
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-colors ${colorMap[uc.color] ?? colorMap.sky}`}>
                  <Icon path={uc.icon} className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2 text-sm">{uc.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{uc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Products ── */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <SectionBadge color="teal">Produk</SectionBadge>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Anjungan Telehealth Masyarakat Sehat
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
              Tersedia dalam berbagai varian untuk klinik, pabrik, apotek, posyandu, stasiun, dan area publik.
            </p>
          </div>

          {/* Main product showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12 items-start">
            <div className="bg-white rounded-2xl overflow-hidden border border-slate-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://atmsehat.co.id/wp-content/uploads/2024/09/1_1-1024x1024.png"
                alt="Unit ATM Sehat — Tampak Lengkap"
                className="w-full object-contain"
                loading="lazy"
              />
              <p className="text-center text-xs text-slate-400 py-3 border-t border-slate-100">Unit ATM Sehat — Tampak Lengkap</p>
            </div>

            <div className="space-y-5">
              <div className="bg-white rounded-2xl overflow-hidden border border-slate-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://atmsehat.co.id/wp-content/uploads/2024/09/Jenis-Produk-ATM-Sehat1-1024x576.png"
                  alt="Varian & Jenis Produk ATM Sehat"
                  className="w-full object-contain"
                  loading="lazy"
                />
                <p className="text-center text-xs text-slate-400 py-3 border-t border-slate-100">Varian & Jenis Produk ATM Sehat</p>
              </div>

              {/* Placement locations */}
              <div className="bg-white rounded-2xl border border-slate-100 p-6">
                <p className="font-semibold text-slate-900 text-sm mb-4">Lokasi Penempatan Ideal:</p>
                <div className="grid grid-cols-2 gap-2">
                  {["Klinik & Puskesmas", "Pabrik & Kantor", "Apotek & Minimarket", "Posyandu & Desa", "Stasiun & Bandara", "Hotel & Apartemen"].map((loc) => (
                    <div key={loc} className="flex items-center gap-2 text-sm text-slate-600">
                      <svg className="w-4 h-4 text-emerald-500 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M9 12l2 2 4-4" />
                        <circle cx="12" cy="12" r="10" />
                      </svg>
                      {loc}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Variants grid */}
          <div>
            <p className="text-xs font-semibold text-teal-600 uppercase tracking-wider mb-5">Varian Produk</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
              {productVariants.map((v) => (
                <div key={v.label} className="bg-white rounded-xl border border-slate-100 overflow-hidden card-hover cursor-default">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={v.src} alt={v.label} className="w-full aspect-square object-contain p-2" loading="lazy" />
                  <p className="text-xs font-semibold text-slate-700 text-center py-2 px-1 border-t border-slate-100">{v.label}</p>
                </div>
              ))}
              {/* Coming soon card */}
              <div className="bg-white rounded-xl border-2 border-dashed border-teal-200 flex flex-col items-center justify-center p-3 text-center min-h-[120px] gap-2">
                <svg className="w-6 h-6 text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" /><path d="M12 8v4M12 16h.01" />
                </svg>
                <p className="text-xs font-semibold text-teal-600">Segera Hadir</p>
                <p className="text-xs text-slate-400">EKG · Spirometri · USG</p>
              </div>
            </div>
          </div>

          {/* Upcoming features */}
          <div className="mt-8 bg-teal-50 border border-teal-200 rounded-2xl p-6">
            <p className="text-xs font-bold text-teal-600 uppercase tracking-wider mb-4">Fitur Lanjutan — Segera Hadir</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { src: "https://atmsehat.co.id/wp-content/uploads/2024/09/ekg.png", title: "EKG", desc: "Rekam jantung digital" },
                { src: "https://atmsehat.co.id/wp-content/uploads/2024/09/spirometri.png", title: "Spirometri", desc: "Uji fungsi paru-paru" },
                { src: "https://atmsehat.co.id/wp-content/uploads/2024/09/usg.png", title: "USG", desc: "Ultrasonografi portable" },
              ].map((item) => (
                <div key={item.title} className="flex items-center gap-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.src} alt={item.title} className="w-14 h-14 object-contain rounded-xl bg-white border border-slate-200 p-1.5" loading="lazy" />
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">{item.title}</p>
                    <p className="text-xs text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-8">
            <WhatsAppButton variant="outline" message="Halo%2C+saya+ingin+mengetahui+spesifikasi+teknis+ATM+Sehat">
              Lihat spesifikasi teknis lengkap →
            </WhatsAppButton>
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <SectionBadge>Cara Kerja</SectionBadge>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Cara Kerjanya Sederhana</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
              Dari pasang alat hingga hasil pemeriksaan — hanya dalam 4 langkah mudah.
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
            <SectionBadge color="violet">Teknologi Terdepan</SectionBadge>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Didukung Inovasi Kelas Dunia</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
              Perpaduan AI, IoT, dan telemedicine untuk pengalaman kesehatan yang komprehensif.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {technologies.map((tech) => (
              <div key={tech.title} className={`rounded-3xl p-8 lg:p-10 bg-gradient-to-br ${tech.bgGradient} border border-white`}>
                <span className={`inline-block text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full bg-gradient-to-r ${tech.gradient} text-white mb-6`}>
                  {tech.badge}
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mb-1">{tech.title}</h3>
                <p className="text-sm text-slate-500 mb-4 font-medium">{tech.subtitle}</p>
                <p className="text-slate-600 leading-relaxed mb-7">{tech.desc}</p>
                <ul className="space-y-3">
                  {tech.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-slate-700">
                      <svg className="w-5 h-5 text-emerald-500 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M9 12l2 2 4-4" /><circle cx="12" cy="12" r="10" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-white rounded-2xl p-6 border border-slate-100 flex items-start gap-5">
            <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center shrink-0">
              <Icon path="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" className="w-6 h-6 text-slate-600" />
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-1">Jangkauan Satellite Internet</h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                ATM Sehat mendukung konektivitas satelit internet, memungkinkan layanan kesehatan menjangkau
                daerah terpencil yang belum memiliki infrastruktur internet terrestrial.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Awards ── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <div className="text-center mb-14">
              <SectionBadge color="amber">Penghargaan & Pengakuan</SectionBadge>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Diakui Secara Nasional & Internasional</h2>
              <p className="text-slate-500 max-w-2xl mx-auto text-lg">
                Inovasi ATM Sehat telah mendapat pengakuan dari berbagai lembaga bergengsi.
              </p>
            </div>
          </AnimateIn>

          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {awards.map((a) => (
              <StaggerItem key={a.event} className={`rounded-2xl p-6 border ${awardColorMap[a.color]} text-center card-hover`}>
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mx-auto mb-5 shadow-sm">
                  <Icon path={a.icon} className="w-7 h-7" />
                </div>
                <div className="text-xs font-bold uppercase tracking-wider opacity-70 mb-2">{a.year}</div>
                <div className="text-xl font-bold mb-1">{a.title}</div>
                <div className="font-medium text-sm mb-1">{a.event}</div>
                <div className="text-xs opacity-70">{a.org}</div>
              </StaggerItem>
            ))}
          </StaggerGrid>

        </div>
      </section>

      {/* ── Partners & Trust ── */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <span className="inline-block text-emerald-600 text-xs font-bold uppercase tracking-widest px-3 py-1.5 bg-emerald-50 rounded-full mb-4">Kepercayaan</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-3">Dipercaya oleh Institusi Terkemuka</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">Mitra strategis dan dukungan dari organisasi terdepan di Indonesia</p>
          </div>

          <div className="space-y-12">
            {/* Partners */}
            <div>
              <p className="text-center text-slate-400 text-xs font-semibold uppercase tracking-wider mb-8">Mitra Perangkat Medis</p>
              <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-6">
                {["OMRON", "Alita", "Kemenperindag RI", "DIIB UI", "Mor Clinic"].map((p) => (
                  <div key={p} className="px-5 lg:px-7 py-3 lg:py-4 rounded-xl border border-slate-200 bg-white hover:border-emerald-300 hover:bg-emerald-50 transition-all duration-200 cursor-default">
                    <p className="text-slate-700 font-semibold text-sm lg:text-base">{p}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Support Institutions */}
            <div className="pt-4 lg:pt-8 border-t border-slate-200 mt-4 lg:mt-8">
              <p className="text-center text-slate-400 text-xs font-semibold uppercase tracking-wider mb-8">Dukungan & Penghargaan</p>
              <div className="flex flex-wrap items-center justify-center gap-3 lg:gap-4">
                {[
                  { icon: "🏛", name: "Kemenkes RI" },
                  { icon: "🏫", name: "DIIB Universitas Indonesia" },
                  { icon: "🚀", name: "Plug & Play APAC" },
                  { icon: "🏆", name: "Tanoto Foundation" },
                  { icon: "🌏", name: "ASEAN ICT Awards" },
                ].map((item) => (
                  <span key={item.name} className="inline-flex items-center gap-2 text-slate-600 font-medium text-xs lg:text-sm bg-white border border-slate-200 px-4 lg:px-5 py-2.5 lg:py-3 rounded-lg hover:border-slate-300 hover:bg-slate-50 transition-all duration-200">
                    <span className="text-base">{item.icon}</span>
                    <span>{item.name}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Certifications ── */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <div className="text-center mb-14">
              <SectionBadge color="emerald">Sertifikasi Resmi</SectionBadge>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Izin Edar Kemenkes RI</h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Semua perangkat ATM Sehat telah tersertifikasi resmi oleh Kementerian Kesehatan Republik Indonesia.
              </p>
            </div>
          </AnimateIn>

          <div className="bg-white rounded-2xl border border-slate-100 p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {certifications.map((c) => (
                <CertBadge key={c.name} {...c} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Gallery ── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <SectionBadge>Galeri</SectionBadge>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">ATM Sehat di Lapangan</h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Lihat bagaimana ATM Sehat digunakan di berbagai lokasi di seluruh Indonesia.
            </p>
          </div>

          {/* Row 1: wide + narrow */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="md:col-span-2 rounded-2xl overflow-hidden bg-slate-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={galleryPhotos[0].src}
                alt={galleryPhotos[0].alt}
                className="w-full h-64 md:h-72 object-cover transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="rounded-2xl overflow-hidden bg-slate-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={galleryPhotos[1].src}
                alt={galleryPhotos[1].alt}
                className="w-full h-64 md:h-72 object-cover transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>

          {/* Row 2: three equal */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {galleryPhotos.slice(2).map((photo) => (
              <div key={photo.src} className="rounded-2xl overflow-hidden bg-slate-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-52 object-cover object-center transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href="https://www.instagram.com/atm_sehat/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sky-600 font-semibold hover:text-sky-700 transition-colors border-b border-sky-200 hover:border-sky-400 pb-0.5"
            >
              Lihat Semua di Instagram @atm_sehat →
            </a>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 lg:py-32 hero-gradient">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <span className="inline-block text-white text-xs font-bold uppercase tracking-widest px-4 py-2 bg-white/10 rounded-full border border-white/20 mb-6">
              ⏱ Respons dalam 2 jam kerja
            </span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Mulai Transformasi Layanan Kesehatan Anda Hari Ini
          </h2>
          <p className="text-white/80 text-lg mb-12 leading-relaxed max-w-2xl mx-auto">
            Bergabung dengan ratusan fasilitas kesehatan yang sudah meningkatkan kualitas pelayanan.
            Konsultasi gratis, instalasi mudah, dukungan 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <WhatsAppButton className="shadow-lg shadow-black/30 text-lg px-10 py-5 font-bold">
              💬 Hubungi Sekarang via WhatsApp
            </WhatsAppButton>
            <Link
              href="/kontak"
              className="inline-flex items-center justify-center gap-2 bg-white/15 text-white font-semibold px-8 py-5 rounded-xl border border-white/40 hover:bg-white/25 transition-colors text-base"
            >
              Hubungi Tim Kami
              <Icon path="M5 12h14M12 5l7 7-7 7" className="w-4 h-4" />
            </Link>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/70 text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-300" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Gratis Konsultasi
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-300" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Instalasi Cepat
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-300" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Support 24/7
            </div>
          </div>
          <p className="text-white/50 text-xs mt-10">
            📞 +62 823-4837-1262 &nbsp;·&nbsp; 📧 info@atm-sehat.com
          </p>
        </div>
      </section>
    </>
  );
}
