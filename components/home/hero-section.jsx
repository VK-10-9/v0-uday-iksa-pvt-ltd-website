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
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <HeroBackground mousePosition={mousePosition} />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 min-h-screen items-center py-20">
          {/* Left Column - Main Content */}
          <div className="space-y-12">
            <AwardBadge />
            <HeroHeading />
            <HeroStats />
          </div>

          {/* Right Column - Product Showcase */}
          <div className="relative">
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
