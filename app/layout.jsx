import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Uday IKSA - Natural Daylight & Ventilation Solutions",
  description:
    "Leading manufacturer of natural daylight and ventilation systems in India. Award-winning solutions for sustainable and healthy living environments.",
  icons: {
    icon: "/images/logo.png",
  },
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
