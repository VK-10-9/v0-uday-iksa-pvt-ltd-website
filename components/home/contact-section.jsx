"use client"

import { motion } from "framer-motion"
import { Building2, Phone, Mail, Send, ChevronRight, Globe2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { HoverButton } from "@/components/ui/hover-button"

export default function ContactSection() {
  return (
    <section className="py-40 relative bg-slate-950 overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-brand-orange-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-brand-red-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-brand-orange-500/10 border border-brand-orange-500/20 rounded-full px-6 py-2 mb-8"
          >
            <Globe2 className="h-4 w-4 text-brand-orange-400" />
            <span className="text-[10px] font-black text-brand-orange-400 uppercase tracking-widest">Global Support</span>
          </motion.div>

          <h2 className="text-5xl lg:text-7xl font-black text-white uppercase tracking-tighter mb-6 leading-none">
            Get In <span className="brand-gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Ready to optimize your industrial workspace? Our engineering experts are standing by.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Form Card */}
          <motion.div
            className="bg-white/[0.03] backdrop-blur-2xl p-10 lg:p-12 rounded-[50px] border border-white/10 shadow-2xl relative group"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form className="space-y-8">
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label htmlFor="name" className="text-[10px] font-black text-gray-500 uppercase tracking-widest pl-1">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-orange-500 text-white transition-all hover:bg-white/10"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-3">
                  <label htmlFor="email" className="text-[10px] font-black text-gray-500 uppercase tracking-widest pl-1">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-orange-500 text-white transition-all hover:bg-white/10"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label htmlFor="message" className="text-[10px] font-black text-gray-500 uppercase tracking-widest pl-1">
                  Project Brief
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-orange-500 text-white transition-all hover:bg-white/10 resize-none"
                  placeholder="How can we help optimize your facility?"
                ></textarea>
              </div>

              <HoverButton className="w-full py-6 text-white text-lg font-black uppercase tracking-widest bg-brand-gradient rounded-2xl shadow-xl shadow-brand-orange-500/20">
                SEND INQUIRY <Send className="ml-3 h-5 w-5" />
              </HoverButton>
            </form>
          </motion.div>

          {/* Contact Info Card */}
          <motion.div
            className="bg-white/[0.03] backdrop-blur-2xl p-10 lg:p-12 rounded-[50px] border border-white/10 shadow-2xl relative flex flex-col justify-between"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-12">
              <h3 className="text-3xl font-black text-white uppercase tracking-tighter">Corporate Data</h3>

              <div className="space-y-10">
                <div className="flex items-start gap-6 group/item">
                  <div className="bg-brand-orange-500/10 w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover/item:bg-brand-orange-500 transition-all duration-300">
                    <Building2 className="h-7 w-7 text-brand-orange-500 group-hover/item:text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">Headquarters</p>
                    <p className="text-white text-lg font-bold">Uday IKSA Pvt Ltd, Hubli, Karnataka, India</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group/item">
                  <div className="bg-brand-orange-500/10 w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover/item:bg-brand-orange-500 transition-all duration-300">
                    <Phone className="h-7 w-7 text-brand-orange-500 group-hover/item:text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">Direct Connect</p>
                    <p className="text-white text-lg font-bold">+91 8792182631</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group/item">
                  <div className="bg-brand-orange-500/10 w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover/item:bg-brand-orange-500 transition-all duration-300">
                    <Mail className="h-7 w-7 text-brand-orange-500 group-hover/item:text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">Email Inquiry</p>
                    <p className="text-white text-lg font-bold">contact@udayiksa.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-10 border-t border-white/10">
              <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-6">Connect Regionally</p>
              <div className="flex flex-wrap gap-4">
                {["Mumbai", "Bangalore", "Delhi", "Chennai"].map((city) => (
                  <div key={city} className="flex items-center gap-2 group/city cursor-pointer">
                    <span className="text-white text-sm font-black uppercase tracking-widest group-hover/city:text-brand-orange-500 transition-colors">{city}</span>
                    <ChevronRight className="h-3 w-3 text-brand-orange-500 opacity-0 group-hover/city:opacity-100 transition-all" />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
