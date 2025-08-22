"use client"

import { motion } from "framer-motion"

export default function HeroHeading() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 1 }}
      className="space-y-6"
    >
      <h1 className="text-6xl lg:text-8xl xl:text-9xl font-bold leading-[0.9] tracking-tight">
        <motion.span
          className="block text-white"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Illuminating
        </motion.span>
        <motion.span
          className="block brand-gradient-text"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          Tomorrow
        </motion.span>
        <motion.span
          className="block text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          Naturally
        </motion.span>
      </h1>

      <motion.p
        className="text-xl lg:text-2xl text-gray-300 max-w-2xl leading-relaxed"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        Pioneering sustainable architecture with{" "}
        <span className="brand-gradient-text font-semibold">award-winning natural daylight</span> and ventilation
        solutions that transform spaces while reducing energy consumption by up to{" "}
        <span className="text-yellow-400 font-bold">40%</span>.
      </motion.p>
    </motion.div>
  )
}
