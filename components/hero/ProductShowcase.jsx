"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { products } from "@/lib/data/products"

export default function ProductShowcase({ activeProduct, setActiveProduct, hoveredProduct, setHoveredProduct }) {
  const currentProduct = products[activeProduct]

  return (
    <div className="relative space-y-12">
      {/* Featured Image Frame */}
      <motion.div
        className="relative h-[480px] w-full rounded-3xl overflow-hidden brand-glass-premium border-2 border-brand-orange-500/30 group"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProduct}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.7 }}
            className="absolute inset-0"
          >
            <Image
              src={currentProduct.image}
              alt={currentProduct.name}
              fill
              priority
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent`} />
          </motion.div>
        </AnimatePresence>

        {/* Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-10 z-20">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            key={`info-${activeProduct}`}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-4">
              <h3 className="text-4xl font-black text-white tracking-tight">{currentProduct.name}</h3>
              <span className={`px-4 py-1.5 rounded-full text-xs font-bold bg-gradient-to-r ${currentProduct.color} text-white uppercase tracking-widest`}>
                {currentProduct.subtitle}
              </span>
            </div>
            <p className="text-gray-200 text-lg max-w-lg leading-relaxed">{currentProduct.description}</p>
            <div className="flex gap-6 pt-2">
              <div className="space-y-1">
                <span className="text-brand-orange-400 text-xs font-bold uppercase tracking-widest">Efficiency</span>
                <p className="text-white font-bold text-lg">{currentProduct.stats}</p>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="space-y-1">
                <span className="text-brand-amber-400 text-xs font-bold uppercase tracking-widest">Core Benefit</span>
                <p className="text-white font-bold text-lg">{currentProduct.benefit}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Product Selection Pills */}
      <div className="flex flex-wrap gap-4 justify-center">
        {products.map((product, index) => (
          <motion.button
            key={product.id}
            onClick={() => setActiveProduct(index)}
            className={`px-8 py-4 rounded-2xl font-bold transition-all duration-500 flex items-center gap-3 ${activeProduct === index
              ? "bg-brand-orange-500 text-white shadow-xl shadow-brand-orange-500/30 scale-105"
              : "bg-white/5 text-gray-400 hover:bg-white/10 border border-white/5"
              }`}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className={`w-2 h-2 rounded-full ${activeProduct === index ? "bg-white" : "bg-gray-600"} ${activeProduct === index ? "animate-pulse" : ""}`} />
            {product.name}
          </motion.button>
        ))}
      </div>
    </div>
  )
}
