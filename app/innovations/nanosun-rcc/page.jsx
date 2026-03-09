"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sun, Zap, ShieldCheck, Building, Sparkles, Hammer, HardHat, Construction } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function NanosunRccPage() {
    const features = [
        {
            title: "Monolithic Integrity",
            description: "Cast-in-situ structural adaptors ensure a water-tight, vibration-resistant bond with RCC roof slabs.",
            icon: Construction,
        },
        {
            title: "Load-Bearing Optic",
            description:
                "High-density base units designed to support maintenance foot-traffic and heavy monsoon drainage loads.",
            icon: ShieldCheck,
        },
        {
            title: "Thermal-Break Tech",
            description: "Advanced insulation between concrete and frame prevents thermal bridging, maintaining indoor AC efficiency.",
            icon: Zap,
        },
        {
            title: "Retrofit Ready",
            description: "Core-cut compatible mounting systems for existing concrete facilities, executed with surgical precision.",
            icon: Hammer,
        },
    ]

    const applications = [
        {
            name: "Pharma Research Hubs",
            image: "/images/nanosun-app-1.jpg",
            description: "Sterile, daylight-rich environments for high-precision laboratory and manufacturing zones.",
        },
        {
            name: "Automotive Foundries",
            image: "/images/nanosun-app-2.jpg",
            description: "Heavy-duty daylighting for vibration-heavy environments with thick RCC structural roofs.",
        },
        {
            name: "Multi-Storey Logistics",
            image: "/images/nanosun-app-3.jpg",
            description: "Maximizing vertical light penetration in multi-level concrete distribution centers.",
        },
    ]

    return (
        <main className="pt-24 bg-slate-950">
            {/* Nanosun RCC Hero */}
            <section className="relative py-40 overflow-hidden px-6 lg:px-12">
                <div className="absolute inset-0 bg-brand-orange-500/5 blur-[120px] rounded-full transform translate-y-1/2" />
                <div className="container mx-auto relative z-10">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
                            <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-8 py-2.5 mb-10 backdrop-blur-md">
                                <Building className="h-4 w-4 text-brand-orange-500" />
                                <h2 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">Structural Division</h2>
                            </div>
                            <h1 className="text-6xl md:text-9xl font-black text-white mb-10 tracking-tighter uppercase leading-none">
                                NANOSUN <br /> <span className="brand-gradient-text">RCC S-SERIES</span>
                            </h1>
                            <p className="text-xl text-gray-400 mb-16 leading-relaxed max-w-2xl font-medium">
                                Daylighting for Reinforced Cement Concrete (RCC) structures. Engineered to integrate seamlessly with heavy-duty structural slabs without compromising waterproofing or load integrity.
                            </p>
                            <div className="flex flex-wrap gap-6">
                                <Link href="/contact" className="block w-full sm:w-auto">
                                    <Button size="lg" className="w-full sm:w-auto bg-white text-black hover:bg-brand-orange-500 hover:text-white rounded-2xl px-16 py-8 text-sm font-black uppercase tracking-[0.2em] shadow-2xl shadow-white/5 active:scale-95 group">
                                        Structural Consult <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                                    </Button>
                                </Link>
                                <button className="w-full sm:w-auto px-16 py-8 border-2 border-white/10 hover:border-brand-orange-500/50 text-white transition-all duration-300 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] backdrop-blur-md active:scale-95">
                                    Slab Integration Data
                                </button>
                            </div>
                        </motion.div>

                        <motion.div
                            className="relative h-[650px] rounded-[80px] overflow-hidden border border-white/10 shadow-2xl group"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <Image
                                src="/images/nanosun-rcc-hero.jpg"
                                alt="NANOSUN RCC Technology"
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-slate-950 to-transparent p-12 flex items-end">
                                <div className="bg-slate-900/60 backdrop-blur-2xl border border-white/10 p-10 rounded-[48px] w-full">
                                    <Construction className="h-8 w-8 text-brand-orange-400 mb-6" />
                                    <p className="text-xl font-black text-white uppercase tracking-tighter mb-2">Concrete Compatible</p>
                                    <p className="text-gray-400 text-sm font-medium">Proprietary structural curbs designed for life-long slab harmony.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Structural Engineering */}
            <section className="py-40 relative px-6 lg:px-12 bg-slate-950/50">
                <div className="container mx-auto">
                    <div className="max-w-4xl mb-32">
                        <h2 className="text-4xl md:text-7xl font-black text-white mb-10 uppercase tracking-tighter leading-none">Structural Harmony</h2>
                        <p className="text-xl text-gray-400 leading-relaxed font-medium">
                            Unlike metal-roof systems, RCC daylighting requires specialized thermal and water-proofing interfaces. NANOSUN RCC features a unique multi-layer curb system that prevents leakage and condensation while maintaining the thermal envelope of the concrete structure.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                className="bg-white/[0.02] backdrop-blur-md p-10 rounded-[48px] border border-white/5 group hover:bg-white/[0.05] hover:border-white/10 transition-all duration-500"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="bg-brand-orange-500/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                                    <feature.icon className="h-8 w-8 text-brand-orange-500" />
                                </div>
                                <h3 className="text-lg font-black text-white mb-4 uppercase tracking-widest">{feature.title}</h3>
                                <p className="text-gray-500 text-sm font-medium leading-relaxed group-hover:text-gray-400 transition-colors">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industrial Scale */}
            <section className="py-40 relative px-6 lg:px-12 bg-slate-950">
                <div className="container mx-auto">
                    <div className="text-center mb-32">
                        <h2 className="text-5xl md:text-8xl font-black mb-10 text-white uppercase tracking-tighter leading-none">Built for <span className="brand-gradient-text">Mass</span></h2>
                        <p className="text-[10px] font-black text-gray-600 uppercase tracking-[0.5em]">Heavy Structural Deployments</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-10">
                        {applications.map((application, index) => (
                            <motion.div
                                key={index}
                                className="relative h-[600px] rounded-[60px] overflow-hidden group border border-white/5 shadow-2xl"
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Image
                                    src={application.image || "/placeholder.svg"}
                                    alt={application.name}
                                    fill
                                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
                                <div className="relative z-10 h-full flex flex-col justify-end p-12">
                                    <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-4">{application.name}</h3>
                                    <p className="text-gray-400 text-sm font-medium leading-relaxed mb-8 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">{application.description}</p>
                                    <div className="h-1.5 w-16 bg-brand-orange-500 rounded-full shadow-lg shadow-brand-orange-500/50" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Engineering CTA */}
            <section className="py-40 relative px-6 lg:px-12 bg-slate-950 border-t border-white/5">
                <div className="container mx-auto">
                    <motion.div
                        className="bg-brand-gradient p-24 lg:p-40 rounded-[100px] text-center shadow-2xl shadow-brand-orange-500/20 relative overflow-hidden"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className="absolute inset-0 bg-grid-white/[0.05] pointer-events-none" />
                        <HardHat className="h-20 w-20 text-white/30 mx-auto mb-10 animate-pulse" />
                        <h2 className="text-5xl md:text-9xl font-black text-white mb-10 tracking-tighter uppercase leading-none relative z-10">Heavy Structural Light</h2>
                        <p className="text-xl text-white/90 max-w-3xl mx-auto mb-16 leading-relaxed relative z-10 font-black uppercase tracking-[0.4em] text-xs opacity-90">
                            Concrete Integrity • Water-Tight Seal • Industrial Grade
                        </p>
                        <div className="flex flex-wrap justify-center gap-10 relative z-10">
                            <Link href="/contact" className="block w-full sm:w-auto">
                                <Button size="lg" className="w-full sm:w-auto bg-white text-black hover:bg-black hover:text-white transition-all duration-300 rounded-3xl px-20 py-10 text-xl font-black shadow-2xl shadow-white/10 uppercase tracking-[0.3em]">
                                    Get Structural Audit <ArrowRight className="ml-4 h-8 w-8" />
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    )
}
