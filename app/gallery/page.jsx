"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight, Maximize2, Camera, MapPin, Building2, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const installations = [
    {
        title: "Industrial Daylighting",
        location: "Berger Paints, Hindupur",
        image: "/images/installations/hindupur-industrial.jpg",
        category: "Industrial",
        desc: "Large scale NANOSUN installation providing 100% natural light."
    },
    {
        title: "Warehouse Light Solutions",
        location: "Logistics Center, Bangalore",
        image: "/images/installations/skytube-warehouse.png",
        category: "Skytube",
        desc: "Tubular daylighting in deep warehouse interiors."
    },
    {
        title: "Educational Complex",
        location: "PSU Institutional Building",
        image: "/images/installations/institutional-1.jpg",
        category: "Institutional",
        desc: "Fresh air and natural light for student well-being."
    },
    {
        title: "Manufacturing Plant",
        location: "Industrial Hangar, Hubballi",
        image: "/images/gallery/nanosun/install-1.jpg",
        category: "NANOSUN",
        desc: "Clean, consistent daylight for precision manufacturing."
    },
    {
        title: "Turbo Ventilation",
        location: "Steel Fabrication Unit",
        image: "/images/gallery/nanovent/install-1.jpg",
        category: "NANOVENT",
        desc: "Heat extraction systems working without electricity."
    },
    {
        title: "Internal Basement Lighting",
        location: "Public Sector Unit",
        image: "/images/gallery/nanosun/basement.png",
        category: "Specialized",
        desc: "Bringing light to windowless basement zones."
    },
    {
        title: "Natural Air Intake",
        location: "Modern Factory, Chennai",
        image: "/images/gallery/nanovent/product-1.jpg",
        category: "NANOVENT",
        desc: "High-extraction aerodynamic turbine ventilation."
    },
    {
        title: "RCC Roof Skylight",
        location: "Corporate Office, Pune",
        image: "/images/gallery/skylights/rect-1.jpg",
        category: "Skylights",
        desc: "Architectural integration on flat concrete slabs for premium commercial spaces."
    },
    {
        title: "Circular Daylighting",
        location: "Textile Mill, Gujarat",
        image: "/images/gallery/nanosun/install-3.jpg",
        category: "NANOSUN",
        desc: "Multiple NANOSUN units illuminating a large-scale manufacturing floor."
    },
    {
        title: "Precision Engineering",
        location: "Workshop Floor",
        image: "/images/gallery/nanosun/install-2.jpg",
        category: "NANOSUN",
        desc: "Glare-free natural light optimized for technician focus and safety."
    },
    {
        title: "Square Skylight Dome",
        location: "Residential Complex",
        image: "/images/gallery/skylights/square-1.jpg",
        category: "Skylights",
        desc: "Secure, weather-proof square dome systems for flat roofs."
    }
]


export default function GalleryPage() {
    return (
        <main className="pt-24 bg-slate-950 min-h-screen">
            {/* Hero Section */}
            <section className="relative py-24 md:py-32 overflow-hidden border-b border-white/5">
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
            <section className="py-24 relative px-6 lg:px-12">
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                        {installations.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: index % 3 * 0.1 }}
                                className="group relative"
                            >
                                <div className="aspect-[4/5] rounded-[48px] overflow-hidden border border-white/5 bg-white/5 relative">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                                    {/* Location Badge */}
                                    <div className="absolute top-8 left-8">
                                        <div className="bg-black/40 backdrop-blur-md border border-white/10 px-4 py-2 rounded-2xl flex items-center gap-2">
                                            <MapPin className="h-3 w-3 text-brand-orange-500" />
                                            <span className="text-[10px] text-white font-bold uppercase tracking-widest">{item.location}</span>
                                        </div>
                                    </div>

                                    {/* Action Hover */}
                                    <div className="absolute top-8 right-8">
                                        <motion.div
                                            whileHover={{ scale: 1.1, rotate: 90 }}
                                            className="bg-brand-orange-500 p-4 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-2xl shadow-brand-orange-500/50"
                                        >
                                            <Maximize2 className="h-5 w-5 text-white" />
                                        </motion.div>
                                    </div>

                                    <div className="absolute bottom-10 left-10 right-10">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="h-px w-8 bg-brand-orange-500"></div>
                                            <span className="text-brand-orange-500 text-[10px] font-black uppercase tracking-widest">{item.category}</span>
                                        </div>
                                        <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-3 leading-none group-hover:text-brand-orange-400 transition-colors">{item.title}</h3>
                                        <p className="text-gray-400 text-xs font-medium leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-2">
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
            <section className="py-24 bg-white/5 border-y border-white/5">
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
            <section className="py-40 relative px-6">
                <div className="container mx-auto text-center">
                    <motion.div
                        className="bg-brand-gradient p-12 md:p-24 rounded-[60px] md:rounded-[100px] shadow-2xl relative overflow-hidden"
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
