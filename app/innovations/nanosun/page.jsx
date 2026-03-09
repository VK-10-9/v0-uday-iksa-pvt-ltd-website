"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sun, FileText, BarChart3, Building, ShieldCheck, Zap, Sparkles, Layout } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function NanosunPage() {
  const features = [
    {
      title: "98% Spectral Clarity",
      description:
        "Engineered for maximum visible light transmission while filtering 99.9% of harmful UV radiation and infrared heat.",
      icon: Sun,
    },
    {
      title: "40% OpEx Reduction",
      description:
        "Eliminate daylight artificial lighting costs. Strategic ROI achieved through massive energy savings and reduced HVAC load.",
      icon: BarChart3,
    },
    {
      title: "Industrial Durability",
      description: "IP-rated sealing, high-impact polycarbonate construction, and specialized structural wind-load engineering.",
      icon: ShieldCheck,
    },
    {
      title: "Modular Integration",
      description: "Universal mounting systems designed for PEB, RCC, and specialized industrial roofing architectures.",
      icon: Layout,
    },
  ]

  const applications = [
    {
      name: "Smart Factories",
      image: "/images/nanosun-app-1.jpg",
      description: "Eliminating the need for 24/7 internal lighting in large-scale production facilities.",
    },
    {
      name: "High-Bay Logistics",
      image: "/images/nanosun-app-2.jpg",
      description: "Critical vertical illumination for deep racking and warehouse management efficiency.",
    },
    {
      name: "Bespoke Portfolios",
      image: "/images/nanosun-app-3.jpg",
      description: "Atriums and corporate lobbies designed for architectural impact and human well-being.",
    },
  ]

  return (
    <main className="pt-24 bg-slate-950">
      {/* Nanosun Hero */}
      <section className="relative py-40 overflow-hidden px-6 lg:px-12">
        <div className="absolute inset-0 bg-brand-orange-500/5 blur-[120px] rounded-full transform -translate-y-1/2" />
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
              <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-8 py-2.5 mb-10 backdrop-blur-md">
                <Sun className="h-4 w-4 text-brand-orange-500" />
                <h2 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">Daylight Division</h2>
              </div>
              <h1 className="text-6xl md:text-9xl font-black text-white mb-10 tracking-tighter uppercase leading-none">
                NANOSUN <br /> <span className="brand-gradient-text">SYSTEMS</span>
              </h1>
              <p className="text-xl text-gray-400 mb-16 leading-relaxed max-w-2xl font-medium">
                The world's most advanced prismatic daylighting ecosystem. Engineered to harvest sunlight and distribute it evenly across large-scale industrial floorplates.
              </p>
              <div className="flex flex-wrap gap-6">
                <Link href="/contact" className="block w-full sm:w-auto">
                  <Button size="lg" className="w-full sm:w-auto bg-white text-black hover:bg-brand-orange-500 hover:text-white rounded-2xl px-16 py-8 text-sm font-black uppercase tracking-[0.2em] shadow-2xl shadow-white/5 active:scale-95 group">
                    Get Configuration <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                  </Button>
                </Link>
                <button className="w-full sm:w-auto px-16 py-8 border-2 border-white/10 hover:border-brand-orange-500/50 text-white transition-all duration-300 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] backdrop-blur-md active:scale-95">
                  Technical Spec-Sheet
                </button>
              </div>
            </motion.div>

            <motion.div
              className="relative h-[650px] rounded-[80px] overflow-hidden border border-white/10 shadow-2xl group"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <Image
                src="/images/nanosun-hero.jpg"
                alt="NANOSUN Technology"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-slate-950 to-transparent p-12 flex items-end">
                <div className="bg-slate-900/60 backdrop-blur-2xl border border-white/10 p-10 rounded-[48px] w-full">
                  <Sparkles className="h-8 w-8 text-brand-orange-400 mb-6" />
                  <p className="text-xl font-black text-white uppercase tracking-tighter mb-2">Solar Harvesting v4.0</p>
                  <p className="text-gray-400 text-sm font-medium">Bespoke prismatic lenses designed for equatorial sun paths.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Engineering Blueprint */}
      <section className="py-40 relative px-6 lg:px-12 bg-slate-950/50">
        <div className="container mx-auto">
          <div className="max-w-4xl mb-32">
            <h2 className="text-4xl md:text-7xl font-black text-white mb-10 uppercase tracking-tighter leading-none">Optical Engineering</h2>
            <p className="text-xl text-gray-400 leading-relaxed font-medium">
              Unlike standard skylights, NANOSUN uses high-index prismatic refraction to scatter direct sunlight into a soft, uniform ambiance. This eliminates hot-spots and glare while maintaining high-lux levels at floor level.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-40">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white/[0.02] backdrop-blur-md p-10 rounded-[48px] border border-white/5 group hover:bg-white/[0.05] hover:border-white/10 transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-brand-orange-500/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  <feature.icon className="h-8 w-8 text-brand-orange-500" />
                </div>
                <h3 className="text-lg font-black text-white mb-4 uppercase tracking-widest">{feature.title}</h3>
                <p className="text-gray-500 text-sm font-medium leading-relaxed group-hover:text-gray-400 transition-colors">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Premium Technical Specs Table (Inspired by LAMILUX) */}
          <motion.div
            className="bg-white/[0.03] border border-white/5 rounded-[60px] overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="p-12 border-b border-white/5 flex flex-col md:flex-row justify-between items-end gap-6">
              <div>
                <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-2">Technical Architecture</h3>
                <p className="text-brand-orange-500 font-black uppercase tracking-[0.4em] text-[10px]">Precision Metrics & Standards</p>
              </div>
              <div className="flex gap-4">
                <div className="text-right">
                  <p className="text-white font-black text-2xl leading-none">0.63</p>
                  <p className="text-[8px] text-gray-500 uppercase font-black tracking-widest">W/m²K (U-Value)</p>
                </div>
                <div className="w-px h-10 bg-white/10" />
                <div className="text-right">
                  <p className="text-white font-black text-2xl leading-none">39dB</p>
                  <p className="text-[8px] text-gray-500 uppercase font-black tracking-widest">Sound Reduction</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 divide-x divide-y divide-white/5">
              {[
                { label: "Thermal Conductivity", value: "Thermal Bridge-Free Construction", sub: "Uw Values optimized for high productivity" },
                { label: "Solar Energy Protection", value: "99% UV/IR Decoupling", sub: "G-values engineered for equatorial heat paths" },
                { label: "Structural Integrity", value: "Structural Glazing Design", sub: "Tested for high wind-load and snow-drift safety" },
                { label: "Material Excellence", value: "Aeronautical Grade Aluminum", sub: "Corrosion-proof, maintenance-free industrial frame" },
                { label: "Digital Precision", value: "BIM-Ready Assets", sub: "Instant integration for international architects" },
                { label: "Installation Safety", value: "Fully Pre-Assembled", sub: "Rapid on-roof deployment with leak-proof seals" },
              ].map((spec, i) => (
                <div key={i} className="p-12 hover:bg-white/[0.02] transition-colors group">
                  <p className="text-gray-600 font-bold uppercase tracking-widest text-[9px] mb-4 group-hover:text-brand-orange-500 transition-colors">{spec.label}</p>
                  <p className="text-white font-black uppercase tracking-tight text-xl mb-2">{spec.value}</p>
                  <p className="text-gray-500 text-[10px] leading-tight font-medium">{spec.sub}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* High-Impact Applications */}
      <section className="py-40 relative px-6 lg:px-12 bg-slate-950">
        <div className="container mx-auto">
          <div className="text-center mb-32">
            <h2 className="text-5xl md:text-8xl font-black mb-10 text-white uppercase tracking-tighter leading-none">Strategic <span className="brand-gradient-text">Sites</span></h2>
            <p className="text-[10px] font-black text-gray-600 uppercase tracking-[0.5em]">Sector-Specific Deployments</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {applications.map((application, index) => (
              <motion.div
                key={index}
                className="relative h-[600px] rounded-[60px] overflow-hidden group border border-white/5 shadow-2xl"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Image
                  src={application.image || "/placeholder.svg"}
                  alt={application.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10 h-full flex flex-col justify-end p-12">
                  <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-4">{application.name}</h3>
                  <p className="text-gray-400 text-sm font-medium leading-relaxed mb-8 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">{application.description}</p>
                  <div className="h-1.5 w-16 bg-brand-orange-500 rounded-full shadow-lg shadow-brand-orange-500/50" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification CTA */}
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
            <h2 className="text-5xl md:text-9xl font-black text-white mb-10 tracking-tighter uppercase leading-none relative z-10">Scale Sustainable</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-16 leading-relaxed relative z-10 font-black uppercase tracking-[0.4em] text-xs opacity-90">
              Audit Your Asset • Verify ROI • Deploy Global Tech
            </p>
            <div className="flex flex-wrap justify-center gap-10 relative z-10">
              <Link href="/contact" className="block w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto bg-white text-black hover:bg-black hover:text-white transition-all duration-300 rounded-3xl px-20 py-10 text-xl font-black shadow-2xl shadow-white/10 uppercase tracking-[0.3em]">
                  Engineer Consultation <ArrowRight className="ml-4 h-8 w-8" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
