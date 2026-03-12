"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Sun, ShieldCheck, Sparkles, CheckCircle2, Layers, Maximize2, Home, School, Hotel, Stethoscope, Phone } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { HoverButton } from "@/components/ui/hover-button"

export default function NanosunTilesPage() {
    const [activeSize, setActiveSize] = useState(0)

    const sizes = [
        {
            id: "300mm",
            diameter: "300mm",
            bestFor: "Below 12 Feet — Kitchens, bathrooms, corridors, small bedrooms",
            description: "The entry-level tile-roof unit. Compact and easy to install between tile battens. Ideal for kitchens, bathrooms, and narrow corridors in bungalows and smaller buildings.",
            lux: "100 – 200 Lux",
            height: "Below 12 Feet",
            coverage: "150 – 200 sq ft",
            specs: [
                { label: "Dome Size", value: "300mm (±5%)" },
                { label: "Dome Material", value: "Optical Polycarbonate" },
                { label: "Coverage Area", value: "150 – 200 sq ft", highlight: true },
                { label: "Light Output", value: "100 – 200 Lux", highlight: true },
                { label: "Suitable Roof Height", value: "Below 12 Feet" },
            ]
        },
        {
            id: "400mm",
            diameter: "400mm",
            bestFor: "Below 15 Feet — Living rooms, classrooms, resort common areas",
            description: "The versatile mid-range size. Covers more floor area and works well for standard residential rooms, school classrooms, hotel corridors, and resort common spaces.",
            lux: "100 – 200 Lux",
            height: "Below 15 Feet",
            coverage: "300 – 500 sq ft",
            specs: [
                { label: "Dome Size", value: "400mm (±5%)" },
                { label: "Dome Material", value: "Optical Polycarbonate" },
                { label: "Coverage Area", value: "300 – 500 sq ft", highlight: true },
                { label: "Light Output", value: "100 – 200 Lux", highlight: true },
                { label: "Suitable Roof Height", value: "Below 15 Feet" },
            ]
        },
        {
            id: "530mm",
            diameter: "530mm",
            bestFor: "Below 20 Feet — Large halls, banquet rooms, open verandas",
            description: "For larger rooms under pitched roofs. When you need to flood a big living room, dining hall, or banquet area with natural light — the 530mm delivers serious coverage.",
            lux: "150 – 300 Lux",
            height: "Below 20 Feet",
            coverage: "500 – 800 sq ft",
            specs: [
                { label: "Dome Size", value: "530mm (±5%)" },
                { label: "Dome Material", value: "Optical Polycarbonate" },
                { label: "Coverage Area", value: "500 – 800 sq ft", highlight: true },
                { label: "Light Output", value: "150 – 300 Lux", highlight: true },
                { label: "Suitable Roof Height", value: "Below 20 Feet" },
            ]
        },
        {
            id: "750mm",
            diameter: "750mm",
            bestFor: "Below 30 Feet — Temple halls, hotel lobbies, large institutional spaces",
            description: "The largest tile-roof unit. For tall, pitched roofs over large gathering spaces — temple prayer halls, resort dining areas, hospital atriums, and institutional buildings.",
            lux: "150 – 300 Lux",
            height: "Below 30 Feet",
            coverage: "600 – 1000 sq ft",
            specs: [
                { label: "Dome Size", value: "750mm (±5%)" },
                { label: "Dome Material", value: "Optical Polycarbonate" },
                { label: "Coverage Area", value: "600 – 1000 sq ft", highlight: true },
                { label: "Light Output", value: "150 – 300 Lux", highlight: true },
                { label: "Suitable Roof Height", value: "Below 30 Feet" },
            ]
        },
    ]

    const howItWorks = [
        {
            step: "01",
            title: "Dome on the Roof",
            subtitle: "Collects Daylight",
            description: "A clear optical dome sits above your tile line, collecting ambient daylight from the sky — including on overcast days.",
            icon: Sun,
        },
        {
            step: "02",
            title: "Reflective Pipe Through the Roof",
            subtitle: "Channels Light Downward",
            description: "A highly reflective circular pipe channels the light downward through the roof structure into the room below. Can use 45° or 90° bends to navigate around beams or walls if needed.",
            icon: Layers,
        },
        {
            step: "03",
            title: "Diffuser at the Ceiling",
            subtitle: "Spreads Light Evenly",
            description: "A soft diffuser panel at ceiling level spreads the light evenly across your room. Glare-free, heat-free, UV-free.",
            icon: Maximize2,
        }
    ]

    const applications = [
        { name: "Homeowners", icon: Home, desc: "Mangalore tile or modern Italian tile roofs — brighten kitchens, bathrooms, corridors, living rooms." },
        { name: "Hotels & Resorts", icon: Hotel, desc: "Natural, warm lighting in rooms, dining areas, and corridors without increasing electricity bills." },
        { name: "Schools & Institutions", icon: School, desc: "Older tiled buildings that feel dark and stuffy — classrooms, corridors, libraries." },
        { name: "Hospitals & Clinics", icon: Stethoscope, desc: "Natural light aids patient recovery and staff well-being in wards and waiting areas." },
    ]

    const systemComponents = [
        "Optical Daylight Collecting Dome — polycarbonate, UV filtering",
        "FRP Base / Covering Sheet — matched to your roof tile profile",
        "Optical Reflector — highly reflective aluminium pipe",
        "L-Ring support — structural hold within the roof frame",
        "Optical Diffuser — soft, even light distribution at ceiling level",
        "Support Ring — keeps the system flush and leak-proof",
        "Gasket seal — waterproofing at the roof interface",
    ]

    const keyBenefits = [
        "No structural changes to your roof",
        "Compatible with Mangalore and modern tile types",
        "Zero electricity during daytime",
        "Filters UV and heat — only visible light enters",
        "Can be angled with bends to reach any room",
        "Reaches down up to 7–8 metres deep",
        "Installed by Uday IKSA's expert team — clean, fast, no mess",
    ]

    return (
        <main className="pt-24 bg-slate-950 text-slate-200">
      {/* Hero Section - Refined Scale */}
      <section className="relative py-20 md:py-32 overflow-hidden px-6 lg:px-12">
        <div className="absolute inset-0 bg-brand-orange-500/5 blur-[120px] rounded-full transform -translate-y-1/2" />
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-1.5 mb-8 backdrop-blur-md">
                <Sun className="h-3 w-3 text-brand-orange-400" />
                <h2 className="text-[9px] font-black text-gray-400 uppercase tracking-widest leading-none">Tile Roof Daylight (NANOSUN)</h2>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 tracking-tighter uppercase leading-[0.95]">
                NANOSUN™ <br /> <span className="brand-gradient-text">Tiles Daylight</span>
              </h1>
              <p className="text-base md:text-lg text-gray-400 mb-6 leading-relaxed max-w-xl font-medium">
                Natural Light for Your Tiled Roof Home — <span className="text-white font-bold">Without Structural Changes.</span>
              </p>
              <p className="text-sm text-gray-500 mb-10 leading-relaxed max-w-xl">
                Got a traditional Mangalore tile roof or a modern Italian tile bungalow? This model was built specifically for you. It fits seamlessly into your existing roof profile without touching a single rafter.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-white text-black hover:bg-slate-900 hover:text-white rounded-xl px-12 py-5 text-xs font-black uppercase tracking-widest shadow-2xl transition-all">
                  <Link href="/contact">
                    Free Assessment <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <a href="tel:+918792182631" className="px-8 py-5 border border-white/10 hover:border-brand-orange-500/40 text-white transition-all duration-300 rounded-xl text-[10px] font-black uppercase tracking-widest backdrop-blur-md flex items-center gap-2">
                  <Phone className="h-3.5 w-3.5" /> +91 8792182631
                </a>
              </div>
            </motion.div>

            <motion.div
              className="relative h-[400px] md:h-[600px] rounded-[48px] overflow-hidden border border-white/10 shadow-3xl group"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <Image
                src="/images/products/nanosun-tiles/house-render.png"
                alt="NANOSUN Tiles Daylight House Installation"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-8 rounded-[32px]">
                  <p className="text-2xl font-black text-white uppercase tracking-tighter mb-1">Tile Roof Ready</p>
                  <p className="text-gray-400 text-xs font-medium">Designed to blend into high-profile tiled roofs seamlessly.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Applications Section - Optimized Density */}
      <section className="py-24 relative px-6 lg:px-12 bg-slate-900/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tighter leading-none">Who Is This <span className="brand-gradient-text">For?</span></h2>
            <p className="text-sm md:text-base text-gray-500 max-w-xl mx-auto font-medium">Built for every building with a pitched tile roof that deserves natural daylight.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {applications.map((app, i) => (
              <motion.div
                key={i}
                className="bg-white/[0.02] border border-white/5 p-10 rounded-[40px] hover:border-brand-orange-500/20 transition-all group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-orange-500/10 flex items-center justify-center mb-6 group-hover:bg-brand-orange-500 transition-colors">
                  <app.icon className="h-6 w-6 text-brand-orange-500 group-hover:text-white" />
                </div>
                <h4 className="text-white font-black text-xl uppercase tracking-tighter mb-4">{app.name}</h4>
                <p className="text-gray-500 text-xs font-medium leading-relaxed">{app.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 relative px-6 lg:px-12 bg-slate-950/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tighter leading-none">How It Works on a <span className="brand-gradient-text">Tile Roof</span></h2>
            <p className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto font-medium">Specifically engineered to sit within the profile of your existing roof tiles without disturbing the structure.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {howItWorks.map((step, idx) => (
              <motion.div
                key={idx}
                className="bg-white/[0.02] border border-white/5 p-10 rounded-[40px] hover:border-brand-orange-500/20 transition-all group relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                <div className="absolute top-6 right-6 text-5xl font-black text-white/[0.03] leading-none uppercase">{step.step}</div>
                <div className="bg-brand-orange-500/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-orange-500 transition-all duration-500">
                  <step.icon className="h-6 w-6 text-brand-orange-500 group-hover:text-white" />
                </div>
                <h3 className="text-[9px] font-black text-brand-orange-500 uppercase tracking-widest mb-3 leading-none">Step {step.step} — {step.subtitle}</h3>
                <h4 className="text-xl md:text-2xl font-black text-white uppercase tracking-tighter mb-6 leading-none">{step.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed font-medium">{step.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {[
              "Works with Mangalore & modern Italian tiles",
              "Leak-proof flanged tile integration",
              "Reaches down up to 7–8 metres",
              "Available with 45° and 90° bends",
            ].map((point, i) => (
              <div key={i} className="flex items-start gap-2.5 bg-white/[0.02] border border-white/5 p-5 rounded-2xl">
                <CheckCircle2 className="h-3.5 w-3.5 text-brand-orange-500 mt-0.5 shrink-0" />
                <span className="text-[10px] font-bold text-gray-500 leading-relaxed uppercase tracking-widest">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* System Components Bar */}
      <section className="py-16 bg-slate-950 border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tighter mb-2">What&apos;s Inside <span className="brand-gradient-text text-xl md:text-2xl">(All Units)</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {systemComponents.map((component, i) => (
              <div key={i} className="flex items-center gap-3 bg-white/[0.02] border border-white/5 p-6 rounded-2xl">
                <CheckCircle2 className="h-4 w-4 text-brand-orange-500 shrink-0" />
                <span className="text-[10px] md:text-xs font-bold text-gray-400 leading-tight uppercase tracking-wider">{component}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Size Selector Section - Refined UI */}
      <section className="py-24 relative px-6 lg:px-12 bg-slate-900/20">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start pb-16 border-b border-white/5 mb-16">
            <div>
              <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none mb-6">Choose <br /><span className="brand-gradient-text">Your Size</span></h2>
              <p className="text-sm md:text-base text-gray-500 max-w-md font-medium leading-relaxed">
                Available in 4 sizes optimized for residential and hospitality pitched-roof buildings.
              </p>
            </div>
            <div className="flex flex-wrap gap-2.5 pt-4">
              {sizes.map((size, idx) => (
                <button
                  key={size.id}
                  onClick={() => setActiveSize(idx)}
                  className={`px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${activeSize === idx
                    ? "bg-brand-orange-500 text-white shadow-xl shadow-brand-orange-500/10"
                    : "bg-white/5 text-gray-500 hover:bg-white/10"
                    }`}
                >
                  {size.diameter}
                </button>
              ))}
            </div>
          </div>

          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={sizes[activeSize].id}
                initial={{ opacity: 0, scale: 0.99 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.99 }}
                transition={{ duration: 0.4 }}
                className="grid lg:grid-cols-12 gap-12 items-center"
              >
                <div className="lg:col-span-5 space-y-10">
                  <div className="inline-flex items-center gap-2 bg-brand-orange-500/10 border border-brand-orange-500/20 rounded-full px-4 py-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange-500 animate-pulse" />
                    <span className="text-[9px] font-black text-white uppercase tracking-widest">{sizes[activeSize].diameter}</span>
                  </div>
                  <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tighter leading-tight">Best For: <br /><span className="text-gray-500">{sizes[activeSize].bestFor.split(' — ')[1]}</span></h3>
                  <p className="text-sm md:text-base text-gray-500 leading-relaxed font-medium">{sizes[activeSize].description}</p>

                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-white/5 border border-white/5 px-4 py-3.5 rounded-2xl">
                      <p className="text-[8px] font-black text-gray-600 uppercase tracking-widest mb-1">Lux Level</p>
                      <p className="text-xs font-black text-brand-orange-500">{sizes[activeSize].lux}</p>
                    </div>
                    <div className="bg-white/5 border border-white/5 px-4 py-3.5 rounded-2xl">
                      <p className="text-[8px] font-black text-gray-600 uppercase tracking-widest mb-1">Roof Max</p>
                      <p className="text-xs font-black text-brand-orange-500">{sizes[activeSize].height}</p>
                    </div>
                    <div className="bg-white/5 border border-white/5 px-4 py-3.5 rounded-2xl">
                      <p className="text-[8px] font-black text-gray-600 uppercase tracking-widest mb-1">Coverage</p>
                      <p className="text-xs font-black text-brand-orange-500">{sizes[activeSize].coverage.split(' ')[0]}</p>
                    </div>
                  </div>

                  <Button asChild className="bg-white text-black hover:bg-slate-900 hover:text-white rounded-xl px-12 py-5 text-xs font-black uppercase tracking-widest transition-all">
                    <Link href="/contact">
                      Request Pricing <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>

                <div className="lg:col-span-1 hidden lg:block border-l border-white/5 h-64 mx-auto" />

                <div className="lg:col-span-6 grid grid-cols-1 gap-3">
                  {sizes[activeSize].specs.map((spec, i) => (
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
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Structural Precision Section */}
      <section className="py-24 relative px-6 lg:px-12 bg-slate-950 overflow-hidden">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative h-[450px] md:h-[600px] rounded-[48px] overflow-hidden border border-white/10 group shadow-2xl"
            >
              <Image
                src="/images/products/nanosun-tiles/structural-render.png"
                alt="NANOSUN Tiles Structural Cross Section"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-8 rounded-[32px]">
                  <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-1">Structural Precision</h3>
                  <p className="text-gray-400 text-xs font-medium">Clear optical dome that sits flush with your roof line.</p>
                </div>
              </div>
            </motion.div>

            <div className="space-y-10">
              <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-tight">Seamless <br /><span className="brand-gradient-text">Architecture</span></h2>
              <p className="text-sm md:text-base text-gray-500 font-medium leading-relaxed max-w-xl">
                Our Tiles model respect the bungalow aesthetic. No structural disturbance — just high-performance daylight.
              </p>
              <div className="space-y-6">
                {[
                  { title: "Zero Tile Disturbance", desc: "No cutting of main rafters or structural beams." },
                  { title: "Weather Sealed", desc: "Custom matched bases ensure zero leaks even in heavy monsoon zones." },
                  { title: "Universal Reach", desc: "Available in lengths up to 7 metres to reach any floor level." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="h-5 w-5 rounded-full bg-brand-orange-500/10 flex items-center justify-center shrink-0 mt-0.5">
                      <div className="h-1.5 w-1.5 rounded-full bg-brand-orange-500" />
                    </div>
                    <div>
                      <h4 className="text-white font-black uppercase text-xs mb-1">{item.title}</h4>
                      <p className="text-gray-500 text-xs leading-relaxed font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Bar */}
      <section className="py-20 bg-slate-950 border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tighter mb-2">Key <span className="brand-gradient-text">Benefits</span></h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {keyBenefits.slice(0, 4).map((benefit, i) => (
              <div key={i} className="flex items-center gap-3 bg-white/[0.02] border border-white/5 p-6 rounded-2xl">
                <CheckCircle2 className="h-4 w-4 text-brand-orange-500 shrink-0" />
                <span className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Compact & Optimized */}
      <section className="py-12 relative px-6 lg:px-12 bg-slate-950 border-t border-white/5">
        <div className="container mx-auto">
          <motion.div
            className="bg-brand-gradient py-10 px-6 rounded-[32px] text-center shadow-2xl shadow-brand-orange-500/10 relative overflow-hidden max-w-3xl mx-auto"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.002 }}
          >
            <div className="absolute inset-0 bg-grid-white/[0.03] pointer-events-none opacity-50" />
            <h2 className="text-xl md:text-3xl font-black text-white mb-4 tracking-tighter uppercase relative z-10 leading-none">Have a Tiled Roof?</h2>
            <p className="text-[10px] md:text-xs text-white/80 max-w-lg mx-auto mb-8 leading-relaxed relative z-10 font-bold uppercase tracking-[0.2em]">
              Share your roof type and the rooms you want to brighten — we&apos;ll recommend the exact units you need.
            </p>
            <div className="flex flex-wrap justify-center gap-4 relative z-10">
              <Button asChild className="bg-white text-black hover:bg-slate-900 hover:text-white transition-all duration-300 rounded-xl px-10 py-3.5 text-xs font-black uppercase tracking-widest shadow-2xl">
                <Link href="/contact">
                  Free Assessment <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 rounded-xl px-10 py-3.5 text-xs font-black uppercase tracking-widest">
                <a href="tel:+918792182631" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" /> Call Consultation
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
