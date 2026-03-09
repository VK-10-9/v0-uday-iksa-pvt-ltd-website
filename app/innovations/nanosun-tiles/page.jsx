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
        <main className="pt-24 bg-slate-950">
            {/* Hero Section */}
            <section className="relative py-40 overflow-hidden px-6 lg:px-12">
                <div className="absolute inset-0 bg-brand-orange-500/5 blur-[120px] rounded-full transform -translate-y-1/2" />
                <div className="container mx-auto relative z-10">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
                            <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-8 py-2.5 mb-10 backdrop-blur-md">
                                <Sun className="h-4 w-4 text-brand-orange-400" />
                                <h2 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">Tile Roof Daylight (NANOSUN)</h2>
                            </div>
                            <h1 className="text-5xl md:text-8xl font-black text-white mb-10 tracking-tighter uppercase leading-[0.9]">
                                NANOSUN™ <br /> <span className="brand-gradient-text">Tiles Daylight</span>
                            </h1>
                            <p className="text-xl text-gray-400 mb-8 leading-relaxed max-w-2xl font-medium">
                                Natural Light for Your Tiled Roof Home — <span className="text-white font-bold">Without Touching a Single Tile.</span>
                            </p>
                            <p className="text-lg text-gray-500 mb-16 leading-relaxed max-w-2xl">
                                Got a traditional Mangalore tile roof or a modern Italian tile bungalow? This model was built exactly for you. Fits seamlessly into your existing roof — no structural changes, no ugly protrusions — and brings pure natural sunlight into the rooms below.
                            </p>
                            <div className="flex flex-wrap gap-6">
                                <Link href="/contact">
                                    <HoverButton className="bg-white text-black hover:bg-brand-orange-500 hover:text-white rounded-2xl px-16 py-8 text-sm font-black uppercase tracking-widest shadow-2xl transition-all">
                                        Get Free Assessment <ArrowRight className="ml-3 h-5 w-5" />
                                    </HoverButton>
                                </Link>
                                <a href="tel:+918792182631" className="px-16 py-8 border-2 border-white/10 hover:border-brand-orange-500/50 text-white transition-all duration-300 rounded-2xl text-[10px] font-black uppercase tracking-widest backdrop-blur-md flex items-center gap-3">
                                    <Phone className="h-4 w-4" /> +91 8792182631
                                </a>
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
                                alt="NANOSUN Tiles Daylight Technology"
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                            <div className="absolute bottom-12 left-12 right-12">
                                <div className="bg-white/5 backdrop-blur-3xl border border-white/10 p-10 rounded-[48px]">
                                    <p className="text-3xl font-black text-white uppercase tracking-tighter mb-2">Tile Roof Ready</p>
                                    <p className="text-gray-400 text-sm font-medium">Designed to blend into your pitched tile roof as if it was always there.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Who Is This For */}
            <section className="py-40 relative px-6 lg:px-12 bg-slate-900/30">
                <div className="container mx-auto">
                    <div className="text-center mb-32">
                        <h2 className="text-4xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter leading-none">Who Is This <span className="brand-gradient-text">For?</span></h2>
                        <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium">Built for every building with a pitched tile roof that deserves natural daylight inside.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {applications.map((app, i) => (
                            <motion.div
                                key={i}
                                className="bg-white/[0.03] border border-white/5 p-12 rounded-[50px] hover:bg-white/[0.05] transition-all group"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <div className="w-16 h-16 rounded-2xl bg-brand-orange-500/10 flex items-center justify-center mb-8 group-hover:bg-brand-orange-500 transition-colors">
                                    <app.icon className="h-8 w-8 text-brand-orange-500 group-hover:text-white" />
                                </div>
                                <h4 className="text-white font-black text-2xl uppercase tracking-tighter mb-4">{app.name}</h4>
                                <p className="text-gray-500 text-sm font-medium leading-relaxed">{app.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works on a Tile Roof */}
            <section className="py-40 relative px-6 lg:px-12 bg-slate-950/50">
                <div className="container mx-auto">
                    <div className="text-center mb-32">
                        <h2 className="text-4xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter leading-none">How It Works on a <span className="brand-gradient-text">Tile Roof</span></h2>
                        <p className="text-xl text-gray-500 max-w-3xl mx-auto font-medium">Three steps — just like all NANOSUN products — but specifically engineered to sit within the profile of your existing roof tiles without disturbing the structure.</p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-10">
                        {howItWorks.map((step, idx) => (
                            <motion.div
                                key={idx}
                                className="bg-white/[0.03] border border-white/5 p-12 rounded-[60px] hover:bg-white/[0.05] transition-all group relative"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                            >
                                <div className="absolute top-8 right-8 text-[80px] font-black text-white/[0.03] leading-none">{step.step}</div>
                                <div className="bg-brand-orange-500/10 w-20 h-20 rounded-3xl flex items-center justify-center mb-10 group-hover:bg-brand-orange-500 group-hover:rotate-6 transition-all duration-500">
                                    <step.icon className="h-10 w-10 text-brand-orange-500 group-hover:text-white" />
                                </div>
                                <h3 className="text-[10px] font-black text-brand-orange-500 uppercase tracking-widest mb-4 leading-none">Step {step.step} — {step.subtitle}</h3>
                                <h4 className="text-3xl font-black text-white uppercase tracking-tighter mb-8 leading-none">{step.title}</h4>
                                <p className="text-gray-400 text-sm leading-relaxed font-medium">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Compatibility highlights */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
                        {[
                            "Works with Mangalore & modern Italian tiles",
                            "Leak-proof flanged tile integration",
                            "Reaches down up to 7–8 metres",
                            "Available with 45° and 90° bends",
                        ].map((point, i) => (
                            <div key={i} className="flex items-start gap-3 bg-white/[0.03] border border-white/5 p-6 rounded-3xl">
                                <CheckCircle2 className="h-5 w-5 text-brand-orange-500 mt-0.5 shrink-0" />
                                <span className="text-xs font-bold text-gray-400 leading-relaxed">{point}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* System Components */}
            <section className="py-20 bg-slate-950 border-y border-white/5">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">What&apos;s Inside <span className="brand-gradient-text">Every Unit</span></h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {systemComponents.map((component, i) => (
                            <div key={i} className="flex items-start gap-4 bg-white/[0.03] border border-white/5 p-8 rounded-3xl">
                                <CheckCircle2 className="h-5 w-5 text-brand-orange-500 mt-0.5 shrink-0" />
                                <span className="text-sm font-bold text-gray-300 leading-relaxed">{component}</span>
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
                                Available in 4 sizes optimized for residential and hospitality pitched-roof buildings.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-4 pt-10">
                            {sizes.map((size, idx) => (
                                <button
                                    key={size.id}
                                    onClick={() => setActiveSize(idx)}
                                    className={`px-8 py-5 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${activeSize === idx
                                        ? "bg-brand-orange-500 text-white shadow-xl shadow-brand-orange-500/20 scale-105"
                                        : "bg-white/5 text-gray-400 hover:bg-white/10"
                                        }`}
                                >
                                    {size.diameter}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-16">
                        <div className="lg:col-span-12">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={sizes[activeSize].id}
                                    initial={{ opacity: 0, scale: 0.98 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="grid lg:grid-cols-2 gap-16"
                                >
                                    <div className="space-y-12">
                                        <div className="inline-flex items-center gap-4 bg-brand-orange-500/10 px-8 py-1.5 rounded-full">
                                            <span className="text-[10px] font-black text-brand-orange-500 uppercase tracking-widest">Active Selector</span>
                                            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange-500 animate-pulse" />
                                            <span className="text-[10px] font-black text-white uppercase tracking-widest">{sizes[activeSize].diameter}</span>
                                        </div>
                                        <h3 className="text-4xl lg:text-5xl font-black text-white uppercase tracking-tighter">Best For: <br /><span className="text-gray-400">{sizes[activeSize].bestFor}</span></h3>
                                        <p className="text-xl text-gray-500 leading-relaxed font-medium">{sizes[activeSize].description}</p>

                                        <div className="grid grid-cols-3 gap-4">
                                            <div className="bg-brand-orange-500/10 border border-brand-orange-500/30 p-6 rounded-[24px]">
                                                <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2">Light Output</p>
                                                <p className="text-lg font-black text-brand-orange-400">{sizes[activeSize].lux}</p>
                                            </div>
                                            <div className="bg-brand-orange-500/10 border border-brand-orange-500/30 p-6 rounded-[24px]">
                                                <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2">Roof Height</p>
                                                <p className="text-lg font-black text-brand-orange-400">{sizes[activeSize].height}</p>
                                            </div>
                                            <div className="bg-brand-orange-500/10 border border-brand-orange-500/30 p-6 rounded-[24px]">
                                                <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2">Coverage</p>
                                                <p className="text-lg font-black text-brand-orange-400">{sizes[activeSize].coverage}</p>
                                            </div>
                                        </div>

                                        <Link href="/contact">
                                            <Button size="lg" className="bg-white text-black hover:bg-brand-orange-500 hover:text-white rounded-2xl px-12 py-8 text-xs font-black uppercase tracking-widest shadow-2xl shadow-white/5 group">
                                                Request Pricing for {sizes[activeSize].diameter} <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
                                            </Button>
                                        </Link>
                                    </div>

                                    <div className="grid grid-cols-1 gap-4">
                                        {sizes[activeSize].specs.map((spec, i) => (
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
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Benefits */}
            <section className="py-20 bg-slate-950 border-y border-white/5">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">Key <span className="brand-gradient-text">Benefits</span></h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {keyBenefits.map((benefit, i) => (
                            <div key={i} className="flex items-start gap-4 bg-white/[0.03] border border-white/5 p-8 rounded-3xl">
                                <CheckCircle2 className="h-5 w-5 text-brand-orange-500 mt-0.5 shrink-0" />
                                <span className="text-sm font-bold text-gray-300 leading-relaxed">{benefit}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
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
                        <h2 className="text-5xl md:text-8xl font-black text-white mb-10 tracking-tighter uppercase leading-tight relative z-10">Have a Tiled Roof?</h2>
                        <p className="text-white/90 max-w-3xl mx-auto mb-16 leading-relaxed relative z-10 font-bold uppercase tracking-widest text-sm opacity-90 font-medium">
                            Share your roof type and the rooms you want to brighten — we&apos;ll recommend the right size and number of units, and give you a clear cost picture.
                        </p>
                        <div className="flex flex-wrap justify-center gap-10 relative z-10">
                            <Link href="/contact" className="block">
                                <Button size="lg" className="bg-white text-black hover:bg-black hover:text-white transition-all duration-300 rounded-3xl px-20 py-10 text-xl font-black shadow-2xl shadow-white/10 uppercase tracking-widest">
                                    Get a Free Assessment <ArrowRight className="ml-4 h-8 w-8" />
                                </Button>
                            </Link>
                            <a href="tel:+918792182631">
                                <Button size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white hover:text-black transition-all duration-300 rounded-3xl px-20 py-10 text-xl font-black uppercase tracking-widest">
                                    <Phone className="mr-4 h-8 w-8" /> Call Us
                                </Button>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    )
}
