import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/records-to-demand", "/conversation", "/privacy"].map(
    (path) => ({ url: `https://www.catenaos.com${path}` }),
  );
}
