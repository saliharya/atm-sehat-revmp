import type { Metadata } from "next";

const BASE_URL = "https://atm-sehat.com";

export function buildCanonical(path: string): string {
  const normalised = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_URL}${normalised}`;
}

export function buildOgImage(imagePath: string = "/og-image.jpg"): string {
  const normalised = imagePath.startsWith("/") ? imagePath : `/${imagePath}`;
  return `${BASE_URL}${normalised}`;
}

type BuildMetadataOptions = {
  title: string;
  description: string;
  path: string;
  ogImagePath?: string;
};

export function buildMetadata({
  title,
  description,
  path,
  ogImagePath,
}: BuildMetadataOptions): Metadata {
  const canonical = buildCanonical(path);
  const ogImage = buildOgImage(ogImagePath);

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}
