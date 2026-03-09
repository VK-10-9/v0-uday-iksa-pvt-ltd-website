"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Sun, ShieldCheck, Zap, Sparkles, CheckCircle2, Building, Construction, HardHat, Home, School, Hotel, Factory, Baby } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { HoverButton } from "@/components/ui/hover-button"

export default function NanosunRccPage() {
    const [activeSize, setActiveSize] = useState(0)

    const sizes = [
        {
            id: "200mm",
            diameter: "200mm",
            bestFor: "Small rooms — bathrooms, corridors, small storage areas, stairwells",
            description: "Compact and easy to install, the 200mm is ideal for tight spaces with low ceilings. Turns a perpetually dark corridor or bathroom into a naturally bright, pleasant space — without any electrical work.",
            lux: "200 – 300 Lux",
            height: "Below 10 Feet",
            specs: [
                { label: "Dome Size", value: "200mm (±5%)" },
                { label: "Dome Material", value: "Optical Polycarbonate" },
                { label: "Reflector Height", value: "380mm (±5%)" },
                { label: "Reflector Diameter", value: "200mm" },
                { label: "Diffuser Size", value: "190mm" },
            ]
        },
        {
            id: "300mm",
            diameter: "300mm",
            bestFor: "Kitchens, utility rooms, small bedrooms, compact offices",
            description: "A versatile everyday size. The 300mm fits neatly into standard room sizes — perfect for kitchens that feel dark, or small offices where you want natural light without installing a large dome on the roof.",
            lux: "200 – 300 Lux",
            height: "Below 12 Feet",
            specs: [
                { label: "Dome Size", value: "300mm (±5%)" },
                { label: "Dome Material", value: "Optical Polycarbonate" },
                { label: "Reflector Height", value: "380mm (±5%)" },
                { label: "Reflector Diameter", value: "300mm" },
                { label: "Diffuser Size", value: "280mm" },
            ]
        },
        {
            id: "400mm",
            diameter: "400mm",
            bestFor: "Living rooms, classrooms, mid-size offices, reception areas",
            description: "The 400mm is the go-to for most residential and commercial rooms. Whether it's a living room that needs natural warmth or a classroom that should feel open and bright — this size covers it comfortably.",
            lux: "200 – 300 Lux",
            height: "Below 15 Feet",
            specs: [
                { label: "Dome Size", value: "400mm (±5%)" },
                { label: "Dome Material", value: "Optical Polycarbonate" },
                { label: "Reflector Height", value: "380mm (±5%)" },
                { label: "Reflector Diameter", value: "400mm" },
                { label: "Diffuser Size", value: "380mm" },
            ]
        },
        {
            id: "530mm",
            diameter: "530mm",
            bestFor: "Large living spaces, open-plan offices, hospital wards, canteens",
            description: "When you need to light a bigger area brightly and evenly, the 530mm steps up. With up to 400 Lux output, it can genuinely replace multiple tube lights in a large room — all day, at zero electricity cost.",
            lux: "250 – 400 Lux",
            height: "Below 20 Feet",
            specs: [
                { label: "Dome Size", value: "530mm (±5%)" },
                { label: "Dome Material", value: "Optical Polycarbonate" },
                { label: "Reflector Height", value: "380mm (±5%)" },
                { label: "Reflector Diameter", value: "530mm" },
                { label: "Diffuser Size", value: "500mm" },
            ]
        },
        {
            id: "750mm",
            diameter: "750mm",
            bestFor: "Large halls, auditoriums, hotel lobbies, warehouses with concrete roofs",
            description: "The 750mm is a high-output unit built for large spaces. Halls, auditoriums, and hotel lobbies that need bright, even light across a wide area — this is the size that delivers without any running cost.",
            lux: "250 – 400 Lux",
            height: "Below 30 Feet",
            specs: [
                { label: "Dome Size", value: "750mm (±5%)" },
                { label: "Dome Material", value: "Optical Polycarbonate" },
                { label: "Reflector Height", value: "380mm (±5%)" },
                { label: "Reflector Diameter", value: "750mm" },
                { label: "Diffuser Size", value: "700mm" },
            ]
        },
        {
            id: "900mm",
            diameter: "900mm",
            bestFor: "Very large commercial spaces, manufacturing floors, institutional buildings",
            description: "When one large unit needs to light a wide floor area in a tall concrete building, the 900mm is the answer. High output, wide coverage, and zero ongoing cost — ideal for large institutional and commercial spaces.",
            lux: "250 – 400 Lux",
            height: "Below 45 Feet",
            specs: [
                { label: "Dome Size", value: "900mm (±5%)" },
                { label: "Dome Material", value: "Optical Polycarbonate" },
                { label: "Reflector Height", value: "380mm (±5%)" },
                { label: "Reflector Diameter", value: "900mm" },
                { label: "Diffuser Size", value: "860mm" },
            ]
        },
        {
            id: "1200mm",
            diameter: "1200mm",
            bestFor: "The largest concrete-roof spaces — airports, railways, massive halls",
            description: "Our largest RCC unit. When the space is enormous and the roof is high, the 1200mm delivers powerful, wide-spread natural light across the entire floor. Perfect for public buildings and large commercial complexes.",
            lux: "250 – 400 Lux",
            height: "Below 45 Feet",
            specs: [
                { label: "Dome Size", value: "1200mm (±5%)" },
                { label: "Dome Material", value: "Optical Polycarbonate" },
                { label: "Reflector Height", value: "380mm (±5%)" },
                { label: "Reflector Diameter", value: "1200mm" },
                { label: "Diffuser Size", value: "1150mm" },
            ]
        }
    ]

    return (
        <main className="pt-24 bg-slate-950">
            {/* Hero Section */}
            <section className="relative py-40 overflow-hidden px-6 lg:px-12">
                <div className="absolute inset-0 bg-brand-orange-500/5 blur-[120px] rounded-full transform translate-y-1/2" />
                <div className="container mx-auto relative z-10">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
                            <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-8 py-2.5 mb-10 backdrop-blur-md">
                                <Building className="h-4 w-4 text-brand-orange-500" />
                                <h2 className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none">Concrete Solutions (NANOSUN RCC)</h2>
                            </div>
                            <h1 className="text-5xl md:text-8xl font-black text-white mb-10 tracking-tighter uppercase leading-[0.9]">
                                Natural Sunlight <br /> <span className="brand-gradient-text">Built Into Your Roof</span>
                            </h1>
                            <p className="text-xl text-gray-400 mb-16 leading-relaxed max-w-2xl font-medium">
                                Live in an apartment? Own an office? If your building has a flat concrete (RCC) roof, this was made for you. It fits cleanly into your slab — no ugly add-ons, no leaks, no electricity.
                            </p>
                            <div className="flex flex-wrap gap-6">
                                <Link href="/contact">
                                    <HoverButton className="bg-white text-black hover:bg-brand-orange-500 hover:text-white rounded-2xl px-16 py-8 text-sm font-black uppercase tracking-widest shadow-2xl transition-all">
                                        Book Free Site Assessment <ArrowRight className="ml-3 h-5 w-5" />
                                    </HoverButton>
                                </Link>
                                <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-8 py-4 backdrop-blur-md">
                                    <Sparkles className="h-5 w-5 text-brand-orange-500" />
                                    <span className="text-[10px] font-black text-white uppercase tracking-widest">Patented Tech</span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="relative h-[650px] rounded-[80px] overflow-hidden border border-white/10 shadow-3xl group"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <Image
                                src="/images/nanosun-rcc.png"
                                alt="NANOSUN RCC Installation"
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                            <div className="absolute bottom-12 left-12 right-12">
                                <div className="bg-white/5 backdrop-blur-3xl border border-white/10 p-10 rounded-[48px]">
                                    <p className="text-3xl font-black text-white uppercase tracking-tighter mb-2">Flush Integration</p>
                                    <p className="text-gray-400 text-sm font-medium">Clean, compact, and structurally bonded for concrete architecture.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Comparison Section */}
            <section className="py-40 relative px-6 lg:px-12 bg-slate-900/30">
                <div className="container mx-auto">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-24">
                            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter leading-none">Built for <span className="brand-gradient-text">Concrete</span></h2>
                            <p className="text-xl text-gray-500 font-medium italic">"How is this different from the metal roof version?"</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-10">
                            <div className="bg-white/[0.02] border border-white/5 p-12 rounded-[50px] relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-25 transition-opacity">
                                    <Construction className="h-24 w-24 text-white" />
                                </div>
                                <h3 className="text-brand-orange-500 font-black uppercase text-xs tracking-widest mb-4">NANOSUN PEB</h3>
                                <p className="text-white text-3xl font-black mb-10 tracking-tighter uppercase">Factories & <br />Warehouses</p>
                                <div className="space-y-4">
                                    <p className="text-gray-500 text-xs font-black uppercase tracking-widest pb-4 border-b border-white/5">Metal / PEB Roof Type</p>
                                    <p className="text-gray-500 text-xs font-black uppercase tracking-widest pb-4 border-b border-white/5">600mm Reflector Height</p>
                                    <p className="text-gray-500 text-xs font-black uppercase tracking-widest">100–350 Lux Output</p>
                                </div>
                            </div>

                            <div className="bg-brand-orange-500/10 border-2 border-brand-orange-500/30 p-12 rounded-[50px] relative overflow-hidden group shadow-2xl shadow-brand-orange-500/10">
                                <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
                                    <Building className="h-24 w-24 text-brand-orange-500" />
                                </div>
                                <h3 className="text-brand-orange-500 font-black uppercase text-xs tracking-widest mb-4">NANOSUN RCC</h3>
                                <p className="text-white text-3xl font-black mb-10 tracking-tighter uppercase">Homes, Offices <br />& Hospitals</p>
                                <div className="space-y-4">
                                    <p className="text-gray-300 text-xs font-black uppercase tracking-widest pb-4 border-b border-white/10 font-bold">Flat Concrete Slug Type</p>
                                    <p className="text-gray-300 text-xs font-black uppercase tracking-widest pb-4 border-b border-white/10 font-bold">380mm (Compact) Height</p>
                                    <p className="text-gray-300 text-xs font-black uppercase tracking-widest font-bold">200–400 (Higher) Lux Output</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The RCC Anatomy */}
            <section className="py-40 relative px-6 lg:px-12 bg-slate-950 overflow-hidden">
                <div className="container mx-auto">
                    <div className="text-center mb-32">
                        <h2 className="text-4xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter leading-none">What's <span className="brand-gradient-text">Inside</span></h2>
                        <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium">Three precision-engineered parts working in harmony within your slab.</p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-12">
                        {[
                            {
                                title: "Optical Collector",
                                subtitle: "The Sky Lens",
                                desc: "A semi-spherical dome that captures sunlight from every angle—even on cloudy days. Made from high-grade unbreakable polycarbonate.",
                                icon: Sun
                            },
                            {
                                title: "Optical Reflector",
                                subtitle: "The 380mm Mirror",
                                desc: "A compact pipe that moves light through the slab with 95%+ efficiency. Shorter than the PEB version for cleaner integration.",
                                icon: Zap
                            },
                            {
                                title: "Optical Diffuser",
                                subtitle: "The Glow Panel",
                                desc: "A diamond-embossed panel at the ceiling that spreads soft, glare-free light evenly across the entire room.",
                                icon: Sparkles
                            }
                        ].map((part, i) => (
                            <motion.div
                                key={i}
                                className="bg-white/[0.03] border border-white/5 p-12 rounded-[60px] relative group overflow-hidden"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <div className="bg-brand-orange-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-10 group-hover:rotate-12 transition-transform shadow-xl shadow-brand-orange-500/20">
                                    <part.icon className="h-8 w-8 text-white" />
                                </div>
                                <h3 className="text-brand-orange-500 font-bold uppercase text-[10px] tracking-[0.2em] mb-4">{part.subtitle}</h3>
                                <h4 className="text-3xl font-black text-white uppercase tracking-tighter mb-8">{part.title}</h4>
                                <p className="text-gray-400 text-sm leading-relaxed font-medium">{part.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Where is it used? Icons section */}
            <section className="py-40 relative px-6 lg:px-12 bg-slate-900/20">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-24 uppercase tracking-tighter leading-none">Perfect For <span className="brand-gradient-text">Every Building</span></h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
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
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <div className="w-20 h-20 mx-auto rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-brand-orange-500 group-hover:border-brand-orange-500 transition-all duration-500 shadow-2xl">
                                    <item.icon className="h-8 w-8 text-gray-400 group-hover:text-white group-hover:scale-110 transition-all" />
                                </div>
                                <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest group-hover:text-white transition-colors">{item.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Choose Your Size Section */}
            <section id="sizes" className="py-40 relative px-6 lg:px-12 bg-slate-950">
                <div className="container mx-auto">
                    <div className="grid lg:grid-cols-2 gap-24 items-start">
                        <div className="sticky top-40">
                            <h2 className="text-5xl md:text-7xl font-black text-white mb-10 uppercase tracking-tighter leading-tight">Choose Your <br /><span className="brand-gradient-text">RCC Size</span></h2>
                            <p className="text-xl text-gray-400 mb-16 font-medium leading-relaxed max-w-xl">
                                We manufacture 7 different sizes to fit every room—from small bathrooms to massive airport terminals.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                {sizes.map((size, idx) => (
                                    <button
                                        key={size.id}
                                        onClick={() => setActiveSize(idx)}
                                        className={`px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs transition-all duration-500 ${activeSize === idx
                                                ? "bg-brand-orange-500 text-white shadow-2xl shadow-brand-orange-500/20 scale-110"
                                                : "bg-white/5 text-gray-500 hover:bg-white/10 border border-white/10"
                                            }`}
                                    >
                                        {size.diameter}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-[60px] p-12 lg:p-20 relative overflow-hidden min-h-[700px]">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeSize}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.5 }}
                                    className="space-y-12"
                                >
                                    <div>
                                        <div className="inline-flex items-center gap-2 bg-brand-orange-500/10 border border-brand-orange-500/20 rounded-full px-6 py-2 mb-8">
                                            <p className="text-[10px] font-black text-brand-orange-400 uppercase tracking-widest">{sizes[activeSize].lux} OUTPUT</p>
                                        </div>
                                        <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">NANOSUN™ RCC {sizes[activeSize].diameter}</h3>
                                        <p className="text-brand-orange-500 font-black uppercase text-xs tracking-widest mb-10">BEST FOR: {sizes[activeSize].bestFor}</p>
                                        <p className="text-xl text-gray-400 leading-relaxed font-medium">{sizes[activeSize].description}</p>
                                    </div>

                                    <div className="grid gap-6">
                                        <div className="flex items-center justify-between py-6 border-b border-white/5">
                                            <p className="text-gray-500 text-xs font-black uppercase tracking-widest">Suitable Roof Height</p>
                                            <p className="text-white font-black">{sizes[activeSize].height}</p>
                                        </div>
                                        {sizes[activeSize].specs.map((spec, i) => (
                                            <div key={i} className="flex items-center justify-between py-4 border-b border-white/5 last:border-0">
                                                <p className="text-gray-600 text-[10px] font-black uppercase tracking-widest">{spec.label}</p>
                                                <p className="text-gray-300 text-sm font-bold">{spec.value}</p>
                                            </div>
                                        ))}
                                    </div>

                                    <Link href="/contact" className="block pt-10">
                                        <HoverButton className="w-full bg-white text-black hover:bg-brand-orange-500 hover:text-white rounded-2xl py-8 text-sm font-black uppercase tracking-widest transition-all">
                                            Request Quote for {sizes[activeSize].diameter} Size <ArrowRight className="ml-3 h-5 w-5" />
                                        </HoverButton>
                                    </Link>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </section>

            {/* Common Specs Table Section */}
            <section className="py-40 relative px-6 lg:px-12 bg-slate-900/30">
                <div className="container mx-auto max-w-4xl">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter leading-none">Standard <span className="brand-gradient-text">Quality</span></h2>
                        <p className="text-gray-500 font-black uppercase tracking-widest text-[10px]">What all RCC units share in common</p>
                    </div>

                    <div className="bg-white/5 rounded-[60px] overflow-hidden border border-white/10 shadow-3xl">
                        <div className="p-12 lg:p-16">
                            {[
                                { label: "Dome Material", value: "Optical Grade Polycarbonate" },
                                { label: "UV Protection", value: "Blocks 99% (Below 385nm)" },
                                { label: "Reflectance", value: "95% Efficiency inside Mirror Pipe" },
                                { label: "Flame Rating", value: "Flame Retardant (FR-Rated)" },
                                { label: "Leak Protection", value: "Pre-moulded flanged dome, zero joints" },
                                { label: "Maintenance", value: "Zero — No bulbs, no moving parts" },
                            ].map((spec, i) => (
                                <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between py-8 border-b border-white/5 last:border-0 gap-4">
                                    <p className="text-gray-500 font-black uppercase tracking-widest text-xs">{spec.label}</p>
                                    <p className="text-white font-bold text-lg tracking-tight">{spec.value}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Installation / Final CTA */}
            <section className="py-40 relative px-6 lg:px-12 bg-slate-950">
                <div className="container mx-auto">
                    <motion.div
                        className="bg-brand-gradient p-24 lg:p-40 rounded-[100px] shadow-2xl shadow-brand-orange-500/20 relative overflow-hidden text-center"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className="absolute inset-0 bg-grid-white/[0.05] pointer-events-none" />
                        <HardHat className="h-20 w-20 text-white/30 mx-auto mb-10 animate-pulse" />
                        <h2 className="text-5xl md:text-9xl font-black text-white mb-10 tracking-tighter uppercase leading-none relative z-10">Start Your Energy Revolution</h2>
                        <p className="text-xl text-white/90 max-w-3xl mx-auto mb-16 leading-relaxed relative z-10 font-bold uppercase tracking-widest text-sm opacity-90 font-medium">
                            The best time to install is during slab casting. Our team handles every step—from site assessment to final leak-proof testing.
                        </p>
                        <Link href="/contact" className="block relative z-10">
                            <Button size="lg" className="bg-white text-black hover:bg-black hover:text-white transition-all duration-300 rounded-3xl px-20 py-10 text-xl font-black shadow-2xl uppercase tracking-widest">
                                Request Free Site Assessment <ArrowRight className="ml-4 h-8 w-8" />
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </main>
    )
}
