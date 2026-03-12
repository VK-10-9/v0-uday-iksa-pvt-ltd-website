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
    <section className="relative h-screen min-h-[700px] overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex flex-col justify-center pt-24 md:pt-28 pb-8">
      <HeroBackground mousePosition={mousePosition} />

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 lg:px-12 h-full flex items-center">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-8 lg:gap-12 items-center w-full">
          {/* Left Side: Content */}
          <div className="space-y-6 md:space-y-8">
            <div className="flex justify-start">
              <AwardBadge />
            </div>
            <HeroHeading />
            <div className="flex justify-start">
              <HeroStats />
            </div>
          </div>

          {/* Right Side: Product Showcase */}
          <div className="w-full flex flex-col justify-center">
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
