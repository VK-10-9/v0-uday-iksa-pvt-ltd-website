"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sun, Wind, Lightbulb, BarChart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function InnovationsPage() {
  const innovations = [
    {
      id: "nanosun",
      name: "NANOSUN Daylight Systems",
      description:
        "Our flagship natural daylighting solution that maximizes sunlight while minimizing heat transfer, perfect for industrial and commercial buildings.",
      image: "/placeholder.svg?height=600&width=800",
      link: "/innovations/nanosun",
      icon: Sun,
    },
    {
      id: "nanovent",
      name: "NANOVENT Ventilation Systems",
      description:
        "Revolutionary ventilation technology that harnesses natural air currents to create comfortable, well-ventilated spaces without electricity.",
      image: "/placeholder.svg?height=600&width=800",
      link: "/innovations/nanovent",
      icon: Wind,
    },
    {
      id: "research",
      name: "Research & Development",
      description:
        "Our ongoing commitment to innovation through cutting-edge research in sustainable building technologies and materials.",
      image: "/placeholder.svg?height=600&width=800",
      link: "/innovations/research",
      icon: Lightbulb,
    },
  ]

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
            <h1 className="text-4xl md:text-6xl font-bold brand-gradient-text mb-6">Our Innovations</h1>
            <p className="text-xl text-gray-300 mb-8">
              Pioneering sustainable solutions that harness natural resources for better, healthier, and more
              energy-efficient environments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Innovations Overview */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold brand-gradient-text mb-6">Transforming Spaces Naturally</h2>
              <p className="text-gray-300 mb-4">
                At Uday IKSA, innovation is at the heart of everything we do. Our team of engineers and designers work
                tirelessly to develop solutions that maximize the use of natural resources while minimizing
                environmental impact.
              </p>
              <p className="text-gray-300 mb-4">
                From our patented NANOSUN daylighting systems to our groundbreaking NANOVENT natural ventilation
                technology, we're constantly pushing the boundaries of what's possible in sustainable building design.
              </p>
              <p className="text-gray-300 mb-6">
                Our innovations have been recognized nationally, including the prestigious CII INNOVERGE Award for
                excellence in green solar lighting and natural ventilation.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-brand-gradient flex items-center justify-center mr-3">
                    <Lightbulb className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold">10+</p>
                    <p className="text-sm text-gray-400">Patented Technologies</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-brand-gradient flex items-center justify-center mr-3">
                    <BarChart className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold">40%</p>
                    <p className="text-sm text-gray-400">Energy Savings</p>
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
                alt="Uday IKSA Innovation Lab"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          {/* Innovation Cards */}
          <div className="space-y-24">
            {innovations.map((innovation, index) => (
              <motion.div
                key={innovation.id}
                className="grid md:grid-cols-2 gap-12 items-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                {index % 2 === 0 ? (
                  <>
                    <div className="relative h-[400px] rounded-2xl overflow-hidden">
                      <div className="absolute inset-0 from-brand-purple-500/20 to-brand-teal-500/20 z-10 rounded-2xl bg-gradient-to-r"></div>
                      <Image
                        src={innovation.image || "/placeholder.svg"}
                        alt={innovation.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div>
                      <div className="bg-brand-gradient w-16 h-16 rounded-full flex items-center justify-center mb-6">
                        <innovation.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold brand-gradient-text mb-4">{innovation.name}</h3>
                      <p className="text-gray-300 mb-6">{innovation.description}</p>
                      <Link href={innovation.link}>
                        <Button className="bg-brand-gradient hover:opacity-90 text-white">
                          Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <div className="bg-brand-gradient w-16 h-16 rounded-full flex items-center justify-center mb-6">
                        <innovation.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold brand-gradient-text mb-4">{innovation.name}</h3>
                      <p className="text-gray-300 mb-6">{innovation.description}</p>
                      <Link href={innovation.link}>
                        <Button className="bg-brand-gradient hover:opacity-90 text-white">
                          Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>

                    <div className="relative h-[400px] rounded-2xl overflow-hidden">
                      <div className="absolute inset-0 from-brand-purple-500/20 to-brand-teal-500/20 z-10 rounded-2xl bg-gradient-to-r"></div>
                      <Image
                        src={innovation.image || "/placeholder.svg"}
                        alt={innovation.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative bg-gradient-to-r from-purple-900/50 to-teal-900/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold brand-gradient-text mb-6">Ready to Transform Your Space?</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Discover how our innovative solutions can bring natural light and fresh air to your building while reducing
            energy costs.
          </p>
          <Button size="lg" className="bg-brand-gradient hover:opacity-90 text-white rounded-full px-8">
            Contact Us Today <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </main>
  )
}
