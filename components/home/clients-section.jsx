"use client"

import { motion } from "framer-motion"
import { Building2, Sparkles } from "lucide-react"

export default function ClientsSection() {
    const clients = [
        "HAL", "TATA POWER", "SAIL", "BHARAT ELECTRONICS", "HAVELLS", "GAIL",
        "SUNDARAM MOTORS", "BOSCH", "SIEMENS", "EXEDY", "VEDANTA", "KVB",
        "ULTRA", "DANA", "UVDHL", "GHV", "MAX SPARE", "BECKERS",
        "ANANT ENGINEERING", "OMKAR INDUSTRIES", "SHANKER STEELS", "SAMSKAARA ACADEMY",
        "CENTRAL MARINE", "JK PAPER", "SANOFI", "CAT", "ROYAL MERIDIEN", "AMARA RAJA"
    ]

    return (
        <section id="clients" className="py-16 relative bg-slate-950 px-6 lg:px-12 overflow-hidden">
            <div className="container mx-auto relative z-10">
                <div className="text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-8 py-2.5 mb-10 backdrop-blur-md"
                    >
                        <Building2 className="h-4 w-4 text-brand-orange-500" />
                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.4em]">Our Network</span>
                    </motion.div>

                    <h2 className="text-5xl lg:text-7xl font-black text-white uppercase tracking-tighter mb-6 leading-none">
                        Trusted by <span className="brand-gradient-text text-6xl lg:text-8xl">Industry Leaders</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-medium">
                        Partnering with global giants to deliver sustainable engineering excellence across various sectors.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {clients.map((client, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ scale: 1.05 }}
                            className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 flex items-center justify-center min-h-[120px] group hover:bg-white/[0.05] hover:border-white/20 transition-all duration-500 shadow-xl shadow-black/20"
                        >
                            <p className="text-gray-500 text-xs font-black tracking-[0.2em] group-hover:text-white group-hover:brand-gradient-text transition-colors text-center uppercase leading-tight">
                                {client}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
