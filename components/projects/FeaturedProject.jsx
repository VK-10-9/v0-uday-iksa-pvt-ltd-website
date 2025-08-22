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
          <div className="relative h-[400px] rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-from-brand-purple-500/20 to-brand-teal-500/20 z-10 rounded-2xl"></div>
            <Image src={project.image || "/placeholder.svg"} alt={project.name} fill className="object-cover" />
          </div>

          <div>
            <div className="mb-2">
              <span className="bg-brand-gradient text-brand-teal-400 text-sm font-medium px-3 py-1 rounded-full">
                {project.category}
              </span>
            </div>
            <h3 className="text-3xl font-bold brand-gradient-text mb-2">{project.name}</h3>
            <p className="text-gray-400 mb-4 flex items-center">
              <Globe className="h-4 w-4 mr-2" /> {project.location}
            </p>
            <p className="text-gray-300 mb-6">{project.description}</p>
            <Button className="bg-brand-gradient hover:opacity-90 text-white">
              View Case Study <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </>
      ) : (
        <>
          <div>
            <div className="mb-2">
              <span className="bg-brand-gradient text-brand-teal-400 text-sm font-medium px-3 py-1 rounded-full">
                {project.category}
              </span>
            </div>
            <h3 className="text-3xl font-bold brand-gradient-text mb-2">{project.name}</h3>
            <p className="text-gray-400 mb-4 flex items-center">
              <Globe className="h-4 w-4 mr-2" /> {project.location}
            </p>
            <p className="text-gray-300 mb-6">{project.description}</p>
            <Button className="bg-brand-gradient hover:opacity-90 text-white">
              View Case Study <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="relative h-[400px] rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-from-brand-purple-500/20 to-brand-teal-500/20 z-10 rounded-2xl"></div>
            <Image src={project.image || "/placeholder.svg"} alt={project.name} fill className="object-cover" />
          </div>
        </>
      )}
    </motion.div>
  )
}
