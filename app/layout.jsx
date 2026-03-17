import { Inter, Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import JsonLd, { organizationSchema, localBusinessSchema, websiteSchema } from "@/components/seo/JsonLd"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
})

const siteUrl = "https://udayiksa.com"

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Natural Daylighting & Ventilation Systems | Uday IKSA",
    template: "%s | Uday IKSA"
  },
  description: "NANOSUN™ & NANOVENT® — India's leading natural daylighting and ventilation systems. Trusted by Caterpillar, Berger Paints, Indian Railways & 46 clients across 14 states.",
  keywords: [
    // Primary Keywords (High Intent)
    "natural skylight for factory",
    "tubular daylighting system India",
    "natural daylight system manufacturer India",
    "NANOSUN daylighting",
    "polycarbonate skylight for PEB shed",
    "skylight for warehouse India",
    "natural light panel for factory roof",
    "SKYTUBE tubular daylight",
    // Secondary Keywords (Research Phase)
    "tubular skylight vs dome skylight",
    "daylighting system cost India",
    "polycarbonate dome skylight India",
    "energy saving roof light India",
    "natural light for PEB roof",
    "RCC roof skylight India",
    "circular skylight for flat roof",
    // Long-tail Keywords
    "skylight manufacturer Karnataka",
    "natural daylighting company Hubballi",
    "PEB skylight manufacturer India",
    "NANOVENT turbo ventilator"
  ],
  authors: [{ name: "Uday IKSA Pvt Ltd" }],
  creator: "Uday IKSA Pvt Ltd",
  publisher: "Uday IKSA Pvt Ltd",
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Uday IKSA Pvt Ltd",
    title: "Natural Daylighting & Ventilation Systems | Uday IKSA",
    description: "NANOSUN™ & NANOVENT® — Trusted by Caterpillar, Berger Paints & Indian Railways. 1,900+ units across 14 states.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Factory with NANOSUN installed and natural light streaming in",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Natural Daylighting & Ventilation Systems | Uday IKSA",
    description: "NANOSUN™ & NANOVENT® — Trusted by Caterpillar, Berger Paints & Indian Railways. 1,900+ units across 14 states.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add these when you have accounts set up
    // google: "your-google-verification-code",
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "Industrial Equipment",
  generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakartaSans.variable}`}>
      <head>
        <JsonLd data={organizationSchema} />
        <JsonLd data={localBusinessSchema} />
        <JsonLd data={websiteSchema} />
      </head>
      <body className="font-sans antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
