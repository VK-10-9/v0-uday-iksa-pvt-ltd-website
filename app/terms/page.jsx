"use client"

import { motion } from "framer-motion"
import { Scale, Gavel, FileCheck, ArrowLeft, AlertCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function TermsOfService() {
  const terms = [
    {
      title: "Scope of Service",
      content: "UDAY IKSA provides end-to-end natural lighting and industrial ventilation solutions, including site assessment, custom manufacturing, and engineering supervision."
    },
    {
      title: "Warranty & Performance",
      content: "All NANOVENT and NANOSUN systems are warranted for 1 year against manufacturing defects. Performance estimates are based on standard solar patterns and factory specifications."
    },
    {
      title: "Installation Standards",
      content: "Installations must follow our 'Leak-Proof Protocol'. Any unauthorized modification to the mounting base or turbine head voids the performance certification."
    },
    {
      title: "Intellectual Property",
      content: "The designs of NANOVENT and NANOSUN are legally protected. Unauthorized replication of our proprietary mirror pipe technology or turbine vane geometry is strictly prohibited."
    }
  ]

  return (
    <main className="pt-32 bg-slate-950 min-h-screen text-white overflow-hidden selection:bg-brand-orange-500/30">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 bg-brand-orange-500/[0.02] pointer-events-none" />
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-orange-500/5 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2" />

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
            <Scale className="h-3.5 w-3.5 text-brand-orange-400" />
            <h2 className="text-[9px] font-black text-brand-orange-400 uppercase tracking-[0.3em] leading-none">Legal Framework</h2>
          </div>

          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 leading-none">
            Terms of <br /><span className="text-brand-orange-500">Service</span>
          </h1>
          <p className="text-gray-400 font-medium italic text-sm border-l-2 border-brand-orange-500/30 pl-6">
            &quot;Establishing the standards of industrial excellence and legal accountability.&quot;
          </p>
        </motion.div>

        <div className="grid gap-12 mb-24">
          {terms.map((term, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="flex gap-8 items-start">
                <div className="bg-white/5 p-4 rounded-2xl group-hover:bg-brand-orange-500/10 transition-colors border border-white/5">
                  <Gavel className="h-5 w-5 text-brand-orange-500" />
                </div>
                <div>
                  <h3 className="text-lg font-black uppercase tracking-tight text-white mb-4 group-hover:text-brand-orange-400 transition-colors">
                    {term.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed font-medium">
                    {term.content}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="border-t border-white/5 pt-12 pb-24 flex flex-col md:flex-row justify-between items-center gap-8"
        >
          <div className="flex items-center gap-4">
            <div className="p-2 bg-white/5 rounded-lg text-gray-500">
              <AlertCircle className="h-4 w-4" />
            </div>
            <p className="text-[9px] font-black text-gray-600 uppercase tracking-widest">
              Standard Compliance • Subject to Hubballi Jurisdiction
            </p>
          </div>
          
          <Button variant="outline" asChild className="border-white/10 hover:border-brand-orange-500/50 hover:bg-brand-orange-500/5 text-gray-400 text-[10px] font-black uppercase tracking-widest rounded-xl transition-all">
            <Link href="/contact">Clarify Agreements</Link>
          </Button>
        </motion.div>
      </div>
    </main>
  )
}
