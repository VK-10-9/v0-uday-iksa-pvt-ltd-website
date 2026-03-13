"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Wind, ShieldCheck, Zap, Waves, CheckCircle2, ThermometerSun, Gauge, Droplets, FlaskConical, Building2, Factory, Layout, Maximize, Box, Settings, Layers, AppWindow, Ruler, Home } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { HoverButton } from "@/components/ui/hover-button"
import CredentialStrip from "@/components/product/CredentialStrip"
import ProductTrustSection from "@/components/product/ProductTrustSection"
import { useSearchParams } from "next/navigation"
import { Suspense } from "react"

function NanoventContent() {
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
      description: "The workhorse of industrial ventilation. High-strength magnetic stainless steel designed for general manufacturing sheds, warehouses, and commercial buildings.",
      features: ["Economic Efficiency", "High Tensile Strength", "Standard Weather Resistance"],
      bestFor: "Warehouses, Retail, General Engineering",
      icon: Factory,
    },
    ss202: {
      name: "SS 202",
      tagline: "Mid-Grade Versatility",
      description: "An austenitic grade offering superior toughness and better corrosion resistance than 430. Ideal for semi-industrial zones and coastal areas.",
      features: ["Enhanced Durability", "Non-Magnetic Properties", "Coastal Semi-Resistant"],
      bestFor: "Food Processing, Coastal Warehousing, Schools",
      icon: Building2,
    },
    ss304: {
      name: "SS 304",
      tagline: "Premium Corrosive Resistance",
      description: "The ultimate choice for harsh environments. Marine-grade stainless steel that survives chemical fumes, high humidity, and extreme industrial pollution.",
      features: ["Maximum Corrosion Defense", "Chemical Vapor Resistant", "Lifetime Surface Finish"],
      bestFor: "Chemical Plants, Pharma Labs, Marine Facilities",
      icon: FlaskConical,
    }
  }

  const baseTypes = [
    { name: "Polycarbonate Base", desc: "100% transparent, matching your roof sheet profile (Cement, S-Crust, Tile, Metal).", size: "1700mm x 1060mm", suitability: "Residential & Industrial" },
    { name: "GI Base", desc: "Galvanized Iron base for high-strength requirements in harsh industrial zones.", size: "1700mm x 1060mm", suitability: "Large Factories" },
    { name: "FRP Base", desc: "Fiber-Reinforced Plastic, highly durable and customizable to complex roof shapes.", size: "1200mm x 1060mm", suitability: "Chemical & Corrosive Zones" },
    { name: "Asbestos Sheet Base", desc: "Specialized PC profiles for seamless integration with legacy asbestos roofing.", size: "1700mm x 1060mm", suitability: "Legacy Industrial Units" }
  ]

  const components = [
    { name: "Top Cover Plate", desc: "High-grade weather shield with specialized screw fixing." },
    { name: "Dual PC Bearings", desc: "Double-shielded precision bearings for friction-free rotation." },
    { name: "Turbine Head", desc: "Aerodynamically curved vanes that create maximum centrifugal lift." },
    { name: "Spider Support", desc: "Reinforced internal bracing that prevents turbine warping." },
    { name: "Structural Base", desc: "Precision-molded base plate designed for 100% leak-proof fit." }
  ]

  return (
    <main className="pt-24 bg-slate-950 min-h-screen text-white overflow-hidden">
      {/* Dynamic Hero Section - Refined Scale */}
      <section className="relative py-8 md:py-12 overflow-hidden px-6 lg:px-12 border-b border-white/5">
        <div className="absolute inset-0 bg-brand-orange-500/5 blur-[120px] rounded-full transform translate-y-1/2" />
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <motion.div
              key={activeGrade}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-1.5 mb-8 backdrop-blur-md">
                <Wind className="h-3 w-3 text-brand-orange-400" />
                <h2 className="text-[9px] font-black text-gray-400 uppercase tracking-widest leading-none">Natural Ventilation (NANOVENT®)</h2>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tighter uppercase leading-[0.95]">
                Natural Roof <br /> <span className="brand-gradient-text">Ventilator (NANOVENT®)</span>
              </h1>
              <p className="text-sm md:text-base text-brand-orange-500 font-bold uppercase tracking-widest mb-8 leading-none">
                {grades[activeGrade].tagline}
              </p>
              <p className="text-base text-gray-400 mb-10 leading-relaxed max-w-xl font-medium">
                {grades[activeGrade].description}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-10">
                {grades[activeGrade].features.map((f, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-[10px] font-black uppercase tracking-widest text-gray-500">
                    <CheckCircle2 className="h-3.5 w-3.5 text-brand-orange-500" />
                    {f}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-white text-black hover:bg-slate-900 hover:text-white rounded-xl px-12 py-5 text-xs font-black uppercase tracking-widest shadow-2xl transition-all">
                  <Link href="/contact">
                    Project Audit <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>

            <div className="relative">
              {/* Grade Switcher UI */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex gap-2 z-20 bg-slate-900/80 backdrop-blur-xl p-2 border border-white/5 rounded-2xl shadow-2xl">
                {Object.keys(grades).map((grade) => (
                  <button
                    key={grade}
                    onClick={() => setActiveGrade(grade)}
                    className={`px-5 py-2.5 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all duration-300 ${activeGrade === grade ? "bg-brand-orange-500 text-white shadow-lg shadow-brand-orange-500/20" : "text-gray-500 hover:text-white hover:bg-white/5"}`}
                  >
                    {grades[grade].name}
                  </button>
                ))}
              </div>

              <motion.div
                key={`img-${activeGrade}`}
                className="relative aspect-square rounded-[48px] border border-white/10 bg-white/[0.02] shadow-3xl overflow-hidden group"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <Image 
                  src="/images/gallery/nanovent/RCC - Turbo Ventilator .png"
                  alt="NANOVENT Product"
                  fill
                  className="object-contain p-20 opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-1000"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${activeGrade === 'ss430' ? 'from-brand-orange-500/10' : activeGrade === 'ss202' ? 'from-blue-500/10' : 'from-green-500/10'} to-slate-950/80 transition-colors duration-500`} />
                <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] group-hover:opacity-[0.04] transition-opacity -z-10">
                  <p className="text-[200px] font-black uppercase tracking-tighter select-none -rotate-12">{grades[activeGrade].name}</p>
                </div>
                <div className="absolute bottom-12 left-12 right-12 z-10">
                  <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-8 rounded-[32px] flex items-center justify-between gap-6">
                    <div>
                      <p className="text-2xl font-black text-white uppercase tracking-tighter mb-1">Passive Flow</p>
                      <p className="text-gray-400 text-xs font-medium">Mechanical Engineering Perfection</p>
                    </div>
                    <div className="bg-brand-orange-500/10 p-3 rounded-2xl border border-brand-orange-500/20">
                      <Maximize className="h-5 w-5 text-brand-orange-500" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <CredentialStrip />

      {/* Anatomy Exploration Section - Realigned to Dark Theme */}
      <section className="py-10 px-6 lg:px-12 bg-slate-950 text-white relative overflow-hidden">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            <div className="lg:w-1/2 space-y-10">
              <div className="inline-flex items-center gap-2 bg-brand-orange-500/10 border border-brand-orange-500/20 rounded-full px-5 py-1.5">
                <Box className="h-3.5 w-3.5 text-brand-orange-400" />
                <span className="text-[9px] font-black uppercase tracking-widest text-brand-orange-400">Precision Engineering</span>
              </div>
              <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
                System <br /><span className="text-brand-orange-500">Anatomy</span>
              </h2>
              <p className="text-sm md:text-base text-gray-500 font-medium leading-relaxed max-w-lg">
                Balanced to perfection. Our engineering reveals the R&D behind the world&apos;s most efficient passive ventilator.
              </p>

              <div className="space-y-3">
                {components.map((c, i) => (
                  <motion.div
                    key={i}
                    className="flex gap-6 items-start p-6 rounded-[32px] border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-brand-orange-500/20 transition-all group"
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <div className="bg-brand-orange-500/10 p-3 rounded-xl group-hover:bg-brand-orange-500 transition-all text-brand-orange-500 group-hover:text-white">
                      <Settings className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-black uppercase tracking-tighter mb-1.5 text-white">{c.name}</h4>
                      <p className="text-[11px] text-gray-500 font-medium leading-relaxed">{c.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2 relative aspect-square w-full rounded-[64px] border border-white/5 shadow-3xl overflow-hidden group">
               <Image
                 src="/images/gallery/nanovent/WhatsApp Image 2025-12-13 at 10.44.17 AM.jpeg"
                 alt="NANOVENT Turbo Ventilator Installation"
                 fill
                 className="object-cover opacity-50 group-hover:opacity-80 group-hover:scale-105 transition-all duration-1000"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
               <div className="absolute top-1/4 right-12 bg-slate-800/80 backdrop-blur-md shadow-2xl p-6 rounded-[32px] border border-white/10 max-w-[180px] z-20">
                <p className="text-[8px] font-black uppercase text-brand-orange-500 mb-1 tracking-widest">Key Tech</p>
                <p className="text-xs font-black leading-tight text-white">Zero-Friction Dual Bearing Hub</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mounting Bases Section - Densified */}
      <section className="py-10 px-6 lg:px-12 bg-slate-950 border-y border-white/5 relative">
        <div className="container mx-auto">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-6">Mounting <br /><span className="brand-gradient-text">Freedom</span></h2>
            <p className="text-sm md:text-base text-gray-500 font-medium max-w-xl">Bases for every industrial roof profile. Zero leaks, 100% mechanical integration.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {baseTypes.map((base, i) => (
              <div key={i} className="bg-white/[0.02] border border-white/5 p-8 rounded-[40px] flex flex-col justify-between group hover:border-brand-orange-500/20 transition-all shadow-xl">
                <div className="space-y-5">
                  <div className="bg-brand-orange-500/10 w-12 h-12 rounded-xl flex items-center justify-center group-hover:bg-brand-orange-500 transition-all duration-500">
                    <Layers className="h-5 w-5 text-brand-orange-500 group-hover:text-white" />
                  </div>
                  <h3 className="text-lg font-black uppercase tracking-tighter text-white">{base.name}</h3>
                  <p className="text-gray-500 text-[11px] font-medium leading-relaxed">{base.desc}</p>
                </div>
                <div className="mt-8 pt-6 border-t border-white/5 space-y-3">
                  <div className="flex justify-between items-center text-[8px] font-black uppercase tracking-[0.2em] text-gray-600">
                    <span>Size</span>
                    <span className="text-white">{base.size}</span>
                  </div>
                  <div className="flex justify-between items-center text-[8px] font-black uppercase tracking-[0.2em] text-gray-600">
                    <span>Target</span>
                    <span className="text-brand-orange-500">{base.suitability}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Suitability Grid - Tightened */}
      <section className="py-10 px-6 lg:px-12 bg-slate-900/10">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4 text-white">Project <span className="brand-gradient-text">Suitability</span></h2>
            <p className="text-sm md:text-base text-gray-500 font-medium">Engineered for extreme industrial scale.</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { name: "Sheds & Factories", src: "/images/gallery/nanovent/WhatsApp Image 2025-12-13 at 10.44.15 AM.jpeg" },
              { name: "Production Units", src: "/images/gallery/nanovent/WhatsApp Image 2025-12-13 at 10.44.25 AM.jpeg" },
              { name: "Hotels & Canteens", src: "/images/gallery/nanovent/WhatsApp Image 2025-12-13 at 10.44.17 AM.jpeg" },
              { name: "Warehouses", src: "/images/gallery/nanovent/WhatsApp Image 2025-12-13 at 10.44.26 AM.jpeg" },
              { name: "Industrial Roofs", src: "/images/gallery/nanovent/RCC - Turbo Ventilator .png" }
            ].map((app, i) => (
              <div key={i} className="relative h-48 rounded-3xl overflow-hidden border border-white/5 group shadow-2xl">
                <Image
                  src={app.src}
                  alt={app.name}
                  fill
                  className="object-cover opacity-50 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-5 left-5">
                  <span className="text-[9px] font-black uppercase tracking-widest text-white/90">{app.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Tables Section - Densified */}
      <section className="py-10 px-6 lg:px-12 bg-slate-950 border-t border-white/5">
        <div className="container mx-auto max-w-5xl space-y-24">
          <div>
            <div className="flex items-center gap-4 mb-12">
              <Ruler className="h-8 w-8 text-brand-orange-500" />
              <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tighter leading-none text-white">Ventilator <br /><span className="text-gray-600">Specs</span></h3>
            </div>
            <div className="overflow-hidden rounded-[32px] border border-white/5 bg-white/[0.01]">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-white/[0.02] border-b border-white/10">
                      <th className="p-6 text-[9px] font-black uppercase tracking-widest text-gray-500">Parameter</th>
                      <th className="p-6 text-[9px] font-black uppercase tracking-widest text-gray-500">Description</th>
                      <th className="p-6 text-[9px] font-black uppercase tracking-widest text-brand-orange-500">Value</th>
                    </tr>
                  </thead>
                  <tbody className="text-[11px]">
                    {[
                      ["Material Options", "Stainless Steel (SS 430, 202, 304)", "Grade Selective"],
                      ["Throat Neck", "Standard Exit Diameter", "24 Inch"],
                      ["Bearing System", "Double Shielded precision Hub", "Lubricated-for-Life"],
                      ["Area Coverage", "Effective Ventilation Zone", "500 Sq.Ft. (+/-)"],
                      ["Warranty", "Manufacturer Warranty", "1 Year (Standard)"]
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors last:border-0">
                        <td className="p-6 text-white font-black uppercase tracking-tighter">{row[0]}</td>
                        <td className="p-6 text-gray-500 font-bold">{row[1]}</td>
                        <td className="p-6 text-brand-orange-500 font-black tracking-tight">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-4 mb-12">
              <Layers className="h-8 w-8 text-brand-orange-500" />
              <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tighter leading-none text-white">Mounting Base <br /><span className="text-gray-600">Engineering</span></h3>
            </div>
            <div className="overflow-hidden rounded-[32px] border border-white/5 bg-white/[0.01]">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-white/[0.02] border-b border-white/10">
                      <th className="p-6 text-[9px] font-black uppercase tracking-widest text-gray-500">Base Material</th>
                      <th className="p-6 text-[9px] font-black uppercase tracking-widest text-gray-500">Dimensions (mm)</th>
                      <th className="p-6 text-[9px] font-black uppercase tracking-widest text-gray-500">Thickness</th>
                      <th className="p-6 text-[9px] font-black uppercase tracking-widest text-brand-orange-500">Suitability</th>
                    </tr>
                  </thead>
                  <tbody className="text-[11px]">
                    {[
                      ["PC Base (Clear)", "1700 x 1060", "2.0 mm", "Universal Profiles"],
                      ["GI Base (Opaque)", "1700 x 1060", "2.0 mm", "High Structural"],
                      ["FRP Base", "1200 x 1060", "2.0 mm", "Custom Profiles"],
                      ["Asbestos Base", "1700 x 1060", "2.0 mm", "Legacy Sheets"]
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors last:border-0">
                        <td className="p-6 text-white font-black uppercase tracking-tighter">{row[0]}</td>
                        <td className="p-6 text-gray-600 font-bold">{row[1]}</td>
                        <td className="p-6 text-gray-600 font-bold">{row[2]}</td>
                        <td className="p-6 text-brand-orange-500 font-black italic">{row[3]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProductTrustSection />

      {/* Final CTA - Optimized */}
      <section className="py-12 relative px-6 lg:px-12 bg-slate-950 border-t border-white/5">
        <div className="container mx-auto">
          <motion.div
            className="bg-brand-gradient py-12 md:py-20 px-8 rounded-[48px] text-center shadow-2xl shadow-brand-orange-500/10 relative overflow-hidden max-w-4xl mx-auto"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none opacity-50" />
            <Wind className="h-10 w-10 text-white/20 mx-auto mb-6 opacity-30 animate-spin-slow" />
            <h2 className="text-3xl md:text-6xl font-black text-white mb-10 tracking-tighter uppercase relative z-10 leading-none">Unpower Your Flow</h2>
            <div className="flex flex-wrap justify-center gap-4 relative z-10">
              <Button asChild className="bg-white text-black hover:bg-slate-900 hover:text-white transition-all duration-300 rounded-xl px-12 py-5 text-xs font-black uppercase tracking-widest shadow-2xl shadow-white/5">
                <Link href="/contact">
                  Start Fresh Air Audit <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

export default function NanoventPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-950 flex items-center justify-center"><Wind className="h-12 w-12 text-brand-orange-500 animate-spin" /></div>}>
      <NanoventContent />
    </Suspense>
  )
}

