"use client"

import { motion } from "framer-motion"
import { ArrowRight, BarChart3, Globe2, ShieldCheck, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { projectCategories, featuredProjects } from "@/lib/data/projects"
import ProjectCard from "@/components/projects/ProjectCard"
import FeaturedProject from "@/components/projects/FeaturedProject"

export default function ProjectsPage() {
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
              Engineering <br /><span className="brand-gradient-text">Impact</span>
            </h1>
            <p className="text-xl text-gray-400 mb-12 leading-relaxed font-medium">
              A comprehensive portfolio of high-performance prismatic daylighting and aerodynamic ventilation systems deployed across India's most demanding industrial environments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Categories */}
      <section className="py-20 relative px-6">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-6">Industrial Specialization</h2>
            <div className="h-1 w-24 bg-brand-orange-500 rounded-full mx-auto mb-8"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-medium">
              Precision engineering adapted for PSU, Industrial, Institutional, and Bespoke Hospitality infrastructure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projectCategories.map((category, index) => (
              <ProjectCard key={category.id} category={category} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-40 relative bg-white/[0.02]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-6">Landmark Deployments</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-medium">
              Case studies in high-precision engineering and atmospheric optimization.
            </p>
          </div>

          <div className="space-y-40">
            {featuredProjects.map((project, index) => (
              <FeaturedProject key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Project Statistics */}
      <section className="py-40 relative px-6">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-6">Operational <span className="brand-gradient-text">Efficiency</span></h2>
            <div className="h-1 w-20 bg-brand-orange-500 rounded-full mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "285+", label: "Verified Deployments", icon: Globe2, color: "text-brand-orange-500" },
              { number: "40%", label: "Thermal Load Reduction", icon: Zap, color: "text-brand-amber-400" },
              { number: "15+", label: "Years Engineering", icon: ShieldCheck, color: "text-brand-orange-500" },
              { number: "50+", label: "Industrial Hubs", icon: BarChart3, color: "text-brand-yellow-400" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm p-10 rounded-[40px] border border-white/10 text-center group hover:bg-brand-orange-500/10 hover:border-brand-orange-500/30 transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(244, 121, 32, 0.1)" }}
              >
                <div className={`${stat.color} mb-6 flex justify-center`}>
                  <stat.icon className="h-10 w-10 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-4xl font-black text-white uppercase tracking-tighter mb-2">{stat.number}</h3>
                <p className="text-brand-orange-400 text-[10px] font-black uppercase tracking-widest">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative px-6">
        <div className="container mx-auto">
          <motion.div
            className="bg-brand-gradient p-20 rounded-[80px] text-center shadow-2xl shadow-brand-orange-500/20 relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter uppercase relative z-10">Scale Sustainable Impact</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-12 leading-relaxed relative z-10 font-bold uppercase tracking-widest text-xs opacity-80">
              Audit Your Asset • Verify ROI • Deploy Global Tech
            </p>
            <Button size="lg" className="bg-white text-black hover:bg-black hover:text-white transition-all duration-300 rounded-2xl px-16 py-8 text-xl font-black relative z-10 shadow-2xl uppercase tracking-widest">
              Consult an Engineer <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
