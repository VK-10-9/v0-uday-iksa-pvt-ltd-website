"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sun, ShieldCheck, Zap, Sparkles, CheckCircle2, Lightbulb, Minimize, Layers, Baby, Home, School, Building, DoorOpen } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { HoverButton } from "@/components/ui/hover-button"

export default function SkytubePage() {
    const coreFeatures = [
        {
            title: "Sun-Tube Channelling",
            subtitle: "The Pipe That Moves Light",
            description: "Uses 99.7% spectral mirror coating to move sunlight from your roof deep into your room. Think of it as a mirror tunnel for the sun.",
            icon: Lightbulb,
            points: ["99.7% Reflectivity", "Rigid or Flexible Pipes", "Works Around Obstacles"]
        },
        {
            title: "Fits Anywhere",
            subtitle: "No Windows? No Problem",
            description: "Designed for small spaces where standard skylights can't fit. Perfect for hallways, toilets, kitchens, and interior office cubicles.",
            icon: Minimize,
            points: ["Fits Tight Voids", "Zero Roof Structure Changes", "Sleek Ceiling Finish"]
        },
        {
            title: "Pure Spectrum Light",
            subtitle: "Healthy, No Heat",
            description: "Only the comfortable visible light is delivered. Harmful UV and infrared heat are filtered and reflected back out at the roof level.",
            icon: Sun,
            points: ["Full Spectrum Daylight", "Blocks 99% UV Damage", "No Glare or IR Heat"]
        }
    ]

    const applications = [
        { name: "Bathrooms", icon: Baby, desc: "A naturally bright, germ-free bathroom without a single window." },
        { name: "Dark Hallways", icon: DoorOpen, desc: "Light up the heart of your home without expensive electrical work." },
        { name: "Interior Cabins", icon: Building, desc: "No more windowless offices. Give every employee a piece of the sun." },
        { name: "Walk-in Closets", icon: Layers, desc: "See your clothes in perfect, natural color with sunlight pipes." },
    ]

    return (
        <main className="pt-24 bg-slate-950">
            {/* Hero Section */}
            <section className="relative py-40 overflow-hidden px-6 lg:px-12">
                <div className="absolute inset-0 bg-brand-orange-500/5 blur-[120px] rounded-full transform translate-y-1/2" />
                <div className="container mx-auto relative z-10">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
                            <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-8 py-2.5 mb-10 backdrop-blur-md">
                                <Zap className="h-4 w-4 text-brand-orange-400" />
                                <h2 className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none">Natural Light Pipes (SKYTUBE)</h2>
                            </div>
                            <h1 className="text-5xl md:text-8xl font-black text-white mb-10 tracking-tighter uppercase leading-[0.9]">
                                Sunlight for <br /> <span className="brand-gradient-text">Windowless Rooms</span>
                            </h1>
                            <p className="text-xl text-gray-400 mb-16 leading-relaxed max-w-2xl font-medium">
                                Bring pure, natural light into your darkest rooms — <span className="text-white font-bold">even if they don't have windows</span>. A tubular system that 'pipes' the sun from your roof straight into your home or office.
                            </p>
                            <div className="flex flex-wrap gap-6">
                                <Link href="/contact">
                                    <HoverButton className="bg-white text-black hover:bg-brand-orange-500 hover:text-white rounded-2xl px-16 py-8 text-sm font-black uppercase tracking-widest shadow-2xl transition-all">
                                        Brighten My Home <ArrowRight className="ml-3 h-5 w-5" />
                                    </HoverButton>
                                </Link>
                                <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-8 py-4 backdrop-blur-md">
                                    <Home className="h-5 w-5 text-brand-orange-400" />
                                    <span className="text-[10px] font-black text-white uppercase tracking-widest">A Sun-Lamp for Your Hallway</span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="relative h-[650px] rounded-[80px] overflow-hidden border border-white/10 shadow-3xl group"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <Image
                                src="/images/skytube-structural.png"
                                alt="SKYTUBE Installation"
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                            <div className="absolute bottom-12 left-12 right-12">
                                <div className="bg-white/5 backdrop-blur-3xl border border-white/10 p-10 rounded-[48px]">
                                    <p className="text-3xl font-black text-white uppercase tracking-tighter mb-2">Piped Sunshine</p>
                                    <p className="text-gray-400 text-sm font-medium">Delivering full-spectrum sunlight into deep interior voids with 99.7% efficiency.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Application Highlights */}
            <section className="py-40 relative px-6 lg:px-12 bg-slate-900/30">
                <div className="container mx-auto">
                    <div className="text-center mb-32">
                        <h2 className="text-4xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter leading-none">Pipes of <span className="brand-gradient-text">Life</span></h2>
                        <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium">Where windows are impossible, SKYTUBE creates a window into the sky.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {applications.map((app, i) => (
                            <motion.div
                                key={i}
                                className="bg-white/[0.03] border border-white/5 p-12 rounded-[50px] hover:bg-white/[0.05] transition-all group"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <div className="w-16 h-16 rounded-2xl bg-brand-orange-500/10 flex items-center justify-center mb-8 group-hover:bg-brand-orange-500 transition-colors">
                                    <app.icon className="h-8 w-8 text-brand-orange-500 group-hover:text-white" />
                                </div>
                                <h4 className="text-white font-black text-2xl uppercase tracking-tighter mb-4">{app.name}</h4>
                                <p className="text-gray-500 text-sm font-medium leading-relaxed">{app.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-40 relative px-6 lg:px-12 bg-slate-950/50">
                <div className="container mx-auto">
                    <div className="text-center mb-32">
                        <h2 className="text-4xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter leading-none">The Science <span className="brand-gradient-text">of Mirrors</span></h2>
                        <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium">How we move light across three floors and around obstacles with zero power consumption.</p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-10">
                        {coreFeatures.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                className="bg-white/[0.03] border border-white/5 p-12 rounded-[60px] hover:bg-white/[0.05] transition-all group"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                            >
                                <div className="bg-brand-orange-500/10 w-20 h-20 rounded-3xl flex items-center justify-center mb-10 group-hover:bg-brand-orange-500 group-hover:rotate-6 transition-all duration-500">
                                    <feature.icon className="h-10 w-10 text-brand-orange-500 group-hover:text-white" />
                                </div>
                                <h3 className="text-[10px] font-black text-brand-orange-500 uppercase tracking-widest mb-4 leading-none">{feature.subtitle}</h3>
                                <h4 className="text-3xl font-black text-white uppercase tracking-tighter mb-8 leading-none">{feature.title}</h4>
                                <p className="text-gray-400 mb-10 text-sm leading-relaxed font-medium">{feature.description}</p>
                                <div className="space-y-4 pt-10 border-t border-white/5">
                                    {feature.points.map((point, i) => (
                                        <div key={i} className="flex items-center gap-3 text-xs font-black text-gray-500 uppercase tracking-widest">
                                            <CheckCircle2 className="h-4 w-4 text-brand-orange-500" />
                                            {point}
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Engineering CTA Section */}
            <section className="py-20 relative px-6 lg:px-12 bg-slate-950">
                <div className="container mx-auto text-center">
                    <motion.div
                        className="bg-brand-gradient p-24 lg:p-40 rounded-[100px] shadow-2xl shadow-brand-orange-500/20 relative overflow-hidden"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className="absolute inset-0 bg-grid-white/[0.05] pointer-events-none" />
                        <Sparkles className="h-20 w-20 text-white/30 mx-auto mb-10 animate-pulse" />
                        <h2 className="text-5xl md:text-9xl font-black text-white mb-10 tracking-tighter uppercase leading-none relative z-10">Illuminate The Core</h2>
                        <p className="text-xl text-white/90 max-w-3xl mx-auto mb-16 leading-relaxed relative z-10 font-bold uppercase tracking-widest text-sm opacity-90 font-medium">
                            Join 500+ homes and businesses using sunlight pipes. <br />Every room deserves to see the sun.
                        </p>
                        <Link href="/contact" className="block relative z-10">
                            <Button size="lg" className="bg-white text-black hover:bg-black hover:text-white transition-all duration-300 rounded-3xl px-20 py-10 text-xl font-black shadow-2xl uppercase tracking-widest">
                                Brighten My Rooms Now <ArrowRight className="ml-4 h-8 w-8" />
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </main>
    )
}
