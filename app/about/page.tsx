import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description:
    "Pelajari kisah ATM Sehat — inovasi kesehatan berbasis IoT dari PT Tele Sehat Indonesia. Visi, misi, tim profesional, dan perjalanan kami dalam mewujudkan akses kesehatan untuk semua.",
};

const team = [
  {
    name: "Dr. dr. Taufik Jamaan, Sp.OG",
    role: "Chief Executive Officer",
    bio: "Dokter spesialis obstetri dan ginekologi dengan pengalaman lebih dari 20 tahun di bidang medis klinis dan penelitian. Visioner di balik ekosistem telehealth ATM Sehat.",
    initial: "TJ",
    color: "sky",
  },
  {
    name: "Ns. Sigit M. Nuzul, S.Kep., M.Biomed",
    role: "Chief Product Officer",
    bio: "Peneliti perangkat kesehatan dengan pengalaman lebih dari 10 tahun. Arsitek utama perangkat IoT ATM Sehat dan sistem HELENA AI.",
    initial: "SN",
    color: "emerald",
  },
  {
    name: "dr. Andi Khomeini Takdir, Sp.PD",
    role: "Chief Medical Services Officer",
    bio: "Dokter spesialis penyakit dalam yang memimpin standar kualitas layanan medis dan protokol teleconsultation di seluruh jaringan ATM Sehat.",
    initial: "AK",
    color: "violet",
  },
  {
    name: "Khairon",
    role: "Chief Technology Officer",
    bio: "Pemimpin teknis yang mengarsitektur platform IOMT, integrasi sistem AI, dan infrastruktur digital ATM Sehat untuk skala nasional.",
    initial: "K",
    color: "amber",
  },
  {
    name: "Sukan Makmuried",
    role: "Chief Financial Officer",
    bio: "Ahli keuangan yang mengelola strategi pertumbuhan, kemitraan investasi, dan keberlanjutan finansial ekosistem Tele Sehat Indonesia.",
    initial: "SM",
    color: "rose",
  },
  {
    name: "Doddy Afriyana",
    role: "Chief Marketing & Quality Officer",
    bio: "Pemimpin pemasaran dan jaminan kualitas yang memastikan setiap unit ATM Sehat memenuhi standar tertinggi dan menjangkau komunitas yang membutuhkan.",
    initial: "DA",
    color: "cyan",
  },
];

const colorMap: Record<string, { bg: string; text: string; ring: string }> = {
  sky: { bg: "bg-sky-100", text: "text-sky-700", ring: "ring-sky-200" },
  emerald: { bg: "bg-emerald-100", text: "text-emerald-700", ring: "ring-emerald-200" },
  violet: { bg: "bg-violet-100", text: "text-violet-700", ring: "ring-violet-200" },
  amber: { bg: "bg-amber-100", text: "text-amber-700", ring: "ring-amber-200" },
  rose: { bg: "bg-rose-100", text: "text-rose-700", ring: "ring-rose-200" },
  cyan: { bg: "bg-cyan-100", text: "text-cyan-700", ring: "ring-cyan-200" },
};

const milestones = [
  {
    year: "2018",
    title: "Lahirnya Ide",
    desc: "Ide ATM Sehat lahir dari pengalaman pribadi pendiri ketika anggota keluarga mengalami stroke akibat hipertensi yang tidak terdeteksi. Meraih Juara 1 Tanoto Awards.",
  },
  {
    year: "2019",
    title: "Pendirian & Pengakuan",
    desc: "PT Tele Sehat Indonesia resmi didirikan. Meraih ASEAN ICT Awards di Laos, Juara 2 IdenTIK Kominfo, dan mendapat pendanaan dari GK Plug and Play Indonesia.",
  },
  {
    year: "2020",
    title: "Peluncuran Produk",
    desc: "ATM Sehat mulai beroperasi secara komersial. Unit-unit pertama dipasang di fasilitas kesehatan, kantor, dan area publik di Jabodetabek.",
  },
  {
    year: "2023",
    title: "Ekspansi Nasional",
    desc: "145 unit tersebar di 9 provinsi. Kemitraan dengan 19 institusi. MOU dengan IHTPB untuk pengembangan Call Center AI Terintegrasi.",
  },
  {
    year: "Kini",
    title: "Visi 80.000 Desa",
    desc: "Menuju target kehadiran di 80.000 desa di seluruh Indonesia, menjangkau setiap lapisan masyarakat dari Sabang sampai Merauke.",
  },
];

