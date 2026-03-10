"use client"

import { motion } from "framer-motion"
import { ArrowRight, Wind, ShieldCheck, Zap, Sparkles, CheckCircle2, ThermometerSun, Gauge, Waves, Baby, Home, School, Building, Construction } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { HoverButton } from "@/components/ui/hover-button"
import CredentialStrip from "@/components/product/CredentialStrip"

export default function NanoventPage() {
  const coreFeatures = [
    {
      title: "Natural Air Exchange",
      subtitle: "Fresh Air, Zero Fans",
      description: "Uses the power of wind and thermal buoyancy to pull stale air out. Your building breathes naturally without a single fan, motor, or noise.",
      icon: Wind,
      points: ["100% Passive Operation", "Zero Moving Parts", "Whisper Quiet"]
    },
    {
      title: "Cooler Interiors",
      subtitle: "Stays Fresh, Saves AC",
      description: "Passive heat dissipation that reduces indoor temperatures naturally. Hot air rises and escapes, drawing in fresh air from below.",
      icon: ThermometerSun,
      points: ["Reduces Temp by 5-8°C", "Lower HVAC Load", "Pure Outdoor Air"]
    },
    {
      title: "Weather Resilience",
      subtitle: "Monsoon & Storm Ready",
      description: "Aerodynamic profiling ensures 100% rain-proof operation. Designed to handle high-velocity winds and the heaviest Indian rains.",
      icon: ShieldCheck,
      points: ["No Leaks Guaranteed", "Hurricane Tested", "Marine-Grade Build"]
    }
  ]

  const applications = [
    { name: "Modern Homes", icon: Home, desc: "Keep your house fresh and airy without constant ceiling fans." },
    { name: "Schools", icon: Baby, desc: "Healthier classrooms with constant fresh air for students." },
    { name: "Offices", icon: Building, desc: "Remove stale indoor air and improve employee productivity." },
    { name: "Warehouses", icon: Construction, desc: "Massive air exchange for large industrial volumes." },
  ]

  return (
    <main className="pt-24 bg-slate-950">
      {/* Hero Section */}
      <section className="relative py-20 md:py-24 overflow-hidden px-6 lg:px-12">
        <div className="absolute inset-0 bg-brand-orange-500/5 blur-[120px] rounded-full transform translate-y-1/2" />
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
              <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-8 py-2.5 mb-10 backdrop-blur-md">
                <Wind className="h-4 w-4 text-brand-orange-400" />
                <h2 className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none">Natural Ventilation (NANOVENT)</h2>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-10 tracking-tighter uppercase leading-[0.9]">
                Fresh Air, <br /> <span className="brand-gradient-text">Zero Fans</span>
              </h1>
              <p className="text-xl text-gray-400 mb-16 leading-relaxed max-w-2xl font-medium">
                Keep your space cool and fresh using nature's own cycles. No fans, no power bills, no noise. Just constant, pure airflow for your home, school, or business.
              </p>
              <div className="flex flex-wrap gap-6">
                <Link href="/contact">
                  <HoverButton className="bg-white text-black hover:bg-brand-orange-500 hover:text-white rounded-2xl px-16 py-8 text-sm font-black uppercase tracking-widest shadow-2xl transition-all">
                    Request an Air Audit <ArrowRight className="ml-3 h-5 w-5" />
                  </HoverButton>
                </Link>
                <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-8 py-4 backdrop-blur-md">
                  <ShieldCheck className="h-5 w-5 text-brand-orange-400" />
                  <span className="text-[10px] font-black text-white uppercase tracking-widest">100% Rain Proof</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative h-[650px] rounded-[80px] overflow-hidden border border-white/10 shadow-3xl group"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <Image
                src="/images/nanovent-structural.png"
                alt="NANOVENT Ventilation"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-12 left-12 right-12">
                <div className="bg-white/5 backdrop-blur-3xl border border-white/10 p-10 rounded-[48px]">
                  <p className="text-3xl font-black text-white uppercase tracking-tighter mb-2">Passive Intake</p>
                  <p className="text-gray-400 text-sm font-medium">Refresh your entire space every few minutes using only natural pressure.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CredentialStrip />

      {/* How it Works - The Stack Effect */}
      <section className="py-20 md:py-24 relative px-6 lg:px-12 bg-slate-900/30">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="relative h-[600px] rounded-[60px] overflow-hidden border border-white/10 group shadow-2xl order-2 lg:order-1">
              <Image
                src="/images/nanovent-hero.jpg"
                alt="How NANOVENT works"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-brand-orange-500/10 group-hover:bg-transparent transition-colors" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-10 uppercase tracking-tighter leading-tight">The Science <br /><span className="brand-gradient-text">of Stale Air</span></h2>
              <div className="space-y-12">
                <div className="flex gap-8 items-start">
                  <div className="w-12 h-12 rounded-2xl bg-brand-orange-500 flex items-center justify-center flex-shrink-0">
                    <p className="text-white font-black">1</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-white font-black text-xl uppercase tracking-tighter">Heat Rises Up</h4>
                    <p className="text-gray-400 font-medium">Inside any building, hot and stale air naturally rises to the roof. We don't fight this—we use it.</p>
                  </div>
                </div>
                <div className="flex gap-8 items-start">
                  <div className="w-12 h-12 rounded-2xl bg-brand-orange-500/10 border border-brand-orange-500/50 flex items-center justify-center flex-shrink-0">
                    <p className="text-brand-orange-500 font-black">2</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-white font-black text-xl uppercase tracking-tighter">The Vacuum Effect</h4>
                    <p className="text-gray-400 font-medium">Our vents create a low-pressure zone at the roof, actively sucking the hot air out through specially designed aerodynamic fins.</p>
                  </div>
                </div>
                <div className="flex gap-8 items-start">
                  <div className="w-12 h-12 rounded-2xl bg-brand-orange-500/10 border border-brand-orange-500/50 flex items-center justify-center flex-shrink-0">
                    <p className="text-brand-orange-500 font-black">3</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-white font-black text-xl uppercase tracking-tighter">Fresh Air Intake</h4>
                    <p className="text-gray-400 font-medium">As hot air escapes, fresh cool air is naturally drawn in from windows and doors below, keeping your rooms pleasant all day.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-24 relative px-6 lg:px-12 bg-slate-950">
        <div className="container mx-auto">
          <div className="text-center mb-32">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 uppercase tracking-tighter leading-none">Why Choose <span className="brand-gradient-text">Natural?</span></h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-medium">Ditch the electricity bill and the humming noise of electric fans.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {coreFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                className="bg-white/[0.03] border border-white/5 p-12 rounded-[60px] hover:bg-white/[0.05] transition-all group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="bg-brand-orange-500/10 w-20 h-20 rounded-3xl flex items-center justify-center mb-10 group-hover:bg-brand-orange-500 group-hover:scale-110 transition-all duration-500">
                  <feature.icon className="h-10 w-10 text-brand-orange-500 group-hover:text-white" />
                </div>
                <h3 className="text-[10px] font-black text-brand-orange-500 uppercase tracking-widest mb-4 leading-none">{feature.subtitle}</h3>
                <h4 className="text-3xl font-black text-white uppercase tracking-tighter mb-8 leading-none">{feature.title}</h4>
                <p className="text-gray-400 mb-10 text-sm leading-relaxed font-medium">{feature.description}</p>
                <div className="space-y-4 pt-10 border-t border-white/5">
                  {feature.points.map((point, i) => (
                    <div key={i} className="flex items-center gap-3 text-xs font-black text-gray-500 uppercase tracking-widest">
                      <CheckCircle2 className="h-4 w-4 text-brand-orange-500" />
                      {point}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Unified CTA */}
      <section className="py-20 md:py-24 relative px-6 lg:px-12 bg-slate-950">
        <div className="container mx-auto">
          <motion.div
            className="bg-brand-gradient p-24 lg:p-40 rounded-[100px] text-center shadow-2xl shadow-brand-orange-500/20 relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-grid-white/[0.05] pointer-events-none" />
            <Waves className="h-20 w-20 text-white/30 mx-auto mb-10 animate-pulse" />
            <h2 className="text-5xl md:text-9xl font-black text-white mb-10 tracking-tighter uppercase leading-none relative z-10">Unpower Your Flow</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-16 leading-relaxed relative z-10 font-bold uppercase tracking-widest text-sm opacity-90 font-medium">
              Join 500+ homes and businesses breathing fresh air for free. <br />Let nature do the heavy lifting.
            </p>
            <div className="flex flex-wrap justify-center gap-10 relative z-10">
              <Link href="/contact" className="block w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto bg-white text-black hover:bg-black hover:text-white transition-all duration-300 rounded-3xl px-20 py-10 text-xl font-black shadow-2xl shadow-white/10 uppercase tracking-widest">
                  Start Fresh Air Audit <ArrowRight className="ml-4 h-8 w-8" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
