"use client"

import { motion } from "framer-motion"
import { ArrowRight, Wind, ShieldCheck, Zap, Waves, CheckCircle2, Ruler, Maximize, Settings, Phone, Info } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { HoverButton } from "@/components/ui/hover-button"

export default function SuspensorSystemPage() {
    return (
        <main className="pt-24 bg-slate-950 text-white min-h-screen">
            {/* Split Hero Section */}
            <section className="relative flex flex-col lg:flex-row items-center border-b border-white/5">
                <div className="w-full lg:w-1/2 p-12 lg:p-24 space-y-12">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="inline-flex items-center gap-3 bg-brand-orange-500/10 border border-brand-orange-500/30 rounded-full px-6 py-2 mb-8">
                            <Settings className="h-4 w-4 text-brand-orange-500" />
                            <span className="text-[10px] font-black text-brand-orange-400 uppercase tracking-widest">Advanced Mounting Technology</span>
                        </div>
                        <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-8">
                            Suspensor <br /><span className="brand-gradient-text">System</span>
                        </h1>
                        <p className="text-xl text-gray-400 font-medium leading-relaxed max-w-xl">
                            The definitive solution for large-diameter ventilation. When traditional mounting fails, our Suspensor System provides <span className="text-white">mechanical stability for units up to 36 inches.</span>
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 gap-8 py-10 border-t border-white/10">
                        <div>
                            <p className="text-brand-orange-500 font-black text-4xl mb-2">36"</p>
                            <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">Max Throat Dia</p>
                        </div>
                        <div>
                            <p className="text-white font-black text-4xl mb-2">0%</p>
                            <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">Vibration Drift</p>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-6 pt-8">
                        <Link href="/contact">
                            <HoverButton className="bg-white text-black rounded-2xl px-16 py-8 text-sm font-black uppercase tracking-widest group">
                                Technical Quote <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                            </HoverButton>
                        </Link>
                    </div>
                </div>

                <div className="w-full lg:w-1/2 h-[600px] lg:h-screen relative bg-slate-900 overflow-hidden">
                    <Image
                        src="/images/products/nanovent/suspensor-hero.png"
                        alt="Suspensor Mounting System"
                        fill
                        className="object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-transparent to-transparent hidden lg:block" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent lg:hidden" />
                </div>
            </section>

            {/* Technical Layout - Schematic Style */}
            <section className="py-32 px-6 lg:px-12 bg-white text-slate-950">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row gap-24 items-start">
                        <div className="lg:w-1/3">
                            <h2 className="text-4xl font-black uppercase tracking-tighter mb-8 leading-none">Why the <br />Suspensor?</h2>
                            <p className="text-lg text-slate-500 font-medium leading-relaxed mb-12">
                                Large industrial sheds often face high wind loads and structural vibrations. The Suspensor System isolators the ventilation unit from the roof skin, distributing weight directly to the secondary structural members.
                            </p>
                            <div className="space-y-6">
                                {[
                                    { title: "Reinforced Support", icon: Maximize },
                                    { title: "Vibration Damping", icon: Waves },
                                    { title: "Large-Scale Flow", icon: Wind }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-6 p-6 border-2 border-slate-100 rounded-3xl group hover:border-brand-orange-500/20 transition-all">
                                        <div className="bg-slate-100 p-4 rounded-2xl group-hover:bg-brand-orange-500 transition-colors">
                                            <item.icon className="h-6 w-6 group-hover:text-white" />
                                        </div>
                                        <span className="font-black uppercase text-sm tracking-widest">{item.title}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="lg:w-2/3 bg-slate-100 rounded-[80px] p-12 lg:p-24 relative overflow-hidden ring-1 ring-slate-200">
                            <div className="absolute top-10 right-10">
                                <Info className="h-12 w-12 text-slate-200" />
                            </div>
                            <h3 className="text-6xl font-black text-slate-200 uppercase tracking-tighter mb-16 leading-none select-none">Technical <br />Schematic</h3>

                            <div className="grid md:grid-cols-2 gap-12 relative z-10">
                                <div className="space-y-12">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3 text-brand-orange-500">
                                            <div className="h-1 w-8 bg-brand-orange-500" />
                                            <span className="font-black uppercase text-[10px] tracking-widest">Component 01</span>
                                        </div>
                                        <h4 className="text-2xl font-black uppercase tracking-tighter">Structural Base Plate</h4>
                                        <p className="text-sm font-medium text-slate-500 leading-relaxed">High-gauge Polycarbonate (PC) or GI base plates contoured to match any PEB sheet profile exactly.</p>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3 text-brand-orange-500">
                                            <div className="h-1 w-8 bg-brand-orange-500" />
                                            <span className="font-black uppercase text-[10px] tracking-widest">Component 02</span>
                                        </div>
                                        <h4 className="text-2xl font-black uppercase tracking-tighter">Tension Suspension</h4>
                                        <p className="text-sm font-medium text-slate-500 leading-relaxed">Secondary support ring that prevents the turbine from leaning or oscillating under high wind pressure.</p>
                                    </div>
                                </div>
                                <div className="space-y-12">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3 text-brand-orange-500">
                                            <div className="h-1 w-8 bg-brand-orange-500" />
                                            <span className="font-black uppercase text-[10px] tracking-widest">Component 03</span>
                                        </div>
                                        <h4 className="text-2xl font-black uppercase tracking-tighter">Seal-Tight Mounting</h4>
                                        <p className="text-sm font-medium text-slate-500 leading-relaxed">Integrated flashing system that provides a 100% leak-proof junction between the roof and the vent unit.</p>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3 text-brand-orange-500">
                                            <div className="h-1 w-8 bg-brand-orange-500" />
                                            <span className="font-black uppercase text-[10px] tracking-widest">Component 04</span>
                                        </div>
                                        <h4 className="text-2xl font-black uppercase tracking-tighter">Vortex Stabilization</h4>
                                        <p className="text-sm font-medium text-slate-500 leading-relaxed">Ensures the turbine continues to spin efficiently even when interior pressure is extremely high during peak production hours.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Industrial Specs Table */}
            <section className="py-40 bg-slate-950 px-6 lg:px-12">
                <div className="container mx-auto">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-24">
                            <h2 className="text-5xl font-black uppercase tracking-tighter mb-4">Specs <span className="brand-gradient-text">& Sizing</span></h2>
                            <p className="text-gray-500 font-medium tracking-widest text-[10px] uppercase">For System Engineers & Project Managers</p>
                        </div>

                        <div className="border border-white/5 bg-white/[0.02] rounded-[40px] overflow-hidden">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="border-b border-white/10 bg-white/[0.03]">
                                        <th className="p-10 font-black uppercase text-[10px] tracking-widest text-gray-400">Parameter</th>
                                        <th className="p-10 font-black uppercase text-[10px] tracking-widest text-gray-400">Industrial Standard</th>
                                        <th className="p-10 font-black uppercase text-[10px] tracking-widest text-brand-orange-500">Suspensor Grade</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm font-medium">
                                    {[
                                        ["Throat Diameter", "Up to 24\"", "Up to 36\""],
                                        ["Material Gauge", "0.5mm - 0.6mm", "0.7mm - 1.0mm"],
                                        ["Mounting Type", "Direct Sheet Mount", "Slab/Purlin Integrated"],
                                        ["Wind Load Rating", "100 km/h", "200+ km/h"],
                                        ["Seal Integrity", "EPDM Tape", "Integrated Co-Molded Seal"]
                                    ].map((row, i) => (
                                        <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                                            <td className="p-10 text-gray-400 uppercase tracking-tighter font-black">{row[0]}</td>
                                            <td className="p-10 text-gray-500">{row[1]}</td>
                                            <td className="p-10 text-white font-black">{row[2]}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-32 bg-slate-900 border-t border-white/5">
                <div className="container mx-auto text-center px-6">
                    <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-12 leading-none">Ready for <br />Large Scale <span className="brand-gradient-text">Flow?</span></h2>
                    <Link href="/contact">
                        <Button className="bg-brand-orange-500 hover:bg-white hover:text-black text-white rounded-3xl px-20 py-10 text-2xl font-black uppercase tracking-widest transition-all">
                            Request Data Sheets <ArrowRight className="ml-4 h-8 w-8" />
                        </Button>
                    </Link>
                </div>
            </section>
        </main>
    )
}
