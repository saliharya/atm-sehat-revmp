import type { Metadata } from "next";
import Link from "next/link";
import WhatsAppButton from "../components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Tentang ATM Sehat | Inovasi Kesehatan Digital Indonesia",
  description:
    "PT Tele Sehat Indonesia mengembangkan ATM Sehat — kiosk kesehatan IoT yang menjangkau 24 kota Indonesia. Dipimpin tim dokter & engineer berpengalaman. Pemenang ASEAN ICT Awards 2019 & Tanoto Awards 2018.",
};

/* ─── Team members with real photo URLs ─── */
const team = [
  {
    name: "Dr. dr. Taufik Jamaan, Sp.OG",
    role: "Chief Executive Officer",
    bio: "Dokter spesialis obstetri dan ginekologi dengan pengalaman lebih dari 20 tahun. Visioner di balik ekosistem telehealth ATM Sehat.",
    photo: "https://atmsehat.co.id/wp-content/uploads/2024/09/profil_dr-taufik-768x960.png",
    initial: "TJ",
    color: "sky",
  },
  {
    name: "Ns. Sigit M. Nuzul, S.Kep., M.Biomed",
    role: "Chief Product Officer",
    bio: "Peneliti perangkat kesehatan dengan pengalaman lebih dari 10 tahun. Arsitek utama perangkat IoT ATM Sehat dan sistem HELENA AI.",
    photo: "https://atmsehat.co.id/wp-content/uploads/2024/09/profil_ns-sigit-240x300.png",
    initial: "SN",
    color: "emerald",
  },
  {
    name: "Khairon, S.Kep., Ners, S.Kom",
    role: "Chief Technology Officer",
    bio: "Pemimpin teknis yang mengarsitektur platform IOMT, integrasi sistem AI, dan infrastruktur digital ATM Sehat untuk skala nasional.",
    photo: "https://atmsehat.co.id/wp-content/uploads/2024/09/profil_ns-khoiron-240x300.png",
    initial: "K",
    color: "amber",
  },
  {
    name: "Sukan Makmuri",
    role: "Chief Financial Officer",
    bio: "Ahli keuangan yang mengelola strategi pertumbuhan, kemitraan investasi, dan keberlanjutan finansial ekosistem Tele Sehat Indonesia.",
    photo: "https://atmsehat.co.id/wp-content/uploads/2024/09/profil_sukan-240x300.png",
    initial: "SM",
    color: "rose",
  },
  {
    name: "Doddy Afriyana",
    role: "Chief Marketing & Quality Officer",
    bio: "Pemimpin pemasaran dan jaminan kualitas yang memastikan setiap unit ATM Sehat memenuhi standar tertinggi dan menjangkau komunitas yang membutuhkan.",
    photo: "https://atmsehat.co.id/wp-content/uploads/2024/09/dody.png",
    initial: "DA",
    color: "cyan",
  },
  {
    name: "dr. Andi Khomeini Takdir, Sp.PD",
    role: "Chief Medical Services Officer",
    bio: "Dokter spesialis penyakit dalam yang memimpin standar kualitas layanan medis dan protokol teleconsultation di seluruh jaringan ATM Sehat.",
    photo: null,
    initial: "AK",
    color: "violet",
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
    year: "2017",
    title: "Pendirian PT Tele Sehat Indonesia",
    desc: "Kantor pertama di Tenant DIIB UI, Depok. Konsep Health Industry 4.0 mulai dikembangkan.",
  },
  {
    year: "2018",
    title: "Pilot Project ATM Sehat Pertama",
    desc: "Unit perdana dipasang di Depok Town Square & Masjid UI. Meraih Juara 1 Tanoto Awards.",
  },
  {
    year: "2019",
    title: "Pengakuan Nasional & Internasional",
    desc: "Meraih ASEAN ICT Awards di Laos, Juara 2 IdenTIK Kominfo, dan pendanaan dari GK Plug and Play Indonesia.",
  },
  {
    year: "2020",
    title: "Kolaborasi Pemda & Puskesmas",
    desc: "ATM Sehat mulai beroperasi secara komersial. Ekspansi ke berbagai daerah Indonesia.",
  },
  {
    year: "2024",
    title: "Sertifikasi Izin Edar Kemenkes RI",
    desc: "Semua alat ATM Sehat telah memiliki izin edar resmi Kemenkes RI. Ekspansi ke 24 kota.",
  },
  {
    year: "Kini",
    title: "Visi 80.000 Desa",
    desc: "Menuju target kehadiran di 80.000 desa di seluruh Indonesia, dari Sabang sampai Merauke.",
  },
];

