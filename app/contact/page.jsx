"use client"

import { motion } from "framer-motion"
import { ArrowRight, Mail, Phone, MapPin, Send, MessageSquare, Globe } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import { HoverButton } from "@/components/ui/hover-button"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    buildingType: "Factory / Industrial",
    details: "",
  })

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    success: false,
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormStatus((prev) => ({ ...prev, submitting: true }))

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus({
          submitting: false,
          submitted: true,
          success: true,
          message: "Thank you for your message! Our expert team will get back to you shortly.",
        });
      } else {
        setFormStatus({
          submitting: false,
          submitted: true,
          success: false,
          message: "Sorry, there was an issue sending your request. Please try again or call us directly.",
        });
      }
    } catch (error) {
      setFormStatus({
        submitting: false,
        submitted: true,
        success: false,
        message: "An error occurred. Please check your connection and try again.",
      });
    }
  }

  const officeLocations = [
    {
      city: "Hubballi HQ",
      address: "#147, 4th Phase, Akshay Colony, Vidyanagar, Hubballi – 580021, Karnataka",
      phone: "+91 8792182631",
      email: "contact@udayiksa.com",
    },
    {
      city: "Manufacturing Unit",
      address: "C-391, Gokul Industrial Estate, 2nd Gate Gokul Road, Hubballi – 580030",
      phone: "+91 8792182631",
      email: "contact@udayiksa.com",
    },
  ]

  return (
    <main className="pt-24 bg-slate-950">
      {/* Hero Section */}
      <section className="relative py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-brand-orange-500/5 blur-3xl rounded-full transform -translate-y-1/2"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tighter uppercase leading-[0.9]">
              Let's Figure Out What <br /><span className="brand-gradient-text">Your Building Needs</span>
            </h1>
            <p className="text-sm md:text-base text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed font-medium">
              Tell us a little about your space — roof type, building size, what you're trying to solve — and we'll recommend the right system and give you an estimate.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-12 relative px-6 lg:px-12">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            {/* Form Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-10"
            >
              <div className="border-b border-white/10 pb-8">
                <h2 className="text-xl md:text-2xl font-black text-white uppercase tracking-tighter mb-4">Send My Enquiry</h2>
                <div className="h-0.5 w-16 bg-brand-orange-500 rounded-full mb-6"></div>
                <p className="text-gray-500 text-xs md:text-sm font-medium">
                  Looking for a custom audit for your sky lights or ventilation? Fill out the form below.
                </p>
              </div>

              {formStatus.submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-10 rounded-[32px] bg-brand-orange-500/10 border border-brand-orange-500/30 text-center"
                >
                  <Send className="h-10 w-10 text-brand-orange-500 mx-auto mb-4" />
                  <h3 className="text-xl font-black text-white mb-3 uppercase tracking-tighter">Enquiry Sent!</h3>
                  <p className="text-gray-400 text-sm">{formStatus.message}</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest pl-1">Your Name</label>
                      <input
                        required
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-5 py-3.5 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-1 focus:ring-brand-orange-500 text-white text-sm transition-all hover:bg-white/10"
                        placeholder="e.g. Akash Patil"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest pl-1">Phone Number</label>
                      <input
                        required
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-5 py-3.5 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-1 focus:ring-brand-orange-500 text-white text-sm transition-all hover:bg-white/10"
                        placeholder="+91 87921 82631"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest pl-1">City / Location</label>
                      <input
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full px-5 py-3.5 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-1 focus:ring-brand-orange-500 text-white text-sm transition-all hover:bg-white/10"
                        placeholder="Hubballi"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest pl-1">Building Type</label>
                      <select name="buildingType" value={formData.buildingType} onChange={handleChange} className="w-full px-5 py-3.5 bg-slate-900 border border-white/10 rounded-xl focus:outline-none focus:ring-1 focus:ring-brand-orange-500 text-white text-sm transition-all hover:bg-white/10 appearance-none">
                        <option value="Factory / Industrial">Factory / Industrial</option>
                        <option value="Residential">Residential</option>
                        <option value="Commercial Office">Commercial Office</option>
                        <option value="School / Institution">School / Institution</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest pl-1">Project Details</label>
                    <textarea
                      name="details"
                      value={formData.details}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-5 py-3.5 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-1 focus:ring-brand-orange-500 text-white text-sm transition-all hover:bg-white/10"
                      placeholder="Tell us about your space..."
                    />
                  </div>

                  <HoverButton disabled={formStatus.submitting} type="submit" className="w-full py-4 text-white bg-brand-orange-500 hover:bg-white hover:text-black rounded-xl text-[10px] font-black uppercase tracking-[0.2em] transition-all shadow-xl shadow-brand-orange-500/10 disabled:opacity-50 disabled:cursor-not-allowed">
                    {formStatus.submitting ? "SENDING..." : "SEND MY ENQUIRY"} <ArrowRight className="ml-2 h-4 w-4" />
                  </HoverButton>
                </form>
              )}
            </motion.div>

            {/* Info Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 space-y-6"
            >
              <div className="bg-white/5 border border-white/10 p-8 rounded-[32px] hover:border-brand-orange-500/20 transition-all group">
                <h3 className="text-lg font-black text-white uppercase tracking-tighter mb-6">Head Office</h3>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-orange-500/10 flex items-center justify-center shrink-0">
                      <MapPin className="h-5 w-5 text-brand-orange-500" />
                    </div>
                    <div>
                      <p className="text-[9px] font-black text-gray-500 uppercase tracking-widest mb-1">Location</p>
                      <p className="text-white text-sm font-medium leading-relaxed">#147, 4th Phase, Akshay Colony, Vidyanagar, Hubballi – 580021</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-orange-500/10 flex items-center justify-center shrink-0">
                      <Phone className="h-5 w-5 text-brand-orange-500" />
                    </div>
                    <div>
                      <p className="text-[9px] font-black text-gray-500 uppercase tracking-widest mb-1">Direct Line</p>
                      <p className="text-white text-xl font-black">+91 87921 82631</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-orange-500/10 flex items-center justify-center shrink-0">
                      <Mail className="h-5 w-5 text-brand-orange-500" />
                    </div>
                    <div>
                      <p className="text-[9px] font-black text-gray-500 uppercase tracking-widest mb-1">Email</p>
                      <p className="text-white text-sm font-medium underline decoration-brand-orange-500/50">contact@udayiksa.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 p-8 rounded-[32px] hover:border-brand-orange-500/20 transition-all">
                <h3 className="text-lg font-black text-white uppercase tracking-tighter mb-4 text-balance leading-none">Global Standards. <br /><span className="text-brand-orange-500">Local Presence.</span></h3>
                <div className="space-y-4">
                  {officeLocations.map((office, idx) => (
                    <div key={idx} className="pt-4 border-t border-white/5 first:border-0 first:pt-0">
                      <h4 className="text-xs font-black text-white uppercase tracking-widest mb-2 flex items-center gap-2">
                        <span className="w-1 h-1 bg-brand-orange-500 rounded-full" />
                        {office.city}
                      </h4>
                      <p className="text-gray-500 text-[11px] leading-relaxed">{office.address}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Presence Section */}
      <section className="py-20 relative px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="relative h-[400px] rounded-[48px] overflow-hidden border border-white/10 shadow-2xl">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop')] bg-cover bg-center opacity-20 grayscale brightness-50" />
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950/80 to-brand-orange-950/40" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
              <div className="w-16 h-16 bg-brand-orange-500/20 backdrop-blur-xl rounded-2xl flex items-center justify-center mb-6 border border-brand-orange-500/30">
                <Globe className="h-8 w-8 text-brand-orange-500" />
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter mb-4 leading-none">India-Wide Presence</h2>
              <p className="text-gray-400 max-w-xl text-sm md:text-base leading-relaxed font-medium">
                We've installed systems across India, with dedicated engineering and installation support from our base in Hubballi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Contacts */}
      <section className="py-20 relative px-6 bg-slate-900/10 border-y border-white/5">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Phone, title: "Call Support", detail: "+91 87921 82631", link: "tel:+918792182631", label: "Speak with Experts" },
              { icon: Mail, title: "Email Inquiry", detail: "contact@udayiksa.com", link: "mailto:contact@udayiksa.com", label: "Get Free Quote" },
              { icon: MessageSquare, title: "Quick Chat", detail: "WhatsApp Available", link: "https://wa.me/918792182631", label: "Message Directly" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-white/5 border border-white/10 p-8 rounded-[32px] text-center group hover:border-brand-orange-500/30 transition-all"
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-orange-500 transition-colors">
                  <item.icon className="h-5 w-5 text-brand-orange-500 group-hover:text-white" />
                </div>
                <h3 className="text-base font-black text-white mb-1 uppercase tracking-tighter">{item.title}</h3>
                <p className="text-brand-orange-500/80 text-[10px] font-black uppercase tracking-widest mb-4">{item.label}</p>
                <p className="text-gray-400 text-sm mb-6 font-medium">{item.detail}</p>
                <a
                  href={item.link}
                  className="inline-flex items-center gap-2 text-white text-[10px] font-black uppercase tracking-widest py-2.5 px-6 bg-white/5 rounded-full hover:bg-white/10 transition-all border border-white/10"
                >
                  START NOW <ArrowRight className="h-3 w-3 text-brand-orange-500" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative px-6">
        <div className="container mx-auto">
          <motion.div
            className="bg-brand-gradient py-12 px-8 rounded-[40px] text-center shadow-2xl shadow-brand-orange-500/10 relative overflow-hidden max-w-4xl mx-auto"
            whileHover={{ scale: 1.005 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute inset-0 bg-grid-white/[0.03] pointer-events-none opacity-50"></div>
            <h2 className="text-2xl md:text-5xl font-black text-white mb-6 tracking-tighter uppercase relative z-10 leading-none text-balance">Start Saving <br />Today</h2>
            <p className="text-sm md:text-base text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed relative z-10 font-medium font-balance">
              Join 500+ buildings that have already switched to natural sky light and ventilation systems.
            </p>
            <Button asChild className="bg-white text-black hover:bg-slate-900 hover:text-white transition-all duration-300 rounded-xl px-10 py-4 text-xs font-black uppercase tracking-widest relative z-10 shadow-2xl">
              <Link href="/products">
                EXPLORE SYSTEMS <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
