"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Sun, ShieldCheck, Zap, Sparkles, CheckCircle2, Building, Construction, HardHat, Home, School, Hotel, Factory, Baby } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { HoverButton } from "@/components/ui/hover-button"
import CredentialStrip from "@/components/product/CredentialStrip"

export default function NanosunRccPage() {
    const [activeCategory, setActiveCategory] = useState("circular")
    const [activeSize, setActiveSize] = useState(0)

    const circularSizes = [
        {
            id: "200mm",
            diameter: "200mm",
            bestFor: "Small rooms — bathrooms, corridors, small storage areas",
            description: "Compact and easy to install, the 200mm is ideal for tight spaces in flat roofs. Turns dark corridors into naturally bright zones.",
            lux: "200 – 300 Lux",
            height: "Below 10 Feet",
            specs: [
                { label: "Dome Diameter", value: "200mm" },
                { label: "Neck Dia", value: "280mm" },
                { label: "Base Dia", value: "620mm" },
                { label: "Material", value: "Optical Polycarbonate" },
            ]
        },
        {
            id: "300mm",
            diameter: "300mm",
            bestFor: "Kitchens, small offices, utility rooms",
            description: "A versatile size for standard flat roof rooms. Provides consistent daylight for residential and commercial interiors.",
            lux: "200 – 300 Lux",
            height: "Below 12 Feet",
            specs: [
                { label: "Dome Diameter", value: "300mm" },
                { label: "Neck Dia", value: "280mm" },
                { label: "Base Dia", value: "620mm" },
                { label: "Material", value: "Optical Polycarbonate" },
            ]
        },
        {
            id: "400mm",
            diameter: "400mm",
            bestFor: "Living rooms, classrooms, mid-size offices",
            description: "The primary choice for RCC buildings. Offers a great balance of light output and structural integration.",
            lux: "200 – 300 Lux",
            height: "Below 15 Feet",
            specs: [
                { label: "Dome Diameter", value: "400mm" },
                { label: "Neck Dia", value: "380mm" },
                { label: "Base Dia", value: "720mm" },
                { label: "Material", value: "Optical Polycarbonate" },
            ]
        },
        {
            id: "530mm",
            diameter: "530mm",
            bestFor: "Large halls, open offices, hospital wards",
            description: "High-output daylighting for broader areas in flat roof buildings. Can replace multiple artificial lights.",
            lux: "250 – 400 Lux",
            height: "Below 20 Feet",
            specs: [
                { label: "Dome Diameter", value: "530mm" },
                { label: "Neck Dia", value: "510mm" },
                { label: "Base Dia", value: "830mm" },
                { label: "Material", value: "Optical Polycarbonate" },
            ]
        },
        {
            id: "750mm",
            diameter: "750mm",
            bestFor: "Auditoriums, hotel lobbies, massive halls",
            description: "Industrial strength daylighting for massive flat roof projects. Designed for maximum light penetration.",
            lux: "250 – 400 Lux",
            height: "Below 30 Feet",
            specs: [
                { label: "Dome Diameter", value: "750mm" },
                { label: "Neck Dia", value: "730mm" },
                { label: "Base Dia", value: "1050mm" },
                { label: "Safety Grill", value: "Optional 730mm" },
            ]
        }
    ]

    const rectSizes = [
        {
            id: "300x600",
            diameter: "300x600 mm",
            bestFor: "Linear corridors, narrow workshops, specialized labs",
            description: "Rectangular dome shape optimized for narrow architectural spaces on flat roofs.",
            lux: "250 – 450 Lux",
            height: "Below 15 Feet",
            specs: [
                { label: "Dome Size", value: "300 x 600 mm" },
                { label: "Neck Inner", value: "280 x 580 mm" },
                { label: "Base Outer", value: "600 x 900 mm" },
                { label: "Type", value: "Single / Double Dome" },
            ]
        },
        {
            id: "600x600",
            diameter: "600x600 mm",
            bestFor: "Standard office grids, residential master rooms",
            description: "Square format dome offering symmetric light distribution and clean aesthetic lines.",
            lux: "300 – 500 Lux",
            height: "Below 18 Feet",
            specs: [
                { label: "Dome Size", value: "600 x 600 mm" },
                { label: "Neck Inner", value: "580 x 580 mm" },
                { label: "Base Outer", value: "900 x 900 mm" },
                { label: "Thickness", value: "2.0 – 3.0 mm" },
            ]
        },
        {
            id: "600x1200",
            diameter: "600x1200 mm",
            bestFor: "Large production halls, wide hallways, lobbies",
            description: "High-volume rectangular unit designed for expansive flat roof surfaces.",
            lux: "400 – 600 Lux",
            height: "Below 25 Feet",
            specs: [
                { label: "Dome Size", value: "600 x 1200 mm" },
                { label: "Neck Inner", value: "580 x 1180 mm" },
                { label: "Base Outer", value: "900 x 1500 mm" },
                { label: "Material", value: "Glazed / Combo Clear" },
            ]
        },
        {
            id: "1000x1200",
            diameter: "1000x1200 mm",
            bestFor: "Commercial complexes, airport zones, malls",
            description: "Maximum output rectangular model for large-scale institutional projects.",
            lux: "500 – 800 Lux",
            height: "Below 35 Feet",
            specs: [
                { label: "Dome Size", value: "1000 x 1200 mm" },
                { label: "Neck Inner", value: "980 x 1180 mm" },
                { label: "Base Outer", value: "1300 x 1500 mm" },
                { label: "Models", value: "Single / Double Glazed" },
            ]
        },
        {
            id: "1000x3000",
            diameter: "1000x3000 mm",
            bestFor: "Massive hangars, wide-span factories, major showrooms",
            description: "The largest rectangular daylighting system available for flat roof integration.",
            lux: "800+ Lux",
            height: "Below 45 Feet",
            specs: [
                { label: "Dome Size", value: "1000 x 3000 mm" },
                { label: "Neck Inner", value: "980 x 2980 mm" },
                { label: "Base Outer", value: "1300 x 3300 mm" },
                { label: "Material", value: "Premium Polycarbonate" },
            ]
        }
    ]

    const activeSizes = activeCategory === "circular" ? circularSizes : rectSizes

    return (
        <main className="pt-24 bg-slate-950 text-slate-200">
      {/* Hero Section - Refined Scale */}
      <section className="relative py-8 md:py-12 overflow-hidden px-6 lg:px-12">
        <div className="absolute inset-0 bg-brand-orange-500/5 blur-[120px] rounded-full transform translate-y-1/2" />
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-1.5 mb-8 backdrop-blur-md">
                <Building className="h-3 w-3 text-brand-orange-500" />
                <h2 className="text-[9px] font-black text-gray-400 uppercase tracking-widest leading-none">Flat Roof Solutions (NANOSUN™)</h2>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 tracking-tighter uppercase leading-[0.95]">
                Flat Roof <br /> <span className="brand-gradient-text">Product</span>
              </h1>
              <p className="text-base md:text-lg text-gray-400 mb-10 leading-relaxed max-w-xl font-medium">
                Live in an apartment? Own an office? If your building has a flat roof, this was made for you. It fits cleanly into your slab — no leaks, no electricity.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-white text-black hover:bg-slate-900 hover:text-white rounded-xl px-12 py-5 text-xs font-black uppercase tracking-widest shadow-2xl transition-all">
                  <Link href="/contact">
                    Free Assessment <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <div className="flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-xl px-6 py-3.5 backdrop-blur-md">
                  <Sparkles className="h-4 w-4 text-brand-orange-500" />
                  <span className="text-[9px] font-black text-white uppercase tracking-widest">Patented Tech</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative aspect-square rounded-[48px] border border-white/10 bg-white/[0.02] shadow-3xl overflow-hidden group"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <Image 
                src="/images/products/nanosun-rcc/circular dome design 300mm 1.1.jpg"
                alt="NANOSUN RCC Product"
                fill
                className="object-contain p-16 opacity-70 group-hover:opacity-90 group-hover:scale-110 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-brand-orange-500/5 group-hover:bg-brand-orange-500/10 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] group-hover:opacity-[0.04] transition-opacity -z-10">
                <p className="text-[200px] font-black uppercase tracking-tighter select-none -rotate-12">RCC</p>
              </div>
              <div className="absolute bottom-12 left-12 right-12 z-10">
                <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-8 rounded-[32px]">
                   <p className="text-2xl font-black text-white uppercase tracking-tighter mb-1">Flush Integration</p>
                   <p className="text-gray-400 text-xs font-medium">Clean, compact, and structurally bonded for flat roof architecture.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CredentialStrip />

      {/* Comparison Section - Optimized Density */}
      <section className="py-10 relative px-6 lg:px-12 bg-slate-900/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tighter leading-none">Built for <span className="brand-gradient-text">Flat Roofs</span></h2>
              <p className="text-sm md:text-base text-gray-500 font-medium italic">"How is this different from the pitched roof version?"</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/[0.02] border border-white/5 p-10 rounded-[40px] relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Construction className="h-16 w-16 text-white" />
                </div>
                <h3 className="text-brand-orange-500 font-black uppercase text-[9px] tracking-widest mb-3">NANOSUN PEB</h3>
                <p className="text-white text-2xl font-black mb-8 tracking-tighter uppercase leading-tight">Factories & <br />Warehouses</p>
                <div className="space-y-3">
                  <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest pb-3 border-b border-white/5">Pitched / PEB Roof Type</p>
                  <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest pb-3 border-b border-white/5">600mm Reflector Height</p>
                  <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest">Standard Lux Output</p>
                </div>
              </div>

              <div className="bg-brand-orange-500/10 border border-brand-orange-500/30 p-10 rounded-[40px] relative overflow-hidden group shadow-2xl">
                <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-30 transition-opacity">
                  <Building className="h-16 w-16 text-brand-orange-500" />
                </div>
                <h3 className="text-brand-orange-500 font-black uppercase text-[9px] tracking-widest mb-3">NANOSUN RCC</h3>
                <p className="text-white text-2xl font-black mb-8 tracking-tighter uppercase leading-tight">Homes, Offices <br />& Hospitals</p>
                <div className="space-y-3">
                  <p className="text-gray-300 text-[10px] font-black uppercase tracking-widest pb-3 border-b border-white/10">Flat Roof Type</p>
                  <p className="text-gray-300 text-[10px] font-black uppercase tracking-widest pb-3 border-b border-white/10">Compact Reflector Height</p>
                  <p className="text-gray-300 text-[10px] font-black uppercase tracking-widest">Enhanced Lux Output</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design & Integration Section */}
      <section className="py-10 relative px-6 lg:px-12 bg-slate-950 overflow-hidden">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tighter leading-none">Specialized <br /><span className="brand-gradient-text">RCC Models</span></h2>
            <p className="text-sm md:text-base text-gray-500 max-w-xl mx-auto font-medium">Standard industrial units or electrically controlled premium systems.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/[0.02] border border-white/5 rounded-[48px] overflow-hidden group shadow-2xl relative"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src="/images/web site images/WhatsApp Image 2026-03-13 at 18.56.32.jpeg"
                  alt="Manual Control RCC Skylight"
                  fill
                  className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
              </div>
              <div className="p-10 relative z-10 text-center">
                <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tighter mb-4">Manual Control Models</h3>
                <p className="text-gray-500 text-xs md:text-sm leading-relaxed mb-8 font-medium italic">"Fixed or Openable — built for flat roofs."</p>
                <div className="flex flex-wrap justify-center gap-2.5">
                  <span className="bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-[9px] font-black text-gray-500 uppercase tracking-widest">Fixed</span>
                  <span className="bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-[9px] font-black text-gray-500 uppercase tracking-widest">Openable</span>
                  <span className="bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-[9px] font-black text-gray-500 uppercase tracking-widest">Optional Mesh</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/[0.02] border border-white/5 rounded-[48px] overflow-hidden group shadow-2xl relative"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src="/images/web site images/WhatsApp Image 2026-03-13 at 18.56.48.jpeg"
                  alt="Electrical Skylight System"
                  fill
                  className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
              </div>
              <div className="p-10 relative z-10 text-center">
                <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tighter mb-4">Electrical Systems</h3>
                <p className="text-gray-500 text-xs md:text-sm leading-relaxed mb-8 font-medium italic">"Smart Remote. Motorized. Auto-Seal."</p>
                <div className="flex flex-wrap justify-center gap-2.5">
                  <span className="bg-brand-orange-500/10 border border-brand-orange-500/20 px-4 py-1.5 rounded-full text-[9px] font-black text-brand-orange-500 uppercase tracking-widest">Smart Remote</span>
                  <span className="bg-brand-orange-500/10 border border-brand-orange-500/20 px-4 py-1.5 rounded-full text-[9px] font-black text-brand-orange-500 uppercase tracking-widest">Motorized</span>
                  <span className="bg-brand-orange-500/10 border border-brand-orange-500/20 px-4 py-1.5 rounded-full text-[9px] font-black text-brand-orange-500 uppercase tracking-widest">Auto-Seal</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Perfect For Section */}
      <section className="py-10 relative px-6 lg:px-12 bg-slate-900/20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-16 uppercase tracking-tighter leading-none">Perfect For <span className="brand-gradient-text">Every Building</span></h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { label: "Bungalows", icon: Home },
              { label: "Offices", icon: Building },
              { label: "Schools", icon: School },
              { label: "Hospitals", icon: Hotel },
              { label: "Hotels", icon: Sparkles },
              { label: "Institutions", icon: Factory },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="space-y-4 group"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-brand-orange-500 group-hover:border-brand-orange-500 transition-all duration-500">
                  <item.icon className="h-6 w-6 text-gray-500 group-hover:text-white transition-all" />
                </div>
                <p className="text-[9px] font-black text-gray-500 uppercase tracking-widest group-hover:text-white transition-colors">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Choose Your Size Section - Refined UI */}
      <section id="sizes" className="py-10 relative px-6 lg:px-12 bg-slate-950">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div className="lg:sticky lg:top-32 h-fit">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter leading-tight">Choose Your <br /><span className="brand-gradient-text">RCC Size</span></h2>
              <p className="text-sm md:text-base text-gray-500 mb-10 font-medium leading-relaxed max-w-md">
                We manufacture 7 different sizes to fit every room — from compact corridors to expansive lobbies.
              </p>
              <div className="flex flex-col gap-6">
                <div className="flex gap-2 p-1.5 bg-white/5 rounded-xl w-fit border border-white/5">
                  <button
                    onClick={() => { setActiveCategory("circular"); setActiveSize(0); }}
                    className={`px-5 py-2 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all ${activeCategory === "circular" ? "bg-brand-orange-500 text-white shadow-lg" : "text-gray-500 hover:text-white"}`}
                  >
                    Circular
                  </button>
                  <button
                    onClick={() => { setActiveCategory("rectangular"); setActiveSize(0); }}
                    className={`px-5 py-2 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all ${activeCategory === "rectangular" ? "bg-brand-orange-500 text-white shadow-lg" : "text-gray-500 hover:text-white"}`}
                  >
                    Rectangular
                  </button>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {activeSizes.map((size, idx) => (
                    <button
                      key={size.id}
                      onClick={() => setActiveSize(idx)}
                      className={`px-6 py-3 rounded-xl font-black uppercase tracking-tighter md:tracking-widest text-[10px] transition-all duration-300 ${activeSize === idx
                        ? "bg-white text-black shadow-xl"
                        : "bg-white/5 text-gray-500 hover:bg-white/10 border border-white/5"
                        }`}
                    >
                      {size.diameter}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-[48px] p-10 lg:p-16 relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory + activeSize}
                  initial={{ opacity: 0, scale: 0.99 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.99 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-10"
                >
                  <div>
                    <div className="inline-flex items-center gap-2 bg-brand-orange-500/10 border border-brand-orange-500/20 rounded-full px-4 py-1 mb-6">
                      <p className="text-[9px] font-black text-brand-orange-500 uppercase tracking-widest">{activeSizes[activeSize].lux} OUTPUT</p>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-4">RCC {activeSizes[activeSize].diameter}</h3>
                    <p className="text-brand-orange-500 font-black uppercase text-[10px] tracking-[0.2em] mb-8">BEST FOR: {activeSizes[activeSize].bestFor}</p>
                    <p className="text-base md:text-lg text-gray-500 leading-relaxed font-medium">{activeSizes[activeSize].description}</p>
                  </div>

                  <div className="grid gap-3">
                    <div className="flex items-center justify-between py-4 border-b border-white/5">
                      <p className="text-gray-600 text-[9px] font-black uppercase tracking-widest">Suitable Roof Height</p>
                      <p className="text-white font-black text-sm">{activeSizes[activeSize].height}</p>
                    </div>
                    {activeSizes[activeSize].specs.map((spec, i) => (
                      <div key={i} className="flex items-center justify-between py-4 border-b border-white/5 last:border-0">
                        <p className="text-gray-600 text-[9px] font-black uppercase tracking-widest">{spec.label}</p>
                        <p className="text-gray-400 text-sm font-bold">{spec.value}</p>
                      </div>
                    ))}
                  </div>

                  <Button asChild className="w-full bg-white text-black hover:bg-slate-900 hover:text-white rounded-xl py-6 text-xs font-black uppercase tracking-widest transition-all">
                    <Link href="/contact">
                      Request Quote for {activeSizes[activeSize].diameter} <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Standard Quality Table */}
      <section className="py-10 relative px-6 lg:px-12 bg-slate-900/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tighter leading-none">Standard <span className="brand-gradient-text">Quality</span></h2>
            <p className="text-gray-500 font-black uppercase tracking-widest text-[9px]">Shared by all RCC configurations</p>
          </div>

          <div className="bg-white/2 border border-white/5 rounded-[40px] overflow-hidden">
            <div className="p-10 md:p-12">
              {[
                { label: "Dome Material", value: "Optical Grade Polycarbonate" },
                { label: "UV Protection", value: "Blocks 99% (Below 385nm)" },
                { label: "Reflectance", value: "≥ 95% Pure Mirror Finish" },
                { label: "Flame Rating", value: "Flame Retardant (FR-Rated)" },
                { label: "Leak Protection", value: "Slab-Bonded Flange Construction" },
                { label: "Maintenance", value: "Zero — No Moving Parts" },
              ].map((spec, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between py-6 border-b border-white/5 last:border-0 gap-2">
                  <p className="text-gray-600 font-black uppercase tracking-widest text-[10px]">{spec.label}</p>
                  <p className="text-white font-bold text-sm md:text-base tracking-tight">{spec.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Compact & Optimized */}
      <section className="py-12 relative px-6 lg:px-12 bg-slate-950">
        <div className="container mx-auto">
          <motion.div
            className="bg-brand-gradient py-10 px-6 rounded-[32px] text-center shadow-2xl shadow-brand-orange-500/10 relative overflow-hidden text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.002 }}
          >
            <div className="absolute inset-0 bg-grid-white/[0.03] pointer-events-none opacity-50" />
            <h2 className="text-xl md:text-3xl lg:text-3xl font-black text-white mb-4 tracking-tighter uppercase relative z-10 leading-none">Start Your Energy Revolution</h2>
            <p className="text-[10px] md:text-xs text-white/80 max-w-lg mx-auto mb-8 leading-relaxed relative z-10 font-bold uppercase tracking-[0.2em]">
              The best time to install is during slab casting. Our team handles every step — from assessment to final leak-proof testing.
            </p>
            <Button asChild size="lg" className="bg-white text-black hover:bg-slate-900 hover:text-white transition-all duration-300 rounded-xl px-10 py-3.5 text-xs font-black uppercase tracking-widest shadow-2xl relative z-10">
              <Link href="/contact">
                Request Free Assessment <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
