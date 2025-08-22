"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Check } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="bg-black/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-purple-900/30 h-full flex flex-col"
      whileHover={{
        y: -10,
        boxShadow: "0 0 20px rgba(138, 43, 226, 0.4)",
        borderColor: "rgba(138, 43, 226, 0.6)",
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10"></div>

        <motion.div
          animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
          transition={{ duration: 0.5 }}
          className="h-full w-full"
        >
          <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
        </motion.div>

        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-teal-900/50 z-0 opacity-0"
          animate={isHovered ? { opacity: 0.7 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      </div>

      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold mb-3 gradient-text">{product.name}</h3>
        <p className="text-gray-300 mb-4 flex-grow">{product.description}</p>

        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Features:</h4>
          <ul className="space-y-1">
            {product.features.map((feature, index) => (
              <li key={index} className="flex items-center text-sm text-gray-300">
                <Check className="h-4 w-4 text-teal-500 mr-2" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <Button variant="outline" className="border-purple-500 text-purple-500 hover:bg-purple-500/10 w-full">
          Learn More <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </motion.div>
  )
}
