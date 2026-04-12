import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://studio-nodo.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date("2025-12-01"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
