"use client"

import { motion } from "framer-motion"
import { ArrowRight, Award, Calendar, ExternalLink, Star } from "lucide-react"
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
      image: "/images/nanosun-rcc.png",
    },
    {
      name: "Sustainability Excellence Award",
      organization: "Indian Green Building Council",
      year: "2021",
      category: "Product Innovation",
      description:
        "Honored for our NANOSUN daylighting system's contribution to sustainable building practices and exceptional performance in reducing carbon footprint across commercial and industrial projects.",
      image: "/images/nanosun-structural.png",
    },
    {
      name: "Energy Conservation Award",
      organization: "Ministry of Power, Government of India",
      year: "2020",
      category: "Building Technology",
      description:
        "Recognized for developing innovative natural lighting and ventilation solutions that have demonstrably reduced energy consumption in over 100 buildings across India.",
      image: "/images/nanovent.png",
    },
    {
      name: "Innovation Leadership Award",
      organization: "FICCI",
      year: "2019",
      category: "Sustainable Technology",
      description:
        "Awarded for pioneering research and development in sustainable building technologies that address India's unique climate challenges while promoting energy efficiency.",
      image: "/images/skytube.png",
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
    <main className="pt-24 bg-slate-950">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-brand-orange-500/5 blur-3xl rounded-full transform -translate-y-1/2"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase">
              Excellence <span className="brand-gradient-text">& Recognition</span>
            </h1>
            <p className="text-xl text-gray-400 mb-12 leading-relaxed">
              Celebrating over a decade of pioneering sustainable engineering and industrial innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white uppercase tracking-tighter mb-4">Our Evolution</h2>
            <div className="h-1 w-20 bg-brand-orange-500 rounded-full mx-auto"></div>
          </div>
          <TimelineSection />
        </div>
      </section>

      {/* Main Award Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-6">National Achievements</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Recognition from India's most prestigious organizations for our impact on energy conservation and sustainable development.
            </p>
          </div>

          <div className="space-y-40">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                className="grid lg:grid-cols-2 gap-20 items-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className={`relative h-[500px] rounded-[40px] overflow-hidden group ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  <div className="absolute inset-0 bg-gradient-to-tr from-brand-orange-500/20 to-transparent z-10" />
                  <Image src={award.image || "/placeholder.svg"} alt={award.name} fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute top-6 right-6 bg-brand-orange-500 text-white p-4 rounded-2xl z-20 shadow-xl shadow-brand-orange-500/30">
                    <Award className="h-8 w-8" />
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="flex flex-wrap gap-4">
                    <span className="bg-brand-orange-500/10 border border-brand-orange-500/20 text-brand-orange-400 text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full flex items-center">
                      <Star className="h-3 w-3 mr-2" /> {award.category}
                    </span>
                    <span className="bg-white/5 border border-white/10 text-gray-400 text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full flex items-center">
                      <Calendar className="h-3 w-3 mr-2" /> {award.year}
                    </span>
                  </div>

                  <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none">{award.name}</h3>
                  <p className="text-brand-orange-500 font-black uppercase tracking-widest text-sm">{award.organization}</p>
                  <p className="text-gray-400 text-lg leading-relaxed">{award.description}</p>

                  <Button className="bg-white text-black hover:bg-brand-orange-500 hover:text-white transition-all duration-300 rounded-full px-10 py-6 text-lg font-black group">
                    DISCOVER IMPACT <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Coverage */}
      <section className="py-40 relative px-6">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-6">In The Press</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Global perspectives and features on our contributions to sustainable architecture.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {mediaFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm p-10 rounded-[40px] border border-white/10 flex flex-col group hover:bg-brand-orange-500/10 hover:border-brand-orange-500/30 transition-all duration-500 shadow-2xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="mb-8">
                  <p className="text-brand-orange-500 font-black uppercase tracking-widest text-xs mb-2">{feature.publication}</p>
                  <p className="text-gray-500 text-xs uppercase tracking-widest">{feature.date}</p>
                </div>

                <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-6 group-hover:text-brand-orange-400 transition-colors">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-8 flex-grow">{feature.excerpt}</p>

                <a
                  href={feature.link}
                  className="inline-flex items-center text-white font-bold group/link"
                >
                  READ ARTICLE <ArrowRight className="ml-3 h-5 w-5 text-brand-orange-500 group-hover/link:translate-x-2 transition-transform" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative px-6">
        <div className="container mx-auto">
          <motion.div
            className="bg-brand-gradient p-20 rounded-[60px] text-center shadow-2xl shadow-brand-orange-500/20 relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.05] pointer-events-none"></div>
            <h2 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter uppercase relative z-10">
              Work With The <span className="underline decoration-white/20 underline-offset-8">Best</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-12 leading-relaxed relative z-10 font-medium">
              Join the hundreds of organizations that trust Uday IKSA for award-winning sustainable building solutions.
            </p>
            <Button size="lg" className="bg-white text-black hover:bg-black hover:text-white transition-all duration-300 rounded-2xl px-12 py-8 text-xl font-black relative z-10 shadow-2xl">
              START YOUR PROJECT <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
