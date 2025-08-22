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
    <section className="py-12 relative bg-gradient-to-b from-slate-950 to-slate-900 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2 text-white">What Our Clients Say</h2>
          <p className="text-base text-gray-400 max-w-xl mx-auto">
            Discover how our solutions have transformed spaces and exceeded expectations.
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <div className="bg-black/60 border border-purple-500/20 rounded-2xl p-6 shadow-lg flex flex-col items-center">
            <Image
              src={testimonials[currentTestimonial].image || "/placeholder.svg"}
              alt={testimonials[currentTestimonial].name}
              width={72}
              height={72}
              className="rounded-full mb-3 border-2 border-purple-500 object-cover"
            />
            <h4 className="text-lg font-semibold text-white mb-1">{testimonials[currentTestimonial].name}</h4>
            <p className="text-purple-400 text-sm mb-1">{testimonials[currentTestimonial].position}</p>
            <p className="text-gray-400 text-xs mb-2">{testimonials[currentTestimonial].company}</p>
            <blockquote className="text-base text-gray-200 italic text-center mb-3 px-2">
              “{testimonials[currentTestimonial].testimonial}”
            </blockquote>
            <div className="flex gap-1 mb-2">
              {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
              ))}
            </div>
            <div className="flex flex-col items-center gap-1 mb-2">
              <span className="bg-purple-600/10 text-purple-300 rounded-full px-3 py-1 text-xs">
                {testimonials[currentTestimonial].project}
              </span>
              <span className="bg-green-600/10 text-green-300 rounded-full px-3 py-1 text-xs">
                {testimonials[currentTestimonial].savings}
              </span>
            </div>
            <div className="flex gap-2 mt-2">
              <button
                onClick={prevTestimonial}
                className="w-8 h-8 rounded-full bg-black/40 border border-purple-500/20 flex items-center justify-center text-white hover:bg-purple-500/20 transition-all"
                aria-label="Previous testimonial"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-8 h-8 rounded-full bg-black/40 border border-purple-500/20 flex items-center justify-center text-white hover:bg-purple-500/20 transition-all"
                aria-label="Next testimonial"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
            <div className="flex gap-1 mt-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentTestimonial === index ? "bg-purple-500 w-4" : "bg-gray-600"
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
