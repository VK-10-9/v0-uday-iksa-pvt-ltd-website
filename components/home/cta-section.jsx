"use client"

import { motion } from "framer-motion"
import { ArrowRight, Phone, Mail, Calendar, Sparkles } from "lucide-react"
import Link from "next/link"
import { HoverButton } from "@/components/ui/hover-button"

export default function CTASection() {
  return (
    <section className="py-32 relative bg-gradient-to-br from-slate-950 via-purple-950/30 to-slate-950 overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        {/* Animated Gradient Mesh */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-transparent to-teal-600/20"
          animate={{
            background: [
              "linear-gradient(to bottom right, rgba(147, 51, 234, 0.2), transparent, rgba(20, 184, 166, 0.2))",
              "linear-gradient(to bottom right, rgba(20, 184, 166, 0.2), transparent, rgba(147, 51, 234, 0.2))",
              "linear-gradient(to bottom right, rgba(147, 51, 234, 0.2), transparent, rgba(20, 184, 166, 0.2))",
            ],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />

        {/* Floating Elements */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -80, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 5 }}
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main CTA Card */}
          <motion.div
            className="relative bg-black/40 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-12 lg:p-16 overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Animated Background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-teal-500/10"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, 0],
              }}
              transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
            />

            {/* Floating Sparkles */}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white/30 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: Math.random() * 2,
                }}
              />
            ))}

            <div className="relative z-10 text-center">
              {/* Header */}
              <motion.div
                className="mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <motion.div
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600/20 to-teal-500/20 backdrop-blur-xl border border-purple-500/30 rounded-full px-6 py-2 mb-6"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  <Sparkles className="h-4 w-4 text-yellow-400" />
                  <span className="text-sm font-medium text-gray-300">Ready to Transform?</span>
                </motion.div>

                <h2 className="text-5xl lg:text-7xl font-bold mb-6">
                  <span className="text-white">Start Your</span>
                  <br />
                  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-teal-400 bg-clip-text text-transparent">
                    Sustainable Journey
                  </span>
                </h2>

                <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  Join hundreds of satisfied clients who have transformed their spaces with our award-winning natural
                  daylight and ventilation solutions.
                </p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Link href="/contact">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <HoverButton className="text-white text-lg px-10 py-4 group">
                      <Calendar className="mr-3 h-5 w-5" />
                      <span>Schedule Consultation</span>
                      <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </HoverButton>
                  </motion.div>
                </Link>

                <Link href="/innovations">
                  <motion.button
                    className="flex items-center justify-center gap-3 px-10 py-4 border border-purple-500/50 rounded-full text-purple-400 hover:text-white hover:border-purple-400 hover:bg-purple-500/10 transition-all duration-300 group backdrop-blur-xl text-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Sparkles className="h-5 w-5" />
                    <span>Explore Solutions</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </Link>
              </motion.div>

              {/* Contact Options */}
              <motion.div
                className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <motion.a
                  href="tel:+918792182631"
                  className="flex items-center gap-4 p-6 bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl hover:border-purple-500/30 transition-all duration-300 group"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-600 to-teal-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="font-medium text-white group-hover:text-purple-300 transition-colors">Call Us</p>
                    <p className="text-gray-400 text-sm">+91 8792182631</p>
                  </div>
                </motion.a>

                <motion.a
                  href="mailto:info@udayiksa.com"
                  className="flex items-center gap-4 p-6 bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl hover:border-purple-500/30 transition-all duration-300 group"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-teal-600 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="font-medium text-white group-hover:text-teal-300 transition-colors">Email Us</p>
                    <p className="text-gray-400 text-sm">info@udayiksa.com</p>
                  </div>
                </motion.a>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                className="mt-12 pt-8 border-t border-gray-700"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <p className="text-gray-400 mb-4">Trusted by leading companies across India</p>
                <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                  {["Tata Steel", "Infosys", "Apollo", "IIT", "Mahindra"].map((company, index) => (
                    <motion.div
                      key={company}
                      className="text-gray-500 font-medium"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.9 + index * 0.1 }}
                      whileHover={{ scale: 1.1, opacity: 1 }}
                    >
                      {company}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
