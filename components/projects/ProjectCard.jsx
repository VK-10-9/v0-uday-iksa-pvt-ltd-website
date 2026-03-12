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
  const IconComponent = iconMap[category.icon] || Building2

  return (
    <motion.div
      className="bg-black/30 backdrop-blur-sm rounded-3xl overflow-hidden border border-brand-orange-500/30 h-full flex flex-col group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(244, 121, 32, 0.15)" }}
    >
      <div className="relative h-56 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-60"></div>
        <Image
          src={category.image || "/placeholder.svg"}
          alt={category.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-brand-orange-500 text-white text-[7px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full z-20 shadow-lg shadow-brand-orange-500/30">
          {category.count}+ Projects
        </div>
      </div>

      <div className="p-8 flex-grow flex flex-col">
        <div className="flex items-center mb-6">
          <div className="bg-gradient-to-br from-brand-orange-500 to-brand-red-600 w-14 h-14 rounded-2xl flex items-center justify-center mr-5 shadow-lg shadow-brand-orange-500/20 group-hover:rotate-6 transition-transform">
            <IconComponent className="h-7 w-7 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-black text-white uppercase tracking-tighter transition-colors group-hover:text-brand-orange-400">{category.name}</h3>
            <div className="h-0.5 w-8 bg-brand-orange-500 rounded-full mt-1 group-hover:w-16 transition-all duration-500" />
          </div>
        </div>

        <p className="text-gray-400 mb-8 flex-grow text-sm leading-relaxed">{category.description}</p>

        <Link href={category.link} className="block w-full">
          <Button className="bg-white hover:bg-brand-orange-500 text-black hover:text-white w-full font-bold h-12 rounded-xl transition-all duration-300">
            VIEW PROJECTS <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </motion.div>
  )
}
