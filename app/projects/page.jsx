"use client"

import { motion } from "framer-motion"
import { ArrowRight, Building2, Building, Home, Globe } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ProjectsPage() {
  const projectCategories = [
    {
      id: "industrial",
      name: "Industrial Projects",
      description:
        "Transforming industrial facilities with energy-efficient natural lighting and ventilation solutions.",
      image: "/placeholder.svg?height=600&width=800",
      link: "/projects/industrial",
      icon: Building2,
      count: 120,
    },
    {
      id: "commercial",
      name: "Commercial Projects",
      description:
        "Creating comfortable, sustainable environments for offices, retail spaces, and commercial buildings.",
      image: "/placeholder.svg?height=600&width=800",
      link: "/projects/commercial",
      icon: Building,
      count: 85,
    },
    {
      id: "institutional",
      name: "Institutional Projects",
      description: "Enhancing learning and healthcare environments with natural daylight and fresh air circulation.",
      image: "/placeholder.svg?height=600&width=800",
      link: "/projects/institutional",
      icon: Home,
      count: 65,
    },
  ]

  const featuredProjects = [
    {
      name: "Tata Steel Manufacturing Plant",
      location: "Mumbai, Maharashtra",
      category: "Industrial",
      description:
        "Installation of 200+ NANOSUN daylighting systems across 50,000 sq. ft. manufacturing facility, reducing energy consumption by 35%.",
      image: "/placeholder.svg?height=500&width=800",
    },
    {
      name: "Infosys Tech Park",
      location: "Bangalore, Karnataka",
      category: "Commercial",
      description:
        "Comprehensive natural ventilation and daylighting solution for a modern office complex, creating a healthier work environment for 2,000+ employees.",
      image: "/placeholder.svg?height=500&width=800",
    },
    {
      name: "National Science Campus",
      location: "Delhi, NCR",
      category: "Institutional",
      description:
        "Integration of NANOSUN and NANOVENT systems across multiple educational buildings, showcasing sustainable design principles.",
      image: "/placeholder.svg?height=500&width=800",
    },
  ]

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20 z-0"></div>
        <div className="light-beam absolute inset-0 z-0"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">Our Projects</h1>
            <p className="text-xl text-gray-300 mb-8">
              Transforming spaces across India with innovative natural daylight and ventilation solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Categories */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-text">Project Categories</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our diverse portfolio of projects across various sectors.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projectCategories.map((category, index) => (
              <motion.div
                key={category.id}
                className="bg-black/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-purple-900/30 h-full flex flex-col"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, boxShadow: "0 0 20px rgba(138, 43, 226, 0.4)" }}
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10"></div>
                  <Image src={category.image || "/placeholder.svg"} alt={category.name} fill className="object-cover" />
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-teal-500 text-white text-sm font-bold px-3 py-1 rounded-full z-20">
                    {category.count}+ Projects
                  </div>
                </div>

                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-br from-purple-600 to-teal-500 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      <category.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold gradient-text">{category.name}</h3>
                  </div>

                  <p className="text-gray-300 mb-6 flex-grow">{category.description}</p>

                  <Link href={category.link}>
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600 text-white">
                      View Projects <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 relative bg-black/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-text">Featured Projects</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Highlighting some of our most impactful implementations across India.
            </p>
          </div>

          <div className="space-y-16">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                className="grid md:grid-cols-2 gap-12 items-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                {index % 2 === 0 ? (
                  <>
                    <div className="relative h-[400px] rounded-2xl overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 to-teal-900/30 z-10 rounded-2xl"></div>
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div>
                      <div className="mb-2">
                        <span className="bg-gradient-to-r from-purple-600/20 to-teal-500/20 text-teal-400 text-sm font-medium px-3 py-1 rounded-full">
                          {project.category}
                        </span>
                      </div>
                      <h3 className="text-3xl font-bold gradient-text mb-2">{project.name}</h3>
                      <p className="text-gray-400 mb-4 flex items-center">
                        <Globe className="h-4 w-4 mr-2" /> {project.location}
                      </p>
                      <p className="text-gray-300 mb-6">{project.description}</p>
                      <Button className="bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600 text-white">
                        View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <div className="mb-2">
                        <span className="bg-gradient-to-r from-purple-600/20 to-teal-500/20 text-teal-400 text-sm font-medium px-3 py-1 rounded-full">
                          {project.category}
                        </span>
                      </div>
                      <h3 className="text-3xl font-bold gradient-text mb-2">{project.name}</h3>
                      <p className="text-gray-400 mb-4 flex items-center">
                        <Globe className="h-4 w-4 mr-2" /> {project.location}
                      </p>
                      <p className="text-gray-300 mb-6">{project.description}</p>
                      <Button className="bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600 text-white">
                        View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>

                    <div className="relative h-[400px] rounded-2xl overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 to-teal-900/30 z-10 rounded-2xl"></div>
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Map */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-text">Our Global Reach</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our project locations across India and beyond.
            </p>
          </div>

          <div className="relative h-[500px] rounded-2xl overflow-hidden border border-purple-900/30 glow-border">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-teal-900/20"></div>
            <div className="absolute inset-0 grid-pattern opacity-30"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Globe className="h-64 w-64 text-purple-500/20" />
            </div>

            {[
              { name: "Mumbai Project", location: [19.076, 72.8777] },
              { name: "Bangalore Project", location: [12.9716, 77.5946] },
              { name: "Delhi Project", location: [28.7041, 77.1025] },
              { name: "Chennai Project", location: [13.0827, 80.2707] },
              { name: "Hyderabad Project", location: [17.385, 78.4867] },
              { name: "Kolkata Project", location: [22.5726, 88.3639] },
              { name: "Ahmedabad Project", location: [23.0225, 72.5714] },
              { name: "Pune Project", location: [18.5204, 73.8567] },
            ].map((project, index) => (
              <motion.div
                key={index}
                className="absolute w-4 h-4 rounded-full bg-gradient-to-r from-purple-600 to-teal-500 cursor-pointer"
                style={{
                  left: `${((project.location[1] + 180) / 360) * 100}%`,
                  top: `${((90 - project.location[0]) / 180) * 100}%`,
                }}
                whileHover={{ scale: 1.5 }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full mt-2 w-48 p-2 bg-black/80 backdrop-blur-sm rounded-lg opacity-0 hover:opacity-100 transition-opacity z-10 text-center">
                  <p className="font-bold text-sm">{project.name}</p>
                </div>
                <div className="animate-ping absolute inset-0 rounded-full bg-purple-500 opacity-75"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative bg-gradient-to-r from-purple-900/50 to-teal-900/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 glow-text">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Contact us today to discuss how our natural daylight and ventilation solutions can transform your space.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600 text-white rounded-full px-8"
          >
            Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </main>
  )
}
