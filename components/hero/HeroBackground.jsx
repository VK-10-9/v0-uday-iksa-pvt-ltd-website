"use client"

import { motion } from "framer-motion"

export default function HeroBackground({ mousePosition }) {
  return (
    <div className="absolute inset-0">
      {/* Brand Mesh Background */}
      <div className="absolute inset-0 brand-mesh" />

      {/* Interactive Mouse Gradient */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle 600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.15) 0%, transparent 50%)`,
        }}
      />

      {/* Floating Brand Particles */}
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            backgroundColor: [
              "rgba(139, 92, 246, 0.6)",
              "rgba(236, 72, 153, 0.6)",
              "rgba(34, 211, 238, 0.6)",
              "rgba(20, 184, 166, 0.6)",
            ][Math.floor(Math.random() * 4)],
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Large Floating Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-purple-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-brand-teal-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 0.8, 1],
          x: [0, -80, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 5 }}
      />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />

      {/* Animated Light Rays */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-purple-500/5 to-transparent skew-x-12"
        animate={{ x: ["-200%", "200%"] }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />
    </div>
  )
}
