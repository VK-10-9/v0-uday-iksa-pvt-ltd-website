"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sun, Wind, Lightbulb, BarChart, Zap, ShieldCheck } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { products } from "@/lib/data/products"
import { HoverButton } from "@/components/ui/hover-button"

const iconMap = {
  Sun: Sun,
  Wind: Wind,
  Lightbulb: Lightbulb,
  Building2: ShieldCheck,
  Layout: BarChart,
  ShieldAlert: Zap,
}

export default function InnovationsPage() {
  const allInnovations = [
    ...products.map(p => ({
      id: p.id,
      name: p.name,
      subtitle: p.subtitle,
      description: p.description,
      image: p.image,
      link: p.link,
      icon: iconMap[p.icon] || Lightbulb,
    })),
    {
      id: "research",
      name: "Research & Development",
      subtitle: "Future Systems",
      description: "Our ongoing commitment to industrial innovation through specialized research in natural building physics and sustainable materials.",
      image: "/images/research-lab.jpg",
      link: "/innovations/research",
      icon: Lightbulb,
    }
  ]

  return (
    <main className="pt-24 bg-slate-950">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-brand-orange-500/5 blur-3xl rounded-full transform -translate-y-1/2" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase leading-none">
              Industrial <span className="brand-gradient-text">Engineering</span>
            </h1>
            <p className="text-xl text-gray-400 mb-12 leading-relaxed max-w-2xl mx-auto">
              Harnessing natural resources through advanced engineering to create high-performance industrial environments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Innovation Cards */}
      <section className="py-20 relative px-6 lg:px-12">
        <div className="container mx-auto">
          <div className="space-y-40">
            {allInnovations.map((innovation, index) => (
              <motion.div
                key={innovation.id}
                className="grid lg:grid-cols-2 gap-20 items-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                <div className={`relative h-[600px] rounded-[60px] overflow-hidden group shadow-2xl shadow-brand-orange-500/10 ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  <div className="absolute inset-0 bg-gradient-to-tr from-brand-orange-500/20 to-transparent z-10" />
                  <Image
                    src={innovation.image}
                    alt={innovation.name}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute bottom-8 left-8 z-20">
                    <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 p-6 rounded-3xl">
                      <innovation.icon className="h-8 w-8 text-brand-orange-500 mb-2" />
                      <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none">{innovation.subtitle}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-10">
                  <div className="space-y-6">
                    <h3 className="text-5xl md:text-7xl font-black text-white leading-[0.9] tracking-tighter uppercase leading-none">{innovation.name}</h3>
                    <div className="h-1 w-24 bg-brand-orange-500 rounded-full" />
                    <p className="text-xl text-gray-400 leading-relaxed font-medium">
                      {innovation.description}
                    </p>
                  </div>

                  <div className="pt-6">
                    <Link href={innovation.link}>
                      <HoverButton className="bg-white text-black hover:bg-black hover:text-white transition-all duration-300 rounded-2xl px-12 py-6 text-lg font-black uppercase tracking-widest shadow-xl shadow-white/5">
                        DISCOVER IMPACT <ArrowRight className="ml-3 h-5 w-5" />
                      </HoverButton>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Standards (Inspired by LAMILUX) */}
      <section className="py-40 relative px-6 lg:px-12 bg-slate-900/30 border-y border-white/5">
        <div className="container mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4">The Standard of <span className="brand-gradient-text">Excellence</span></h2>
            <p className="text-gray-500 font-medium uppercase tracking-[0.3em] text-[10px]">Global Quality Benchmarks</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Thermal Precision",
                desc: "Every module is engineered for zero thermal bridging, maintaining consistent indoor climates regardless of external extreme temperatures.",
                metric: "0.6 Uw Optimized"
              },
              {
                title: "Structural Rigidity",
                desc: "Tested against extreme wind-loads and snow-drift scenarios. Our frames utilize aeronautical-grade alloys for permanent integrity.",
                metric: "EN 12101 Compliant"
              },
              {
                title: "Spectral Clarity",
                desc: "Our prismatic lenses are designed to filter out 99.9% of harmful UV and IR, delivering the pure visible spectrum for human well-being.",
                metric: "99% UV/IR Decoupled"
              }
            ].map((std, i) => (
              <motion.div
                key={i}
                className="p-10 bg-white/[0.02] rounded-[40px] border border-white/5 hover:border-brand-orange-500/30 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-brand-orange-500 font-black text-3xl mb-4 tracking-tighter">{std.metric}</div>
                <h4 className="text-white font-black uppercase tracking-wider text-sm mb-4">{std.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed font-medium">{std.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-40 relative px-6 lg:px-12">
        <div className="container mx-auto">
          <motion.div
            className="bg-brand-gradient p-20 lg:p-32 rounded-[80px] text-center shadow-2xl shadow-brand-orange-500/20 relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-grid-white/[0.05] pointer-events-none" />
            <h2 className="text-5xl md:text-8xl font-black text-white mb-10 tracking-tighter uppercase leading-none relative z-10">Engineer Your Space</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-16 leading-relaxed relative z-10 font-black uppercase tracking-widest text-sm opacity-80">
              Maximize daylight • Optimize ventilation • Reduce OpEx
            </p>
            <div className="flex flex-wrap justify-center gap-8 relative z-10">
              <Link href="/contact" className="block w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto bg-white text-black hover:bg-black hover:text-white transition-all duration-300 rounded-2xl px-16 py-8 text-xl font-black shadow-2xl shadow-white/5 uppercase tracking-widest">
                  CONSULT AN EXPERT <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
