import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://orbbt.app"
  return ["", "/privacy", "/terms", "/refund", "/delete-account"].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }))
}
