"use client"

import { motion } from "framer-motion"
import { ArrowRight, Flame, ShieldCheck, Zap, Sparkles, CheckCircle2, ShieldAlert, Wind, Construction, AlertTriangle, Building, Hotel, Factory } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { HoverButton } from "@/components/ui/hover-button"

export default function FireSafetyPage() {
    const coreFeatures = [
        {
            title: "Automatic Smoke Release",
            subtitle: "Life-Saving Venting",
            description: "Smoke is the biggest threat in a fire. Our vents open instantly to release toxic smoke and heat, keeping your building clear for safe evacuation.",
            icon: Flame,
            points: ["Triggers on Heat/Smoke", "160° Rapid Opening", "Life-Safety Critical"]
        },
        {
            title: "Fail-Safe Operation",
            subtitle: "Works Without Power",
            description: "Fitted with redundant actuators that ensure the vents open even if your building loses all electricity during an emergency. Never fails when it matters.",
            icon: Zap,
            points: ["Independent Redundancy", "Manual Over-ride", "Heavy-Duty Build"]
        },
        {
            title: "Global Certification",
            subtitle: "Highest Standards",
            description: "Certified to EN-12101 standards, the gold standard for smoke exhaust. Trusted by top hotels, hospitals, and industrial giants for decades.",
            icon: ShieldCheck,
            points: ["European Standard Certified", "High-Reliability Testing", "Insurance Friendly"]
        }
    ]

    const technicalSpecs = [
        { label: "Opening Angle", value: "Up to 160 Degrees" },
        { label: "Deployment", value: "Rapid Response (< 60s)" },
        { label: "Standard", value: "EN 12101-2 Certified" },
        { label: "Operation", value: "Fail-Safe Redundancy" },
        { label: "Weather Proof", value: "IP-Rated Sealing" },
        { label: "Dual Purpose", value: "Works for daily ventilation" },
        { label: "Reliability", value: "50,000+ Cycles Tested" },
        { label: "Warranty", value: "Full System Support" },
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
                                <ShieldAlert className="h-4 w-4 text-brand-orange-500" />
                                <h2 className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none">Safety & Compliance (SHE)</h2>
                            </div>
                            <h1 className="text-5xl md:text-8xl font-black text-white mb-10 tracking-tighter uppercase leading-[0.9]">
                                Automatic <br /> <span className="brand-gradient-text">Fire Vents</span>
                            </h1>
                            <p className="text-xl text-gray-400 mb-16 leading-relaxed max-w-2xl font-medium">
                                Protect your property and the lives inside with our automated Smoke and Heat Exhaust (SHE) systems. <span className="text-white font-bold">160° opening vents</span> that clear toxic gases instantly when every second counts.
                            </p>
                            <div className="flex flex-wrap gap-6">
                                <Link href="/contact">
                                    <HoverButton className="bg-white text-black hover:bg-brand-orange-500 hover:text-white rounded-2xl px-16 py-8 text-sm font-black uppercase tracking-widest shadow-2xl transition-all">
                                        Request Safety Audit <ArrowRight className="ml-3 h-5 w-5" />
                                    </HoverButton>
                                </Link>
                                <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-8 py-4 backdrop-blur-md">
                                    <ShieldCheck className="h-5 w-5 text-brand-orange-500" />
                                    <span className="text-[10px] font-black text-white uppercase tracking-widest">EN-Certified Safety</span>
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
                                src="/images/she-structural.png"
                                alt="Automatic Fire Vent"
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                            <div className="absolute bottom-12 left-12 right-12">
                                <div className="bg-white/5 backdrop-blur-3xl border border-white/10 p-10 rounded-[48px]">
                                    <p className="text-3xl font-black text-white uppercase tracking-tighter mb-2">Life Support</p>
                                    <p className="text-gray-400 text-sm font-medium">Automated emergency extraction systems for high-value properties and complexes.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Application Grid */}
            <section className="py-40 relative px-6 lg:px-12 bg-slate-900/10">
                <div className="container mx-auto">
                    <div className="text-center mb-32">
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter leading-none">Safety in <span className="brand-gradient-text">Every Building</span></h2>
                        <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium">Protecting the most critical assets across industrial and commercial property.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 text-center">
                        {[
                            { label: "Commercial Malls", icon: Building, desc: "Safe evacuation paths for thousands of visitors with instant smoke extraction." },
                            { label: "Luxury Hotels", icon: Hotel, desc: "Invisible safety systems that open silently when heat is detected." },
                            { label: "High-Tech Factories", icon: Factory, desc: "Protecting multibillion-rupee equipment and employee lives." },
                        ].map((app, i) => (
                            <motion.div
                                key={i}
                                className="space-y-6 group"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <div className="w-20 h-20 mx-auto rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-brand-red-500 transition-colors duration-500 shadow-xl group-hover:shadow-brand-red-500/20">
                                    <app.icon className="h-10 w-10 text-brand-red-500 group-hover:text-white transition-all" />
                                </div>
                                <h4 className="text-white font-black text-2xl uppercase tracking-tighter">{app.label}</h4>
                                <p className="text-gray-500 text-sm font-medium leading-relaxed">{app.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-40 relative px-6 lg:px-12 bg-slate-950/50">
                <div className="container mx-auto">
                    <div className="text-center mb-32">
                        <h2 className="text-4xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter leading-none">Emergency <span className="brand-gradient-text">Psychology</span></h2>
                        <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium">When smoke fills a room, visibility and air are the only things that save lives.</p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-10">
                        {coreFeatures.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                className="bg-white/[0.03] border border-white/5 p-12 rounded-[60px] hover:bg-white/[0.05] transition-all group"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                            >
                                <div className="bg-brand-red-500/10 w-20 h-20 rounded-3xl flex items-center justify-center mb-10 group-hover:bg-brand-red-500 group-hover:rotate-6 transition-all duration-500 shadow-xl">
                                    <feature.icon className="h-10 w-10 text-brand-red-500 group-hover:text-white" />
                                </div>
                                <h3 className="text-[10px] font-black text-brand-red-500 uppercase tracking-widest mb-4 leading-none">{feature.subtitle}</h3>
                                <h4 className="text-3xl font-black text-white uppercase tracking-tighter mb-8 leading-none">{feature.title}</h4>
                                <p className="text-gray-400 mb-10 text-sm leading-relaxed font-medium">{feature.description}</p>
                                <div className="space-y-4 pt-10 border-t border-white/5">
                                    {feature.points.map((point, i) => (
                                        <div key={i} className="flex items-center gap-3 text-xs font-black text-gray-500 uppercase tracking-widest">
                                            <CheckCircle2 className="h-4 w-4 text-brand-red-500" />
                                            {point}
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-40 relative px-6 lg:px-12 bg-slate-950">
                <div className="container mx-auto text-center">
                    <motion.div
                        className="bg-brand-red-500/50 p-24 lg:p-40 rounded-[100px] shadow-2xl shadow-brand-red-500/20 relative overflow-hidden"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className="absolute inset-0 bg-grid-white/[0.05] pointer-events-none" />
                        <AlertTriangle className="h-20 w-20 text-white/30 mx-auto mb-10 animate-pulse" />
                        <h2 className="text-5xl md:text-9xl font-black text-white mb-10 tracking-tighter uppercase leading-none relative z-10">Safety First</h2>
                        <p className="text-xl text-white/90 max-w-3xl mx-auto mb-16 leading-relaxed relative z-10 font-bold uppercase tracking-widest text-sm opacity-90 font-medium">
                            Verify your property's safety compliance before it's too late. <br />Our compliance experts are ready to audit your building.
                        </p>
                        <div className="flex flex-wrap justify-center gap-10 relative z-10">
                            <Link href="/contact" className="block w-full sm:w-auto">
                                <Button size="lg" className="w-full sm:w-auto bg-white text-black hover:bg-black hover:text-white transition-all duration-300 rounded-3xl px-20 py-10 text-xl font-black shadow-2xl shadow-white/10 uppercase tracking-widest">
                                    Start Compliance Audit <ArrowRight className="ml-4 h-8 w-8" />
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    )
}
