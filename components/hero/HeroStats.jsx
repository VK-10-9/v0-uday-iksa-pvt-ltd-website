"use client"

import { motion } from "framer-motion"
import { heroStats } from "@/lib/data/stats"

export default function HeroStats() {
  return (
    <div className="relative w-full overflow-hidden">
      <motion.div
        className="flex md:grid md:grid-cols-3 gap-4 md:gap-6 overflow-x-auto md:overflow-x-visible pb-4 md:pb-0 scrollbar-hide snap-x"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.8 }}
      >
        {heroStats.map((stat, index) => (
          <motion.div
            key={index}
            className="flex-shrink-0 w-[180px] md:w-auto text-left group cursor-pointer relative snap-center"
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ 
              type: "spring", 
              stiffness: 300,
              delay: index * 0.1 
            }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-r ${stat.bg} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl`}
            />
            <div className="relative brand-glass rounded-[24px] md:rounded-[32px] p-4 md:p-6 group-hover:border-brand-orange-500/30 transition-all duration-300 border border-white/5 bg-white/[0.03]">
              <div className={`${stat.color} mb-3 md:mb-4 flex justify-start`}>
                <div className="p-1.5 md:p-2 rounded-xl bg-white/5">
                  <stat.icon className="h-4 w-4 md:h-5 md:w-5" />
                </div>
              </div>
              <div className="text-2xl md:text-2xl font-black bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent group-hover:from-brand-orange-400 group-hover:to-brand-red-400 transition-all duration-300 tracking-tighter">
                {stat.number}
              </div>
              <div className="text-[10px] text-gray-500 mt-1.5 group-hover:text-gray-300 transition-colors uppercase font-black tracking-widest">{stat.label}</div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
