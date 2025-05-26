"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { products } from "@/lib/data/products"
import ProductCard from "./ProductCard"
import ProductHoverCard from "./ProductHoverCard"

export default function ProductShowcase({ activeProduct, setActiveProduct, hoveredProduct, setHoveredProduct }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.8, duration: 1 }}
      className="space-y-8"
    >
      <div className="text-center lg:text-left">
        <motion.h2 className="text-4xl font-bold brand-gradient-text mb-4">Innovation Portfolio</motion.h2>
        <p className="text-gray-400 text-lg">Hover to explore our revolutionary solutions</p>
      </div>

      {/* Product Progress Indicator */}
      <div className="flex gap-2 justify-center lg:justify-start">
        {products.map((_, index) => (
          <motion.div
            key={index}
            className={`h-1 rounded-full transition-all duration-300 ${
              activeProduct === index ? "w-8 bg-brand-purple-500" : "w-4 bg-gray-600"
            }`}
            whileHover={{ scale: 1.2 }}
            onClick={() => setActiveProduct(index)}
          />
        ))}
      </div>

      {/* Product Cards */}
      <div className="space-y-4">
        {products.map((product, index) => (
          <div key={product.id} className="relative">
            <ProductCard
              product={product}
              index={index}
              activeProduct={activeProduct}
              setActiveProduct={setActiveProduct}
              setHoveredProduct={setHoveredProduct}
            />
            <ProductHoverCard product={product} hoveredProduct={hoveredProduct} />
          </div>
        ))}
      </div>

      {/* View All Link */}
      <motion.div
        className="text-center pt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
      >
        <Link href="/innovations" className="text-gray-400 hover:text-white transition-colors group relative">
          <motion.span className="absolute inset-0 bg-gradient-to-r from-brand-purple-500/20 to-brand-teal-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
          <span className="relative z-10 inline-flex items-center gap-2 px-4 py-2">
            View all innovations
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </span>
        </Link>
      </motion.div>
    </motion.div>
  )
}
