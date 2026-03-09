"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sun, ShieldCheck, Zap, Sparkles, CheckCircle2, Ruler, Maximize2, Layers, HardHat } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { HoverButton } from "@/components/ui/hover-button"
import { useState } from "react"

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
      description: "A step up from the 200mm, the 300mm covers a bit more area and handles slightly higher roofs. Good for compact factory spaces.",
      specs: [
        { label: "Dome Size", value: "300mm (±5%)" },
        { label: "Suitable Roof Height", value: "Below 12 Feet", highlight: true },
        { label: "Reflector Diameter", value: "300mm" },
        { label: "Diffuser Size", value: "280mm" },
        { label: "Light Output", value: "100 – 250 Lux", highlight: true },
        { label: "Dome Material", value: "Optical Polycarbonate" },
        { label: "Reflector Material", value: "Aluminium (95%+ reflective)" },
      ]
    },
    {
      id: "peb-400",
      name: "PEB 400mm",
      bestFor: "Mid-size factory floors, workshops, assembly areas",
      description: "One of our most popular sizes for small to mid-size industrial spaces. Ideal for workshops and assembly areas with standard heights.",
      specs: [
        { label: "Dome Size", value: "400mm (±5%)" },
        { label: "Suitable Roof Height", value: "Below 15 Feet", highlight: true },
        { label: "Reflector Diameter", value: "400mm" },
        { label: "Diffuser Size", value: "380mm" },
        { label: "Light Output", value: "100 – 250 Lux", highlight: true },
        { label: "Dome Material", value: "Optical Polycarbonate" },
        { label: "Reflector Material", value: "Aluminium (95%+ reflective)" },
      ]
    },
    {
      id: "peb-530",
      name: "PEB 530mm",
      bestFor: "Large factory floors, production halls, warehouses",
      description: "When you need more light across a bigger area, the 530mm delivers. This is the go-to size for standard industrial warehouses and production halls.",
      specs: [
        { label: "Dome Size", value: "530mm (±5%)" },
        { label: "Suitable Roof Height", value: "Below 20 Feet", highlight: true },
        { label: "Reflector Diameter", value: "530mm" },
        { label: "Diffuser Size", value: "500mm" },
        { label: "Light Output", value: "150 – 300 Lux", highlight: true },
        { label: "Dome Material", value: "Optical Polycarbonate" },
        { label: "Reflector Material", value: "Aluminium (95%+ reflective)" },
      ]
    },
    {
      id: "peb-750",
      name: "PEB 750mm",
      bestFor: "High-ceiling factories, large sheds, sports halls",
      description: "Got a high roof — 8 to 15 metres? The 750mm is built for it. It pushes more light deeper into tall spaces, ideal for high-bay industrial environments.",
      specs: [
        { label: "Dome Size", value: "750mm (±5%)" },
        { label: "Suitable Roof Height", value: "8M to 15M", highlight: true },
        { label: "Reflector Diameter", value: "750mm" },
        { label: "Diffuser Size", value: "740mm" },
        { label: "Light Output", value: "200 – 350 Lux", highlight: true },
        { label: "Dome Material", value: "Optical Polycarbonate" },
        { label: "Reflector Material", value: "Aluminium (95%+ reflective)" },
      ]
    },
    {
      id: "peb-900",
      name: "PEB 900mm",
      bestFor: "Very large industrial plants, hangars, logistics centres",
      description: "When the space is massive and the roof is high, you need a unit that can keep up. Powerful enough to light large bays in logistics warehouses.",
      specs: [
        { label: "Dome Size", value: "900mm (±5%)" },
        { label: "Suitable Roof Height", value: "Below 45 Feet", highlight: true },
        { label: "Reflector Diameter", value: "900mm" },
        { label: "Diffuser Size", value: "860mm" },
        { label: "Light Output", value: "150 – 350 Lux", highlight: true },
        { label: "Dome Material", value: "Optical Polycarbonate" },
        { label: "Reflector Material", value: "Aluminium (95%+ reflective)" },
      ]
    },
    {
      id: "peb-1000",
      name: "PEB 1000mm",
      bestFor: "Extra-large plants, multi-bay factories, aircraft hangars",
      description: "For serious, high-volume industrial spaces. Where you'd otherwise need rows of tube lights, a few well-placed 1000mm units can transform the entire floor.",
      specs: [
        { label: "Dome Size", value: "1000mm (±5%)" },
        { label: "Suitable Roof Height", value: "Below 45 Feet", highlight: true },
        { label: "Reflector Diameter", value: "1000mm" },
        { label: "Diffuser Size", value: "960mm" },
        { label: "Light Output", value: "150 – 350 Lux", highlight: true },
        { label: "Dome Material", value: "Optical Polycarbonate" },
        { label: "Reflector Material", value: "Aluminium (95%+ reflective)" },
      ]
    },
    {
      id: "peb-1200",
      name: "PEB 1200mm",
      bestFor: "The largest industrial spaces — massive warehouses, steel plants, shipyards",
      description: "Our largest and most powerful circular daylighting unit. Designed for truly massive industrial buildings where conventional lighting is expensive to maintain.",
      specs: [
        { label: "Dome Size", value: "1200mm (±5%)" },
        { label: "Suitable Roof Height", value: "Below 45 Feet", highlight: true },
        { label: "Reflector Diameter", value: "1200mm" },
        { label: "Diffuser Size", value: "1160mm" },
        { label: "Light Output", value: "150 – 350 Lux", highlight: true },
        { label: "Dome Material", value: "Optical Polycarbonate" },
        { label: "Reflector Material", value: "Aluminium (95%+ reflective)" },
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
    <main className="pt-24 bg-slate-950">
      {/* Hero Section */}
      <section className="relative py-40 overflow-hidden px-6 lg:px-12">
        <div className="absolute inset-0 bg-brand-orange-500/5 blur-[120px] rounded-full transform -translate-y-1/2" />
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
              <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-8 py-2.5 mb-10 backdrop-blur-md">
                <Sun className="h-4 w-4 text-brand-orange-400" />
                <h2 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">Natural Sky Light (NANOSUN)</h2>
              </div>
              <h1 className="text-5xl md:text-8xl font-black text-white mb-10 tracking-tighter uppercase leading-[0.9]">
                NANOSUN™ PEB <br /> <span className="brand-gradient-text">Circular Daylight</span>
              </h1>
              <p className="text-xl text-gray-400 mb-16 leading-relaxed max-w-2xl font-medium">
                Natural Sunlight for Your Factory or Warehouse — All Day, <span className="text-white font-bold">No Electricity</span>. Designed specifically for metal roofs to bring pure, comfortable light without the heat.
              </p>
              <div className="flex flex-wrap gap-6">
                <Link href="/contact">
                  <HoverButton className="bg-white text-black hover:bg-brand-orange-500 hover:text-white rounded-2xl px-16 py-8 text-sm font-black uppercase tracking-widest shadow-2xl transition-all">
                    Get Free Assessment <ArrowRight className="ml-3 h-5 w-5" />
                  </HoverButton>
                </Link>
                <button className="px-16 py-8 border-2 border-white/10 hover:border-brand-orange-500/50 text-white transition-all duration-300 rounded-2xl text-[10px] font-black uppercase tracking-widest backdrop-blur-md">
                  Download Catalogue
                </button>
              </div>
            </motion.div>

            <motion.div
              className="relative h-[650px] rounded-[80px] overflow-hidden border border-white/10 shadow-3xl group"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <Image
                src="/images/nanosun-structural.png"
                alt="NANOSUN PEB Technology"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-12 left-12 right-12">
                <div className="bg-white/5 backdrop-blur-3xl border border-white/10 p-10 rounded-[48px]">
                  <p className="text-3xl font-black text-white uppercase tracking-tighter mb-2">Zero Power</p>
                  <p className="text-gray-400 text-sm font-medium">Harvesting the sun to light up massive industrial floorplates.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What's Inside Section */}
      <section className="py-40 relative px-6 lg:px-12 bg-slate-950/50">
        <div className="container mx-auto">
          <div className="text-center mb-32">
            <h2 className="text-4xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter leading-none">What's Inside <span className="brand-gradient-text">Every Unit</span></h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium">Three high-performance components working together to bring nature deep into your space.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {coreComponents.map((component, idx) => (
              <motion.div
                key={idx}
                className="bg-white/[0.03] border border-white/5 p-12 rounded-[60px] hover:bg-white/[0.05] transition-all group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="bg-brand-orange-500/10 w-20 h-20 rounded-3xl flex items-center justify-center mb-10 group-hover:bg-brand-orange-500 group-hover:rotate-6 transition-all duration-500">
                  <component.icon className="h-10 w-10 text-brand-orange-500 group-hover:text-white" />
                </div>
                <h3 className="text-[10px] font-black text-brand-orange-500 uppercase tracking-widest mb-4 leading-none">{component.subtitle}</h3>
                <h4 className="text-3xl font-black text-white uppercase tracking-tighter mb-8 leading-none">{component.title}</h4>
                <p className="text-gray-400 mb-10 text-sm leading-relaxed font-medium">{component.description}</p>
                <div className="space-y-4 pt-10 border-t border-white/5">
                  {component.points.map((point, i) => (
                    <div key={i} className="flex items-center gap-3 text-xs font-black text-gray-500 uppercase tracking-widest">
                      <CheckCircle2 className="h-4 w-4 text-brand-orange-500" />
                      {point}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="py-20 bg-slate-950 border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-10">
            {[
              "Zero Electricity", "Blocks UV & Heat", "Leak-Proof", "Flame Retardant", "Low Maintenance", "Healthier Space", "Made in India"
            ].map((benefit, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-4 group">
                <div className="w-12 h-12 bg-brand-orange-500/10 rounded-xl flex items-center justify-center group-hover:bg-brand-orange-500 transition-colors">
                  <CheckCircle2 className="h-6 w-6 text-brand-orange-500 group-hover:text-white" />
                </div>
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-tight">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Size Selector Section */}
      <section className="py-40 relative px-6 lg:px-12 bg-slate-900/20">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-start pb-20 border-b border-white/5 mb-20">
            <div>
              <h2 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-10">Choose <br /><span className="brand-gradient-text">Your Size</span></h2>
              <p className="text-xl text-gray-400 max-w-xl font-medium leading-relaxed">
                Every building is different — that's why we offer 8 sizes optimized for different roof heights and coverage areas.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 pt-10">
              {sizes.map((size) => (
                <button
                  key={size.id}
                  onClick={() => setActiveSize(size.name)}
                  className={`px-8 py-5 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${activeSize === size.name
                    ? "bg-brand-orange-500 text-white shadow-xl shadow-brand-orange-500/20 scale-105"
                    : "bg-white/5 text-gray-400 hover:bg-white/10"
                    }`}
                >
                  {size.name}
                </button>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-12">
              {sizes.filter(s => s.name === activeSize).map(size => (
                <motion.div
                  key={size.id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="grid lg:grid-cols-2 gap-16"
                >
                  <div className="space-y-12">
                    <div className="inline-flex items-center gap-4 bg-brand-orange-500/10 px-8 py-1.5 rounded-full">
                      <span className="text-[10px] font-black text-brand-orange-500 uppercase tracking-widest">Active Selector</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-orange-500 animate-pulse" />
                      <span className="text-[10px] font-black text-white uppercase tracking-widest">{size.name}</span>
                    </div>
                    <h3 className="text-4xl lg:text-5xl font-black text-white uppercase tracking-tighter">Best For: <br /><span className="text-gray-400">{size.bestFor}</span></h3>
                    <p className="text-xl text-gray-500 leading-relaxed font-medium">{size.description}</p>

                    <Link href="/contact">
                      <Button size="lg" className="bg-white text-black hover:bg-brand-orange-500 hover:text-white rounded-2xl px-12 py-8 text-xs font-black uppercase tracking-widest shadow-2xl shadow-white/5 group">
                        Request Pricing for this size <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>

                  <div className="grid grid-cols-1 gap-4">
                    {size.specs.map((spec, i) => (
                      <div
                        key={i}
                        className={`flex justify-between items-center p-8 rounded-[32px] border ${spec.highlight
                          ? "bg-brand-orange-500/10 border-brand-orange-500/30"
                          : "bg-white/5 border-white/5"
                          }`}
                      >
                        <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{spec.label}</span>
                        <span className={`text-xl font-black ${spec.highlight ? "text-brand-orange-400" : "text-white"}`}>{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Built to Last / Common Specs */}
      <section className="py-40 relative px-6 lg:px-12 bg-slate-950">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="relative h-[600px] rounded-[60px] overflow-hidden border border-white/10 group shadow-2xl shadow-brand-orange-500/10">
              <Image
                src="/images/nanosun-structural.png"
                alt="Uday IKSA Engineering"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-slate-950 to-transparent p-12 flex flex-col justify-end">
                <p className="text-5xl font-black text-white uppercase tracking-tighter mb-4">Built To Last</p>
                <p className="text-gray-400 font-medium">Engineered for the harshest Indian monsoons and summer heat.</p>
              </div>
            </div>

            <div>
              <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-8 py-2.5 mb-10 backdrop-blur-md">
                <ShieldCheck className="h-4 w-4 text-brand-orange-500" />
                <h2 className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Global Engineering Standards</h2>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-white mb-10 uppercase tracking-tighter leading-tight">Common Specifications <br /><span className="brand-gradient-text">(All Sizes)</span></h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
                {commonSpecs.map((spec, i) => (
                  <div key={i} className="space-y-2 pb-6 border-b border-white/5">
                    <p className="text-[10px] font-black text-gray-600 uppercase tracking-widest">{spec.label}</p>
                    <p className="text-white font-bold text-sm tracking-tight">{spec.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
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
            <h2 className="text-5xl md:text-8xl font-black text-white mb-10 tracking-tighter uppercase leading-tight relative z-10">Scale Sustainable</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-16 leading-relaxed relative z-10 font-bold uppercase tracking-widest text-sm opacity-90 leading-relaxed font-medium">
              Not sure which size is right for you? <br />Tell us your roof height and we'll calculate the exact units you need.
            </p>
            <div className="flex flex-wrap justify-center gap-10 relative z-10">
              <Link href="/contact" className="block w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto bg-white text-black hover:bg-black hover:text-white transition-all duration-300 rounded-3xl px-20 py-10 text-xl font-black shadow-2xl shadow-white/10 uppercase tracking-widest">
                  Get Free Assessment <ArrowRight className="ml-4 h-8 w-8" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
