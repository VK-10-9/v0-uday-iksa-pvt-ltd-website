"use client"

import HeroSection from "@/components/home/hero-section"
import SolutionsOverview from "@/components/home/solutions-overview"
import AboutSection from "@/components/home/about-section"
import ProjectsSection from "@/components/home/projects-section"
import ClientsSection from "@/components/home/clients-section"
import TestimonialsSection from "@/components/home/testimonials-section"
import AwardsSection from "@/components/home/awards-section"
import CTASection from "@/components/home/cta-section"
import PatentedBanner from "@/components/home/PatentedBanner"
import ProductsSection from "@/components/home/products-section"

export default function Home() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <PatentedBanner />
      <ProductsSection />
      <SolutionsOverview />
      <AboutSection />
      <ProjectsSection />
      <ClientsSection />
      <TestimonialsSection />
      <AwardsSection />

      <CTASection />
    </main>
  )
}
