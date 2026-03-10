"use client"

import { motion } from "framer-motion"
import { HelpCircle, ChevronDown, Sparkles, Phone, Mail, ArrowRight, Sun, ShieldCheck, Zap, ThermometerSnowflake, Hammer, BarChart3, Wind, Shield } from "lucide-react"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Link from "next/link"


export default function FAQPage() {
    const faqCategories = [
        {
            id: "basics",
            title: "The Basics",
            icon: <Sun className="h-6 w-6 text-brand-orange-500" />,
            faqs: [
                {
                    question: "What exactly is natural daylighting?",
                    answer: "It's a system that captures sunlight from your roof using a clear dome, channels it down through a reflective pipe, and spreads it inside your room through a diffuser panel — all without electricity. During the day, your space is lit entirely by the sun. No switches, no bills, no bulbs.",
                },
                {
                    question: "How is this different from a regular window or skylight?",
                    answer: "A regular window or skylight brings in direct sunlight — which also brings in heat and UV rays, causing discomfort and fading. Our NANOSUN™ system filters out UV and most of the heat, so only comfortable, visible light enters. Also, it works for interior rooms that have no wall access to the outside — corridors, bathrooms, warehouses — where a window simply isn't possible.",
                },
                {
                    question: "Does it work on cloudy or rainy days?",
                    answer: "Yes — though the output is lower. The dome captures ambient daylight from the sky, not just direct sunlight. So even on an overcast day, it still brings usable natural light into your space. On a clear sunny day, output is at its brightest.",
                },
                {
                    question: "Does it work at night?",
                    answer: "No — it runs entirely on natural daylight, so it only works from sunrise to sunset. For night time you'll still need your regular lights. Some customers add an LED backup fitting inside the same diffuser panel — ask our team about hybrid options.",
                },
            ],
        },
        {
            id: "safety",
            title: "Heat, Light & Safety",
            icon: <ThermometerSnowflake className="h-6 w-6 text-brand-orange-500" />,
            faqs: [
                {
                    question: "Will the light be too bright or cause glare?",
                    answer: "Not at all. The diffuser panel at ceiling level is designed to spread light softly and evenly — like the light on a bright cloudy day, not harsh direct sunlight. No squinting, no hot spots, no shadows.",
                },
                {
                    question: "Does it let in heat along with the light?",
                    answer: "No. The dome filters out most infrared (heat) radiation before it enters the pipe. Only visible light comes through. Your room will not get hotter because of the NANOSUN™ — in fact, since you're replacing hot electric lights with zero-heat natural light, many customers find their spaces slightly cooler.",
                },
                {
                    question: "Does it let in UV rays? Will it fade my furniture or flooring?",
                    answer: "No. The optical polycarbonate dome blocks all wavelengths below 385 nanometres — that covers the UV range that causes fading and skin damage. Your furniture, fabrics, and flooring are safe.",
                },
                {
                    question: "Is the dome material fire safe?",
                    answer: "Yes. The dome is made from flame retardant (FR-rated) optical polycarbonate — it meets fire safety standards and is suitable for industrial, commercial, and residential use.",
                },
            ],
        },
        {
            id: "installation",
            title: "Installation & Compatibility",
            icon: <Hammer className="h-6 w-6 text-brand-orange-500" />,
            faqs: [
                {
                    question: "Will it leak during rains or the monsoon?",
                    answer: "No. Every unit is designed with a pre-moulded flanged dome — no joints, no gaps. The base plate is sealed to your roof surface. We've been installing these systems for 15+ years in various environments. Leak-proof performance is non-negotiable for us.",
                },
                {
                    question: "Can it be installed on my type of roof?",
                    answer: "Most likely yes. We have models for Metal / PEB sheet roofs (NANOSUN™ PEB), Flat concrete (RCC) slabs (NANOSUN™ RCC), and Mangalore or modern tile roofs (NANOSUN™ Tiles). If you're unsure, just call us or book a site visit — we'll assess your roof and recommend the right product.",
                },
                {
                    question: "Can it be installed on an existing building or only during construction?",
                    answer: "Both. New construction is ideal — especially for RCC roofs where the unit can be cast into the slab. But retrofitting into existing buildings is very common and straightforward. Our installation team handles the cutting, sealing, and finishing cleanly.",
                },
                {
                    question: "Can it reach rooms on lower floors — not just the top floor?",
                    answer: "Yes! Using extended reflector pipes and angled bends, we can bring daylight down up to 7–8 metres from the roof. So a room on the second floor of a three-storey building can still get natural light from the terrace. We assess the routing during our site visit.",
                },
                {
                    question: "Can it be fixed to a side wall instead of the roof?",
                    answer: "Yes — using 45° or 90° bends in the reflector pipe, we can redirect the light horizontally to reach a side wall opening. This is used in specific situations where roof access is limited. Our team will evaluate during the site visit.",
                },
                {
                    question: "I have a false ceiling (POP / gypsum). Will it still work?",
                    answer: "Yes. Our standard systems can be integrated with false ceilings. The reflector pipe passes through the false ceiling cavity and the diffuser panel sits flush with your finished ceiling — it looks exactly like a premium recessed light fitting. No pipes visible inside the room.",
                },
            ],
        },
        {
            id: "performance",
            title: "Performance & Output",
            icon: <BarChart3 className="h-6 w-6 text-brand-orange-500" />,
            faqs: [
                {
                    question: "How bright will it be inside?",
                    answer: "Output depends on the size of the unit and your roof height. Typically: Smaller units (200–400mm) provide 100–300 Lux — comfortable for corridors, storage, bathrooms. Mid-size units (530–750mm) provide 150–400 Lux — good for offices, classrooms, living rooms. Large units (900–1200mm) provide up to 400 Lux — bright enough for factory floors and large halls. For reference, a well-lit office is typically 300–500 Lux. Our larger units can match that entirely with zero electricity.",
                },
                {
                    question: "How much area does one unit cover?",
                    answer: "It varies by size: 300mm covers 150–200 sq ft, 400mm covers 300–500 sq ft, 530mm covers 500–800 sq ft, and 750mm covers 600–1000 sq ft. For large spaces, multiple units are installed — our team will calculate the right number and layout for your floor area.",
                },
                {
                    question: "How much can I save on electricity?",
                    answer: "For spaces that run lights all day (factories, warehouses, offices, schools), our customers typically see 30–40% reduction in daytime lighting costs. For a factory running 50–100 tube lights during the day, the savings add up very quickly. We can estimate your specific savings during the consultation.",
                },
            ],
        },
        {
            id: "ventilation",
            title: "Ventilation (NANOVENT®)",
            icon: <Wind className="h-6 w-6 text-brand-orange-500" />,
            faqs: [
                {
                    question: "How does natural ventilation work without a fan or motor?",
                    answer: "Hot air naturally rises. The NANOVENT® Turbo Ventilator sits on your roof and uses this rising hot air — combined with wind pressure — to continuously pull stale, hot air out of your building. As hot air exits from the top, fresh cooler air is drawn in from the sides. It works 24 hours a day, 365 days a year, with zero electricity.",
                },
                {
                    question: "Will it make noise?",
                    answer: "No. The NANOVENT® uses double bearings and a precision-balanced turbine head — it rotates silently. Many customers don't even notice it's running.",
                },
                {
                    question: "Does it work when there's no wind?",
                    answer: "Yes. Even without wind, the stack effect (hot air rising) keeps the ventilator turning. Wind makes it faster and more effective, but it's never completely still.",
                },
            ],
        },
        {
            id: "maintenance",
            title: "Maintenance & Warranty",
            icon: <Shield className="h-6 w-6 text-brand-orange-500" />,
            faqs: [
                {
                    question: "How much maintenance does it need?",
                    answer: "Very little. There are no moving parts in the daylighting units — no bulbs to replace, no wiring to maintain. An occasional wipe of the dome exterior (like cleaning a window) is all that's needed. The NANOVENT® ventilator has bearings that may need checking every few years.",
                },
                {
                    question: "What is the warranty?",
                    answer: "All our products come with a manufacturer's warranty. The NANOVENT® Turbo Ventilator carries a 1-year warranty on bearings and components. For daylighting products, speak to our team about warranty terms specific to your installation — they vary by product and size.",
                },
                {
                    question: "How long do the products last?",
                    answer: "Our installations from 10–15 years ago are still performing well. The optical polycarbonate dome has UV-stabilised coating on both sides, and the aluminium reflector is designed for long-term performance without degradation. With basic care, these systems are built to last the lifetime of your building.",
                },
            ],
        },
        {
            id: "process",
            title: "Process & Next Steps",
            icon: <ArrowRight className="h-6 w-6 text-brand-orange-500" />,
            faqs: [
                {
                    question: "How do I know which product and size is right for my building?",
                    answer: "The easiest way is to call us or fill in the enquiry form. Tell us your roof type, building size, and what you're trying to solve — and our team will recommend the right product, size, and number of units. We also do free site assessments for larger projects.",
                },
                {
                    question: "How long does installation take?",
                    answer: "For a typical installation of 1–5 units, our expert team usually completes the job in 1–2 days. Larger projects (factories, warehouses with 20–50+ units) may take longer — we'll give you a clear timeline upfront.",
                },
                {
                    question: "Do you install across all of India?",
                    answer: "Yes. We have installed across 50+ cities in India — from Karnataka and Maharashtra to Delhi, Chennai, Mumbai, and beyond. Our installation team travels to your site.",
                },
                {
                    question: "Is there a minimum order?",
                    answer: "No minimum for most products. Whether you need 1 unit for your home or 100 units for a factory, we handle it. For NANOVENT® Suspensor Ventilation Systems, a minimum of 50 units applies for certain configurations — our team will clarify.",
                },
            ],
        },
    ]

    return (
        <main className="pt-32 pb-20 bg-slate-950 overflow-hidden min-h-screen">
            {/* Background Atmosphere */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-orange-500/5 rounded-full blur-[140px]" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-red-500/5 rounded-full blur-[140px]" />
            </div>

            <div className="container mx-auto relative z-10 px-6 lg:px-12">
                {/* Page Header */}
                <div className="text-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-8 py-2.5 mb-10 backdrop-blur-md"
                    >
                        <HelpCircle className="h-4 w-4 text-brand-orange-500" />
                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.4em]">Expert Knowledge</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl lg:text-8xl font-black text-white uppercase tracking-tighter mb-8 leading-none"
                    >
                        Got Questions? <br /><span className="brand-gradient-text">We've Got Answers.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-medium px-4"
                    >
                        15+ years of installations means we've heard every question. Here are the most common ones — answered honestly and in plain language.
                    </motion.p>
                </div>

                {/* FAQ Content by Categories */}
                <div className="max-w-4xl mx-auto space-y-24">
                    {faqCategories.map((category, catIdx) => (
                        <div key={category.id} id={category.id} className="space-y-10">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="flex items-center gap-6 border-b border-white/10 pb-6"
                            >
                                <div className="p-4 bg-brand-orange-500/10 rounded-2xl border border-brand-orange-500/20">
                                    {category.icon}
                                </div>
                                <h2 className="text-2xl md:text-5xl font-black text-white uppercase tracking-tighter">
                                    {category.title}
                                </h2>
                            </motion.div>

                            <div className="space-y-4">
                                <Accordion type="single" collapsible className="space-y-4">
                                    {category.faqs.map((faq, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.05 }}
                                        >
                                            <AccordionItem
                                                value={`item-${catIdx}-${index}`}
                                                className="border border-white/5 bg-white/[0.02] rounded-[24px] md:rounded-[32px] overflow-hidden px-6 md:px-8 hover:bg-white/[0.04] transition-all group"
                                            >
                                                <AccordionTrigger className="text-left text-base md:text-xl font-bold text-white uppercase tracking-tight py-6 md:py-8 hover:no-underline [&[data-state=open]>svg]:rotate-180">
                                                    <span className="flex-1 pr-4 group-hover:text-brand-orange-400 transition-colors">{faq.question}</span>
                                                </AccordionTrigger>
                                                <AccordionContent className="text-gray-400 text-sm md:text-lg leading-relaxed pb-6 md:pb-8 font-medium">
                                                    {faq.answer}
                                                </AccordionContent>
                                            </AccordionItem>
                                        </motion.div>
                                    ))}
                                </Accordion>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Still Have a Question Section */}
                <section className="mt-40 pt-20 border-t border-white/10">
                    <div className="bg-brand-mesh p-10 md:p-24 rounded-[40px] md:rounded-[60px] relative overflow-hidden text-center">
                        <div className="absolute inset-0 bg-brand-orange-500/10 backdrop-blur-3xl" />
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-7xl font-black text-white uppercase tracking-tighter mb-8 leading-none">
                                Didn't Find <br /><span className="text-brand-orange-500">Your Answer?</span>
                            </h2>
                            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12 md:mb-16 font-medium px-4">
                                Call us directly — our team is available Monday to Saturday, 9am to 6pm. We're happy to answer any question about your specific building, roof type, or requirement.
                            </p>

                            <div className="flex flex-wrap justify-center gap-6">
                                <a href="tel:+918792182631" className="w-full sm:w-auto">
                                    <Button size="lg" className="w-full bg-white text-black hover:bg-brand-orange-500 hover:text-white rounded-[24px] px-8 md:px-12 py-6 md:py-8 text-base md:text-lg font-black uppercase tracking-widest shadow-2xl transition-all h-16 md:h-20">
                                        <Phone className="mr-3 h-5 w-5 md:h-6 md:w-6" /> Call +91 8792182631
                                    </Button>
                                </a>
                                <Link href="/contact" className="w-full sm:w-auto">
                                    <Button size="lg" className="w-full bg-transparent border-2 border-white/20 hover:border-brand-orange-500 text-white hover:bg-white/5 rounded-[24px] px-8 md:px-12 py-6 md:py-8 text-base md:text-lg font-black uppercase tracking-widest transition-all h-16 md:h-20">
                                        <Mail className="mr-3 h-5 w-5 md:h-6 md:w-6" /> Send Message
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div className="mt-20">

            </div>
        </main>
    )
}
