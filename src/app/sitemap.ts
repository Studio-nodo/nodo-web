import { MetadataRoute } from "next";

export const dynamic = "force-dynamic";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://studio-nodo.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
