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
      <section className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-brand-orange-500/5 blur-3xl rounded-full transform -translate-y-1/2" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tighter uppercase leading-[0.9]">
              Bring Nature <br /><span className="brand-gradient-text">Into Your Building</span>
            </h1>
            <p className="text-base md:text-lg text-gray-400 mb-8 leading-relaxed max-w-2xl mx-auto font-medium px-4">
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
                className="space-y-12"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                {/* Category Header - Side by Side Image/Text */}
                  <div className="lg:col-span-12">
                     <div className="grid lg:grid-cols-12 gap-10 items-center">
                        <div className="lg:col-span-8">
                          <p className="text-brand-orange-500 font-black uppercase tracking-[0.3em] text-[10px] mb-4">{category.brand}</p>
                          <h2 className="text-3xl md:text-5xl lg:text-7xl font-black text-white uppercase tracking-tighter leading-none mb-6">{category.name}</h2>
                          <p className="text-base md:text-lg text-gray-400 font-medium leading-relaxed max-w-2xl">{category.description}</p>
                        </div>
                        <div className="lg:col-span-4 hidden lg:block">
                           <div className="relative aspect-square flex items-center justify-center border border-white/5 rounded-[40px] bg-white/[0.01] overflow-hidden group">
                              <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] group-hover:opacity-[0.05] transition-opacity">
                                 <p className="text-[120px] font-black uppercase tracking-tighter select-none -rotate-12">{category.brand}</p>
                              </div>
                              <div className="relative z-10 p-12">
                                 <Zap className="h-24 w-24 text-brand-orange-500/10 group-hover:scale-110 transition-transform duration-700" />
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                {/* Subcategories Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {category.subcategories.map((sub, subIdx) => {
                    const Icon = iconMap[category.icon] || ShieldCheck
                    return (
                      <Link key={subIdx} href={sub.href} className="group">
                        <motion.div
                          className="bg-white/5 border border-white/10 p-6 rounded-[32px] h-full flex flex-col justify-between hover:bg-white/[0.08] hover:border-brand-orange-500/40 transition-all duration-500 relative overflow-hidden"
                          whileHover={{ y: -5 }}
                        >
                          <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
                            <Icon className="h-20 w-20 -mr-6 -mt-6" />
                          </div>
                          <div className="relative z-10">
                            <h4 className="text-white font-black uppercase text-[11px] tracking-widest mb-3 group-hover:text-brand-orange-400 transition-colors">{sub.name}</h4>
                            <p className="text-gray-500 text-[10.5px] leading-relaxed font-medium mb-4">{sub.product}</p>
                          </div>
                          <div className="flex items-center text-[9px] font-black text-brand-orange-500 uppercase tracking-widest relative z-10">
                            Explore <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-2 transition-transform" />
                          </div>
                        </motion.div>
                      </Link>
                    )
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Standards */}
      <section className="py-20 relative px-6 lg:px-12 bg-slate-900/10 border-y border-white/5">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter mb-4">The Standard of <span className="brand-gradient-text">Uday IKSA</span></h2>
            <div className="h-0.5 w-16 bg-brand-orange-500 rounded-full mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "More Than Savings",
                desc: "Reduces Carbon Footprint by cutting down artificial lighting usage. Our systems pay for themselves through energy savings.",
                metric: "Eco-Impact"
              },
              {
                title: "Health & Well-being",
                desc: "Natural light supports circadian rhythms, improving mood, sleep quality, and overall health for occupants.",
                metric: "Human First"
              },
              {
                title: "Workforce Productivity",
                desc: "Better comfort leads to higher productivity. Our optical systems harvest outside sunlight glare-free.",
                metric: "Focus+"
              }
            ].map((std, i) => (
              <motion.div
                key={i}
                className="p-8 bg-white/[0.02] rounded-[32px] border border-white/5 hover:border-brand-orange-500/30 transition-all group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-brand-orange-500 font-black text-2xl mb-3 tracking-tighter group-hover:translate-x-1 transition-transform origin-left">{std.metric}</div>
                <h4 className="text-white font-black uppercase tracking-wider text-xs mb-3">{std.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed font-medium">{std.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section - Optimized Scale */}
      <section className="py-16 relative px-6 border-t border-white/5">
        <div className="container mx-auto">
          <motion.div
            className="bg-brand-gradient py-12 px-8 rounded-[40px] text-center shadow-2xl shadow-brand-orange-500/10 relative overflow-hidden max-w-4xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.005 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute inset-0 bg-grid-white/[0.03] pointer-events-none opacity-50" />
            <h2 className="text-2xl md:text-4xl font-black text-white mb-4 tracking-tighter uppercase leading-tight relative z-10">
              Ready to <br />Transform?
            </h2>
            <p className="text-sm md:text-base text-white/80 max-w-xl mx-auto mb-8 leading-relaxed relative z-10 font-medium font-balance">
              See how much you can save by letting sunlight do the work.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 relative z-10">
              <Link href="/contact" className="block w-full sm:w-auto">
                <HoverButton className="w-full sm:w-auto bg-white text-black hover:bg-slate-900 hover:text-white px-10 py-3.5 rounded-xl font-bold uppercase tracking-widest transition-all text-xs border border-transparent shadow-xl">
                  Start Consultation <ArrowRight className="ml-2 h-4 w-4" />
                </HoverButton>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
