"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";

const contactOptions = [
  {
    icon: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0zM12 10h.01",
    title: "Temukan Stasiun",
    desc: "Cari ATM Sehat terdekat di kota Anda.",
    action: "Lihat Peta",
    href: "#form",
    color: "sky",
  },
  {
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
    title: "Kemitraan",
    desc: "Pasang ATM Sehat di lokasi Anda — klinik, kantor, atau instansi.",
    action: "Diskusi Kemitraan",
    href: "#form",
    color: "emerald",
  },
  {
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
    title: "Dukungan Teknis",
    desc: "Bantuan teknis untuk pengguna dan mitra ATM Sehat.",
    action: "Hubungi Support",
    href: "mailto:info@atm-sehat.com",
    color: "violet",
  },
];

const faq = [
  {
    q: "Di mana saja ATM Sehat tersedia?",
    a: "ATM Sehat saat ini tersedia di 9 provinsi Indonesia, termasuk DKI Jakarta, Jawa Barat, Jawa Tengah, Jawa Timur, dan beberapa provinsi lainnya. Hubungi kami untuk mengetahui lokasi terdekat di kota Anda.",
  },
  {
    q: "Berapa biaya menggunakan ATM Sehat?",
    a: "Biaya layanan mulai dari Rp 5.000 untuk pemeriksaan dasar seperti tekanan darah dan suhu tubuh. Paket komprehensif tersedia mulai Rp 50.000. Beberapa lokasi juga menyediakan layanan gratis bekerja sama dengan instansi kesehatan setempat.",
  },
  {
    q: "Apakah data kesehatan saya aman?",
    a: "Ya, keamanan data adalah prioritas utama kami. Semua data kesehatan dienkripsi dan disimpan dalam sistem yang memenuhi standar keamanan data kesehatan nasional. Data Anda tidak dibagikan kepada pihak ketiga tanpa izin Anda.",
  },
  {
    q: "Bagaimana cara mengakses hasil pemeriksaan di aplikasi?",
    a: "Unduh aplikasi ATM Sehat di Google Play Store, daftarkan akun Anda, dan gunakan kode unik saat pemeriksaan. Hasil akan otomatis tersinkronisasi ke aplikasi melalui sistem IOMT kami.",
  },
  {
    q: "Apakah saya perlu registrasi sebelumnya?",
    a: "Tidak wajib, namun registrasi direkomendasikan agar hasil pemeriksaan tersimpan dan terhubung ke profil kesehatan Anda. Tanpa registrasi, Anda tetap bisa menggunakan layanan dan mencetak hasil di tempat.",
  },
  {
    q: "Bagaimana cara bermitra dengan ATM Sehat?",
    a: "Isi formulir kontak di bawah dengan memilih kategori 'Kemitraan', dan tim kami akan menghubungi Anda dalam 1-2 hari kerja untuk mendiskusikan opsi penempatan dan skema kerja sama.",
  },
];

