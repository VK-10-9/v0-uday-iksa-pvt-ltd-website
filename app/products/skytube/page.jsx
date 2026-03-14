"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Sun, ShieldCheck, Zap, Sparkles, CheckCircle2, Layers, Factory, Building2, Layout, Box, Settings, Ruler, Droplets, HardHat, Gauge, Phone, Star, ChevronDown, ChevronRight, Maximize2, Circle, RectangleHorizontal, Square } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import CredentialStrip from "@/components/product/CredentialStrip"
import ProductTrustSection from "@/components/product/ProductTrustSection"

export default function SkytubePage() {
  const [activeFamily, setActiveFamily] = useState("narrow")
  const [activeModel, setActiveModel] = useState("narrow-1080")

  const families = {
    narrow: {
      name: "Narrow Series",
      width: "280mm Wide",
      bestFor: "Corridors, narrow factory aisles, single-lane bays, machine rows",
      description: "The slimmest of the SKYTUBE range. Ideal for narrow spaces where you need a continuous strip of natural light but don't have the roof width for a wider unit. Works well in corridors, along machine rows, and in narrow storage aisles.",
      models: [
        {
          id: "narrow-1080",
          name: "1080mm × 280mm",
          subtitle: "Short and narrow — perfect for a small corridor or compact bay section.",
          specs: [
            { label: "Dimensions (W × L × H)", value: "280mm × 1080mm × 100mm (±5%)" },
            { label: "Shape", value: "Rectangle" },
            { label: "Flange Size", value: "50mm all around" },
            { label: "Suitable Roof Height", value: "Below 12 Feet", highlight: true },
            { label: "No. of Reflectors", value: "5" },
            { label: "Reflector Diameter", value: "200mm (±5%)" },
            { label: "Reflector Height", value: "60mm (±5%)" },
            { label: "Reflector Material", value: "Aluminium, 95%+ reflective" },
            { label: "Diffuser Size", value: "600mm × 4460mm" },
            { label: "Diffuser Material", value: "Optical Polycarbonate (diamond embossed)" },
            { label: "Lux Output", value: "150 – 250 Lux", highlight: true },
          ]
        },
        {
          id: "narrow-1650",
          name: "1650mm × 280mm",
          subtitle: "A medium-length narrow strip — covers a longer section of corridor or aisle in one unit.",
          specs: [
            { label: "Dimensions (W × L × H)", value: "280mm × 1650mm × 100mm (±5%)" },
            { label: "Shape", value: "Rectangle" },
            { label: "Flange Size", value: "50mm all around" },
            { label: "Suitable Roof Height", value: "Below 16 Feet", highlight: true },
            { label: "No. of Reflectors", value: "5" },
            { label: "Reflector Diameter", value: "200mm (±5%)" },
            { label: "Reflector Height", value: "200mm (±5%)" },
            { label: "Reflector Material", value: "Aluminium, 95%+ reflective" },
            { label: "Diffuser Size", value: "280mm × 1600mm" },
            { label: "Diffuser Material", value: "Optical Polycarbonate (diamond embossed)" },
            { label: "Lux Output", value: "150 – 250 Lux", highlight: true },
          ]
        },
        {
          id: "narrow-3050",
          name: "3050mm × 280mm",
          subtitle: "Long and narrow — designed for lengthy corridors or extended single-aisle runs.",
          specs: [
            { label: "Dimensions (W × L × H)", value: "280mm × 3050mm × 80mm (±5%)" },
            { label: "Shape", value: "Rectangle" },
            { label: "Flange Size", value: "60mm all around" },
            { label: "Suitable Roof Height", value: "Below 20 Feet", highlight: true },
            { label: "No. of Reflectors", value: "5" },
            { label: "Reflector Diameter", value: "90mm (±5%)" },
            { label: "Reflector Height", value: "50mm (±5%)" },
            { label: "Reflector Material", value: "Aluminium, 95%+ reflective" },
            { label: "Diffuser Size", value: "280mm × 3000mm" },
            { label: "Diffuser Material", value: "Optical Polycarbonate (diamond embossed)" },
            { label: "Lux Output", value: "150 – 250 Lux", highlight: true },
          ]
        },
      ]
    },
    medium: {
      name: "Medium Series",
      width: "450mm Wide",
      bestFor: "Standard factory bays, production lines, medium-width warehouse aisles",
      description: "The most commonly installed SKYTUBE width. Covers standard factory bays well — wide enough for good light spread across the floor below, available in multiple lengths to match your bay.",
      models: [
        {
          id: "medium-1080",
          name: "1080mm × 450mm",
          subtitle: "Entry-level medium unit — for shorter bay sections or spaces with limited roof area.",
          specs: [
            { label: "Dimensions (W × L × H)", value: "450mm × 1080mm × 150mm (±5%)" },
            { label: "Shape", value: "Rectangle" },
            { label: "Flange Size", value: "50mm all around" },
            { label: "Suitable Roof Height", value: "Below 12 Feet", highlight: true },
            { label: "No. of Reflectors", value: "10" },
            { label: "Reflector Diameter", value: "200mm (±5%)" },
            { label: "Reflector Height", value: "60mm (±5%)" },
            { label: "Reflector Material", value: "Aluminium, 95%+ reflective" },
            { label: "Diffuser Size", value: "450mm × 3960mm" },
            { label: "Diffuser Material", value: "Optical Polycarbonate (diamond embossed)" },
            { label: "Lux Output", value: "150 – 250 Lux", highlight: true },
          ]
        },
        {
          id: "medium-3600",
          name: "3600mm × 450mm",
          subtitle: "A full bay-length unit — light runs almost the full span of a standard industrial shed bay.",
          specs: [
            { label: "Dimensions (W × L × H)", value: "450mm × 3600mm × 175mm (±5%)" },
            { label: "Shape", value: "Rectangle" },
            { label: "Flange Size", value: "50mm all around" },
            { label: "Suitable Roof Height", value: "Below 12 Feet", highlight: true },
            { label: "No. of Reflectors", value: "5" },
            { label: "Reflector Diameter", value: "200mm (±5%)" },
            { label: "Reflector Height", value: "60mm (±5%)" },
            { label: "Reflector Material", value: "Aluminium, 95%+ reflective" },
            { label: "Diffuser Size", value: "450mm × 3560mm" },
            { label: "Diffuser Material", value: "Optical Polycarbonate (diamond embossed)" },
            { label: "Lux Output", value: "150 – 250 Lux", highlight: true },
          ]
        },
        {
          id: "medium-4000",
          name: "4000mm × 450mm",
          subtitle: "Our longest medium-width unit — ideal for full-length bay lighting in standard PEB sheds.",
          specs: [
            { label: "Dimensions (W × L × H)", value: "450mm × 4000mm × 150mm (±5%)" },
            { label: "Shape", value: "Rectangle" },
            { label: "Flange Size", value: "50mm all around" },
            { label: "Suitable Roof Height", value: "Below 12 Feet", highlight: true },
            { label: "No. of Reflectors", value: "10" },
            { label: "Reflector Diameter", value: "200mm (±5%)" },
            { label: "Reflector Height", value: "60mm (±5%)" },
            { label: "Reflector Material", value: "Aluminium, 95%+ reflective" },
            { label: "Diffuser Size", value: "450mm × 3960mm" },
            { label: "Diffuser Material", value: "Optical Polycarbonate (diamond embossed)" },
            { label: "Lux Output", value: "150 – 250 Lux", highlight: true },
          ]
        },
      ]
    },
    wide: {
      name: "Wide Series",
      width: "600–680mm Wide",
      bestFor: "Large open factory floors, high-bay warehouses, tall industrial buildings",
      description: "The widest SKYTUBE units — built for serious industrial environments. The wider aperture captures more daylight and spreads it across a bigger floor area. The 600mm × 3050mm unit is our highest-output SKYTUBE — reaching up to 600 Lux.",
      models: [
        {
          id: "wide-1080",
          name: "1080mm × 600mm",
          subtitle: "Medium-length wide unit — good for large bay sections where bright, even light is needed.",
          specs: [
            { label: "Dimensions (W × L × H)", value: "600mm × 1080mm × 100mm (±5%)" },
            { label: "Shape", value: "Elliptical" },
            { label: "Flange Size", value: "40mm all around" },
            { label: "Suitable Roof Height", value: "Below 20 Feet", highlight: true },
            { label: "No. of Reflectors", value: "5" },
            { label: "Reflector Diameter", value: "280mm (±5%)" },
            { label: "Reflector Height", value: "100mm (±5%)" },
            { label: "Reflector Material", value: "Aluminium, 95%+ reflective" },
            { label: "Diffuser Size", value: "600mm × 960mm" },
            { label: "Diffuser Material", value: "Optical Polycarbonate (diamond embossed)" },
            { label: "Lux Output", value: "150 – 300 Lux", highlight: true },
          ]
        },
        {
          id: "wide-3050",
          name: "3050mm × 600mm",
          star: true,
          subtitle: "Our star performer. 12 reflectors, wide aperture, suitable for roof heights up to 40 feet — delivering the highest lux output of any SKYTUBE unit.",
          specs: [
            { label: "Dimensions (W × L × H)", value: "600mm × 3050mm × 100mm (±5%)" },
            { label: "Shape", value: "Rectangle" },
            { label: "Flange Size", value: "60mm all around" },
            { label: "Suitable Roof Height", value: "Below 40 Feet", highlight: true },
            { label: "No. of Reflectors", value: "12", highlight: true },
            { label: "Reflector Diameter", value: "200mm (±5%)" },
            { label: "Reflector Height", value: "50mm (±5%)" },
            { label: "Reflector Material", value: "Aluminium, 95%+ reflective" },
            { label: "Diffuser Size", value: "580mm × 3000mm" },
            { label: "Diffuser Material", value: "Optical Polycarbonate (diamond embossed)" },
            { label: "Lux Output", value: "300 – 600 Lux", highlight: true },
          ]
        },
        {
          id: "wide-4000",
          name: "4000mm × 600mm",
          subtitle: "Long and wide — covers a large bay area with even, consistent natural light.",
          specs: [
            { label: "Dimensions (W × L × H)", value: "600mm × 4000mm × 100mm (±5%)" },
            { label: "Shape", value: "Rectangle" },
            { label: "Flange Size", value: "50mm all around" },
            { label: "Suitable Roof Height", value: "Below 12 Feet", highlight: true },
            { label: "No. of Reflectors", value: "10" },
            { label: "Reflector Diameter", value: "200mm (±5%)" },
            { label: "Reflector Height", value: "60mm (±5%)" },
            { label: "Reflector Material", value: "Aluminium, 95%+ reflective" },
            { label: "Diffuser Size", value: "600mm × 3960mm" },
            { label: "Diffuser Material", value: "Optical Polycarbonate (diamond embossed)" },
            { label: "Lux Output", value: "150 – 250 Lux", highlight: true },
          ]
        },
        {
          id: "wide-4500",
          name: "4500mm × 680mm",
          subtitle: "Our longest and widest standard unit — for the largest bays in heavy industrial facilities.",
          specs: [
            { label: "Dimensions (W × L × H)", value: "680mm × 4500mm × 175mm (±5%)" },
            { label: "Shape", value: "Rectangle" },
            { label: "Flange Size", value: "50mm all around" },
            { label: "Suitable Roof Height", value: "Below 12 Feet", highlight: true },
            { label: "No. of Reflectors", value: "5" },
            { label: "Reflector Diameter", value: "200mm (±5%)" },
            { label: "Reflector Height", value: "60mm (±5%)" },
            { label: "Reflector Material", value: "Aluminium, 95%+ reflective" },
            { label: "Diffuser Size", value: "680mm × 4460mm" },
            { label: "Diffuser Material", value: "Optical Polycarbonate (diamond embossed)" },
            { label: "Lux Output", value: "150 – 250 Lux", highlight: true },
          ]
        },
      ]
    },
    dome: {
      name: "Dome Series",
      width: "Fixed Flat Roof",
      bestFor: "Flat RCC roofs where a dome profile is preferred over a strip",
      description: "Alongside the tabular strip range, we also offer fixed rectangular and square dome units for flat RCC roofs where a shaped dome profile is preferred over a strip.",
      models: [
        {
          id: "dome-rect",
          name: "Rectangular — 550mm × 660mm",
          subtitle: "A compact rectangular dome for flat roofs — simple, clean, and effective for small to medium spaces.",
          specs: [
            { label: "Dimensions (W × L × H)", value: "550mm × 660mm × 150mm (±5%)" },
            { label: "Shape", value: "Rectangle" },
            { label: "Flange Size", value: "50mm all around" },
            { label: "Suitable Roof Height", value: "Below 12 Feet", highlight: true },
            { label: "Reflectance", value: "≤ 95%" },
            { label: "Lux Output", value: "150 – 250 Lux", highlight: true },
          ]
        },
        {
          id: "dome-square",
          name: "Square — 900mm × 900mm",
          subtitle: "A large square dome — architectural and functional. Floods the room below with natural daylight.",
          specs: [
            { label: "Dimensions (W × L × H)", value: "900mm × 900mm × 175mm (±5%)" },
            { label: "Shape", value: "Square" },
            { label: "Dome Size (L × W)", value: "900mm × 900mm" },
            { label: "Base Neck Inner", value: "880mm × 880mm" },
            { label: "Base Neck Outer", value: "1200mm × 1200mm" },
            { label: "Thickness", value: "3mm" },
            { label: "Suitable Roof Height", value: "Up to 12 Feet", highlight: true },
          ]
        },
      ]
    }
  }

  const comparisonData = [
    { label: "Shape", circular: "Round dome", skytube: "Rectangular strip" },
    { label: "Light Pattern", circular: "Circular pool of light", skytube: "Long strip — lights entire bay" },
    { label: "Best For", circular: "Individual rooms, specific zones", skytube: "Factory aisles, warehouse bays, corridors" },
    { label: "Profile on Roof", circular: "Dome (raised)", skytube: "Low-profile panel (80–175mm flat)" },
    { label: "Roof Types", circular: "PEB, RCC, Tile", skytube: "PEB / Pitched Roof" },
    { label: "How It Works", circular: "Single reflector pipe", skytube: "Multiple reflectors spread along length" },
  ]

  const quickCompare = [
    { model: "Narrow 1080", width: "280mm", length: "1080mm", height: "Below 12 ft", reflectors: "5", lux: "150–250", bestFor: "Short corridors, small bays" },
    { model: "Narrow 1650", width: "280mm", length: "1650mm", height: "Below 16 ft", reflectors: "5", lux: "150–250", bestFor: "Medium corridors" },
    { model: "Narrow 3050", width: "280mm", length: "3050mm", height: "Below 20 ft", reflectors: "5", lux: "150–250", bestFor: "Long narrow aisles" },
    { model: "Medium 1080", width: "450mm", length: "1080mm", height: "Below 12 ft", reflectors: "10", lux: "150–250", bestFor: "Short factory sections" },
    { model: "Medium 3600", width: "450mm", length: "3600mm", height: "Below 12 ft", reflectors: "5", lux: "150–250", bestFor: "Standard bay lighting" },
    { model: "Medium 4000", width: "450mm", length: "4000mm", height: "Below 12 ft", reflectors: "10", lux: "150–250", bestFor: "Full bay, standard shed" },
    { model: "Wide 1080", width: "600mm", length: "1080mm", height: "Below 20 ft", reflectors: "5", lux: "150–300", bestFor: "Large sections, taller bays" },
    { model: "Wide 3050", width: "600mm", length: "3050mm", height: "Below 40 ft", reflectors: "12", lux: "300–600", bestFor: "High-bay, large industrial", star: true },
    { model: "Wide 4000", width: "600mm", length: "4000mm", height: "Below 12 ft", reflectors: "10", lux: "150–250", bestFor: "Long wide bays" },
    { model: "Wide 4500", width: "680mm", length: "4500mm", height: "Below 12 ft", reflectors: "5", lux: "150–250", bestFor: "Largest bays" },
    { model: "Rect. Dome", width: "550mm", length: "660mm", height: "Below 12 ft", reflectors: "—", lux: "150–250", bestFor: "Flat roof, compact" },
    { model: "Sq. Dome", width: "900mm", length: "900mm", height: "Up to 12 ft", reflectors: "—", lux: "—", bestFor: "Flat roof, architectural" },
  ]

  const currentFamily = families[activeFamily]
  const currentModel = currentFamily.models.find(m => m.id === activeModel) || currentFamily.models[0]

  return (
    <main className="pt-24 bg-slate-950 min-h-screen text-white overflow-hidden">

      {/* ── HERO SECTION ── */}
      <section className="relative py-8 md:py-12 overflow-hidden px-6 lg:px-12 border-b border-white/5">
        <div className="absolute inset-0 bg-brand-orange-500/5 blur-[120px] rounded-full transform translate-y-1/2" />
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-1.5 mb-8 backdrop-blur-md">
                <Zap className="h-3 w-3 text-brand-orange-400" />
                <h2 className="text-[9px] font-black text-gray-400 uppercase tracking-widest leading-none">NANOSUN™ SKYTUBE Tabular Daylight</h2>
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tighter uppercase leading-[0.9]">
                Light That Runs <br />The Length of <br /><span className="brand-gradient-text">Your Building</span>
              </h1>
              <p className="text-sm md:text-base text-gray-400 mb-6 leading-relaxed max-w-xl font-medium">
                The SKYTUBE is not a single dome. It&apos;s a long rectangular light strip that sits on your roof and floods an entire factory bay, warehouse aisle, or large hall with natural daylight — from one end to the other. <span className="text-white font-bold">No electricity. No wires.</span> Just sunlight, spread evenly across the length of your space.
              </p>
              <p className="text-xs text-gray-500 mb-10 max-w-xl font-medium">
                Available in widths from 280mm to 680mm and lengths up to 4500mm — sized to match your exact roof bay.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-10">
                {["Factory Bays", "Warehouse Aisles", "Corridors", "Large Halls"].map((f, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-[10px] font-black uppercase tracking-widest text-gray-500">
                    <CheckCircle2 className="h-3.5 w-3.5 text-brand-orange-500" />
                    {f}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-white text-black hover:bg-slate-900 hover:text-white rounded-xl px-10 py-4 text-xs font-black uppercase tracking-widest shadow-2xl transition-all">
                  <Link href="/contact">
                    Get a Free Assessment <ArrowRight className="ml-2 h-4 w-4" />
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
              className="relative aspect-square rounded-[48px] border border-white/10 bg-white/[0.02] shadow-3xl overflow-hidden group"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/images/gallery/skytube/standing seam roof sheeting 1.png"
                alt="NANOSUN SKYTUBE Tabular Daylight System"
                fill
                className="object-contain p-20 opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] group-hover:opacity-[0.04] transition-opacity -z-10">
                <p className="text-[200px] font-black uppercase tracking-tighter select-none -rotate-12">SKYTUBE</p>
              </div>
              <div className="absolute bottom-12 left-12 right-12 z-10">
                <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-8 rounded-[32px]">
                  <p className="text-xl md:text-2xl font-black text-white uppercase tracking-tighter mb-1">Tabular Daylight</p>
                  <p className="text-gray-400 text-[11px] font-medium max-w-xs">Like a tube light from above — only it runs on sunshine, not electricity.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CredentialStrip />

      {/* ── SKYTUBE VS CIRCULAR COMPARISON ── */}
      <section className="py-10 px-6 lg:px-12 bg-slate-950/50 border-b border-white/5">
        <div className="container mx-auto">
          <div className="text-center mb-16 px-4">
            <h2 className="text-2xl md:text-4xl font-black text-white mb-4 uppercase tracking-tighter leading-none">
              How Is SKYTUBE Different <span className="brand-gradient-text">From Circular?</span>
            </h2>
            <div className="h-0.5 w-16 bg-brand-orange-500 rounded-full mx-auto mb-6" />
            <p className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto font-medium">
              This is the question most customers ask first — and it&apos;s a good one.
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
                        <Circle className="h-3.5 w-3.5 text-brand-orange-400" />
                        NANOSUN™ Circular
                      </div>
                    </th>
                    <th className="p-5 text-[9px] font-black uppercase tracking-widest text-brand-orange-500">
                      <div className="flex items-center gap-2">
                        <RectangleHorizontal className="h-3.5 w-3.5" />
                        NANOSUN™ SKYTUBE
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="text-[11px]">
                  {comparisonData.map((row, i) => (
                    <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors last:border-0">
                      <td className="p-5 text-[9px] font-black uppercase tracking-widest text-gray-600">{row.label}</td>
                      <td className="p-5 text-gray-400 font-medium">{row.circular}</td>
                      <td className="p-5 text-white font-bold">{row.skytube}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mt-8 bg-brand-orange-500/5 border border-brand-orange-500/10 p-6 md:p-8 rounded-[24px]">
            <p className="text-sm md:text-base text-gray-300 font-medium leading-relaxed text-center">
              <span className="text-brand-orange-500 font-black">In simple terms:</span> If a circular NANOSUN is like a <span className="text-white font-bold">spotlight</span> from above, the SKYTUBE is like a <span className="text-white font-bold">tube light</span> from above — only it runs on sunshine, not electricity.
            </p>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-10 relative px-6 lg:px-12 bg-slate-950">
        <div className="container mx-auto">
          <div className="text-center mb-16 px-4">
            <h2 className="text-2xl md:text-4xl font-black text-white mb-4 uppercase tracking-tighter leading-none">How It <span className="brand-gradient-text">Works</span></h2>
            <div className="h-0.5 w-16 bg-brand-orange-500 rounded-full mx-auto mb-6" />
            <p className="text-sm md:text-base text-gray-500 max-w-xl mx-auto font-medium">Three stages from rooftop to factory floor — zero electricity at every step.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mb-16">
            {[
              {
                step: "01",
                title: "Roof Panel",
                subtitle: "Light Collector",
                description: "A flat rectangular panel sits on your pitched roof — low profile, barely visible from the outside. It collects natural daylight across its entire length, not just from one point.",
                icon: Sun,
              },
              {
                step: "02",
                title: "Reflectors",
                subtitle: "Along the Length",
                description: "Inside the panel, a series of aluminium reflectors (5, 10, or 12 depending on size) are spaced evenly along the length. Each one captures and directs light downward — so the entire strip is lit, not just the centre.",
                icon: Layers,
              },
              {
                step: "03",
                title: "Diffuser",
                subtitle: "Full-Length at Ceiling",
                description: "A continuous diffuser panel at ceiling level spreads the light softly and evenly across the floor below — like a long glowing ceiling panel, but powered entirely by the sun.",
                icon: Maximize2,
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-white/[0.02] border border-white/5 p-10 rounded-[40px] hover:border-brand-orange-500/20 transition-all group relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="absolute -top-3 -left-3 bg-brand-orange-500 text-white px-4 py-1.5 rounded-xl font-black text-sm shadow-lg border-2 border-slate-950 group-hover:bg-white group-hover:text-black transition-all">
                  {item.step}
                </div>
                <div className="bg-brand-orange-500/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-orange-500 transition-all duration-500">
                  <item.icon className="h-6 w-6 text-brand-orange-500 group-hover:text-white" />
                </div>
                <h3 className="text-[9px] font-black text-brand-orange-500 uppercase tracking-widest mb-3 leading-none">{item.subtitle}</h3>
                <h4 className="text-xl md:text-2xl font-black text-white uppercase tracking-tighter mb-6">{item.title}</h4>
                <p className="text-gray-500 text-xs font-medium leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Key Benefits Strip */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              "Zero Electricity During Daytime",
              "UV & Heat Filtered",
              "Low-Profile on Roof",
              "Leak-Proof Flanged Design",
              "Flame Retardant Materials",
            ].map((benefit, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-3 p-4 rounded-2xl bg-white/[0.02] border border-white/5 group hover:border-brand-orange-500/20 transition-all">
                <div className="w-8 h-8 bg-brand-orange-500/10 rounded-xl flex items-center justify-center group-hover:bg-brand-orange-500 transition-colors">
                  <CheckCircle2 className="h-4 w-4 text-brand-orange-500 group-hover:text-white" />
                </div>
                <span className="text-[8px] font-black text-gray-500 uppercase tracking-widest leading-tight">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCT FAMILY SELECTOR ── */}
      <section className="py-10 relative px-6 lg:px-12 bg-slate-900/20 border-y border-white/5">
        <div className="container mx-auto">
          {/* Section Header */}
          <div className="grid lg:grid-cols-2 gap-16 items-start pb-8 border-b border-white/5 mb-10">
            <div>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-white uppercase tracking-tighter mb-6 leading-tight">Product <br /><span className="brand-gradient-text">Families</span></h2>
              <p className="text-sm md:text-base text-gray-500 max-w-md font-medium leading-relaxed">
                The SKYTUBE range is organised into three families based on width — each suited to different bay sizes and light requirements. Within each family, you choose the length that matches your roof bay.
              </p>
            </div>
            {/* Family tabs */}
            <div className="flex flex-wrap gap-2 pt-4">
              {Object.entries(families).map(([key, family]) => (
                <button
                  key={key}
                  onClick={() => { setActiveFamily(key); setActiveModel(family.models[0].id) }}
                  className={`px-5 py-2.5 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all ${activeFamily === key
                    ? "bg-brand-orange-500 text-white shadow-xl shadow-brand-orange-500/10"
                    : "bg-white/5 text-gray-500 hover:bg-white/10"
                  }`}
                >
                  {family.name}
                </button>
              ))}
            </div>
          </div>

          {/* Family Info Banner */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFamily}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="bg-white/[0.02] border border-white/5 rounded-[32px] p-8 md:p-10 mb-10"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
                <div className="shrink-0">
                  <span className="bg-brand-orange-500/10 text-brand-orange-500 border border-brand-orange-500/20 px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest">
                    {currentFamily.width}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-black text-white uppercase tracking-tighter mb-2">{currentFamily.name}</h3>
                  <p className="text-xs text-gray-500 font-medium leading-relaxed max-w-2xl">{currentFamily.description}</p>
                  <p className="text-[10px] text-brand-orange-500 font-black uppercase tracking-widest mt-3">Best for: <span className="text-gray-400 font-medium normal-case">{currentFamily.bestFor}</span></p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Model Selector Chips */}
          <div className="flex flex-wrap gap-2 mb-10">
            {currentFamily.models.map((model) => (
              <button
                key={model.id}
                onClick={() => setActiveModel(model.id)}
                className={`px-5 py-2.5 rounded-xl text-[9px] font-black uppercase tracking-tighter md:tracking-widest transition-all flex items-center gap-2 ${activeModel === model.id
                  ? "bg-white text-black shadow-xl"
                  : "bg-white/5 text-gray-500 hover:bg-white/10"
                }`}
              >
                {model.star && <Star className="h-3 w-3 text-brand-orange-500" />}
                {model.name}
              </button>
            ))}
          </div>

          {/* Active Model Detail */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentModel.id}
              initial={{ opacity: 0, scale: 0.99 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="grid lg:grid-cols-12 gap-12 items-start"
            >
              <div className="lg:col-span-5 space-y-8">
                <div className="inline-flex items-center gap-3 bg-brand-orange-500/10 px-4 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-orange-500 animate-pulse" />
                  <span className="text-[9px] font-black text-white uppercase tracking-widest">{currentModel.name}</span>
                  {currentModel.star && (
                    <span className="bg-brand-orange-500 text-white text-[7px] font-black uppercase px-2 py-0.5 rounded-full tracking-widest ml-1">Highest Output</span>
                  )}
                </div>
                <p className="text-sm md:text-base text-gray-400 leading-relaxed font-medium">{currentModel.subtitle}</p>

                <Button asChild className="bg-white text-black hover:bg-slate-900 hover:text-white rounded-xl px-10 py-5 text-xs font-black uppercase tracking-widest shadow-xl group">
                  <Link href="/contact">
                    Request Pricing <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>

              <div className="lg:col-span-1 hidden lg:block border-l border-white/5 h-64 mx-auto" />

              <div className="lg:col-span-6 grid grid-cols-1 gap-3">
                {currentModel.specs.map((spec, i) => (
                  <div
                    key={i}
                    className={`flex justify-between items-center px-6 md:px-8 py-4 md:py-5 rounded-[24px] border ${spec.highlight
                      ? "bg-brand-orange-500/5 border-brand-orange-500/20"
                      : "bg-white/5 border-white/5"
                    }`}
                  >
                    <span className="text-[8px] md:text-[9px] font-black text-gray-600 uppercase tracking-widest">{spec.label}</span>
                    <span className={`text-xs md:text-sm font-black text-right ${spec.highlight ? "text-brand-orange-500" : "text-white"}`}>{spec.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── FULL QUICK COMPARISON TABLE ── */}
      <section className="py-10 px-6 lg:px-12 bg-slate-950 border-b border-white/5">
        <div className="container mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <Ruler className="h-8 w-8 text-brand-orange-500" />
            <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter leading-none text-white">Full Range <br /><span className="text-gray-600 text-xl md:text-3xl">Comparison</span></h2>
          </div>
          <div className="overflow-hidden rounded-[32px] border border-white/5 bg-white/[0.01]">
            <div className="overflow-x-auto">
              <table className="w-full text-left min-w-[800px]">
                <thead>
                  <tr className="bg-white/[0.03] border-b border-white/10">
                    <th className="p-4 md:p-5 text-[8px] font-black uppercase tracking-widest text-gray-500">Model</th>
                    <th className="p-4 md:p-5 text-[8px] font-black uppercase tracking-widest text-gray-500">Width</th>
                    <th className="p-4 md:p-5 text-[8px] font-black uppercase tracking-widest text-gray-500">Length</th>
                    <th className="p-4 md:p-5 text-[8px] font-black uppercase tracking-widest text-gray-500">Roof Height</th>
                    <th className="p-4 md:p-5 text-[8px] font-black uppercase tracking-widest text-gray-500">Reflectors</th>
                    <th className="p-4 md:p-5 text-[8px] font-black uppercase tracking-widest text-brand-orange-500">Lux</th>
                    <th className="p-4 md:p-5 text-[8px] font-black uppercase tracking-widest text-gray-500">Best For</th>
                  </tr>
                </thead>
                <tbody className="text-[10px] md:text-[11px]">
                  {quickCompare.map((row, i) => (
                    <tr key={i} className={`border-b border-white/5 hover:bg-white/[0.02] transition-colors last:border-0 ${row.star ? "bg-brand-orange-500/5" : ""}`}>
                      <td className="p-4 md:p-5 text-white font-black uppercase tracking-tighter whitespace-nowrap">
                        {row.model} {row.star && <Star className="inline h-3 w-3 text-brand-orange-500 ml-1" />}
                      </td>
                      <td className="p-4 md:p-5 text-gray-400 font-bold">{row.width}</td>
                      <td className="p-4 md:p-5 text-gray-400 font-bold">{row.length}</td>
                      <td className="p-4 md:p-5 text-gray-400 font-bold">{row.height}</td>
                      <td className="p-4 md:p-5 text-gray-400 font-bold">{row.reflectors}</td>
                      <td className={`p-4 md:p-5 font-black ${row.star ? "text-brand-orange-500" : "text-brand-orange-400"}`}>{row.lux}</td>
                      <td className="p-4 md:p-5 text-gray-500 font-medium">{row.bestFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHERE IS SKYTUBE USED ── */}
      <section className="py-10 px-6 lg:px-12 bg-slate-950 border-b border-white/5">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-black text-white mb-4 uppercase tracking-tighter leading-none">Where Is SKYTUBE <span className="brand-gradient-text">Used?</span></h2>
            <div className="h-0.5 w-16 bg-brand-orange-500 rounded-full mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Factory, title: "Factories & Production Plants", desc: "Light runs the full length of each production bay" },
              { icon: Building2, title: "Warehouses & Logistics", desc: "Every aisle is naturally lit, all day" },
              { icon: Layout, title: "Commercial Buildings", desc: "Long corridors, open-plan floors, retail areas" },
              { icon: Box, title: "Schools & Institutions", desc: "Long corridors, sports halls, canteens" },
              { icon: HardHat, title: "Stations & Public Infrastructure", desc: "Long covered platforms and walkways" },
              { icon: Settings, title: "Any PEB / Pitched Roof", desc: "Where bay-length lighting is needed" },
            ].map((use, i) => (
              <motion.div
                key={i}
                className="group relative p-8 rounded-[32px] overflow-hidden border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-brand-orange-500/20 transition-all"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <use.icon className="h-10 w-10 text-brand-orange-500/30 mb-6 group-hover:text-brand-orange-500 group-hover:scale-110 transition-all duration-500" />
                <h4 className="text-sm font-black uppercase text-white tracking-tighter mb-2">{use.title}</h4>
                <p className="text-[11px] text-gray-500 font-medium leading-relaxed">{use.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── KEY BENEFITS ── */}
      <section className="py-10 bg-slate-950 border-b border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-black text-white mb-4 uppercase tracking-tighter leading-none">Key <span className="brand-gradient-text">Benefits</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {[
              "Lights entire factory bays, not just spots",
              "Up to 600 Lux output — matches industrial requirements",
              "Zero electricity during the day",
              "Low-profile on roof — sits nearly flat (80–175mm)",
              "Multiple sizes — match any bay width and length",
              "UV and heat filtered — comfortable light, no fading",
              "Flame retardant — FR-rated for industrial safety",
              "Leak-proof flanged design — monsoon-ready",
              "Made in India by Uday IKSA, Hubballi",
            ].map((benefit, i) => (
              <div key={i} className="flex items-start gap-3 p-5 rounded-2xl bg-white/[0.02] border border-white/5 group hover:border-brand-orange-500/20 transition-all">
                <CheckCircle2 className="h-4 w-4 text-brand-orange-500 shrink-0 mt-0.5" />
                <span className="text-xs font-bold text-gray-400 leading-relaxed">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST SECTION ── */}
      <ProductTrustSection />

      {/* ── FINAL CTA ── */}
      <section className="py-12 relative px-6 lg:px-12 bg-slate-950 border-t border-white/5">
        <div className="container mx-auto">
          <motion.div
            className="bg-brand-gradient py-12 md:py-20 px-8 rounded-[48px] text-center shadow-2xl shadow-brand-orange-500/10 relative overflow-hidden max-w-4xl mx-auto"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none opacity-50" />
            <Sparkles className="h-10 w-10 text-white/20 mx-auto mb-6" />
            <h2 className="text-2xl md:text-5xl font-black text-white mb-4 tracking-tighter uppercase leading-none relative z-10">Tell Us Your Bay Size.</h2>
            <p className="text-base md:text-lg text-white/70 font-medium mb-10 relative z-10 max-w-xl mx-auto">
              The right unit depends on your roof bay width, bay length, roof height, and the lux level you need. Our team will calculate the exact placement for even light distribution across your entire floor.
            </p>
            <div className="flex flex-wrap justify-center gap-4 relative z-10">
              <Button asChild className="bg-white text-black hover:bg-slate-900 hover:text-white transition-all duration-300 rounded-xl px-12 py-5 text-xs font-black uppercase tracking-widest shadow-2xl shadow-white/5">
                <Link href="/contact">
                  Get a Free Assessment <ArrowRight className="ml-2 h-4 w-4" />
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