const values = [
  {
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    title: "Aksesibilitas",
    desc: "Layanan kesehatan berkualitas harus dapat diakses oleh semua kalangan, tanpa batasan geografis maupun ekonomi.",
  },
  {
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    title: "Inovasi",
    desc: "Terus berinovasi mengintegrasikan teknologi AI, IoT, dan telemedicine untuk meningkatkan kualitas hidup masyarakat.",
  },
  {
    icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
    title: "Inklusivitas",
    desc: "Melayani semua segmen masyarakat — dari perkotaan hingga pelosok desa — dengan solusi yang relevan dan terjangkau.",
  },
  {
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    title: "Integritas Data",
    desc: "Menjaga keamanan dan kerahasiaan data kesehatan pengguna dengan standar proteksi data tertinggi.",
  },
];

export default function AboutPage() {
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
            Tentang Kami
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Kesehatan untuk Semua,
            <br />
            <span className="text-sky-300">dari Sabang sampai Merauke</span>
          </h1>
          <p className="text-white/80 text-lg max-w-3xl mx-auto leading-relaxed">
            PT Tele Sehat Indonesia adalah perusahaan teknologi kesehatan yang berkomitmen
            mendemokratisasi akses layanan kesehatan berkualitas di seluruh pelosok Indonesia.
          </p>
        </div>
        <div className="absolute bottom-0 inset-x-0">
          <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" className="w-full h-12" aria-hidden="true">
            <path d="M0 60L1440 60L1440 30C1200 60 960 0 720 30C480 60 240 0 0 30L0 60Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-sky-600 font-semibold text-sm uppercase tracking-wider mb-4">
                Kisah Kami
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                Berawal dari Sebuah Pengalaman Pribadi
              </h2>
              <p className="text-slate-600 leading-relaxed mb-5">
                ATM Sehat lahir pada 2019 dari keprihatinan mendalam: seorang anggota keluarga pendiri
                mengalami stroke karena hipertensi yang tidak pernah terdeteksi. Kejadian itu memicu
                pertanyaan besar — mengapa cek kesehatan masih terasa begitu sulit dan mahal bagi
                kebanyakan orang Indonesia?
              </p>
              <p className="text-slate-600 leading-relaxed mb-5">
                Dari situ lahirlah visi yang sederhana namun berdampak besar:{" "}
                <strong className="text-slate-900">
                  "Cek kesehatan semudah cek saldo di ATM."
                </strong>
              </p>
              <p className="text-slate-600 leading-relaxed">
                Dengan menggabungkan IoT, kecerdasan buatan, dan telemedicine, ATM Sehat kini hadir
                di 9 provinsi sebagai solusi nyata untuk memangkas hambatan akses layanan kesehatan
                bagi 270 juta rakyat Indonesia.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="bg-gradient-to-br from-sky-600 to-sky-700 rounded-2xl p-7 text-white">
                <svg className="w-8 h-8 mb-5 text-sky-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
                </svg>
                <h3 className="font-bold text-lg mb-3">Visi</h3>
                <p className="text-sky-100 text-sm leading-relaxed">
                  Menjadi platform layanan kesehatan digital yang menjangkau seluruh lapisan masyarakat Indonesia
                  — dari kota besar hingga desa terpencil.
                </p>
              </div>
              <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl p-7 text-white">
                <svg className="w-8 h-8 mb-5 text-emerald-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <h3 className="font-bold text-lg mb-3">Misi</h3>
                <p className="text-emerald-100 text-sm leading-relaxed">
                  Mewujudkan deteksi dini penyakit, pemantauan kesehatan rutin, dan konsultasi medis yang
                  mudah, terjangkau, dan bermartabat untuk semua.
                </p>
              </div>
              <div className="sm:col-span-2 bg-slate-50 rounded-2xl p-7 border border-slate-100">
                <h3 className="font-bold text-slate-900 text-base mb-3">Tagline Kami</h3>
                <p className="text-2xl font-bold gradient-text">
                  &ldquo;Healthy Life for Everyone&rdquo;
                </p>
                <p className="text-slate-500 text-sm mt-2">
                  Karena kesehatan adalah hak, bukan privilege.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-emerald-600 font-semibold text-sm uppercase tracking-wider mb-3">
              Nilai-Nilai Kami
            </span>
            <h2 className="text-3xl font-bold text-slate-900">
              Prinsip yang Memandu Setiap Langkah Kami
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-7 border border-slate-100 card-hover">
                <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center mb-5">
                  <svg className="w-6 h-6 text-sky-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d={v.icon} />
                  </svg>
                </div>
                <h3 className="font-semibold text-slate-900 mb-3">{v.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-sky-600 font-semibold text-sm uppercase tracking-wider mb-3">
              Perjalanan Kami
            </span>
            <h2 className="text-3xl font-bold text-slate-900">
              Dari Ide ke Dampak Nyata
            </h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2" aria-hidden="true" />

            <div className="space-y-10">
              {milestones.map((m, i) => (
                <div
                  key={m.year}
                  className={`relative flex flex-col sm:flex-row gap-8 ${
                    i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 pl-12 sm:pl-0 ${i % 2 === 0 ? "sm:pr-12 sm:text-right" : "sm:pl-12"}`}>
                    <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                      <span className="inline-block text-sky-600 font-bold text-sm mb-2">{m.year}</span>
                      <h3 className="font-bold text-slate-900 mb-2">{m.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{m.desc}</p>
                    </div>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-6 w-4 h-4 rounded-full bg-sky-600 ring-4 ring-sky-100" aria-hidden="true" />

                  {/* Spacer */}
                  <div className="flex-1 hidden sm:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-violet-600 font-semibold text-sm uppercase tracking-wider mb-3">
              Tim Kami
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Dipimpin oleh Para Ahli Multidisiplin
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
              Tim gabungan profesional di bidang medis, teknologi, manajemen, dan keperawatan
              yang bersatu untuk satu tujuan: kesehatan terbaik untuk semua.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member) => {
              const c = colorMap[member.color] ?? colorMap.sky;
              return (
                <div key={member.name} className="bg-white rounded-2xl p-7 border border-slate-100 card-hover">
                  <div
                    className={`w-14 h-14 rounded-2xl ${c.bg} ${c.text} ring-2 ${c.ring} flex items-center justify-center font-bold text-lg mb-5`}
                  >
                    {member.initial}
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-1">{member.name}</h3>
                  <p className={`text-sm font-semibold ${c.text} mb-4`}>{member.role}</p>
                  <p className="text-slate-500 text-sm leading-relaxed">{member.bio}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 hero-gradient">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Tertarik Bermitra dengan ATM Sehat?
          </h2>
          <p className="text-white/80 mb-8 text-lg">
            Kami terbuka untuk kemitraan dengan instansi pemerintah, rumah sakit, korporasi,
            dan lembaga kesehatan dalam misi mewujudkan Indonesia yang lebih sehat.
          </p>
          <Link
            href="/kontak"
            className="inline-flex items-center gap-2 bg-white text-sky-700 font-semibold px-8 py-4 rounded-xl hover:bg-sky-50 transition-colors shadow-lg"
          >
            Hubungi Tim Kami
          </Link>
        </div>
      </section>
    </>
  );
}
