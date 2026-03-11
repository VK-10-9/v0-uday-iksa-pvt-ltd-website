"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Wind, ShieldCheck, Zap, Waves, CheckCircle2, ThermometerSun, Gauge, Droplets, FlaskConical, Building2, Factory } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { HoverButton } from "@/components/ui/hover-button"
import CredentialStrip from "@/components/product/CredentialStrip"
import { useSearchParams } from "next/navigation"

export default function NanoventPage() {
  const searchParams = useSearchParams()
  const initialGrade = searchParams.get("grade") || "ss430"
  const [activeGrade, setActiveGrade] = useState(initialGrade)

  useEffect(() => {
    if (initialGrade) {
      setActiveGrade(initialGrade)
    }
  }, [initialGrade])

  const grades = {
    ss430: {
      name: "SS 430",
      tagline: "Standard Industrial Grade",
      description: "The workhorse of industrial ventilation. High-strength magnetic stainless steel designed for general manufacturing sheds, warehouses, and commercial buildings with standard atmospheric conditions.",
      features: ["Economic Efficiency", "High Tensile Strength", "Standard Weather Resistance"],
      bestFor: "Warehouses, Retail, General Engineering",
      icon: Factory,
      color: "from-slate-400 to-slate-600"
    },
    ss202: {
      name: "SS 202",
      tagline: "Mid-Grade Versatility",
      description: "An austenitic grade offering superior toughness and better corrosion resistance than 430. Ideal for semi-industrial zones and coastal areas with moderate salt exposure.",
      features: ["Enhanced Durability", "Non-Magnetic Properties", "Coastal Semi-Resistant"],
      bestFor: "Food Processing, Coastal Warehousing, Schools",
      icon: Building2,
      color: "from-blue-400 to-blue-600"
    },
    ss304: {
      name: "SS 304",
      tagline: "Premium Corrosive Resistance",
      description: "The ultimate choice for harsh environments. Marine-grade stainless steel that survives chemical fumes, high humidity, and extreme industrial pollution without pitting or rusting.",
      features: ["Maximum Corrosion Defense", "Chemical Vapor Resistant", "Lifetime Surface Finish"],
      bestFor: "Chemical Plants, Pharma Labs, Marine Facilities",
      icon: FlaskConical,
      color: "from-brand-orange-400 to-brand-orange-600"
    }
  }

  return (
    <main className="pt-24 bg-slate-950 min-h-screen text-white">
      {/* Dynamic Hero Section */}
      <section className="relative py-24 overflow-hidden px-6 lg:px-12">
        <div className="absolute inset-0 bg-brand-orange-500/5 blur-[120px] rounded-full transform translate-y-1/2" />
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div
              key={activeGrade}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-8 py-2.5 mb-10 backdrop-blur-md">
                <Wind className="h-4 w-4 text-brand-orange-400" />
                <h2 className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none">NANOVENT® Turbo Ventilator</h2>
              </div>
              <h1 className="text-5xl md:text-8xl font-black text-white mb-6 tracking-tighter uppercase leading-[0.85]">
                Grade <br /> <span className="brand-gradient-text">{grades[activeGrade].name}</span>
              </h1>
              <p className="text-xl text-brand-orange-500 font-bold uppercase tracking-widest mb-10 leading-none">
                {grades[activeGrade].tagline}
              </p>
              <p className="text-lg text-gray-400 mb-12 leading-relaxed max-w-xl font-medium">
                {grades[activeGrade].description}
              </p>

              <div className="grid grid-cols-2 gap-6 mb-12">
                {grades[activeGrade].features.map((f, i) => (
                  <div key={i} className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-gray-300">
                    <CheckCircle2 className="h-4 w-4 text-brand-orange-500" />
                    {f}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-6">
                <Link href="/contact">
                  <HoverButton className="bg-white text-black hover:bg-brand-orange-500 hover:text-white rounded-2xl px-16 py-8 text-sm font-black uppercase tracking-widest shadow-2xl transition-all">
                    Configure My Project <ArrowRight className="ml-3 h-5 w-5" />
                  </HoverButton>
                </Link>
              </div>
            </motion.div>

            <div className="relative">
              {/* Grade Switcher UI */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 flex gap-4 z-20 bg-slate-900/80 backdrop-blur-xl p-3 border border-white/10 rounded-[32px] shadow-2xl">
                {Object.keys(grades).map((grade) => (
                  <button
                    key={grade}
                    onClick={() => setActiveGrade(grade)}
                    className={`px-8 py-4 rounded-[24px] text-[10px] font-black uppercase tracking-widest transition-all duration-500 ${activeGrade === grade ? "bg-brand-orange-500 text-white shadow-lg shadow-brand-orange-500/20" : "text-gray-500 hover:text-white hover:bg-white/5"}`}
                  >
                    {grades[grade].name}
                  </button>
                ))}
              </div>

              <motion.div
                key={`img-${activeGrade}`}
                className="relative h-[650px] rounded-[80px] overflow-hidden border border-white/10 shadow-3xl group"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <Image
                  src="/images/products/nanovent/product-shot.jpg"
                  alt={`${grades[activeGrade].name} Ventilator`}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-12 left-12 right-12">
                  <div className="bg-white/5 backdrop-blur-3xl border border-white/10 p-10 rounded-[48px] flex items-center justify-between">
                    <div>
                      <p className="text-3xl font-black text-white uppercase tracking-tighter mb-2">Best For</p>
                      <p className="text-gray-400 text-sm font-medium">{grades[activeGrade].bestFor}</p>
                    </div>
                    <div className="bg-brand-orange-500/20 p-5 rounded-3xl border border-brand-orange-500/30">
                      {(() => {
                        const Icon = grades[activeGrade].icon
                        return <Icon className="h-8 w-8 text-brand-orange-500" />
                      })()}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <CredentialStrip />

      {/* Comparison Matrix */}
      <section className="py-40 relative px-6 lg:px-12 bg-slate-900/30">
        <div className="container mx-auto">
          <div className="text-center mb-32">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter leading-none">Choose Your <span className="brand-gradient-text">Armor</span></h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium">Matching the right metal to your environment is critical for longevity.</p>
          </div>

          <div className="max-w-5xl mx-auto space-y-6">
            {[
              { label: "Durability", ss430: "High", ss202: "Superior", ss304: "Maximum" },
              { label: "Corrosion Resistance", ss430: "Moderate", ss202: "High", ss304: "Ultra-High" },
              { label: "Coastal Performance", ss430: "Not Recommended", ss202: "Good", ss304: "Excellent" },
              { label: "Magnetic Property", ss430: "Magnetic", ss202: "Non-Magnetic", ss304: "Non-Magnetic" },
              { label: "Project Type", ss430: "Industrial Sheds", ss202: "Semi-Industrial", ss304: "Chemical/Pharma" }
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-4 gap-6 p-8 bg-white/[0.02] border border-white/5 rounded-[32px] hover:bg-white/[0.04] transition-colors items-center">
                <div className="text-[10px] font-black uppercase tracking-widest text-gray-500">{row.label}</div>
                <div className={`text-center text-sm font-bold ${activeGrade === 'ss430' ? 'text-white' : 'text-gray-600'}`}>{row.ss430}</div>
                <div className={`text-center text-sm font-bold ${activeGrade === 'ss202' ? 'text-white' : 'text-gray-600'}`}>{row.ss202}</div>
                <div className={`text-center text-sm font-bold ${activeGrade === 'ss304' ? 'text-white' : 'text-gray-600'}`}>{row.ss304}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Parameters */}
      <section className="py-24 bg-slate-950 border-y border-white/5 relative px-6 lg:px-12">
        <div className="container mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter leading-none">Universal <br /><span className="brand-gradient-text">Parameters</span></h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium">Standard engineering across all grades.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {[
              {
                title: "Vane Design",
                desc: "Scientifically curved aerodynamic vanes that maximize torque even in low-wind conditions.",
                spec: "21 Vane Precision"
              },
              {
                title: "Internal Brace",
                desc: "High-grade aluminium spider-brace prevents deformity under high-speed rotation.",
                spec: "Spider-Arm Support"
              },
              {
                title: "Maintenance",
                desc: "Double-shielded ball bearings from Japan ensure silent, friction-free operation for decades.",
                spec: "Lubricated-for-Life"
              }
            ].map((item, i) => (
              <div key={i} className="bg-white/[0.03] border border-white/10 p-12 rounded-[50px] space-y-6 group hover:bg-white/[0.05] transition-all">
                <h4 className="text-brand-orange-500 font-bold uppercase text-[10px] tracking-widest group-hover:scale-110 transition-transform origin-left">{item.spec}</h4>
                <h3 className="text-2xl font-black text-white uppercase tracking-tighter">{item.title}</h3>
                <p className="text-gray-500 text-sm font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-24 relative px-6 lg:px-12 bg-slate-950">
        <div className="container mx-auto">
          <motion.div
            className="bg-brand-gradient p-24 lg:p-40 rounded-[100px] text-center shadow-2xl shadow-brand-orange-500/20 relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-grid-white/[0.05] pointer-events-none" />
            <Wind className="h-20 w-20 text-white/30 mx-auto mb-10 animate-spin-slow" />
            <h2 className="text-5xl md:text-9xl font-black text-white mb-10 tracking-tighter uppercase leading-none relative z-10">Fresh Flow</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-16 leading-relaxed relative z-10 font-bold uppercase tracking-widest text-sm opacity-90 font-medium">
              Which grade fits your roof? <br />Let our engineers help you choose.
            </p>
            <div className="flex flex-wrap justify-center gap-10 relative z-10">
              <Link href="/contact" className="block w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto bg-white text-black hover:bg-black hover:text-white transition-all duration-300 rounded-3xl px-20 py-10 text-xl font-black shadow-2xl shadow-white/10 uppercase tracking-widest">
                  Talk to a Specialist <ArrowRight className="ml-4 h-8 w-8" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
