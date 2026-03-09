"use client"

import { motion } from "framer-motion"
import { ArrowRight, Globe } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function FeaturedProject({ project, index }) {
  return (
    <motion.div
      className="grid md:grid-cols-2 gap-12 items-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {index % 2 === 0 ? (
        <>
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl shadow-brand-orange-500/10">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-orange-500/20 to-brand-red-500/20 z-10 rounded-2xl"></div>
            <Image src={project.image || "/placeholder.svg"} alt={project.name} fill className="object-cover" />
          </div>

          <div>
            <div className="mb-2">
              <span className="bg-brand-gradient/10 border border-brand-orange-500/20 text-brand-orange-400 text-sm font-bold uppercase tracking-widest px-4 py-1 rounded-full">
                {project.category}
              </span>
            </div>
            <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-2">{project.name}</h3>
            <p className="text-gray-400 mb-4 flex items-center font-medium">
              <Globe className="h-4 w-4 mr-2 text-brand-orange-500" /> {project.location}
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
            <Button className="bg-brand-gradient hover:opacity-90 text-white font-bold px-8 py-6 rounded-xl group">
              View Case Study <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </>
      ) : (
        <>
          <div>
            <div className="mb-2">
              <span className="bg-brand-gradient/10 border border-brand-orange-500/20 text-brand-orange-400 text-sm font-bold uppercase tracking-widest px-4 py-1 rounded-full">
                {project.category}
              </span>
            </div>
            <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-2">{project.name}</h3>
            <p className="text-gray-400 mb-4 flex items-center font-medium">
              <Globe className="h-4 w-4 mr-2 text-brand-orange-500" /> {project.location}
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
            <Button className="bg-brand-gradient hover:opacity-90 text-white font-bold px-8 py-6 rounded-xl group">
              View Case Study <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl shadow-brand-orange-500/10">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-orange-500/20 to-brand-red-500/20 z-10 rounded-2xl"></div>
            <Image src={project.image || "/placeholder.svg"} alt={project.name} fill className="object-cover" />
          </div>
        </>
      )}
    </motion.div>
  )
}
