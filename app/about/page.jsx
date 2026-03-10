"use client"

import { motion } from "framer-motion"
import { Building2, Users, Lightbulb, ChevronRight, Target, Eye, Heart, ArrowRight, Linkedin, Calendar, Trophy, CheckCircle2, Factory, Zap, Shield, Globe, Award, Sparkles, Sun } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { HoverButton } from "@/components/ui/hover-button"

export default function AboutPage() {
  return (
    <main className="pt-24 bg-slate-950">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-brand-orange-500/5 blur-3xl rounded-full transform -translate-y-1/2"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tighter uppercase leading-tight">
              Why Pay for <span className="brand-gradient-text">Sunlight?</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-medium max-w-xl mx-auto">
              15+ years of patented daylighting & ventilation solutions across India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="story" className="py-24 relative border-t border-white/5">
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
                <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">The Hubballi Story</h2>
                <div className="h-1 w-16 bg-brand-orange-500 rounded-full mb-8"></div>
                <div className="space-y-6 text-gray-400 text-base leading-relaxed font-medium">
                  <p>
                    Uday IKSA began as a small Hubballi team passionate about natural light. After years of identifying market gaps, we transitioned to full in-house manufacturing in 2017.
                  </p>
                  <p>
                    Today, we design and produce every component — from optical domes to reflectors — in our own facility, ensuring quality that resellers simply cannot match.
                  </p>
                  <p className="text-white text-xl font-black tracking-tight border-l-3 border-brand-orange-500 pl-6 italic">
                    "Built for Indian conditions."
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative h-[600px] rounded-[48px] overflow-hidden border border-white/10"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/images/research-lab.jpg"
                alt="Uday IKSA Manufacturing Hub"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent z-10"></div>
              <div className="absolute bottom-12 left-12 right-12 z-20">
                <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-10 rounded-[40px]">
                  <p className="text-gray-300 text-lg font-medium leading-relaxed italic">
                    "Vertical integration is what gives us control over quality that no reseller or assembler can match. It's why our products are still performing in buildings we installed a decade ago."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-40 relative bg-slate-900/30 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter mb-6">Our Timeline</h2>
            <div className="h-1 w-32 bg-brand-orange-500 rounded-full mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { year: "2009–2010", title: "The Foundation", desc: "Founded in Hubballi with a focus on marketing natural daylighting solutions. Built deep expertise in understanding roofs, buildings, and customer needs." },
              { year: "2012–2015", title: "Market Expansion", desc: "Expanded across North Karnataka and beyond. Identified key limitations in available products for Indian roof types and climate." },
              { year: "2017", title: "Manufacturing Shift", desc: "Made the decisive shift to full in-house manufacturing. Invested in design capabilities, die-making, and production facilities." },
              { year: "2018–2020", title: "Trademark Launch", desc: "Launched NANOSUN™ and NANOVENT® as registered trademarks. Expanded product range across PEB, RCC, and false ceiling applications." },
              { year: "2022", title: "National Recognition", desc: "Won the CII INNOVERGE National Award — India's prestigious recognition for green engineering and industrial innovation." },
              { year: "Today", title: "Scaling Impact", desc: "500+ installations in 50+ cities. Clients ranging from Indian Railways and HAL to individual homeowners. Still based in Hubballi." },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-white/5 p-10 rounded-[48px] border border-white/5 group hover:bg-white/[0.08] transition-all hover:border-brand-orange-500/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="text-brand-orange-500 text-sm font-black uppercase tracking-widest mb-4">{item.year}</div>
                <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-4">{item.title}</h3>
                <p className="text-gray-400 font-medium leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-40 relative px-6">
        <div className="container mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter mb-6">What We Actually Do</h2>
            <p className="text-xl text-brand-orange-500 uppercase font-black tracking-[0.2em] mb-4">End-to-End. In-House. No Middlemen.</p>
            <div className="h-1 w-32 bg-brand-orange-500 rounded-full mx-auto mb-10"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto font-medium">
              When you work with Uday IKSA, you're working directly with the people who design, build, and install your system.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "Design & Engineering", desc: "Every product is designed in-house. We don't just sell — we engineer solutions specific to your building type and light requirements." },
              { icon: Factory, title: "Manufacturing", desc: "Our factory at Gokul Industrial Estate handles everything — die-making, mould-making, and final assembly. Complete control." },
              { icon: Zap, title: "Custom Solutions", desc: "Standard sizes don't always fit. We can customise dimensions, pipe lengths, and configurations for complex installations." },
              { icon: Building2, title: "Installation", desc: "Our expert team handles the entire site work — from roof access and cutting to sealing, testing, and clean finishing." },
            ].map((cap, idx) => (
              <motion.div
                key={idx}
                className="bg-white/5 backdrop-blur-sm p-10 rounded-[48px] border border-white/10 hover:border-brand-orange-500/40 transition-all flex flex-col items-center text-center group"
                whileHover={{ y: -10 }}
              >
                <div className="w-16 h-16 bg-brand-orange-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-orange-500 transition-colors">
                  <cap.icon className="h-8 w-8 text-brand-orange-500 group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-4">{cap.title}</h3>
                <p className="text-gray-400 text-sm font-medium leading-relaxed">{cap.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hierarchy Teams Section */}
      <section id="team" className="py-24 relative px-6 border-t border-white/5">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">Our Experts</h2>
            <div className="h-1 w-16 bg-brand-orange-500 rounded-full mx-auto mb-6"></div>
          </div>

          <div className="flex flex-col gap-16 items-center">
            {/* Advisor Tier */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
              {[
                {
                  name: "Prof. S.P. Kurubar",
                  role: "Technical Advisor — Product Engineering & Quality Systems",
                  image: "/placeholder-user.jpg",
                  linkedin: "#",
                  bio: "Professor S.P. Kurubar is one of India's leading experts in engineering quality and process optimisation. A Certified Six Sigma Black Belt and Lean Manufacturing Specialist — trained in Japan — he brings world-class standards of precision and quality thinking to Uday IKSA's product development and engineering processes.\n\nCurrently serving as Dean of the Examination Section at KLE Technological University, Hubballi, Professor Kurubar has spent decades bridging academic rigour with industrial application.\n\nHis involvement with Uday IKSA ensures that every product we manufacture — from dome to diffuser — is held to the highest standards of consistency, durability, and performance. It also means our engineering processes are continuously reviewed and improved using proven global methodologies."
                },
                {
                  name: "B.R. Indushekar",
                  role: "Technical Adviser",
                  image: "/placeholder-user.jpg",
                  linkedin: "https://www.linkedin.com/in/indushekar-bangalore-rajan-15bbb8308/",
                  bio: "With 38+ years of leadership at Volvo and Ingersoll-Rand, he is a certified Six Sigma Black Belt and Lean Specialist from Japan, ensuring our systems meet world-class standards."
                },
              ].map((member, index) => (
                <motion.div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-[40px] overflow-hidden border border-white/10 group hover:border-brand-orange-500/40 transition-all duration-500"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                >
                  <div className="relative h-96 w-full overflow-hidden">
                    <Image src={member.image} alt={member.name} fill className="object-cover grayscale hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/10 hover:bg-brand-orange-500 transition-all z-20">
                      <Linkedin className="h-5 w-5 text-white" />
                    </a>
                  </div>
                  <div className="p-10 relative">
                    <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-2">{member.name}</h3>
                    <p className="text-brand-orange-500 font-black uppercase tracking-widest text-xs mb-6">{member.role}</p>
                    <p className="text-gray-400 leading-relaxed italic text-sm">"{member.bio}"</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CEO Tier */}
            <div className="max-w-2xl w-full">
              <motion.div
                className="bg-white/5 backdrop-blur-sm rounded-[40px] overflow-hidden border border-brand-orange-500/30 group hover:border-brand-orange-500 transition-all duration-500"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="relative h-[500px] w-full overflow-hidden">
                  <Image src="/placeholder-user.jpg" alt="Shivanand Balehosur" fill className="object-cover grayscale hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-90" />
                  <a href="https://www.linkedin.com/in/shivanand-balehosur-719796247/" target="_blank" rel="noopener noreferrer" className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/10 hover:bg-brand-orange-500 transition-all z-20">
                    <Linkedin className="h-5 w-5 text-white" />
                  </a>
                </div>
                <div className="p-12 relative">
                  <h3 className="text-4xl font-black text-white uppercase tracking-tighter mb-2">Shivanand Balehosur</h3>
                  <p className="text-brand-orange-500 font-black uppercase tracking-widest text-sm mb-8">Founder & CEO</p>
                  <div className="space-y-6 text-gray-300 leading-relaxed font-medium">
                    <p>
                      With over 15 years in the natural daylighting sector, Shivanand has been at the centre of every product, every installation, and every customer relationship at Uday IKSA.
                    </p>
                    <p className="text-sm italic text-gray-400">
                      "Having spent the early years understanding exactly what the market needed — and what it was getting wrong — he led the decision to build everything in-house, which remains the foundation of our quality today."
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Technical Team Bar */}
            <div className="w-full bg-white/5 rounded-[40px] p-12 border border-white/10 text-center">
              <h4 className="text-2xl font-black text-white uppercase tracking-tighter mb-4">Technical & Installation Team</h4>
              <p className="text-gray-400 max-w-4xl mx-auto leading-relaxed">
                Behind every successful installation is a crew of trained technicians who've worked on everything from small residential roofs to large industrial facilities. Our installation team is permanently employed, regularly trained, and takes pride in clean, precise work — no shortcuts, no mess left behind.
              </p>
            </div>

            {/* Research & Development Section */}
            <div className="w-full bg-brand-orange-500/5 rounded-[40px] p-12 border border-brand-orange-500/20 text-center">
              <h4 className="text-2xl font-black text-white uppercase tracking-tighter mb-4">Research & Development</h4>
              <p className="text-gray-400 max-w-4xl mx-auto leading-relaxed">
                Uday IKSA has a <span className="text-white font-bold">dedicated research individual focused exclusively on Natural Daylighting</span> — studying light behaviour, optical materials, roof interaction, and interior light distribution. This internal research capability drives ongoing product improvements and ensures our solutions stay ahead of the market.
              </p>
            </div>

            {/* Patented Technology Callout */}
            <div className="w-full bg-white/5 backdrop-blur-md rounded-[40px] p-12 border border-brand-orange-500/30 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4">
                <Shield className="h-12 w-12 text-brand-orange-500/20" />
              </div>
              <h4 className="text-2xl font-black text-white uppercase tracking-tighter mb-6 flex items-center justify-center gap-3">
                <Shield className="h-6 w-6 text-brand-orange-500" />
                Patented Technology — What It Means for You
              </h4>
              <div className="space-y-6 text-gray-400 max-w-4xl mx-auto leading-relaxed">
                <p className="text-lg">
                  🔒 <span className="text-white font-bold">Our core products are patented.</span>
                </p>
                <p>
                  NANOSUN™ (Natural Daylighting) and NANOVENT® (Natural Ventilation) are registered trademarks backed by patents. This means the technology inside every unit we sell is original — developed by our own team, protected by Indian patent law, and not available from any other manufacturer.
                </p>
                <p className="text-brand-orange-400 font-bold italic">
                  You're not buying a generic product assembled from imported parts. You're buying a proprietary system designed, tested, and manufactured entirely by us in Hubli.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="py-40 relative px-6 bg-slate-900/50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter mb-8 leading-none">This Isn't Just <br /><span className="brand-gradient-text">About Saving</span> <br />Electricity.</h2>
              <div className="h-1 w-20 bg-brand-orange-500 rounded-full mb-12"></div>
              <div className="space-y-8 text-gray-400 text-lg leading-relaxed font-medium">
                <p>When a factory switches off 50 tube lights during the day because natural light is doing the job — that's real energy saved, real money back, and real carbon not emitted.</p>
                <p>But there's something more that doesn't show up on an electricity bill.</p>
                <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                  <p className="text-white">Natural light keeps people aligned with their body's natural rhythm — the circadian cycle that regulates sleep, energy, focus, and hormonal balance.</p>
                </div>
                <p>Workers in naturally lit spaces report feeling more alert, less fatigued, and more productive. Students learn better; patients recover faster. The science backs it up — we see it in our own installations every day.</p>
              </div>
            </motion.div>
            <motion.div
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              {[
                { icon: Sun, title: "Better Focus", desc: "Humans are wired for daylight." },
                { icon: Heart, title: "Better Health", desc: "Regulates the circadian rhythm." },
                { icon: Zap, title: "Zero Energy", desc: "Free light from the sun." },
                { icon: Shield, title: "Longevity", desc: "Tested to last for decades." },
              ].map((item, idx) => (
                <div key={idx} className="bg-white/5 p-8 rounded-[40px] border border-white/5 hover:border-brand-orange-500/30 transition-all text-center group">
                  <item.icon className="h-10 w-10 text-brand-orange-500 mx-auto mb-6 group-hover:scale-110 transition-transform" />
                  <h4 className="text-white font-black uppercase tracking-tighter mb-2">{item.title}</h4>
                  <p className="text-gray-500 text-xs">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Recognition Section */}
      <section className="py-24 relative px-6 border-t border-white/5 bg-slate-900/40">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">Recognised Excellence</h2>
            <div className="h-1 w-16 bg-brand-orange-500 rounded-full mx-auto"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {[
              { label: "CII INNOVERGE", icon: Award },
              { label: "ISO 9001:2015", icon: CheckCircle2 },
              { label: "DPIIT Recognised", icon: Shield },
              { label: "ZED Certified", icon: Shield },
              { label: "Patented Tech", icon: Zap },
              { label: "Made in India", icon: Globe },
              { label: "Eco Mark", icon: Target },
            ].map((badge, idx) => (
              <motion.div
                key={idx}
                className="bg-white/5 p-8 rounded-[40px] border border-white/10 flex flex-col items-center text-center group"
                whileHover={{ y: -5 }}
              >
                <badge.icon className="h-8 w-8 text-brand-orange-500 mb-6 group-hover:rotate-12 transition-transform" />
                <p className="text-[10px] font-black text-white uppercase tracking-widest leading-tight">{badge.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Identity Section */}
      <section className="py-40 relative px-6 bg-slate-900/30">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-8xl font-black text-white uppercase tracking-tighter mb-10 leading-none">Proudly Built in <br /><span className="brand-gradient-text">Hubballi, Karnataka.</span></h2>
            <p className="text-xl text-gray-400 mb-12 leading-relaxed font-medium">
              We're not a multinational. We're a Hubballi company that designs, manufactures, and installs products we genuinely believe in — and we've been doing it from the same city for over 15 years.
            </p>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="bg-white/5 p-10 rounded-[48px] border border-white/10">
                <h4 className="text-brand-orange-500 font-black uppercase tracking-widest text-xs mb-4">Our Manufacturing Hub</h4>
                <p className="text-white font-bold mb-2">Gokul Industrial Estate</p>
                <p className="text-gray-500 text-sm">C-391, Gokul Industrial Estate, 2nd Gate Gokul Road, Hubballi – 580030</p>
              </div>
              <div className="bg-white/5 p-10 rounded-[48px] border border-white/10">
                <h4 className="text-brand-orange-500 font-black uppercase tracking-widest text-xs mb-4">Registered Office</h4>
                <p className="text-white font-bold mb-2">Akshay Colony</p>
                <p className="text-gray-500 text-sm">#147, 4th Phase, Akshay Colony, Vidyanagar, Hubballi – 580021</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-24 relative px-6 border-t border-white/5">
        <div className="container mx-auto">
          <motion.div
            className="bg-brand-gradient py-16 px-8 rounded-[48px] text-center shadow-2xl shadow-brand-orange-500/10 relative overflow-hidden max-w-5xl mx-auto"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tighter uppercase relative z-10">
              Let's Talk.
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed relative z-10 font-medium">
              Join 500+ buildings saving electricity with natural light.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
              <Link href="/contact">
                <HoverButton className="bg-white text-black hover:bg-slate-900 hover:text-white px-10 py-4 rounded-xl font-bold uppercase tracking-wider transition-all w-full sm:w-auto text-sm">
                  Talk to Our Team <ArrowRight className="ml-2 h-4 w-4" />
                </HoverButton>
              </Link>
              <a href="tel:+918792182631">
                <HoverButton className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-10 py-4 rounded-xl font-bold uppercase tracking-wider transition-all w-full sm:w-auto text-sm">
                  Call: +91 8792182631
                </HoverButton>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