export default function KontakPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    // Simulate submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  }

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
            Kontak
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-5">
            Kami Siap Membantu Anda
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Hubungi tim ATM Sehat untuk pertanyaan, kemitraan, atau dukungan teknis.
            Kami merespons dalam 1–2 hari kerja.
          </p>
        </div>
        <div className="absolute bottom-0 inset-x-0">
          <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" className="w-full h-12" aria-hidden="true">
            <path d="M0 60L1440 60L1440 30C1200 60 960 0 720 30C480 60 240 0 0 30L0 60Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Contact options */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {contactOptions.map((opt) => (
              <a
                key={opt.title}
                href={opt.href}
                className={`group bg-slate-50 rounded-2xl p-7 border border-slate-100 card-hover flex flex-col`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors ${
                    opt.color === "sky"
                      ? "bg-sky-50 text-sky-600 group-hover:bg-sky-100"
                      : opt.color === "emerald"
                      ? "bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100"
                      : "bg-violet-50 text-violet-600 group-hover:bg-violet-100"
                  }`}
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d={opt.icon} />
                  </svg>
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{opt.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed flex-1 mb-4">{opt.desc}</p>
                <span className="text-sky-600 text-sm font-semibold group-hover:text-sky-700 flex items-center gap-1.5">
                  {opt.action}
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact form + Info */}
      <section id="form" className="py-16 lg:py-24 bg-slate-50 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Kirim Pesan</h2>
              <p className="text-slate-500 mb-8">
                Tim kami akan merespons dalam 1–2 hari kerja.
              </p>

              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-10 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-5">
                    <svg className="w-8 h-8 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M9 12l2 2 4-4" /><circle cx="12" cy="12" r="10" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-emerald-900 mb-3">Pesan Terkirim!</h3>
                  <p className="text-emerald-700 mb-6">
                    Terima kasih telah menghubungi kami. Tim ATM Sehat akan membalas pesan Anda
                    dalam 1–2 hari kerja.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", category: "", message: "" }); }}
                    className="text-emerald-700 font-semibold text-sm hover:text-emerald-900 transition-colors"
                  >
                    Kirim pesan lain
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                        Nama Lengkap <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Masukkan nama lengkap"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent bg-white transition"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                        Email <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="nama@email.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent bg-white transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                        Nomor Telepon
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+62 812 xxxx xxxx"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent bg-white transition"
                      />
                    </div>
                    <div>
                      <label htmlFor="category" className="block text-sm font-medium text-slate-700 mb-2">
                        Kategori <span className="text-rose-500">*</span>
                      </label>
                      <select
                        id="category"
                        required
                        value={form.category}
                        onChange={(e) => setForm({ ...form, category: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent bg-white transition appearance-none"
                      >
                        <option value="" disabled>Pilih kategori...</option>
                        <option value="lokasi">Temukan Stasiun</option>
                        <option value="kemitraan">Kemitraan / Penempatan Unit</option>
                        <option value="investasi">Investasi</option>
                        <option value="media">Media & Press</option>
                        <option value="teknis">Dukungan Teknis</option>
                        <option value="lainnya">Lainnya</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                      Pesan <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Ceritakan kebutuhan atau pertanyaan Anda..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent bg-white transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-sky-600 text-white font-semibold py-3.5 px-6 rounded-xl hover:bg-sky-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                        </svg>
                        Mengirim...
                      </>
                    ) : (
                      "Kirim Pesan"
                    )}
                  </button>
                  <p className="text-xs text-slate-400 text-center">
                    Dengan mengirim pesan, Anda menyetujui{" "}
                    <Link href="/kontak" className="text-sky-600 hover:underline">Kebijakan Privasi</Link>{" "}
                    kami.
                  </p>
                </form>
              )}
            </div>

            {/* Contact info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-2xl p-7 border border-slate-100">
                <h3 className="font-semibold text-slate-900 mb-6">Informasi Kontak</h3>
                <div className="space-y-5">
                  {[
                    {
                      icon: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0zM12 10h.01",
                      label: "Alamat",
                      value: "Depok, Jawa Barat, Indonesia",
                    },
                    {
                      icon: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zM22 6l-10 7L2 6",
                      label: "Email",
                      value: "info@atm-sehat.com",
                    },
                    {
                      icon: "M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.06 1.22 2 2 0 012.06 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z",
                      label: "Telepon",
                      value: "+62 21 0000 0000",
                    },
                    {
                      icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                      label: "Jam Operasional",
                      value: "Senin–Jumat, 08.00–17.00 WIB",
                    },
                  ].map((info) => (
                    <div key={info.label} className="flex items-start gap-4">
                      <div className="w-9 h-9 rounded-lg bg-sky-50 flex items-center justify-center shrink-0">
                        <svg className="w-4 h-4 text-sky-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d={info.icon} />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{info.label}</p>
                        <p className="text-sm text-slate-800 mt-0.5">{info.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-sky-600 to-emerald-600 rounded-2xl p-7 text-white">
                <h3 className="font-semibold text-lg mb-2">Pasang ATM Sehat di Lokasi Anda</h3>
                <p className="text-white/85 text-sm leading-relaxed mb-5">
                  Bergabunglah dengan 19+ institusi yang telah bermitra dengan kami.
                  Ideal untuk klinik, RS, kantor korporat, universitas, dan area publik.
                </p>
                <div className="space-y-2 text-sm text-white/90">
                  {["Pemasangan gratis", "Berbagi pendapatan", "Dukungan teknis penuh", "Branding co-location"].map((b) => (
                    <div key={b} className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-emerald-300 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M9 12l2 2 4-4" /><circle cx="12" cy="12" r="10" />
                      </svg>
                      {b}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">
              Pertanyaan yang Sering Ditanyakan
            </h2>
            <p className="text-slate-500">
              Tidak menemukan jawaban yang Anda cari? Hubungi tim kami langsung.
            </p>
          </div>

          <div className="space-y-3">
            {faq.map((item, i) => (
              <div
                key={i}
                className="border border-slate-200 rounded-2xl overflow-hidden"
              >
                <button
                  className="w-full flex items-center justify-between px-6 py-5 text-left text-sm font-semibold text-slate-900 hover:bg-slate-50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  <span className="pr-8">{item.q}</span>
                  <svg
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
