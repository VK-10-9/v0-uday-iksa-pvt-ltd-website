"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, ChevronRight, Activity, Zap } from "lucide-react"
import Link from "next/link"
import { Sun, Wind, Lightbulb, Building2 } from "lucide-react"

const iconMap = {
  Sun,
  Wind,
  Lightbulb,
  Building2,
}

export default function ProductCard({ product, index, activeProduct, setActiveProduct, setHoveredProduct }) {
  const IconComponent = iconMap[product.icon] || Lightbulb

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 2 + index * 0.1, duration: 0.6 }}
      onHoverStart={() => setHoveredProduct(product)}
      onHoverEnd={() => setHoveredProduct(null)}
    >
      <motion.div
        className={`relative cursor-pointer transition-all duration-500 ${activeProduct === index ? "scale-105 z-20" : "scale-100 opacity-80 hover:opacity-100"
          }`}
        onClick={() => setActiveProduct(index)}
        whileHover={{ x: 10, scale: 1.02 }}
        layout
      >
        <div
          className={`relative bg-slate-900/40 backdrop-blur-xl rounded-2xl p-6 overflow-hidden transition-all duration-300 border ${activeProduct === index
              ? "border-brand-orange-500 shadow-2xl shadow-brand-orange-500/20 bg-slate-900/80"
              : "border-white/10 hover:border-brand-orange-500/30 hover:bg-slate-900/60"
            }`}
        >
          {/* Animated Background Flow */}
          <motion.div
            className={`absolute inset-0 bg-gradient-to-r ${product.bgGradient} opacity-0 transition-opacity duration-500`}
            animate={{
              opacity: activeProduct === index ? 0.05 : 0,
            }}
          />

          {/* Active Status Bar */}
          {activeProduct === index && (
            <motion.div
              className="absolute top-0 left-0 w-full h-1 bg-brand-gradient"
              layoutId="heroActiveIndicator"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}

          <div className="flex items-center gap-5 relative z-10">
            <motion.div
              className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center relative shadow-lg shadow-black/20`}
              animate={activeProduct === index ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <IconComponent className="h-7 w-7 text-white" />
              {activeProduct === index && (
                <motion.div
                  className="absolute inset-0 bg-white/20 rounded-2xl"
                  animate={{ opacity: [0, 1, 0], scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              )}
            </motion.div>

            <div className="flex-1">
              <h3 className="text-xl font-black text-white uppercase tracking-tighter mb-0.5">{product.name}</h3>
              <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest">{product.subtitle}</p>
            </div>

            <div className="flex flex-col items-end gap-1.5 order-last">
              <div className="flex items-center gap-1.5 text-[10px] font-black text-brand-orange-400 uppercase tracking-widest bg-brand-orange-500/10 px-2 py-0.5 rounded-md">
                <Activity className="h-3 w-3" />
                {product.stats}
              </div>
              <div className="flex items-center gap-1.5 text-[10px] font-black text-brand-amber-400 uppercase tracking-widest bg-brand-amber-500/10 px-2 py-0.5 rounded-md">
                <Zap className="h-3 w-3" />
                {product.benefit}
              </div>
            </div>
          </div>

          {/* Expanded Content */}
          <AnimatePresence>
            {activeProduct === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <motion.div
                  className="pt-6 border-t border-white/10 mt-6"
                  initial={{ y: 20 }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">{product.description}</p>
                  <Link href={product.link} className="inline-block w-full">
                    <button className="w-full flex items-center justify-center gap-2 py-3 bg-white hover:bg-brand-orange-500 text-black hover:text-white rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-300 group/btn">
                      <span>Explore Technical Data</span>
                      <ChevronRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  )
}
