"use client"

import { motion } from "framer-motion"
import { Globe, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ProjectsSection() {
  const projects = [
    { name: "Industrial Complex, Mumbai", type: "Industrial", location: [19.076, 72.8777] },
    { name: "Tech Park, Bangalore", type: "Commercial", location: [12.9716, 77.5946] },
    { name: "Educational Campus, Delhi", type: "Institutional", location: [28.7041, 77.1025] },
    { name: "Manufacturing Plant, Chennai", type: "Industrial", location: [13.0827, 80.2707] },
    { name: "Corporate Headquarters, Hyderabad", type: "Commercial", location: [17.385, 78.4867] },
  ]

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-text">Global Projects</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our solutions are transforming spaces across India and beyond.
          </p>
        </div>

        <div className="relative h-[500px] rounded-2xl overflow-hidden border border-purple-900/30 glow-border">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-teal-900/20"></div>
          <div className="absolute inset-0 grid-pattern opacity-30"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <Globe className="h-64 w-64 text-purple-500/20" />
          </div>

          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="absolute w-4 h-4 rounded-full bg-gradient-to-r from-purple-600 to-teal-500 cursor-pointer"
              style={{
                left: `${((project.location[1] + 180) / 360) * 100}%`,
                top: `${((90 - project.location[0]) / 180) * 100}%`,
              }}
              whileHover={{ scale: 1.5 }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full mt-2 w-48 p-2 bg-black/80 backdrop-blur-sm rounded-lg opacity-0 hover:opacity-100 transition-opacity z-10 text-center">
                <p className="font-bold text-sm">{project.name}</p>
                <p className="text-xs text-gray-400">{project.type}</p>
              </div>
              <div className="animate-ping absolute inset-0 rounded-full bg-purple-500 opacity-75"></div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button variant="outline" className="border-purple-500 text-purple-500 hover:bg-purple-500/10">
            View All Projects <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
