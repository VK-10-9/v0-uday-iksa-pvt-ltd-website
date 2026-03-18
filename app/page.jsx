"use client"

import HeroSection from "@/components/home/hero-section"
import SolutionsOverview from "@/components/home/solutions-overview"
import AboutSection from "@/components/home/about-section"
import ClientsSection from "@/components/home/clients-section"
import TestimonialsSection from "@/components/home/testimonials-section"
import AwardsSection from "@/components/home/awards-section"
import PatentedBanner from "@/components/home/PatentedBanner"
import ProductsSection from "@/components/home/products-section"
import InstallationGallery from "@/components/home/installation-gallery"

export default function Home() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <PatentedBanner />
      <ProductsSection />
      <SolutionsOverview />
      <InstallationGallery />
      <AboutSection />
      <ClientsSection />

      <TestimonialsSection />
      {/* <AwardsSection /> */}


    </main>
  )
}
