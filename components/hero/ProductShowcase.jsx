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
        className="relative h-[320px] sm:h-[350px] md:h-[380px] w-full rounded-3xl overflow-hidden brand-glass-premium border-2 border-brand-orange-500/30 group"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProduct}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute inset-0"
          >
            {/* Real product photo */}
            {currentProduct.image && (
              <Image
                src={currentProduct.image}
                alt={currentProduct.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-1000"
                priority
              />
            )}
            
            {/* Cinematic Gradient Overlays */}
            {/* 1. Base dark tint */}
            <div className="absolute inset-0 bg-slate-950/20 mix-blend-multiply" />
            
            {/* 2. Brand-tinted highlight (Dynamic) */}
            <div className={`absolute inset-0 bg-gradient-to-br ${currentProduct.color} opacity-20 mix-blend-overlay`} />
            
            {/* 3. Serious Vignette for Readability (Strong Bottom & Left) */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 via-transparent to-transparent opacity-60" />
          </motion.div>
        </AnimatePresence>

        {/* Info Overlay - Glassmorphic Container for Depth */}
        <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 md:p-12 z-20">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            key={`info-${activeProduct}`}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="max-w-2xl bg-white/[0.01] backdrop-blur-[2px] rounded-3xl p-2 md:p-0"
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3 sm:mb-6">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tighter uppercase drop-shadow-2xl leading-none">
                {currentProduct.name}
              </h3>
              <div className={`w-fit px-3 md:px-4 py-1.5 rounded-full text-[7px] md:text-[10px] font-black bg-gradient-to-r ${currentProduct.color} text-white uppercase tracking-[0.2em] shadow-xl shadow-black/20`}>
                {currentProduct.subtitle}
              </div>
            </div>

            <p className="text-gray-200 text-[10px] sm:text-sm max-w-xl leading-relaxed font-medium mb-4 sm:mb-8 drop-shadow-lg opacity-90">
              {currentProduct.description}
            </p>

            {currentProduct.stats && (
              <div className="flex gap-4 md:gap-12 pt-3 sm:pt-6 flex-wrap border-t border-white/10 mb-4 sm:mb-8 w-fit">
                {currentProduct.stats.slice(0, 2).map((stat, i) => (
                  <div key={i} className="flex items-center gap-3 md:gap-4 group">
                    <div className="w-1 md:w-1.5 h-8 md:h-10 bg-brand-orange-500 rounded-full shadow-[0_0_15px_rgba(244,121,32,0.4)] transition-all group-hover:h-12" />
                    <div>
                      <p className="text-[8px] md:text-[10px] font-black text-brand-orange-400 uppercase tracking-widest leading-none mb-1 md:mb-2">{stat.label}</p>
                      <p className="text-white font-black text-xs md:text-base leading-none tracking-tight">{stat.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {currentProduct.features && (
              <div className="hidden sm:grid grid-cols-2 gap-x-8 gap-y-3 opacity-80 border-t border-white/5 pt-6">
                {currentProduct.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-orange-500 group-hover:scale-125 transition-transform" />
                    <p className="text-[10px] text-gray-300 uppercase font-black tracking-widest drop-shadow-sm">
                      {feature.title}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </motion.div>

      {/* Product Selection - Clean & Responsive */}
      <div className="relative w-full">
        <div className="flex flex-row md:flex-wrap gap-2 md:gap-3 overflow-x-auto md:overflow-x-visible pb-4 md:pb-0 scrollbar-hide snap-x">
          {products.map((product, index) => (
            <motion.button
              key={product.id}
              onClick={() => setActiveProduct(index)}
              className={`flex-shrink-0 px-4 md:px-5 py-3 md:py-3.5 rounded-xl md:rounded-2xl font-black transition-all duration-500 flex items-center gap-2.5 snap-center border ${activeProduct === index
                ? "bg-brand-orange-500 text-white border-brand-orange-500 shadow-lg shadow-brand-orange-500/20 scale-[1.02]"
                : "bg-white/5 text-gray-400 hover:bg-white/10 border-white/5 active:scale-95"
                } text-[9px] md:text-[10px] uppercase tracking-wider`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className={`w-1.5 h-1.5 rounded-full ${activeProduct === index ? "bg-white shadow-[0_0_8px_white] animate-pulse" : "bg-gray-600"}`} />
              <span className="whitespace-nowrap">{product.name}</span>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  )
}
