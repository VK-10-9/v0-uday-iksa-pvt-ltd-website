"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight, Maximize2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const installations = [
    {
        title: "Industrial Daylighting",
        location: "Hindupur Berger Paints",
        image: "/images/gallery/nanosun/Gujarat Berger Paints India Ltd.6.jpeg",
        category: "Industrial"
    },
    {
        title: "Warehouse Optimization",
        location: "Siemens Factory, Pune",
        image: "/images/gallery/skytube/standing seam roof sheeting 1.png",
        category: "Skytube"
    },
    {
        title: "RCC Roof Integration",
        location: "Institutional Building",
        image: "/images/web site images/WhatsApp Image 2026-03-13 at 19.03.09.jpeg",
        category: "Skylights"
    },
    {
        title: "Factory Illumination",
        location: "Automobile Manufacturing",
        image: "/images/gallery/nanosun/Hindupur Berger Paints India Ltd 20.jpeg",
        category: "NANOSUN"
    },
    {
        title: "HAL Facility Ventilation",
        location: "Aeronautical Complex, Bangalore",
        image: "/images/web site images/WhatsApp Image 2026-03-13 at 19.11.05.jpeg",
        category: "NANOVENT"
    },
    {
        title: "Skylight Installation",
        location: "Multi-Storey Complex",
        image: "/images/web site images/WhatsApp Image 2026-03-13 at 19.04.43.jpeg",
        category: "Specialized"
    }
]

export default function InstallationGallery() {
    return (
        <section className="py-12 bg-slate-950 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-orange-500/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-8">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-3 mb-6"
                        >
                            <div className="w-12 h-px bg-brand-orange-500" />
                            <span className="text-brand-orange-500 font-bold uppercase tracking-widest text-sm">Proven Excellence</span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none"
                        >
                            Real-World <br /><span className="brand-gradient-text">Installations</span>
                        </motion.h2>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <Link href="/projects">
                            <button className="bg-white/5 backdrop-blur-md border border-white/10 text-white hover:bg-white hover:text-black rounded-2xl px-12 py-6 text-sm uppercase font-black tracking-widest transition-all duration-500 flex items-center gap-4 group">
                                View All Projects
                                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform text-brand-orange-500" />
                            </button>
                        </Link>
                    </motion.div>
                </div>

                <div className="relative">
                    <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-x-auto md:overflow-x-visible pb-12 md:pb-0 scrollbar-hide snap-x">
                        {installations.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative flex-shrink-0 w-[85vw] md:w-auto aspect-[4/5] rounded-[40px] overflow-hidden border border-white/5 snap-center"
                            >
                                <Image 
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />
                                
                                <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] group-hover:opacity-[0.05] transition-opacity">
                                    <p className="text-[100px] md:text-[120px] font-black uppercase tracking-tighter leading-none select-none -rotate-12">{item.category}</p>
                                </div>

                                <div className="absolute top-6 right-6">
                                    <div className="bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-2xl opacity-0 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <Maximize2 className="h-5 w-5 text-white" />
                                    </div>
                                </div>

                                <div className="absolute bottom-10 left-8 right-8 md:left-10 md:right-10">
                                    <div className="inline-block px-5 py-2 bg-brand-orange-500 text-white text-[10px] font-black uppercase tracking-widest rounded-full mb-5">
                                        {item.category}
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter mb-3 leading-tight">{item.title}</h3>
                                    <p className="text-gray-400 text-sm md:text-base font-medium">{item.location}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
