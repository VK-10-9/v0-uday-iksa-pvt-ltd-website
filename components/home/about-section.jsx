"use client"

import { motion } from "framer-motion"
import { Sun, Award, Users, Building2, Target, Eye, Heart, Sparkles, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutSection() {
  const stats = [
    { icon: Building2, number: "500+", label: "Projects Delivered", color: "text-brand-orange-500" },
    { icon: Users, number: "15+", label: "Years Excellence", color: "text-brand-amber-500" },
    { icon: Award, number: "10+", label: "Industry Awards", color: "text-brand-yellow-500" },
  ]

  const values = [
    {
      icon: Eye,
      title: "Vision",
      description:
        "Democratizing sustainable architecture by providing highly-engineered natural lighting and ventilation ecosystems.",
      gradient: "from-brand-orange-500 to-brand-red-600",
    },
    {
      title: "Mission",
      description:
        "Continuously upgrading our engineering frameworks to deliver technician-friendly, aesthetic, and high-performance solutions.",
      icon: Target,
      gradient: "from-brand-amber-500 to-brand-orange-500",
    },
    {
      title: "Values",
      description:
        "Upholding the highest ethical standards in engineering, recognizing our impact on communities and the environment.",
      icon: Heart,
      gradient: "from-brand-red-500 to-brand-orange-600",
    },
  ]

  return (
    <section id="about" className="py-40 relative bg-slate-950 px-6 lg:px-12 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-orange-500/5 rounded-full blur-[140px]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center mb-40">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-8 py-2.5 mb-10 backdrop-blur-md">
              <Sparkles className="h-4 w-4 text-brand-orange-500" />
              <h2 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.4em]">Inside Uday IKSA</h2>
            </div>
            <h2 className="text-6xl md:text-8xl font-black text-white mb-10 tracking-tighter uppercase leading-none">
              Welcome to <br /> <span className="brand-gradient-text text-7xl md:text-9xl">Uday IKSA</span>
            </h2>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-medium mb-12 max-w-xl">
              <p>
                Uday Iksa Pvt Ltd, based in Hubli, India, is a leading company in the manufacturing industry, specializing in
                <span className="text-white"> natural daylight and ventilation solutions</span>. With over 15 years of experience, we have made a significant impact on green energy sectors across India.
              </p>
              <p>
                We offer end-to-end solutions—from design and manufacturing to installation and implementation of
                <span className="text-brand-orange-400"> NANOSUN</span> and <span className="text-brand-red-400"> NANOVENT</span> systems.
              </p>
            </div>
            <div className="flex flex-wrap gap-8">
              <Link href="/about">
                <Button size="lg" className="bg-white text-black hover:bg-brand-orange-500 hover:text-white rounded-2xl px-12 py-8 text-sm font-black uppercase tracking-widest shadow-2xl shadow-white/5">
                  About Our Journey <ArrowRight className="ml-3 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white/[0.03] border border-white/5 p-10 rounded-[48px] flex items-center gap-10 hover:bg-white/[0.05] hover:border-white/10 transition-all duration-500 group"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="bg-brand-orange-500/10 w-20 h-20 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <stat.icon className="h-10 w-10 text-brand-orange-500" />
                </div>
                <div>
                  <p className="text-5xl font-black text-white mb-1 tracking-tighter">{stat.number}</p>
                  <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest leading-none">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="grid lg:grid-cols-3 gap-10 pt-20 border-t border-white/5">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="bg-white/[0.02] backdrop-blur-md p-12 rounded-[60px] border border-white/5 hover:bg-white/[0.04] transition-all group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
            >
              <div className="bg-brand-orange-500/10 w-16 h-16 rounded-[24px] mb-10 flex items-center justify-center group-hover:bg-brand-orange-500 group-hover:rotate-6 transition-all duration-500 shadow-2xl shadow-brand-orange-500/20">
                <value.icon className="h-8 w-8 text-brand-orange-500 group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-6 leading-none group-hover:text-brand-orange-400">
                {value.title}
              </h3>
              <p className="text-gray-500 text-sm font-medium leading-relaxed group-hover:text-gray-400 transition-colors">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
