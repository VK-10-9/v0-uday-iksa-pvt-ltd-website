"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sun, Wind, Lightbulb, BarChart, Zap, ShieldCheck } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { productCategories } from "@/lib/data/products"
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
  return (
    <main className="pt-24 bg-slate-950">
      {/* Hero Section */}
      <section className="relative py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-brand-orange-500/5 blur-3xl rounded-full transform -translate-y-1/2" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-black text-white mb-8 tracking-tighter uppercase leading-[0.85]">
              Bring Nature <br /><span className="brand-gradient-text">Into Your Building</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-12 leading-relaxed max-w-2xl mx-auto font-medium px-4">
              We design and manufacture systems that use sunlight and wind to light and cool your space — perfectly. No electricity, no compromise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 relative px-6 lg:px-12">
        <div className="container mx-auto">
          <div className="space-y-32">
            {productCategories.map((category, index) => (
              <motion.div
                key={category.id}
                className="space-y-16"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                {/* Category Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-12">
                  <div className="max-w-2xl">
                    <p className="text-brand-orange-500 font-black uppercase tracking-[0.3em] text-[10px] mb-4">{category.brand}</p>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tighter leading-none mb-6">{category.name}</h2>
                    <p className="text-gray-400 font-medium leading-relaxed">{category.description}</p>
                  </div>
                </div>

                {/* Subcategories Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.subcategories.map((sub, subIdx) => (
                    <Link key={subIdx} href={sub.href} className="group">
                      <motion.div
                        className="bg-white/5 border border-white/10 p-8 rounded-[40px] h-full flex flex-col justify-between hover:bg-white/[0.08] hover:border-brand-orange-500/40 transition-all duration-500"
                        whileHover={{ y: -10 }}
                      >
                        <div>
                          <h4 className="text-white font-black uppercase text-sm tracking-widest mb-4 group-hover:text-brand-orange-400 transition-colors">{sub.name}</h4>
                          <p className="text-gray-500 text-[11px] leading-relaxed font-medium mb-6">{sub.product}</p>
                        </div>
                        <div className="flex items-center text-[10px] font-black text-brand-orange-500 uppercase tracking-widest">
                          Explore <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-2 transition-transform" />
                        </div>
                      </motion.div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Standards */}
      <section className="py-24 relative px-6 lg:px-12 bg-slate-900/30 border-y border-white/5">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">The Standard of <span className="brand-gradient-text">Uday IKSA</span></h2>
            <p className="text-gray-500 font-medium uppercase tracking-[0.3em] text-[10px]">What Makes Our Products Different</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Zero Heat Admission",
                desc: "Our systems let in 100% of visible light but filter out infrared heat. Your building stays cool even under the Indian summer sun.",
                metric: "Pure Light"
              },
              {
                title: "Leak Proof for Life",
                desc: "Every installation is engineered with our proprietary flashing system. We guarantee zero leaks, even during the heaviest monsoons.",
                metric: "100% Sealed"
              },
              {
                title: "Human Centric",
                desc: "Natural light improves focus, mood, and sleep quality. We bring the full spectrum of sunlight into your workspace, naturally.",
                metric: "Health First"
              }
            ].map((std, i) => (
              <motion.div
                key={i}
                className="p-10 bg-white/[0.02] rounded-[40px] border border-white/5 hover:border-brand-orange-500/30 transition-all group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-brand-orange-500 font-black text-3xl mb-4 tracking-tighter group-hover:scale-110 transition-transform origin-left">{std.metric}</div>
                <h4 className="text-white font-black uppercase tracking-wider text-sm mb-4">{std.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed font-medium">{std.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 relative px-6 lg:px-12">
        <div className="container mx-auto text-center">
          <motion.div
            className="bg-brand-gradient p-10 md:p-20 rounded-[60px] md:rounded-[80px] shadow-2xl shadow-brand-orange-500/20 relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-grid-white/[0.05] pointer-events-none" />
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-black text-white mb-10 tracking-tighter uppercase leading-tight relative z-10">Ready to <br />Transform?</h2>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-16 leading-relaxed relative z-10 font-medium">
              See how much you can save by letting sunlight do the work.
            </p>
            <div className="flex flex-wrap justify-center gap-8 relative z-10">
              <Link href="/contact" className="block w-full sm:w-auto">
                <HoverButton className="w-full sm:w-auto bg-white text-black hover:bg-black hover:text-white transition-all duration-300 rounded-2xl px-12 md:px-16 py-6 md:py-8 text-sm md:text-lg font-black uppercase tracking-widest shadow-2xl">
                  Get a Free Estimate <ArrowRight className="ml-3 h-5 md:h-6 w-5 md:w-6" />
                </HoverButton>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
