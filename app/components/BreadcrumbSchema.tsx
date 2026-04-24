import JsonLd from "./JsonLd";
import Link from "next/link";

type BreadcrumbItem = {
  name: string;
  href: string;
};

type BreadcrumbSchemaProps = {
  items: BreadcrumbItem[];
};

export default function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const BASE_URL = "https://atm-sehat.com";

  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map(({ name, href }, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name,
      item: `${BASE_URL}${href}`,
    })),
  };

  return (
    <>
      <JsonLd data={data} />
      <nav aria-label="Breadcrumb">
        <ol className="flex items-center gap-1.5 text-sm text-slate-500">
          {items.map(({ name, href }, index) => (
            <li key={href} className="flex items-center gap-1.5">
              {index > 0 && (
                <svg
                  className="w-3.5 h-3.5 text-slate-300 shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              )}
              {index === items.length - 1 ? (
                <span className="text-slate-900 font-medium" aria-current="page">
                  {name}
                </span>
              ) : (
                <Link
                  href={href}
                  className="hover:text-sky-600 transition-colors"
                >
                  {name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
