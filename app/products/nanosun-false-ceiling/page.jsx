"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sun, ShieldCheck, Sparkles, CheckCircle2, Layers, Lightbulb, CircleDot, Home, Building, Hotel, School, ShoppingBag, Stethoscope, Phone, HelpCircle } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { HoverButton } from "@/components/ui/hover-button"

export default function NanosunFalseCeilingPage() {

    const howItWorks = [
        {
            step: "01",
            title: "Dome Captures Daylight",
            subtitle: "On Your Roof",
            description: "An optical dome on your roof captures ambient daylight — even on overcast days. Same proven technology used across all NANOSUN products.",
            icon: Sun,
            image: "/images/products/nanosun/PEB MODEL.png",
        },
        {
            step: "02",
            title: "Extended Reflector Pipe",
            subtitle: "Through the Cavity",
            description: "The reflector pipe extends through the false ceiling cavity — the gap between your RCC slab and the POP/gypsum false ceiling below. Uses 45° and 90° bends to navigate around obstacles.",
            icon: Layers,
            image: "/images/products/nanosun/Skypipe installation at Tata Motors Lucknow.jpg",
        },
        {
            step: "03",
            title: "Flush Diffuser Panel",
            subtitle: "At False Ceiling Level",
            description: "A clean, round frosted diffuser sits flush with your false ceiling. During the day, it glows softly with natural light — exactly like a premium recessed light fitting, but powered entirely by the sun.",
            icon: CircleDot,
            image: "/images/gallery/nanosun/Gujarat Berger Paints India Ltd.6.jpeg",
        },
    ]

    const applications = [
        { name: "Homes with POP Ceilings", icon: Home, desc: "Living rooms, master bedrooms, kitchens, bathrooms — natural light without disturbing the false ceiling design." },
        { name: "Corporate Offices", icon: Building, desc: "Meeting rooms, cabins, open work areas — reduce artificial lighting, improve employee well-being." },
        { name: "Hotels", icon: Hotel, desc: "Guest rooms, corridors, reception areas — a luxury experience powered by sunlight." },
        { name: "Hospitals", icon: Stethoscope, desc: "Patient rooms, waiting areas, corridors — natural light that aids recovery and comfort." },
        { name: "Schools", icon: School, desc: "Classrooms with false ceiling finishes — healthier learning under natural light." },
        { name: "Retail & Showrooms", icon: ShoppingBag, desc: "Display areas that need bright, flattering natural light to showcase products." },
    ]

    const keyBenefits = [
        "Works with any false ceiling type — POP, gypsum, metal grid",
        "Reaches up to 7–8 metres deep from roof to ceiling",
        "Diffuser sits flush — looks like part of the ceiling design",
        "Zero electricity during daytime",
        "UV and heat filtered — no damage to false ceiling material",
        "No visible pipes or fittings inside the room",
        "Can be retrofitted in finished rooms with minimal ceiling cutting",
    ]

    const faqs = [
        {
            question: "Will it look out of place in my false ceiling?",
            answer: "Not at all. The diffuser panel is designed to sit flush and clean within the false ceiling grid. It looks like a premium architectural fitting — most people assume it's an expensive LED panel until they realise it's actually sunlight.",
        },
        {
            question: "What if the room isn't directly below the roof?",
            answer: "We use 45° or 90° angled bends in the reflector pipe to redirect the light horizontally if needed. Our team will assess your layout and design the routing during the site visit.",
        },
        {
            question: "Can I add an LED backup for nighttime?",
            answer: "Yes — ask our team about hybrid units that include an LED fitting in the same panel for nighttime use. Same clean ceiling look, 24-hour lighting.",
        },
    ]

    return (
        <main className="pt-24 bg-slate-950">
            {/* Hero Section */}
            <section className="relative py-40 overflow-hidden px-6 lg:px-12">
                <div className="absolute inset-0 bg-brand-orange-500/5 blur-[120px] rounded-full transform -translate-y-1/2" />
                <div className="container mx-auto relative z-10">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
                            <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-8 py-2.5 mb-10 backdrop-blur-md">
                                <Lightbulb className="h-4 w-4 text-brand-orange-400" />
                                <h2 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">False Ceiling Daylight (NANOSUN)</h2>
                            </div>
                            <h1 className="text-5xl md:text-8xl font-black text-white mb-10 tracking-tighter uppercase leading-[0.9]">
                                NANOSUN™ <br /> <span className="brand-gradient-text">False Ceiling</span>
                            </h1>
                            <p className="text-xl text-gray-400 mb-8 leading-relaxed max-w-2xl font-medium">
                                Your Room Has a False Ceiling. <span className="text-white font-bold">Natural Light Can Still Reach It.</span>
                            </p>
                            <p className="text-lg text-gray-500 mb-16 leading-relaxed max-w-2xl">
                                Most people assume that if a room has a false ceiling — POP, gypsum, or any kind of dropped ceiling — natural daylighting won&apos;t work. That&apos;s not true. This model brings natural sunlight from your roof, through the slab-to-ceiling gap, and diffuses it beautifully at the finished ceiling level. No visible pipes. No awkward penetrations. Just a clean light panel that glows with sunshine.
                            </p>
                            <div className="flex flex-wrap gap-6">
                                <Link href="/contact">
                                    <HoverButton className="bg-white text-black hover:bg-brand-orange-500 hover:text-white rounded-2xl px-16 py-8 text-sm font-black uppercase tracking-widest shadow-2xl transition-all">
                                        Book a Free Site Visit <ArrowRight className="ml-3 h-5 w-5" />
                                    </HoverButton>
                                </Link>
                                <a href="tel:+918792182631" className="px-16 py-8 border-2 border-white/10 hover:border-brand-orange-500/50 text-white transition-all duration-300 rounded-2xl text-[10px] font-black uppercase tracking-widest backdrop-blur-md flex items-center gap-3">
                                    <Phone className="h-4 w-4" /> +91 8792182631
                                </a>
                            </div>
                        </motion.div>

                        <motion.div
                            className="relative p-12 md:p-20 rounded-[80px] border border-white/10 bg-white/[0.02] shadow-3xl flex items-center justify-center overflow-hidden group"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <div className="absolute inset-0 bg-brand-orange-500/5 group-hover:bg-brand-orange-500/10 transition-colors" />
                            <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] group-hover:opacity-[0.04] transition-opacity">
                                <p className="text-[180px] font-black uppercase tracking-tighter select-none -rotate-12">CEILING</p>
                            </div>
                            <div className="relative z-10 text-center">
                                <Lightbulb className="h-32 w-32 text-brand-orange-400/20 mb-10 mx-auto group-hover:scale-110 transition-transform duration-700" />
                                <div className="bg-white/5 backdrop-blur-3xl border border-white/10 p-10 rounded-[48px]">
                                    <p className="text-3xl font-black text-white uppercase tracking-tighter mb-2">Flush Ceiling Light</p>
                                    <p className="text-gray-400 text-sm font-medium">Looks like a premium LED panel — but it&apos;s actually pure sunlight.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* How Does It Reach the False Ceiling */}
            <section className="py-40 relative px-6 lg:px-12 bg-slate-950/50">
                <div className="container mx-auto">
                    <div className="text-center mb-32">
                        <h2 className="text-4xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter leading-none">How Does It Reach the <span className="brand-gradient-text">False Ceiling?</span></h2>
                        <p className="text-xl text-gray-500 max-w-3xl mx-auto font-medium">Standard daylighting stops at the RCC slab. This model uses an extended reflector pipe that passes through the false ceiling cavity, ending in a flush diffuser at the finished ceiling level.</p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-10">
                        {howItWorks.map((step, idx) => (
                            <motion.div
                                key={idx}
                                className="bg-white/[0.02] border border-white/5 rounded-[40px] hover:border-brand-orange-500/20 transition-all group relative overflow-hidden flex flex-col shadow-2xl"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                            >
                                <div className="relative h-64 w-full bg-slate-900 border-b border-white/5 overflow-hidden">
                                    <Image 
                                        src={step.image} 
                                        alt={step.title}
                                        fill
                                        className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 grayscale-[0.3] group-hover:grayscale-0"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                                    <div className="absolute top-6 right-6 text-6xl font-black text-white/50 leading-none uppercase z-10">{step.step}</div>
                                    <div className="absolute top-6 left-6 bg-brand-orange-500 w-16 h-16 rounded-[16px] flex items-center justify-center shadow-lg shadow-brand-orange-500/20 z-10">
                                        <step.icon className="h-8 w-8 text-white" />
                                    </div>
                                </div>

                                <div className="p-10 flex-1 flex flex-col pb-12">
                                    <h3 className="text-[10px] font-black text-brand-orange-500 uppercase tracking-widest mb-4 leading-none">Step {step.step} — {step.subtitle}</h3>
                                    <h4 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter mb-5 border-l-2 border-brand-orange-500 pl-4 leading-none">{step.title}</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed font-medium flex-1">{step.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Depth highlights */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
                        {[
                            { label: "Maximum Depth", value: "Up to 7–8 metres", desc: "From roof to false ceiling level" },
                            { label: "Bend Options", value: "45° and 90° bends", desc: "Works even if room isn't directly below" },
                            { label: "Ceiling Finish", value: "Flush diffuser panel", desc: "Looks like a premium recessed light" },
                        ].map((stat, i) => (
                            <div key={i} className="bg-brand-orange-500/10 border border-brand-orange-500/30 p-10 rounded-[32px] text-center">
                                <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-3">{stat.label}</p>
                                <p className="text-3xl font-black text-brand-orange-400 mb-2">{stat.value}</p>
                                <p className="text-xs text-gray-500 font-medium">{stat.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What It Looks Like From Inside */}
            <section className="py-40 relative px-6 lg:px-12 bg-slate-900/30">
                <div className="container mx-auto">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <div className="relative p-12 md:p-16 rounded-[60px] border border-white/10 bg-slate-900 shadow-2xl shadow-brand-orange-500/10 flex items-center justify-center group">
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-orange-500/10 via-transparent to-transparent opacity-50" />
                            <div className="relative z-10 text-center">
                                <CircleDot className="h-24 w-24 text-brand-orange-500/30 mb-8 mx-auto group-hover:scale-110 transition-transform duration-700" />
                                <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-10 rounded-[40px]">
                                    <p className="text-3xl font-black text-white uppercase tracking-tighter mb-4">From Inside</p>
                                    <p className="text-gray-400 font-medium">A clean, round frosted panel that glows with natural sunshine.</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-4xl md:text-6xl font-black text-white mb-10 uppercase tracking-tighter leading-tight">What It Looks Like <br /><span className="brand-gradient-text">From Inside</span></h2>
                            <p className="text-xl text-gray-400 mb-8 leading-relaxed font-medium">
                                From inside the room, you see a clean, round frosted panel set into your false ceiling. During the day, it glows softly with natural light — exactly like a light fitting, but powered entirely by the sun.
                            </p>
                            <p className="text-lg text-gray-500 mb-12 leading-relaxed">
                                At night, it goes dark — or you can pair it with an LED backup fitting in the same panel for night use. Same clean ceiling look, 24-hour lighting.
                            </p>
                            <div className="space-y-4">
                                {[
                                    "Looks like a premium LED panel — until you realise it's sunlight",
                                    "No visible pipes, tubes, or fittings inside the room",
                                    "LED hybrid option available for nighttime use",
                                ].map((point, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-brand-orange-500 shrink-0" />
                                        <span className="text-sm font-bold text-gray-300">{point}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Where Is It Used */}
            <section className="py-40 relative px-6 lg:px-12 bg-slate-950/50">
                <div className="container mx-auto">
                    <div className="text-center mb-32">
                        <h2 className="text-4xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter leading-none">Where Is It <span className="brand-gradient-text">Used?</span></h2>
                        <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium">Any space with a false ceiling can benefit from natural daylighting — you just need the right system.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
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

            {/* Key Benefits */}
            <section className="py-20 bg-slate-950 border-y border-white/5">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">Key <span className="brand-gradient-text">Benefits</span></h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {keyBenefits.map((benefit, i) => (
                            <div key={i} className="flex items-start gap-4 bg-white/[0.03] border border-white/5 p-8 rounded-3xl">
                                <CheckCircle2 className="h-5 w-5 text-brand-orange-500 mt-0.5 shrink-0" />
                                <span className="text-sm font-bold text-gray-300 leading-relaxed">{benefit}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Common Questions */}
            <section className="py-40 relative px-6 lg:px-12 bg-slate-900/20">
                <div className="container mx-auto max-w-4xl">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4">Common <span className="brand-gradient-text">Questions</span></h2>
                    </div>
                    <div className="space-y-8">
                        {faqs.map((faq, i) => (
                            <motion.div
                                key={i}
                                className="bg-white/[0.03] border border-white/5 p-10 rounded-[40px]"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <div className="flex items-start gap-5">
                                    <HelpCircle className="h-6 w-6 text-brand-orange-500 mt-1 shrink-0" />
                                    <div>
                                        <h4 className="text-xl font-black text-white mb-4">{faq.question}</h4>
                                        <p className="text-gray-400 text-sm leading-relaxed font-medium">{faq.answer}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-40 relative px-6 lg:px-12 bg-slate-950 border-t border-white/5">
                <div className="container mx-auto">
                    <motion.div
                        className="bg-brand-gradient p-24 lg:p-40 rounded-[100px] text-center shadow-2xl shadow-brand-orange-500/20 relative overflow-hidden"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className="absolute inset-0 bg-grid-white/[0.05] pointer-events-none" />
                        <Sparkles className="h-20 w-20 text-white/30 mx-auto mb-10 animate-pulse" />
                        <h2 className="text-4xl md:text-7xl font-black text-white mb-10 tracking-tighter uppercase leading-tight relative z-10">Have a False Ceiling?</h2>
                        <p className="text-white/90 max-w-3xl mx-auto mb-16 leading-relaxed relative z-10 font-bold uppercase tracking-widest text-sm opacity-90 font-medium">
                            This is more common than you&apos;d think — and we&apos;ve done it hundreds of times. Share your ceiling height, roof type, and room layout, and we&apos;ll show you exactly how it can work.
                        </p>
                        <div className="flex flex-wrap justify-center gap-10 relative z-10">
                            <Link href="/contact" className="block">
                                <Button size="lg" className="bg-white text-black hover:bg-black hover:text-white transition-all duration-300 rounded-3xl px-20 py-10 text-xl font-black shadow-2xl shadow-white/10 uppercase tracking-widest">
                                    Book a Free Site Visit <ArrowRight className="ml-4 h-8 w-8" />
                                </Button>
                            </Link>
                            <a href="tel:+918792182631">
                                <Button size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white hover:text-black transition-all duration-300 rounded-3xl px-20 py-10 text-xl font-black uppercase tracking-widest">
                                    <Phone className="mr-4 h-8 w-8" /> Call Us
                                </Button>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    )
}
