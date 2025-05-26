"use client"

import { motion } from "framer-motion"
import { Sun, Award, Users, Building2, Target, Eye, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutSection() {
  const stats = [
    { icon: Building2, number: "500+", label: "Projects Delivered", color: "text-purple-400" },
    { icon: Users, number: "15+", label: "Years of Excellence", color: "text-teal-400" },
    { icon: Award, number: "10+", label: "Industry Awards", color: "text-yellow-400" },
  ]

  const values = [
    {
      icon: Eye,
      title: "Vision",
      description:
        "Creating a world where sustainable and healthy living is accessible to all through innovative natural daylight and ventilation engineering.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Target,
      title: "Mission",
      description:
        "Continuously upgrading our products to match modernizing structures, developing fine engineered solutions that are technician-friendly and aesthetic.",
      gradient: "from-teal-500 to-blue-500",
    },
    {
      icon: Heart,
      title: "Values",
      description:
        "Upholding the highest standards of ethics, recognizing our profound impact on individuals, communities, and society through sustainable innovation.",
      gradient: "from-orange-500 to-red-500",
    },
  ]

  return (
    <section id="about" className="py-32 relative bg-gradient-to-b from-slate-950 to-slate-900">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-20 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
          transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600/20 to-teal-500/20 backdrop-blur-xl border border-purple-500/30 rounded-full px-6 py-2 mb-6"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <Sun className="h-4 w-4 text-yellow-400" />
            <span className="text-sm font-medium text-gray-300">About Uday IKSA</span>
          </motion.div>

          <h2 className="text-5xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-teal-400 bg-clip-text text-transparent">
              Pioneering
            </span>
            <br />
            <span className="text-white">Sustainable Innovation</span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            For over 15 years, we've been transforming spaces across India with award-winning natural daylight and
            ventilation solutions that reduce energy consumption while creating healthier environments.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 group-hover:border-purple-500/30 transition-all duration-300">
                <div className={`${stat.color} mb-4 flex justify-center`}>
                  <stat.icon className="h-12 w-12" />
                </div>
                <div className="text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-purple-400 group-hover:to-teal-400 transition-all duration-300 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Values Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 * index }}
              whileHover={{ y: -10 }}
            >
              <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 h-full group-hover:border-purple-500/30 transition-all duration-300 group-hover:bg-black/60">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${value.gradient} bg-opacity-20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-teal-400 group-hover:bg-clip-text transition-all duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-gradient-to-r from-purple-900/20 to-teal-900/20 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-12">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Space?</h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Discover how our innovative solutions can bring natural light and fresh air to your building while
              reducing energy costs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/about">
                <Button className="bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600 text-white px-8 py-3 rounded-full text-lg">
                  Learn More About Us
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="border-purple-500 text-purple-400 hover:bg-purple-500/10 px-8 py-3 rounded-full text-lg"
                >
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
