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
    <section className="relative min-h-screen flex flex-col justify-center py-20 lg:py-0 lg:h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 pt-24 md:pt-28 pb-8">
      <HeroBackground mousePosition={mousePosition} />

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 lg:px-12 h-auto lg:h-full flex items-center">
        <div className="flex flex-col lg:grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-12 items-center w-full">
          
          {/* Top: Award & Heading (Desktop Left, Mobile Top) */}
          <div className="space-y-6 md:space-y-8 w-full order-1">
            <div className="flex justify-start">
              <AwardBadge />
            </div>
            <HeroHeading />
          </div>

          {/* Center: Product Showcase (Desktop Right, Mobile Center) */}
          <div className="w-full flex flex-col justify-center order-2">
            <ProductShowcase
              activeProduct={activeProduct}
              setActiveProduct={setActiveProduct}
              hoveredProduct={hoveredProduct}
              setHoveredProduct={setHoveredProduct}
            />
          </div>

          {/* Bottom: Stats (Desktop Left Bottom, Mobile Bottom) */}
          <div className="w-full flex justify-start order-3 lg:absolute lg:bottom-12 lg:left-12 lg:max-w-2xl px-0 lg:px-0">
            <HeroStats />
          </div>
        </div>
      </div>
    </section>
  )
}
