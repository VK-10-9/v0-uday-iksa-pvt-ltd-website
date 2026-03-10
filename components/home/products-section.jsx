"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sun, Wind, Lightbulb, Zap, Sparkles, ShieldCheck } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { productCategories } from "@/lib/data/products"
import { useState } from "react"

export default function ProductsSection() {
    const [hoveredCategory, setHoveredCategory] = useState(null)

    return (
        <section id="products" className="py-20 md:py-24 relative bg-slate-950 overflow-hidden">
            {/* Background Atmosphere */}
            <div className="absolute inset-0">
                <motion.div
                    className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-orange-500/5 rounded-full blur-[120px]"
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, 50, 0],
                        y: [0, -30, 0],
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16 md:mb-24"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        className="inline-flex items-center gap-3 bg-brand-orange-500/10 border border-brand-orange-500/20 rounded-full px-8 py-2.5 mb-10"
                        initial={{ scale: 0.8 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <Sparkles className="h-4 w-4 text-brand-orange-400" />
                        <span className="text-[10px] font-black text-brand-orange-400 uppercase tracking-[0.2em]">Our Core Systems</span>
                    </motion.div>

                    <h2 className="text-4xl md:text-6xl lg:text-8xl font-black mb-8 text-white uppercase tracking-tighter leading-none">
                        Strategic <span className="brand-gradient-text">Products</span>
                    </h2>

                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-medium">
                        Advanced light and air systems engineered for modern homes and industrial complexes.
                    </p>
                </motion.div>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {productCategories.map((category, index) => (
                        <motion.div
                            key={category.id}
                            className="relative group cursor-pointer bg-white/[0.03] backdrop-blur-md rounded-[48px] border border-white/10 overflow-hidden h-[500px] transition-all duration-700 shadow-2xl hover:shadow-brand-orange-500/10"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            onHoverStart={() => setHoveredCategory(category.id)}
                            onHoverEnd={() => setHoveredCategory(null)}
                            whileHover={{ y: -15 }}
                        >
                            {/* Background Image Layer */}
                            <div className="absolute inset-0">
                                <Image
                                    src={category.image}
                                    alt={category.name}
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className={`absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent transition-opacity duration-700 ${hoveredCategory === category.id ? 'opacity-100' : 'opacity-85'}`} />
                            </div>

                            {/* Content Overlay */}
                            <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-10">
                                {/* Brand Badge */}
                                <div className="absolute top-10 right-10 flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full">
                                    <span className="text-[10px] font-black text-white uppercase tracking-widest">{category.brand}</span>
                                </div>

                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-2xl md:text-3xl font-black text-white mb-3 uppercase tracking-tighter group-hover:text-brand-orange-400 transition-colors duration-500 whitespace-nowrap">{category.name}</h3>
                                        <p className="text-gray-400 text-xs leading-relaxed font-medium line-clamp-2 md:line-clamp-3">
                                            {category.description}
                                        </p>
                                    </div>

                                    <div className="pt-4">
                                        <Link href="/products" className="inline-flex items-center gap-3 text-xs font-black text-brand-orange-500 uppercase tracking-widest group/btn">
                                            Explore Systems <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-2 transition-transform" />
                                        </Link>
                                    </div>

                                    {/* Indicator Line */}
                                    <div className="pt-2">
                                        <div className="h-1.5 w-16 bg-brand-gradient rounded-full shadow-lg shadow-brand-orange-500/50 group-hover:w-full transition-all duration-700" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
