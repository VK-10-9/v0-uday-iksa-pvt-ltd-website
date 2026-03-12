"use client"

import { motion } from "framer-motion"
import { Building2, Users, Target, ArrowLeft, Award, Landmark } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CorporateGovernance() {
  const pillars = [
    {
      title: "Board Integrity",
      content: "UDAY IKSA is governed by a board of directors committed to the highest standards of engineering ethics and sustainable industrial growth.",
      icon: Building2
    },
    {
      title: "Sustainability Mandate",
      content: "Our core directive is 'Zero-Emission Daylighting'. Every strategic decision is weighed against its environmental impact and energy reduction potential.",
      icon: Target
    },
    {
      title: "Equality in Engineering",
      content: "We provide an inclusive workspace for engineers and craftsmen alike, fostering innovation through diversity and rigorous technical training.",
      icon: Users
    },
    {
      title: "Quality Certifications",
      content: "Governance includes regular standard audits. Our products meet ISO and industrial quality benchmarks for 100% reliability.",
      icon: Award
    }
  ]

  return (
    <main className="pt-32 bg-slate-950 min-h-screen text-white overflow-hidden selection:bg-brand-orange-500/30">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 bg-brand-orange-500/[0.01] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-orange-500/[0.03] rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20 text-center"
        >
          <div className="flex justify-start">
            <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-brand-orange-400 transition-colors text-[9px] font-black uppercase tracking-widest mb-12">
              <ArrowLeft className="h-3 w-3" /> Back to Home
            </Link>
          </div>

          <div className="inline-flex items-center gap-3 bg-brand-orange-500/10 border border-brand-orange-500/20 rounded-full px-6 py-2.5 mb-10">
            <Landmark className="h-4 w-4 text-brand-orange-400" />
            <h2 className="text-[10px] font-black text-brand-orange-400 uppercase tracking-[0.4em] leading-none">Corporate Structure</h2>
          </div>

          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-none">
            Corporate <br /><span className="text-brand-orange-500">Governance</span>
          </h1>
          <p className="text-gray-400 font-medium italic text-base max-w-2xl mx-auto leading-relaxed">
            &quot;Leading the energy revolution through transparency, ethics, and engineering excellence.&quot;
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-24">
          {pillars.map((pillar, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/[0.02] border border-white/5 p-10 rounded-[48px] hover:bg-white/[0.04] transition-all hover:border-brand-orange-500/20 group"
            >
              <div className="mb-8">
                <div className="w-14 h-14 bg-brand-orange-500/10 rounded-2xl flex items-center justify-center group-hover:bg-brand-orange-500 transition-all duration-500 group-hover:scale-110 shadow-lg">
                  <pillar.icon className="h-6 w-6 text-brand-orange-500 group-hover:text-white" />
                </div>
              </div>
              <h3 className="text-xl font-black uppercase tracking-tight text-white mb-4 group-hover:text-brand-orange-400 transition-colors">
                {pillar.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed font-medium group-hover:text-gray-400 transition-colors">
                {pillar.content}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Board Note */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-brand-orange-500/5 border border-brand-orange-500/10 rounded-[40px] p-10 md:p-16 mb-24 text-center relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />
          <h4 className="text-2xl font-black uppercase mb-6 relative z-10 tracking-tight">Technical Advisory Board</h4>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto mb-10 relative z-10 leading-relaxed italic">
            &quot;Our governance structure ensures that every product reaching your factory has been vetted for performance, safety, and long-term sustainability.&quot;
          </p>
          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            <Button asChild className="bg-white text-black hover:bg-slate-900 hover:text-white rounded-xl px-12 py-5 text-xs font-black uppercase tracking-widest shadow-2xl transition-all">
              <Link href="/contact">Financial Reporting</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
