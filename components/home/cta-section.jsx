"use client"

import { motion } from "framer-motion"
import { ArrowRight, Phone, Mail, Calendar, Sparkles } from "lucide-react"
import Link from "next/link"
import { HoverButton } from "@/components/ui/hover-button"

export default function CTASection() {
  return (
    <section className="py-40 relative bg-slate-950 overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        {/* Animated Gradient Mesh */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-brand-orange-600/10 via-transparent to-brand-red-600/10"
          animate={{
            background: [
              "linear-gradient(to bottom right, rgba(244, 121, 32, 0.1), transparent, rgba(220, 38, 38, 0.1))",
              "linear-gradient(to bottom right, rgba(220, 38, 38, 0.1), transparent, rgba(244, 121, 32, 0.1))",
              "linear-gradient(to bottom right, rgba(244, 121, 32, 0.1), transparent, rgba(220, 38, 38, 0.1))",
            ],
          }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />

        {/* Floating Elements */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-orange-500/5 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main CTA Card */}
          <motion.div
            className="relative bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-[60px] p-16 lg:p-24 overflow-hidden shadow-2xl shadow-brand-orange-500/10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            {/* Ambient Background Glow */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-orange-500/20 rounded-full blur-[100px]" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-red-500/10 rounded-full blur-[100px]" />

            <div className="relative z-10 text-center">
              {/* Header */}
              <motion.div
                className="mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="inline-flex items-center gap-3 bg-brand-orange-500/10 border border-brand-orange-500/20 rounded-full px-8 py-2.5 mb-10">
                  <Sparkles className="h-5 w-5 text-brand-orange-400" />
                  <span className="text-xs font-black text-brand-orange-400 uppercase tracking-[0.2em]">Ready to Transition?</span>
                </div>

                <h2 className="text-5xl lg:text-8xl font-black mb-8 tracking-tighter leading-none uppercase">
                  <span className="text-white">Start Your</span>
                  <br />
                  <span className="brand-gradient-text">Energy Revolution</span>
                </h2>

                <p className="text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-medium">
                  Join 500+ businesses and homeowners who have optimized their living and working spaces with our award-winning tech.
                </p>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-8 justify-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Link href="/contact" className="block">
                  <HoverButton className="w-full sm:w-auto bg-white text-black hover:bg-black hover:text-white text-xl font-black px-16 py-6 rounded-2xl transition-all shadow-xl shadow-white/5 uppercase tracking-widest">
                    <Calendar className="mr-3 h-6 w-6" />
                    Consult Now
                    <ArrowRight className="ml-3 h-6 w-6" />
                  </HoverButton>
                </Link>

                <Link href="/innovations" className="block">
                  <button className="w-full sm:w-auto flex items-center justify-center gap-4 px-16 py-6 border-2 border-white/10 hover:border-brand-orange-500/50 rounded-2xl text-white text-xl font-black uppercase tracking-widest transition-all duration-300 group backdrop-blur-md">
                    <Sparkles className="h-6 w-6 text-brand-orange-500" />
                    <span>Explore Tech</span>
                    <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
                  </button>
                </Link>
              </motion.div>

              {/* Direct Contact Options */}
              <motion.div
                className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="bg-white/[0.05] p-8 rounded-[32px] border border-white/10 flex items-center gap-6 group hover:border-brand-orange-500/40 transition-all duration-500">
                  <div className="w-16 h-16 rounded-2xl bg-brand-orange-500/10 flex items-center justify-center group-hover:bg-brand-orange-500 transition-all duration-500">
                    <Phone className="h-8 w-8 text-brand-orange-500 group-hover:text-white" />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">Direct Line</p>
                    <p className="text-white text-lg font-black tracking-tight">+91 8792182631</p>
                  </div>
                </div>

                <div className="bg-white/[0.05] p-8 rounded-[32px] border border-white/10 flex items-center gap-6 group hover:border-brand-orange-500/40 transition-all duration-500">
                  <div className="w-16 h-16 rounded-2xl bg-brand-orange-500/10 flex items-center justify-center group-hover:bg-brand-orange-500 transition-all duration-500">
                    <Mail className="h-8 w-8 text-brand-orange-500 group-hover:text-white" />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">Engineering Support</p>
                    <p className="text-white text-lg font-black tracking-tight">info@udayiksa.com</p>
                  </div>
                </div>
              </motion.div>

              {/* Trusted By Section */}
              <motion.div
                className="mt-24 pt-12 border-t border-white/5"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                <p className="text-gray-500 text-xs font-black uppercase tracking-[0.3em] mb-10">Trusted By National Industrial Giants</p>
                <div className="flex flex-wrap justify-center items-center gap-16 opacity-40 hover:opacity-100 transition-opacity duration-700">
                  {["TATA STEEL", "INFOSYS", "APOLLO", "IIT-M", "MAHINDRA"].map((company, index) => (
                    <span key={index} className="text-white text-xl font-black tracking-[0.4em] italic">{company}</span>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
