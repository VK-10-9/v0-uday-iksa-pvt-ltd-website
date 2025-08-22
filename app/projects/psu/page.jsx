"use client"

import { motion } from "framer-motion"
import { ArrowRight, Building2, Globe, Calendar, CheckCircle } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function PSUProjectsPage() {
  const projects = [
    {
      name: "NTPC Power Plant Complex",
      location: "Uttar Pradesh",
      year: "2023",
      description:
        "Comprehensive natural lighting solution for India's largest power generation company, covering administrative buildings and control rooms across 75,000 sq. ft.",
      results: [
        "40% reduction in energy consumption",
        "Improved working conditions for 500+ employees",
        "Enhanced safety in control rooms",
        "Government sustainability compliance achieved",
      ],
      image: "/placeholder.svg?height=500&width=800",
    },
    {
      name: "Indian Railways Headquarters",
      location: "New Delhi",
      year: "2022",
      description:
        "Strategic implementation of NANOSUN and NANOVENT systems across multiple railway administrative buildings, creating sustainable government workspaces.",
      results: [
        "35% energy savings on lighting",
        "Improved air quality in offices",
        "Enhanced employee productivity",
        "Reduced carbon footprint significantly",
      ],
      image: "/placeholder.svg?height=500&width=800",
    },
    {
      name: "ONGC Regional Office",
      location: "Mumbai, Maharashtra",
      year: "2021",
      description:
        "Custom daylighting and ventilation solution for oil and gas sector offices, addressing specific requirements for technical workspaces and meeting rooms.",
      results: [
        "45% reduction in HVAC costs",
        "Better visibility for technical drawings",
        "Improved meeting room environments",
        "Sustainable energy practices implemented",
      ],
      image: "/placeholder.svg?height=500&width=800",
    },
    {
      name: "BHEL Manufacturing Unit",
      location: "Bhopal, Madhya Pradesh",
      year: "2020",
      description:
        "Large-scale natural lighting implementation for heavy engineering manufacturing facility, balancing industrial requirements with energy efficiency.",
      results: [
        "30% energy cost reduction",
        "Enhanced manufacturing floor visibility",
        "Improved worker safety metrics",
        "Sustainable manufacturing practices",
      ],
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
            <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">PSU Projects</h1>
            <p className="text-xl text-gray-300 mb-8">
              Partnering with Public Sector Undertakings to deliver sustainable lighting and ventilation solutions for
              government facilities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6">PSU Excellence</h2>
              <p className="text-gray-300 mb-4">
                Our PSU projects demonstrate our capability to work with India's largest public sector organizations,
                delivering sustainable solutions that meet government standards and compliance requirements.
              </p>
              <p className="text-gray-300 mb-4">
                We understand the unique challenges of government facilities, from budget constraints to regulatory
                compliance. Our solutions are designed to deliver maximum value while meeting all necessary standards
                and certifications.
              </p>
              <p className="text-gray-300 mb-6">
                With over 45 PSU projects completed, we have established ourselves as a trusted partner for government
                organizations seeking sustainable infrastructure solutions.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-teal-500 flex items-center justify-center mr-3">
                    <Building2 className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold">45+</p>
                    <p className="text-sm text-gray-400">PSU Projects</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-teal-500 flex items-center justify-center mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold">38%</p>
                    <p className="text-sm text-gray-400">Avg. Energy Savings</p>
                  </div>
                </div>
              </div>
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
                alt="PSU Project Overview"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Showcase */}
      <section className="py-20 relative bg-black/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-text">Featured PSU Projects</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our most impactful implementations with government organizations.
            </p>
          </div>

          <div className="space-y-24">
            {projects.map((project, index) => (
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
                      <div className="flex flex-wrap gap-3 mb-3">
                        <span className="bg-gradient-to-r from-purple-600/20 to-teal-500/20 text-teal-400 text-sm font-medium px-3 py-1 rounded-full flex items-center">
                          <Globe className="h-3 w-3 mr-1" /> {project.location}
                        </span>
                        <span className="bg-gradient-to-r from-purple-600/20 to-teal-500/20 text-purple-400 text-sm font-medium px-3 py-1 rounded-full flex items-center">
                          <Calendar className="h-3 w-3 mr-1" /> {project.year}
                        </span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold gradient-text mb-4">{project.name}</h3>
                      <p className="text-gray-300 mb-6">{project.description}</p>

                      <div className="mb-6">
                        <h4 className="text-lg font-semibold mb-3 text-teal-400">Key Results:</h4>
                        <ul className="space-y-2">
                          {project.results.map((result, idx) => (
                            <li key={idx} className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-teal-500 mr-2 mt-0.5" />
                              <span className="text-gray-300">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button className="bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600 text-white">
                        View Full Case Study <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <div className="flex flex-wrap gap-3 mb-3">
                        <span className="bg-gradient-to-r from-purple-600/20 to-teal-500/20 text-teal-400 text-sm font-medium px-3 py-1 rounded-full flex items-center">
                          <Globe className="h-3 w-3 mr-1" /> {project.location}
                        </span>
                        <span className="bg-gradient-to-r from-purple-600/20 to-teal-500/20 text-purple-400 text-sm font-medium px-3 py-1 rounded-full flex items-center">
                          <Calendar className="h-3 w-3 mr-1" /> {project.year}
                        </span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold gradient-text mb-4">{project.name}</h3>
                      <p className="text-gray-300 mb-6">{project.description}</p>

                      <div className="mb-6">
                        <h4 className="text-lg font-semibold mb-3 text-teal-400">Key Results:</h4>
                        <ul className="space-y-2">
                          {project.results.map((result, idx) => (
                            <li key={idx} className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-teal-500 mr-2 mt-0.5" />
                              <span className="text-gray-300">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button className="bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600 text-white">
                        View Full Case Study <ArrowRight className="ml-2 h-4 w-4" />
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

      {/* Testimonial */}
      <section className="py-20 relative">
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
                  "Uday IKSA's implementation at our power plant has exceeded expectations. The natural lighting systems
                  have significantly reduced our energy consumption while improving working conditions for our staff.
                  Their understanding of PSU requirements and compliance standards made the entire process seamless."
                </p>
                <p className="font-bold gradient-text">Rajesh Kumar</p>
                <p className="text-sm text-gray-400">General Manager, NTPC</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative bg-gradient-to-r from-purple-900/50 to-teal-900/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 glow-text">Partner with Us for Your PSU Project</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Contact us today to discuss how our natural daylight and ventilation solutions can meet your government
            facility requirements while achieving significant energy savings.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600 text-white rounded-full px-8"
          >
            Request a Consultation <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </main>
  )
}
