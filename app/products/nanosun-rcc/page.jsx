"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Sun, ShieldCheck, Zap, Sparkles, CheckCircle2, Building, Construction, HardHat, Home, School, Hotel, Factory, Baby } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { HoverButton } from "@/components/ui/hover-button"

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
            description: "High-output daylighting for broader areas in concrete buildings. Can replace multiple artificial lights.",
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
            description: "Industrial strength daylighting for massive RCC projects. Designed for maximum light penetration.",
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
            description: "The largest rectangular daylighting system available for concrete roof integration.",
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
                                src="/images/installations/psu-1.png"
                                alt="NANOSUN RCC Real-World Basement Installation"
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

            {/* Design & Integration Section */}
            <section className="py-24 relative px-6 lg:px-12 bg-slate-950 overflow-hidden">
                <div className="container mx-auto">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter leading-none">Specialized <br /><span className="brand-gradient-text">RCC Models</span></h2>
                        <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium">From fixed industrial units to electrically controlled premium systems.</p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white/[0.03] border border-white/5 rounded-[60px] overflow-hidden group shadow-3xl"
                        >
                            <div className="relative h-[400px]">
                                <Image
                                    src="/images/products/nanosun-rcc/tech-1.jpg"
                                    alt="RCC Fixed and Openable Models"
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-10">
                                <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-4">Manual Control Models</h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6">Choose between Fixed RCC models for permanent daylighting or Openable models for combined light and maintenance access.</p>
                                <div className="flex flex-wrap gap-4">
                                    <span className="bg-white/5 border border-white/10 px-4 py-2 rounded-full text-[10px] font-black text-gray-400 uppercase tracking-widest">Fixed</span>
                                    <span className="bg-white/5 border border-white/10 px-4 py-2 rounded-full text-[10px] font-black text-gray-400 uppercase tracking-widest">Openable</span>
                                    <span className="bg-white/5 border border-white/10 px-4 py-2 rounded-full text-[10px] font-black text-gray-400 uppercase tracking-widest">Optional Mesh</span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white/[0.03] border border-white/5 rounded-[60px] overflow-hidden group shadow-3xl"
                        >
                            <div className="relative h-[400px]">
                                <Image
                                    src="/images/products/nanosun-rcc/tech-2.jpg"
                                    alt="RCC Electrical and Remote Models"
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-10">
                                <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-4">Electrical Systems</h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6">Premium motorized systems that allow you to open or close the unit via remote control, perfect for high ceilings or smart buildings.</p>
                                <div className="flex flex-wrap gap-4">
                                    <span className="bg-brand-orange-500/10 border border-brand-orange-500/30 px-4 py-2 rounded-full text-[10px] font-black text-brand-orange-400 uppercase tracking-widest">Smart Remote</span>
                                    <span className="bg-brand-orange-500/10 border border-brand-orange-500/30 px-4 py-2 rounded-full text-[10px] font-black text-brand-orange-400 uppercase tracking-widest">Motorized</span>
                                    <span className="bg-brand-orange-500/10 border border-brand-orange-500/30 px-4 py-2 rounded-full text-[10px] font-black text-brand-orange-400 uppercase tracking-widest">Auto-Seal</span>
                                </div>
                            </div>
                        </motion.div>
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
                            <div className="flex flex-col gap-8">
                                <div className="flex gap-4 p-2 bg-white/5 rounded-2xl w-fit">
                                    <button
                                        onClick={() => { setActiveCategory("circular"); setActiveSize(0); }}
                                        className={`px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${activeCategory === "circular" ? "bg-brand-orange-500 text-white" : "text-gray-500 hover:text-white"}`}
                                    >
                                        Circular
                                    </button>
                                    <button
                                        onClick={() => { setActiveCategory("rectangular"); setActiveSize(0); }}
                                        className={`px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${activeCategory === "rectangular" ? "bg-brand-orange-500 text-white" : "text-gray-500 hover:text-white"}`}
                                    >
                                        Rectangular / Square
                                    </button>
                                </div>
                                <div className="flex flex-wrap gap-4">
                                    {activeSizes.map((size, idx) => (
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
                                            <p className="text-[10px] font-black text-brand-orange-400 uppercase tracking-widest">{activeSizes[activeSize].lux} OUTPUT</p>
                                        </div>
                                        <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">NANOSUN™ RCC {activeSizes[activeSize].diameter}</h3>
                                        <p className="text-brand-orange-500 font-black uppercase text-xs tracking-widest mb-10">BEST FOR: {activeSizes[activeSize].bestFor}</p>
                                        <p className="text-xl text-gray-400 leading-relaxed font-medium">{activeSizes[activeSize].description}</p>
                                    </div>

                                    <div className="grid gap-6">
                                        <div className="flex items-center justify-between py-6 border-b border-white/5">
                                            <p className="text-gray-500 text-xs font-black uppercase tracking-widest">Suitable Roof Height</p>
                                            <p className="text-white font-black">{activeSizes[activeSize].height}</p>
                                        </div>
                                        {activeSizes[activeSize].specs.map((spec, i) => (
                                            <div key={i} className="flex items-center justify-between py-4 border-b border-white/5 last:border-0">
                                                <p className="text-gray-600 text-[10px] font-black uppercase tracking-widest">{spec.label}</p>
                                                <p className="text-gray-300 text-sm font-bold">{spec.value}</p>
                                            </div>
                                        ))}
                                    </div>

                                    <Link href="/contact" className="block pt-10">
                                        <HoverButton className="w-full bg-white text-black hover:bg-brand-orange-500 hover:text-white rounded-2xl py-8 text-sm font-black uppercase tracking-widest transition-all">
                                            Request Quote for {activeSizes[activeSize].diameter} Size <ArrowRight className="ml-3 h-5 w-5" />
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
