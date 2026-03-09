"use client"

import { motion } from "framer-motion"
import { ArrowRight, Building, Globe, Calendar, CheckCircle, ShieldCheck, Zap, Sparkles, Building2 } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CommercialProjectsPage() {
  const projects = [
    {
      name: "Infosys Tech Park",
      location: "Bangalore, Karnataka",
      year: "2022",
      description:
        "High-performance natural ventilation and daylighting grid for a 2,500-occupancy corporate campus. Engineered for 100% glare-free workspace illumination.",
      results: [
        "42% lighting energy optimization",
        "Strategic IAQ (Air Quality) elevation",
        "LEED Platinum certification anchor",
        "Enhanced employee cognitive comfort",
      ],
      image: "/images/commercial-1.jpg",
    },
    {
      name: "Phoenix Marketcity Expansion",
      location: "Mumbai, Maharashtra",
      year: "2021",
      description:
        "Architectural NANOSUN skylight integration for vast retail atriums. Designed to increase dwell time through curated natural light ambiances.",
      results: [
        "35% reduction in atria HVAC load",
        "22% increase in zone dwell time",
        "Zero-leakage precision installation",
        "Advanced UV protection for mall assets",
      ],
      image: "/images/commercial-2.jpg",
    },
    {
      name: "Taj Luxury Atrium",
      location: "Delhi, NCR",
      year: "2023",
      description:
        "Bespoke daylighting geometry for premium hospitality renovation. Balancing ultra-luxury aesthetics with world-class energy efficiency metrics.",
      results: [
        "Architectural aesthetic preservation",
        "30% lighting OpEx reduction",
        "Dynamic daylight control protocols",
        "Seamless structural integration",
      ],
      image: "/images/commercial-3.jpg",
    },
  ]

  return (
    <main className="pt-24 bg-slate-950">
      {/* Commercial Hero */}
      <section className="relative py-40 overflow-hidden px-6 lg:px-12">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-orange-500/50 to-transparent" />
        <div className="container mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-8 py-2.5 mb-10 backdrop-blur-md">
              <Building2 className="h-4 w-4 text-brand-orange-500" />
              <h2 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">Corporate & Commercial</h2>
            </div>
            <h1 className="text-6xl md:text-9xl font-black text-white mb-10 tracking-tighter uppercase leading-none">
              Strategic <span className="brand-gradient-text">Atmospheres</span>
            </h1>
            <p className="text-xl text-gray-400 mb-16 leading-relaxed max-w-3xl mx-auto font-medium">
              Transforming corporate assets into high-performance sustainable ecosystems through natural light and ventilation engineering.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Corporate Strategy Overview */}
      <section className="py-20 relative px-6 lg:px-12">
        <div className="container mx-auto border-t border-white/5 pt-32">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-7xl font-black text-white mb-10 uppercase tracking-tighter leading-none">Asset Value Elevation</h2>
              <div className="space-y-10">
                <p className="text-lg text-gray-400 leading-relaxed font-medium">
                  Sustainable engineering is no longer a corporate choice—it's a strategic imperative. We help commercial developers and occupiers reduce operational costs while significantly improving occupant well-being and asset valuation.
                </p>
                <div className="grid grid-cols-2 gap-10 border-t border-white/5 pt-10">
                  <div className="space-y-2">
                    <p className="text-5xl font-black text-brand-orange-500">85+</p>
                    <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Premium Enclaves</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-5xl font-black text-brand-orange-500">40%</p>
                    <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Avg. Energy Saving</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative h-[650px] rounded-[80px] overflow-hidden border border-white/10 shadow-2xl group"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/images/commercial-overview.jpg"
                alt="Commercial Portfolio"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-brand-orange-500/10 opacity-40 mix-blend-overlay" />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-slate-950 to-transparent p-12 flex items-end">
                <div className="bg-white/10 backdrop-blur-2xl border border-white/20 p-8 rounded-[40px] w-full">
                  <p className="text-xs font-black text-white uppercase tracking-[0.4em] mb-3">Certification Magnet</p>
                  <p className="text-gray-300 text-sm font-medium">Enabling LEED, IGBC, and WELL Platinum ratings through advanced daylighting physics.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Case Studies */}
      <section className="py-40 relative px-6 lg:px-12 bg-slate-950">
        <div className="container mx-auto">
          <div className="mb-32 text-center">
            <h2 className="text-5xl md:text-8xl font-black mb-10 text-white uppercase tracking-tighter leading-none">Portfolio <span className="brand-gradient-text">Highlights</span></h2>
            <p className="text-sm font-black text-gray-600 uppercase tracking-[0.5em]">Selected Commercial Case Studies</p>
          </div>

          <div className="space-y-48">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="grid lg:grid-cols-2 gap-24 items-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className={`relative h-[600px] rounded-[72px] overflow-hidden group shadow-2xl ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute top-10 left-10 z-20">
                    <div className="bg-slate-950/80 backdrop-blur-md px-6 py-2 rounded-full border border-white/10">
                      <span className="text-[10px] font-black text-white uppercase tracking-widest">{project.year}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-12">
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 text-brand-orange-500">
                      <Globe className="h-5 w-5" />
                      <span className="text-[11px] font-black uppercase tracking-[0.3em]">{project.location}</span>
                    </div>
                    <h3 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none">{project.name}</h3>
                    <p className="text-xl text-gray-400 font-medium leading-relaxed">{project.description}</p>
                  </div>

                  <div className="grid gap-4">
                    {project.results.map((result, idx) => (
                      <div key={idx} className="flex items-center gap-5 bg-white/[0.03] p-5 rounded-3xl border border-white/5 hover:bg-white/[0.08] transition-all">
                        <div className="bg-brand-orange-500/20 p-2 rounded-xl">
                          <CheckCircle className="h-5 w-5 text-brand-orange-500" />
                        </div>
                        <span className="text-[11px] font-black text-gray-300 uppercase tracking-widest leading-none">{result}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-8 text-center lg:text-left">
                    <Link href="/contact">
                      <Button size="lg" className="bg-white text-black hover:bg-brand-orange-500 hover:text-white rounded-2xl px-16 py-8 text-sm font-black uppercase tracking-[0.2em] shadow-2xl shadow-white/5 group">
                        Audit Your Space <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-3 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Engineering */}
      <section className="py-40 relative px-6 lg:px-12 bg-slate-950 border-t border-white/5">
        <div className="container mx-auto">
          <motion.div
            className="bg-brand-gradient p-24 lg:p-40 rounded-[100px] text-center shadow-2xl shadow-brand-orange-500/20 relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-grid-white/[0.05] pointer-events-none" />
            <Sparkles className="h-20 w-20 text-white/30 mx-auto mb-10 animate-pulse" />
            <h2 className="text-5xl md:text-9xl font-black text-white mb-10 tracking-tighter uppercase leading-none relative z-10">Future-Proof Assets</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-16 leading-relaxed relative z-10 font-black uppercase tracking-[0.4em] text-xs opacity-90">
              Maximize Carbon Credits • Elevate ESG Scores • Optimize OpEx
            </p>
            <div className="flex flex-wrap justify-center gap-10 relative z-10">
              <Link href="/contact" className="block w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto bg-white text-black hover:bg-black hover:text-white transition-all duration-300 rounded-3xl px-20 py-10 text-xl font-black shadow-2xl shadow-white/10 uppercase tracking-[0.3em]">
                  Consult Engineer <ArrowRight className="ml-4 h-8 w-8" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