const values = [
  { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", title: "Aksesibilitas", desc: "Layanan kesehatan berkualitas harus dapat diakses oleh semua kalangan, tanpa batasan geografis maupun ekonomi." },
  { icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z", title: "Inovasi", desc: "Terus berinovasi mengintegrasikan teknologi AI, IoT, dan telemedicine untuk meningkatkan kualitas hidup masyarakat." },
  { icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z", title: "Inklusivitas", desc: "Melayani semua segmen masyarakat — dari perkotaan hingga pelosok desa — dengan solusi yang relevan dan terjangkau." },
  { icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", title: "Integritas Data", desc: "Menjaga keamanan dan kerahasiaan data kesehatan pengguna dengan standar proteksi data tertinggi." },
];

/* ─── Reusable TeamCard ─── */
function TeamCard({ member }: { member: typeof team[0] }) {
  const c = colorMap[member.color] ?? colorMap.sky;
  return (
    <div className="bg-white rounded-2xl border border-slate-100 card-hover overflow-hidden">
      {/* Photo */}
      <div className="aspect-[3/4] bg-slate-100 overflow-hidden">
        {member.photo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={member.photo}
            alt={member.name}
            className="w-full h-full object-cover object-top"
            loading="lazy"
          />
        ) : (
          <div className={`w-full h-full flex items-center justify-center ${c.bg}`}>
            <span className={`text-4xl font-bold ${c.text}`}>{member.initial}</span>
          </div>
        )}
      </div>
      {/* Info */}
      <div className="p-5">
        <h3 className="font-bold text-slate-900 text-sm mb-1 leading-snug">{member.name}</h3>
        <p className={`text-xs font-semibold ${c.text} mb-3`}>{member.role}</p>
        <p className="text-xs text-slate-500 leading-relaxed">{member.bio}</p>
      </div>
    </div>
  );
}

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
          <span className="inline-block text-sky-300 font-semibold text-sm uppercase tracking-wider mb-4">Tentang Kami</span>
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
              <span className="inline-block text-sky-600 font-semibold text-sm uppercase tracking-wider mb-4">Kisah Kami</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                Lahir dari Kepedulian terhadap Akses Kesehatan di Indonesia
              </h2>
              <p className="text-slate-600 leading-relaxed mb-5">
                <strong className="text-slate-900">PT Tele Sehat Indonesia (TSI)</strong> didirikan dengan fokus menciptakan inovasi telehealth melalui IoT dan aplikasi. Kami mengusung konsep <em>Health Industry 4.0</em> untuk mewujudkan smart village dan smart city di seluruh Indonesia — menjangkau masyarakat yang selama ini tidak memiliki akses mudah ke fasilitas kesehatan.
              </p>
              <p className="text-slate-600 leading-relaxed mb-5">
                ATM Sehat lahir dari keprihatinan mendalam: seorang anggota keluarga pendiri mengalami stroke karena hipertensi yang tidak pernah terdeteksi. Dari situ lahirlah visi:{" "}
                <strong className="text-slate-900">&ldquo;Cek kesehatan semudah cek saldo di ATM.&rdquo;</strong>
              </p>
              <p className="text-slate-600 leading-relaxed">
                Produk kami selaras dengan SDGs Goal 4 — <em>Good Health and Well-being</em> — mendukung transformasi layanan kesehatan primer dan digitalisasi yang didorong Kemenkes RI.
              </p>

              {/* Awards */}
              <div className="flex flex-wrap gap-3 mt-7">
                {[
                  { emoji: "🥇", title: "Juara 1 Tanoto Awards", sub: "Tanoto Foundation — 2018" },
                  { emoji: "🌏", title: "Winner ASEAN ICT Awards", sub: "ASEAN ICT Awards, Laos — 2019" },
                  { emoji: "🏆", title: "Juara 2 IdenTIK 2019", sub: "Kementerian Kominfo RI — R&D" },
                  { emoji: "🔌", title: "Didanai GK Plug & Play", sub: "Plug & Play APAC — 2019" },
                ].map((a) => (
                  <div key={a.title} className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3">
                    <span className="text-2xl">{a.emoji}</span>
                    <div>
                      <p className="text-sm font-bold text-slate-900">{a.title}</p>
                      <p className="text-xs text-slate-500">{a.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="bg-gradient-to-br from-sky-600 to-sky-700 rounded-2xl p-7 text-white">
                <svg className="w-8 h-8 mb-5 text-sky-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
                </svg>
                <h3 className="font-bold text-lg mb-3">Visi</h3>
                <p className="text-sky-100 text-sm leading-relaxed">
                  Menjadi platform layanan kesehatan digital yang menjangkau seluruh lapisan masyarakat Indonesia — dari kota besar hingga desa terpencil.
                </p>
              </div>
              <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl p-7 text-white">
                <svg className="w-8 h-8 mb-5 text-emerald-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <h3 className="font-bold text-lg mb-3">Misi</h3>
                <p className="text-emerald-100 text-sm leading-relaxed">
                  Mewujudkan deteksi dini penyakit, pemantauan kesehatan rutin, dan konsultasi medis yang mudah, terjangkau, dan bermartabat untuk semua.
                </p>
              </div>
              <div className="sm:col-span-2 bg-slate-50 rounded-2xl p-7 border border-slate-100">
                <h3 className="font-bold text-slate-900 text-base mb-3">Tagline Kami</h3>
                <p className="text-2xl font-bold gradient-text">&ldquo;Healthy Life for Everyone&rdquo;</p>
                <p className="text-slate-500 text-sm mt-2">Karena kesehatan adalah hak, bukan privilege.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-emerald-600 font-semibold text-sm uppercase tracking-wider mb-3">Nilai-Nilai Kami</span>
            <h2 className="text-3xl font-bold text-slate-900">Prinsip yang Memandu Setiap Langkah Kami</h2>
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
            <span className="inline-block text-sky-600 font-semibold text-sm uppercase tracking-wider mb-3">Perjalanan Kami</span>
            <h2 className="text-3xl font-bold text-slate-900">Dari Ide ke Dampak Nyata</h2>
          </div>

          <div className="relative">
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2" aria-hidden="true" />
            <div className="space-y-10">
              {milestones.map((m, i) => (
                <div
                  key={m.year}
                  className={`relative flex flex-col sm:flex-row gap-8 ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}
                >
                  <div className={`flex-1 pl-12 sm:pl-0 ${i % 2 === 0 ? "sm:pr-12 sm:text-right" : "sm:pl-12"}`}>
                    <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                      <span className="inline-block text-sky-600 font-bold text-sm mb-2">{m.year}</span>
                      <h3 className="font-bold text-slate-900 mb-2">{m.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-6 w-4 h-4 rounded-full bg-sky-600 ring-4 ring-sky-100" aria-hidden="true" />
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
            <span className="inline-block text-violet-600 font-semibold text-sm uppercase tracking-wider mb-3">Tim Kepemimpinan</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Meet Our Leadership Team</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
              Tim gabungan profesional di bidang medis, teknologi, manajemen, dan keperawatan
              yang bersatu untuk satu tujuan: kesehatan terbaik untuk semua.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
            {team.slice(0, 5).map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>

          {/* 6th member (CMSO, no photo) in centered row */}
          <div className="flex justify-center mt-5">
            <div className="w-full sm:w-1/3 lg:w-1/5">
              <TeamCard member={team[5]} />
            </div>
          </div>

          {/* Join the team banner */}
          <div className="mt-10 bg-white rounded-2xl border border-slate-100 p-6 flex flex-col sm:flex-row items-center justify-between gap-5">
            <div>
              <p className="font-bold text-slate-900 mb-1">Bergabunglah dengan Tim Kami</p>
              <p className="text-sm text-slate-500">Kami membuka peluang bagi profesional yang bersemangat memajukan kesehatan Indonesia.</p>
            </div>
            <a
              href="mailto:info@atm-sehat.com?subject=Lamaran%20Kerja%20ATM%20Sehat"
              className="inline-flex items-center gap-2 border-2 border-sky-600 text-sky-600 font-semibold px-6 py-3 rounded-xl hover:bg-sky-50 transition-colors shrink-0 text-sm"
            >
              Kirim CV Anda →
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 hero-gradient">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Tertarik Bermitra dengan ATM Sehat?</h2>
          <p className="text-white/80 mb-8 text-lg">
            Kami terbuka untuk kemitraan dengan instansi pemerintah, rumah sakit, korporasi,
            dan lembaga kesehatan dalam misi mewujudkan Indonesia yang lebih sehat.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppButton message="Halo%2C+saya+tertarik+bermitra+dengan+ATM+Sehat">
              Hubungi via WhatsApp
            </WhatsAppButton>
            <Link
              href="/kontak"
              className="inline-flex items-center justify-center gap-2 bg-white/10 text-white font-semibold px-8 py-4 rounded-xl border border-white/30 hover:bg-white/20 transition-colors text-base"
            >
              Kirim Pesan
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
