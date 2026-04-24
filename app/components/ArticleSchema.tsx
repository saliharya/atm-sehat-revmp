import JsonLd from "./JsonLd";

type ArticleSchemaProps = {
  headline: string;
  description: string;
  datePublished: string;
  dateModified: string;
  authorName: string;
  url: string;
  imageUrl?: string;
};

export default function ArticleSchema({
  headline,
  description,
  datePublished,
  dateModified,
  authorName,
  url,
  imageUrl,
}: ArticleSchemaProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    datePublished,
    dateModified,
    url,
    author: {
      "@type": "Person",
      name: authorName,
    },
    publisher: {
      "@type": "Organization",
      name: "PT Tele Sehat Indonesia",
      logo: {
        "@type": "ImageObject",
        url: "https://atm-sehat.com/logo.png",
      },
    },
    ...(imageUrl && {
      image: {
        "@type": "ImageObject",
        url: imageUrl,
        width: 1200,
        height: 630,
      },
    }),
  };

  return <JsonLd data={data} />;
}
