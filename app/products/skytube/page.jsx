"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sun, ShieldCheck, Zap, Sparkles, CheckCircle2, Lightbulb, Minimize, Layers, Factory, Building, Layout, Box, Settings, Ruler, Droplets, HardHat, Gauge, Recycle, Eye } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { HoverButton } from "@/components/ui/hover-button"
import CredentialStrip from "@/components/product/CredentialStrip"

export default function SkytubePage() {
    const components = [
        { name: "Optical Daylight Collecting Dome", desc: "Captures sunlight from roof, ensuring maximum daylight collection." },
        { name: "High Reflective Aluminium Reflectors", desc: "High reflectivity panels that transmit sunlight efficiently into building." },
        { name: "Weather Resistant Covering Sheet", desc: "Seals and protects the roof opening from weather, dust and debris." },
        { name: "Light Diffuser Dome", desc: "Evenly diffuses natural light providing bright and uniform illumination inside." },
        { name: "Rubber Gasket Seal", desc: "Provides a waterproof and airtight seal between the skytube system and roof." }
    ]

    const dimensions = [
        { model: "Model 01", dLen: "1080 mm", dWid: "280 & 600 mm", dHi: "150 mm", difHi: "100 mm" },
        { model: "Model 02", dLen: "1650 mm", dWid: "280 & 600 mm", dHi: "150 mm", difHi: "100 mm" },
        { model: "Model 03", dLen: "3050 mm", dWid: "280 & 600 mm", dHi: "150 mm", difHi: "100 mm" },
        { model: "Model 04", dLen: "4500 mm", dWid: "280 & 600 mm", dHi: "150 mm", difHi: "100 mm" }
    ]

    const suitabilityImages = [
        { src: "/images/products/skytube/app-warehouse.png", title: "Warehouse Roof", type: "External" },
        { src: "/images/products/skytube/installation-internal.jpg", title: "Factory Floor", type: "Internal" },
        { src: "/images/installations/skytube-warehouse.png", title: "Manufacturing Unit", type: "Hybrid" },
        { src: "/images/products/skytube/app-warehouse.png", title: "Godown Storage", type: "External" },
        { src: "/images/products/skytube/installation-internal.jpg", title: "Industrial Corridor", type: "Internal" },
        { src: "/images/installations/skytube-warehouse.png", title: "Logistics Hub", type: "Hybrid" }
    ]

    return (
    <main className="pt-24 bg-slate-950 min-h-screen text-white overflow-hidden">
      {/* Hero Section - Refined Scale */}
      <section className="relative py-20 md:py-32 overflow-hidden px-6 lg:px-12 border-b border-white/5">
        <div className="absolute inset-0 bg-brand-orange-500/5 blur-[120px] rounded-full transform translate-y-1/2" />
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-1.5 mb-8 backdrop-blur-md">
                <Zap className="h-3 w-3 text-brand-orange-400" />
                <h2 className="text-[9px] font-black text-gray-400 uppercase tracking-widest leading-none">Nanosun™ Skytube Series</h2>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tighter uppercase leading-[0.95]">
                Light Your <br /> <span className="brand-gradient-text">Factory with Sun</span>
              </h1>
              <p className="text-base md:text-lg text-gray-400 mb-10 leading-relaxed max-w-xl font-medium italic">
                &quot;Bring the power of the sun inside with 99.7% efficiency.&quot;
              </p>

              <div className="grid grid-cols-2 gap-4 mb-10">
                {["Factory", "Godown", "Manufacturing Unit", "Warehouse"].map((f, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-[10px] font-black uppercase tracking-widest text-gray-500">
                    <CheckCircle2 className="h-3.5 w-3.5 text-brand-orange-500" />
                    {f}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-white text-black hover:bg-slate-900 hover:text-white rounded-xl px-12 py-5 text-xs font-black uppercase tracking-widest shadow-2xl transition-all">
                  <Link href="/contact">
                    Brighten My Space <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              className="relative h-[400px] md:h-[600px] rounded-[48px] overflow-hidden border border-white/10 shadow-3xl group"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/images/installations/skytube-warehouse.png"
                alt="Skytube Real-World Warehouse Installation"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-8 rounded-[32px] flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-black text-white uppercase tracking-tighter mb-1">Piped Sunshine</p>
                    <p className="text-gray-400 text-xs font-medium italic">Zero Electricity. Infinite Light.</p>
                  </div>
                  <div className="bg-brand-orange-500/10 px-4 py-2 rounded-xl border border-brand-orange-500/20 font-black text-[9px] uppercase tracking-widest text-brand-orange-400">
                    HYBRID
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CredentialStrip />

      {/* Industrial Impact Grid - Optimized */}
      <section className="py-24 px-6 lg:px-12 bg-slate-950 border-b border-white/5">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-1.5 mb-6">
              <Eye className="h-3 w-3 text-brand-orange-400" />
              <h2 className="text-[9px] font-black text-gray-400 uppercase tracking-widest leading-none">Product Suitability</h2>
            </div>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-3 text-white">Industrial <span className="text-brand-orange-500">Impact</span></h2>
            <p className="text-gray-500 font-bold uppercase tracking-[0.2em] text-[9px]">Real-World Deployment Results</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {suitabilityImages.map((img, i) => (
              <motion.div
                key={i}
                className="group relative h-[300px] rounded-[40px] overflow-hidden border border-white/5 shadow-xl"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Image src={img.src} alt={img.title} fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
                <div className="absolute bottom-8 left-8">
                  <span className="bg-brand-orange-500 text-white text-[7px] font-black uppercase px-3 py-1 rounded-full mb-2 inline-block tracking-widest">
                    {img.type}
                  </span>
                  <h4 className="text-lg font-black uppercase text-white tracking-tight">{img.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Surfaces - Refined Scale */}
      <section className="py-24 px-6 lg:px-12 bg-slate-950 border-y border-white/5 relative">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            <div className="lg:w-1/3">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-6 leading-none">Installation <br /><span className="text-brand-orange-500">Surfaces</span></h2>
              <p className="text-gray-500 text-sm md:text-base font-medium leading-relaxed max-w-sm">
                Our mounting systems integrate seamlessly with all standard industrial roof profiles without risking leaks.
              </p>
            </div>
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { name: "Metal Sheet", desc: "For PEB Sheds", img: "/images/products/skytube/app-warehouse.png" },
                { name: "Standing Seam", desc: "For Premium Roofs", img: "/images/products/skytube/installation-internal.jpg" },
                { name: "Cement Sheet", desc: "For Legacy Units", img: "/images/products/skytube/app-warehouse.png" }
              ].map((surface, i) => (
                <div key={i} className="group relative h-[350px] md:h-[400px] rounded-[40px] overflow-hidden border border-white/10 shadow-2xl transition-all hover:border-brand-orange-500/40">
                  <Image src={surface.img} alt={surface.name} fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
                  <div className="absolute bottom-8 left-0 right-0 px-6 text-center">
                    <h4 className="text-xl font-black uppercase text-white mb-1 tracking-tighter">{surface.name}</h4>
                    <p className="text-brand-orange-500 text-[8px] font-black uppercase tracking-[0.2em]">{surface.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* System Anatomy Section - Densified */}
      <section className="py-24 px-6 lg:px-12 bg-slate-950 relative overflow-hidden">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            <div className="lg:w-1/2 space-y-10">
              <div className="inline-flex items-center gap-2 bg-brand-orange-500/10 border border-brand-orange-500/20 rounded-full px-5 py-1.5">
                <Box className="h-3.5 w-3.5 text-brand-orange-400" />
                <span className="text-[9px] font-black uppercase tracking-widest text-brand-orange-400">System Anatomy</span>
              </div>
              <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
                Piped <br /><span className="text-brand-orange-500">Innovation</span>
              </h2>
              <p className="text-sm md:text-base text-gray-500 font-medium leading-relaxed max-w-lg italic">
                &quot;The science of zero-loss light channelling for industrial scale.&quot;
              </p>

              <div className="space-y-3">
                {components.map((c, i) => (
                  <motion.div
                    key={i}
                    className="flex gap-6 items-start p-6 rounded-[32px] border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-brand-orange-500/20 transition-all group"
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <div className="bg-brand-orange-500/10 p-3 rounded-xl group-hover:bg-brand-orange-500 transition-all text-brand-orange-500 group-hover:text-white">
                      <Settings className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-black uppercase tracking-tighter mb-1.5 text-white">{c.name}</h4>
                      <p className="text-[11px] text-gray-500 font-medium leading-relaxed">{c.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2 relative h-[500px] md:h-[700px] w-full flex items-center justify-center">
              <div className="relative w-full h-full bg-slate-900/30 rounded-[64px] border border-white/5 shadow-3xl flex items-center justify-center overflow-hidden">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="relative w-[110%] h-[110%]"
                >
                  <Image
                    src="/images/products/skytube/anatomy.png"
                    alt="Skytube Exploded View"
                    fill
                    className="object-contain p-10 drop-shadow-[0_0_40px_rgba(249,115,22,0.2)]"
                  />
                </motion.div>
                <div className="absolute top-1/4 right-8 bg-slate-800/80 backdrop-blur-md shadow-2xl p-6 rounded-[32px] border border-white/10 max-w-[180px] z-20">
                  <p className="text-[8px] font-black uppercase text-brand-orange-400 mb-1 tracking-widest">Efficiency</p>
                  <p className="text-xs font-black leading-tight text-white">99.7% Spectral Mirror Pipes</p>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-orange-500/5 blur-[120px] rounded-full -z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hybrid Ventilation Section - Refined */}
      <section className="py-24 px-6 lg:px-12 bg-slate-950 overflow-hidden relative border-y border-white/5">
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center">
            <div className="relative group p-6 md:p-10 bg-white/5 rounded-[64px] border border-white/5">
              <motion.div
                className="relative h-[350px] md:h-[450px] w-full bg-slate-800/30 rounded-[48px] overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
              >
                <Image src="/images/products/skytube/hybrid-unit.png" alt="Hybrid Unit" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-40" />
              </motion.div>
              <div className="absolute -bottom-4 right-4 md:-bottom-6 md:right-0 bg-brand-orange-500 text-white px-8 py-3.5 rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-2xl z-20">
                Light + Air Integration
              </div>
            </div>
            <div className="space-y-10">
              <div className="inline-flex items-center gap-2.5 bg-brand-orange-500/10 border border-brand-orange-500/20 rounded-full px-6 py-2">
                <Recycle className="h-3.5 w-3.5 text-brand-orange-500" />
                <span className="text-[9px] font-black uppercase tracking-widest text-brand-orange-500">Hybrid Performance</span>
              </div>
              <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
                Two-in-One <br /><span className="brand-gradient-text">Power</span>
              </h2>
              <p className="text-base md:text-lg text-gray-500 font-medium leading-relaxed max-w-lg">
                Our Hybrid roof units combine SKYTUBE lighting with NANOVENT extraction in a single, high-efficiency system.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { title: "Daylight Path", val: "99.7% Mirror" },
                  { title: "Ventilation", val: "Turbo Extraction" },
                  { title: "Base Mount", val: "Single Profile" },
                  { title: "Integrity", val: "100% Leak Proof" }
                ].map((stat, i) => (
                  <div key={i} className="border-l-[3px] border-brand-orange-500 pl-5">
                    <p className="text-[8px] font-black uppercase text-gray-600 mb-1 tracking-widest">{stat.title}</p>
                    <p className="text-base font-black text-white uppercase tracking-tighter">{stat.val}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Procedure Section - Compact */}
      <section className="py-24 px-6 lg:px-12 bg-slate-950 relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none opacity-50" />
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-1.5 mb-6">
              <HardHat className="h-3 w-3 text-brand-orange-400" />
              <h2 className="text-[9px] font-black text-gray-400 uppercase tracking-widest leading-none">Global Deployment</h2>
            </div>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-3 text-white leading-none">Engineered <br /><span className="brand-gradient-text">Execution</span></h2>
            <p className="text-gray-500 font-bold uppercase tracking-[0.2em] text-[9px]">Rapid Industrial Deployment</p>
          </div>
          <div className="grid md:grid-cols-5 gap-4">
            {[
              { step: "01", title: "Roof Cut", desc: "Precision cut with industrial tools.", icon: Gauge },
              { step: "02", title: "Base Fix", desc: "Heavy duty seals & structural fix.", icon: HardHat },
              { step: "03", title: "Reflector", desc: "99.7% reflectivity panels.", icon: Sparkles },
              { step: "04", title: "Optical Dome", desc: "Maximum light collection fix.", icon: Sun },
              { step: "05", title: "Diffuser", desc: "Uniform interior illumination.", icon: Sparkles }
            ].map((step, i) => (
              <div key={i} className="relative p-6 bg-white/[0.02] border border-white/5 rounded-[32px] group hover:bg-white/[0.04] hover:border-brand-orange-500/20 transition-all duration-500">
                <div className="absolute -top-2 -left-2 bg-brand-orange-500 text-white px-3 py-1 rounded-lg font-black text-xs shadow-lg border border-slate-900 group-hover:bg-white group-hover:text-black transition-all">
                  {step.step}
                </div>
                <step.icon className="h-8 w-8 text-brand-orange-400 mb-5 transition-transform group-hover:scale-110" />
                <h4 className="text-sm font-black uppercase tracking-tighter mb-2 text-white">{step.title}</h4>
                <p className="text-gray-500 text-[9px] font-medium leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-10 border-t border-white/5 pt-10">
            {[
              { label: "Install Time", val: "45 – 60 mins", icon: Gauge },
              { label: "Maintenance", val: "Self-cleaning", icon: Droplets },
              { label: "Warranty", val: "1 Year Standard", icon: ShieldCheck }
            ].map((spec, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="p-2.5 bg-brand-orange-500/10 rounded-xl">
                  <spec.icon className="h-4 w-4 text-brand-orange-500" />
                </div>
                <div>
                  <p className="text-[8px] font-black uppercase text-gray-600 tracking-widest">{spec.label}</p>
                  <p className="text-xs font-black text-white">{spec.val}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Matrix - Densified */}
      <section className="py-24 px-6 lg:px-12 bg-slate-950 border-t border-white/5">
        <div className="container mx-auto max-w-5xl">
          <div className="flex items-center gap-4 mb-12">
            <Ruler className="h-8 w-8 text-brand-orange-500" />
            <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter leading-none text-white">Standard <br /><span className="text-gray-600 text-xl md:text-3xl">Dimensions</span></h2>
          </div>
          <div className="overflow-hidden rounded-[32px] border border-white/5 bg-white/[0.01]">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-white/[0.02] border-b border-white/10">
                    <th className="p-6 text-[9px] font-black uppercase tracking-widest text-gray-500">Model Series</th>
                    <th className="p-6 text-[9px] font-black uppercase tracking-widest text-gray-500">Model Length</th>
                    <th className="p-6 text-[9px] font-black uppercase tracking-widest text-gray-500">Dome (WxH)</th>
                    <th className="p-6 text-[9px] font-black uppercase tracking-widest text-brand-orange-500">Diffuser (H)</th>
                  </tr>
                </thead>
                <tbody className="text-[11px]">
                  {dimensions.map((row, i) => (
                    <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors last:border-0">
                      <td className="p-6 text-white font-black uppercase tracking-tighter">{row.model}</td>
                      <td className="p-6 text-gray-500 font-bold">{row.dLen}</td>
                      <td className="p-6 text-gray-500 font-bold">{row.dWid} x {row.dHi}</td>
                      <td className="p-6 text-brand-orange-500 font-black italic">{row.difHi}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            {[
              "3050mm x 280 mm",
              "3500mm x 650 mm",
              "4500mm x 600 mm"
            ].map((s, i) => (
              <div key={i} className="bg-brand-orange-500/5 border border-brand-orange-500/10 p-6 rounded-2xl">
                <p className="text-[8px] font-black text-brand-orange-500 uppercase tracking-widest mb-1 leading-none">Standard Supply Size</p>
                <p className="text-xl font-black text-white">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Optimized */}
      <section className="py-24 relative px-6 lg:px-12 bg-slate-950 border-t border-white/5">
        <div className="container mx-auto">
          <motion.div
            className="bg-brand-gradient py-12 md:py-20 px-8 rounded-[48px] text-center shadow-2xl shadow-brand-orange-500/10 relative overflow-hidden max-w-4xl mx-auto"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none opacity-50" />
            <Sparkles className="h-10 w-10 text-white/20 mx-auto mb-6" />
            <h2 className="text-3xl md:text-6xl font-black text-white mb-10 tracking-tighter uppercase leading-none relative z-10">Piped Sunshine</h2>
            <div className="flex flex-wrap justify-center gap-4 relative z-10">
              <Button asChild className="bg-white text-black hover:bg-slate-900 hover:text-white transition-all duration-300 rounded-xl px-12 py-5 text-xs font-black uppercase tracking-widest shadow-2xl shadow-white/5">
                <Link href="/contact">
                  Request Technical Audit <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
