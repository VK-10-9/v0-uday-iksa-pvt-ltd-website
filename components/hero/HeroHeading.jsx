"use client"

import { motion } from "framer-motion"

export default function HeroHeading() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 1 }}
      className="space-y-10 text-center"
    >
      <h1 className="text-6xl lg:text-9xl font-black leading-[0.85] tracking-tighter uppercase flex flex-col items-center">
        <motion.span
          className="block text-white"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
        >
          Engineering
        </motion.span>
        <motion.span
          className="block brand-gradient-text"
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.8, duration: 0.8, ease: "backOut" }}
        >
          Tomorrow
        </motion.span>
        <motion.span
          className="block text-white"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
        >
          Naturally
        </motion.span>
      </h1>

      <motion.div
        className="max-w-4xl mx-auto space-y-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <p className="text-xl lg:text-2xl text-gray-400 leading-relaxed font-medium">
          Pioneering sustainable industrial architecture with{" "}
          <span className="text-white font-black underline decoration-brand-orange-500/50 underline-offset-8">award-winning</span> natural daylight
          and ventilation solutions.
        </p>

        <div className="flex items-center justify-center gap-4 text-xs font-black uppercase tracking-[0.3em]">
          <span className="text-brand-orange-500">Scaleable</span>
          <span className="text-gray-600">•</span>
          <span className="text-brand-amber-500">Sustainable</span>
          <span className="text-gray-600">•</span>
          <span className="text-brand-yellow-500">Industrial</span>
        </div>
      </motion.div>
    </motion.div>
  )
}
