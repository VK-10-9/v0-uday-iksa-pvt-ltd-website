"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function HeroHeading() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 1 }}
      className="space-y-6 md:space-y-8 text-left"
    >
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.9] md:leading-[0.95] tracking-tighter uppercase flex flex-col items-start transition-all duration-500">
        <motion.span
          className="block text-white"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
        >
          Let Sunlight
        </motion.span>
        <motion.span
          className="block brand-gradient-text"
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.8, duration: 0.8, ease: "backOut" }}
        >
          Power Your
        </motion.span>
        <motion.span
          className="block text-white"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
        >
          Space
        </motion.span>
      </h1>

      <motion.div
        className="max-w-xl space-y-5 md:space-y-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="h-0.5 w-10 bg-brand-orange-500"></div>
            <p className="text-brand-orange-500 font-black uppercase tracking-[0.4em] text-[10px]">Manufacturer & Service Provider</p>
          </div>

          <p className="text-[13px] md:text-[15px] text-gray-400 leading-relaxed font-medium max-w-lg">
            Engineering natural daylight and ventilation solutions for 1,900+ installations across India. Patented technology for a high-performance future.
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[10px] font-black uppercase tracking-widest text-gray-400 h-6">
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-brand-orange-500" />
              <span>ISO 9001:2015</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-brand-orange-500" />
              <span>Patented Tech</span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 pt-4">
          <Link href="/contact" className="inline-block">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <button className="bg-brand-orange-500 text-white px-6 py-4 rounded-lg font-black text-[11px] uppercase tracking-widest shadow-2xl shadow-brand-orange-500/30 hover:bg-white hover:text-black transition-all duration-500 flex items-center gap-2 group">
                 Consult With Experts
                 <div className="bg-white/10 p-1 rounded-lg group-hover:bg-black/5">
                   <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                 </div>
               </button>
             </motion.div>
           </Link>
 
           <Link href="/products" className="inline-block">
             <motion.div
               whileHover={{ scale: 1.02 }}
               whileTap={{ scale: 0.98 }}
             >
                <button className="bg-white/5 backdrop-blur-md border border-white/10 text-white px-6 py-4 rounded-lg font-black text-[11px] uppercase tracking-widest hover:bg-white/10 transition-all duration-500">
                 Explore Core Systems
               </button>
             </motion.div>
           </Link>
        </div>
      </motion.div>
    </motion.div>
  )
}
