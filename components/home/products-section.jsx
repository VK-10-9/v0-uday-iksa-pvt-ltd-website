"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sun, Wind, Lightbulb, Zap, Sparkles, ShieldCheck, Factory, Building, Shield } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { productCategories } from "@/lib/data/products"
import { useState } from "react"

export default function ProductsSection() {
    const [hoveredCategory, setHoveredCategory] = useState(null)

    const productIcons = {
        "natural-skylight": Sun,
        "tubular-daylighting": Zap,
        "natural-ventilator": Wind,
        "designer-skylight": Sparkles,
    }

    return (
        <section id="products" className="py-8 md:py-12 relative bg-slate-950 overflow-hidden">
            {/* Strategic Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-orange-500/[0.02] transform skew-x-12 translate-x-1/4" />
                <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-orange-500/[0.03] rounded-full blur-[160px]"
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                {/* Section Header */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-8 md:mb-10">
                    <motion.div
                        className="max-w-3xl"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-3 bg-brand-orange-500/10 border border-brand-orange-500/20 rounded-full px-6 py-2 mb-4">
                            <Shield className="h-3.5 w-3.5 text-brand-orange-500" />
                            <span className="text-[10px] font-black text-brand-orange-500 uppercase tracking-[0.3em]">Proprietary Technology</span>
                        </div>

                        <h2 className="text-6xl md:text-8xl lg:text-[10rem] font-black text-white uppercase tracking-tighter leading-[0.85] mb-8">
                            Industrial <br /> <span className="brand-gradient-text">Excellence</span>
                        </h2>

                        <p className="text-2xl text-gray-400 leading-relaxed font-medium max-w-2xl">
                            Precision-engineered systems designed to maximize efficiency and minimize operational costs through passive energy solutions.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="hidden lg:block pb-4"
                    >
                        <Link href="/products" className="group flex items-center gap-4 bg-white/5 border border-white/10 px-8 py-5 rounded-2xl hover:bg-brand-orange-500 transition-all duration-500">
                            <span className="text-xs font-black text-white uppercase tracking-widest">Compare All Systems</span>
                            <ArrowRight className="h-5 w-5 text-brand-orange-500 group-hover:text-white transition-colors" />
                        </Link>
                    </motion.div>
                </div>

                {/* Categories Grid - High Impact Cards */}
                {/* Categories Grid - High Impact App-style Scroller on Mobile */}
                <div className="relative">
                    <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto md:overflow-x-visible pb-12 md:pb-0 scrollbar-hide snap-x">
                        {productCategories.map((category, index) => {
                            const Icon = productIcons[category.id] || Lightbulb;
                            return (
                                <motion.div
                                    key={category.id}
                                    className="relative flex-shrink-0 w-[85vw] md:w-auto h-[550px] md:h-[600px] rounded-[40px] overflow-hidden group cursor-pointer border border-white/5 bg-slate-900 shadow-3xl snap-center"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    onHoverStart={() => setHoveredCategory(category.id)}
                                    onHoverEnd={() => setHoveredCategory(null)}
                                >
                                    {/* Image Layer */}
                                    <div className="absolute inset-0 z-0">
                                        <Image 
                                            src={category.image}
                                            alt={category.name}
                                            fill
                                            className="object-cover opacity-25 group-hover:opacity-40 group-hover:scale-110 transition-all duration-1000"
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-1000 select-none">
                                            <p className="text-[120px] md:text-[140px] font-black uppercase tracking-tighter leading-none -rotate-90 origin-center whitespace-nowrap">
                                                {category.id.split('-').join(' ')}
                                            </p>
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                                    </div>

                                    {/* Vertical Brand Sidebar */}
                                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-brand-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                    {/* Content Overlay */}
                                    <div className="relative z-20 h-full flex flex-col p-8 md:p-10 justify-between">
                                        <div>
                                            <div className="flex justify-between items-start mb-10">
                                                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center group-hover:bg-brand-orange-500 transition-all duration-500">
                                                    <Icon className="h-5 w-5 md:h-6 md:w-6 text-brand-orange-500 group-hover:text-white" />
                                                </div>
                                                <div className="bg-white/10 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full">
                                                    <span className="text-[10px] font-black text-white uppercase tracking-widest">{category.brand}</span>
                                                </div>
                                            </div>

                                            <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter leading-tight mb-4 group-hover:text-brand-orange-500 transition-colors">
                                                {category.name.split(' ').map((word, i) => (
                                                    <span key={i} className="block">{word}</span>
                                                ))}
                                            </h3>
                                        </div>

                                        <div className="space-y-6">
                                            <p className="text-gray-400 text-sm md:text-base font-medium leading-relaxed opacity-90 md:opacity-0 group-hover:opacity-100 translate-y-0 md:translate-y-4 group-hover:translate-y-0 transition-all duration-700">
                                                {category.description}
                                            </p>

                                            <div className="flex items-center gap-4">
                                                <div className="h-px flex-1 bg-white/10 md:bg-white/10 group-hover:bg-brand-orange-500/50 transition-colors" />
                                                <Link href={`/products/${category.id.includes('nanosun') ? 'nanosun' : category.id.includes('nanovent') ? 'nanovent' : category.id.includes('skytube') ? 'skytube' : 'iwindow'}`}>
                                                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand-orange-500 hover:border-brand-orange-500 transition-all group-hover:scale-110">
                                                        <ArrowRight className="h-5 w-5 text-white" />
                                                    </div>
                                                </Link>
                                            </div>

                                            <div className="flex gap-4 opacity-40 group-hover:opacity-100 transition-opacity duration-700">
                                                <div className="flex flex-col">
                                                    <span className="text-[8px] font-black text-gray-500 uppercase tracking-widest">Efficiency</span>
                                                    <span className="text-sm font-bold text-white">99.7%</span>
                                                </div>
                                                <div className="w-px h-6 bg-white/10" />
                                                <div className="flex flex-col">
                                                    <span className="text-[8px] font-black text-gray-500 uppercase tracking-widest">Warranty</span>
                                                    <span className="text-sm font-bold text-white">10Y+</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Hover Glow Effect */}
                                    <div className="absolute -inset-2 bg-brand-orange-500/0 group-hover:bg-brand-orange-500/10 blur-[60px] transition-all duration-1000 -z-10" />
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Mobile Mobile CTA */}
                <motion.div
                    className="mt-12 lg:hidden"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <Link href="/products" className="flex items-center justify-center gap-3 bg-white/5 border border-white/10 py-6 rounded-[24px] text-xs font-black text-white uppercase tracking-widest">
                        Compare All Systems <ArrowRight className="h-4 w-4 text-brand-orange-500" />
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}
