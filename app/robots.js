export default function robots() {
  const baseUrl = "https://udayiksa.com"

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/private/", "/_next/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
