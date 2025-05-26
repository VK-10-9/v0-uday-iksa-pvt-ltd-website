"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Star } from "lucide-react"
import { Sun, Wind, Lightbulb, Building2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const iconMap = {
  Sun,
  Wind,
  Lightbulb,
  Building2,
}

export default function ProductHoverCard({ product, hoveredProduct }) {
  const IconComponent = iconMap[product.icon]

  return (
    <AnimatePresence>
      {hoveredProduct?.id === product.id && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: -20, rotateY: -15 }}
          animate={{ opacity: 1, scale: 1, x: 0, rotateY: 0 }}
          exit={{ opacity: 0, scale: 0.8, x: -20, rotateY: -15 }}
          transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
          className="absolute left-full top-0 ml-6 z-50 w-80"
          style={{ perspective: "1000px" }}
        >
          <div className="brand-glass rounded-2xl p-6 shadow-2xl relative overflow-hidden">
            {/* Animated Background */}
            <motion.div
              className={`absolute inset-0 bg-gradient-to-br ${product.bgGradient} opacity-20`}
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, 0],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            />

            {/* Product Image */}
            <div className="relative h-48 mb-4 rounded-xl overflow-hidden group">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

              {/* Floating Icon */}
              <motion.div
                className={`absolute top-4 right-4 w-12 h-12 rounded-xl bg-gradient-to-r ${product.color} bg-opacity-90 backdrop-blur-xl flex items-center justify-center`}
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                <IconComponent className="h-6 w-6 text-white" />
              </motion.div>
            </div>

            {/* Product Info */}
            <motion.h4
              className="text-xl font-bold text-white mb-2"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              {product.name}
            </motion.h4>

            <motion.p
              className="text-gray-300 text-sm mb-4"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.15 }}
            >
              {product.shortNote}
            </motion.p>

            {/* Key Features */}
            <motion.div
              className="mb-4"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h5 className="text-sm font-semibold text-gray-400 mb-2 flex items-center gap-2">
                <Star className="h-4 w-4 text-yellow-400" />
                Key Features:
              </h5>
              <div className="grid grid-cols-2 gap-2">
                {product.features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-center gap-2"
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.25 + idx * 0.05 }}
                  >
                    <motion.div
                      className="w-1.5 h-1.5 bg-brand-purple-400 rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: idx * 0.2 }}
                    />
                    <span className="text-xs text-gray-300">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Learn More Button */}
            <Link href={product.link}>
              <motion.button
                className="w-full brand-gradient-bg text-white py-3 rounded-xl font-medium flex items-center justify-center gap-2 group relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
                <span className="relative z-10">Learn More</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform relative z-10" />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
