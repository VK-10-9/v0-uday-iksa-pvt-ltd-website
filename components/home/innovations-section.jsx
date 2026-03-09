"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Sun, Wind, Lightbulb, Zap, Leaf, Check, Building2, Sparkles, ShieldCheck } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { products } from "@/lib/data/products"
import { HoverButton } from "@/components/ui/hover-button"

const iconMap = {
  Sun: Sun,
  Wind: Wind,
  Lightbulb: Lightbulb,
  Building2: Building2,
}

export default function InnovationsSection() {
  const [hoveredProduct, setHoveredProduct] = useState(null)

  return (
    <section className="py-40 relative bg-slate-950 overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-orange-500/5 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-brand-red-500/5 rounded-full blur-[100px]"
          animate={{ scale: [1.2, 1, 1.2], x: [0, -50, 0], y: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-3 bg-brand-orange-500/10 border border-brand-orange-500/20 rounded-full px-8 py-2.5 mb-10"
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Sparkles className="h-4 w-4 text-brand-orange-400" />
            <span className="text-[10px] font-black text-brand-orange-400 uppercase tracking-[0.2em]">Engineering Excellence</span>
          </motion.div>

          <h2 className="text-5xl lg:text-8xl font-black mb-8 text-white uppercase tracking-tighter leading-none">
            Strategic <span className="brand-gradient-text">Products</span>
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-medium">
            Advanced light and air systems engineered for modern homes and industrial complexes.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {products.map((product, index) => {
            const IconComponent = iconMap[product.icon] || Lightbulb
            return (
              <motion.div
                key={product.id}
                className={`relative group cursor-pointer bg-white/[0.03] backdrop-blur-md rounded-[48px] border border-white/10 overflow-hidden h-[500px] transition-all duration-700 shadow-2xl hover:shadow-brand-orange-500/10`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onHoverStart={() => setHoveredProduct(product.id)}
                onHoverEnd={() => setHoveredProduct(null)}
                whileHover={{ y: -15 }}
              >
                {/* Background Image Layer */}
                <div className="absolute inset-0">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent transition-opacity duration-700 ${hoveredProduct === product.id ? 'opacity-100' : 'opacity-85'}`} />
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 h-full flex flex-col justify-end p-10">
                  {/* Category Badge */}
                  <div className="absolute top-10 right-10 flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full">
                    <IconComponent className="h-4 w-4 text-brand-orange-400" />
                    <span className="text-[10px] font-black text-white uppercase tracking-widest">{product.subtitle}</span>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-3xl font-black text-white mb-2 uppercase tracking-tighter group-hover:text-brand-orange-400 transition-colors duration-500">{product.name}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed font-medium line-clamp-2 group-hover:line-clamp-none transition-all duration-700">
                        {product.description}
                      </p>
                    </div>

                    {/* Features Reveal */}
                    <AnimatePresence>
                      {hoveredProduct === product.id && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="pt-6 space-y-5 border-t border-white/10"
                        >
                          <div className="grid gap-3">
                            {product.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center gap-3 group/feat">
                                <div className="p-1 rounded-md bg-brand-orange-500/20 text-brand-orange-500 group-hover/feat:bg-brand-orange-500 group-hover/feat:text-white transition-colors">
                                  <ShieldCheck className="h-3 w-3" />
                                </div>
                                <span className="text-[10px] text-gray-200 uppercase font-black tracking-widest leading-none">{feature.title}</span>
                              </div>
                            ))}
                          </div>

                          <Link href={product.link} className="block group/btn">
                            <button className="w-full bg-white text-black hover:bg-brand-orange-500 hover:text-white transition-all duration-500 rounded-2xl py-4 flex items-center justify-center gap-3 text-sm font-black uppercase tracking-widest shadow-xl shadow-white/5 active:scale-95">
                              EXPLORE <ArrowRight className="h-5 w-5 group-hover/btn:translate-x-2 transition-transform" />
                            </button>
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Indicator Line */}
                    {!hoveredProduct || hoveredProduct !== product.id ? (
                      <div className="pt-2">
                        <div className="h-1.5 w-16 bg-brand-gradient rounded-full shadow-lg shadow-brand-orange-500/50" />
                      </div>
                    ) : null}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Impact Stats / Secondary CTA */}
        <motion.div
          className="relative max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-[60px] p-12 lg:p-16 relative overflow-hidden text-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange-500/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-red-500/10 rounded-full blur-[100px]" />

            <h3 className="text-4xl lg:text-5xl font-black text-white mb-6 uppercase tracking-tighter leading-none relative z-10">Optimized Performance</h3>
            <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed relative z-10">
              Transform your asset's energy profile with India's most efficient daylighting and ventilation engineering.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
              <Link href="/products">
                <button className="px-12 py-5 bg-white text-black hover:bg-brand-orange-500 hover:text-white transition-all duration-500 rounded-2xl text-sm font-black uppercase tracking-widest shadow-xl shadow-white/5">
                  Full Tech Stack
                  <ArrowRight className="ml-3 h-5 w-5" />
                </button>
              </Link>
              <Link href="/contact">
                <button className="px-12 py-5 border-2 border-white/10 hover:border-brand-orange-500/50 text-white transition-all duration-300 rounded-2xl text-sm font-black uppercase tracking-widest backdrop-blur-md">
                  Request Audit
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
