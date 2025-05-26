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
      <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center gradient-text">Our Journey</h3>

      <div ref={timelineRef} className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-600 to-teal-500"></div>

        {timelineEvents.map((event, index) => (
          <motion.div
            key={index}
            className={`flex items-center mb-12 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className={`md:w-1/2 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"}`}>
              <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-purple-900/30 inline-block">
                <h4 className="text-xl font-bold mb-2 gradient-text">{event.title}</h4>
                <p className="text-gray-300">{event.description}</p>
              </div>
            </div>

            <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-teal-500 flex items-center justify-center z-10">
              <span className="text-white font-bold">{event.year}</span>
            </div>

            <div className="md:w-1/2"></div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
