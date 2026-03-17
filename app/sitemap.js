export default function sitemap() {
  const baseUrl = "https://udayiksa.com"

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/awards`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/governance`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ]

  // Product pages
  const productPages = [
    "nanosun",
    "nanosun-rcc",
    "nanosun-tiles",
    "nanosun-false-ceiling",
    "nanovent",
    "skytube",
    "skytube-angled",
    "skylight",
  ].map((product) => ({
    url: `${baseUrl}/products/${product}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  }))

  // Project pages by sector
  const projectPages = [
    "industrial",
    "commercial",
    "psu",
    "hospitality",
    "institutional",
  ].map((sector) => ({
    url: `${baseUrl}/projects/${sector}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  }))

  return [...staticPages, ...productPages, ...projectPages]
}
