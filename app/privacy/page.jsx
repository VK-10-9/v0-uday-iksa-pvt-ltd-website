"use client"

import { motion } from "framer-motion"
import { Shield, Lock, FileText, ArrowLeft, Info } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function PrivacyPolicy() {
  const sections = [
    {
      title: "Data Collection",
      content: "We collect information you provide directly to us through contact forms, emails, and phone calls. This includes your name, company, email, and property specifications required for natural lighting audits."
    },
    {
      title: "Information Usage",
      content: "Collected data is used solely for technical assessment, order processing, and communication regarding your daylighting and ventilation projects."
    },
    {
      title: "Secure Storage",
      content: "All technical drawings and project data are stored on secure industrial-grade servers with restricted access to ensure your corporate intellectual property remains protected."
    },
    {
      title: "Third-Party Disclosure",
      content: "UDAY IKSA does not sell or trade your personal information. We only share necessary project details with authorized installation partners under strict confidentiality agreements."
    }
  ]

  return (
    <main className="pt-32 bg-slate-950 min-h-screen text-white overflow-hidden selection:bg-brand-orange-500/30">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 bg-brand-orange-500/[0.02] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-orange-500/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-brand-orange-400 transition-colors text-[9px] font-black uppercase tracking-widest mb-8">
            <ArrowLeft className="h-3 w-3" /> Back to Home
          </Link>

          <div className="inline-flex items-center gap-3 bg-brand-orange-500/10 border border-brand-orange-500/20 rounded-full px-5 py-2 mb-8">
            <Shield className="h-3.5 w-3.5 text-brand-orange-400" />
            <h2 className="text-[9px] font-black text-brand-orange-400 uppercase tracking-[0.3em] leading-none">Security Protocol</h2>
          </div>

          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 leading-none">
            Privacy <br /><span className="text-brand-orange-500">Policy</span>
          </h1>
          <p className="text-gray-400 font-medium italic text-sm border-l-2 border-brand-orange-500/30 pl-6">
            &quot;Protecting industrial intelligence and corporate data integrity since inception.&quot;
          </p>
        </motion.div>

        <div className="grid gap-12 mb-24">
          {sections.map((section, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="flex gap-8 items-start">
                <div className="bg-white/5 p-4 rounded-2xl group-hover:bg-brand-orange-500/10 transition-colors border border-white/5">
                  <Lock className="h-5 w-5 text-brand-orange-500" />
                </div>
                <div>
                  <h3 className="text-lg font-black uppercase tracking-tight text-white mb-4 group-hover:text-brand-orange-400 transition-colors font-technical">
                    {section.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed font-medium">
                    {section.content}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technical Footer Note */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="border-t border-white/5 pt-12 pb-24 flex flex-col md:flex-row justify-between items-center gap-8"
        >
          <div className="flex items-center gap-4">
            <div className="p-2 bg-white/5 rounded-lg">
              <Info className="h-4 w-4 text-gray-500" />
            </div>
            <p className="text-[9px] font-black text-gray-600 uppercase tracking-widest">
              Last Updated: March 2024 • Version 2.1
            </p>
          </div>
          
          <Button variant="outline" asChild className="border-white/10 hover:border-brand-orange-500/50 hover:bg-brand-orange-500/5 text-gray-400 text-[10px] font-black uppercase tracking-widest rounded-xl transition-all">
            <Link href="/contact">Inquire for TDS</Link>
          </Button>
        </motion.div>
      </div>
    </main>
  )
}
