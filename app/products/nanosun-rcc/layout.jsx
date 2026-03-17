import JsonLd, { nanosunRccSchema } from "@/components/seo/JsonLd"

export const metadata = {
  title: "NANOSUN™ RCC Circular Skylight | Natural Daylight for Flat Roofs",
  description: "Natural skylight for RCC & concrete flat roofs. NANOSUN RCC — 200mm to 1200mm, up to 400 lux output. UV-filtered polycarbonate dome. Designed for Indian flat roof buildings.",
  keywords: [
    "skylight for flat roof India",
    "RCC roof natural light",
    "polycarbonate skylight concrete roof",
    "flat roof daylight system India",
    "circular skylight RCC building",
    "natural light for apartment terrace",
    "NANOSUN RCC"
  ],
  openGraph: {
    title: "NANOSUN™ RCC Circular Skylight | Natural Daylight for Flat Roofs",
    description: "Natural skylight for RCC & concrete flat roofs. 200mm to 1200mm, up to 400 lux. UV-filtered, Made in India.",
  },
  alternates: {
    canonical: "https://udayiksa.com/products/nanosun-rcc",
  },
}

export default function NanosunRccLayout({ children }) {
  return (
    <>
      <JsonLd data={nanosunRccSchema} />
      {children}
    </>
  )
}
