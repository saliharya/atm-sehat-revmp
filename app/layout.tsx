import type { Metadata } from "next";
import Script from "next/script";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BASE_URL, COMPANY_NAME, SUPPORT_PHONE } from "@/lib/constants";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "ATM Sehat – Kiosk Kesehatan IoT Terdepan di Indonesia",
    template: "%s | ATM Sehat",
  },
  description:
    "ATM Sehat adalah kiosk kesehatan digital berbasis IoT yang memudahkan cek kesehatan lengkap: tekanan darah, gula darah, kolesterol, asam urat, suhu, saturasi oksigen, dan konsultasi dokter online. Mulai dari Rp 5.000. Telah beroperasi di 9 provinsi Indonesia.",
  keywords: [
    "ATM Sehat",
    "kiosk kesehatan",
    "cek kesehatan digital",
    "telehealth Indonesia",
    "stasiun kesehatan",
    "konsultasi dokter online",
    "tekanan darah digital",
    "gula darah meter",
    "HELENA AI",
    "IoT kesehatan",
    "health kiosk Indonesia",
    "Tele Sehat Indonesia",
  ],
  authors: [{ name: COMPANY_NAME }],
  creator: COMPANY_NAME,
  publisher: COMPANY_NAME,
  openGraph: {
    title: "ATM Sehat – Kiosk Kesehatan Digital Terdepan",
    description:
      "Cek kesehatan lengkap dengan teknologi IoT: tekanan darah, gula darah, kolesterol, dan konsultasi dokter online. Dipercaya 500+ fasilitas kesehatan. Mulai Rp 5.000.",
    url: BASE_URL,
    siteName: "ATM Sehat",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ATM Sehat – Kiosk Kesehatan Digital",
    description:
      "Cek kesehatan mudah, cepat, terjangkau. Teknologi IoT untuk klinik, pabrik, apotek, posyandu. Telah beroperasi di 9 provinsi Indonesia.",
    creator: "@atm_sehat",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: BASE_URL,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "PT Tele Sehat Indonesia",
  alternateName: "ATM Sehat",
  url: BASE_URL,
  logo: `${BASE_URL}/og-image.jpg`,
  description:
    "Platform kesehatan digital berbasis IoT untuk layanan cek kesehatan dan konsultasi dokter online.",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: SUPPORT_PHONE,
    contactType: "Customer Service",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Tenant DIIB UI, Kampus UI",
    addressLocality: "Depok",
    addressRegion: "Jawa Barat",
    postalCode: "16424",
    addressCountry: "ID",
  },
  sameAs: [
    "https://www.instagram.com/atm_sehat/",
    "https://www.facebook.com/TelehealthIndonesia/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={`${geist.variable} scroll-smooth`}>
      <head>
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased bg-white text-slate-900">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
