"use client"

import { motion } from "framer-motion"
import { Building2, Users, Lightbulb, ChevronRight, Target, Eye, Heart, ArrowRight, Linkedin, Calendar, Trophy, CheckCircle2, Factory, Zap, Shield, Globe, Award, Sparkles, Sun, Maximize2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { HoverButton } from "@/components/ui/hover-button"

export default function AboutPage() {
  return (
    <main className="pt-24 bg-slate-950">
      {/* Hero Section */}
      <section className="relative py-8 md:py-10 overflow-hidden">
        <div className="absolute inset-0 bg-brand-orange-500/5 blur-3xl rounded-full transform -translate-y-1/2"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tighter uppercase leading-tight">
              Why Pay for <span className="brand-gradient-text">Sunlight?</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-medium max-w-xl mx-auto">
              15+ years of patented daylighting & ventilation solutions for industrial and residential buildings.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="story" className="py-10 relative border-t border-white/5">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">Our Story</h2>
                <div className="h-1 w-16 bg-brand-orange-500 rounded-full mb-8"></div>
                <div className="space-y-6 text-gray-400 text-base leading-relaxed font-medium">
                  <p>
                    Uday IKSA began as a small Hubballi team passionate about natural light. After years of identifying market gaps, we transitioned to full in-house manufacturing in 2017.
                  </p>
                  <p>
                    Today, we design and produce every component — from optical domes to reflectors — in our own facility, ensuring quality that resellers simply cannot match.
                  </p>
                  <p className="text-white text-xl font-black tracking-tight border-l-3 border-brand-orange-500 pl-6 italic">
                    "Engineered for performance."
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative aspect-video rounded-[48px] border border-white/10 bg-white/[0.02] shadow-2xl flex items-center justify-center overflow-hidden group"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Image 
                src="/images/gallery/about/WhatsApp Image 2026-02-14 at 12.37.16 PM.jpeg"
                alt="Uday IKSA Team"
                fill
                className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10 right-10 z-20">
                <p className="text-gray-300 text-base md:text-lg font-medium leading-relaxed italic text-center">
                  "Vertical integration is what gives us control over quality that no reseller or assembler can match."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership & Advisors Section — 2nd Section */}
      <section id="team" className="py-20 relative px-6 border-t border-white/5 overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-full bg-brand-orange-500/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">Leadership & Advisors</h2>
            <div className="h-0.5 w-16 bg-brand-orange-500 rounded-full mx-auto"></div>
          </div>

          <div className="flex flex-col gap-12 items-center">
            {/* Advisor Tier - Expert Council */}
            <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
              {
                name: "Prof. S.B. Kurubar",
                role: "TECHNICAL ADVISOR — QUALITY SYSTEMS",
                image: "/images/image copy.png",
                position: "object-top",
                linkedin: "#",
                bio: "A distinguished engineer and academic with over five decades of experience, Professor S.B. Kurubar brings deep technical rigour to Uday IKSA's product quality and engineering processes. A graduate of KREC Suratkal (1968) with a post-graduation from SJCE Mysore, he has spent his career at the intersection of electrical engineering, computer science, and academic leadership — serving as Head of Department for both CSE and ISE, Visiting Professor at Karnatak University Dharwad, and Dean of Examination Affairs at BVBCET Hubballi. His oversight ensures that every NANOSUN™ product we manufacture meets the highest standards of consistency and durability."
              },
              {
                name: "Mr. B.R. Indushekar",
                role: "STRATEGIC ADVISOR — OPERATIONS & LEADERSHIP",
                image: "/images/image.png",
                position: "object-center",
                linkedin: "https://www.linkedin.com/in/indushekar-bangalore-rajan-15bbb8308/",
                bio: "With over 38 years of global leadership, B.R. Indushekar served as Director of Volvo Group Real Estate and VP at Volvo CE India, leading plant transformations that won 40+ awards. A BMS College of Engineering alumnus with a PG Diploma in Marketing Management, he is a Certified Six Sigma Black Belt and Lean Leader (Japan). Currently a Professor of Practice and Industry Coach, he brings Level 5 Leadership principles and world-class lean methodologies to Uday IKSA, ensuring our manufacturing processes meet the highest global standards.",
                quote: "Former Director at Volvo Group Real Estate and VP at Volvo CE. A practitioner of Level 5 Leadership and lean excellence."
              },
              ].map((member, index) => (
                <motion.div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-[40px] overflow-hidden border border-white/10 group hover:border-brand-orange-500/40 transition-all duration-500 flex flex-col"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="relative h-80 overflow-hidden">
                    <Image 
                      src={member.image}
                      alt={member.name}
                      fill
                      className={`object-cover ${member.position || 'object-center'} opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                    {member.linkedin && member.linkedin !== "#" && (
                      <a 
                        href={member.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="absolute top-6 left-6 w-10 h-10 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/10 hover:bg-brand-orange-500 transition-all z-20 group/link"
                      >
                        <Linkedin className="h-4 w-4 text-white group-hover:scale-110 transition-transform" />
                      </a>
                    )}
                  </div>
                  <div className="p-8 flex-1 flex flex-col relative z-20">
                    <p className="text-brand-orange-500 font-black uppercase tracking-[0.2em] text-[10px] mb-2">{member.role}</p>
                    <h3 className="text-xl font-black text-white uppercase tracking-tighter mb-4">{member.name}</h3>
                    <p className="text-gray-400 text-[12px] leading-relaxed font-medium mb-6">{member.bio}</p>
                    {member.quote && (
                      <div className="mt-auto pt-6 border-t border-white/5">
                        <p className="text-white text-xs font-black italic tracking-tight opacity-80 leading-relaxed">
                          "{member.quote}"
                        </p>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CEO Tier - Strategic Lead */}
            <div className="max-w-4xl w-full">
              <motion.div
                className="bg-white/5 backdrop-blur-sm rounded-[40px] overflow-hidden border border-brand-orange-500/30 group hover:border-brand-orange-500 transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="grid md:grid-cols-2">
                  <div className="relative h-96 md:h-full min-h-[400px] overflow-hidden">
                    <Image src="/images/ceo-shivanand.jpg" alt="Shivanand Balehosur" fill className="object-cover group-hover:scale-105 transition-all duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-slate-950/20" />
                    <a href="https://www.linkedin.com/in/shivanand-balehosur-719796247/" target="_blank" rel="noopener noreferrer" className="absolute top-6 left-6 w-10 h-10 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/10 hover:bg-brand-orange-500 transition-all z-20">
                      <Linkedin className="h-4 w-4 text-white" />
                    </a>
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <p className="text-brand-orange-500 font-black uppercase tracking-[0.3em] text-[10px] mb-3">Founder & CEO</p>
                    <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-6">Shivanand Balehosur</h3>
                    <div className="space-y-4 text-gray-400 text-sm leading-relaxed font-medium">
                      <p>
                        With over 15 years in the natural daylighting sector, Shivanand has been at the centre of every product, every installation, and every customer relationship at Uday IKSA.
                      </p>
                      <p className="italic border-l-2 border-white/10 pl-4 py-1 text-gray-500">
                        "Having spent the early years understanding what the market was getting wrong, he led the decision to build everything in-house, which remains the foundation of our quality today."
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Patented Technology Badge */}
            <div className="w-full max-w-4xl bg-white/5 backdrop-blur-md rounded-[40px] p-0 border border-brand-orange-500/30 text-center relative overflow-hidden group">
              <div className="relative py-20 px-10 bg-white/5 flex flex-col items-center justify-center">
                <Shield className="h-20 w-20 text-brand-orange-500/20 mb-6" />
                <div className="text-center">
                  <p className="text-brand-orange-500 font-black uppercase tracking-[0.4em] text-[10px] mb-2 text-center">Patented Manufacturing</p>
                  <p className="text-2xl font-black text-white uppercase tracking-tighter">Vertical Integration</p>
                </div>
              </div>
              <div className="p-6 bg-slate-900/90 backdrop-blur-md border-t border-brand-orange-500/30">
                <h4 className="text-xl font-black text-white uppercase tracking-tighter mb-3 flex items-center justify-center gap-3">
                  <Shield className="h-5 w-5 text-brand-orange-500" />
                  Proprietary Engineering Precision
                </h4>
                <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed text-xs">
                  Our NANOSUN™ and NANOVENT® systems are proprietary technologies designed and manufactured entirely in Hubballi. You are buying a system built for decades of industrial-grade performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-12 relative px-6">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">What We Actually Do</h2>
            <p className="text-sm md:text-base text-brand-orange-500 uppercase font-black tracking-[0.2em] mb-4">End-to-End. In-House.</p>
            <div className="h-0.5 w-24 bg-brand-orange-500 rounded-full mx-auto mb-8"></div>
            <p className="text-base text-gray-400 max-w-2xl mx-auto font-medium leading-relaxed">
              When you work with Uday IKSA, you're working directly with the people who design, build, and install your system.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: "Design & Engineering", desc: "Every product is designed in-house. We don't just sell — we engineer solutions specific to your building type and light requirements." },
              { icon: Factory, title: "Manufacturing", desc: "Our factory at Gokul Industrial Estate handles everything — die-making, mould-making, and final assembly. Complete control." },
              { icon: Zap, title: "Custom Solutions", desc: "Standard sizes don't always fit. We can customise dimensions, pipe lengths, and configurations for complex installations." },
              { icon: Building2, title: "Installation", desc: "Our expert team handles the entire site work — from roof access and cutting to sealing, testing, and clean finishing." },
            ].map((cap, idx) => (
              <motion.div
                key={idx}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-[40px] border border-white/10 hover:border-brand-orange-500/40 transition-all flex flex-col items-center text-center group"
                whileHover={{ y: -5 }}
              >
                <div className="w-14 h-14 bg-brand-orange-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-orange-500 transition-colors">
                  <cap.icon className="h-6 w-6 text-brand-orange-500 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-black text-white uppercase tracking-tighter mb-3 group-hover:text-brand-orange-400 transition-colors">{cap.title}</h3>
                <p className="text-gray-400 text-[13px] leading-relaxed font-medium">{cap.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="py-16 relative px-6 bg-slate-900/50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tighter mb-6 leading-none text-balance">This Isn't Just <br /><span className="brand-gradient-text">About Saving</span> <br />Electricity.</h2>
              <div className="h-0.5 w-16 bg-brand-orange-500 rounded-full mb-10"></div>
              <div className="space-y-6 text-gray-400 text-base leading-relaxed font-medium">
                <p>When a factory switches off 50 tube lights during the day because natural light is doing the job — that's real energy saved, real money back, and real carbon not emitted.</p>
                <p>But there's something more that doesn't show up on an electricity bill.</p>
                <div className="bg-white/5 p-6 rounded-3xl border border-white/10">
                  <p className="text-white text-sm">Natural light keeps people aligned with their body's natural rhythm — the circadian cycle that regulates sleep, energy, focus, and hormonal balance.</p>
                </div>
                <p className="text-sm">Workers in naturally lit spaces report feeling more alert, less fatigued, and more productive. Students learn better; patients recover faster.</p>
              </div>
            </motion.div>
            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              {[
                { icon: Sun, title: "Better Focus", desc: "Optimal daylighting." },
                { icon: Heart, title: "Better Health", desc: "Circadian alignment." },
                { icon: Zap, title: "Zero Energy", desc: "100% Free sunlight." },
                { icon: Shield, title: "Longevity", desc: "Industrial testing." },
              ].map((item, idx) => (
                <div key={idx} className="bg-white/5 p-6 rounded-[32px] border border-white/5 hover:border-brand-orange-500/30 transition-all text-center group">
                  <item.icon className="h-8 w-8 text-brand-orange-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-white text-sm font-black uppercase tracking-tighter mb-1.5">{item.title}</h4>
                  <p className="text-gray-500 text-[10px] uppercase font-black tracking-widest">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Recognised Excellence - Bento Remake */}
      <section className="py-24 relative px-6 overflow-hidden border-t border-white/5 bg-slate-950">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-brand-orange-500/20 to-transparent" />

        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter mb-4">Recognised Excellence</h2>
            <div className="h-0.5 w-16 bg-brand-orange-500 rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
            {/* Main Award - Bento Large Item */}
            <motion.div
              className="md:col-span-2 md:row-span-2 bg-white/[0.03] border border-brand-orange-500/20 rounded-[40px] p-8 relative overflow-hidden group hover:border-brand-orange-500/40 transition-all duration-700 shadow-2xl"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-brand-orange-500/10 blur-[80px] rounded-full group-hover:bg-brand-orange-500/20 transition-colors" />
              <Award className="h-12 w-12 text-brand-orange-500 mb-8 group-hover:scale-110 transition-transform duration-500" />
              <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-4 leading-none">CII INNOVERGE <br /><span className="brand-gradient-text text-xl">National Award</span></h3>
              <p className="text-gray-400 text-sm leading-relaxed font-medium">India's most prestigious recognition for industrial innovation and green engineering breakthroughs.</p>
              <div className="mt-8 pt-6 border-t border-white/5">
                <span className="text-[10px] font-black text-brand-orange-400 uppercase tracking-widest">Innovation Excellence 2022</span>
              </div>
            </motion.div>

            {/* Patented Tech - Bento Medium Item */}
            <motion.div
              className="md:col-span-2 bg-white/[0.03] border border-white/10 rounded-[40px] p-8 relative overflow-hidden group hover:border-brand-orange-500/40 transition-all duration-700"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-center gap-6">
                <div className="bg-brand-orange-500/10 p-5 rounded-3xl group-hover:bg-brand-orange-500 group-hover:text-white transition-all duration-500">
                  <Zap className="h-6 w-6 text-brand-orange-500 group-hover:text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-white uppercase tracking-tighter mb-1">Patented Tech</h3>
                  <p className="text-gray-500 text-xs font-medium">Proprietary NANOSUN™ & NANOVENT®</p>
                </div>
              </div>
            </motion.div>

            {/* DPIIT - Bento Small Item */}
            <motion.div
              className="md:col-span-1 bg-white/[0.03] border border-white/10 rounded-[40px] p-6 text-center group hover:border-brand-orange-500/40 transition-all duration-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Shield className="h-6 w-6 text-brand-orange-500 mx-auto mb-4 group-hover:rotate-12 transition-transform" />
              <p className="text-[10px] font-black text-white uppercase tracking-widest leading-tight">DPIIT <br />Recognised</p>
            </motion.div>

            {/* ISO - Bento Small Item */}
            <motion.div
              className="md:col-span-1 bg-white/[0.03] border border-white/10 rounded-[40px] p-6 text-center group hover:border-brand-orange-500/40 transition-all duration-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <CheckCircle2 className="h-6 w-6 text-brand-orange-500 mx-auto mb-4 group-hover:rotate-12 transition-transform" />
              <p className="text-[10px] font-black text-white uppercase tracking-widest leading-tight">ISO <br />9001:2015</p>
            </motion.div>

            {/* Made in India - Bento Spanned Item */}
            <motion.div
              className="md:col-span-2 bg-gradient-to-br from-brand-orange-600/10 to-transparent border border-white/10 rounded-[40px] p-8 flex items-center justify-between group hover:border-brand-orange-500/40 transition-all duration-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div>
                <h3 className="text-xl font-black text-white uppercase tracking-tighter mb-2">Built in Hubballi</h3>
                <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest">Proudly Made in India</p>
              </div>
              <Globe className="h-8 w-8 text-brand-orange-500 group-hover:rotate-45 transition-transform duration-1000" />
            </motion.div>

            {/* ZED - Bento Small Item */}
            <motion.div
              className="md:col-span-2 bg-white/[0.03] border border-white/10 rounded-[40px] p-6 flex items-center gap-6 group hover:border-brand-orange-500/40 transition-all duration-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center shrink-0">
                <Shield className="h-6 w-6 text-brand-orange-500" />
              </div>
              <div>
                <h3 className="text-sm font-black text-white uppercase tracking-[0.2em]">ZED Certified</h3>
                <p className="text-gray-500 text-[9px] uppercase font-bold">Zero Defect Manufacturing</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>



      {/* Local Identity Section */}
      <section className="py-12 relative px-6 bg-slate-900/10">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tighter mb-4 leading-none text-balance">Proudly Built in <br /><span className="brand-gradient-text">Hubballi, Karnataka.</span></h2>
            <p className="text-sm md:text-base text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
              We're a Hubballi company that designs, manufactures, and installs products we genuinely believe in — and we've been doing it from the same city for over 15 years.
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="bg-white/5 p-8 rounded-[32px] border border-white/10">
                <h4 className="text-brand-orange-500 font-black uppercase tracking-widest text-[9px] mb-3">Manufacturing Hub</h4>
                <p className="text-white font-bold text-sm mb-1">Gokul Industrial Estate</p>
                <p className="text-gray-500 text-xs leading-relaxed">C-391, 2nd Gate Gokul Road, Hubballi – 580030</p>
              </div>
              <div className="bg-white/5 p-8 rounded-[32px] border border-white/10">
                <h4 className="text-brand-orange-500 font-black uppercase tracking-widest text-[9px] mb-3">Registered Office</h4>
                <p className="text-white font-bold text-sm mb-1">Akshay Colony</p>
                <p className="text-gray-500 text-xs leading-relaxed">#147, 4th Phase, Vidyanagar, Hubballi – 580021</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-12 relative px-6 border-t border-white/5">
        <div className="container mx-auto">
          <motion.div
            className="bg-brand-gradient py-12 px-8 rounded-[40px] text-center shadow-2xl shadow-brand-orange-500/10 relative overflow-hidden max-w-4xl mx-auto"
            whileHover={{ scale: 1.005 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-4xl font-black text-white mb-4 tracking-tighter uppercase relative z-10">
              Let's Talk.
            </h2>
            <p className="text-sm md:text-base text-white/80 max-w-xl mx-auto mb-8 leading-relaxed relative z-10 font-medium">
              Join 500+ buildings saving electricity with natural light.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 relative z-10">
              <HoverButton asChild className="bg-white text-black hover:bg-slate-900 hover:text-white px-8 py-3.5 rounded-xl font-bold uppercase tracking-widest transition-all w-full sm:w-auto text-xs">
                <Link href="/contact">
                  Start Consultation <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </HoverButton>
              <HoverButton asChild className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-8 py-3.5 rounded-xl font-bold uppercase tracking-widest transition-all w-full sm:w-auto text-xs">
                <a href="tel:+918792182631">
                  Call: +91 8792182631
                </a>
              </HoverButton>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
