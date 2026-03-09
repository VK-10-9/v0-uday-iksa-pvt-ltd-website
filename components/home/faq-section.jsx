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
            question: "What is Nano Sun day light harvesting?",
            answer: "The Nano Sun Circular Daylight PEB model from Udayiksa Pvt Ltd is the most efficient natural daylighting system in the market today. It collects ambient visible daylight using an optical dome, which reflects the light into a highly reflective circular pipe. The daylight is then diffused evenly throughout the space using an optical diffuser.",
        },
        {
            question: "Where is day light application used?",
            answer: "Day light can be used in various applications like Residential buildings, Apartments, Industries, Schools, Hospitals, and commercial warehouses.",
        },
        {
            question: "Can day lighting be brought at POP/False ceiling level?",
            answer: "Yes, our highly reflective tubes can bring natural light down up to 7-8 meters from the roof level to the false ceiling level without significant loss of intensity.",
        },
        {
            question: "Is it possible to fix day lighting on side walls?",
            answer: "Yes, we can fix it using 45/90 degree bends to redirect natural light from side walls into the interior spaces.",
        },
        {
            question: "Does it transmit heat along with light?",
            answer: "No, our systems are designed to harvest only visible light while filtering out UV and IR rays, providing cool, natural illumination without increasing the building's heat load.",
        },
        {
            question: "Is it possible to fix on RCC building?",
            answer: "Yes, we can fix it at the time of the slab casting or even retroactively with proper core cutting and sealing techniques.",
        },
        {
            question: "Does water leak through after installing?",
            answer: "No, our installation process is systematically designed with industrial-grade flashing and sealants to ensure a 100% leak-proof system.",
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
                        Common <span className="brand-gradient-text">Inquiries</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-medium">
                        Everything you need to know about integrating natural daylighting and ventilation into your infrastructure.
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
