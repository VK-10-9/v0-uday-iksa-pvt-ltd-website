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
          Do The
        </motion.span>
        <motion.span
          className="block text-white"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
        >
          Work
        </motion.span>
      </h1>

      <motion.div
        className="max-w-2xl space-y-4 md:space-y-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-medium">
          Stop paying for light that nature gives you for free. <span className="text-white font-black">Uday IKSA</span> brings natural sunlight and fresh air into your factory, office, home, or school.
        </p>

        <div className="flex flex-wrap items-center gap-3 md:gap-4 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] md:tracking-[0.3em]">
          <span className="text-brand-orange-500 whitespace-nowrap">No Electricity</span>
          <span className="text-gray-600">•</span>
          <span className="text-brand-amber-500 whitespace-nowrap">Zero Running Cost</span>
          <span className="text-gray-600 hidden sm:inline">•</span>
          <span className="text-brand-yellow-500 whitespace-nowrap">High Impact</span>
        </div>
      </motion.div>
    </motion.div>
  )
}
