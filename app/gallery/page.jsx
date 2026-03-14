"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight, Maximize2, Camera, MapPin, Building2, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const installations = [
    {
        title: "Industrial Daylighting",
        location: "Berger Paints, Gujarat",
        image: "/images/gallery/nanosun/Gujarat Berger Paints India Ltd.6.jpeg",
        category: "Industrial",
        desc: "Large scale NANOSUN installation providing 100% natural light."
    },
    {
        title: "Warehouse Light Solutions",
        location: "Berger Paints, Assam",
        image: "/images/installations/Assam Berger paints India Ltd3.jpeg",
        category: "Skytube",
        desc: "Tubular daylighting in deep warehouse interiors."
    },
    {
        title: "Educational Complex",
        location: "Institutional Hub, Karnataka",
        image: "/images/gallery/about/WhatsApp Image 2026-02-14 at 12.37.16 PM.jpeg",
        category: "Institutional",
        desc: "Fresh air and natural light for student well-being."
    },
    {
        title: "Manufacturing Plant",
        location: "Industrial Hangar, Hubballi",
        image: "/images/gallery/nanosun/IMG-20250912-WA0011.jpg",
        category: "NANOSUN",
        desc: "Clean, consistent daylight for precision manufacturing."
    },
    {
        title: "HAL Facility Ventilation",
        location: "Aeronautical Complex, Bangalore",
        image: "/images/web site images/WhatsApp Image 2026-03-13 at 19.11.05 (1).jpeg",
        category: "NANOVENT",
        desc: "High-velocity atmospheric heat extraction for aerospace maintenance."
    },
    {
        title: "Internal Basement Lighting",
        location: "Industrial Unit",
        image: "/images/web site images/WhatsApp Image 2026-03-13 at 19.04.43.jpeg",
        category: "Specialized",
        desc: "Bringing light to windowless basement zones."
    },
    {
        title: "Subsurface Daylighting",
        location: "Commercial Complex",
        image: "/images/web site images/WhatsApp Image 2026-03-13 at 19.04.43 (1).jpeg",
        category: "Specialized",
        desc: "Dual-layer light harvesting for deep basement environments."
    },
    {
        title: "Natural Air Intake",
        location: "Modern Factory, Hubballi",
        image: "/images/gallery/nanovent/WhatsApp Image 2025-12-13 at 10.44.15 AM.jpeg",
        category: "NANOVENT",
        desc: "High-extraction aerodynamic turbine ventilation."
    },
    {
        title: "RCC Roof Skylight",
        location: "Corporate Office Hub",
        image: "/images/web site images/WhatsApp Image 2026-03-13 at 19.03.09.jpeg",
        category: "Skylights",
        desc: "Architectural integration on flat roof products for premium commercial spaces."
    },
    {
        title: "Circular Daylighting",
        location: "Textile Mill, Gujarat",
        image: "/images/gallery/nanosun/IMG-20250912-WA0013.jpg",
        category: "NANOSUN",
        desc: "Multiple NANOSUN units illuminating a large-scale manufacturing floor."
    },
    {
        title: "Precision Engineering",
        location: "Workshop Floor",
        image: "/images/gallery/nanosun/IMG-20250904-WA0008.jpg",
        category: "NANOSUN",
        desc: "Glare-free natural light optimized for technician focus and safety."
    }
]


export default function GalleryPage() {
    return (
        <main className="pt-24 bg-slate-950 min-h-screen">
            {/* Hero Section */}
            <section className="relative py-12 md:py-16 overflow-hidden border-b border-white/5">
                <div className="absolute inset-0 bg-brand-orange-500/5 blur-[120px] rounded-full transform -translate-y-1/2" />
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-8 py-2.5 mb-8 backdrop-blur-md">
                            <Camera className="h-4 w-4 text-brand-orange-500" />
                            <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.4em]">Visual Portfolio</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-8xl font-black text-white mb-8 tracking-tighter uppercase leading-[0.85]">
                            Project <br /><span className="brand-gradient-text">Gallery</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-400 mb-12 leading-relaxed max-w-2xl mx-auto font-medium">
                            Witness the impact of Uday IKSA systems across India. Real installations, real energy savings, and real transformation.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="py-12 relative px-6 lg:px-12">
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {installations.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: index % 3 * 0.1 }}
                                className="group relative"
                            >
                                <div className="aspect-[4/3] rounded-[32px] overflow-hidden relative border border-white/5 shadow-xl">
                                    {/* Real Photo */}
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                                    />
                                    {/* Gradient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                                    {/* Hover overlay */}
                                    <div className="absolute inset-0 bg-brand-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    {/* Top badge */}
                                    <div className="absolute top-5 left-5 z-20">
                                        <div className="bg-black/40 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl flex items-center gap-2 group-hover:bg-brand-orange-500 group-hover:border-brand-orange-500 transition-all duration-500">
                                            <MapPin className="h-3.5 w-3.5 text-brand-orange-500 group-hover:text-white" />
                                            <span className="text-[9px] text-white font-black uppercase tracking-widest">{item.location}</span>
                                        </div>
                                    </div>

                                    {/* Bottom content */}
                                    <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                                        <div className="flex items-center gap-2 mb-2">
                                            <div className="h-px w-8 bg-brand-orange-500" />
                                            <span className="text-brand-orange-400 text-[9px] font-black uppercase tracking-widest">{item.category}</span>
                                        </div>
                                        <h3 className="text-xl font-black text-white uppercase tracking-tighter mb-1 group-hover:text-brand-orange-400 transition-colors">{item.title}</h3>
                                        <p className="text-gray-400 text-xs font-medium leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 max-h-0 group-hover:max-h-12 overflow-hidden">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Impact Stats */}
            <section className="py-12 bg-white/5 border-y border-white/5">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { icon: Building2, label: "States Covered", val: "15+" },
                            { icon: Sun, label: "Sunlight Hours Harvested", val: "10M+" },
                            { icon: ArrowRight, label: "Repeat Clients", val: "40%" },
                            { icon: Camera, label: "Live Installations", val: "500+" },
                        ].map((stat, i) => (
                            <div key={i} className="text-center space-y-4">
                                <div className="bg-brand-orange-500/10 w-16 h-16 rounded-3xl mx-auto flex items-center justify-center">
                                    <stat.icon className="h-8 w-8 text-brand-orange-500" />
                                </div>
                                <div className="text-4xl font-black text-white tracking-tighter">{stat.val}</div>
                                <div className="text-[10px] text-gray-500 font-black uppercase tracking-widest">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 relative px-6">
                <div className="container mx-auto text-center">
                    <motion.div
                        className="bg-brand-gradient p-8 md:p-16 rounded-[48px] md:rounded-[80px] shadow-2xl relative overflow-hidden"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl lg:text-7xl font-black text-white mb-10 tracking-tighter uppercase leading-tight relative z-10">Start Your project <br />Today</h2>
                        <div className="flex flex-wrap justify-center gap-8 relative z-10">
                            <Link href="/contact">
                                <Button className="bg-white text-black hover:bg-black hover:text-white rounded-2xl px-12 py-8 text-sm font-black uppercase tracking-widest transition-all">
                                    Get A Quote <ArrowRight className="ml-3 h-5 w-5" />
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    )
}
