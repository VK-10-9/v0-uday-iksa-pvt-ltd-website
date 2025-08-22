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

  return null
}
