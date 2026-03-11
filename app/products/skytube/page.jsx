"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sun, ShieldCheck, Zap, Sparkles, CheckCircle2, Lightbulb, Minimize, Layers, Factory, Building, Layout, Box, Settings, Ruler, Droplets, HardHat, Gauge, Recycle, Eye } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { HoverButton } from "@/components/ui/hover-button"
import CredentialStrip from "@/components/product/CredentialStrip"

export default function SkytubePage() {
    const components = [
        { name: "Optical Collecting Dome", desc: "UV-resistant clear dome that harvests sunlight even at low angles." },
        { name: "Optical Reflectors", desc: "99.7% spectral mirror coating for maximum light transmission." },
        { name: "Covering Sheet", desc: "Weather-proof seal that integrates seamlessly with your roof profile." },
        { name: "Daylight Diffuser Dome", desc: "Prismatic bottom dome that spreads light evenly across the interior." },
        { name: "Gasket Rubber", desc: "Heavy-duty 8mm x 20mm seal for 100% leak-proof performance." }
    ]

    const dimensions = [
        { model: "Model 01", dLen: "1080 mm", dWid: "280 & 600 mm", dHi: "150 mm", difHi: "100 mm" },
        { model: "Model 02", dLen: "1650 mm", dWid: "280 & 600 mm", dHi: "150 mm", difHi: "100 mm" },
        { model: "Model 03", dLen: "3050 mm", dWid: "280 & 600 mm", dHi: "150 mm", difHi: "100 mm" },
        { model: "Model 04", dLen: "4500 mm", dWid: "280 & 600 mm", dHi: "150 mm", difHi: "100 mm" }
    ]

    const suitabilityImages = [
        { src: "/images/products/skytube/app-warehouse.png", title: "Warehouse Roof", type: "External" },
        { src: "/images/products/skytube/installation-internal.jpg", title: "Factory Floor", type: "Internal" },
        { src: "/images/installations/skytube-warehouse.png", title: "Manufacturing Unit", type: "Hybrid" },
        { src: "/images/products/skytube/app-warehouse.png", title: "Godown Storage", type: "External" },
        { src: "/images/products/skytube/installation-internal.jpg", title: "Industrial Corridor", type: "Internal" },
        { src: "/images/installations/skytube-warehouse.png", title: "Logistics Hub", type: "Hybrid" }
    ]

    return (
        <main className="pt-24 bg-slate-950 min-h-screen text-white overflow-hidden">
            {/* Hero Section */}
            <section className="relative py-24 overflow-hidden px-6 lg:px-12 border-b border-white/5">
                <div className="absolute inset-0 bg-brand-orange-500/5 blur-[120px] rounded-full transform translate-y-1/2" />
                <div className="container mx-auto relative z-10">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                            <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-8 py-2.5 mb-10 backdrop-blur-md">
                                <Zap className="h-4 w-4 text-brand-orange-400" />
                                <h2 className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none">Nanosun™ Skytube Series</h2>
                            </div>
                            <h1 className="text-5xl md:text-8xl font-black text-white mb-6 tracking-tighter uppercase leading-[0.85]">
                                Light Your <br /> <span className="brand-gradient-text">Factory with Sun</span>
                            </h1>
                            <p className="text-lg text-gray-400 mb-12 leading-relaxed max-w-xl font-medium italic">
                                "Bring the power of the sun inside with 99.7% efficiency."
                            </p>

                            <div className="grid grid-cols-2 gap-6 mb-12">
                                {["Factory", "Godown", "Manufacturing Unit", "Warehouse"].map((f, i) => (
                                    <div key={i} className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-gray-300">
                                        <CheckCircle2 className="h-4 w-4 text-brand-orange-500" />
                                        {f}
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-6">
                                <Link href="/contact">
                                    <HoverButton className="bg-white text-black hover:bg-brand-orange-500 hover:text-white rounded-2xl px-16 py-8 text-sm font-black uppercase tracking-widest shadow-2xl transition-all">
                                        Brighten My Space <ArrowRight className="ml-3 h-5 w-5" />
                                    </HoverButton>
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div
                            className="relative h-[650px] rounded-[80px] overflow-hidden border border-white/10 shadow-3xl group"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                        >
                            <Image
                                src="/images/installations/skytube-warehouse.png"
                                alt="Skytube Real-World Warehouse Installation"
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                            <div className="absolute bottom-12 left-12 right-12">
                                <div className="bg-white/5 backdrop-blur-3xl border border-white/10 p-10 rounded-[48px] flex items-center justify-between">
                                    <div>
                                        <p className="text-3xl font-black text-white uppercase tracking-tighter mb-2">Piped Sunshine</p>
                                        <p className="text-gray-400 text-sm font-medium italic">Zero Electricity. Infinite Light.</p>
                                    </div>
                                    <div className="bg-brand-orange-500/20 p-5 rounded-3xl border border-brand-orange-500/30 font-black text-brand-orange-400">
                                        HYBRID
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <CredentialStrip />

            {/* Suitability & Impact Grid */}
            <section className="py-32 px-6 lg:px-12 bg-slate-950 border-b border-white/5">
                <div className="container mx-auto">
                    <div className="text-center mb-24">
                        <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-8 py-2.5 mb-8">
                            <Eye className="h-4 w-4 text-brand-orange-400" />
                            <h2 className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none">Product Suitability</h2>
                        </div>
                        <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-4 text-white">Industrial <span className="text-brand-orange-500">Impact</span></h2>
                        <p className="text-gray-500 font-black uppercase tracking-[0.3em] text-[10px]">Real-World Deployment Results</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {suitabilityImages.map((img, i) => (
                            <motion.div
                                key={i}
                                className="group relative h-[350px] rounded-[50px] overflow-hidden border border-white/5"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <Image src={img.src} alt={img.title} fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
                                <div className="absolute bottom-10 left-10">
                                    <span className="bg-brand-orange-500 text-white text-[8px] font-black uppercase px-4 py-1.5 rounded-full mb-3 inline-block">
                                        {img.type}
                                    </span>
                                    <h4 className="text-xl font-black uppercase text-white tracking-tight">{img.title}</h4>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Installation Surfaces */}
            <section className="py-32 px-6 lg:px-12 bg-slate-950 border-y border-white/5 relative">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row gap-24 items-center">
                        <div className="lg:w-1/3">
                            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8">Installation <br /><span className="text-brand-orange-500">Surfaces</span></h2>
                            <p className="text-gray-400 text-lg font-medium leading-relaxed">
                                Our mounting systems are engineered to integrate seamlessly with all standard industrial roof profiles without risking leaks.
                            </p>
                        </div>
                        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { name: "Metal Sheet", desc: "For PEB Sheds", img: "/images/products/skytube/app-warehouse.png" },
                                { name: "Standing Seam", desc: "For Premium Roofs", img: "/images/products/skytube/installation-internal.jpg" },
                                { name: "Cement Sheet", desc: "For Legacy Units", img: "/images/products/skytube/app-warehouse.png" }
                            ].map((surface, i) => (
                                <div key={i} className="group relative h-[450px] rounded-[60px] overflow-hidden border border-white/10 transition-all hover:border-brand-orange-500/50">
                                    <Image src={surface.img} alt={surface.name} fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
                                    <div className="absolute bottom-12 left-0 right-0 px-8 text-center">
                                        <h4 className="text-2xl font-black uppercase text-white mb-2">{surface.name}</h4>
                                        <p className="text-brand-orange-400 text-[10px] font-black uppercase tracking-widest">{surface.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* System Anatomy Section */}
            <section className="py-32 px-6 lg:px-12 bg-slate-950 relative overflow-hidden">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row gap-24 items-center">
                        <div className="lg:w-1/2 space-y-12">
                            <div className="inline-flex items-center gap-3 bg-brand-orange-500/10 border border-brand-orange-500/20 rounded-full px-6 py-2">
                                <Box className="h-4 w-4 text-brand-orange-400" />
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-orange-400">Components of the product</span>
                            </div>
                            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85]">
                                System <br /><span className="text-brand-orange-500">Anatomy</span>
                            </h2>
                            <p className="text-xl text-gray-400 font-medium leading-relaxed max-w-xl italic text-brand-orange-200/50">
                                "The science of zero-loss light channelling."
                            </p>

                            <div className="space-y-4">
                                {components.map((c, i) => (
                                    <motion.div
                                        key={i}
                                        className="flex gap-8 items-start p-8 rounded-[40px] border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-brand-orange-500/30 transition-all group"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                    >
                                        <div className="bg-brand-orange-500/10 p-4 rounded-2xl group-hover:bg-brand-orange-500 group-hover:text-white transition-all text-brand-orange-400">
                                            <Settings className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-black uppercase tracking-tighter mb-2 text-white">{c.name}</h4>
                                            <p className="text-sm text-gray-500 font-medium leading-relaxed">{c.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div className="lg:w-1/2 relative h-[800px] w-full flex items-center justify-center">
                            <div className="relative w-full h-full bg-slate-900/50 rounded-[100px] border border-white/10 shadow-3xl flex items-center justify-center overflow-hidden">
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 1 }}
                                    className="relative w-[120%] h-[120%]"
                                >
                                    <Image
                                        src="/images/products/skytube/anatomy.png"
                                        alt="Skytube Exploded View"
                                        fill
                                        className="object-contain p-12 drop-shadow-[0_0_50px_rgba(249,115,22,0.3)]"
                                    />
                                </motion.div>
                                <div className="absolute top-1/4 right-10 bg-slate-800/80 backdrop-blur-md shadow-2xl p-8 rounded-[40px] border border-white/10 max-w-[220px] animate-bounce z-20">
                                    <p className="text-[10px] font-black uppercase text-brand-orange-400 mb-2 tracking-[0.2em]">Reflectance</p>
                                    <p className="text-sm font-black leading-tight text-white">99.7% Spectral Mirror Pipes</p>
                                </div>
                                {/* Orange Accent Glows */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-orange-500/10 blur-[130px] rounded-full -z-10" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Hybrid Ventilation Section */}
            <section className="py-32 px-6 lg:px-12 bg-slate-950 overflow-hidden relative border-y border-white/5">
                <div className="container mx-auto relative z-10">
                    <div className="grid lg:grid-cols-2 gap-32 items-center">
                        <div className="relative group p-10 bg-white/5 rounded-[80px] border border-white/10">
                            <motion.div
                                className="relative h-[500px] w-full bg-slate-800/50 rounded-[60px] overflow-hidden shadow-2xl"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.5 }}
                            >
                                <Image src="/images/products/skytube/hybrid-unit.png" alt="Hybrid Unit" fill className="object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-40" />
                            </motion.div>
                            <div className="absolute -bottom-6 -right-6 bg-brand-orange-500 text-white px-10 py-5 rounded-3xl font-black text-xs uppercase tracking-widest shadow-2xl z-20">
                                Light + Air Integration
                            </div>
                        </div>
                        <div className="space-y-12">
                            <div className="inline-flex items-center gap-3 bg-brand-orange-500/10 border border-brand-orange-500/20 rounded-full px-8 py-2.5">
                                <Recycle className="h-4 w-4 text-brand-orange-500" />
                                <span className="text-[10px] font-black uppercase tracking-widest text-brand-orange-500">Hybrid Daylight & Natural Ventilation</span>
                            </div>
                            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85]">
                                Two-in-One <br /><span className="brand-gradient-text">Performance</span>
                            </h2>
                            <p className="text-xl text-gray-400 font-medium leading-relaxed">
                                Our Hybrid roof units combine SKYTUBE lighting with NANOVENT extraction in a single structure.
                            </p>
                            <div className="grid grid-cols-2 gap-8">
                                {[
                                    { title: "Daylight Path", val: "99.7% Mirror" },
                                    { title: "Ventilation", val: "Turbo Extraction" },
                                    { title: "Base Mount", val: "Single Profile" },
                                    { title: "Integrity", val: "100% Leak Proof" }
                                ].map((stat, i) => (
                                    <div key={i} className="border-l-2 border-brand-orange-500 pl-6">
                                        <p className="text-[10px] font-black uppercase text-gray-500 mb-1 tracking-widest">{stat.title}</p>
                                        <p className="text-lg font-black text-white uppercase">{stat.val}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Installation Procedure Section */}
            <section className="py-32 px-6 lg:px-12 bg-slate-950 relative overflow-hidden border-b border-white/5">
                <div className="absolute inset-0 bg-grid-white/[0.03] pointer-events-none" />
                <div className="container mx-auto relative z-10">
                    <div className="text-center mb-24">
                        <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-8 py-2.5 mb-8">
                            <HardHat className="h-4 w-4 text-brand-orange-400" />
                            <h2 className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none">Installation Procedure</h2>
                        </div>
                        <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-4 text-white">Engineered <br /><span className="brand-gradient-text">Execution</span></h2>
                        <p className="text-gray-500 font-black uppercase tracking-[0.3em] text-[10px]">Rapid Industrial Deployment</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-16">
                        {[
                            { step: "01", title: "Site Audit", desc: "Technical analysis of roof profile, obstacle mapping, and light-level targeting.", icon: Gauge },
                            { step: "02", title: "Precision Cut", desc: "Profile-specific base plate mounting with our 8mm heavy-duty gasket seal.", icon: HardHat },
                            { step: "03", title: "Spectral Integration", desc: "Pipe assembly with 99.7% spectral mirror segments and prismatic diffusers.", icon: Sparkles }
                        ].map((step, i) => (
                            <div key={i} className="relative p-12 bg-white/[0.02] border border-white/5 rounded-[60px] group hover:bg-white/[0.05] hover:border-brand-orange-500/30 transition-all duration-500">
                                <div className="absolute -top-6 -left-6 bg-brand-orange-500 text-white px-8 py-4 rounded-3xl font-black text-2xl shadow-xl border border-slate-900 group-hover:bg-white group-hover:text-black transition-all">
                                    {step.step}
                                </div>
                                <step.icon className="h-12 w-12 text-brand-orange-400 mb-8 group-hover:text-brand-orange-500 transition-all" />
                                <h4 className="text-2xl font-black uppercase tracking-tighter mb-4 text-white group-hover:text-brand-orange-500">{step.title}</h4>
                                <p className="text-gray-500 text-sm font-medium leading-relaxed group-hover:text-gray-300">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technical Specification Matrix */}
            <section className="py-40 px-6 lg:px-12 bg-slate-950 border-t border-white/5">
                <div className="container mx-auto max-w-6xl">
                    <div className="flex items-center gap-6 mb-16">
                        <Ruler className="h-10 w-10 text-brand-orange-500" />
                        <h2 className="text-3xl lg:text-5xl font-black uppercase tracking-tighter leading-none text-white">Standard Available <br /><span className="text-gray-500">Model Dimensions</span></h2>
                    </div>
                    <div className="overflow-x-auto rounded-[40px] border border-white/10 bg-white/[0.02]">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-white/[0.03] border-b border-white/10">
                                    <th className="p-8 text-[10px] font-black uppercase tracking-widest text-gray-400">Model Series</th>
                                    <th className="p-8 text-[10px] font-black uppercase tracking-widest text-gray-400">Model Length</th>
                                    <th className="p-8 text-[10px] font-black uppercase tracking-widest text-gray-400">Dome (WxH)</th>
                                    <th className="p-8 text-[10px] font-black uppercase tracking-widest text-brand-orange-500">Diffuser (H)</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm">
                                {dimensions.map((row, i) => (
                                    <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                                        <td className="p-8 text-white font-black uppercase tracking-tighter">{row.model}</td>
                                        <td className="p-8 text-gray-500 font-medium">{row.dLen}</td>
                                        <td className="p-8 text-gray-400 font-medium">{row.dWid} x {row.dHi}</td>
                                        <td className="p-8 text-brand-orange-400 font-black italic">{row.difHi}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    {/* Size list from image text */}
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        {[
                            "3050mm x 280 mm",
                            "3500mm x 650 mm",
                            "4500mm x 600 mm"
                        ].map((s, i) => (
                            <div key={i} className="bg-brand-orange-500/5 border border-brand-orange-500/10 p-8 rounded-3xl">
                                <p className="text-[10px] font-black text-brand-orange-400 uppercase tracking-widest mb-2 font-black leading-none">Standard High Volume Size</p>
                                <p className="text-2xl font-black text-white">{s}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 relative px-6 lg:px-12">
                <div className="container mx-auto">
                    <motion.div
                        className="bg-brand-gradient p-24 lg:p-40 rounded-[100px] text-center shadow-2xl shadow-brand-orange-500/20 relative overflow-hidden"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className="absolute inset-0 bg-grid-white/[0.05] pointer-events-none" />
                        <Sparkles className="h-20 w-20 text-white/30 mx-auto mb-10 animate-pulse" />
                        <h2 className="text-5xl md:text-9xl font-black text-white mb-10 tracking-tighter uppercase leading-none relative z-10">Piped Sunshine</h2>
                        <div className="flex flex-wrap justify-center gap-10 relative z-10">
                            <Link href="/contact" className="block w-full sm:w-auto">
                                <Button size="lg" className="w-full sm:w-auto bg-white text-black hover:bg-black hover:text-white transition-all duration-300 rounded-3xl px-20 py-10 text-xl font-black shadow-2xl uppercase tracking-widest">
                                    Request Technical Audit <ArrowRight className="ml-4 h-8 w-8" />
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    )
}
