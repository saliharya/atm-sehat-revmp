import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

// Placeholder content map — replace with CMS/db fetch
const pages: Record<string, { title: string; description: string; body: string }> = {
  "cara-kerja": {
    title: "Cara Kerja ATM Sehat",
    description:
      "Pelajari cara kerja stasiun kesehatan ATM Sehat — dari pemasangan alat hingga hasil pemeriksaan dalam 5 menit.",
    body: "ATM Sehat beroperasi melalui 4 langkah sederhana: pasang alat, cek mandiri, rekam data otomatis, dan konsultasi dokter via TEA App.",
  },
  "kemitraan": {
    title: "Kemitraan ATM Sehat",
    description:
      "Bergabunglah sebagai mitra ATM Sehat dan hadirkan layanan kesehatan berkualitas di lingkungan Anda.",
    body: "ATM Sehat terbuka untuk kemitraan dengan klinik, pabrik, apotek, posyandu, dan institusi pemerintah.",
  },
};

export function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = pages[slug];

  if (!page) return {};

  return buildMetadata({
    title: page.title,
    description: page.description,
    path: `/${slug}`,
  });
}

export default async function DynamicPage({ params }: Props) {
  const { slug } = await params;
  const page = pages[slug];

  if (!page) notFound();

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <h1 className="text-4xl font-bold text-slate-900 mb-6">{page.title}</h1>
      <p className="text-lg text-slate-600 leading-relaxed">{page.body}</p>
    </main>
  );
}
