"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { Award, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function AwardsSection() {
  useEffect(() => {
    // Create particles for the awards section
    const awardsSection = document.getElementById("awards")
    if (awardsSection) {
      for (let i = 0; i < 30; i++) {
        const particle = document.createElement("div")
        particle.classList.add("particle")
        particle.style.left = `${Math.random() * 100}%`
        particle.style.top = `${Math.random() * 100}%`
        particle.style.opacity = Math.random()
        particle.style.animation = `float ${3 + Math.random() * 7}s ease-in-out infinite`
        awardsSection.appendChild(particle)
      }
    }
  }, [])

  return (
    <section id="awards" className="py-20 relative bg-black/50 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-text">Awards & Recognition</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our commitment to innovation has been recognized nationally.
          </p>
        </div>

        <motion.div
          className="bg-black/30 backdrop-blur-sm p-8 rounded-2xl border border-purple-900/30 glow-border max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-teal-500 rounded-full blur-xl opacity-50"></div>
                <div className="relative bg-gradient-to-r from-purple-600 to-teal-500 w-32 h-32 rounded-full flex items-center justify-center">
                  <Award className="h-16 w-16 text-white" />
                </div>
              </div>
            </div>

            <div className="md:w-2/3 text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2 gradient-text">CII INNOVERGE 2022 National Award</h3>
              <p className="text-gray-300 mb-4">
                Recognized by CII Yi – Apollo Innovation for our groundbreaking technology in green solar lighting and
                natural ventilation.
              </p>
              <Link href="/awards" className="text-purple-400 hover:text-purple-300 inline-flex items-center">
                Learn more about our achievements <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
