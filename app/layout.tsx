import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const BASE_URL = "https://atm-sehat.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "ATM Sehat – Cek Kesehatan Semudah Cek Saldo",
    template: "%s | ATM Sehat",
  },
  description:
    "ATM Sehat adalah platform kesehatan digital berbasis IoT terdepan di Indonesia. Cek tekanan darah, gula darah, kolesterol, dan konsultasi dokter online — kapan saja, di mana saja.",
  keywords: [
    "ATM Sehat",
    "telehealth Indonesia",
    "kiosk kesehatan",
    "cek kesehatan",
    "konsultasi dokter online",
    "Tele Sehat Indonesia",
    "HELENA AI",
    "IoT kesehatan",
    "health kiosk",
  ],
  authors: [{ name: "PT Tele Sehat Indonesia" }],
  creator: "PT Tele Sehat Indonesia",
  publisher: "PT Tele Sehat Indonesia",
  openGraph: {
    title: "ATM Sehat – Telehealth for Everyone",
    description:
      "Layanan cek kesehatan lengkap dan konsultasi dokter online yang mudah diakses oleh seluruh masyarakat Indonesia.",
    url: BASE_URL,
    siteName: "ATM Sehat",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ATM Sehat – Anjungan Telehealth Masyarakat Sehat",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ATM Sehat – Telehealth for Everyone",
    description:
      "Layanan cek kesehatan lengkap dan konsultasi dokter online yang mudah diakses oleh seluruh masyarakat Indonesia.",
    images: ["/og-image.jpg"],
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

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={`${geist.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col antialiased bg-white text-slate-900">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
