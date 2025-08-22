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

    // Light rays
    const rays = []
    const rayCount = 10

    for (let i = 0; i < rayCount; i++) {
      rays.push({
        x: width / 2,
        y: height / 2,
        length: 50 + Math.random() * 150,
        angle: ((Math.PI * 2) / rayCount) * i,
        speed: 0.002 + Math.random() * 0.005,
        width: 1 + Math.random() * 3,
        opacity: 0.1 + Math.random() * 0.4,
      })
    }

    // Particles
    const particles = []
    const particleCount = 100

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: 1 + Math.random() * 3,
        speedX: -0.5 + Math.random(),
        speedY: -0.5 + Math.random(),
        opacity: 0.1 + Math.random() * 0.5,
      })
    }

    // Animation
    let animationFrameId

    const render = () => {
      ctx.clearRect(0, 0, width, height)

      // Draw light source
      const gradient = ctx.createRadialGradient(width / 2, height / 2, 0, width / 2, height / 2, 150)
      gradient.addColorStop(0, "rgba(138, 43, 226, 0.8)")
      gradient.addColorStop(0.5, "rgba(43, 226, 202, 0.4)")
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)")

      ctx.beginPath()
      ctx.arc(width / 2, height / 2, 150, 0, Math.PI * 2)
      ctx.fillStyle = gradient
      ctx.fill()

      // Draw rays
      for (const ray of rays) {
        ray.angle += ray.speed

        const endX = ray.x + Math.cos(ray.angle) * ray.length
        const endY = ray.y + Math.sin(ray.angle) * ray.length

        const rayGradient = ctx.createLinearGradient(ray.x, ray.y, endX, endY)
        rayGradient.addColorStop(0, `rgba(138, 43, 226, ${ray.opacity})`)
        rayGradient.addColorStop(1, `rgba(43, 226, 202, 0)`)

        ctx.beginPath()
        ctx.moveTo(ray.x, ray.y)
        ctx.lineTo(endX, endY)
        ctx.lineWidth = ray.width
        ctx.strokeStyle = rayGradient
        ctx.stroke()
      }

      // Draw particles
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
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`
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
        className="absolute inset-0 bg-gradient-to-r from-purple-900/30 to-teal-900/30 rounded-2xl"
        animate={{
          boxShadow: [
            "0 0 20px rgba(138, 43, 226, 0.3)",
            "0 0 40px rgba(138, 43, 226, 0.5)",
            "0 0 20px rgba(138, 43, 226, 0.3)",
          ],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      <canvas ref={canvasRef} width={800} height={600} className="w-full h-full rounded-2xl" />

      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.div
            className="text-5xl md:text-6xl font-bold gradient-text mb-4"
            animate={{
              textShadow: [
                "0 0 10px rgba(138, 43, 226, 0.5)",
                "0 0 20px rgba(138, 43, 226, 0.7)",
                "0 0 10px rgba(138, 43, 226, 0.5)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          >
            Our Innovations
          </motion.div>
          <motion.div
            className="text-xl md:text-2xl text-teal-400"
            animate={{
              textShadow: [
                "0 0 5px rgba(43, 226, 202, 0.5)",
                "0 0 10px rgba(43, 226, 202, 0.7)",
                "0 0 5px rgba(43, 226, 202, 0.5)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              delay: 0.5,
            }}
          >
            Sustainable Solutions for Tomorrow
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
