import JsonLd, { skytubeSchema } from "@/components/seo/JsonLd"

export const metadata = {
  title: "NANOSUN™ SKYTUBE | Tubular Daylight Strip for Factories & Warehouses",
  description: "SKYTUBE Tabular Daylight — rectangular natural light strips for factory bays & warehouses. 280mm to 680mm wide, up to 4500mm long, 600 lux output. Zero electricity during day.",
  keywords: [
    "tubular daylighting system factory India",
    "warehouse natural lighting strip India",
    "PEB bay lighting system",
    "industrial skylight strip",
    "SKYTUBE tabular daylight",
    "factory roof light panel"
  ],
  openGraph: {
    title: "NANOSUN™ SKYTUBE | Tubular Daylight Strip for Factories",
    description: "Rectangular natural light strips for factory bays & warehouses. Up to 4500mm long, 600 lux output. Zero electricity.",
  },
  alternates: {
    canonical: "https://udayiksa.com/products/skytube",
  },
}

export default function SkytubeLayout({ children }) {
  return (
    <>
      <JsonLd data={skytubeSchema} />
      {children}
    </>
  )
}
