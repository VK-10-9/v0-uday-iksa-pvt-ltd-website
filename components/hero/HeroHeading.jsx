"use client"

import { motion } from "framer-motion"

export default function HeroHeading() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 1 }}
      className="space-y-6 md:space-y-8 text-left"
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[5.5rem] font-black leading-[0.9] md:leading-[0.85] tracking-tighter uppercase flex flex-col items-start">
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
        className="max-w-2xl space-y-4 md:space-y-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <div className="flex items-center gap-3">
          <div className="h-0.5 w-12 bg-brand-orange-500"></div>
          <p className="text-brand-orange-500 font-black uppercase tracking-[0.3em] text-xs">Manufacturer and Service Provider</p>
        </div>

        <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-medium">
          Bringing natural daylighting and ventilation solutions to industrial, commercial, and residential buildings across India. Patented technology for a sustainable future.
        </p>

        <div className="flex flex-wrap items-center gap-3 md:gap-4 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] md:tracking-[0.3em]">
          <span className="text-brand-orange-500 whitespace-nowrap">Patented Technology</span>
          <span className="text-gray-600">•</span>
          <span className="text-brand-amber-500 whitespace-nowrap">ISO 9001:2015</span>
          <span className="text-gray-600 hidden sm:inline">•</span>
          <span className="text-brand-yellow-500 whitespace-nowrap">CII National Award</span>
        </div>

        <div className="flex flex-wrap gap-6 pt-4">
          <Link href="/contact" className="inline-block">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <button className="bg-brand-orange-500 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest shadow-2xl shadow-brand-orange-500/30 hover:bg-white hover:text-black transition-all duration-500 flex items-center gap-4 group">
                Consult With Experts
                <div className="bg-white/10 p-1.5 rounded-lg group-hover:bg-black/5">
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            </motion.div>
          </Link>

          <Link href="/products" className="inline-block">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <button className="bg-white/5 backdrop-blur-md border border-white/10 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white/10 transition-all duration-500">
                Explore Core Systems
              </button>
            </motion.div>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  )
}
