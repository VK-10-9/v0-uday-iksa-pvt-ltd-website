"use client"

import { useState } from "react"
import { useMouseTracking } from "@/hooks/useMouseTracking"
import { useProductRotation } from "@/hooks/useProductRotation"
import { products } from "@/lib/data/products"
import HeroBackground from "@/components/hero/HeroBackground"
import AwardBadge from "@/components/hero/AwardBadge"
import HeroHeading from "@/components/hero/HeroHeading"
import HeroStats from "@/components/hero/HeroStats"
import ProductShowcase from "@/components/hero/ProductShowcase"

export default function HeroSection() {
  const [hoveredProduct, setHoveredProduct] = useState(null)
  const mousePosition = useMouseTracking()
  const [activeProduct, setActiveProduct] = useProductRotation(products.length)

  return (
    <section className="relative min-h-[85vh] md:min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center py-20 md:py-32">
      <HeroBackground mousePosition={mousePosition} />

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col items-center text-center space-y-10 md:space-y-16">
          {/* Header Area */}
          <div className="max-w-4xl space-y-10">
            <div className="flex justify-center">
              <AwardBadge />
            </div>
            <HeroHeading />
            <div className="flex justify-center">
              <HeroStats />
            </div>
          </div>

          {/* Centered Product Showcase */}
          <div className="w-full max-w-5xl">
            <ProductShowcase
              activeProduct={activeProduct}
              setActiveProduct={setActiveProduct}
              hoveredProduct={hoveredProduct}
              setHoveredProduct={setHoveredProduct}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
