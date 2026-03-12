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
        className="relative h-[250px] sm:h-[300px] md:h-[380px] w-full rounded-3xl overflow-hidden brand-glass-premium border-2 border-brand-orange-500/30 group"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProduct}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0"
          >
            {/* Real product photo */}
            {currentProduct.image && (
              <Image
                src={currentProduct.image}
                alt={currentProduct.name}
                fill
                className="object-cover"
                priority
              />
            )}
            {/* Tinted gradient overlay to keep brand feel */}
            <div className={`absolute inset-0 bg-gradient-to-br ${currentProduct.color} opacity-25 mix-blend-overlay`} />
            {/* Bottom dark gradient for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10" />
          </motion.div>
        </AnimatePresence>

        {/* Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 z-20">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            key={`info-${activeProduct}`}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-4">
              <h3 className="text-base md:text-lg font-black text-white tracking-tight">{currentProduct.name}</h3>
              <span className={`px-3 py-1 rounded-full text-[9px] font-bold bg-gradient-to-r ${currentProduct.color} text-white uppercase tracking-widest`}>
                {currentProduct.subtitle}
              </span>
            </div>
            <p className="text-gray-200 text-[8px] md:text-[9px] max-w-lg leading-relaxed">{currentProduct.description}</p>
            {currentProduct.stats && (
              <div className="flex gap-6 md:gap-10 pt-4 flex-wrap border-b border-white/10 pb-6 mb-6">
                {currentProduct.stats.slice(0, 2).map((stat, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1 h-6 bg-brand-orange-500 rounded-full" />
                    <div>
                      <p className="text-[7px] font-black text-brand-orange-400 uppercase tracking-widest leading-none mb-1">{stat.label}</p>
                      <p className="text-white font-black text-[7px] md:text-[8px] leading-none tracking-tight">{stat.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {currentProduct.features && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {currentProduct.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-brand-orange-500" />
                    <p className="text-[7px] text-gray-300 uppercase font-bold tracking-widest">{feature.title}</p>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </motion.div>

      {/* Product Selection Pills */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {products.map((product, index) => (
          <motion.button
            key={product.id}
            onClick={() => setActiveProduct(index)}
            className={`px-3 py-2 rounded-lg font-bold transition-all duration-500 flex items-center gap-2 ${activeProduct === index
              ? "bg-brand-orange-500 text-white shadow-lg shadow-brand-orange-500/20 scale-105"
              : "bg-white/5 text-gray-400 hover:bg-white/10 border border-white/5"
              } text-[7px] md:text-[8px] uppercase tracking-wider`}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${activeProduct === index ? "bg-white" : "bg-gray-600"} ${activeProduct === index ? "animate-pulse" : ""}`} />
            <span className="truncate">{product.name}</span>
          </motion.button>
        ))}
      </div>
    </div>
  )
}
