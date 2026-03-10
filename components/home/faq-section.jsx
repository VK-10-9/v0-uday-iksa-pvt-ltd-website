"use client"

import { motion } from "framer-motion"
import { HelpCircle, ChevronDown, Sparkles } from "lucide-react"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function FAQSection() {
    const faqs = [
        {
            question: "Will the light be too bright or cause glare?",
            answer: "Not at all. Our diffuser at the ceiling spreads the light softly and evenly — like a cloudy sky, not direct sunlight. No squinting, no shadows.",
        },
        {
            question: "Does it let in heat along with the light?",
            answer: "No. The dome filters out most of the infrared (heat) and UV rays. Only comfortable, visible light comes through — so your space doesn't get hotter.",
        },
        {
            question: "Will it leak during rains?",
            answer: "We design every installation to be completely leak-proof. We've been doing this for 15+ years — our systems are tested for high-performance weather resilience.",
        },
        {
            question: "Can it reach rooms on lower floors?",
            answer: "Yes! With angled pipes and bends, we can bring daylight down up to 7–8 metres. Even underground rooms and basements are possible.",
        },
        {
            question: "Can I install it on an RCC / concrete roof?",
            answer: "Absolutely. Our NANOSUN RCC model is specifically designed to be built into the slab during construction or retrofitted later.",
        },
        {
            question: "Can it be fixed to a side wall instead of the roof?",
            answer: "Yes — we use 45° and 90° bends to redirect light through a wall if needed.",
        },
        {
            question: "Where all can this be used?",
            answer: "Factories, warehouses, homes, apartments, schools, hospitals, hotels, resorts, offices, airports — essentially any building that has a roof!",
        },
    ]

    return (
        <section id="faq" className="py-40 relative bg-slate-950 px-6 lg:px-12 overflow-hidden">
            {/* Background Atmosphere */}
            <div className="absolute inset-0">
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand-orange-500/5 rounded-full blur-[140px]" />
            </div>

            <div className="container mx-auto relative z-10">
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-8 py-2.5 mb-10 backdrop-blur-md"
                    >
                        <HelpCircle className="h-4 w-4 text-brand-orange-500" />
                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.4em]">Expert Knowledge</span>
                    </motion.div>

                    <h2 className="text-5xl lg:text-7xl font-black text-white uppercase tracking-tighter mb-6 leading-none">
                        Got Questions? <br /><span className="brand-gradient-text">We've Got Answers.</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-medium">
                        Everything you need to know about bringing nature into your building.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <Accordion type="single" collapsible className="space-y-6">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <AccordionItem
                                    value={`item-${index}`}
                                    className="border border-white/5 bg-white/[0.02] rounded-[32px] overflow-hidden px-8 hover:bg-white/[0.04] transition-all"
                                >
                                    <AccordionTrigger className="text-left text-lg font-bold text-white uppercase tracking-tight py-8 hover:no-underline [&[data-state=open]>svg]:rotate-180">
                                        <span className="flex-1 pr-4">{faq.question}</span>
                                    </AccordionTrigger>
                                    <AccordionContent className="text-gray-400 text-base leading-relaxed pb-8 font-medium">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            </motion.div>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    )
}
