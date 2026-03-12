"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sun, ShieldCheck, Zap, Sparkles, CheckCircle2, Ruler, Maximize2, Layers, HardHat } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { HoverButton } from "@/components/ui/hover-button"
import { useState } from "react"
import CredentialStrip from "@/components/product/CredentialStrip"
import ProductTrustSection from "@/components/product/ProductTrustSection"

export default function NanosunPage() {
  const [activeSize, setActiveSize] = useState("PEB 530mm")

  const sizes = [
    {
      id: "peb-200",
      name: "PEB 200mm",
      bestFor: "Small rooms, storage areas, narrow bays with low ceilings",
      description: "If your roof is low (under 10 feet) and you need to brighten up a small or narrow area, the 200mm is your starting point. Compact, lightweight, and easy to install.",
      specs: [
        { label: "Dome Size", value: "200mm (±5%)" },
        { label: "Suitable Roof Height", value: "Below 10 Feet", highlight: true },
        { label: "Reflector Diameter", value: "200mm" },
        { label: "Diffuser Size", value: "180mm" },
        { label: "Light Output", value: "100 – 250 Lux", highlight: true },
        { label: "Dome Material", value: "Optical Polycarbonate" },
        { label: "Reflector Material", value: "Aluminium (95%+ reflective)" },
      ]
    },
    {
      id: "peb-300",
      name: "PEB 300mm",
      bestFor: "Small factory sections, storage bays, utility rooms",
      description: "A professional everyday size for standard factory sheds. This unit sits above your metal roof profile to harvest skylight effectively.",
      specs: [
        { label: "Dome Size", value: "300mm" },
        { label: "Suitable Roof Height", value: "Below 12 Feet", highlight: true },
        { label: "Covering Area", value: "150 – 200 sq ft", highlight: true },
        { label: "Reflector Diameter", value: "300mm" },
        { label: "Diffuser Size", value: "280mm" },
        { label: "Approx Lux", value: "100 – 200 Lux", highlight: true },
        { label: "Dome Material", value: "Optical Polycarbonate" },
      ]
    },
    {
      id: "peb-400",
      name: "PEB 400mm",
      bestFor: "Mid-size factory floors, workshops, assembly areas",
      description: "Our most popular size for industrial workshops. Delivers a significant boost in internal brightness without structural changes.",
      specs: [
        { label: "Dome Size", value: "400mm" },
        { label: "Suitable Roof Height", value: "Below 15 Feet", highlight: true },
        { label: "Covering Area", value: "300 – 500 sq ft", highlight: true },
        { label: "Reflector Diameter", value: "400mm" },
        { label: "Diffuser Size", value: "380mm" },
        { label: "Approx Lux", value: "100 – 200 Lux", highlight: true },
        { label: "Dome Material", value: "Optical Polycarbonate" },
      ]
    },
    {
      id: "peb-530",
      name: "PEB 530mm",
      bestFor: "Large factory floors, production halls, warehouses",
      description: "The workhorse of industrial daylighting. Powerful enough to light up production lines and large storage aisles efficiently.",
      specs: [
        { label: "Dome Size", value: "530mm" },
        { label: "Suitable Roof Height", value: "Below 20 Feet", highlight: true },
        { label: "Covering Area", value: "500 – 800 sq ft", highlight: true },
        { label: "Reflector Diameter", value: "530mm" },
        { label: "Diffuser Size", value: "500mm" },
        { label: "Approx Lux", value: "150 – 300 Lux", highlight: true },
        { label: "Dome Material", value: "Optical Polycarbonate" },
      ]
    },
    {
      id: "peb-750",
      name: "PEB 750mm",
      bestFor: "High-ceiling factories, large sheds, sports halls",
      description: "Designed for high-bay industrial sheds. Pushes intense natural light deep into buildings with ceilings up to 30 feet.",
      specs: [
        { label: "Dome Size", value: "750mm" },
        { label: "Suitable Roof Height", value: "Below 30 Feet", highlight: true },
        { label: "Covering Area", value: "600 – 1000 sq ft", highlight: true },
        { label: "Reflector Diameter", value: "750mm" },
        { label: "Diffuser Size", value: "740mm" },
        { label: "Approx Lux", value: "150 – 300 Lux", highlight: true },
        { label: "Dome Material", value: "Optical Polycarbonate" },
      ]
    },
    {
      id: "peb-900",
      name: "PEB 900mm",
      bestFor: "Very large industrial plants, hangars, logistics centres",
      description: "When the space is massive and the roof is high, you need a unit that can keep up. Powerful enough to light large bays in logistics warehouses.",
      specs: [
        { label: "Dome Size", value: "900mm" },
        { label: "Suitable Roof Height", value: "Below 45 Feet", highlight: true },
        { label: "Reflector Diameter", value: "900mm" },
        { label: "Diffuser Size", value: "860mm" },
        { label: "Light Output", value: "150 – 350 Lux", highlight: true },
        { label: "Dome Material", value: "Optical Polycarbonate" },
      ]
    },
    {
      id: "peb-1200",
      name: "PEB 1200mm",
      bestFor: "Massive industrial spaces — shipyards, steel plants",
      description: "Our largest and most powerful daylighting unit. Designed for massive spans where conventional lighting is impossible to maintain.",
      specs: [
        { label: "Dome Size", value: "1200mm" },
        { label: "Suitable Roof Height", value: "Below 45 Feet", highlight: true },
        { label: "Reflector Diameter", value: "1200mm" },
        { label: "Diffuser Size", value: "1160mm" },
        { label: "Light Output", value: "150 – 350 Lux", highlight: true },
        { label: "Dome Material", value: "Optical Polycarbonate" },
      ]
    },
  ]

  const coreComponents = [
    {
      title: "Optical Light Collector",
      subtitle: "The Dome on Your Roof",
      description: "Captures natural daylight from the sky — even on cloudy days — and blocks out harmful UV rays and excess heat. Made from high-grade optical polycarbonate.",
      icon: Sun,
      points: ["No joints. No leaks.", "UV & Heat Filtration", "Built for Indian Dust"]
    },
    {
      title: "Optical Light Reflector",
      subtitle: "The Pipe That Carries Light",
      description: "An aluminium reflector pipe (95%+ reflectance) channels light straight down. Think of it as a mirror tunnel—light bounces through without losing intensity.",
      icon: Layers,
      points: ["95% Reflective Surface", "Zero Loss Channeling", "Telescopic Design"]
    },
    {
      title: "Optical Light Diffuser",
      subtitle: "The Ceiling Panel That Spreads Light",
      description: "Spreads the light evenly across your floor — soft, glare-free, and comfortable to work under. No harsh bright spots. No dark corners.",
      icon: Maximize2,
      points: ["Even Light Distribution", "Glare-Free Softness", "Diamond Embossed"]
    }
  ]

  const commonSpecs = [
    { label: "Dome Material", value: "Optical Grade Polycarbonate" },
    { label: "UV Protection", value: "Blocks 99% (Below 385nm)" },
    { label: "Heat Entry", value: "Minimal Heat Gain" },
    { label: "Reflectance", value: "≥ 95% Pure Reflectance" },
    { label: "Flame Rating", value: "Flame Retardant (FR Rated)" },
    { label: "Leak Protection", value: "Monsoon-Ready Flanged Dome (Zero Joints)" },
    { label: "Roof Compatibility", value: "PEB / Metal Sheet Roofs" },
    { label: "Maintenance", value: "Zero Moving Parts, No Wiring" },
  ]

  return (
    <main className="pt-24 bg-slate-950 text-slate-200">
      {/* Hero Section - Refined Scale */}
      <section className="relative py-16 md:py-20 overflow-hidden px-6 lg:px-12">
        <div className="absolute inset-0 bg-brand-orange-500/5 blur-[120px] rounded-full transform -translate-y-1/2" />
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8 backdrop-blur-md">
                <Sun className="h-3 w-3 text-brand-orange-400" />
                <h2 className="text-[9px] font-black text-gray-400 uppercase tracking-[0.3em]">Natural Daylighting (NANOSUN™)</h2>
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 uppercase tracking-tighter leading-[0.9]">
                Skylight for Metal <br /> <span className="brand-gradient-text">Roofs (NANOSUN™)</span>
              </h1>
              <p className="text-sm md:text-base text-gray-400 mb-10 leading-relaxed max-w-xl font-medium">
                Natural Sunlight for Your Factory or Warehouse — All Day, <span className="text-white font-bold">No Electricity</span>. Designed specifically for metal roofs to bring pure, comfortable light without the heat gain.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-white text-black hover:bg-slate-900 hover:text-white rounded-xl px-10 py-4 text-xs font-black uppercase tracking-widest shadow-2xl transition-all">
                  <Link href="/contact">
                    Get Free Assessment <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <button className="px-8 py-4 border border-white/10 hover:border-brand-orange-500/40 text-white transition-all duration-300 rounded-xl text-[10px] font-black uppercase tracking-widest backdrop-blur-md">
                  Download Catalogue
                </button>
              </div>
            </motion.div>

            <motion.div
              className="relative aspect-square rounded-[48px] border border-white/10 bg-white/[0.02] shadow-3xl overflow-hidden group"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <Image 
                src="/images/products/nanosun/PEB MODEL.png"
                alt="NANOSUN Product"
                fill
                className="object-contain p-20 opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] group-hover:opacity-[0.04] transition-opacity -z-10">
                <p className="text-[200px] font-black uppercase tracking-tighter select-none -rotate-12">NANOSUN</p>
              </div>
              <div className="absolute bottom-12 left-12 right-12 z-10">
                <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-8 rounded-[32px]">
                   <p className="text-xl md:text-2xl font-black text-white uppercase tracking-tighter mb-1">Zero Power</p>
                   <p className="text-gray-400 text-[11px] font-medium max-w-xs">Engineered to light up massive industrial floorplates using pure sunlight.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CredentialStrip />

      {/* What's Inside Section - Optimized Density */}
      <section className="py-20 relative px-6 lg:px-12 bg-slate-950/50">
        <div className="container mx-auto">
          <div className="text-center mb-16 md:mb-20 px-4">
            <h2 className="text-2xl md:text-4xl font-black text-white mb-4 uppercase tracking-tighter leading-none">What's Inside <span className="brand-gradient-text">Every Unit</span></h2>
            <div className="h-0.5 w-16 bg-brand-orange-500 rounded-full mx-auto mb-6"></div>
            <p className="text-sm md:text-base text-gray-500 max-w-xl mx-auto font-medium">Three high-performance components working together to bring nature deep into your space.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {coreComponents.map((component, idx) => (
              <motion.div
                key={idx}
                className="bg-white/[0.02] border border-white/5 p-10 rounded-[40px] hover:border-brand-orange-500/20 transition-all group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="bg-brand-orange-500/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-orange-500 transition-all duration-500">
                  <component.icon className="h-6 w-6 text-brand-orange-500 group-hover:text-white" />
                </div>
                <h3 className="text-[9px] font-black text-brand-orange-500 uppercase tracking-widest mb-3 leading-none">{component.subtitle}</h3>
                <h4 className="text-xl md:text-2xl font-black text-white uppercase tracking-tighter mb-6 underline decoration-white/5 underline-offset-8">{component.title}</h4>
                <p className="text-gray-500 mb-8 text-xs font-medium leading-relaxed">{component.description}</p>
                <div className="space-y-3 pt-8 border-t border-white/5">
                  {component.points.map((point, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-[10px] font-black text-gray-500 uppercase tracking-widest">
                      <CheckCircle2 className="h-3 w-3 text-brand-orange-500" />
                      {point}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Bar - Minimalist */}
      <section className="py-12 bg-slate-950 border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8">
            {[
              "Zero Electricity", "Blocks UV & Heat", "Leak-Proof", "Flame Retardant", "Low Maintenance", "Healthier Space", "Made in India"
            ].map((benefit, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-3 group">
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-brand-orange-500 transition-colors">
                  <CheckCircle2 className="h-4 w-4 text-brand-orange-500 group-hover:text-white" />
                </div>
                <span className="text-[9px] font-black text-gray-500 uppercase tracking-widest leading-tight">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Size Selector Section - Refined UI */}
      <section className="py-20 relative px-6 lg:px-12 bg-slate-900/20">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start pb-16 border-b border-white/5 mb-16">
            <div>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-white uppercase tracking-tighter mb-6 leading-tight">Choose <br /><span className="brand-gradient-text">Your Size</span></h2>
              <p className="text-sm md:text-base text-gray-500 max-w-md font-medium leading-relaxed">
                Every building is different — we offer 8 sizes optimized for various roof heights and coverage areas.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-4">
              {sizes.map((size) => (
                <button
                  key={size.id}
                  onClick={() => setActiveSize(size.name)}
                  className={`px-5 py-2.5 rounded-xl text-[9px] font-black uppercase tracking-tighter md:tracking-widest transition-all ${activeSize === size.name
                    ? "bg-brand-orange-500 text-white shadow-xl shadow-brand-orange-500/10"
                    : "bg-white/5 text-gray-500 hover:bg-white/10"
                    }`}
                >
                  {size.name}
                </button>
              ))}
            </div>
          </div>

          <div>
            {sizes.filter(s => s.name === activeSize).map(size => (
              <motion.div
                key={size.id}
                initial={{ opacity: 0, scale: 0.99 }}
                animate={{ opacity: 1, scale: 1 }}
                className="grid lg:grid-cols-12 gap-12 items-center"
              >
                <div className="lg:col-span-5 space-y-8">
                  <div className="inline-flex items-center gap-3 bg-brand-orange-500/10 px-4 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange-500 animate-pulse" />
                    <span className="text-[9px] font-black text-white uppercase tracking-widest">{size.name}</span>
                  </div>
                  <h3 className="text-xl md:text-3xl font-black text-white uppercase tracking-tighter leading-tight">Best For: <br /><span className="text-gray-500">{size.bestFor}</span></h3>
                  <p className="text-sm md:text-base text-gray-500 leading-relaxed font-medium">{size.description}</p>

                  <Button asChild className="bg-white text-black hover:bg-slate-900 hover:text-white rounded-xl px-10 py-5 text-xs font-black uppercase tracking-widest shadow-xl group">
                    <Link href="/contact">
                      Request Pricing <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>

                <div className="lg:col-span-1 hidden lg:block border-l border-white/5 h-64 mx-auto" />

                <div className="lg:col-span-6 grid grid-cols-1 gap-3">
                  {size.specs.map((spec, i) => (
                    <div
                      key={i}
                      className={`flex justify-between items-center px-8 py-5 rounded-[24px] border ${spec.highlight
                        ? "bg-brand-orange-500/5 border-brand-orange-500/20"
                        : "bg-white/5 border-white/5"
                        }`}
                    >
                      <span className="text-[9px] font-black text-gray-600 uppercase tracking-widest">{spec.label}</span>
                      <span className={`text-sm md:text-base font-black ${spec.highlight ? "text-brand-orange-500" : "text-white"}`}>{spec.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Specs - Technical Presentation */}
      <section className="py-20 md:py-24 relative px-6 lg:px-12 bg-slate-950">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-[48px] border border-white/10 bg-white/[0.02] shadow-3xl overflow-hidden group"
            >
              <Image
                src="/images/gallery/nanosun/Gujarat Berger Paints India Ltd.6.jpeg"
                alt="NANOSUN Installation — Berger Paints Gujarat"
                fill
                className="object-cover opacity-50 group-hover:opacity-80 group-hover:scale-105 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10 right-10 z-10">
                <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-8 rounded-[32px]">
                  <p className="text-2xl font-black text-white uppercase tracking-tighter mb-1">Structural Precision</p>
                  <p className="text-gray-500 text-xs font-medium">Engineered to fit standard PEB metal profiles with zero structural compromise.</p>
                </div>
              </div>
            </motion.div>

            <div>
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8 backdrop-blur-md">
                <ShieldCheck className="h-3 w-3 text-brand-orange-500" />
                <h2 className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Global Engineering Standards</h2>
              </div>
              <h2 className="text-2xl md:text-4xl font-black text-white mb-8 uppercase tracking-tighter leading-tight">Common Specifications <br /><span className="brand-gradient-text text-xl md:text-2xl">(All Sizes)</span></h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4">
                {commonSpecs.map((spec, i) => (
                  <div key={i} className="flex flex-col gap-1 py-4 border-b border-white/5">
                    <p className="text-[9px] font-black text-gray-600 uppercase tracking-widest">{spec.label}</p>
                    <p className="text-white font-bold text-xs md:text-sm tracking-tight">{spec.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProductTrustSection />

      {/* Bottom CTA Section - Compact & Optimized */}
      <section className="py-12 relative px-6 lg:px-12 bg-slate-950 border-t border-white/5">
        <div className="container mx-auto">
          <motion.div
            className="bg-brand-gradient py-10 px-6 rounded-[32px] text-center shadow-2xl shadow-brand-orange-500/10 relative overflow-hidden max-w-3xl mx-auto"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.002 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute inset-0 bg-grid-white/[0.03] pointer-events-none opacity-50" />
            <h2 className="text-xl md:text-3xl lg:text-3xl font-black text-white mb-4 tracking-tighter uppercase relative z-10 leading-none">Scale Sustainable</h2>
            <p className="text-[10px] md:text-xs text-white/80 max-w-lg mx-auto mb-8 leading-relaxed relative z-10 font-bold uppercase tracking-[0.2em]">
              Not sure which size is right for you? <br />Tell us your roof height and we'll calculate the exact units you need.
            </p>
            <div className="flex flex-wrap justify-center relative z-10">
              <Button asChild className="bg-white text-black hover:bg-slate-900 hover:text-white transition-all duration-300 rounded-xl px-10 py-3.5 text-xs font-black uppercase tracking-widest shadow-2xl">
                <Link href="/contact">
                  Get Free Assessment <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
