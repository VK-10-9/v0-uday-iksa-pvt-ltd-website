"use client"

import { motion } from "framer-motion"
import { Award, Sparkles } from "lucide-react"

export default function AwardBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, rotate: -10 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.05, rotate: 2 }}
    >
      <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/20 rounded-full px-5 py-2 shadow-2xl group hover:border-brand-orange-500/40 hover:shadow-brand-orange-500/20 transition-all duration-500">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Award className="h-4 w-4 text-brand-orange-500" />
        </motion.div>

        <div className="flex flex-col items-start leading-none">
          <span className="text-[7px] font-black text-brand-amber-400 uppercase tracking-[0.2em] mb-0.5">National Winner</span>
          <span className="text-[8px] font-black text-white uppercase tracking-wider">
            CII INNOVERGE 2022
          </span>
        </div>

        <motion.div
          animate={{ opacity: [0.5, 1, 0.5], filter: ["blur(0px)", "blur(1px)", "blur(0px)"] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Sparkles className="h-4 w-4 text-brand-orange-400" />
        </motion.div>
      </div>
    </motion.div>
  )
}
