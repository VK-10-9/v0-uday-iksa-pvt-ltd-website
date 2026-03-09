"use client"

import { motion } from "framer-motion"
import { ArrowRight, Building2, Globe, Calendar, CheckCircle, ShieldCheck, Factory, Zap, Sparkles } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function IndustrialProjectsPage() {
  const projects = [
    {
      name: "Tata Steel Mega Facility",
      location: "Mumbai, Maharashtra",
      year: "2022",
      description:
        "Strategic deployment of 285+ NANOSUN systems across a 75,000 sq. ft. precision manufacturing floor. Optimized for maximum lux levels during shift peaks.",
      results: [
        "38% OpEx reduction via lighting",
        "Zero-incident safety record post-install",
        "Strategic thermal gain mitigation",
        "14-month full ROI achieved",
      ],
      image: "/images/industrial-1.jpg", // Using placeholder from user's request context if available, otherwise fallback
    },
    {
      name: "Mahindra Automotive Plant",
      location: "Pune, Maharashtra",
      year: "2021",
      description:
        "High-velocity NANOVENT ecosystem providing 12+ air changes per hour for automotive assembly lines. Carbon footprint minimized by 120 tons annually.",
      results: [
        "42% cooling energy optimization",
        "Enhanced humidity control 24/7",
        "ISO 14001 compliance standards exceeded",
        "Workforce productivity up by 15%",
      ],
      image: "/images/industrial-2.jpg",
    },
    {
      name: "Asian Paints Logistics Hub",
      location: "Ahmedabad, Gujarat",
      year: "2023",
      description:
        "Hybrid daylighting and gravity ventilation grid for specialized chemical storage. Engineered for spark-proof operation and hazardous air displacement.",
      results: [
        "Natural VOC displacement protocol",
        "Uniform 400 lux vertical illumination",
        "LEED Platinum certification credits",
        "Strategic asset protection focus",
      ],
      image: "/images/industrial-3.jpg",
    },
  ]

  return (
    <main className="pt-24 bg-slate-950">
      {/* Industrial Hero */}
      <section className="relative py-40 overflow-hidden px-6 lg:px-12">
        <div className="absolute inset-0 bg-brand-orange-500/5 blur-[120px] rounded-full transform -translate-y-1/2" />
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="text-center max-w-5xl mx-auto"
          >
            <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-6 py-2 mb-10 backdrop-blur-md">
              <Factory className="h-4 w-4 text-brand-orange-500" />
              <h2 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">Industrial Division</h2>
            </div>
            <h1 className="text-6xl md:text-9xl font-black text-white mb-10 tracking-tighter uppercase leading-none">
              Operational <span className="brand-gradient-text">Efficiency</span>
            </h1>
            <p className="text-xl text-gray-400 mb-16 leading-relaxed max-w-3xl mx-auto font-medium">
              Precision engineering for large-scale manufacturing environments. Maximizing output through natural resource optimization.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Strategic Overview */}
      <section className="py-20 relative px-6 lg:px-12">
        <div className="container mx-auto border-y border-white/5 py-32">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-6xl font-black text-white mb-10 uppercase tracking-tighter leading-none">Industrial Focus</h2>
              <div className="space-y-8">
                <p className="text-lg text-gray-400 leading-relaxed font-medium">
                  Uday IKSA specializes in high-durability systems engineered for the rigors of heavy industry. From steel plants to automotive assembly lines, our solutions are built to last and perform under extreme conditions.
                </p>
                <div className="grid grid-cols-2 gap-8 pt-8">
                  <div className="space-y-2">
                    <p className="text-4xl font-black text-brand-orange-500">120+</p>
                    <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Global Facilities</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-4xl font-black text-brand-orange-500">38%</p>
                    <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Avg. OpEx Reduction</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative h-[600px] rounded-[60px] overflow-hidden border border-white/10 shadow-2xl shadow-brand-orange-500/5 group"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/images/industrial-overview.jpg"
                alt="Industrial Engineering"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-slate-950 to-transparent opacity-80" />
              <div className="absolute bottom-12 left-12 z-20">
                <div className="bg-slate-900/60 backdrop-blur-2xl border border-white/10 p-8 rounded-[32px]">
                  <Zap className="h-8 w-8 text-brand-orange-500 mb-4" />
                  <p className="text-xs font-black text-white uppercase tracking-widest leading-none">High-Load Engineering</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Studies Showcase */}
      <section className="py-40 relative px-6 lg:px-12 bg-slate-950">
        <div className="container mx-auto">
          <div className="mb-32">
            <h2 className="text-5xl md:text-8xl font-black mb-10 text-white uppercase tracking-tighter leading-none text-center">Engineered <span className="brand-gradient-text">Impact</span></h2>
            <p className="text-xl text-gray-500 font-black uppercase tracking-[0.4em] text-center">Success Documentation</p>
          </div>

          <div className="space-y-40">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="grid lg:grid-cols-2 gap-24 items-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className={`relative h-[550px] rounded-[60px] overflow-hidden group shadow-2xl border border-white/5 ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-brand-orange-500/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-8 right-8 z-20">
                    <div className="bg-slate-950/60 backdrop-blur-md border border-white/10 px-6 py-2 rounded-full">
                      <span className="text-[10px] font-black text-white uppercase tracking-widest">{project.year}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-10">
                  <div className="space-y-4">
                    <p className="text-brand-orange-500 text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-2">
                      <Globe className="h-4 w-4" /> {project.location}
                    </p>
                    <h3 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">{project.name}</h3>
                    <p className="text-lg text-gray-400 font-medium leading-relaxed">{project.description}</p>
                  </div>

                  <div className="space-y-4">
                    <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Key Deliverables</p>
                    <div className="grid gap-3">
                      {project.results.map((result, idx) => (
                        <div key={idx} className="flex items-center gap-4 bg-white/[0.02] border border-white/5 p-4 rounded-2xl group/item hover:bg-white/5 transition-colors">
                          <CheckCircle className="h-5 w-5 text-brand-orange-500 group-hover/item:scale-110 transition-transform" />
                          <span className="text-xs font-black text-gray-300 uppercase tracking-widest">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6">
                    <Link href="/contact">
                      <Button className="bg-white text-black hover:bg-brand-orange-500 hover:text-white rounded-2xl px-12 py-7 text-xs font-black uppercase tracking-widest transition-all shadow-xl shadow-white/5 group/btn">
                        Strategic Consultation <ArrowRight className="ml-3 h-5 w-5 group-hover/btn:translate-x-2 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industrial CTA */}
      <section className="py-40 relative px-6 lg:px-12 bg-slate-950 border-t border-white/5">
        <div className="container mx-auto">
          <motion.div
            className="bg-brand-gradient p-20 lg:p-32 rounded-[80px] text-center shadow-2xl shadow-brand-orange-500/20 relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-grid-white/[0.05] pointer-events-none" />
            <Sparkles className="h-16 w-16 text-white/20 mx-auto mb-10 animate-pulse" />
            <h2 className="text-5xl md:text-8xl font-black text-white mb-10 tracking-tighter uppercase leading-none relative z-10">Maximize Factory ROI</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-16 leading-relaxed relative z-10 font-black uppercase tracking-widest text-sm opacity-80">
              Contact our specialized industrial engineering division for a comprehensive energy and daylighting audit.
            </p>
            <div className="flex flex-wrap justify-center gap-8 relative z-10">
              <Link href="/contact" className="block w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto bg-white text-black hover:bg-black hover:text-white transition-all duration-300 rounded-2xl px-16 py-8 text-xl font-black shadow-2xl shadow-white/5 uppercase tracking-widest">
                  Consult Architect <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
