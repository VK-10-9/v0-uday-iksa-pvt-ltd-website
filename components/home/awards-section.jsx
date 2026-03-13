"use client"

import { motion } from "framer-motion"
import { Award, ArrowRight, Star, Trophy } from "lucide-react"
import Link from "next/link"

export default function AwardsSection() {
  return (
    <section id="awards" className="py-16 relative bg-slate-950/80 overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-orange-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 bg-brand-orange-500/10 border border-brand-orange-500/20 rounded-full px-8 py-2.5 mb-10"
          >
            <Trophy className="h-5 w-5 text-brand-orange-400" />
            <span className="text-[10px] font-black text-brand-orange-400 uppercase tracking-[0.2em]">National Distinction</span>
          </motion.div>

          <h2 className="text-5xl lg:text-7xl font-black text-white uppercase tracking-tighter mb-6 leading-none">
            Award-Winning <span className="brand-gradient-text">Innovation</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Our commitment to engineering excellence has earned us recognition from the nation's most prestigious organizations.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            className="bg-white/[0.03] backdrop-blur-2xl p-8 lg:p-12 rounded-[48px] border border-white/10 shadow-2xl overflow-hidden relative group hover:border-brand-orange-500/40 transition-all duration-700"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            {/* Ambient Glow */}
            <div className="absolute -top-32 -right-32 w-80 h-80 bg-brand-orange-500/10 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="flex flex-col md:flex-row items-center gap-16 relative z-10">
              <div className="md:w-1/3 flex justify-center">
                <div className="relative">
                  <motion.div
                    className="absolute inset-0 bg-brand-orange-500/20 rounded-full blur-2xl"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                  <div className="relative bg-gradient-to-br from-brand-orange-400 to-brand-red-600 w-48 h-48 rounded-[40px] flex items-center justify-center shadow-2xl rotate-3 group-hover:rotate-6 transition-transform duration-500">
                    <Award className="h-24 w-24 text-white" />
                    <Star className="absolute top-4 right-4 h-6 w-6 text-white/50 animate-pulse" />
                  </div>
                </div>
              </div>

              <div className="md:w-2/3 text-center md:text-left space-y-8">
                <div>
                  <p className="text-brand-orange-500 font-black uppercase tracking-[0.3em] text-[10px] mb-2">Flagship Recognition</p>
                  <h3 className="text-4xl lg:text-5xl font-black text-white uppercase tracking-tighter leading-none mb-6 group-hover:text-brand-orange-400 transition-colors">CII INNOVERGE 2022 National Award</h3>
                  <p className="text-gray-400 text-lg leading-relaxed font-medium">
                    Recognized by CII Yi – Apollo Innovation for our groundbreaking technology in green solar lighting and natural ventilation, setting new standards for industrial energy conservation.
                  </p>
                </div>

                <Link href="/awards" className="inline-block">
                  <button className="flex items-center gap-4 text-white font-black uppercase tracking-widest text-sm group/link underline decoration-brand-orange-500/30 underline-offset-8 decoration-2 hover:decoration-brand-orange-500 transition-all">
                    <span>Explore All Achievements</span>
                    <ArrowRight className="h-5 w-5 text-brand-orange-500 group-hover/link:translate-x-2 transition-transform" />
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
