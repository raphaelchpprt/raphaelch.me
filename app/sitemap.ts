import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://raphaelch.me",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://raphaelch.me/cv-Raphael-CHAPPERT_fullstack-developer_website.pdf",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: "https://raphaelch.me/cv-Raphael-CHAPPERT_fullstack-developer_website_en.pdf",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: "https://raphaelch.me/fr/notes/carbone-code-role-developpeur",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
        {
      url: "https://raphaelch.me/en/notes/carbone-code-role-developpeur",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
}
