"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sun, Wind, Lightbulb, Zap, Leaf, Check } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function InnovationsSection() {
  const [hoveredProduct, setHoveredProduct] = useState(null)

  const innovations = [
    {
      id: 1,
      name: "NANOSUN Daylight Systems",
      shortName: "NANOSUN",
      description:
        "Revolutionary natural daylighting solution that maximizes sunlight while minimizing heat transfer, perfect for industrial and commercial buildings.",
      shortDescription: "Advanced daylight systems for maximum natural illumination",
      image: "/placeholder.svg?height=600&width=800&text=NANOSUN+Daylight+System+Installation",
      hoverImage: "/placeholder.svg?height=400&width=600&text=NANOSUN+Product+Detail",
      icon: Sun,
      features: ["98% Light Transmission", "UV Protection", "Weather Resistant", "Easy Installation"],
      benefits: ["40% Energy Reduction", "Improved Productivity", "Enhanced Comfort"],
      link: "/innovations/nanosun",
      color: "from-brand-purple-400 to-brand-pink-400",
      bgColor: "from-brand-purple-500/10 to-brand-pink-500/10",
    },
    {
      id: 2,
      name: "NANOVENT Ventilation Systems",
      shortName: "NANOVENT",
      description:
        "Zero-energy natural ventilation technology that harnesses natural air currents to create comfortable, well-ventilated spaces without electricity.",
      shortDescription: "Zero-energy natural ventilation for optimal air quality",
      image: "/placeholder.svg?height=600&width=800&text=NANOVENT+Ventilation+Installation",
      hoverImage: "/placeholder.svg?height=400&width=600&text=NANOVENT+Product+Detail",
      icon: Wind,
      features: ["Zero Energy Consumption", "Natural Air Flow", "Silent Operation", "Humidity Control"],
      benefits: ["Improved Air Quality", "Reduced HVAC Costs", "Eco-Friendly"],
      link: "/innovations/nanovent",
      color: "from-brand-cyan-400 to-brand-teal-400",
      bgColor: "from-brand-cyan-500/10 to-brand-teal-500/10",
    },
    {
      id: 3,
      name: "SKYTUBE Tubular Daylight",
      shortName: "SKYTUBE",
      description:
        "Innovative tubular design that channels sunlight into interior spaces where traditional skylights cannot reach effectively.",
      shortDescription: "Tubular daylight systems for deep interior spaces",
      image: "/placeholder.svg?height=600&width=800&text=SKYTUBE+Tubular+Installation",
      hoverImage: "/placeholder.svg?height=400&width=600&text=SKYTUBE+Product+Detail",
      icon: Lightbulb,
      features: ["Flexible Placement", "Minimal Heat Transfer", "Glare-Free Light", "Compact Design"],
      benefits: ["Deep Space Lighting", "Architectural Freedom", "Cost Effective"],
      link: "/innovations/skytube",
      color: "from-brand-pink-400 to-brand-cyan-400",
      bgColor: "from-brand-pink-500/10 to-brand-cyan-500/10",
    },
    {
      id: 4,
      name: "NANOSUN RCC Systems",
      shortName: "NANOSUN RCC",
      description:
        "Advanced reinforced concrete compatible daylighting systems designed for heavy-duty industrial applications.",
      shortDescription: "Industrial-grade daylighting for concrete structures",
      image: "/placeholder.svg?height=600&width=800&text=NANOSUN+RCC+Industrial+Installation",
      hoverImage: "/placeholder.svg?height=400&width=600&text=NANOSUN+RCC+Product+Detail",
      icon: Zap,
      features: ["Heavy-Duty Design", "Concrete Compatible", "Industrial Grade", "Long Lifespan"],
      benefits: ["Industrial Durability", "Structural Integration", "Maintenance Free"],
      link: "/innovations/nanosun-rcc",
      color: "from-brand-teal-400 to-brand-purple-400",
      bgColor: "from-brand-teal-500/10 to-brand-purple-500/10",
    },
  ]

  return (
    <section className="py-32 relative bg-gradient-to-b from-slate-900 to-slate-950 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-purple-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-brand-teal-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -80, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 5 }}
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
            className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-purple-600/20 to-brand-teal-500/20 backdrop-blur-xl border border-brand-purple-500/30 rounded-full px-6 py-2 mb-6"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <Lightbulb className="h-4 w-4 text-brand-pink-400" />
            <span className="text-sm font-medium text-gray-300">Innovation Portfolio</span>
          </motion.div>

          <h2 className="text-5xl lg:text-7xl font-bold mb-6">
            <span className="text-white">Our Product</span>
            <br />
            <span className="bg-gradient-to-r from-brand-purple-400 via-brand-pink-400 to-brand-teal-400 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive range of sustainable daylighting and ventilation solutions designed for modern
            architecture.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {innovations.map((innovation, index) => (
            <motion.div
              key={innovation.id}
              className={`relative group cursor-pointer bg-gradient-to-br ${innovation.bgColor} backdrop-blur-sm rounded-3xl border border-white/10 overflow-hidden h-[500px]`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredProduct(innovation.id)}
              onHoverEnd={() => setHoveredProduct(null)}
              whileHover={{ y: -10 }}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={hoveredProduct === innovation.id ? innovation.hoverImage : innovation.image}
                  alt={innovation.name}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-between p-8">
                {/* Top Section */}
                <div className="flex items-start justify-between">
                  <motion.div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${innovation.color} flex items-center justify-center`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <innovation.icon className="h-8 w-8 text-white" />
                  </motion.div>

                  <motion.div
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                  >
                    <Link href={innovation.link}>
                      <Button
                        size="sm"
                        className={`bg-gradient-to-r ${innovation.color} hover:shadow-lg hover:shadow-brand-purple-500/25 text-white border-0`}
                      >
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </motion.div>
                </div>

                {/* Bottom Section */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{innovation.shortName}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {hoveredProduct === innovation.id ? innovation.description : innovation.shortDescription}
                    </p>
                  </div>

                  {/* Features - Show on Hover */}
                  <motion.div
                    className="space-y-3"
                    initial={{ opacity: 0, height: 0 }}
                    animate={
                      hoveredProduct === innovation.id ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }
                    }
                    transition={{ duration: 0.3 }}
                  >
                    <div>
                      <h4 className="text-sm font-semibold text-gray-400 mb-2 flex items-center gap-2">
                        <Zap className="h-4 w-4 text-brand-pink-400" />
                        Key Features
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {innovation.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <Check className="h-3 w-3 text-brand-teal-400" />
                            <span className="text-xs text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-400 mb-2 flex items-center gap-2">
                        <Leaf className="h-4 w-4 text-brand-cyan-400" />
                        Benefits
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {innovation.benefits.map((benefit, idx) => (
                          <span
                            key={idx}
                            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1 text-xs text-gray-300"
                          >
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link href={innovation.link}>
                      <Button className={`bg-gradient-to-r ${innovation.color} hover:shadow-lg text-white w-full mt-4`}>
                        Learn More About {innovation.shortName}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </motion.div>

                  {/* Static CTA - Show when not hovered */}
                  <motion.div
                    initial={{ opacity: 1 }}
                    animate={hoveredProduct === innovation.id ? { opacity: 0 } : { opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link href={innovation.link}>
                      <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 w-full">
                        Explore {innovation.shortName}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </motion.div>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-r ${innovation.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none`}
              />
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
          <div className="bg-gradient-to-r from-brand-purple-900/20 to-brand-teal-900/20 backdrop-blur-xl border border-brand-purple-500/30 rounded-3xl p-12">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Space?</h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Get expert consultation on the perfect daylighting and ventilation solution for your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/innovations">
                <Button className="bg-gradient-to-r from-brand-purple-600 to-brand-teal-500 hover:from-brand-purple-700 hover:to-brand-teal-600 text-white px-10 py-4 rounded-full text-lg">
                  View All Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="border-brand-purple-500 text-brand-purple-400 hover:bg-brand-purple-500/10 px-10 py-4 rounded-full text-lg"
                >
                  Get Consultation
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
