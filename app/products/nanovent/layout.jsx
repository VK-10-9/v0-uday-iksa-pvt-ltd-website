import JsonLd, { nanoventSchema } from "@/components/seo/JsonLd"

export const metadata = {
  title: "NANOVENT® Natural Turbo Ventilator | Wind-Powered Roof Ventilation",
  description: "NANOVENT® — India's registered natural turbo ventilator. Wind-powered, zero electricity, zero maintenance. Stainless steel options. For factories, warehouses & industrial buildings.",
  keywords: [
    "natural turbo ventilator India",
    "roof ventilator for factory India",
    "wind-powered ventilator industrial",
    "turbo ventilator manufacturer Karnataka",
    "natural ventilation system PEB shed",
    "SS304 turbo ventilator price India",
    "NANOVENT ventilator"
  ],
  openGraph: {
    title: "NANOVENT® Natural Turbo Ventilator | Wind-Powered Roof Ventilation",
    description: "India's registered natural turbo ventilator. Wind-powered, zero electricity, zero maintenance. Made in India.",
  },
  alternates: {
    canonical: "https://udayiksa.com/products/nanovent",
  },
}

export default function NanoventLayout({ children }) {
  return (
    <>
      <JsonLd data={nanoventSchema} />
      {children}
    </>
  )
}
