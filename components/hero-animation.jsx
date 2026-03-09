"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export default function HeroAnimation() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    const width = canvas.width
    const height = canvas.height

    // Solar Rays
    const rays = []
    const rayCount = 12

    for (let i = 0; i < rayCount; i++) {
      rays.push({
        x: width / 2,
        y: height / 2,
        length: 80 + Math.random() * 200,
        angle: ((Math.PI * 2) / rayCount) * i,
        speed: 0.001 + Math.random() * 0.003,
        width: 2 + Math.random() * 4,
        opacity: 0.1 + Math.random() * 0.3,
      })
    }

    // Thermal Particles
    const particles = []
    const particleCount = 120

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: 1 + Math.random() * 2,
        speedX: -0.3 + Math.random() * 0.6,
        speedY: -0.8 - Math.random() * 0.4, // Floating up like heat
        opacity: 0.1 + Math.random() * 0.4,
      })
    }

    // Animation
    let animationFrameId

    const render = () => {
      ctx.clearRect(0, 0, width, height)

      // Draw Solar Core
      const gradient = ctx.createRadialGradient(width / 2, height / 2, 0, width / 2, height / 2, 200)
      gradient.addColorStop(0, "rgba(244, 121, 32, 0.4)")
      gradient.addColorStop(0.5, "rgba(231, 29, 36, 0.1)")
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)")

      ctx.beginPath()
      ctx.arc(width / 2, height / 2, 200, 0, Math.PI * 2)
      ctx.fillStyle = gradient
      ctx.fill()

      // Draw Radiating Rays
      for (const ray of rays) {
        ray.angle += ray.speed

        const endX = ray.x + Math.cos(ray.angle) * ray.length
        const endY = ray.y + Math.sin(ray.angle) * ray.length

        const rayGradient = ctx.createLinearGradient(ray.x, ray.y, endX, endY)
        rayGradient.addColorStop(0, `rgba(244, 121, 32, ${ray.opacity})`)
        rayGradient.addColorStop(1, `rgba(231, 29, 36, 0)`)

        ctx.beginPath()
        ctx.moveTo(ray.x, ray.y)
        ctx.lineTo(endX, endY)
        ctx.lineWidth = ray.width
        ctx.strokeStyle = rayGradient
        ctx.stroke()
      }

      // Draw Upward Particles
      for (const particle of particles) {
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Wrap around edges
        if (particle.x < 0) particle.x = width
        if (particle.x > width) particle.x = 0
        if (particle.y < 0) particle.y = height
        if (particle.y > height) particle.y = 0

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(244, 121, 32, ${particle.opacity})`
        ctx.fill()
      }

      animationFrameId = window.requestAnimationFrame(render)
    }

    render()

    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className="relative w-full h-full">
      <motion.div
        className="absolute inset-0 bg-slate-950/40 rounded-3xl border border-white/5"
        animate={{
          boxShadow: [
            "0 0 40px rgba(0, 0, 0, 0.5)",
            "0 0 80px rgba(244, 121, 32, 0.1)",
            "0 0 40px rgba(0, 0, 0, 0.5)",
          ],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <canvas ref={canvasRef} width={800} height={600} className="w-full h-full rounded-3xl" />

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <motion.div
            className="text-6xl md:text-8xl font-black text-white mb-6 uppercase tracking-tighter leading-none"
            animate={{
              textShadow: [
                "0 0 20px rgba(244, 121, 32, 0.3)",
                "0 0 40px rgba(244, 121, 32, 0.6)",
                "0 0 20px rgba(244, 121, 32, 0.3)",
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            ENGINEERING <br /> <span className="brand-gradient-text">LIGHT</span>
          </motion.div>
          <motion.div
            className="text-sm md:text-xl font-black text-gray-400 uppercase tracking-[0.5em] opacity-80"
          >
            Sustainable Systems for Industry
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
