"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Star, CheckCircle2 } from "lucide-react"
import { Sun, Wind, Lightbulb, Building2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const iconMap = {
  Sun,
  Wind,
  Lightbulb,
  Building2,
}

export default function ProductHoverCard({ product, hoveredProduct }) {
  const IconComponent = iconMap[product.icon] || Lightbulb

  return (
    <AnimatePresence mode="wait">
      {hoveredProduct?.id === product.id && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: 20, rotateY: 10 }}
          animate={{ opacity: 1, scale: 1, x: 0, rotateY: 0 }}
          exit={{ opacity: 0, scale: 0.95, x: 20, rotateY: 10 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="absolute left-full top-0 ml-8 z-50 w-96 hidden lg:block"
          style={{ perspective: "1200px" }}
        >
          <div className="bg-slate-900/90 backdrop-blur-2xl rounded-[32px] p-8 border border-white/10 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.5)] relative overflow-hidden group">
            {/* Dynamic Background Glow */}
            <motion.div
              className={`absolute inset-0 bg-gradient-to-br ${product.bgGradient} opacity-[0.08]`}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.08, 0.15, 0.08],
              }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
            />

            {/* Product Header */}
            <div className="relative mb-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center shadow-lg shadow-black/20`}>
                  <IconComponent className="h-7 w-7 text-white" />
                </div>
                <div className="flex gap-1.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-3 w-3 fill-brand-orange-500 text-brand-orange-500" />
                  ))}
                </div>
              </div>
              <h4 className="text-2xl font-black text-white uppercase tracking-tighter leading-none mb-1">
                {product.name}
              </h4>
              <p className="text-brand-orange-400 text-[10px] font-black uppercase tracking-widest">{product.subtitle || "Premium Engineering"}</p>
            </div>

            {/* Product Visual */}
            <div className="relative h-48 mb-8 rounded-2xl overflow-hidden group/img isolation-auto">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover group-hover/img:scale-110 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="bg-white/10 backdrop-blur-md border border-white/10 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                  Featured Tech
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              {product.shortNote || product.description?.split('.')[0] + '.'}
            </p>

            {/* Feature Tags */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {(product.features?.slice(0, 4) || []).map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3 group/item">
                  <div className="mt-1 w-4 h-4 rounded-full bg-brand-orange-500/10 flex items-center justify-center flex-shrink-0 group-hover/item:bg-brand-orange-500 transition-colors">
                    <CheckCircle2 className="h-2.5 w-2.5 text-brand-orange-500 group-hover/item:text-white" />
                  </div>
                  <span className="text-xs text-gray-400 group-hover/item:text-gray-200 transition-colors">{feature}</span>
                </div>
              ))}
            </div>

            {/* Action Area */}
            <Link href={product.link} className="block">
              <Button className="w-full h-14 bg-white hover:bg-brand-orange-500 text-black hover:text-white font-black uppercase tracking-widest text-sm rounded-2xl transition-all duration-300 shadow-xl hover:shadow-brand-orange-500/20 group/btn">
                <span>View Full Analysis</span>
                <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
