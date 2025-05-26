"use client"

import { motion } from "framer-motion"
import { ArrowRight, Lightbulb, Microscope, LineChart, BookOpen } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function ResearchPage() {
  const researchAreas = [
    {
      title: "Advanced Materials",
      description:
        "Developing next-generation materials with enhanced light transmission, thermal insulation, and durability properties.",
      icon: Microscope,
    },
    {
      title: "Airflow Dynamics",
      description:
        "Studying and optimizing natural airflow patterns to maximize ventilation efficiency in various building types.",
      icon: LineChart,
    },
    {
      title: "Energy Efficiency",
      description:
        "Researching methods to further reduce energy consumption through innovative daylighting and ventilation designs.",
      icon: Lightbulb,
    },
    {
      title: "Integration Technologies",
      description:
        "Creating seamless integration systems that combine daylighting, ventilation, and building management systems.",
      icon: BookOpen,
    },
  ]

  const publications = [
    {
      title: "Optimizing Natural Ventilation in Industrial Spaces",
      authors: "Dr. Rajesh Kumar, Dr. Priya Sharma",
      journal: "Journal of Sustainable Engineering, 2023",
      abstract:
        "This paper presents a novel approach to optimizing natural ventilation in large industrial spaces using computational fluid dynamics and real-world testing.",
    },
    {
      title: "Comparative Analysis of Daylighting Systems for Energy Conservation",
      authors: "Vikram Patel, Ananya Desai",
      journal: "Renewable Energy Quarterly, 2022",
      abstract:
        "A comprehensive study comparing various daylighting systems and their impact on energy consumption in commercial buildings across different climate zones in India.",
    },
    {
      title: "Thermal Performance of Advanced Polycarbonate Materials in Tropical Climates",
      authors: "Dr. Priya Sharma, Sanjay Mehta",
      journal: "Materials Science and Sustainability, 2021",
      abstract:
        "This research examines the thermal performance of next-generation polycarbonate materials used in daylighting systems under extreme tropical climate conditions.",
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
              <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">Research & Development</h1>
              <p className="text-xl text-gray-300 mb-8">
                Pioneering the future of sustainable building technologies through continuous innovation and scientific
                advancement.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600 text-white rounded-full px-8"
                >
                  Explore Our Research <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-purple-500 text-purple-500 hover:bg-purple-500/10 rounded-full px-8"
                >
                  View Publications
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
                alt="Research Laboratory"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-text">Our Research Philosophy</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              At Uday IKSA, innovation is driven by a commitment to scientific excellence and sustainable development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold gradient-text mb-4">Advancing Sustainable Technologies</h3>
              <p className="text-gray-300 mb-4">
                Our research and development team is dedicated to pushing the boundaries of what's possible in natural
                daylighting and ventilation. We combine rigorous scientific methodology with practical engineering to
                create solutions that are both innovative and implementable.
              </p>
              <p className="text-gray-300 mb-4">
                Through partnerships with leading universities and research institutions, we stay at the forefront of
                materials science, fluid dynamics, and sustainable building technologies. Our state-of-the-art
                laboratory facilities enable us to test and refine our innovations before bringing them to market.
              </p>
              <p className="text-gray-300 mb-6">
                Every product we develop undergoes extensive testing and validation to ensure it meets our high
                standards for performance, durability, and sustainability. This commitment to excellence has earned us
                recognition as leaders in green building technology.
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
              <Image src="/placeholder.svg?height=800&width=600" alt="Research Process" fill className="object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20 relative bg-black/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-text">Research Areas</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our R&D team focuses on several key areas to drive innovation in sustainable building technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {researchAreas.map((area, index) => (
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
                  <area.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{area.title}</h3>
                <p className="text-gray-300">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-text">Recent Publications</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our team regularly publishes research findings in leading scientific journals.
            </p>
          </div>

          <div className="space-y-8">
            {publications.map((publication, index) => (
              <motion.div
                key={index}
                className="bg-black/30 backdrop-blur-sm p-8 rounded-2xl border border-purple-900/30 glow-border"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ boxShadow: "0 0 20px rgba(138, 43, 226, 0.4)" }}
              >
                <h3 className="text-2xl font-bold gradient-text mb-2">{publication.title}</h3>
                <p className="text-teal-400 mb-2">{publication.authors}</p>
                <p className="text-sm text-gray-400 mb-4">{publication.journal}</p>
                <p className="text-gray-300">{publication.abstract}</p>
                <Button variant="link" className="text-purple-400 hover:text-purple-300 p-0 mt-4">
                  Read Full Paper <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration */}
      <section className="py-20 relative bg-black/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-text">Research Collaborations</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We partner with leading institutions to advance sustainable building technologies.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((item, index) => (
              <motion.div
                key={index}
                className="bg-black/30 backdrop-blur-sm p-6 rounded-2xl border border-purple-900/30 flex items-center justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: "0 0 20px rgba(138, 43, 226, 0.4)" }}
              >
                <div className="relative h-20 w-full">
                  <Image
                    src={`/placeholder.svg?height=100&width=200&text=Partner ${item}`}
                    alt={`Research Partner ${item}`}
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative bg-gradient-to-r from-purple-900/50 to-teal-900/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 glow-text">Interested in Collaborating?</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            We're always looking for research partners and talented individuals to join our mission of advancing
            sustainable building technologies.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600 text-white rounded-full px-8"
            >
              Contact Our R&D Team <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-purple-500 text-purple-500 hover:bg-purple-500/10 rounded-full px-8"
            >
              View Research Opportunities
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
