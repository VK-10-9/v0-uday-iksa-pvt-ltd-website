"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Sparkles, Award } from "lucide-react"

export default function CredentialStrip() {
    return (
        <div className="w-full bg-slate-900/50 border-y border-white/5 py-8">
            <div className="container mx-auto px-6">
                <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center">
                    <motion.div
                        className="flex items-center gap-4 group"
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className="w-10 h-10 rounded-xl bg-brand-orange-500/10 flex items-center justify-center text-brand-orange-500 border border-brand-orange-500/20">
                            <ShieldCheck className="h-5 w-5" />
                        </div>
                        <div>
                            <p className="text-[7px] font-black text-white uppercase tracking-widest leading-none mb-1">Patented Tech</p>
                            <p className="text-[6px] font-bold text-gray-500 uppercase tracking-widest">Original IP</p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="flex items-center gap-4 group"
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className="w-10 h-10 rounded-xl bg-brand-orange-500/10 flex items-center justify-center text-brand-orange-500 border border-brand-orange-500/20">
                            <Sparkles className="h-5 w-5" />
                        </div>
                        <div>
                            <p className="text-[7px] font-black text-white uppercase tracking-widest leading-none mb-1">R&D Certified</p>
                            <p className="text-[6px] font-bold text-gray-500 uppercase tracking-widest">KLE Tech University</p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="flex items-center gap-4 group"
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className="w-10 h-10 rounded-xl bg-brand-orange-500/10 flex items-center justify-center text-brand-orange-500 border border-brand-orange-500/20">
                            <Award className="h-5 w-5" />
                        </div>
                        <div>
                            <p className="text-[7px] font-black text-white uppercase tracking-widest leading-none mb-1">Made In India</p>
                            <p className="text-[6px] font-bold text-gray-500 uppercase tracking-widest">In-house Mfg</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
