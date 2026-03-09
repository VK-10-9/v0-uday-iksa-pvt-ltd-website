"use client"

import { motion } from "framer-motion"
import { ArrowRight, Lightbulb, Microscope, LineChart, BookOpen, ShieldCheck, Zap, Sparkles, Binary } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ResearchPage() {
  const researchAreas = [
    {
      title: "Molecular Optics",
      description:
        "Developing next-generation polycarbonate structures with enhanced spectral clarity and thermal-break efficiency.",
      icon: Microscope,
    },
    {
      title: "Kinetic Fluidics",
      description:
        "Advanced CFD (Computational Fluid Dynamics) modeling to optimize passive air-exchange rates in complex volumes.",
      icon: LineChart,
    },
    {
      title: "Bio-Centric Light",
      description:
        "Researching the impact of full-spectrum natural light on circadian sync and cognitive performance in workspaces.",
      icon: Lightbulb,
    },
    {
      title: "Structural AI",
      description:
        "Integrating smart sensors with passive systems for predictive building atmospheric management.",
      icon: Binary,
    },
  ]

  const publications = [
    {
      title: "Thermodynamic Optimization of Passive Stack-Effect Vents",
      authors: "Dr. Rajesh Kumar, Dr. Priya Sharma",
      journal: "Global Journal of Sustainable Engineering, 2023",
      abstract:
        "An investigation into non-mechanical heat displacement in high-volume industrial foundries using advanced venting geometry.",
    },
    {
      title: "Spectral Transmission Metrics of Prismatic Polycarbonate",
      authors: "Vikram Patel, Ananya Desai",
      journal: "Optical Materials Science, 2022",
      abstract:
        "Comparative analysis of UV-filtering efficiency and visible light transmittance in tropical peak-solar conditions.",
    },
    {
      title: "Cognitive Load and Natural Light: A Multi-Site Study",
      authors: "Dr. Priya Sharma, Sanjay Mehta",
      journal: "Environmental Psychology Research, 2021",
      abstract:
        "Measuring student alertness and healthcare recovery rates under full-spectrum daylighting vs. artificial LED sources.",
    },
  ]

  return (
    <main className="pt-24 bg-slate-950">
      {/* Research Hero */}
      <section className="relative py-40 overflow-hidden px-6 lg:px-12">
        <div className="absolute inset-0 bg-brand-orange-500/5 blur-[120px] rounded-full transform -translate-y-1/2" />
        <div className="container mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-8 py-2.5 mb-10 backdrop-blur-md">
              <Microscope className="h-4 w-4 text-brand-orange-500" />
              <h2 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">Scientific Division</h2>
            </div>
            <h1 className="text-6xl md:text-9xl font-black text-white mb-10 tracking-tighter uppercase leading-none">
              Lab & <br /> <span className="brand-gradient-text">Discovery</span>
            </h1>
            <p className="text-xl text-gray-400 mb-16 leading-relaxed max-w-3xl mx-auto font-medium">
              Pushing the boundaries of renewable architecture through rigorous scientific validation and material innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="px-16 py-8 bg-white text-black hover:bg-brand-orange-500 hover:text-white transition-all duration-300 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] shadow-2xl shadow-white/5 active:scale-95 group">
                Academic Partnerships <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Overview */}
      <section className="py-20 relative px-6 lg:px-12">
        <div className="container mx-auto border-t border-white/5 pt-32">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-7xl font-black text-white mb-10 uppercase tracking-tighter leading-none">Evidence Based</h2>
              <div className="space-y-10">
                <p className="text-lg text-gray-400 leading-relaxed font-medium">
                  Innovation at Uday IKSA isn't just about design—it's about measurable physics. Every product in our portfolio originates in our R&D lab, where we simulate extreme climates, structural stresses, and optical performance to guarantee world-class reliability.
                </p>
                <div className="grid grid-cols-2 gap-10 border-t border-white/5 pt-10">
                  <div className="space-y-2">
                    <p className="text-5xl font-black text-brand-orange-500">14+</p>
                    <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Global Patents</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-5xl font-black text-brand-orange-500">3</p>
                    <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Tier-1 Research Hubs</p>
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
                src="/images/research-lab.jpg"
                alt="Scientific Laboratory"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-slate-950 to-transparent p-12 flex items-end">
                <div className="bg-slate-900/60 backdrop-blur-2xl border border-white/10 p-10 rounded-[48px] w-full">
                  <p className="text-xs font-black text-white uppercase tracking-[0.4em] mb-3">Material Science</p>
                  <p className="text-gray-300 text-sm font-medium">Testing spectral integrity under 3,000+ hours of artificial peak-solar exposure.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Research Domains */}
      <section className="py-40 relative px-6 lg:px-12 bg-slate-950/50">
        <div className="container mx-auto">
          <div className="max-w-4xl mb-32">
            <h2 className="text-4xl md:text-7xl font-black text-white mb-10 uppercase tracking-tighter leading-none">Active Domains</h2>
            <p className="text-xl text-gray-400 leading-relaxed font-medium">
              Our multi-disciplinary team of physicists, architects, and engineers collaborate on four primary research pillars to define the future of low-carbon building envelopes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {researchAreas.map((area, index) => (
              <motion.div
                key={index}
                className="bg-white/[0.02] backdrop-blur-md p-10 rounded-[48px] border border-white/5 group hover:bg-white/[0.05] hover:border-white/10 transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-brand-orange-500/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  <area.icon className="h-8 w-8 text-brand-orange-500" />
                </div>
                <h3 className="text-lg font-black text-white mb-4 uppercase tracking-widest">{area.title}</h3>
                <p className="text-gray-500 text-sm font-medium leading-relaxed group-hover:text-gray-400 transition-colors">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications Journal */}
      <section className="py-40 relative px-6 lg:px-12 bg-slate-950">
        <div className="container mx-auto">
          <div className="text-center mb-32">
            <h2 className="text-5xl md:text-8xl font-black mb-10 text-white uppercase tracking-tighter leading-none">Scientific <span className="brand-gradient-text">Output</span></h2>
            <p className="text-[10px] font-black text-gray-600 uppercase tracking-[0.5em]">Peer-Reviewed Journal Extracts</p>
          </div>

          <div className="space-y-12">
            {publications.map((pub, index) => (
              <motion.div
                key={index}
                className="bg-white/[0.02] border border-white/5 p-12 rounded-[50px] group hover:bg-white/[0.05] transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
                  <div className="space-y-6 flex-1">
                    <div className="flex items-center gap-4">
                      <div className="h-px w-10 bg-brand-orange-500" />
                      <span className="text-[10px] font-black text-brand-orange-500 uppercase tracking-[0.4em]">{pub.journal}</span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter leading-none">{pub.title}</h3>
                    <p className="text-gray-500 font-medium leading-relaxed italic">{pub.authors}</p>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-4xl">{pub.abstract}</p>
                  </div>
                  <button className="flex-shrink-0 bg-white/5 hover:bg-brand-orange-500 hover:text-white text-gray-400 p-8 rounded-full border border-white/10 transition-all duration-300">
                    <ArrowRight className="h-8 w-8" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration CTA */}
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
            <h2 className="text-5xl md:text-9xl font-black text-white mb-10 tracking-tighter uppercase leading-none relative z-10">Pioneer With Us</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-16 leading-relaxed relative z-10 font-black uppercase tracking-[0.4em] text-xs opacity-90">
              University Partners • PhD Fellowship • R&D Collaboration
            </p>
            <div className="flex flex-wrap justify-center gap-10 relative z-10">
              <Link href="/contact" className="block w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto bg-white text-black hover:bg-black hover:text-white transition-all duration-300 rounded-3xl px-20 py-10 text-xl font-black shadow-2xl shadow-white/10 uppercase tracking-[0.3em]">
                  Contact Lab Director <ArrowRight className="ml-4 h-8 w-8" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
