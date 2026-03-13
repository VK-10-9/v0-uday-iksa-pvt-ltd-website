"use client"

import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2, Home, Building2 } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { solutionsData } from "@/lib/data/home-sections"

export default function SolutionsOverview() {
    return (
        <section id="solutions" className="py-8 md:py-10 relative bg-slate-950 px-6 lg:px-12 overflow-hidden">
            {/* Background Orbs with subtle movement */}
            <div className="absolute inset-0">
                <motion.div
                    className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-brand-orange-500/10 rounded-full blur-[140px]"
                    animate={{ x: [0, 40, 0], y: [0, -40, 0] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-brand-red-500/10 rounded-full blur-[140px]"
                    animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
                    transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                />
            </div>

            <div className="container mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Side: Modern Image Grid */}
                    <div className="relative order-2 lg:order-1">
                        <div className="grid grid-cols-12 gap-4 items-start">
                             {/* Large Industrial Photo */}
                             <motion.div
                                 className="col-span-12 md:col-span-7 aspect-square relative rounded-[40px] overflow-hidden border border-white/10 shadow-2xl group"
                                 initial={{ opacity: 0, x: -20 }}
                                 whileInView={{ opacity: 1, x: 0 }}
                                 viewport={{ once: true }}
                             >
                                 <Image
                                     src="/images/gallery/nanosun/Gujarat Berger Paints India Ltd.6.jpeg"
                                     alt="Nanosun industrial installation — Berger Paints Gujarat"
                                     fill
                                     className="object-cover group-hover:scale-105 transition-transform duration-700"
                                 />
                                 <div className="absolute inset-0 bg-gradient-to-br from-slate-950/40 via-transparent to-slate-950/60" />
                                 <div className="absolute bottom-6 left-6 z-10">
                                     <p className="text-[8px] font-black text-white/70 uppercase tracking-[0.3em]">Industrial Installation</p>
                                 </div>
                             </motion.div>

                             {/* Portrait Residential/Institutional Photo */}
                             <motion.div
                                 className="col-span-12 md:col-span-5 aspect-[3/4] relative rounded-[40px] overflow-hidden border-2 border-brand-orange-500/30 z-20 shadow-2xl md:-translate-x-8 md:translate-y-8 group"
                                 initial={{ opacity: 0, y: 40 }}
                                 whileInView={{ opacity: 1, y: 0 }}
                                 viewport={{ once: true }}
                                 transition={{ delay: 0.2 }}
                             >
                                 <Image
                                     src="/images/gallery/skytube/WhatsApp Image 2024-07-16 at 12.13.46 PM.jpeg"
                                     alt="Skytube residential installation"
                                     fill
                                     className="object-cover group-hover:scale-105 transition-transform duration-700"
                                 />
                                 <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                                 <div className="absolute bottom-5 left-5 z-10">
                                     <p className="text-[8px] font-black text-white/70 uppercase tracking-[0.3em]">Residential Solution</p>
                                 </div>
                             </motion.div>

                             {/* Wide Factory Banner Photo */}
                             <motion.div
                                 className="col-span-12 aspect-[16/7] relative rounded-[40px] overflow-hidden border border-white/10 mt-2 shadow-2xl group"
                                 initial={{ opacity: 0, y: 20 }}
                                 whileInView={{ opacity: 1, y: 0 }}
                                 viewport={{ once: true }}
                                 transition={{ delay: 0.4 }}
                             >
                                 <Image
                                     src="/images/gallery/nanosun/WhatsApp Image 2026-01-28 at 11.16.11 AM.jpeg"
                                     alt="Nanosun factory daylighting installation"
                                     fill
                                     className="object-cover group-hover:scale-105 transition-transform duration-700"
                                 />
                                 <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 via-transparent to-slate-950/60" />
                                 <div className="absolute inset-0 flex items-center justify-center">
                                     <p className="text-2xl md:text-4xl font-black text-white/20 uppercase tracking-[0.5em] group-hover:text-white/30 group-hover:tracking-[0.6em] transition-all duration-1000">PRECISION</p>
                                 </div>
                             </motion.div>
                        </div>

                        {/* Floating Experience Badge */}
                        <motion.div
                            className="absolute -bottom-6 md:-bottom-10 -left-6 md:-left-10 brand-glass-premium p-8 md:p-10 rounded-[48px] shadow-2xl z-30 border-brand-orange-500/20"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                        >
                            <p className="text-brand-orange-500 font-black text-4xl md:text-5xl mb-1 tracking-tighter">{solutionsData.experienceBadge.number}</p>
                            <p className="text-[7px] font-black text-white uppercase tracking-widest leading-none opacity-60">{solutionsData.experienceBadge.label}</p>
                        </motion.div>
                    </div>

                    {/* Right Side: Refined Content */}
                    <div className="space-y-10 order-1 lg:order-2">
                        <div className="space-y-6">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="inline-flex items-center gap-3 bg-brand-orange-500/10 border border-brand-orange-500/20 rounded-full px-8 py-2.5 backdrop-blur-md"
                            >
                                <div className="flex -space-x-2">
                                    <Home className="h-4 w-4 text-brand-orange-500" />
                                    <Building2 className="h-4 w-4 text-brand-orange-500 bg-slate-950 rounded-full" />
                                </div>
                                <span className="text-[7px] font-black text-brand-orange-400 uppercase tracking-[0.4em]">{solutionsData.badge.text}</span>
                            </motion.div>

                            <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-white uppercase tracking-tighter leading-[0.9]">
                                {solutionsData.title.plain} <br />
                                <span className="brand-gradient-text">{solutionsData.title.gradient}</span>
                            </h2>

                            <p className="text-lg md:text-xl text-gray-400 font-medium leading-relaxed max-w-xl">
                                {solutionsData.description}
                            </p>
                        </div>

                        {/* How It Works Container */}
                        <motion.div
                            className="bg-white/[0.03] border border-white/5 p-8 md:p-12 rounded-[56px] relative overflow-hidden group"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange-500/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />

                            <h4 className="text-white font-black uppercase tracking-[0.3em] text-[7px] mb-10 opacity-60">
                                {solutionsData.howItWorks.title}
                            </h4>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
                                {solutionsData.howItWorks.steps.map((step, idx) => (
                                    <div key={idx} className="space-y-4 relative group/step">
                                        <div className="flex items-center gap-4">
                                            <div className="bg-brand-orange-500 text-white w-8 h-8 rounded-2xl flex items-center justify-center text-xs font-black shadow-lg shadow-brand-orange-500/20 group-hover/step:rotate-12 transition-transform">
                                                {step.number}
                                            </div>
                                            <h5 className="text-white font-black uppercase text-sm tracking-widest">{step.title}</h5>
                                        </div>
                                        <p className="text-[8px] text-gray-500 leading-relaxed font-medium">
                                            {step.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Feature Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {solutionsData.features.map((feature, idx) => (
                                <motion.div
                                    key={idx}
                                    className="flex gap-5 items-start group"
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                >
                                    <div className="bg-brand-orange-500/10 p-2.5 rounded-2xl group-hover:bg-brand-orange-500 transition-all duration-300 group-hover:-translate-y-1">
                                        <CheckCircle2 className="h-5 w-5 text-brand-orange-500 group-hover:text-white" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-black uppercase tracking-widest text-xs mb-1.5 group-hover:text-brand-orange-400 transition-colors uppercase">{feature.title}</h4>
                                        <p className="text-gray-500 text-[8px] leading-relaxed font-medium">{feature.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="pt-4">
                            <Link href="/products" className="inline-block">
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <button className="bg-brand-orange-500 text-white hover:bg-white hover:text-black rounded-2xl px-12 py-5 text-xs font-black uppercase tracking-widest shadow-2xl shadow-brand-orange-500/30 transition-all duration-500 flex items-center gap-4 group">
                                        Compare Our Systems
                                        <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
                                    </button>
                                </motion.div>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Local Highlight CTA */}
                <motion.div
                    className="mt-6 md:mt-8 bg-white/[0.03] backdrop-blur-2xl border border-white/10 p-8 lg:p-12 rounded-[48px] md:rounded-[64px] text-center relative overflow-hidden group shadow-2xl"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-orange-500/10 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-red-500/10 rounded-full blur-[140px] translate-y-1/2 -translate-x-1/2" />

                    <div className="relative z-10 max-w-4xl mx-auto space-y-10">
                        <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-tight">
                            Built for <span className="brand-gradient-text">Homes & Factories</span>
                        </h3>
                        <p className="text-lg md:text-2xl text-gray-400 font-medium leading-relaxed">
                            Designed, manufactured, and installed by our experts in Hubballi for businesses and families across India. Experience the fusion of engineering and nature.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link href="/products">
                                <Button className="bg-white text-black hover:bg-brand-orange-500 hover:text-white rounded-2xl px-14 py-8 text-sm font-black uppercase tracking-widest transition-all duration-500 shadow-xl shadow-white/5">
                                    View All Systems
                                </Button>
                            </Link>
                            <Link href="/contact">
                                <Button variant="outline" className="border-white/10 text-white hover:bg-white/10 rounded-2xl px-14 py-8 text-sm font-black uppercase tracking-widest backdrop-blur-md transition-all duration-500">
                                    Get Technical Audit
                                </Button>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

