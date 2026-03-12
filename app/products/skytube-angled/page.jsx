"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sun, Zap, Sparkles, CheckCircle2, Layers, Factory, Building2, Box, Settings, Ruler, Phone, CornerDownRight, CornerRightDown, RotateCcw, Maximize2, HardHat, Lightbulb, Home, Hotel, School, Stethoscope, ShoppingBag } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import CredentialStrip from "@/components/product/CredentialStrip"
import ProductTrustSection from "@/components/product/ProductTrustSection"

export default function SkytubeAngledPage() {

  const howItWorks = [
    {
      step: "01",
      title: "Roof Dome",
      subtitle: "Light Collector on Top",
      description: "An optical dome or flat panel sits on your roof — exactly like the Standard SKYTUBE. This captures ambient daylight from the sky, even on cloudy days.",
      icon: Sun,
    },
    {
      step: "02",
      title: "Angled Reflector Pipe",
      subtitle: "Bends Around Obstacles",
      description: "Instead of a straight vertical drop, the reflector pipe uses 45° or 90° bends to navigate around beams, ducts, walls, or structural elements. Light bounces through the highly reflective aluminium pipe with minimal loss — even through multiple bends.",
      icon: CornerDownRight,
    },
    {
      step: "03",
      title: "Extended Reach",
      subtitle: "Up to 7–8 Metres Deep",
      description: "The pipe can extend well beyond a single floor — reaching rooms on lower floors, side walls, or deep interior spaces that have no direct roof access. Our team designs the exact routing during the site visit.",
      icon: Maximize2,
    },
    {
      step: "04",
      title: "Diffuser Panel",
      subtitle: "Clean Light at Ceiling Level",
      description: "A frosted diffuser panel at the ceiling delivers soft, even natural light below — whether it's a false ceiling, exposed slab, or any finished interior. Looks like a premium light fitting, powered by the sun.",
      icon: Lightbulb,
    },
  ]

  const vsStandard = [
    { label: "Light Path", standard: "Straight vertical drop", angled: "Routed around obstacles via 45°/90° bends" },
    { label: "Max Reach", standard: "Directly below roof opening", angled: "Up to 7–8 metres from roof point" },
    { label: "Lower Floors", standard: "Top floor only", angled: "Can reach 2nd or 3rd floor from terrace" },
    { label: "Side Wall Entry", standard: "Not possible", angled: "Yes — horizontal routing through wall" },
    { label: "False Ceilings", standard: "Basic compatibility", angled: "Designed for POP/gypsum cavity routing" },
    { label: "Best For", standard: "Direct roof-to-room, open plans", angled: "Complex layouts, multi-storey, deep interiors" },
  ]

  const applications = [
    { icon: Factory, title: "Multi-Storey Industrial", desc: "Light from terrace roof reaches production floors below through extended reflector pipes with bends." },
    { icon: Building2, title: "Corporate Offices", desc: "Meeting rooms, cabins, and open areas deep inside the floorplate — no window needed." },
    { icon: Home, title: "Homes with False Ceilings", desc: "Living rooms, bedrooms, kitchens — diffuser sits flush with POP/gypsum ceiling, invisible from inside." },
    { icon: Hotel, title: "Hotels & Hospitality", desc: "Guest rooms, corridors, reception areas — natural light as a luxury amenity." },
    { icon: School, title: "Schools & Institutions", desc: "Classrooms and corridors on lower floors — healthier learning under natural light." },
    { icon: Stethoscope, title: "Hospitals & Healthcare", desc: "Patient rooms and waiting areas where natural light aids recovery and comfort." },
  ]

  const keyBenefits = [
    "Reaches rooms that have no direct roof access above them",
    "Navigates around beams, ducts, walls, and structural elements",
    "Works through false ceiling cavities — POP, gypsum, metal grid",
    "Can reach up to 7–8 metres deep from the roof opening",
    "45° and 90° bends with 95%+ reflective aluminium pipes",
    "Diffuser sits flush — looks like a premium recessed fitting",
    "Zero electricity during daytime",
    "UV and heat filtered — safe for interiors and false ceiling materials",
    "Can be retrofitted in finished buildings with minimal disruption",
  ]

  const faqs = [
    {
      q: "How much light is lost through bends?",
      a: "Very little. Our reflector pipes maintain 95%+ reflectance even through bends. A single 45° or 90° bend typically reduces output by only 5–10%. Most installations with 1–2 bends still deliver excellent daylight levels.",
    },
    {
      q: "Can it reach a room on the second floor from the terrace?",
      a: "Yes. Using extended reflector pipes and angled bends, we can bring daylight down up to 7–8 metres from the roof. So a room on the second floor of a three-storey building can still get natural light from the terrace.",
    },
    {
      q: "Can it enter through a side wall instead of the roof?",
      a: "Yes — using 45° or 90° bends in the reflector pipe, we can redirect the light horizontally to reach a side wall opening. This is used where roof access is limited. Our team evaluates during the site visit.",
    },
    {
      q: "Will it look out of place in my false ceiling?",
      a: "Not at all. The diffuser panel sits flush and clean within the false ceiling. It looks like a premium architectural light fitting — most people assume it's an expensive LED panel until they realise it's actually sunlight.",
    },
    {
      q: "Can I add LED backup for nighttime?",
      a: "Yes — ask about our hybrid units that include an LED fitting in the same diffuser panel. Same clean ceiling look, 24-hour lighting.",
    },
  ]

  return (
    <main className="pt-24 bg-slate-950 min-h-screen text-white overflow-hidden">

      {/* ── HERO SECTION ── */}
      <section className="relative py-16 md:py-24 overflow-hidden px-6 lg:px-12 border-b border-white/5">
        <div className="absolute inset-0 bg-brand-orange-500/5 blur-[120px] rounded-full transform translate-y-1/2" />
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-1.5 mb-8 backdrop-blur-md">
                <CornerDownRight className="h-3 w-3 text-brand-orange-400" />
                <h2 className="text-[9px] font-black text-gray-400 uppercase tracking-widest leading-none">SKYTUBE™ Angled / Bend Configurations</h2>
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tighter uppercase leading-[0.9]">
                Daylight That <br />Bends Around <br /><span className="brand-gradient-text">Obstacles</span>
              </h1>
              <p className="text-sm md:text-base text-gray-400 mb-6 leading-relaxed max-w-xl font-medium">
                Not every room sits directly below the roof. Some are on lower floors. Some are behind walls. Some have beams, ducts, or false ceilings in the way. The <span className="text-white font-bold">Angled SKYTUBE</span> solves all of this — using 45° and 90° bends in the reflector pipe to route natural daylight around any obstacle, reaching up to <span className="text-white font-bold">7–8 metres</span> from the roof opening.
              </p>
              <p className="text-xs text-gray-500 mb-10 max-w-xl font-medium">
                Same proven SKYTUBE technology. Same 95%+ reflective aluminium pipes. Just smarter routing.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-10">
                {["Multi-Storey Buildings", "False Ceiling Rooms", "Side Wall Entry", "Deep Interiors"].map((f, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-[10px] font-black uppercase tracking-widest text-gray-500">
                    <CheckCircle2 className="h-3.5 w-3.5 text-brand-orange-500" />
                    {f}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-white text-black hover:bg-slate-900 hover:text-white rounded-xl px-10 py-4 text-xs font-black uppercase tracking-widest shadow-2xl transition-all">
                  <Link href="/contact">
                    Book a Free Site Visit <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-white/10 hover:border-brand-orange-500/40 text-white rounded-xl px-8 py-4 text-[10px] font-black uppercase tracking-widest backdrop-blur-md">
                  <Link href="tel:+918792182631">
                    <Phone className="mr-2 h-3.5 w-3.5" /> +91 8792182631
                  </Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              className="relative aspect-square rounded-[48px] border border-white/10 bg-white/[0.02] shadow-3xl overflow-hidden group flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] group-hover:opacity-[0.04] transition-opacity -z-10">
                <p className="text-[160px] font-black uppercase tracking-tighter select-none -rotate-12">BEND</p>
              </div>
              <div className="relative z-10 text-center p-12">
                <CornerRightDown className="h-32 w-32 text-brand-orange-400/20 mx-auto mb-8 group-hover:scale-110 transition-transform duration-700" />
                <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-8 rounded-[32px]">
                  <p className="text-xl md:text-2xl font-black text-white uppercase tracking-tighter mb-1">Angled Routing</p>
                  <p className="text-gray-400 text-[11px] font-medium max-w-xs">45° and 90° bends — light reaches where straight pipes can&apos;t.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CredentialStrip />

      {/* ── STANDARD VS ANGLED COMPARISON ── */}
      <section className="py-20 px-6 lg:px-12 bg-slate-950/50 border-b border-white/5">
        <div className="container mx-auto">
          <div className="text-center mb-16 px-4">
            <h2 className="text-2xl md:text-4xl font-black text-white mb-4 uppercase tracking-tighter leading-none">
              Standard vs <span className="brand-gradient-text">Angled SKYTUBE</span>
            </h2>
            <div className="h-0.5 w-16 bg-brand-orange-500 rounded-full mx-auto mb-6" />
            <p className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto font-medium">
              Both use the same core SKYTUBE technology. The difference is in how the light is routed from roof to room.
            </p>
          </div>

          <div className="max-w-4xl mx-auto overflow-hidden rounded-[32px] border border-white/5 bg-white/[0.01]">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-white/[0.03] border-b border-white/10">
                    <th className="p-5 text-[9px] font-black uppercase tracking-widest text-gray-500" />
                    <th className="p-5 text-[9px] font-black uppercase tracking-widest text-gray-400">
                      <div className="flex items-center gap-2">
                        <Layers className="h-3.5 w-3.5" />
                        Standard SKYTUBE
                      </div>
                    </th>
                    <th className="p-5 text-[9px] font-black uppercase tracking-widest text-brand-orange-500">
                      <div className="flex items-center gap-2">
                        <CornerDownRight className="h-3.5 w-3.5" />
                        Angled / Bend
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="text-[11px]">
                  {vsStandard.map((row, i) => (
                    <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors last:border-0">
                      <td className="p-5 text-[9px] font-black uppercase tracking-widest text-gray-600">{row.label}</td>
                      <td className="p-5 text-gray-400 font-medium">{row.standard}</td>
                      <td className="p-5 text-white font-bold">{row.angled}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mt-8 bg-brand-orange-500/5 border border-brand-orange-500/10 p-6 md:p-8 rounded-[24px]">
            <p className="text-sm md:text-base text-gray-300 font-medium leading-relaxed text-center">
              <span className="text-brand-orange-500 font-black">In simple terms:</span> The Standard SKYTUBE goes <span className="text-white font-bold">straight down</span>. The Angled SKYTUBE can go <span className="text-white font-bold">down, sideways, and around corners</span> — reaching rooms that a straight pipe never could.
            </p>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-20 relative px-6 lg:px-12 bg-slate-950">
        <div className="container mx-auto">
          <div className="text-center mb-16 px-4">
            <h2 className="text-2xl md:text-4xl font-black text-white mb-4 uppercase tracking-tighter leading-none">How It <span className="brand-gradient-text">Works</span></h2>
            <div className="h-0.5 w-16 bg-brand-orange-500 rounded-full mx-auto mb-6" />
            <p className="text-sm md:text-base text-gray-500 max-w-xl mx-auto font-medium">Four stages from rooftop to deep interior — zero electricity at every step.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {howItWorks.map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-white/[0.02] border border-white/5 p-8 rounded-[32px] hover:border-brand-orange-500/20 transition-all group relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="absolute -top-3 -left-3 bg-brand-orange-500 text-white px-4 py-1.5 rounded-xl font-black text-sm shadow-lg border-2 border-slate-950 group-hover:bg-white group-hover:text-black transition-all">
                  {item.step}
                </div>
                <div className="bg-brand-orange-500/10 w-12 h-12 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-orange-500 transition-all duration-500">
                  <item.icon className="h-5 w-5 text-brand-orange-500 group-hover:text-white" />
                </div>
                <h3 className="text-[9px] font-black text-brand-orange-500 uppercase tracking-widest mb-2 leading-none">{item.subtitle}</h3>
                <h4 className="text-lg font-black text-white uppercase tracking-tighter mb-4">{item.title}</h4>
                <p className="text-gray-500 text-[11px] font-medium leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Bend Specs Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Bend Angles", value: "45° & 90°" },
              { label: "Max Reach", value: "7–8 Metres" },
              { label: "Pipe Reflectance", value: "95%+" },
              { label: "Signal Loss / Bend", value: "~5–10%" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-3 p-5 rounded-2xl bg-white/[0.02] border border-white/5 group hover:border-brand-orange-500/20 transition-all">
                <span className="text-lg md:text-xl font-black text-brand-orange-500">{stat.value}</span>
                <span className="text-[8px] font-black text-gray-500 uppercase tracking-widest leading-tight">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHERE IT'S USED ── */}
      <section className="py-20 px-6 lg:px-12 bg-slate-950 border-y border-white/5">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-black text-white mb-4 uppercase tracking-tighter leading-none">Where It&apos;s <span className="brand-gradient-text">Used</span></h2>
            <div className="h-0.5 w-16 bg-brand-orange-500 rounded-full mx-auto mb-6" />
            <p className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto font-medium">
              Any space where a straight vertical pipe from roof to room isn&apos;t possible — the Angled SKYTUBE gets light there.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {applications.map((app, i) => (
              <motion.div
                key={i}
                className="group relative p-8 rounded-[32px] overflow-hidden border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-brand-orange-500/20 transition-all"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <app.icon className="h-10 w-10 text-brand-orange-500/30 mb-6 group-hover:text-brand-orange-500 group-hover:scale-110 transition-all duration-500" />
                <h4 className="text-sm font-black uppercase text-white tracking-tighter mb-2">{app.title}</h4>
                <p className="text-[11px] text-gray-500 font-medium leading-relaxed">{app.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── KEY BENEFITS ── */}
      <section className="py-16 bg-slate-950 border-b border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-black text-white mb-4 uppercase tracking-tighter leading-none">Key <span className="brand-gradient-text">Benefits</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {keyBenefits.map((benefit, i) => (
              <div key={i} className="flex items-start gap-3 p-5 rounded-2xl bg-white/[0.02] border border-white/5 group hover:border-brand-orange-500/20 transition-all">
                <CheckCircle2 className="h-4 w-4 text-brand-orange-500 shrink-0 mt-0.5" />
                <span className="text-xs font-bold text-gray-400 leading-relaxed">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ SECTION ── */}
      <section className="py-20 px-6 lg:px-12 bg-slate-950 border-b border-white/5">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-black text-white mb-4 uppercase tracking-tighter leading-none">Common <span className="brand-gradient-text">Questions</span></h2>
            <div className="h-0.5 w-16 bg-brand-orange-500 rounded-full mx-auto" />
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                className="bg-white/[0.02] border border-white/5 rounded-[24px] p-6 md:p-8 hover:border-brand-orange-500/20 transition-all"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <h4 className="text-sm md:text-base font-black text-white mb-3">{faq.q}</h4>
                <p className="text-xs md:text-sm text-gray-400 font-medium leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST SECTION ── */}
      <ProductTrustSection />

      {/* ── FINAL CTA ── */}
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
            <h2 className="text-2xl md:text-5xl font-black text-white mb-4 tracking-tighter uppercase leading-none relative z-10">Light Can&apos;t Reach Your Room?</h2>
            <p className="text-base md:text-lg text-white/70 font-medium mb-10 relative z-10 max-w-xl mx-auto">
              Tell us your layout. We&apos;ll design the exact routing — bends, pipe length, and placement — to get natural light exactly where you need it.
            </p>
            <div className="flex flex-wrap justify-center gap-4 relative z-10">
              <Button asChild className="bg-white text-black hover:bg-slate-900 hover:text-white transition-all duration-300 rounded-xl px-12 py-5 text-xs font-black uppercase tracking-widest shadow-2xl shadow-white/5">
                <Link href="/contact">
                  Book a Free Site Visit <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-white/30 hover:border-white text-white rounded-xl px-8 py-5 text-[10px] font-black uppercase tracking-widest">
                <Link href="tel:+918792182631">
                  <Phone className="mr-2 h-3.5 w-3.5" /> Call: +91 8792182631
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
