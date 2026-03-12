"use client"

import { motion } from "framer-motion"
import { ArrowRight, Award, Calendar, ExternalLink, Star } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
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
      image: "/images/web site images/catlog awards iim.jpg",
    },
    {
      name: "Sustainability Excellence Award",
      organization: "Indian Green Building Council",
      year: "2021",
      category: "Product Innovation",
      description:
        "Honored for our NANOSUN daylighting system's contribution to sustainable building practices and exceptional performance in reducing carbon footprint across commercial and industrial projects.",
      image: "/images/gallery/nanosun/PEB 1.jpeg",
    },
    {
      name: "Energy Conservation Award",
      organization: "Ministry of Power, Government of India",
      year: "2020",
      category: "Building Technology",
      description:
        "Recognized for developing innovative natural lighting and ventilation solutions that have demonstrably reduced energy consumption in over 100 buildings across India.",
      image: "/images/gallery/nanovent/RCC - Turbo Ventilator .png",
    },
    {
      name: "Innovation Leadership Award",
      organization: "FICCI",
      year: "2019",
      category: "Sustainable Technology",
      description:
        "Awarded for pioneering research and development in sustainable building technologies that address India's unique climate challenges while promoting energy efficiency.",
      image: "/images/gallery/nanosun/PEB 5.jpeg",
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
      {/* Hero Section - Refined Scale */}
      <section className="relative py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-brand-orange-500/5 blur-3xl rounded-full transform -translate-y-1/2"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tighter uppercase leading-[0.9]">
              Excellence <span className="brand-gradient-text">& Recognition</span>
            </h1>
            <p className="text-base md:text-lg text-gray-400 mb-8 leading-relaxed max-w-2xl mx-auto font-medium">
              Celebrating over a decade of pioneering sustainable engineering and industrial innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="py-12 relative">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter mb-4">Our Evolution</h2>
            <div className="h-0.5 w-16 bg-brand-orange-500 rounded-full mx-auto"></div>
          </div>
          <TimelineSection />
        </div>
      </section>

      {/* National Achievements - Optimized Grid */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tighter mb-4">National Achievements</h2>
            <p className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto leading-relaxed font-medium">
              Recognition from India's most prestigious organizations for our impact on energy conservation and sustainable development.
            </p>
          </div>

          <div className="space-y-24 max-w-6xl mx-auto">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                className="grid lg:grid-cols-2 gap-12 items-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className={`relative h-[350px] md:h-[450px] rounded-[48px] border border-white/10 bg-white/[0.02] flex items-center justify-center overflow-hidden group ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  <div className="absolute inset-0 bg-gradient-to-tr from-brand-orange-500/10 to-transparent z-10" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] group-hover:opacity-[0.05] transition-opacity">
                    <p className="text-[120px] font-black uppercase tracking-tighter select-none -rotate-12">{award.year}</p>
                  </div>
                  <div className="relative z-20 text-center">
                    <Award className="h-32 w-32 text-brand-orange-500/20 mb-8 mx-auto group-hover:scale-110 group-hover:rotate-12 transition-transform duration-700" />
                    <div className="bg-brand-orange-500/10 px-6 py-2 rounded-full border border-brand-orange-500/20 inline-block font-black text-[10px] uppercase tracking-widest text-brand-orange-500">
                      National Recognition
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-brand-orange-500/10 border border-brand-orange-500/20 text-brand-orange-400 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full flex items-center">
                      <Star className="h-2.5 w-2.5 mr-1.5" /> {award.category}
                    </span>
                    <span className="bg-white/5 border border-white/10 text-gray-400 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full flex items-center">
                      <Calendar className="h-2.5 w-2.5 mr-1.5" /> {award.year}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter leading-tight">{award.name}</h3>
                  <p className="text-brand-orange-500 font-black uppercase tracking-widest text-[11px]">{award.organization}</p>
                  <p className="text-gray-400 text-sm leading-relaxed font-medium">{award.description}</p>

                  <Button className="bg-white/5 border border-white/10 text-white hover:bg-brand-orange-500 hover:text-white transition-all duration-300 rounded-xl px-8 py-5 text-xs font-black uppercase tracking-widest group">
                    DISCOVER IMPACT <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Coverage - Professional Grid */}
      <section className="py-24 relative px-6 bg-slate-900/10 border-y border-white/5">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter mb-4">In The Press</h2>
            <div className="h-0.5 w-16 bg-brand-orange-500 rounded-full mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {mediaFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-[32px] border border-white/10 flex flex-col group hover:border-brand-orange-500/40 transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="mb-6">
                  <p className="text-brand-orange-500 font-black uppercase tracking-widest text-[9px] mb-1">{feature.publication}</p>
                  <p className="text-gray-500 text-[9px] uppercase tracking-widest">{feature.date}</p>
                </div>

                <h3 className="text-lg font-black text-white uppercase tracking-tighter mb-4 group-hover:text-brand-orange-400 transition-colors leading-tight">{feature.title}</h3>
                <p className="text-gray-500 text-[13px] leading-relaxed mb-6 flex-grow font-medium">{feature.excerpt}</p>

                <a
                  href={feature.link}
                  className="inline-flex items-center text-white text-[10px] font-black uppercase tracking-widest group/link"
                >
                  READ ARTICLE <ArrowRight className="ml-2 h-4 w-4 text-brand-orange-500 group-hover/link:translate-x-2 transition-transform" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section - Compact & High-Impact */}
      <section className="py-20 relative px-6">
        <div className="container mx-auto">
          <motion.div
            className="bg-brand-gradient py-12 px-8 rounded-[40px] text-center shadow-2xl shadow-brand-orange-500/10 relative overflow-hidden max-w-4xl mx-auto"
            whileHover={{ scale: 1.005 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute inset-0 bg-grid-white/[0.03] pointer-events-none opacity-50"></div>
            <h2 className="text-2xl md:text-5xl font-black text-white mb-6 tracking-tighter uppercase relative z-10 leading-none">
              Work With The <span className="underline decoration-white/20 underline-offset-8">Best</span>
            </h2>
            <p className="text-sm md:text-base text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed relative z-10 font-medium">
              Join the hundreds of organizations that trust Uday IKSA for award-winning sustainable building solutions.
            </p>
            <Button asChild className="bg-white text-black hover:bg-slate-900 hover:text-white transition-all duration-300 rounded-xl px-10 py-4 text-xs font-black uppercase tracking-widest relative z-10 shadow-2xl">
              <Link href="/contact">
                START YOUR PROJECT <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
