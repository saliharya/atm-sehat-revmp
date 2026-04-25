"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import FaqAccordion, { type FaqItem } from "../components/FaqAccordion";
import WhatsAppButton, { WA_URL } from "../components/WhatsAppButton";

const contactOptions = [
  {
    icon: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0zM12 10h.01",
    title: "Temukan Stasiun",
    desc: "Cari ATM Sehat terdekat di kota Anda.",
    action: "Tanya via WhatsApp",
    href: WA_URL,
    external: true,
    color: "sky",
  },
  {
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
    title: "Kemitraan",
    desc: "Pasang ATM Sehat di lokasi Anda — klinik, kantor, atau instansi.",
    action: "Diskusi Kemitraan",
    href: "#form",
    external: false,
    color: "emerald",
  },
  {
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
    title: "Dukungan Teknis",
    desc: "Bantuan teknis untuk pengguna dan mitra ATM Sehat.",
    action: "Chat WhatsApp",
    href: "https://wa.me/6282348371262?text=Halo%2C+saya+butuh+bantuan+teknis+ATM+Sehat",
    external: true,
    color: "violet",
  },
];

const faqItems: FaqItem[] = [
  {
    q: "Bagaimana cara masuk ke aplikasi TEA ATM Sehat?",
    a: (
      <>
        Klik menu <strong>Sign In by Google</strong>, kemudian pilih &ldquo;Terima&rdquo; dan tunggu hingga alamat email muncul, lalu pilih akun Anda. Untuk pengguna iOS, akses melalui browser di{" "}
        <a href="https://atm-sehat.tsi.co.id" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">
          atm-sehat.tsi.co.id
        </a>{" "}
        menggunakan email yang sudah terdaftar.
      </>
    ),
  },
  {
    q: "Apakah wajib verifikasi data setelah masuk pertama kali?",
    a: (
      <>
        <strong>Tidak.</strong> Pengguna dapat langsung melakukan pemeriksaan dengan klik menu <em>Connect to ATM Health</em>, kemudian pilih <em>&ldquo;Understand, will continue / Paham dan lanjutkan&rdquo;</em> di bawah menu verifikasi.
      </>
    ),
  },
  {
    q: "Seberapa akurat pengukuran ATM Sehat?",
    a: (
      <>
        Rata-rata akurasi ATM Sehat adalah <strong>95%</strong>. ATM Sehat menggunakan alat bermerek (Omron untuk tensi, Andesfit untuk gula darah) yang telah tersertifikasi izin edar Kemenkes RI. Semua alat dikalibrasi ulang setiap satu tahun sekali.
      </>
    ),
  },
  {
    q: "Apakah alat kesehatan ATM Sehat sudah ada izin dari Kemenkes?",
    a: (
      <>
        Ya, semua alat memiliki izin edar resmi Kemenkes RI:
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
          {[
            { name: "Tensi (Omron)", num: "AKL 20501220368" },
            { name: "Timbangan", num: "AKL 10901220081" },
            { name: "Termometer", num: "AKL 20901028159" },
            { name: "Oximeter", num: "AKL 20502121110" },
            { name: "Tinggi Badan", num: "FR.03.04/IVA/01588/2023" },
          ].map((c) => (
            <div key={c.name} className="bg-slate-50 rounded-lg px-3 py-2">
              <p className="text-xs font-bold text-slate-700">{c.name}</p>
              <p className="text-xs font-mono text-slate-500">{c.num}</p>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    q: "Apakah ATM Sehat bisa digunakan tanpa koneksi internet?",
    a: (
      <>
        <strong>Tidak bisa.</strong> ATM Sehat memerlukan koneksi internet aktif untuk menyimpan dan mensinkronisasi data ke cloud. Pastikan koneksi internet tersedia di lokasi pemasangan. Tim kami dapat membantu menyediakan solusi koneksi.
      </>
    ),
  },
  {
    q: "Bagaimana jika tensi atau timbangan tidak terhubung?",
    a: (
      <>
        Periksa koneksi Bluetooth pada tensi dan timbangan. Jika masih tidak tersambung, lakukan <strong>pairing ulang Bluetooth</strong>. Jika gagal pairing, restart smartphone/tablet terlebih dahulu lalu ulangi proses pairing sesuai petunjuk. Hubungi tim support kami jika masalah berlanjut.
      </>
    ),
  },
  {
    q: "Berapa kali kalibrasi untuk alat ATM Sehat?",
    a: (
      <>
        Kalibrasi dilakukan <strong>satu tahun sekali</strong>. Alat akan dikirimkan ke tim ATM Sehat untuk dikalibrasi ulang. Hasil kalibrasi dibuatkan sertifikat resmi. Biaya kalibrasi ditanggung oleh klien.
      </>
    ),
  },
  {
    q: "Apakah alat perlu dicharge?",
    a: (
      <>
        Sebagian alat menggunakan <strong>baterai</strong> (tensi, oximeter, termometer, timbangan) dan sebagian perlu <strong>dicharge</strong> (HP/tablet, alat pengukur tinggi badan). Pastikan semua perangkat bertenaga cukup sebelum sesi pemeriksaan.
      </>
    ),
  },
  {
    q: "Bagaimana jika data tidak berhasil tersimpan?",
    a: "Keluar dari menu pemeriksaan, pastikan koneksi internet aktif, kemudian coba kembali. Jika masalah berlanjut, hubungi tim support kami melalui WhatsApp +62 823-4837-1262.",
  },
  {
    q: "Di mana saja ATM Sehat dapat digunakan?",
    a: (
      <>
        ATM Sehat dapat digunakan di: <strong>klinik, puskesmas, perkantoran, pabrik/industri, desa, posyandu, dan apotek</strong>. Saat ini sudah hadir di 24 kota di seluruh Indonesia. Kami juga bermitra dengan berbagai pemda dan puskesmas.
      </>
    ),
  },
  {
    q: "Apa saja menu yang tersedia selain cek kesehatan?",
    a: (
      <>
        Selain 8 parameter cek kesehatan, ATM Sehat juga menyediakan: <strong>telekonsultasi dengan dokter</strong>, panggilan darurat (ambulans), pembelian alat kesehatan (health e-commerce), dan informasi kesehatan dari Kemenkes RI.
      </>
    ),
  },
  {
    q: "Apa keunggulan ATM Sehat dibanding alat lainnya?",
    a: (
      <>
        Keunggulan utama ATM Sehat: data dari hasil cek kesehatan <strong>langsung tersimpan di aplikasi pasien</strong> secara otomatis. Tidak ada data yang hilang, riwayat kesehatan bisa dipantau dokter dari mana saja melalui TEA App.
      </>
    ),
  },
  {
    q: "Bagaimana indikator modem saat menyala/mati?",
    a: (
      <ul className="list-disc pl-5 space-y-1">
        <li><strong>Lampu hijau menyala</strong> — modem dalam keadaan hidup normal ✓</li>
        <li><strong>Lampu merah menyala</strong> — modem dalam keadaan mati, perlu dinyalakan kembali</li>
      </ul>
    ),
  },
  {
    q: "Bagaimana cara memasang ATM Sehat di klinik atau kantor?",
    a: (
      <>
        Tim kami akan menghubungi Anda dalam 1×24 jam setelah pemesanan. Instalasi dilakukan oleh teknisi berpengalaman, selesai dalam <strong>30 menit</strong>. Kami juga menyediakan pelatihan singkat untuk staf. Pengiriman dan instalasi memakan waktu 3–7 hari kerja setelah pembayaran dikonfirmasi.
      </>
    ),
  },
  {
    q: "Bagaimana proses pembelian atau penyewaan alat?",
    a: (
      <>
        Kami menawarkan dua opsi: <strong>beli putus</strong> atau <strong>sewa bulanan</strong>. Hubungi tim sales kami via WhatsApp untuk konsultasi gratis. Tersedia cicilan 0% untuk pembelian unit. Hubungi:{" "}
        <a href="https://wa.me/6282348371262" className="text-sky-600 hover:underline">+62 823-4837-1262</a> (Sigit)
      </>
    ),
  },
  {
    q: "Apakah data pasien aman dan terlindungi?",
    a: "Ya. Semua data dienkripsi dan disimpan di server lokal Indonesia. Kami mematuhi regulasi Perlindungan Data Pribadi (PDP). Data pasien tidak pernah dijual atau dibagikan ke pihak ketiga tanpa izin.",
  },
];

export default function KontakPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", category: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1200);
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
          <span className="inline-block text-sky-300 font-semibold text-sm uppercase tracking-wider mb-4">Hubungi Kami</span>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-5">Kami Siap Membantu Anda</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Tanya tentang stasiun terdekat, kemitraan, atau dukungan teknis.
            Tim kami merespons dalam <span className="text-white font-semibold">2 jam kerja</span> via WhatsApp atau email.
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
                target={opt.external ? "_blank" : undefined}
                rel={opt.external ? "noopener noreferrer" : undefined}
                className="group bg-slate-50 rounded-2xl p-7 border border-slate-100 card-hover flex flex-col"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors ${
                  opt.color === "sky" ? "bg-sky-50 text-sky-600 group-hover:bg-sky-100"
                  : opt.color === "emerald" ? "bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100"
                  : "bg-violet-50 text-violet-600 group-hover:bg-violet-100"
                }`}>
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
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Kirim Pesan Anda</h2>
              <p className="text-slate-500 mb-8">⏱ Tim kami merespons dalam <strong>maksimal 2 jam kerja</strong>. Untuk pertanyaan urgent, hubungi via WhatsApp.</p>

              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-10 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-5">
                    <svg className="w-8 h-8 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M9 12l2 2 4-4" /><circle cx="12" cy="12" r="10" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-emerald-900 mb-3">Pesan Terkirim!</h3>
                  <p className="text-emerald-700 mb-6">
                    Terima kasih telah menghubungi kami. Tim ATM Sehat akan membalas dalam 1–2 hari kerja.
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
                      <input id="name" type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Masukkan nama lengkap" className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent bg-white transition" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                        Email <span className="text-rose-500">*</span>
                      </label>
                      <input id="email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="nama@email.com" className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent bg-white transition" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">Nomor Telepon</label>
                      <input id="phone" type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+62 812 xxxx xxxx" className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent bg-white transition" />
                    </div>
                    <div>
                      <label htmlFor="category" className="block text-sm font-medium text-slate-700 mb-2">
                        Kategori <span className="text-rose-500">*</span>
                      </label>
                      <select id="category" required value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent bg-white transition appearance-none">
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
                    <textarea id="message" required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Ceritakan kebutuhan atau pertanyaan Anda..." className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent bg-white transition resize-none" />
                  </div>

                  <button type="submit" disabled={loading} className="w-full bg-sky-600 text-white font-semibold py-3.5 px-6 rounded-xl hover:bg-sky-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                    {loading ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                        </svg>
                        Mengirim...
                      </>
                    ) : "Kirim Pesan"}
                  </button>
                  <p className="text-xs text-slate-400 text-center">
                    Dengan mengirim pesan, Anda menyetujui{" "}
                    <Link href="/kontak" className="text-sky-600 hover:underline">Kebijakan Privasi</Link>{" "}kami.
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
                    { icon: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0zM12 10h.01", label: "Alamat", value: "Tenant DIIB UI, Kampus Universitas Indonesia, Depok, Jawa Barat" },
                    { icon: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zM22 6l-10 7L2 6", label: "Email", value: "info@atm-sehat.com" },
                    { icon: "M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.06 1.22 2 2 0 012.06 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z", label: "Telepon", value: "+62 823-4837-1262 (Sigit)" },
                    { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", label: "Jam Operasional", value: "Senin–Jumat, 09.00–17.00 WIB · WhatsApp 24/7" },
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

              {/* WhatsApp quick contact */}
              <WhatsAppButton className="w-full justify-center">
                Chat Langsung di WhatsApp
              </WhatsAppButton>

              <div className="bg-gradient-to-br from-sky-600 to-emerald-600 rounded-2xl p-7 text-white">
                <h3 className="font-semibold text-lg mb-2">Pasang ATM Sehat di Lokasi Anda</h3>
                <p className="text-white/85 text-sm leading-relaxed mb-5">
                  Bergabunglah dengan ratusan unit yang telah terpasang di 9 provinsi. Ideal untuk klinik, RS, kantor, universitas, dan area publik.
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
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Pertanyaan yang Sering Ditanyakan</h2>
            <p className="text-slate-500">
              Tidak menemukan jawaban?{" "}
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="text-sky-600 font-semibold hover:underline">
                Tanya langsung via WhatsApp →
              </a>
            </p>
          </div>

          <FaqAccordion items={faqItems} />
        </div>
      </section>
    </>
  );
}
