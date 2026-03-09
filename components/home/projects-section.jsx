"use client"

import { motion } from "framer-motion"
import { Globe, ArrowRight, MapPin, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ProjectsSection() {
  const projects = [
    { name: "Luxury Villa, Hubballi", type: "Residential", location: [15.3647, 75.1240] },
    { name: "Industrial Complex, Mumbai", type: "Industrial", location: [19.076, 72.8777] },
    { name: "Tech Park, Bangalore", type: "Commercial", location: [12.9716, 77.5946] },
    { name: "Manufacturing Plant, Chennai", type: "Industrial", location: [13.0827, 80.2707] },
    { name: "Corporate Headquarters, Hyderabad", type: "Commercial", location: [17.385, 78.4867] },
  ]

  return (
    <section className="py-40 relative bg-slate-950/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-brand-orange-500/10 border border-brand-orange-500/20 rounded-full px-6 py-2 mb-8"
          >
            <ShieldCheck className="h-4 w-4 text-brand-orange-400" />
            <span className="text-[10px] font-black text-brand-orange-400 uppercase tracking-widest">Pan-India Footprint</span>
          </motion.div>

          <h2 className="text-5xl lg:text-7xl font-black text-white uppercase tracking-tighter mb-6 leading-none">
            Strategic <span className="brand-gradient-text">Presence</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Leading the sustainable energy transition across homes, offices, and major industrial hubs throughout India.
          </p>
        </div>

        <div className="relative h-[600px] rounded-[60px] overflow-hidden border border-white/5 shadow-2xl shadow-brand-orange-500/5 group bg-slate-900/40 backdrop-blur-3xl">
          {/* Animated Background Layers */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-orange-500/5 to-transparent"></div>
          <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
          </div>

          {/* Central Visual */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
            <Globe className="h-[500px] w-[500px] text-brand-orange-500/10 animate-[spin_60s_linear_infinite]" />
          </div>

          <div className="absolute inset-0 p-12">
            <div className="relative h-full w-full">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  className="absolute cursor-pointer"
                  style={{
                    left: `${((project.location[1] + 180) / 360) * 100}%`,
                    top: `${((90 - project.location[0]) / 180) * 100}%`,
                  }}
                  whileHover={{ scale: 1.2, zIndex: 50 }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.15, type: "spring", stiffness: 200 }}
                >
                  <div className="relative flex items-center justify-center">
                    {/* Ripple Effect */}
                    <div className="absolute inset-0 rounded-full bg-brand-orange-500 animate-ping opacity-40 scale-[3]"></div>
                    <div className="absolute inset-0 rounded-full bg-brand-orange-500 animate-pulse opacity-60 scale-[2]"></div>

                    {/* Active Pin */}
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-brand-orange-400 to-brand-red-600 border-2 border-white shadow-lg shadow-brand-orange-500/40 relative z-10 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    </div>

                    {/* Tooltip Card */}
                    <div className="absolute bottom-full mb-6 left-1/2 -translate-x-1/2 w-56 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
                      <div className="bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 rounded-3xl shadow-2xl relative">
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-slate-900 border-r border-b border-white/10 rotate-45"></div>
                        <div className="flex items-start gap-3 mb-3">
                          <MapPin className="h-5 w-5 text-brand-orange-500 flex-shrink-0" />
                          <h4 className="text-sm font-black text-white leading-tight uppercase tracking-tight">{project.name}</h4>
                        </div>
                        <span className="inline-block px-3 py-1 bg-brand-orange-500/10 border border-brand-orange-500/20 rounded-full text-[10px] font-black text-brand-orange-400 uppercase tracking-widest leading-none">
                          {project.type} Sector
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Overlay Info */}
          <div className="absolute bottom-12 right-12 text-right">
            <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.3em] mb-1">Impact Radius</p>
            <p className="text-white text-3xl font-black uppercase tracking-tighter">50+ CITIES</p>
          </div>
          <div className="absolute bottom-12 left-12">
            <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.3em] mb-1">Installed Capacity</p>
            <p className="text-white text-3xl font-black uppercase tracking-tighter">285+ PROJECTS</p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link href="/projects" className="block">
            <button className="inline-flex items-center gap-4 px-12 py-5 bg-white hover:bg-brand-orange-500 text-black hover:text-white rounded-2xl text-lg font-black uppercase tracking-widest transition-all duration-300 shadow-xl shadow-white/5 active:scale-95 group">
              <span>View National Portfolio</span>
              <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
