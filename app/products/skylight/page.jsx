"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sun, Wind, ShieldCheck, Sparkles, CheckCircle2, Smartphone, Zap, ToggleRight, Hand, Home, Building, Hotel, School, ShoppingBag, Stethoscope, Phone, Circle, Square, RectangleHorizontal } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { HoverButton } from "@/components/ui/hover-button"

export default function SkylightPage() {

    const shapes = [
        {
            name: "Circular Skylight",
            icon: Circle,
            description: "A classic dome skylight — clean, timeless, and fits any flat roof. The most popular shape for residential and commercial buildings. Lets in a beautiful cone of natural light, and opens to allow airflow.",
        },
        {
            name: "Rectangular Skylight",
            icon: RectangleHorizontal,
            description: "A sleek, modern profile — ideal for contemporary homes, offices, and commercial spaces where the architecture demands clean lines. The rectangular format gives a wider light spread across the room below.",
        },
        {
            name: "Square Skylight",
            icon: Square,
            description: "Perfect for symmetrical spaces — conference rooms, lobbies, dining areas. The square shape gives a balanced, even light distribution and looks architecturally intentional.",
        },
    ]

    const openingModes = [
        {
            title: "Manual Opening",
            subtitle: "Hand-Operated",
            description: "A simple hand-operated mechanism. Open and close by hand whenever you want. Perfect for easily accessible skylights.",
            icon: Hand,
        },
        {
            title: "Electric Switch",
            subtitle: "One-Touch Wall Control",
            description: "One-touch wall switch opens or closes the skylight. Great for skylights that are harder to reach — press once and it glides open or shut.",
            icon: ToggleRight,
        },
        {
            title: "Mobile / Remote Control",
            subtitle: "Smart Home Ready",
            description: "Open or close from your phone or remote — even when you're not in the room. Program it to open at a certain time, or close automatically when it senses rain.",
            icon: Smartphone,
        },
    ]

    const comparisonData = [
        { feature: "Natural Daylight", rcc: true, skylight: true },
        { feature: "Fixed / Non-openable", rcc: "Fixed", skylight: "Openable" },
        { feature: "Natural Ventilation", rcc: false, skylight: "When open" },
        { feature: "Opening Options", rcc: "—", skylight: "Manual / Electric / Mobile" },
        { feature: "Shape Options", rcc: "Circular only", skylight: "Circular, Rectangular, Square" },
        { feature: "Best For", rcc: "Pure daylighting", skylight: "Light + Air + Architecture" },
    ]

    const applications = [
        { name: "Premium Homes", icon: Home, desc: "Living rooms, dining areas, master bedrooms — an architectural centrepiece that saves energy." },
        { name: "Corporate Offices", icon: Building, desc: "Reception areas and meeting rooms — natural light and fresh air on demand." },
        { name: "Hotels & Resorts", icon: Hotel, desc: "Lobbies, spa areas, fine dining restaurants — a luxury guest experience." },
        { name: "Schools", icon: School, desc: "Atriums, libraries, corridors — brighten learning spaces naturally." },
        { name: "Commercial Spaces", icon: ShoppingBag, desc: "Showrooms, boutiques, cafes — showcase products in stunning natural light." },
        { name: "Hospitals", icon: Stethoscope, desc: "Patient areas and common spaces where fresh air and light truly matter." },
    ]

    const keyBenefits = [
        "Natural daylight all day — no electricity needed for lighting",
        "Opens for ventilation — fresh air without fans",
        "Three opening modes — manual, electric, or mobile",
        "Three shapes — circular, rectangular, square",
        "UV and heat filtered — only comfortable light enters",
        "Leak-proof when closed — designed for Indian monsoons",
        "Adds architectural character to your space",
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
                                <h2 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">Openable Skylight (NANOSUN)</h2>
                            </div>
                            <h1 className="text-5xl md:text-8xl font-black text-white mb-10 tracking-tighter uppercase leading-[0.9]">
                                NANOSUN™ <br /> <span className="brand-gradient-text">Skylight</span>
                            </h1>
                            <p className="text-xl text-gray-400 mb-8 leading-relaxed max-w-2xl font-medium">
                                Open Up Your Roof to Light, Air, and Sky — <span className="text-white font-bold">All in One.</span>
                            </p>
                            <p className="text-lg text-gray-500 mb-16 leading-relaxed max-w-2xl">
                                Not just a daylighting unit — it&apos;s a full openable skylight window for flat RCC roofs. It lets in natural light all day, and when you want fresh air too, you can open it — manually, by electric switch, or right from your phone. Available in Circular, Rectangular, and Square.
                            </p>
                            <div className="flex flex-wrap gap-6">
                                <HoverButton asChild className="bg-white text-black hover:bg-brand-orange-500 hover:text-white rounded-2xl px-16 py-8 text-sm font-black uppercase tracking-widest shadow-2xl transition-all">
                                    <Link href="/contact">
                                        Book a Consultation <ArrowRight className="ml-3 h-5 w-5" />
                                    </Link>
                                </HoverButton>
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
                                src="/images/products/skylight/hero-render.png"
                                alt="NANOSUN Premium Skylight System"
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                            <div className="absolute bottom-12 left-12 right-12">
                                <div className="bg-white/5 backdrop-blur-3xl border border-white/10 p-10 rounded-[48px]">
                                    <p className="text-3xl font-black text-white uppercase tracking-tighter mb-2">Luxury Integration</p>
                                    <p className="text-gray-400 text-sm font-medium">Architectural brilliance that combines maximum daylight with natural airflow.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* What Makes Skylight Different — Comparison */}
            <section className="py-40 relative px-6 lg:px-12 bg-slate-900/30">
                <div className="container mx-auto">
                    <div className="text-center mb-32">
                        <h2 className="text-4xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter leading-none">What Makes It <span className="brand-gradient-text">Different?</span></h2>
                        <p className="text-xl text-gray-500 max-w-3xl mx-auto font-medium">Most daylighting products are fixed — they bring light in passively. The NANOSUN™ Skylight goes further — it can be <span className="text-white font-bold">opened</span>. Natural light AND natural ventilation from the same unit.</p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white/[0.03] border border-white/5 rounded-[40px] overflow-hidden">
                            {/* Table header */}
                            <div className="grid grid-cols-3 gap-0 border-b border-white/10 p-8">
                                <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Feature</div>
                                <div className="text-center text-[10px] font-black text-gray-500 uppercase tracking-widest">NANOSUN RCC</div>
                                <div className="text-center text-[10px] font-black text-brand-orange-500 uppercase tracking-widest">NANOSUN Skylight</div>
                            </div>
                            {comparisonData.map((row, i) => (
                                <div key={i} className={`grid grid-cols-3 gap-0 p-8 ${i < comparisonData.length - 1 ? "border-b border-white/5" : ""}`}>
                                    <div className="text-sm font-bold text-gray-300">{row.feature}</div>
                                    <div className="text-center text-sm font-bold text-gray-500">
                                        {row.rcc === true ? <CheckCircle2 className="h-5 w-5 text-green-500 mx-auto" /> : row.rcc === false ? <span className="text-gray-600">✗</span> : row.rcc}
                                    </div>
                                    <div className="text-center text-sm font-bold text-white">
                                        {row.skylight === true ? <CheckCircle2 className="h-5 w-5 text-brand-orange-500 mx-auto" /> : row.skylight}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Three Shapes */}
            <section className="py-40 relative px-6 lg:px-12 bg-slate-950/50">
                <div className="container mx-auto">
                    <div className="text-center mb-32">
                        <h2 className="text-4xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter leading-none">Three Shapes — <span className="brand-gradient-text">Infinite Style</span></h2>
                        <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium">Match your architectural style with the perfect skylight shape.</p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-10">
                        {/* Circular */}
                        <motion.div
                            className="bg-white/[0.03] border border-white/5 rounded-[60px] overflow-hidden group shadow-3xl"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="relative h-[300px] border-b border-white/5">
                                <Image
                                    src="/images/products/nanosun-rcc/tech-1.jpg"
                                    alt="Circular Skylight Tech"
                                    fill
                                    className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                                />
                            </div>
                            <div className="p-10">
                                <h4 className="text-2xl font-black text-white uppercase mb-4 tracking-tighter">Circular Skylight</h4>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6">The classic choice. Perfect for distributing light evenly in all directions. Fits standard roof profiles perfectly.</p>
                                <div className="text-[10px] font-black text-brand-orange-500 uppercase tracking-widest">Available up to 1000mm Dia</div>
                            </div>
                        </motion.div>

                        {/* Square */}
                        <motion.div
                            className="bg-white/[0.03] border border-white/5 rounded-[60px] overflow-hidden group shadow-3xl"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            <div className="relative h-[300px] border-b border-white/5">
                                <Image
                                    src="/images/products/skylight/square-tech.jpg"
                                    alt="Square Skylight Tech"
                                    fill
                                    className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                                />
                            </div>
                            <div className="p-10">
                                <h4 className="text-2xl font-black text-white uppercase mb-4 tracking-tighter">Square Skylight</h4>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6">Designed for modern, geometric spaces. Provides a bold architectural statement while flooding the room below with pure sky light.</p>
                                <div className="text-[10px] font-black text-brand-orange-500 uppercase tracking-widest">Available up to 900x900mm</div>
                            </div>
                        </motion.div>

                        {/* Rectangular */}
                        <motion.div
                            className="bg-white/[0.03] border border-white/5 rounded-[60px] overflow-hidden group shadow-3xl"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="relative h-[300px] border-b border-white/5">
                                <Image
                                    src="/images/products/skylight/rect-tech.jpg"
                                    alt="Rectangular Skylight Tech"
                                    fill
                                    className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                                />
                            </div>
                            <div className="p-10">
                                <h4 className="text-2xl font-black text-white uppercase mb-4 tracking-tighter">Rectangular Skylight</h4>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6">Ideal for linear spaces like corridors or open-plan living zones. Offers the widest area of light coverage.</p>
                                <div className="text-[10px] font-black text-brand-orange-500 uppercase tracking-widest">Available up to 1000x3000mm</div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Three Ways to Open */}
            <section className="py-40 relative px-6 lg:px-12 bg-slate-900/30">
                <div className="container mx-auto">
                    <div className="text-center mb-32">
                        <h2 className="text-4xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter leading-none">Three Ways to <span className="brand-gradient-text">Open It</span></h2>
                        <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium">Choose the control method that fits your lifestyle and building type.</p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-10">
                        {openingModes.map((mode, idx) => (
                            <motion.div
                                key={idx}
                                className="bg-white/[0.03] border border-white/5 p-12 rounded-[60px] hover:bg-white/[0.05] transition-all group relative"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                            >
                                <div className="absolute top-8 right-8 text-[80px] font-black text-white/[0.03] leading-none">0{idx + 1}</div>
                                <div className="bg-brand-orange-500/10 w-20 h-20 rounded-3xl flex items-center justify-center mb-10 group-hover:bg-brand-orange-500 group-hover:rotate-6 transition-all duration-500">
                                    <mode.icon className="h-10 w-10 text-brand-orange-500 group-hover:text-white" />
                                </div>
                                <h3 className="text-[10px] font-black text-brand-orange-500 uppercase tracking-widest mb-4 leading-none">{mode.subtitle}</h3>
                                <h4 className="text-3xl font-black text-white uppercase tracking-tighter mb-8 leading-none">{mode.title}</h4>
                                <p className="text-gray-400 text-sm leading-relaxed font-medium">{mode.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Where Is It Used */}
            <section className="py-40 relative px-6 lg:px-12 bg-slate-950/50">
                <div className="container mx-auto">
                    <div className="text-center mb-32">
                        <h2 className="text-4xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter leading-none">Where Is It <span className="brand-gradient-text">Used?</span></h2>
                        <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium">From luxury homes to hospitals — the Skylight fits every space that needs light and air.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
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

            {/* Technical Specifications */}
            <section className="py-24 bg-slate-900/50 border-y border-white/5 relative px-6 lg:px-12">
                <div className="container mx-auto">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter leading-none">Technical <br /><span className="brand-gradient-text">Specifications</span></h2>
                        <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium">Precision engineering for every opening.</p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        <div className="bg-white/5 border border-white/10 p-10 rounded-[40px] space-y-8">
                            <div className="flex items-center gap-4">
                                <Circle className="h-8 w-8 text-brand-orange-500" />
                                <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Circular Domes</h3>
                            </div>
                            <div className="space-y-4">
                                {[
                                    { label: "Diameters", value: "300mm to 1000mm" },
                                    { label: "Light Output", value: "200 – 400 Lux" },
                                    { label: "Material", value: "Optical Polycarbonate" },
                                    { label: "Opening", value: "Up to 45 Degrees" }
                                ].map((spec, i) => (
                                    <div key={i} className="flex justify-between items-center py-4 border-b border-white/5 last:border-0">
                                        <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{spec.label}</span>
                                        <span className="text-sm font-bold text-white">{spec.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white/5 border border-white/10 p-10 rounded-[40px] space-y-8">
                            <div className="flex items-center gap-4">
                                <Square className="h-8 w-8 text-brand-orange-500" />
                                <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Square Domes</h3>
                            </div>
                            <div className="space-y-4">
                                {[
                                    { label: "Standard Size", value: "600x600, 900x900mm" },
                                    { label: "Light Output", value: "300 – 500 Lux" },
                                    { label: "Thickness", value: "2.0mm to 3.0mm" },
                                    { label: "Control", value: "Manual / Electric" }
                                ].map((spec, i) => (
                                    <div key={i} className="flex justify-between items-center py-4 border-b border-white/5 last:border-0">
                                        <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{spec.label}</span>
                                        <span className="text-sm font-bold text-white">{spec.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white/5 border border-white/10 p-10 rounded-[40px] space-y-8">
                            <div className="flex items-center gap-4">
                                <RectangleHorizontal className="h-8 w-8 text-brand-orange-500" />
                                <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Rectangular</h3>
                            </div>
                            <div className="space-y-4">
                                {[
                                    { label: "Max Size", value: "1000 x 3000 mm" },
                                    { label: "Light Output", value: "500 – 800+ Lux" },
                                    { label: "Mechanism", value: "Gas Strut / Electric" },
                                    { label: "Rain Sensor", value: "Optional Smart Add-on" }
                                ].map((spec, i) => (
                                    <div key={i} className="flex justify-between items-center py-4 border-b border-white/5 last:border-0">
                                        <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{spec.label}</span>
                                        <span className="text-sm font-bold text-white">{spec.value}</span>
                                    </div>
                                ))}
                            </div>
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
                        <h2 className="text-4xl md:text-7xl font-black text-white mb-10 tracking-tighter uppercase leading-tight relative z-10">Want Light, Air &amp; a Beautiful Ceiling Feature?</h2>
                        <p className="text-white/90 max-w-3xl mx-auto mb-16 leading-relaxed relative z-10 font-bold uppercase tracking-widest text-sm opacity-90 font-medium">
                            Tell us your roof size, room type, and preferred opening style. We&apos;ll help you pick the right shape and size, and handle the entire installation.
                        </p>
                        <div className="flex flex-wrap justify-center gap-10 relative z-10">
                            <Button asChild size="lg" className="bg-white text-black hover:bg-black hover:text-white transition-all duration-300 rounded-3xl px-20 py-10 text-xl font-black shadow-2xl shadow-white/10 uppercase tracking-widest">
                                <Link href="/contact" className="block">
                                    Book a Consultation <ArrowRight className="ml-4 h-8 w-8" />
                                </Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white hover:text-black transition-all duration-300 rounded-3xl px-20 py-10 text-xl font-black uppercase tracking-widest">
                                <a href="tel:+918792182631">
                                    <Phone className="mr-4 h-8 w-8" /> Call Us
                                </a>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    )
}
