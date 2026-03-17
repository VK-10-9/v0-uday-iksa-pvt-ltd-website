import JsonLd, { faqSchema } from "@/components/seo/JsonLd"

export const metadata = {
  title: "FAQ | Natural Daylighting & Ventilation — Uday IKSA",
  description: "Answers to your questions about NANOSUN natural daylighting — heat, UV, installation, lux output, maintenance, ROI & more. Get clarity before you decide.",
  keywords: [
    "natural skylight FAQ India",
    "NANOSUN questions",
    "daylighting system FAQ",
    "skylight installation questions",
    "factory lighting FAQ",
    "does skylight bring heat"
  ],
  openGraph: {
    title: "FAQ | Natural Daylighting & Ventilation — Uday IKSA",
    description: "Answers about NANOSUN daylighting — heat, UV, installation, lux output, maintenance, ROI & more.",
  },
  alternates: {
    canonical: "https://udayiksa.com/faq",
  },
}

export default function FAQLayout({ children }) {
  return (
    <>
      <JsonLd data={faqSchema} />
      {children}
    </>
  )
}
