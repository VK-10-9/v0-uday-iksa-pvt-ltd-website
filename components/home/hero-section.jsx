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
    <section className="relative min-h-screen flex flex-col justify-start overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 pt-[120px] md:pt-[160px] pb-20">
      <HeroBackground mousePosition={mousePosition} />

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col">
        {/* Award Marker - Positioned high and clear */}
        <div className="flex justify-start mb-8 md:mb-12">
          <AwardBadge />
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-start">
          
          {/* Left Side: Product Story */}
          <div className="space-y-12 md:space-y-16 w-full order-1">
            <HeroHeading />
            
            {/* Desktop Stats - Integrated into flow */}
            <div className="hidden lg:block">
              <HeroStats />
            </div>
          </div>

          {/* Right Side: Visual Showcase */}
          <div className="w-full order-2 flex flex-col">
            <ProductShowcase
              activeProduct={activeProduct}
              setActiveProduct={setActiveProduct}
              hoveredProduct={hoveredProduct}
              setHoveredProduct={setHoveredProduct}
            />
            
            {/* Mobile Stats - Positioned below showcase */}
            <div className="mt-12 lg:hidden">
              <HeroStats />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
