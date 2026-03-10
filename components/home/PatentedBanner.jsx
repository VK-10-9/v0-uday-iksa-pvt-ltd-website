"use client"

import { motion } from "framer-motion"
import { ShieldCheck } from "lucide-react"

export default function PatentedBanner() {
    return (
        <div className="w-full bg-brand-orange-500 py-3 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-white/[0.1] pointer-events-none" />
            <div className="container mx-auto px-6 whitespace-nowrap overflow-hidden">
                <motion.div
                    className="flex items-center gap-12"
                    animate={{ x: [0, -1000] }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                        <div key={i} className="flex items-center gap-4 text-white font-black uppercase tracking-[0.2em] text-[10px]">
                            <ShieldCheck className="h-4 w-4" />
                            <span>NANOSUN™ and NANOVENT® are patented technologies</span>
                            <span className="opacity-50">•</span>
                            <span>Proudly Developed & Manufactured in Hubballi, India</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}
