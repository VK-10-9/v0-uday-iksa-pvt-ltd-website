"use client"

import { motion } from "framer-motion"
import { heroStats } from "@/lib/data/stats"

export default function HeroStats() {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-2xl w-full"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.4, duration: 0.8 }}
    >
      {heroStats.map((stat, index) => (
        <motion.div
          key={index}
          className="text-left group cursor-pointer relative"
          whileHover={{ scale: 1.05, y: -5 }}
          transition={{ type: "spring", stiffness: 300 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 + index * 0.1 }}
        >
          <div
            className={`absolute inset-0 bg-gradient-to-r ${stat.bg} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl`}
          />
          <div className="relative brand-glass rounded-xl p-3 md:p-4 group-hover:border-brand-orange-500/30 transition-all duration-300">
            <div className={`${stat.color} mb-3 flex justify-start`}>
              <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                <stat.icon className="h-6 w-6" />
              </motion.div>
            </div>
            <motion.div
              className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-brand-orange-400 group-hover:to-brand-red-400 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
            >
              {stat.number}
            </motion.div>
            <div className="text-[10px] text-gray-500 mt-1 group-hover:text-gray-300 transition-colors uppercase font-black tracking-widest">{stat.label}</div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}
