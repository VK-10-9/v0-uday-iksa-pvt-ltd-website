"use client"

import { motion } from "framer-motion"
import { ArrowRight, Mail, Phone, MapPin, Send, MessageSquare, Globe } from "lucide-react"
import { useState } from "react"
import { HoverButton } from "@/components/ui/hover-button"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })

  const [formStatus, setFormStatus] = useState({
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

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormStatus({
      submitted: true,
      success: true,
      message: "Thank you for your message! Our expert team will get back to you shortly.",
    })
  }

  const officeLocations = [
    {
      city: "Hubli",
      address: "123 Innovation Park, Industrial Area, Hubli, Karnataka 580030",
      phone: "+91 8792182631",
      email: "hubli@udayiksa.com",
    },
    {
      city: "Bangalore",
      address: "456 Tech Square, Whitefield, Bangalore, Karnataka 560066",
      phone: "+91 8792182632",
      email: "bangalore@udayiksa.com",
    },
    {
      city: "Mumbai",
      address: "789 Sustainability Center, Andheri East, Mumbai, Maharashtra 400069",
      phone: "+91 8792182633",
      email: "mumbai@udayiksa.com",
    },
  ]

  return (
    <main className="pt-24 bg-slate-950">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-brand-orange-500/5 blur-3xl rounded-full transform -translate-y-1/2"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase">
              Get In <span className="brand-gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-gray-400 mb-12 leading-relaxed">
              Ready to transform your space with natural daylight and ventilation? Our engineering experts are here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-4xl font-black text-white uppercase tracking-tighter mb-6">Send Us a Message</h2>
                <div className="h-1 w-20 bg-brand-orange-500 rounded-full mb-8"></div>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Have questions about our sustainable solutions? Fill out the form and our team will get back to you within 24 hours.
                </p>
              </div>

              {formStatus.submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-10 rounded-3xl bg-brand-orange-500/10 border border-brand-orange-500/30 text-center"
                >
                  <div className="w-16 h-16 bg-brand-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Message Sent Successfully!</h3>
                  <p className="text-gray-400">{formStatus.message}</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label htmlFor="name" className="text-xs font-black text-gray-400 uppercase tracking-widest pl-1">
                        Your Name <span className="text-brand-orange-500">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-orange-500 text-white transition-all hover:bg-white/10"
                        placeholder="John Doe"
                      />
                    </div>

                    <div className="space-y-3">
                      <label htmlFor="email" className="text-xs font-black text-gray-400 uppercase tracking-widest pl-1">
                        Email Address <span className="text-brand-orange-500">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-orange-500 text-white transition-all hover:bg-white/10"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label htmlFor="phone" className="text-xs font-black text-gray-400 uppercase tracking-widest pl-1">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-orange-500 text-white transition-all hover:bg-white/10"
                        placeholder="+91 87921 82631"
                      />
                    </div>

                    <div className="space-y-3">
                      <label htmlFor="company" className="text-xs font-black text-gray-400 uppercase tracking-widest pl-1">
                        Company Name
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-orange-500 text-white transition-all hover:bg-white/10"
                        placeholder="Company Ltd."
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label htmlFor="message" className="text-xs font-black text-gray-400 uppercase tracking-widest pl-1">
                      Your Message <span className="text-brand-orange-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-orange-500 text-white transition-all hover:bg-white/10"
                      placeholder="Tell us about your project requirements..."
                    ></textarea>
                  </div>

                  <HoverButton type="submit" className="w-full py-5 text-white bg-gradient-to-r from-brand-orange-600 to-brand-red-600 rounded-2xl text-lg font-black shadow-xl shadow-brand-orange-500/20">
                    SEND MESSAGE <Send className="ml-3 h-5 w-5" />
                  </HoverButton>
                </form>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-4xl font-black text-white uppercase tracking-tighter mb-6">Contact Information</h2>
                <div className="h-1 w-20 bg-brand-orange-500 rounded-full mb-8"></div>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Connect with our regional offices or reach out to our headquarters for nationwide support.
                </p>
              </div>

              <div className="space-y-8">
                <div className="bg-white/5 backdrop-blur-sm p-10 rounded-3xl border border-brand-orange-500/20 group hover:border-brand-orange-500/40 transition-colors">
                  <h3 className="text-2xl font-black text-white mb-8 uppercase tracking-tighter">Head Office</h3>

                  <div className="space-y-6">
                    <div className="flex items-start group/item">
                      <div className="w-12 h-12 rounded-xl bg-brand-orange-500/10 flex items-center justify-center mr-5 group-hover/item:bg-brand-orange-500 transition-colors">
                        <MapPin className="h-6 w-6 text-brand-orange-500 group-hover/item:text-white" />
                      </div>
                      <div>
                        <p className="font-black text-gray-500 text-[10px] uppercase tracking-widest mb-1">Corporate Address</p>
                        <p className="text-white text-lg font-medium">Uday IKSA Pvt Ltd, Hubli, Karnataka, India</p>
                      </div>
                    </div>

                    <div className="flex items-start group/item">
                      <div className="w-12 h-12 rounded-xl bg-brand-orange-500/10 flex items-center justify-center mr-5 group-hover/item:bg-brand-orange-500 transition-colors">
                        <Phone className="h-6 w-6 text-brand-orange-500 group-hover/item:text-white" />
                      </div>
                      <div>
                        <p className="font-black text-gray-500 text-[10px] uppercase tracking-widest mb-1">Call Us</p>
                        <p className="text-white text-lg font-medium">+91 8792182631</p>
                      </div>
                    </div>

                    <div className="flex items-start group/item">
                      <div className="w-12 h-12 rounded-xl bg-brand-orange-500/10 flex items-center justify-center mr-5 group-hover/item:bg-brand-orange-500 transition-colors">
                        <Mail className="h-6 w-6 text-brand-orange-500 group-hover/item:text-white" />
                      </div>
                      <div>
                        <p className="font-black text-gray-500 text-[10px] uppercase tracking-widest mb-1">Email Us</p>
                        <p className="text-white text-lg font-medium">info@udayiksa.com</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm p-10 rounded-3xl border border-white/10">
                  <h3 className="text-2xl font-black text-white mb-8 uppercase tracking-tighter">Network Locations</h3>

                  <div className="grid gap-8">
                    {officeLocations.map((office, index) => (
                      <div key={index} className="pb-8 border-b border-white/5 last:border-0 last:pb-0">
                        <h4 className="font-black text-brand-orange-400 mb-4 uppercase tracking-tighter text-xl">{office.city}</h4>
                        <div className="space-y-3">
                          <p className="text-gray-400 flex items-start text-sm">
                            <MapPin className="h-4 w-4 text-brand-orange-500 mr-3 mt-1 flex-shrink-0" />
                            <span>{office.address}</span>
                          </p>
                          <p className="text-gray-400 flex items-center text-sm">
                            <Phone className="h-4 w-4 text-brand-orange-500 mr-3" />
                            <span>{office.phone}</span>
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="relative h-[500px] rounded-[40px] overflow-hidden border border-brand-orange-500/20 shadow-2xl shadow-brand-orange-500/10">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-orange-500/20 to-brand-red-500/20"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-10">
              <div className="w-20 h-20 bg-brand-orange-500/20 backdrop-blur-xl rounded-full flex items-center justify-center mb-6">
                <Globe className="h-10 w-10 text-brand-orange-500 animate-pulse" />
              </div>
              <h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-4">India-Wide Presence</h2>
              <p className="text-gray-400 max-w-xl text-lg leading-relaxed">
                Strategic presence across major industrial hubs ensures rapid implementation and local engineering support for your sustainable projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Phone, title: "Call Support", detail: "+91 8792182631", link: "tel:+918792182631", label: "Speak with Experts" },
              { icon: Mail, title: "Email Inquiry", detail: "info@udayiksa.com", link: "mailto:info@udayiksa.com", label: "Get Free Quote" },
              { icon: MessageSquare, title: "WhatsApp Chat", detail: "+91 8792182631", link: "#", label: "Quick Connect" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-white/5 backdrop-blur-sm p-10 rounded-[40px] border border-white/10 text-center group hover:bg-brand-orange-500/10 hover:border-brand-orange-500/30 transition-all duration-500"
                whileHover={{ y: -10 }}
              >
                <div className="bg-brand-orange-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg shadow-brand-orange-500/20 group-hover:rotate-6 transition-transform">
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-tighter">{item.title}</h3>
                <p className="text-brand-orange-400 text-xs font-black uppercase tracking-widest mb-6">{item.label}</p>
                <p className="text-gray-400 mb-8">{item.detail}</p>
                <a
                  href={item.link}
                  className="inline-flex items-center gap-2 text-white font-bold bg-white/5 hover:bg-white/10 px-6 py-3 rounded-xl transition-all"
                >
                  CONNECT NOW <ArrowRight className="h-4 w-4 text-brand-orange-500" />
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
            className="bg-brand-gradient p-16 rounded-[60px] text-center shadow-2xl shadow-brand-orange-500/20 relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase relative z-10">Start Your Energy Transition</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-12 leading-relaxed relative z-10">
              Join 500+ industrial leaders who have optimized their workspace with Uday IKSA's daylighting solutions.
            </p>
            <HoverButton className="bg-white text-black hover:bg-black hover:text-white transition-colors text-xl px-12 py-5 rounded-2xl font-black relative z-10 uppercase tracking-widest">
              Schedule Consultation <ArrowRight className="ml-3 h-6 w-6" />
            </HoverButton>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
