"use client"

import { motion } from "framer-motion"
import { Building2, Users, Lightbulb, ChevronRight } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
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
            <h1 className="text-4xl md:text-6xl font-bold brand-gradient-text mb-6">About Uday IKSA</h1>
            <p className="text-xl text-gray-300 mb-8">
              A leading manufacturer in natural daylight and ventilation engineering, serving India for over 15 years
              with innovative and sustainable solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="story" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold brand-gradient-text mb-6">Our Story</h2>
              <p className="text-gray-300 mb-4">
                Founded in 2008, Uday IKSA began with a vision to revolutionize how buildings harness natural resources
                for lighting and ventilation. What started as a small team of innovators has grown into a leading
                manufacturer of sustainable building solutions across India.
              </p>
              <p className="text-gray-300 mb-4">
                Our journey has been marked by continuous innovation and a commitment to sustainability. From our first
                NANOSUN prototype to our current range of advanced daylighting and ventilation systems, we have
                consistently pushed the boundaries of what's possible.
              </p>
              <p className="text-gray-300 mb-6">
                Today, Uday IKSA stands as a testament to the power of combining engineering excellence with
                environmental responsibility, serving clients across industrial, commercial, and institutional sectors.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-brand-gradient flex items-center justify-center mr-3">
                    <Building2 className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold">15+</p>
                    <p className="text-sm text-gray-400">Years of Excellence</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-brand-gradient flex items-center justify-center mr-3">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold">500+</p>
                    <p className="text-sm text-gray-400">Projects Completed</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-brand-gradient flex items-center justify-center mr-3">
                    <Lightbulb className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold">10+</p>
                    <p className="text-sm text-gray-400">Patented Innovations</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative h-[400px] rounded-2xl overflow-hidden"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="absolute inset-0 from-brand-purple-500/20 to-brand-teal-500/20 z-10 rounded-2xl bg-gradient-to-r"></div>
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Uday IKSA Headquarters"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section id="vision" className="py-20 relative bg-black/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 brand-gradient-text">Vision & Mission</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Guiding principles that drive our innovation and commitment to sustainability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="bg-black/30 backdrop-blur-sm p-8 rounded-2xl border border-brand-purple-500/30 brand-glow h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -10, boxShadow: "0 0 20px rgba(138, 43, 226, 0.4)" }}
            >
              <div className="bg-brand-gradient w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-300 mb-4">
                At Uday IKSA Pvt Ltd, our vision is to create a world where sustainable and healthy living is accessible
                to all. We strive to lead the way in natural daylight and ventilation engineering, transforming how
                buildings interact with the environment.
              </p>
              <p className="text-gray-300">
                We envision a future where every structure, from industrial facilities to residential homes, harnesses
                the power of natural resources efficiently, reducing energy consumption and creating healthier spaces
                for people to work and live.
              </p>
            </motion.div>

            <motion.div
              className="bg-black/30 backdrop-blur-sm p-8 rounded-2xl border border-brand-purple-500/30 brand-glow h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -10, boxShadow: "0 0 20px rgba(138, 43, 226, 0.4)" }}
            >
              <div className="bg-brand-gradient w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 20h9"></path>
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-300 mb-4">
                Our mission is to continuously upgrade our products to match the super fast modernizing Roof sheet
                profiles and PEB Structures, developing fine engineered products that are technician friendly and
                aesthetic.
              </p>
              <p className="text-gray-300">We are committed to:</p>
              <ul className="text-gray-300 space-y-2 mt-2">
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-teal-500 mr-2 mt-0.5" />
                  <span>Pioneering innovative solutions that maximize natural resources</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-teal-500 mr-2 mt-0.5" />
                  <span>Reducing the carbon footprint of buildings across India</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-teal-500 mr-2 mt-0.5" />
                  <span>Educating the market about sustainable building practices</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-teal-500 mr-2 mt-0.5" />
                  <span>Delivering exceptional value to our clients and partners</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 brand-gradient-text">Our Leadership Team</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet the visionaries and experts driving innovation at Uday IKSA.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Rajesh Kumar",
                position: "Founder & CEO",
                bio: "With over 20 years of experience in sustainable engineering, Rajesh founded Uday IKSA with a vision to revolutionize natural lighting solutions.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Priya Sharma",
                position: "Chief Technology Officer",
                bio: "A mechanical engineering expert specializing in ventilation systems, Priya leads our R&D team in developing cutting-edge sustainable solutions.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Vikram Patel",
                position: "Head of Operations",
                bio: "Vikram ensures the seamless execution of all projects, maintaining our high standards of quality and customer satisfaction across India.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Ananya Desai",
                position: "Design Director",
                bio: "With a background in architectural design, Ananya brings aesthetic excellence to our technical solutions, ensuring they complement modern structures.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Sanjay Mehta",
                position: "Business Development Manager",
                bio: "Sanjay expands our market presence across India, building relationships with key industry partners and clients in the construction sector.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Neha Reddy",
                position: "Sustainability Consultant",
                bio: "An environmental science expert, Neha ensures all our solutions meet the highest standards of sustainability and energy efficiency.",
                image: "/placeholder.svg?height=300&width=300",
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                className="bg-black/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-brand-purple-500/30"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, boxShadow: "0 0 20px rgba(138, 43, 226, 0.4)" }}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold brand-gradient-text">{member.name}</h3>
                  <p className="text-brand-teal-400 mb-3">{member.position}</p>
                  <p className="text-gray-300">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative bg-gradient-to-r from-purple-900/50 to-teal-900/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 brand-gradient-text">Join Our Journey</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Be part of our mission to transform spaces with sustainable natural lighting and ventilation solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-brand-gradient hover:opacity-90 text-white rounded-full px-8">
              View Our Innovations
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-brand-purple-500 text-brand-purple-500 hover:bg-purple-500/10 rounded-full px-8"
            >
              Join Our Team
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
