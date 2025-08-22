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
      <div className="inline-flex items-center gap-3 brand-glass rounded-full px-6 py-3 shadow-2xl group hover:shadow-brand-purple-500/25 transition-all duration-300">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        >
          <Award className="h-5 w-5 text-yellow-400" />
        </motion.div>
        <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
          CII INNOVERGE 2022 National Winner
        </span>
        <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
          <Sparkles className="h-4 w-4 text-brand-pink-400" />
        </motion.div>
      </div>
    </motion.div>
  )
}
