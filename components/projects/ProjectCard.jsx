"use client"

import { motion } from "framer-motion"
import { ArrowRight, Building2, Building, GraduationCap, Hotel } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const iconMap = {
  Building2,
  Building,
  GraduationCap,
  Hotel,
}

export default function ProjectCard({ category, index }) {
  const IconComponent = iconMap[category.icon]

  return (
    <motion.div
      className="bg-black/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-brand-purple-500/30 h-full flex flex-col"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10, boxShadow: "0 0 20px rgba(138, 43, 226, 0.4)" }}
    >
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10"></div>
        <Image src={category.image || "/placeholder.svg"} alt={category.name} fill className="object-cover" />
        <div className="absolute top-4 right-4 bg-brand-gradient text-white text-sm font-bold px-3 py-1 rounded-full z-20">
          {category.count}+ Projects
        </div>
      </div>

      <div className="p-6 flex-grow flex flex-col">
        <div className="flex items-center mb-4">
          <div className="bg-brand-gradient w-12 h-12 rounded-full flex items-center justify-center mr-4">
            <IconComponent className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-lg font-bold brand-gradient-text">{category.name}</h3>
        </div>

        <p className="text-gray-300 mb-6 flex-grow text-sm">{category.description}</p>

        <Link href={category.link}>
          <Button className="bg-brand-gradient hover:opacity-90 text-white w-full">
            View Projects <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </motion.div>
  )
}
