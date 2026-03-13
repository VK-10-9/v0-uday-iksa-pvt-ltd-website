"use client"

import { motion } from "framer-motion"
import { Sun, Award, Users, Building2, Target, Eye, Heart, Sparkles, ArrowRight, ShieldCheck, Zap, Globe, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function AboutSection() {
  const stats = [
    { number: "500+", label: "Product Installations", sub: "National Footprint" },
    { number: "15+", label: "Years of Expertise", sub: "Since 2009" },
    { number: "10+", label: "Industry Awards", sub: "Innovation Leaders" },
  ]

  const values = [
    {
      title: "Carbon Reductions",
      description: "Reduces Carbon Footprint by significantly cutting down artificial lighting usage in industrial spaces.",
      icon: Sun,
    },
    {
      title: "Human Wellness",
      description: "Supports human health by maintaining natural circadian rhythms and improving workplace mood.",
      icon: Heart,
    },
    {
      title: "Efficiency",
      description: "Better focus and productivity through glare-free, high-quality natural full-spectrum light.",
      icon: Target,
    },
  ]

  return (
    <section id="about" className="py-12 relative bg-slate-950 px-6 lg:px-12 overflow-hidden border-t border-white/5">
      {/* Structural Backdrop */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-orange-500/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-orange-500/20 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-orange-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-5 py-2 mb-10 backdrop-blur-md">
              <Sparkles className="h-3 w-3 text-brand-orange-500" />
              <h2 className="text-[7px] font-black text-white uppercase tracking-[0.4em]">The Uday IKSA Legacy</h2>
            </div>
            
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-10 tracking-tighter uppercase leading-[0.9]">
              Engineering <br /> <span className="brand-gradient-text">India's Sunlight</span>
            </h2>

            <div className="space-y-8 text-gray-400 text-base md:text-lg leading-relaxed font-medium mb-12 max-w-xl">
              <p>
                Uday IKSA started with one simple idea: <span className="text-white font-bold">buildings shouldn't burn electricity</span> just to stay bright during the day.
              </p>
              <p>
                Based in Hubballi, Karnataka, we design and manufacture <span className="text-white">patented daylighting</span> and <span className="text-white text-brand-orange-500/80">ventilation systems</span> used by India's largest industrial names — from Tata and HAL to the Indian Railways.
              </p>
            </div>

            <div className="flex flex-wrap gap-6">
              <Link href="/about">
                <Button size="lg" className="bg-brand-orange-500 text-white hover:bg-white hover:text-black rounded-xl px-12 py-7 text-xs font-black uppercase tracking-widest transition-all">
                  Our Story & Journey <ArrowRight className="ml-3 h-4 w-4" />
                </Button>
              </Link>
            </div>

            {/* Advisor Spotlight */}
            <motion.div
              className="mt-16 p-8 bg-white/5 border border-white/10 rounded-[40px] relative overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <ShieldCheck className="h-24 w-24 text-white" />
              </div>
              <div className="relative z-10">
                <p className="text-gray-300 italic text-sm leading-relaxed mb-6 font-medium">
                  "Our products are designed under the guidance of <span className="text-white font-bold">Prof. S.B. Kurubar</span> — distinguished electrical engineer and academic lead — ensuring world-class technical rigour in every unit."
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-px w-10 bg-brand-orange-500"></div>
                  <span className="text-[7px] font-black text-brand-orange-500 uppercase tracking-widest">Engineering Trust</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <div className="space-y-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-white/[0.03] border border-white/5 p-10 rounded-[40px] hover:bg-white/[0.05] hover:border-brand-orange-500/20 transition-all duration-500 group"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <p className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tighter group-hover:brand-gradient-text transition-all">{stat.number}</p>
                  <div>
                    <p className="text-[8px] font-black text-brand-orange-500 uppercase tracking-widest mb-1">{stat.label}</p>
                    <p className="text-[7px] font-bold text-gray-500 uppercase tracking-widest opacity-60">{stat.sub}</p>
                  </div>
                </motion.div>
              ))}
              
              <motion.div
                className="bg-brand-orange-500/10 border border-brand-orange-500/20 p-10 rounded-[40px] flex items-center justify-center text-center group overflow-hidden relative sm:col-span-2"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="relative z-10">
                  <Globe className="h-10 w-10 text-brand-orange-500 mx-auto mb-4 group-hover:rotate-12 transition-transform" />
                  <p className="text-[8px] font-black text-white uppercase tracking-widest leading-none mb-1">Made In Hubballi</p>
                  <p className="text-[7px] font-bold text-brand-orange-500 uppercase tracking-widest">Engineering Legacy Since 2009</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Values & Certifications Bento */}
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          <div className="grid sm:grid-cols-2 gap-4">
            <motion.div
              className="bg-white/[0.03] border border-brand-orange-500/20 rounded-[48px] p-8 md:p-12 relative overflow-hidden group col-span-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Award className="h-10 w-10 text-brand-orange-500 mb-8" />
              <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-4 leading-none">CII INNOVERGE <br /><span className="brand-gradient-text text-xl">National Award 2022</span></h3>
              <p className="text-gray-400 text-sm leading-relaxed font-medium max-w-md">India's most prestigious recognition for industrial innovation and green engineering breakthroughs.</p>
            </motion.div>
            
            <div className="bg-white/[0.02] border border-white/5 rounded-[40px] p-6 flex flex-col items-center justify-center text-center gap-3">
              <ShieldCheck className="h-6 w-6 text-brand-orange-500" />
              <p className="text-[10px] font-black text-white uppercase tracking-widest">ISO 9001:2015</p>
            </div>
            
            <div className="bg-white/[0.02] border border-white/5 rounded-[40px] p-6 flex flex-col items-center justify-center text-center gap-3">
              <Zap className="h-6 w-6 text-brand-orange-500" />
              <p className="text-[7px] font-black text-white uppercase tracking-widest">Patented Tech</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-brand-orange-500"></div>
              <h3 className="text-[7px] font-black text-gray-400 uppercase tracking-widest">Beyond The Building</h3>
            </div>
            
            <div className="grid gap-4">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="bg-white/[0.01] hover:bg-white/[0.03] backdrop-blur-md p-8 rounded-[32px] border border-white/5 hover:border-brand-orange-500/20 transition-all flex items-center gap-8 group"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="bg-brand-orange-500/10 w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-brand-orange-500 transition-colors">
                    <value.icon className="h-6 w-6 text-brand-orange-500 group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-white uppercase tracking-tighter mb-2 leading-none group-hover:text-brand-orange-400 transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-gray-500 text-[9px] font-medium leading-relaxed max-w-sm">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
