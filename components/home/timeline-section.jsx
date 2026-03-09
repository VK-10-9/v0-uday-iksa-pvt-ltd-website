"use client"

import { useRef } from "react"
import { motion } from "framer-motion"

export default function TimelineSection() {
  const timelineRef = useRef(null)

  const timelineEvents = [
    {
      year: "2008",
      title: "Company Founded",
      description: "Established with a vision to revolutionize natural lighting solutions.",
    },
    { year: "2013", title: "NANOSUN Launch", description: "Introduced our flagship natural daylighting system." },
    {
      year: "2016",
      title: "NANOVENT Development",
      description: "Expanded product line with innovative natural ventilation solutions.",
    },
    {
      year: "2022",
      title: "CII INNOVERGE Award",
      description: "Received national recognition for innovation in green solar lighting.",
    },
    {
      year: "2023",
      title: "Pan-India Expansion",
      description: "Extended operations to serve clients across the country.",
    },
  ]

  return (
    <div className="mt-20">
      <div ref={timelineRef} className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-brand-orange-500 to-brand-red-600 opacity-20"></div>

        {timelineEvents.map((event, index) => (
          <motion.div
            key={index}
            className={`flex items-center mb-12 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
          >
            <div className={`md:w-1/2 ${index % 2 === 0 ? "md:text-right md:pr-16" : "md:text-left md:pl-16"}`}>
              <div className="bg-white/5 backdrop-blur-xl p-8 rounded-[32px] border border-white/10 group hover:border-brand-orange-500/30 transition-all duration-500 shadow-2xl overflow-hidden relative">
                <div className={`absolute top-0 ${index % 2 === 0 ? 'right-0' : 'left-0'} w-1 h-full bg-brand-orange-500 opacity-0 group-hover:opacity-100 transition-opacity`} />
                <h4 className="text-2xl font-black text-white uppercase tracking-tighter mb-2 group-hover:text-brand-orange-400 transition-colors uppercase tracking-widest">{event.title}</h4>
                <p className="text-gray-400 leading-relaxed text-sm">{event.description}</p>
              </div>
            </div>

            <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-orange-500 to-brand-red-600 flex items-center justify-center z-10 shadow-xl shadow-brand-orange-500/30 border border-white/20 group hover:rotate-6 transition-transform">
              <span className="text-white text-xs font-black uppercase tracking-widest">{event.year}</span>
            </div>

            <div className="md:w-1/2"></div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
