"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Award, Factory, Sparkles, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ProductTrustSection() {
    return (
        <section className="py-24 relative px-6 lg:px-12 bg-slate-900/30 overflow-hidden border-t border-white/5">
            <div className="container mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2.5 bg-brand-orange-500/10 border border-brand-orange-500/20 rounded-full px-5 py-2 mb-8">
                            <Sparkles className="h-3.5 w-3.5 text-brand-orange-400" />
                            <span className="text-[7px] font-black uppercase tracking-widest text-brand-orange-400">Engineering Excellence</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-8 text-white">
                            The Hubballi <br /><span className="brand-gradient-text">Story</span>
                        </h2>
                        <p className="text-sm md:text-base text-gray-400 font-medium leading-relaxed max-w-xl mb-10">
                            When you choose Uday IKSA, you aren't just buying a product — you're investing in 15+ years of patented research and Japanese-tier lean manufacturing. Based in Hubballi, Karnataka, we own the entire engineering lifecycle: from in-house die-making to site installation.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-6 mb-12">
                            <div className="flex items-start gap-4 p-5 bg-white/5 rounded-3xl border border-white/5 group hover:border-brand-orange-500/30 transition-all">
                                <Award className="h-6 w-6 text-brand-orange-500 shrink-0" />
                                <div>
                                    <h4 className="text-[7px] font-black uppercase text-white mb-1">CII Award Winner</h4>
                                    <p className="text-[6px] text-gray-500 font-bold uppercase tracking-widest">Innovation Excellence</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-5 bg-white/5 rounded-3xl border border-white/5 group hover:border-brand-orange-500/30 transition-all">
                                <Factory className="h-6 w-6 text-brand-orange-500 shrink-0" />
                                <div>
                                    <h4 className="text-[7px] font-black uppercase text-white mb-1">In-house Mfg</h4>
                                    <p className="text-[6px] text-gray-500 font-bold uppercase tracking-widest">Zero Compromise</p>
                                </div>
                            </div>
                        </div>

                        <Link href="/about">
                            <button className="flex items-center gap-3 text-[7px] font-black uppercase tracking-widest text-brand-orange-500 hover:text-white transition-colors group">
                                Learn More About Our Journey <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform" />
                            </button>
                        </Link>
                    </motion.div>

                    <motion.div 
                        className="relative"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className="relative aspect-video lg:aspect-square rounded-[48px] overflow-hidden border border-white/10 group shadow-3xl">
                             <Image 
                                src="/images/gallery/nanosun/Gujarat Berger Paints India Ltd.6.jpeg"
                                alt="Uday IKSA Industrial Installation"
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-1000 opacity-60"
                             />
                             <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                             <div className="absolute bottom-10 left-10 right-10 z-10">
                                 <div className="space-y-4">
                                     <div className="bg-brand-orange-500/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 inline-block">
                                         <p className="text-[7px] font-black uppercase text-white tracking-widest">Hubballi Facility</p>
                                     </div>
                                     <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Certified <br /><span className="text-gray-400">In-House Production</span></h3>
                                     <p className="text-[7px] text-gray-400 font-bold uppercase tracking-[0.2em]">Quality Controlled Since 2009</p>
                                 </div>
                             </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
