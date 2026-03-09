"use client"

import { motion } from "framer-motion"
import { Building2, Users, Lightbulb, ChevronRight, Target, Eye, Heart, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { HoverButton } from "@/components/ui/hover-button"

export default function AboutPage() {
  return (
    <main className="pt-24 bg-slate-950">
      {/* Hero Section */}
      <section className="relative py-40 overflow-hidden">
        <div className="absolute inset-0 bg-brand-orange-500/5 blur-3xl rounded-full transform -translate-y-1/2"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter uppercase leading-none">
              Started With a <br /><span className="brand-gradient-text">Simple Question:</span> <br />Why Are We Paying for Light?
            </h1>
            <p className="text-xl text-gray-400 mb-12 leading-relaxed font-medium">
              In India, most buildings burn artificial lights all day — even when the sun is blazing outside. <br /><span className="text-white">Uday IKSA was founded to change that.</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="story" className="py-20 relative">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-12"
            >
              <div className="space-y-6">
                <h2 className="text-4xl font-black text-white uppercase tracking-tighter mb-6">Our 15-Year Journey</h2>
                <div className="h-1 w-20 bg-brand-orange-500 rounded-full mb-8"></div>
                <p className="text-gray-400 text-lg leading-relaxed">
                  We're a Hubli-based manufacturer with over <span className="text-white">15 years of experience</span> designing and installing natural daylighting and ventilation systems across India.
                </p>
                <p className="text-gray-400 leading-relaxed font-medium">
                  Every product is designed, manufactured, and installed by our own team in Hubli. We've worked with small factories, large industrial plants, schools, hospitals, hotels, and apartment complexes.
                </p>
                <p className="text-gray-400 leading-relaxed italic border-l-2 border-brand-orange-500 pl-6">
                  "The challenge is always different. The goal is always the same: more light, better air, lower bills."
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                {[
                  { icon: Building2, val: "15+", label: "Years Impact" },
                  { icon: Users, val: "500+", label: "Happy Customers" },
                  { icon: Lightbulb, val: "Hubli", label: "Mfg. Center" },
                ].map((stat, idx) => (
                  <div key={idx} className="bg-white/5 p-6 rounded-3xl border border-white/10 group hover:border-brand-orange-500/30 transition-colors">
                    <stat.icon className="h-6 w-6 text-brand-orange-500 mb-4 group-hover:scale-110 transition-transform" />
                    <p className="text-3xl font-black text-white mb-1 tracking-tighter">{stat.val}</p>
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="relative h-[700px] rounded-[60px] overflow-hidden shadow-2xl shadow-brand-orange-500/10 border border-white/10"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10"></div>
              <Image
                src="/images/nanosun-structural.png"
                alt="Uday IKSA Engineering"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-12 left-12 z-20">
                <div className="bg-slate-900/60 backdrop-blur-2xl border border-white/10 p-8 rounded-[32px]">
                  <p className="text-xs font-black text-white uppercase tracking-widest leading-none">Make In India</p>
                  <p className="text-gray-400 text-[10px] mt-2 font-bold uppercase tracking-widest">ISO 9001:2015 Certified</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section id="vision" className="py-40 relative px-6 bg-slate-900/40">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              className="bg-white/5 backdrop-blur-sm p-16 rounded-[60px] border border-brand-orange-500/20 group hover:bg-brand-orange-500/10 hover:border-brand-orange-500/40 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-brand-orange-500 w-20 h-20 rounded-2xl flex items-center justify-center mb-10 shadow-xl shadow-brand-orange-500/20 group-hover:rotate-6 transition-transform">
                <Eye className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-4xl font-black text-white uppercase tracking-tighter mb-8">Our Vision</h3>
              <p className="text-gray-400 text-xl leading-relaxed font-medium">
                A future where every home and factory in India uses the sun's free energy instead of paying for lights during the day.
              </p>
            </motion.div>

            <motion.div
              className="bg-white/5 backdrop-blur-sm p-16 rounded-[60px] border border-brand-orange-500/20 group hover:bg-brand-orange-500/10 hover:border-brand-orange-500/40 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-brand-orange-500 w-20 h-20 rounded-2xl flex items-center justify-center mb-10 shadow-xl shadow-brand-orange-500/20 group-hover:rotate-6 transition-transform">
                <Target className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-4xl font-black text-white uppercase tracking-tighter mb-8">Our Mission</h3>
              <p className="text-gray-400 text-xl leading-relaxed font-medium">
                To make sky lights and ventilation easy and affordable for every type of building — from a small shop to a massive factory.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="team" className="py-40 relative px-6">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter mb-6">Built by Experts</h2>
            <div className="h-1 w-32 bg-brand-orange-500 rounded-full mx-auto mb-8"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-medium">
              We are a team of passionate engineers and designers in Hubballi dedicated to bringing nature into your building.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Executive Team", role: "Specialized Engineers", bio: "With over 15 years in the field, we know exactly what your building needs to stay bright and cool." },
              { name: "Design Unit", role: "Sky Light Experts", bio: "We design systems that are not just high-performing, but also look great on any roof." },
              { name: "Support Force", role: "Master Installers", bio: "Our in-house team handles every installation to ensure it stays leak-proof for life." },
            ].map((member, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-[40px] p-10 border border-white/10 group hover:border-brand-orange-500/40 transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="w-20 h-20 bg-brand-orange-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-orange-500 transition-colors">
                  <Heart className="h-10 w-10 text-brand-orange-500 group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-2">{member.name}</h3>
                <p className="text-brand-orange-500 font-black uppercase tracking-widest text-[10px] mb-6">{member.role}</p>
                <p className="text-gray-400 leading-relaxed italic">"{member.bio}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative px-6">
        <div className="container mx-auto">
          <motion.div
            className="bg-brand-gradient p-20 rounded-[80px] text-center shadow-2xl shadow-brand-orange-500/20 relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter uppercase relative z-10">
              Stop Paying For Light
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-12 leading-relaxed relative z-10 font-medium">
              Join 500+ buildings that have already switched to natural sky light and ventilation.
            </p>
            <div className="flex flex-wrap justify-center gap-6 relative z-10">
              <Link href="/innovations">
                <HoverButton className="bg-white text-black hover:bg-black hover:text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest transition-colors mb-4 sm:mb-0">
                  See Our Systems <ArrowRight className="ml-3 h-5 w-5" />
                </HoverButton>
              </Link>
              <Link href="/contact">
                <HoverButton className="bg-transparent border-2 border-white/20 hover:border-white text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest transition-colors">
                  Talk to an Expert
                </HoverButton>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
