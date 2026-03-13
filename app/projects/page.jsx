"use client"

import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  ArrowRight, 
  Globe2, 
  MapPin, 
  Train, 
  Paintbrush, 
  Settings, 
  Building2, 
  Layers, 
  TrendingUp,
  Filter,
  Search,
  ChevronDown,
  Phone,
  FileSearch,
  Factory,
  Building,
  GraduationCap,
  ShieldCheck,
  Hotel,
  Stethoscope
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { clients, growthData, sectorHighlights } from "@/lib/data/clients"

const stats = [
  { label: "Units Installed", value: "1,900+", icon: Layers, color: "text-brand-orange-500" },
  { label: "Clients Served", value: "46+", icon: Building2, color: "text-brand-amber-500" },
  { label: "States Covered", value: "14", icon: MapPin, color: "text-brand-yellow-500" },
  { label: "Years Active", value: "6", icon: TrendingUp, color: "text-brand-orange-400" },
]

const sectorIcons = {
  "Railways": Train,
  "Industrial": Factory,
  "PSU": Building,
  "Hospitality": Hotel,
  "Education": GraduationCap,
  "Pharma": Stethoscope,
  "Institutional": Building2,
  "Other": Settings
}

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [sortConfig, setSortConfig] = useState({ key: 'year', direction: 'desc' })

  // Filter and sort clients
  const filteredClients = useMemo(() => {
    return clients
      .filter(client => {
        const matchesTab = activeTab === "all" || client.sector === activeTab;
        const matchesSearch = client.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                             client.state.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesTab && matchesSearch;
      })
      .sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === 'asc' ? -1 : 1;
        if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === 'asc' ? 1 : -1;
        return 0;
      });
  }, [activeTab, searchTerm, sortConfig]);

  const sectors = ["all", ...new Set(clients.map(c => c.sector))];

  return (
    <main className="min-h-screen bg-slate-950 text-white pt-20">
      {/* --- PAGE HERO --- */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-brand-orange-500/10 blur-[120px] rounded-full opacity-50 pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 bg-brand-orange-500/10 border border-brand-orange-500/20 rounded-full text-brand-orange-500 text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                Portfolio of Trust
              </span>
              <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
                Trusted Across <span className="brand-gradient-text">India.</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 font-black uppercase tracking-widest mb-10 max-w-3xl mx-auto border-y border-white/10 py-6">
                From Factory Floors to Railway Workshops.
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-gray-400 font-medium text-lg mb-12">
                <div className="flex items-center gap-2">
                  <span className="text-brand-orange-500 font-black">1,900+</span> units installed
                </div>
                <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-white/20" />
                <div className="flex items-center gap-2">
                  <span className="text-brand-orange-500 font-black">46</span> clients served
                </div>
                <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-white/20" />
                <div className="flex items-center gap-2">
                  <span className="text-brand-orange-500 font-black">14</span> states covered
                </div>
              </div>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
                From a single Caterpillar plant in Chennai to 11 Berger Paints factories spread across the country — our clients are some of India's most respected industrial names. They choose us because natural daylight simply works — and they want it done right.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- HEADLINE STATS --- */}
      <section className="py-20 bg-white/[0.02] border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative group p-8 rounded-[32px] bg-slate-900/50 border border-white/5 hover:border-brand-orange-500/30 transition-all duration-500"
              >
                <div className={`w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${stat.color}`}>
                  <stat.icon size={24} />
                </div>
                <div className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-2">{stat.value}</div>
                <div className="text-[10px] uppercase font-black tracking-widest text-gray-500 group-hover:text-brand-orange-400 transition-colors">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTOR HIGHLIGHTS --- */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="mb-20">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">Sector <span className="brand-gradient-text">Highlights</span></h2>
            <p className="text-gray-400 text-lg max-w-2xl font-medium">Dominance across India's most critical infrastructure sectors.</p>
          </div>

          <div className="space-y-12">
            {sectorHighlights.map((sector, i) => (
              <motion.div
                key={sector.id}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group relative bg-slate-900/40 rounded-[48px] overflow-hidden border border-white/5 hover:border-brand-orange-500/20 transition-all duration-700"
              >
                <div className="grid lg:grid-cols-2 gap-12 p-8 md:p-14 items-center">
                  <div className="space-y-8">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-3xl bg-brand-orange-500 flex items-center justify-center shadow-lg shadow-brand-orange-500/20">
                        {sector.id === 'railways' ? <Train size={32} /> : sector.id === 'berger' ? <Paintbrush size={32} /> : <Settings size={32} />}
                      </div>
                      <div>
                        <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight">{sector.title}</h3>
                        <p className="text-brand-orange-400 font-black uppercase tracking-[0.2em] text-[10px]">{sector.stats}</p>
                      </div>
                    </div>
                    <p className="text-gray-300 text-lg leading-relaxed font-medium">
                      {sector.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {sector.projects.map((proj, idx) => (
                        <span key={idx} className="px-4 py-2 bg-white/5 rounded-xl border border-white/5 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                          {proj}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
                     <Image 
                        src={`/images/gallery/${sector.id === 'railways' ? 'nanovent/RCC - Turbo Ventilator .png' : sector.id === 'berger' ? 'nanosun/Hindupur Berger Paints India Ltd 20.jpeg' : 'nanosun/Gujarat Berger Paints India Ltd.6.jpeg'}`}
                        alt={sector.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-1000"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- GROWTH STORY --- */}
      <section className="py-32 bg-slate-900/30">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">
                Growing Every Year — <span className="brand-gradient-text">Without Exception</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 font-medium">
                In 2021, we installed 170 units. In 2025, that number was 679 — a 4x growth in four years.
              </p>
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10 space-y-4">
                <p className="text-gray-400 italic text-sm">
                  "The growth isn't from advertising. It's from clients who installed once, saw the results, and came back — or recommended us to others."
                </p>
              </div>
            </div>

            <div className="relative p-10 bg-slate-950 rounded-[48px] border border-white/5 shadow-inner">
              <div className="flex items-end justify-between h-[400px] gap-4 md:gap-8 pt-10">
                {growthData.map((data, i) => {
                  const height = (data.units / 700) * 100;
                  return (
                    <div key={i} className="flex-1 flex flex-col items-center group relative h-full justify-end">
                      <div className="absolute -top-12 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-brand-orange-500 text-white text-[10px] font-black px-3 py-1.5 rounded-lg mb-2 shadow-xl">
                        {data.units} UNITS
                      </div>
                      <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: `${height}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 1, ease: "easeOut" }}
                        className="w-full bg-gradient-to-t from-brand-orange-600 to-brand-amber-400 rounded-t-2xl shadow-lg relative cursor-help"
                      >
                         <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-white transition-opacity" />
                      </motion.div>
                      <div className="pt-4 text-center">
                        <div className="text-sm font-black text-white">{data.year}</div>
                        <div className="text-[7px] text-gray-500 uppercase tracking-widest hidden md:block max-w-[80px] leading-tight mt-1">{data.highlight}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FULL CLIENT LIST --- */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">Installed Across <span className="brand-gradient-text">India</span></h2>
              <p className="text-gray-400 text-lg font-medium">14 states. Every major industrial corridor. From Jammu to Tirupati, Ghaziabad to Goa.</p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 h-4 w-4" />
                <input 
                  type="text" 
                  placeholder="Filter by name or state..."
                  className="bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-6 text-sm focus:outline-none focus:border-brand-orange-500/50 transition-all w-full md:w-[300px]"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex gap-2">
                {sectors.slice(0, 5).map(s => (
                  <button
                    key={s}
                    onClick={() => setActiveTab(s)}
                    className={`px-6 py-4 rounded-2xl text-[9px] font-black uppercase tracking-widest transition-all ${activeTab === s ? "bg-brand-orange-500 text-white shadow-xl shadow-brand-orange-500/20" : "bg-white/5 text-gray-500 hover:bg-white/10 border border-white/5"}`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Card View (Visible only on mobile) */}
          <div className="grid grid-cols-1 gap-6 lg:hidden">
            <AnimatePresence mode="popLayout">
              {filteredClients.map((client, idx) => {
                const SectorIcon = sectorIcons[client.sector] || Settings;
                return (
                  <motion.div
                    key={client.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="p-8 rounded-[32px] bg-slate-900/50 border border-white/5 space-y-6"
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-brand-orange-500">
                          <SectorIcon size={24} />
                        </div>
                        <div>
                          <h4 className="text-xl font-black text-white uppercase tracking-tight leading-tight">{client.name}</h4>
                          <div className="flex items-center gap-2 text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">
                            <MapPin size={12} className="text-brand-orange-500" />
                            {client.state}
                          </div>
                        </div>
                      </div>
                      <div className="bg-brand-orange-500/10 text-brand-orange-500 px-4 py-2 rounded-full font-black text-xs h-fit">
                        {client.units}
                      </div>
                    </div>
                    <div className="flex justify-between items-center pt-6 border-t border-white/5">
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-600">{client.sector}</span>
                      <span className="text-lg font-black text-white/40">{client.year}</span>
                    </div>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>

          {/* Desktop Table View (Hidden on mobile) */}
          <div className="hidden lg:block overflow-x-auto rounded-[40px] border border-white/5 bg-slate-900/30 backdrop-blur-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="p-8 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">Organisation / Facility</th>
                  <th className="p-8 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">State</th>
                  <th className="p-8 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">Units</th>
                  <th className="p-8 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">Sector</th>
                  <th className="p-8 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">Year</th>
                </tr>
              </thead>
              <tbody>
                <AnimatePresence mode="popLayout">
                  {filteredClients.map((client, idx) => {
                    const SectorIcon = sectorIcons[client.sector] || Settings;
                    return (
                      <motion.tr 
                        key={client.name}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="border-b border-white/5 hover:bg-white/[0.02] transition-colors group"
                      >
                        <td className="p-8">
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-brand-orange-500 transition-colors">
                              <SectorIcon size={20} />
                            </div>
                            <span className="text-lg font-black text-white uppercase tracking-tight">{client.name}</span>
                          </div>
                        </td>
                        <td className="p-8 text-gray-400 font-bold uppercase tracking-widest text-[10px]">
                          <div className="flex items-center gap-2">
                             <MapPin size={12} className="text-brand-orange-500" />
                             {client.state}
                          </div>
                        </td>
                        <td className="p-8">
                          <span className="bg-brand-orange-500/10 text-brand-orange-500 px-4 py-1.5 rounded-full font-black text-xs">
                            {client.units}
                          </span>
                        </td>
                        <td className="p-8 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
                          {client.sector}
                        </td>
                        <td className="p-8 font-black text-white/50 group-hover:text-white transition-colors">
                          {client.year}
                        </td>
                      </motion.tr>
                    )
                  })}
                </AnimatePresence>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* --- CALLOUTS --- */}
      <section className="py-20">
        <div className="container mx-auto px-6">
           <div className="grid md:grid-cols-3 gap-10">
              <div className="p-12 rounded-[48px] bg-brand-gradient-2 relative overflow-hidden group">
                <Train className="absolute -right-8 -bottom-8 w-40 h-40 opacity-10 group-hover:scale-110 transition-transform duration-1000" />
                <h4 className="text-2xl font-black uppercase tracking-tighter mb-6 relative z-10">Railways</h4>
                <p className="text-lg font-medium leading-relaxed mb-8 relative z-10">
                  "From Dahod to Varanasi to the Western Railway — Indian Railways runs on sunshine now."
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white group-hover:gap-4 transition-all">
                  Request Case Study <ArrowRight size={14} className="text-brand-orange-500" />
                </Link>
              </div>
              
              <div className="p-12 rounded-[48px] bg-slate-900 border border-white/10 relative overflow-hidden group">
                <Paintbrush className="absolute -right-8 -bottom-8 w-40 h-40 opacity-10 group-hover:scale-110 transition-transform duration-1000" />
                <h4 className="text-2xl font-black uppercase tracking-tighter mb-6 relative z-10">National Rollout</h4>
                <p className="text-lg font-medium leading-relaxed mb-8 relative z-10">
                  "One installation became eleven. Berger Paints trusts us nationwide."
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white group-hover:gap-4 transition-all">
                  Get ROI Analysis <ArrowRight size={14} className="text-brand-orange-500" />
                </Link>
              </div>

              <div className="p-12 rounded-[48px] bg-brand-gradient relative overflow-hidden group">
                <ShieldCheck className="absolute -right-8 -bottom-8 w-40 h-40 opacity-10 group-hover:scale-110 transition-transform duration-1000" />
                <h4 className="text-2xl font-black uppercase tracking-tighter mb-6 relative z-10">Global Standards</h4>
                <p className="text-lg font-medium leading-relaxed mb-8 relative z-10">
                  "224 units. Caterpillar's global site quality standards. Zero compromises."
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white group-hover:gap-4 transition-all">
                  View Standards <ArrowRight size={14} className="text-white" />
                </Link>
              </div>
           </div>
        </div>
      </section>

      {/* --- BOTTOM CTA --- */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <motion.div 
            className="relative bg-white rounded-[64px] p-12 md:p-24 overflow-hidden text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_#000_1px,_transparent_1px)] bg-[length:40px_40px]" />
            </div>
            
            <div className="relative z-10">
              <span className="text-brand-orange-500 font-extrabold uppercase tracking-[0.4em] text-[10px] mb-8 inline-block">Join the Leaders</span>
              <h2 className="text-5xl md:text-8xl font-black text-black uppercase tracking-tighter leading-[0.9] mb-8">
                Your Facility <br /><span className="text-brand-orange-500">Could Be Next.</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 font-medium max-w-2xl mx-auto mb-16 leading-relaxed">
                We've lit up factories, railway workshops, pharma plants, luxury hotels, and engineering colleges. If it has a roof and needs daylight, we have the solution.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link href="/contact">
                  <button className="bg-black text-white px-12 py-6 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-brand-orange-500 transition-all duration-500 shadow-xl flex items-center gap-3">
                    Get Free Site Assessment <ArrowRight size={20} />
                  </button>
                </Link>
                <a href="tel:+918792182631">
                  <button className="bg-white border-2 border-black/10 text-black px-12 py-6 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-gray-100 transition-all duration-500 flex items-center gap-3">
                    <Phone size={20} className="text-brand-orange-500" /> +91 8792182631
                  </button>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
