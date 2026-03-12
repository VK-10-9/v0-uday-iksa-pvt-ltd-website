"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Check, ShieldCheck } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="bg-white/[0.03] backdrop-blur-2xl rounded-[40px] overflow-hidden border border-white/10 h-full flex flex-col group shadow-2xl transition-all duration-700 hover:shadow-brand-orange-500/10"
      whileHover={{
        y: -10,
        borderColor: "rgba(244, 121, 32, 0.4)",
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative h-72 overflow-hidden">
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-slate-950 to-transparent z-10 opacity-80" />

        <motion.div
          animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="h-full w-full"
        >
          <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
        </motion.div>

        <div className="absolute top-6 right-6 z-20">
          <div className="bg-slate-950/40 backdrop-blur-md border border-white/10 p-4 rounded-2xl">
            <ShieldCheck className="h-6 w-6 text-brand-orange-500" />
          </div>
        </div>
      </div>

      <div className="p-8 flex-grow flex flex-col">
        <div className="mb-6">
          <h3 className="text-3xl font-black text-white mb-2 uppercase tracking-tighter group-hover:text-brand-orange-400 transition-colors duration-500">{product.name}</h3>
          <div className="h-1 w-12 bg-brand-orange-500/40 rounded-full" />
        </div>

        <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow font-medium">{product.description}</p>

        <div className="mb-10 space-y-4">
          <p className="text-[7px] font-black text-gray-500 uppercase tracking-widest pl-1">Key Performance Indices</p>
          <div className="grid gap-3">
            {product.features.slice(0, 3).map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="p-1 rounded-md bg-brand-orange-500/10 text-brand-orange-500">
                  <Check className="h-3 w-3" />
                </div>
                <span className="text-[7px] text-gray-200 uppercase font-black tracking-widest leading-none">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <button className="w-full bg-white text-black hover:bg-black hover:text-white transition-all duration-500 rounded-2xl py-5 text-xs font-black uppercase tracking-[0.2em] shadow-xl shadow-white/5 active:scale-95 flex items-center justify-center gap-3">
          Explore Insights <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </motion.div>
  )
}
