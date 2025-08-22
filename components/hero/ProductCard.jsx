"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Sun, Wind, Lightbulb, Building2 } from "lucide-react"

const iconMap = {
  Sun,
  Wind,
  Lightbulb,
  Building2,
}

export default function ProductCard({ product, index, activeProduct, setActiveProduct, setHoveredProduct }) {
  const IconComponent = iconMap[product.icon]

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 2 + index * 0.1, duration: 0.6 }}
    >
      <motion.div
        className={`relative cursor-pointer transition-all duration-500 ${
          activeProduct === index ? "scale-105 z-20" : "scale-100 opacity-80 hover:opacity-100"
        }`}
        onClick={() => setActiveProduct(index)}
        whileHover={{ x: 10, scale: 1.02 }}
        layout
      >
        <div
          className={`relative brand-glass rounded-2xl p-6 overflow-hidden transition-all duration-300 ${
            activeProduct === index
              ? "border-brand-purple-500/60 shadow-2xl shadow-brand-purple-500/20 bg-black/60"
              : "hover:border-brand-purple-500/30 hover:bg-black/50"
          }`}
        >
          {/* Active Indicator */}
          {activeProduct === index && (
            <motion.div
              className="absolute top-0 left-0 w-full h-1 brand-gradient-bg"
              layoutId="activeIndicator"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}

          <div className="flex items-center gap-4 relative z-10">
            <motion.div
              className={`p-3 rounded-xl bg-gradient-to-r ${product.color} bg-opacity-20 relative overflow-hidden`}
              animate={activeProduct === index ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="absolute inset-0 bg-white/20 rounded-xl"
                animate={{
                  scale: activeProduct === index ? [1, 1.2, 1] : 1,
                  opacity: activeProduct === index ? [0.5, 0, 0.5] : 0,
                }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              />
              <IconComponent className="h-6 w-6 text-white relative z-10" />
            </motion.div>

            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-1">{product.name}</h3>
              <p className="text-gray-400 text-sm">{product.subtitle}</p>
            </div>

            <div className="flex flex-col items-end gap-1">
              <motion.span
                className="text-xs text-brand-purple-400 font-medium"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                {product.stats}
              </motion.span>
              <motion.span
                className="text-xs text-brand-teal-400 font-medium"
                animate={{ opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
              >
                {product.benefit}
              </motion.span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
