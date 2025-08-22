"use client"

import { motion } from "framer-motion"
import { ArrowRight, Award, Calendar, ExternalLink } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import TimelineSection from "@/components/home/timeline-section"

export default function AwardsPage() {
  const awards = [
    {
      name: "CII INNOVERGE 2022 National Award",
      organization: "Confederation of Indian Industry",
      year: "2022",
      category: "Green Innovation",
      description:
        "Recognized by CII Yi – Apollo Innovation for our groundbreaking technology in green solar lighting and natural ventilation systems that significantly reduce energy consumption in buildings.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      name: "Sustainability Excellence Award",
      organization: "Indian Green Building Council",
      year: "2021",
      category: "Product Innovation",
      description:
        "Honored for our NANOSUN daylighting system's contribution to sustainable building practices and exceptional performance in reducing carbon footprint across commercial and industrial projects.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      name: "Energy Conservation Award",
      organization: "Ministry of Power, Government of India",
      year: "2020",
      category: "Building Technology",
      description:
        "Recognized for developing innovative natural lighting and ventilation solutions that have demonstrably reduced energy consumption in over 100 buildings across India.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      name: "Innovation Leadership Award",
      organization: "Federation of Indian Chambers of Commerce & Industry",
      year: "2019",
      category: "Sustainable Technology",
      description:
        "Awarded for pioneering research and development in sustainable building technologies that address India's unique climate challenges while promoting energy efficiency.",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  const mediaFeatures = [
    {
      title: "Revolutionizing Natural Lighting: Uday IKSA's Innovative Approach",
      publication: "The Economic Times",
      date: "December 2022",
      excerpt:
        "An in-depth look at how Uday IKSA is transforming industrial and commercial spaces with their award-winning natural lighting solutions...",
      link: "#",
    },
    {
      title: "Green Building Champions: The Rise of Uday IKSA",
      publication: "Architecture & Design Magazine",
      date: "August 2022",
      excerpt:
        "Profile feature on Uday IKSA's journey from a small startup to becoming a leader in sustainable building technologies in India...",
      link: "#",
    },
    {
      title: "How Natural Ventilation is Changing India's Building Landscape",
      publication: "Sustainability Today",
      date: "March 2021",
      excerpt:
        "Feature article exploring the impact of Uday IKSA's NANOVENT systems on energy consumption and indoor air quality in commercial buildings...",
      link: "#",
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
            <h1 className="text-4xl md:text-6xl font-bold brand-gradient-text mb-6">Awards & Recognition</h1>
            <p className="text-xl text-gray-300 mb-8">
              Celebrating our commitment to innovation and excellence in sustainable building technologies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="py-20 relative bg-black/50">
        <div className="container mx-auto px-4">
          <TimelineSection />
        </div>
      </section>

      {/* Main Award Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 brand-gradient-text">Our Achievements</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Recognition of our dedication to pioneering sustainable solutions for natural daylight and ventilation.
            </p>
          </div>

          <div className="space-y-24">
            {awards.map((award, index) => (
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
                      <div className="absolute inset-0 from-brand-purple-500/20 to-brand-teal-500/20 z-10 rounded-2xl bg-brand-gradient"></div>
                      <Image src={award.image || "/placeholder.svg"} alt={award.name} fill className="object-cover" />
                    </div>

                    <div>
                      <div className="flex flex-wrap gap-3 mb-3">
                        <span className="bg-brand-gradient text-brand-teal-400 text-sm font-medium px-3 py-1 rounded-full flex items-center">
                          <Award className="h-3 w-3 mr-1" /> {award.category}
                        </span>
                        <span className="bg-brand-gradient text-brand-purple-400 text-sm font-medium px-3 py-1 rounded-full flex items-center">
                          <Calendar className="h-3 w-3 mr-1" /> {award.year}
                        </span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold brand-gradient-text mb-2">{award.name}</h3>
                      <p className="text-brand-teal-400 mb-4">{award.organization}</p>
                      <p className="text-gray-300 mb-6">{award.description}</p>

                      <Button className="bg-brand-gradient hover:opacity-90 text-white">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <div className="flex flex-wrap gap-3 mb-3">
                        <span className="bg-brand-gradient text-brand-teal-400 text-sm font-medium px-3 py-1 rounded-full flex items-center">
                          <Award className="h-3 w-3 mr-1" /> {award.category}
                        </span>
                        <span className="bg-brand-gradient text-brand-purple-400 text-sm font-medium px-3 py-1 rounded-full flex items-center">
                          <Calendar className="h-3 w-3 mr-1" /> {award.year}
                        </span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold brand-gradient-text mb-2">{award.name}</h3>
                      <p className="text-brand-teal-400 mb-4">{award.organization}</p>
                      <p className="text-gray-300 mb-6">{award.description}</p>

                      <Button className="bg-brand-gradient hover:opacity-90 text-white">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>

                    <div className="relative h-[400px] rounded-2xl overflow-hidden">
                      <div className="absolute inset-0 from-brand-purple-500/20 to-brand-teal-500/20 z-10 rounded-2xl bg-brand-gradient"></div>
                      <Image src={award.image || "/placeholder.svg"} alt={award.name} fill className="object-cover" />
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Coverage */}
      <section className="py-20 relative bg-black/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 brand-gradient-text">Media Coverage</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Featured stories about our innovations and impact in leading publications.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {mediaFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-black/30 backdrop-blur-sm p-8 rounded-2xl border border-brand-purple-500/30 brand-glow h-full flex flex-col"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, boxShadow: "0 0 20px rgba(138, 43, 226, 0.4)" }}
              >
                <h3 className="text-xl font-bold brand-gradient-text mb-2">{feature.title}</h3>
                <div className="flex justify-between items-center mb-4">
                  <p className="text-brand-teal-400 text-sm">{feature.publication}</p>
                  <p className="text-gray-400 text-sm">{feature.date}</p>
                </div>
                <p className="text-gray-300 mb-6 flex-grow">{feature.excerpt}</p>
                <a
                  href={feature.link}
                  className="text-brand-purple-400 hover:text-purple-300 inline-flex items-center mt-auto"
                >
                  Read Full Article <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition Showcase */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 brand-gradient-text">Industry Recognition</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Trusted and recognized by leading organizations in the industry.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
              <motion.div
                key={index}
                className="bg-black/30 backdrop-blur-sm p-6 rounded-2xl border border-brand-purple-500/30 flex items-center justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: "0 0 20px rgba(138, 43, 226, 0.4)" }}
              >
                <div className="relative h-20 w-full">
                  <Image
                    src={`/placeholder.svg?height=100&width=200&text=Partner ${item}`}
                    alt={`Industry Partner ${item}`}
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
          <h2 className="text-3xl md:text-5xl font-bold mb-6 brand-gradient-text">
            Experience Award-Winning Innovation
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Discover how our nationally recognized solutions can transform your space with sustainable natural lighting
            and ventilation.
          </p>
          <Button size="lg" className="bg-brand-gradient hover:opacity-90 text-white rounded-full px-8">
            Contact Us Today <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </main>
  )
}
