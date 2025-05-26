"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Sun, Wind, Award, ArrowRight, Building2, Leaf, Globe, ChevronRight } from "lucide-react"

import HeroAnimation from "@/components/hero-animation"
import ProductCard from "@/components/product-card"
import { Button } from "@/components/ui/button"

export default function Home() {
  const timelineRef = useRef(null)

  useEffect(() => {
    // Create particles for the awards section
    const awardsSection = document.getElementById("awards")
    if (awardsSection) {
      for (let i = 0; i < 30; i++) {
        const particle = document.createElement("div")
        particle.classList.add("particle")
        particle.style.left = `${Math.random() * 100}%`
        particle.style.top = `${Math.random() * 100}%`
        particle.style.opacity = Math.random()
        particle.style.animation = `float ${3 + Math.random() * 7}s ease-in-out infinite`
        awardsSection.appendChild(particle)
      }
    }
  }, [])

  const products = [
    {
      id: 1,
      name: "NANOSUN Circular Daylight PEB Model",
      description:
        "Our flagship circular skylight designed specifically for PEB structures, providing maximum natural light with minimal heat transfer.",
      image: "/placeholder.svg?height=300&width=400",
      features: ["Energy efficient", "UV protected", "Weather resistant", "Easy installation"],
    },
    {
      id: 2,
      name: "Skytube Tubular Daylight",
      description:
        "Innovative tubular design that channels sunlight into interior spaces where traditional skylights cannot reach.",
      image: "/placeholder.svg?height=300&width=400",
      features: ["Flexible placement", "Minimal heat transfer", "Glare-free light", "Compact design"],
    },
    {
      id: 3,
      name: "NANOVENT Natural Suspensor",
      description:
        "Revolutionary ventilation system that harnesses natural air currents to create comfortable, well-ventilated spaces without electricity.",
      image: "/placeholder.svg?height=300&width=400",
      features: ["Zero energy consumption", "Reduces humidity", "Improves air quality", "Silent operation"],
    },
  ]

  const timelineEvents = [
    {
      year: "2008",
      title: "Company Founded",
      description: "Established with a vision to revolutionize natural lighting solutions.",
    },
    { year: "2013", title: "NANOSUN Launch", description: "Introduced our flagship natural daylighting system." },
    {
      year: "2016",
      title: "NANOVENT Development",
      description: "Expanded product line with innovative natural ventilation solutions.",
    },
    {
      year: "2022",
      title: "CII INNOVERGE Award",
      description: "Received national recognition for innovation in green solar lighting.",
    },
    {
      year: "2023",
      title: "Pan-India Expansion",
      description: "Extended operations to serve clients across the country.",
    },
  ]

  const projects = [
    { name: "Industrial Complex, Mumbai", type: "Industrial", location: [19.076, 72.8777] },
    { name: "Tech Park, Bangalore", type: "Commercial", location: [12.9716, 77.5946] },
    { name: "Educational Campus, Delhi", type: "Institutional", location: [28.7041, 77.1025] },
    { name: "Manufacturing Plant, Chennai", type: "Industrial", location: [13.0827, 80.2707] },
    { name: "Corporate Headquarters, Hyderabad", type: "Commercial", location: [17.385, 78.4867] },
  ]

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20 z-0"></div>
        <div className="light-beam absolute inset-0 z-0"></div>

        <div className="container mx-auto px-4 z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-4xl md:text-6xl font-bold gradient-text">
                Illuminating the Future with Sustainable Innovation
              </h1>
            </motion.div>

            <motion.p
              className="text-xl text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Harnessing natural resources to create energy-efficient environments that promote well-being and
              sustainability.
            </motion.p>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.6 }}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600 text-white rounded-full px-8"
              >
                Discover Our Technology <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>

          <motion.div
            className="lg:w-1/2 relative h-[400px] md:h-[500px]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <HeroAnimation />
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <motion.div
            className="animate-bounce"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <a href="#about" className="text-white/70 hover:text-white">
              <ChevronRight className="h-8 w-8 rotate-90" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-text">About Uday IKSA</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A leading manufacturer in natural daylight and ventilation engineering, serving India for over 15 years.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              className="bg-black/30 backdrop-blur-sm p-8 rounded-2xl border border-purple-900/30 glow-border"
              whileHover={{ y: -10, boxShadow: "0 0 20px rgba(138, 43, 226, 0.4)" }}
            >
              <div className="bg-gradient-to-br from-purple-600 to-teal-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Sun className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Vision</h3>
              <p className="text-gray-300">
                At Uday Iksa Pvt Ltd, our vision is to create a world where sustainable and healthy living is accessible
                to all. We strive to lead the way in natural daylight and ventilation engineering.
              </p>
            </motion.div>

            <motion.div
              className="bg-black/30 backdrop-blur-sm p-8 rounded-2xl border border-purple-900/30 glow-border"
              whileHover={{ y: -10, boxShadow: "0 0 20px rgba(138, 43, 226, 0.4)" }}
            >
              <div className="bg-gradient-to-br from-purple-600 to-teal-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Wind className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Mission</h3>
              <p className="text-gray-300">
                Our Mission is to continuously upgrade our products to match the super fast modernizing Roof sheet
                profiles and PEB Structures, developing fine engineered products that are technician friendly and
                aesthetic.
              </p>
            </motion.div>

            <motion.div
              className="bg-black/30 backdrop-blur-sm p-8 rounded-2xl border border-purple-900/30 glow-border"
              whileHover={{ y: -10, boxShadow: "0 0 20px rgba(138, 43, 226, 0.4)" }}
            >
              <div className="bg-gradient-to-br from-purple-600 to-teal-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Leaf className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Ethics</h3>
              <p className="text-gray-300">
                At UDAY IKSA, we are committed to upholding the highest standards of ethics in all aspects of our work,
                recognizing the profound impact our actions have on individuals, communities, and society.
              </p>
            </motion.div>
          </div>

          <div className="mt-20">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center gradient-text">Our Journey</h3>

            <div ref={timelineRef} className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-600 to-teal-500"></div>

              {timelineEvents.map((event, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center mb-12 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className={`md:w-1/2 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"}`}>
                    <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-purple-900/30 inline-block">
                      <h4 className="text-xl font-bold mb-2 gradient-text">{event.title}</h4>
                      <p className="text-gray-300">{event.description}</p>
                    </div>
                  </div>

                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-teal-500 flex items-center justify-center z-10">
                    <span className="text-white font-bold">{event.year}</span>
                  </div>

                  <div className="md:w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Innovations Section */}
      <section className="py-20 relative bg-black/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-text">Our Innovations</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge solutions that harness natural resources for sustainable environments.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-text">Global Projects</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our solutions are transforming spaces across India and beyond.
            </p>
          </div>

          <div className="relative h-[500px] rounded-2xl overflow-hidden border border-purple-900/30 glow-border">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-teal-900/20"></div>

            <div className="absolute inset-0 grid-pattern opacity-30"></div>

            <div className="absolute inset-0 flex items-center justify-center">
              <Globe className="h-64 w-64 text-purple-500/20" />
            </div>

            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="absolute w-4 h-4 rounded-full bg-gradient-to-r from-purple-600 to-teal-500 cursor-pointer"
                style={{
                  left: `${((project.location[1] + 180) / 360) * 100}%`,
                  top: `${((90 - project.location[0]) / 180) * 100}%`,
                }}
                whileHover={{ scale: 1.5 }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full mt-2 w-48 p-2 bg-black/80 backdrop-blur-sm rounded-lg opacity-0 hover:opacity-100 transition-opacity z-10 text-center">
                  <p className="font-bold text-sm">{project.name}</p>
                  <p className="text-xs text-gray-400">{project.type}</p>
                </div>
                <div className="animate-ping absolute inset-0 rounded-full bg-purple-500 opacity-75"></div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button variant="outline" className="border-purple-500 text-purple-500 hover:bg-purple-500/10">
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section id="awards" className="py-20 relative bg-black/50 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-text">Awards & Recognition</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our commitment to innovation has been recognized nationally.
            </p>
          </div>

          <motion.div
            className="bg-black/30 backdrop-blur-sm p-8 rounded-2xl border border-purple-900/30 glow-border max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3 flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-teal-500 rounded-full blur-xl opacity-50"></div>
                  <div className="relative bg-gradient-to-r from-purple-600 to-teal-500 w-32 h-32 rounded-full flex items-center justify-center">
                    <Award className="h-16 w-16 text-white" />
                  </div>
                </div>
              </div>

              <div className="md:w-2/3 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2 gradient-text">CII INNOVERGE 2022 National Award</h3>
                <p className="text-gray-300 mb-4">
                  Recognized by CII Yi – Apollo Innovation for our groundbreaking technology in green solar lighting and
                  natural ventilation.
                </p>
                <Link href="/awards" className="text-purple-400 hover:text-purple-300 inline-flex items-center">
                  Learn more about our achievements <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-text">Get In Touch</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to transform your space with natural daylight and ventilation? Contact us today.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-black/30 backdrop-blur-sm p-8 rounded-2xl border border-purple-900/30 glow-border">
              <form className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-300">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                    placeholder="Your name"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-300">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <Button className="w-full bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600 text-white">
                  Send Message
                </Button>
              </form>
            </div>

            <div className="bg-black/30 backdrop-blur-sm p-8 rounded-2xl border border-purple-900/30 glow-border">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-purple-600 to-teal-500 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Building2 className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Address</h4>
                    <p className="text-gray-300">Uday IKSA Pvt Ltd, Hubli, Karnataka, India</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-purple-600 to-teal-500 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Phone</h4>
                    <p className="text-gray-300">+91 8792182631</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-purple-600 to-teal-500 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Email</h4>
                    <p className="text-gray-300">info@udayiksa.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-bold mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="bg-gray-800 hover:bg-gray-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                  >
                    <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="bg-gray-800 hover:bg-gray-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                  >
                    <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="bg-gray-800 hover:bg-gray-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                  >
                    <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="bg-gray-800 hover:bg-gray-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                  >
                    <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative bg-gradient-to-r from-purple-900/50 to-teal-900/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 glow-text">Ready to Transform Your Space?</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Experience the power of natural daylight and ventilation with our innovative solutions.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600 text-white rounded-full px-8"
          >
            Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </main>
  )
}
