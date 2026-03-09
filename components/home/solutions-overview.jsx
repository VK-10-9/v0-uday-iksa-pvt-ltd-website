"use client"

import { motion } from "framer-motion"
import { Sun, Wind, CheckCircle2, Factory, Sparkles, ArrowRight, Building2, Home } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function SolutionsOverview() {
    const features = [
        { title: "Design", description: "Precision engineering tailored to your facility." },
        { title: "Manufacture", description: "In-house production using premium materials." },
        { title: "Installation", description: "Professional, leak-proof deployment." },
        { title: "Implementation", description: "Full system integration and performance verification." },
    ]

    return (
        <section id="solutions" className="py-20 md:py-40 relative bg-slate-950 px-6 lg:px-12 overflow-hidden">
            {/* Background Orbs */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-orange-500/10 rounded-full blur-[140px]" />
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-brand-red-500/10 rounded-full blur-[140px]" />
            </div>

            <div className="container mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-24 items-center">
                    {/* Left Side: Images Grid */}
                    <div className="relative">
                        <div className="grid grid-cols-2 gap-4">
                            <motion.div
                                className="aspect-square relative rounded-[40px] overflow-hidden border-2 border-white/10"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                            >
                                <Image
                                    src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80"
                                    alt="Industrial Interior"
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>
                            <motion.div
                                className="aspect-square relative rounded-full overflow-hidden border-4 border-brand-orange-500/30 scale-110 z-10 -translate-x-4 translate-y-4"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                <Image
                                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80"
                                    alt="Modern Home Skylight"
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>
                            <motion.div
                                className="col-span-2 aspect-[2/1] relative rounded-[40px] overflow-hidden border-2 border-white/10 mt-4"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                            >
                                <Image
                                    src="https://images.unsplash.com/photo-1503387762-592dee58c460?auto=format&fit=crop&q=80"
                                    alt="Modern Construction"
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>
                        </div>

                        {/* Floating Badge */}
                        <motion.div
                            className="absolute -bottom-10 -left-10 bg-white/10 backdrop-blur-2xl border border-white/20 p-8 rounded-[40px] shadow-2xl z-20"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <p className="text-brand-orange-500 font-black text-4xl mb-1 tracking-tighter">15+</p>
                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none">Years Service</p>
                        </motion.div>
                    </div>

                    {/* Right Side: Content */}
                    <div className="space-y-12">
                        <div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="inline-flex items-center gap-3 bg-brand-orange-500/10 border border-brand-orange-500/20 rounded-full px-8 py-2.5 mb-10"
                            >
                                <div className="flex -space-x-2">
                                    <Home className="h-4 w-4 text-brand-orange-500" />
                                    <Building2 className="h-4 w-4 text-brand-orange-500 bg-slate-950 rounded-full" />
                                </div>
                                <span className="text-[10px] font-black text-brand-orange-400 uppercase tracking-[0.4em]">Home & Company Solutions</span>
                            </motion.div>
                            <h2 className="text-4xl md:text-6xl lg:text-8xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-8">
                                Pure Light <br /><span className="brand-gradient-text">Anywhere</span>
                            </h2>
                            <p className="text-lg md:text-2xl text-gray-400 font-medium leading-relaxed max-w-xl">
                                Whether it's a massive factory floor or your favorite reading nook at home—we bring the sun inside.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <motion.div
                                className="col-span-full bg-white/[0.03] border border-white/5 p-10 rounded-[40px] mb-4"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <h4 className="text-brand-orange-500 font-black uppercase tracking-[0.2em] text-[10px] mb-8">How we light your space</h4>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                                    <div className="space-y-4">
                                        <div className="text-white font-black uppercase text-sm tracking-widest flex items-center gap-2">
                                            <span className="bg-brand-orange-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-[10px]">1</span>
                                            Collect
                                        </div>
                                        <div className="text-[11px] text-gray-500 leading-relaxed">
                                            A clear, unbreakable dome on your roof collects the sunlight from every direction.
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="text-white font-black uppercase text-sm tracking-widest flex items-center gap-2">
                                            <span className="bg-brand-orange-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-[10px]">2</span>
                                            Move
                                        </div>
                                        <div className="text-[11px] text-gray-500 leading-relaxed">
                                            A highly reflective pipe moves that light downward—even through your ceiling or attic.
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="text-white font-black uppercase text-xs md:text-sm tracking-widest flex items-center gap-2">
                                            <span className="bg-brand-orange-500 text-white w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center text-[10px]">3</span>
                                            Spread
                                        </div>
                                        <div className="text-[10px] md:text-[11px] text-gray-500 leading-relaxed">
                                            A soft glass panel at the ceiling spreads the light evenly so your whole room glows beautifully.
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {[
                                { title: "No Electricity", description: "Nature provides the light for free—your lights stay off all day, at home or work." },
                                { title: "Pure Comfort", description: "Blocks heat and UV rays—so your space stays cool and your furniture doesn't fade." },
                                { title: "Lifetime Leak-Proof", description: "Precision seals for metal roofs or concrete. Zero rain enters your building." },
                                { title: "Health First", description: "Natural light helps you focus better at work and sleep better at home." },
                            ].map((feature, idx) => (
                                <motion.div
                                    key={idx}
                                    className="flex gap-4 items-start group"
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                >
                                    <div className="bg-brand-orange-500/10 p-2 rounded-xl group-hover:bg-brand-orange-500 transition-colors">
                                        <CheckCircle2 className="h-6 w-6 text-brand-orange-500 group-hover:text-white" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-black uppercase tracking-widest text-sm mb-1">{feature.title}</h4>
                                        <p className="text-gray-500 text-xs leading-relaxed">{feature.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="pt-8">
                            <Link href="/products">
                                <Button size="lg" className="bg-brand-orange-500 text-white hover:bg-white hover:text-black rounded-2xl px-12 py-8 text-sm font-black uppercase tracking-widest shadow-2xl shadow-brand-orange-500/20 transition-all duration-500 flex items-center gap-4 group">
                                    Compare Our Sky Lights <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Local Highlight */}
                <motion.div
                    className="mt-20 md:mt-40 bg-white/[0.03] backdrop-blur-2xl border border-white/5 p-8 md:p-12 lg:p-20 rounded-[40px] md:rounded-[80px] text-center relative group overflow-hidden"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="absolute top-0 right-0 w-96 h-96 bg-brand-amber-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                    <h3 className="text-3xl lg:text-6xl font-black text-white uppercase tracking-tighter mb-8 leading-tight">
                        Built for <span className="brand-gradient-text">Homes & Factories</span>
                    </h3>
                    <p className="text-lg md:text-2xl text-gray-400 font-medium max-w-4xl mx-auto mb-12 px-4">
                        Designed, manufactured, and installed by our experts in Hubballi for businesses and families across India.
                    </p>
                    <Link href="/products">
                        <Button variant="outline" className="border-white/20 text-white hover:bg-brand-orange-500 hover:border-brand-orange-500 rounded-2xl px-12 py-8 text-sm font-black uppercase tracking-widest transition-all">
                            View All Our Systems
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}
