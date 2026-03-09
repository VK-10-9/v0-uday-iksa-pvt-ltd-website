"use client"

import { motion } from "framer-motion"
import { Building2, Users, Lightbulb, ChevronRight, Target, Eye, Heart, ArrowRight } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { HoverButton } from "@/components/ui/hover-button"

export default function AboutPage() {
  return (
    <main className="pt-24 bg-slate-950">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-brand-orange-500/5 blur-3xl rounded-full transform -translate-y-1/2"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase">
              Engineering <span className="brand-gradient-text">Excellence</span>
            </h1>
            <p className="text-xl text-gray-400 mb-12 leading-relaxed">
              For over 15 years, Uday IKSA has been at the forefront of natural daylight and ventilation engineering in India.
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
              <div>
                <h2 className="text-4xl font-black text-white uppercase tracking-tighter mb-6">Our Legacy</h2>
                <div className="h-1 w-20 bg-brand-orange-500 rounded-full mb-8"></div>
                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                  Founded in 2008, Uday IKSA began with a vision to revolutionize how industrial buildings harness natural resources.
                </p>
                <p className="text-gray-400 leading-relaxed mb-6">
                  What started as a specialized engineering firm has evolved into India's leading manufacturer of high-performance daylighting and ventilation systems. We don't just sell products; we engineer environments that boost productivity and reduce operational costs.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                {[
                  { icon: Building2, val: "15+", label: "Years Experience" },
                  { icon: Users, val: "500+", label: "Projects Completed" },
                  { icon: Lightbulb, val: "10+", label: "Innovations" },
                ].map((stat, idx) => (
                  <div key={idx} className="bg-white/5 p-6 rounded-3xl border border-white/10 group hover:border-brand-orange-500/30 transition-colors">
                    <stat.icon className="h-6 w-6 text-brand-orange-500 mb-4 group-hover:scale-110 transition-transform" />
                    <p className="text-3xl font-black text-white mb-1">{stat.val}</p>
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="relative h-[600px] rounded-[60px] overflow-hidden shadow-2xl shadow-brand-orange-500/10"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-orange-500/20 to-brand-red-500/20 z-10"></div>
              <Image
                src="/images/nanosun-structural.png"
                alt="Uday IKSA Engineering"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section id="vision" className="py-40 relative px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              className="bg-white/5 backdrop-blur-sm p-12 rounded-[50px] border border-brand-orange-500/20 group hover:bg-brand-orange-500/10 hover:border-brand-orange-500/40 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -10 }}
            >
              <div className="bg-brand-orange-500 w-20 h-20 rounded-2xl flex items-center justify-center mb-10 shadow-xl shadow-brand-orange-500/20 group-hover:rotate-6 transition-transform">
                <Eye className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-4xl font-black text-white uppercase tracking-tighter mb-8">Our Vision</h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                To create a world where sustainable and healthy living is accessible to all by leading the way in natural daylight and ventilation engineering.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                We envision a future where every industrial structure harnesses the power of natural resources with maximum efficiency, setting new benchmarks for energy conservation.
              </p>
            </motion.div>

            <motion.div
              className="bg-white/5 backdrop-blur-sm p-12 rounded-[50px] border border-brand-orange-500/20 group hover:bg-brand-orange-500/10 hover:border-brand-orange-500/40 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -10 }}
            >
              <div className="bg-brand-orange-500 w-20 h-20 rounded-2xl flex items-center justify-center mb-10 shadow-xl shadow-brand-orange-500/20 group-hover:rotate-6 transition-transform">
                <Target className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-4xl font-black text-white uppercase tracking-tighter mb-8">Our Mission</h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Continuously upgrading our engineering to match modernizing roof structures, developing aesthetic, technician-friendly solutions.
              </p>
              <ul className="grid gap-4">
                {[
                  "Pioneering innovative solutions for natural resources",
                  "Reducing the carbon footprint of buildings across India",
                  "Educating the market about sustainable practices",
                  "Delivering exceptional engineering value"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center group/item text-gray-300">
                    <div className="w-8 h-8 rounded-lg bg-brand-orange-500/10 flex items-center justify-center mr-4 group-hover/item:bg-brand-orange-500 transition-colors">
                      <ChevronRight className="h-4 w-4 text-brand-orange-500 group-hover/item:text-white" />
                    </div>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="team" className="py-40 relative px-6">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter mb-6">Expert Leadership</h2>
            <div className="h-1 w-32 bg-brand-orange-500 rounded-full mx-auto mb-8"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Meet the engineering visionaries driving sustainable innovation at Uday IKSA.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Executive Team", role: "Specialized Engineers", bio: "Our core team consists of structural and ventilation engineers with decades of combined experience in industrial optimization." },
              { name: "Design Unit", role: "Architectural Experts", bio: "Translating complex engineering requirements into aesthetic, performance-driven products for modern PEB structures." },
              { name: "Support Force", role: "Implementation Specialists", bio: "Dedicated professionals ensuring every installation matches the precise engineering specifications for maximum output." },
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
            className="bg-brand-gradient p-20 rounded-[60px] text-center shadow-2xl shadow-brand-orange-500/20 relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter uppercase relative z-10">
              Join The Innovation
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-12 leading-relaxed relative z-10 font-medium">
              Join our mission to optimize India's industrial landscape with sustainable daylighting solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-6 relative z-10">
              <HoverButton className="bg-white text-black hover:bg-black hover:text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest transition-colors mb-4 sm:mb-0">
                EXPLORE SOLUTIONS <ArrowRight className="ml-3 h-5 w-5" />
              </HoverButton>
              <HoverButton className="bg-transparent border-2 border-white/20 hover:border-white text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest transition-colors">
                CONTACT TEAM
              </HoverButton>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
