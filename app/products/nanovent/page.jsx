"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Wind, ShieldCheck, Zap, Waves, CheckCircle2, ThermometerSun, Gauge, Droplets, FlaskConical, Building2, Factory, Layout, Maximize, Box, Settings, Layers, AppWindow } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { HoverButton } from "@/components/ui/hover-button"
import CredentialStrip from "@/components/product/CredentialStrip"
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
      {/* Dynamic Hero Section */}
      <section className="relative py-24 overflow-hidden px-6 lg:px-12 border-b border-white/5">
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
                <h2 className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none">NANOVENT® Passive Engineering</h2>
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
                    Project Audit <ArrowRight className="ml-3 h-5 w-5" />
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
                  src="/images/products/nanovent/aerial-view.png"
                  alt="Nanovent Factory View"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-12 left-12 right-12">
                  <div className="bg-white/5 backdrop-blur-3xl border border-white/10 p-10 rounded-[48px] flex items-center justify-between">
                    <div>
                      <p className="text-3xl font-black text-white uppercase tracking-tighter mb-2">Aerial View</p>
                      <p className="text-gray-400 text-sm font-medium">Massive Industrial Implementation</p>
                    </div>
                    <div className="bg-brand-orange-500/20 p-5 rounded-3xl border border-brand-orange-500/30">
                      <Maximize className="h-8 w-8 text-brand-orange-500" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <CredentialStrip />

      {/* Anatomy Exploration Section */}
      <section className="py-32 px-6 lg:px-12 bg-white text-slate-950 relative overflow-hidden">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-24 items-center">
            <div className="lg:w-1/2 space-y-12">
              <div className="inline-flex items-center gap-3 bg-slate-100 rounded-full px-6 py-2">
                <Box className="h-4 w-4 text-brand-orange-500" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em]">Precision Engineering</span>
              </div>
              <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85]">
                System <br /><span className="text-brand-orange-500">Anatomy</span>
              </h2>
              <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-xl">
                Every component is balanced to perfection. Our "Exploded View" reveals the 15+ years of R&D behind the world's most efficient passive ventilator.
              </p>

              <div className="space-y-6">
                {components.map((c, i) => (
                  <div key={i} className="flex gap-8 items-start p-8 rounded-[40px] border-2 border-slate-50 hover:border-brand-orange-100 transition-all group">
                    <div className="bg-slate-100 p-4 rounded-2xl group-hover:bg-brand-orange-500 group-hover:text-white transition-all">
                      <Settings className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-black uppercase tracking-tighter mb-2">{c.name}</h4>
                      <p className="text-sm text-slate-500 font-medium leading-relaxed">{c.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2 relative h-[800px] w-full bg-slate-50 rounded-[100px] border-4 border-white shadow-inner flex items-center justify-center">
              <Image
                src="/images/products/nanovent/anatomy.png"
                alt="Nanovent Exploded View"
                width={700}
                height={700}
                className="object-contain"
              />
              {/* Visual Callout Pointers */}
              <div className="absolute top-1/4 right-20 bg-white shadow-2xl p-6 rounded-3xl border border-slate-100 max-w-[200px] animate-bounce">
                <p className="text-[10px] font-black uppercase text-brand-orange-500 mb-2">Key Tech</p>
                <p className="text-xs font-bold leading-tight">Zero-Friction Dual Bearing Hub</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mounting Bases Section */}
      <section className="py-32 px-6 lg:px-12 bg-slate-950 border-y border-white/5 relative">
        <div className="container mx-auto">
          <div className="max-w-4xl mb-24">
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-8">Mounting <br /><span className="brand-gradient-text">Freedom</span></h2>
            <p className="text-xl text-gray-500 font-medium max-w-2xl">We manufacture bases for every roof profile in the market. No leaks, just perfect integration.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {baseTypes.map((base, i) => (
              <div key={i} className="bg-white/[0.03] border border-white/10 p-10 rounded-[60px] flex flex-col justify-between group hover:bg-white/[0.05] transition-all">
                <div className="space-y-6">
                  <div className="bg-brand-orange-500/10 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:bg-brand-orange-500 transition-all">
                    <Layers className="h-8 w-8 text-brand-orange-500 group-hover:text-white" />
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tighter">{base.name}</h3>
                  <p className="text-gray-500 text-xs font-medium leading-relaxed">{base.desc}</p>
                </div>
                <div className="mt-12 pt-8 border-t border-white/5 space-y-4">
                  <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-gray-500">
                    <span>Standard Size</span>
                    <span className="text-white">{base.size}</span>
                  </div>
                  <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-gray-500">
                    <span>Suitability</span>
                    <span className="text-brand-orange-500">{base.suitability}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Suitability Matrix (Grid from Reference) */}
      <section className="py-32 px-6 lg:px-12 bg-slate-900/30">
        <div className="container mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-black uppercase tracking-tighter mb-6">Product <span className="brand-gradient-text">Suitability</span></h2>
            <p className="text-xl text-gray-500 font-medium">From residential basements to massive industrial sheds.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { name: "Sheds & Factories", img: "/images/products/nanovent/app-factory.jpg" },
              { name: "Basements", img: "/images/products/nanovent/app-basement.png" },
              { name: "Hotels & Canteens", img: "/images/products/nanovent/hero-render.png" },
              { name: "Warehouses", img: "/images/products/nanovent/aerial-view.png" },
              { name: "Residential", img: "/images/products/nanovent/product-shot.jpg" }
            ].map((app, i) => (
              <div key={i} className="relative h-64 rounded-3xl overflow-hidden border border-white/10 group">
                <Image src={app.img} alt={app.name} fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <span className="text-[10px] font-black uppercase tracking-widest text-white">{app.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Tables Section */}
      <section className="py-40 px-6 lg:px-12 bg-slate-950 border-t border-white/5">
        <div className="container mx-auto max-w-6xl space-y-32">
          {/* Ventilator Specs */}
          <div>
            <div className="flex items-center gap-6 mb-16">
              <div className="h-1 lg:w-32 bg-brand-orange-500" />
              <h3 className="text-3xl lg:text-5xl font-black uppercase tracking-tighter leading-none">Ventilator <br /><span className="text-gray-500">Specifications</span></h3>
            </div>
            <div className="overflow-x-auto rounded-[40px] border border-white/10 bg-white/[0.02]">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-white/[0.03] border-b border-white/10">
                    <th className="p-8 text-[10px] font-black uppercase tracking-widest text-gray-400">Parameter</th>
                    <th className="p-8 text-[10px] font-black uppercase tracking-widest text-gray-400">Description</th>
                    <th className="p-8 text-[10px] font-black uppercase tracking-widest text-brand-orange-500">Value</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {[
                    ["Material Options", "Stainless Steel (SS 430, 202, 304)", "Grade Selective"],
                    ["Throat Neck", "Standard Exit Diameter", "24 Inch"],
                    ["Bearing System", "Double Shielded Precision Hub", "Lubricated-for-Life"],
                    ["Area Coverage", "Effective Ventilation Zone", "500 Sq.Ft. (+/-)"],
                    ["Warranty", "Manufacturer Warranty", "1 Year (Standard)"]
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                      <td className="p-8 text-white font-black uppercase tracking-tighter">{row[0]}</td>
                      <td className="p-8 text-gray-500 font-medium">{row[1]}</td>
                      <td className="p-8 text-brand-orange-400 font-black">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Base Specs */}
          <div>
            <div className="flex items-center gap-6 mb-16">
              <div className="h-1 lg:w-32 bg-brand-orange-500" />
              <h3 className="text-3xl lg:text-5xl font-black uppercase tracking-tighter leading-none">Mounting Base <br /><span className="text-gray-500">Engineering</span></h3>
            </div>
            <div className="overflow-x-auto rounded-[40px] border border-white/10 bg-white/[0.02]">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-white/[0.03] border-b border-white/10">
                    <th className="p-8 text-[10px] font-black uppercase tracking-widest text-gray-400">Base Material</th>
                    <th className="p-8 text-[10px] font-black uppercase tracking-widest text-gray-400">Dimensions (mm)</th>
                    <th className="p-8 text-[10px] font-black uppercase tracking-widest text-gray-400">Thickness</th>
                    <th className="p-8 text-[10px] font-black uppercase tracking-widest text-brand-orange-500">Suitability</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {[
                    ["PC Base (Clear)", "1700 x 1060", "2.0 mm", "Universal Profiles"],
                    ["GI Base (Opaque)", "1700 x 1060", "2.0 mm", "High Structural"],
                    ["FRP Base", "1200 x 1060", "2.0 mm", "Custom Profiles"],
                    ["Asbestos Base", "1700 x 1060", "2.0 mm", "Legacy Sheets"]
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                      <td className="p-8 text-white font-black uppercase tracking-tighter">{row[0]}</td>
                      <td className="p-8 text-gray-400 font-medium">{row[1]}</td>
                      <td className="p-8 text-gray-500 font-medium">{row[2]}</td>
                      <td className="p-8 text-brand-orange-400 font-black italic">{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 relative px-6 lg:px-12 bg-slate-900">
        <div className="container mx-auto">
          <motion.div
            className="bg-brand-gradient p-24 lg:p-40 rounded-[100px] text-center shadow-2xl shadow-brand-orange-500/20 relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-grid-white/[0.05] pointer-events-none" />
            <Wind className="h-20 w-20 text-white/30 mx-auto mb-10 animate-spin-slow" />
            <h2 className="text-5xl md:text-9xl font-black text-white mb-10 tracking-tighter uppercase leading-none relative z-10">Unpower Your Flow</h2>
            <div className="flex flex-wrap justify-center gap-10 relative z-10">
              <Link href="/contact" className="block w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto bg-white text-black hover:bg-black hover:text-white transition-all duration-300 rounded-3xl px-20 py-10 text-xl font-black shadow-2xl shadow-white/10 uppercase tracking-widest">
                  Start Fresh Air Audit <ArrowRight className="ml-4 h-8 w-8" />
                </Button>
              </Link>
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

