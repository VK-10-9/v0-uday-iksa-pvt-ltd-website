"use client"

import { motion } from "framer-motion"
import { ArrowRight, Leaf, Zap, ThermometerSun, Building } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function NanoventPage() {
  const features = [
    {
      title: "Zero Energy Consumption",
      description: "Operates entirely on natural air currents, requiring no electricity to function effectively.",
      icon: Zap,
    },
    {
      title: "Improved Air Quality",
      description:
        "Continuously exchanges stale indoor air with fresh outdoor air, reducing pollutants and CO2 levels.",
      icon: Leaf,
    },
    {
      title: "Temperature Regulation",
      description: "Helps maintain comfortable indoor temperatures by removing hot air and reducing humidity.",
      icon: ThermometerSun,
    },
    {
      title: "Adaptable Design",
      description: "Customizable to fit various building types and roof structures with minimal modifications.",
      icon: Building,
    },
  ]

  const applications = [
    {
      name: "Industrial Facilities",
      image: "/placeholder.svg?height=300&width=400",
      description: "Ideal for factories, warehouses, and production areas requiring constant air exchange.",
    },
    {
      name: "Commercial Buildings",
      image: "/placeholder.svg?height=300&width=400",
      description: "Perfect for offices, retail spaces, and public buildings seeking improved air quality.",
    },
    {
      name: "Institutional Spaces",
      image: "/placeholder.svg?height=300&width=400",
      description: "Enhances learning environments in schools, colleges, and healthcare facilities.",
    },
  ]

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20 z-0"></div>
        <div className="light-beam absolute inset-0 z-0"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">NANOVENT Ventilation Systems</h1>
              <p className="text-xl text-gray-300 mb-8">
                Revolutionary natural ventilation technology that creates healthier, more comfortable indoor
                environments without consuming electricity.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600 text-white rounded-full px-8"
                >
                  Request a Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-purple-500 text-purple-500 hover:bg-purple-500/10 rounded-full px-8"
                >
                  Download Brochure
                </Button>
              </div>
            </motion.div>

            <motion.div
              className="relative h-[400px] rounded-2xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 to-teal-900/30 z-10 rounded-2xl"></div>
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="NANOVENT Ventilation System"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-text">Product Overview</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The NANOVENT system harnesses natural air currents to create a continuous flow of fresh air throughout
              buildings without using electricity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold gradient-text mb-4">How It Works</h3>
              <p className="text-gray-300 mb-4">
                NANOVENT utilizes the principles of stack effect and wind-driven ventilation to create a natural flow of
                air through buildings. As warm air rises, it exits through strategically placed vents at the top of the
                structure, creating negative pressure that draws fresh air in through lower-level inlets.
              </p>
              <p className="text-gray-300 mb-4">
                Our patented design includes adjustable vents that can be calibrated to optimize airflow based on
                building size, occupancy, and local climate conditions. The system works silently and continuously,
                requiring no maintenance or energy input.
              </p>
              <p className="text-gray-300 mb-6">
                NANOVENT can be integrated with NANOSUN daylighting systems for a comprehensive natural solution that
                addresses both lighting and ventilation needs.
              </p>
            </motion.div>

            <motion.div
              className="relative h-[400px] rounded-2xl overflow-hidden"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 to-teal-900/30 z-10 rounded-2xl"></div>
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="NANOVENT Technology Diagram"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 relative bg-black/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-text">Key Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              What makes NANOVENT the most efficient natural ventilation solution available.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-black/30 backdrop-blur-sm p-8 rounded-2xl border border-purple-900/30 glow-border"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, boxShadow: "0 0 20px rgba(138, 43, 226, 0.4)" }}
              >
                <div className="bg-gradient-to-br from-purple-600 to-teal-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-text">Applications</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              NANOVENT systems can be implemented across various building types to improve air quality and reduce energy
              costs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {applications.map((application, index) => (
              <motion.div
                key={index}
                className="bg-black/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-purple-900/30"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, boxShadow: "0 0 20px rgba(138, 43, 226, 0.4)" }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={application.image || "/placeholder.svg"}
                    alt={application.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold gradient-text mb-3">{application.name}</h3>
                  <p className="text-gray-300">{application.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 relative bg-black/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-black/30 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-purple-900/30 glow-border">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3">
                <div className="relative w-32 h-32 mx-auto">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-teal-500 blur-md opacity-50"></div>
                  <div className="relative h-full w-full rounded-full overflow-hidden border-2 border-purple-500">
                    <Image src="/placeholder.svg?height=200&width=200" alt="Client" fill className="object-cover" />
                  </div>
                </div>
              </div>

              <div className="md:w-2/3 text-center md:text-left">
                <svg className="h-8 w-8 text-purple-500 mb-4 mx-auto md:mx-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-300 text-lg mb-4">
                  "The NANOVENT system has completely transformed our office environment. Our employees report feeling
                  more alert and comfortable, and we've eliminated the need for electric ventilation systems. The air
                  quality improvement was noticeable from day one."
                </p>
                <p className="font-bold gradient-text">Priya Sharma</p>
                <p className="text-sm text-gray-400">Facilities Manager, TechSphere Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative bg-gradient-to-r from-purple-900/50 to-teal-900/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 glow-text">Breathe Better, Naturally</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Contact us today to learn how NANOVENT can improve air quality in your building while reducing energy costs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600 text-white rounded-full px-8"
            >
              Request a Consultation <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-purple-500 text-purple-500 hover:bg-purple-500/10 rounded-full px-8"
            >
              View Case Studies
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
