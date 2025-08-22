"use client"

import { motion } from "framer-motion"
import { Star, Quote, ArrowLeft, ArrowRight } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      position: "Operations Director",
      company: "Tata Steel",
      image: "/placeholder.svg?height=200&width=200&text=RK",
      rating: 5,
      testimonial:
        "The implementation of Uday IKSA's daylighting systems in our manufacturing facility has been transformative. Not only have we seen significant energy savings, but our workers report a more comfortable and productive environment. The installation was smooth and professional, with minimal disruption to our operations.",
      project: "Manufacturing Plant - Mumbai",
      savings: "35% Energy Reduction",
    },
    {
      id: 2,
      name: "Priya Sharma",
      position: "Facilities Manager",
      company: "Infosys Tech Park",
      image: "/placeholder.svg?height=200&width=200&text=PS",
      rating: 5,
      testimonial:
        "The daylighting solution provided by Uday IKSA has completely transformed our office environment. Our employees consistently report higher satisfaction with their workspace, and we've seen measurable improvements in productivity. The energy savings have been substantial.",
      project: "Office Complex - Bangalore",
      savings: "40% Lighting Costs",
    },
    {
      id: 3,
      name: "Dr. Sunil Verma",
      position: "Director",
      company: "National Science Campus",
      image: "/placeholder.svg?height=200&width=200&text=SV",
      rating: 5,
      testimonial:
        "The implementation of Uday IKSA's natural lighting systems in our campus buildings has had a profound impact on our learning environment. Students and faculty alike report higher levels of alertness and satisfaction. The energy savings have been substantial.",
      project: "Educational Campus - Delhi",
      savings: "45% Energy Consumption",
    },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-32 relative bg-gradient-to-b from-slate-950 to-slate-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
          transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600/20 to-teal-500/20 backdrop-blur-xl border border-purple-500/30 rounded-full px-6 py-2 mb-6"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <Quote className="h-4 w-4 text-purple-400" />
            <span className="text-sm font-medium text-gray-300">Client Testimonials</span>
          </motion.div>

          <h2 className="text-5xl lg:text-7xl font-bold mb-6">
            <span className="text-white">What Our</span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-teal-400 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover how our innovative solutions have transformed spaces and exceeded expectations across India.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="relative bg-black/40 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-8 lg:p-12 overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Background Gradient */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-teal-500/10"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, 0],
              }}
              transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
            />

            <div className="relative z-10">
              {/* Current Testimonial */}
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="grid lg:grid-cols-[1fr_2fr] gap-12 items-center"
              >
                {/* Client Info */}
                <div className="text-center lg:text-left">
                  <motion.div className="relative w-32 h-32 mx-auto lg:mx-0 mb-6" whileHover={{ scale: 1.05 }}>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-teal-500 blur-md opacity-50"></div>
                    <div className="relative h-full w-full rounded-full overflow-hidden border-2 border-purple-500">
                      <Image
                        src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                        alt={testimonials[currentTestimonial].name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </motion.div>

                  <h4 className="text-2xl font-bold text-white mb-2">{testimonials[currentTestimonial].name}</h4>
                  <p className="text-purple-400 font-medium mb-1">{testimonials[currentTestimonial].position}</p>
                  <p className="text-gray-400 mb-4">{testimonials[currentTestimonial].company}</p>

                  {/* Rating */}
                  <div className="flex justify-center lg:justify-start gap-1 mb-4">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <Star className="h-5 w-5 text-yellow-400 fill-current" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Project Info */}
                  <div className="space-y-2">
                    <div className="bg-gradient-to-r from-purple-600/20 to-teal-500/20 backdrop-blur-xl border border-purple-500/30 rounded-full px-4 py-2 text-sm text-gray-300">
                      {testimonials[currentTestimonial].project}
                    </div>
                    <div className="bg-gradient-to-r from-green-600/20 to-emerald-500/20 backdrop-blur-xl border border-green-500/30 rounded-full px-4 py-2 text-sm text-green-400 font-medium">
                      {testimonials[currentTestimonial].savings}
                    </div>
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="relative">
                  <motion.div
                    className="absolute -top-4 -left-4 text-6xl text-purple-500/20"
                    animate={{ rotate: [0, 10, 0] }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <Quote className="h-16 w-16" />
                  </motion.div>

                  <blockquote className="text-xl lg:text-2xl text-gray-300 leading-relaxed relative z-10 pl-8">
                    {testimonials[currentTestimonial].testimonial}
                  </blockquote>
                </div>
              </motion.div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-12">
                {/* Dots Indicator */}
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <motion.button
                      key={index}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        currentTestimonial === index ? "bg-purple-500 w-8" : "bg-gray-600"
                      }`}
                      onClick={() => setCurrentTestimonial(index)}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    />
                  ))}
                </div>

                {/* Navigation Buttons */}
                <div className="flex gap-4">
                  <motion.button
                    onClick={prevTestimonial}
                    className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-xl border border-purple-500/30 flex items-center justify-center text-white hover:bg-purple-500/20 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ArrowLeft className="h-5 w-5" />
                  </motion.button>
                  <motion.button
                    onClick={nextTestimonial}
                    className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-xl border border-purple-500/30 flex items-center justify-center text-white hover:bg-purple-500/20 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ArrowRight className="h-5 w-5" />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
