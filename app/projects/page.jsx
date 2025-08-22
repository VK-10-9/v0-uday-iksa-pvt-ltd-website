"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { projectCategories, featuredProjects } from "@/lib/data/projects"
import ProjectCard from "@/components/projects/ProjectCard"
import FeaturedProject from "@/components/projects/FeaturedProject"

export default function ProjectsPage() {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20 z-0"></div>
        <div className="light-beam absolute inset-0 z-0"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold brand-gradient-text mb-6">Our Projects</h1>
            <p className="text-xl text-gray-300 mb-8">
              Transforming spaces across diverse sectors with innovative natural daylight and ventilation solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Categories */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 brand-gradient-text">Project Categories</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our diverse portfolio across PSU, Commercial, Institutional, and Hospitality sectors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projectCategories.map((category, index) => (
              <ProjectCard key={category.id} category={category} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 relative bg-black/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 brand-gradient-text">Featured Projects</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Highlighting our most impactful implementations across all sectors.
            </p>
          </div>

          <div className="space-y-16">
            {featuredProjects.map((project, index) => (
              <FeaturedProject key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Project Statistics */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 brand-gradient-text">Our Impact</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Numbers that showcase our commitment to sustainable solutions across all sectors.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "285+", label: "Total Projects", description: "Across all sectors" },
              { number: "40%", label: "Avg. Energy Savings", description: "Consistent performance" },
              { number: "15+", label: "Years Experience", description: "Industry expertise" },
              { number: "50+", label: "Cities Covered", description: "Pan-India presence" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center bg-black/30 backdrop-blur-sm p-8 rounded-2xl border border-brand-purple-500/30"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: "0 0 20px rgba(138, 43, 226, 0.3)" }}
              >
                <h3 className="text-4xl font-bold brand-gradient-text mb-2">{stat.number}</h3>
                <p className="text-xl font-semibold text-white mb-1">{stat.label}</p>
                <p className="text-gray-400 text-sm">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative bg-gradient-to-r from-purple-900/50 to-teal-900/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 brand-gradient-text">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Contact us today to discuss how our natural daylight and ventilation solutions can transform your space
            across any sector.
          </p>
          <Button size="lg" className="bg-brand-gradient hover:opacity-90 text-white rounded-full px-8">
            Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </main>
  )
}
