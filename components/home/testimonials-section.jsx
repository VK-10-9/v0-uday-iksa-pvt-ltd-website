"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Star, Quote, ArrowLeft, ArrowRight, Zap, TrendingUp } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "Krishnappa",
      position: "Senior Engineer",
      company: "Bharat Electronics Limited (BEL)",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Krishnappa",
      rating: 5,
      testimonial:
        "We installed NANOSUN in our production facility and stopped using tube lights during the day entirely. The difference in our electricity bill was visible from the first month. The installation team was clean and professional.",
      project: "Production Facility",
      savings: "Zero Day-Light Bills",
      impact: "Visible ROI Month 1"
    },
    {
      id: 2,
      name: "Indushekhar",
      position: "Director",
      company: "Volvo Groups",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Indushekhar",
      rating: 5,
      testimonial:
        "Uday IKSA understood our building's requirements and gave us a solution that fit perfectly. The natural light has made our workspace noticeably better — and the installation was done without disrupting our operations.",
      project: "Corporate Workspace",
      savings: "Custom Engineering",
      impact: "Uninterrupted Operations"
    },
    {
      id: 3,
      name: "Satish",
      position: "Engineering Head",
      company: "Exedy Clutch India Pvt Ltd",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Satish",
      rating: 5,
      testimonial:
        "Our workers are happier. The light feels natural and comfortable, not harsh. And yes — the energy savings are real. We'd recommend Uday IKSA to any manufacturing company.",
      project: "Manufacturing Hub",
      savings: "Measurable Energy Drop",
      impact: "Workforce Well-being"
    },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-40 relative bg-slate-950 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-[500px] h-[500px] bg-brand-orange-500/5 rounded-full blur-[120px]"
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-[400px] h-[400px] bg-brand-red-500/5 rounded-full blur-[100px]"
          animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            className="inline-flex items-center gap-3 bg-brand-orange-500/10 border border-brand-orange-500/20 rounded-full px-8 py-2.5 mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Quote className="h-5 w-5 text-brand-orange-400" />
            <span className="text-xs font-black text-brand-orange-400 uppercase tracking-[0.2em]">Industry Voice</span>
          </motion.div>

          <h2 className="text-5xl lg:text-8xl font-black text-white mb-8 tracking-tighter uppercase leading-none">
            Client <span className="brand-gradient-text">Success</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Real impact stories from India's leading industrial and commercial organizations who transitioned to sustainable engineering.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            className="relative bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-[60px] p-10 lg:p-20 shadow-2xl overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            {/* Ambient Background Glow */}
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-brand-orange-500/10 rounded-full blur-[120px]" />

            <div className="relative z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="grid lg:grid-cols-[1.5fr_2fr] gap-16 lg:gap-24 items-center"
                >
                  {/* Client Info Detail Card */}
                  <div className="space-y-10 order-2 lg:order-1">
                    <div className="flex items-center gap-6">
                      <div className="relative w-24 h-24 rounded-3xl overflow-hidden border-2 border-brand-orange-500 shadow-xl shadow-brand-orange-500/20">
                        <Image
                          src={testimonials[currentTestimonial].image}
                          alt={testimonials[currentTestimonial].name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-3xl font-black text-white uppercase tracking-tighter mb-1">{testimonials[currentTestimonial].name}</h4>
                        <p className="text-brand-orange-500 font-black text-[10px] uppercase tracking-widest">{testimonials[currentTestimonial].position}</p>
                        <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">{testimonials[currentTestimonial].company}</p>
                      </div>
                    </div>

                    <div className="grid gap-4">
                      <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-4 group hover:bg-brand-orange-500/10 hover:border-brand-orange-500/30 transition-all duration-300">
                        <div className="bg-brand-orange-500/20 p-2 rounded-xl">
                          <Zap className="h-5 w-5 text-brand-orange-500" />
                        </div>
                        <div>
                          <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-0.5">Energy Impact</p>
                          <p className="text-white font-black uppercase text-sm">{testimonials[currentTestimonial].savings}</p>
                        </div>
                      </div>

                      <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-4 group hover:bg-brand-orange-500/10 hover:border-brand-orange-500/30 transition-all duration-300">
                        <div className="bg-brand-orange-500/20 p-2 rounded-xl">
                          <TrendingUp className="h-5 w-5 text-brand-orange-500" />
                        </div>
                        <div>
                          <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-0.5">Strategic Value</p>
                          <p className="text-white font-black uppercase text-sm">{testimonials[currentTestimonial].impact}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="h-4 w-4 fill-brand-orange-500 text-brand-orange-500" />
                      ))}
                    </div>
                  </div>

                  {/* Main Quote Area */}
                  <div className="relative order-1 lg:order-2">
                    <Quote className="absolute -top-12 -left-12 h-24 w-24 text-brand-orange-500/10 hidden lg:block" />
                    <blockquote className="text-2xl lg:text-4xl font-medium text-gray-200 leading-[1.4] relative z-10 italic">
                      "{testimonials[currentTestimonial].testimonial}"
                    </blockquote>
                    <div className="mt-12 h-1 w-24 bg-brand-orange-500 rounded-full" />
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Controls */}
              <div className="flex items-center justify-between mt-20 pt-10 border-t border-white/5">
                <div className="flex gap-3">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      className={`h-1.5 rounded-full transition-all duration-500 ${currentTestimonial === index ? "bg-brand-orange-500 w-12" : "bg-white/10 w-4 hover:bg-white/20"}`}
                      onClick={() => setCurrentTestimonial(index)}
                    />
                  ))}
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={prevTestimonial}
                    className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-brand-orange-500 hover:border-brand-orange-500 transition-all duration-300 group"
                  >
                    <ArrowLeft className="h-6 w-6 group-hover:-translate-x-1 transition-transform" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-brand-orange-500 hover:border-brand-orange-500 transition-all duration-300 group"
                  >
                    <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
