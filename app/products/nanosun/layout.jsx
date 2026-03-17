import JsonLd, { nanosunPebSchema } from "@/components/seo/JsonLd"

export const metadata = {
  title: "NANOSUN™ PEB Circular Skylight | Natural Daylight for Metal Roofs",
  description: "NANOSUN PEB Circular Daylight — natural skylight system for PEB & metal sheet roofs. Sizes 200mm to 1200mm. 100–350 lux. UV-filtered, leak-proof, Made in India.",
  keywords: [
    "PEB skylight India",
    "circular daylight PEB roof",
    "polycarbonate dome skylight for factory",
    "natural light for metal roof shed",
    "circular skylight 750mm India",
    "energy saving PEB roof light",
    "NANOSUN skylight",
    "factory skylight India"
  ],
  openGraph: {
    title: "NANOSUN™ PEB Circular Skylight | Natural Daylight for Metal Roofs",
    description: "Natural skylight system for PEB & metal sheet roofs. Sizes 200mm to 1200mm. UV-filtered, leak-proof, Made in India.",
    images: ["/images/products/nanosun/PEB MODEL.png"],
  },
  alternates: {
    canonical: "https://udayiksa.com/products/nanosun",
  },
}

export default function NanosunLayout({ children }) {
  return (
    <>
      <JsonLd data={nanosunPebSchema} />
      {children}
    </>
  )
}
