import type { MetadataRoute } from "next";
import { BASE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date("2025-01-15"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date("2025-01-15"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/layanan`,
      lastModified: new Date("2025-01-15"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/kontak`,
      lastModified: new Date("2024-12-20"),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/kebijakan-privasi`,
      lastModified: new Date("2025-01-01"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/syarat-ketentuan`,
      lastModified: new Date("2025-01-01"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/cara-kerja`,
      lastModified: new Date("2025-01-15"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/kemitraan`,
      lastModified: new Date("2025-01-15"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  // Placeholder: replace with db/CMS fetch when dynamic routes exist
  const blogPosts: MetadataRoute.Sitemap = [];

  return [...staticRoutes, ...blogPosts];
}
