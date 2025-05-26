"use client"

import HeroSection from "@/components/home/hero-section"
import AboutSection from "@/components/home/about-section"
import InnovationsSection from "@/components/home/innovations-section"
import ProjectsSection from "@/components/home/projects-section"
import TestimonialsSection from "@/components/home/testimonials-section"
import AwardsSection from "@/components/home/awards-section"
import CTASection from "@/components/home/cta-section"

export default function Home() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <AboutSection />
      <InnovationsSection />
      <ProjectsSection />
      <TestimonialsSection />
      <AwardsSection />
      <CTASection />
    </main>
  )
}
