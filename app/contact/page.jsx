"use client"

import { motion } from "framer-motion"
import { ArrowRight, Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real application, you would send the form data to your server here
    // For demo purposes, we'll simulate a successful submission
    setFormStatus({
      submitted: true,
      success: true,
      message: "Thank you for your message! We'll get back to you shortly.",
    })
  }

  const officeLocations = [
    {
      city: "Hubli",
      address: "123 Innovation Park, Industrial Area, Hubli, Karnataka 580030",
      phone: "+91 8792182631",
      email: "hubli@udayiksa.com",
    },
    {
      city: "Bangalore",
      address: "456 Tech Square, Whitefield, Bangalore, Karnataka 560066",
      phone: "+91 8792182632",
      email: "bangalore@udayiksa.com",
    },
    {
      city: "Mumbai",
      address: "789 Sustainability Center, Andheri East, Mumbai, Maharashtra 400069",
      phone: "+91 8792182633",
      email: "mumbai@udayiksa.com",
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
            <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">Get In Touch</h1>
            <p className="text-xl text-gray-300 mb-8">
              Ready to transform your space with natural daylight and ventilation? Contact us today.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6">Send Us a Message</h2>
              <p className="text-gray-300 mb-8">
                Have questions about our products or services? Fill out the form below and our team will get back to you
                as soon as possible.
              </p>

              {formStatus.submitted ? (
                <div
                  className={`p-6 rounded-xl ${
                    formStatus.success
                      ? "bg-green-900/20 border border-green-500/30"
                      : "bg-red-900/20 border border-red-500/30"
                  }`}
                >
                  <h3 className="text-xl font-bold mb-2">
                    {formStatus.success ? "Message Sent!" : "Something went wrong"}
                  </h3>
                  <p className="text-gray-300">{formStatus.message}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-300">
                        Your Name <span className="text-purple-500">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                        placeholder="John Doe"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-300">
                        Email Address <span className="text-purple-500">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-gray-300">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                        placeholder="+91 98765 43210"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium text-gray-300">
                        Company Name
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                        placeholder="Your Company Ltd."
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-300">
                      Your Message <span className="text-purple-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                      placeholder="Tell us about your project or inquiry..."
                    ></textarea>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600 text-white py-3"
                  >
                    Send Message <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6">Contact Information</h2>
              <p className="text-gray-300 mb-8">
                Reach out to us directly through any of the following channels or visit one of our offices.
              </p>

              <div className="space-y-8">
                <div className="bg-black/30 backdrop-blur-sm p-6 rounded-2xl border border-purple-900/30 glow-border">
                  <h3 className="text-xl font-bold gradient-text mb-4">Head Office</h3>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-purple-500 mr-3 mt-1" />
                      <div>
                        <p className="font-medium text-white">Address</p>
                        <p className="text-gray-300">Uday IKSA Pvt Ltd, Hubli, Karnataka, India</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Phone className="h-5 w-5 text-purple-500 mr-3 mt-1" />
                      <div>
                        <p className="font-medium text-white">Phone</p>
                        <p className="text-gray-300">+91 8792182631</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Mail className="h-5 w-5 text-purple-500 mr-3 mt-1" />
                      <div>
                        <p className="font-medium text-white">Email</p>
                        <p className="text-gray-300">info@udayiksa.com</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-black/30 backdrop-blur-sm p-6 rounded-2xl border border-purple-900/30 glow-border">
                  <h3 className="text-xl font-bold gradient-text mb-4">Office Locations</h3>

                  <div className="space-y-6">
                    {officeLocations.map((office, index) => (
                      <div key={index} className="pb-4 border-b border-gray-800 last:border-0 last:pb-0">
                        <h4 className="font-bold text-teal-400 mb-2">{office.city} Office</h4>
                        <p className="text-gray-300 mb-2 flex items-start">
                          <MapPin className="h-4 w-4 text-purple-500 mr-2 mt-1 flex-shrink-0" />
                          <span>{office.address}</span>
                        </p>
                        <p className="text-gray-300 mb-2 flex items-center">
                          <Phone className="h-4 w-4 text-purple-500 mr-2" />
                          <span>{office.phone}</span>
                        </p>
                        <p className="text-gray-300 flex items-center">
                          <Mail className="h-4 w-4 text-purple-500 mr-2" />
                          <span>{office.email}</span>
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 relative bg-black/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-text">Find Us</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Visit our headquarters or one of our regional offices across India.
            </p>
          </div>

          <div className="relative h-[500px] rounded-2xl overflow-hidden border border-purple-900/30 glow-border">
            {/* This would be replaced with an actual map in a real implementation */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-teal-900/20"></div>
            <div className="absolute inset-0 grid-pattern opacity-30"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-gray-400 text-center">
                Interactive map would be displayed here in a real implementation
                <br />
                Showing Uday IKSA office locations across India
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-text">Quick Contact</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Need immediate assistance? Reach out through one of these channels.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              className="bg-black/30 backdrop-blur-sm p-8 rounded-2xl border border-purple-900/30 glow-border text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -10, boxShadow: "0 0 20px rgba(138, 43, 226, 0.4)" }}
            >
              <div className="bg-gradient-to-br from-purple-600 to-teal-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Call Us</h3>
              <p className="text-gray-300 mb-6">
                Speak directly with our customer support team for immediate assistance with your inquiries.
              </p>
              <a
                href="tel:+918792182631"
                className="text-purple-400 hover:text-purple-300 inline-flex items-center font-medium"
              >
                +91 8792182631 <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </motion.div>

            <motion.div
              className="bg-black/30 backdrop-blur-sm p-8 rounded-2xl border border-purple-900/30 glow-border text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -10, boxShadow: "0 0 20px rgba(138, 43, 226, 0.4)" }}
            >
              <div className="bg-gradient-to-br from-purple-600 to-teal-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Email Us</h3>
              <p className="text-gray-300 mb-6">
                Send us an email with your questions or project details, and we'll respond within 24 hours.
              </p>
              <a
                href="mailto:info@udayiksa.com"
                className="text-purple-400 hover:text-purple-300 inline-flex items-center font-medium"
              >
                info@udayiksa.com <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </motion.div>

            <motion.div
              className="bg-black/30 backdrop-blur-sm p-8 rounded-2xl border border-purple-900/30 glow-border text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ y: -10, boxShadow: "0 0 20px rgba(138, 43, 226, 0.4)" }}
            >
              <div className="bg-gradient-to-br from-purple-600 to-teal-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Live Chat</h3>
              <p className="text-gray-300 mb-6">
                Chat with our support team in real-time during business hours for immediate assistance.
              </p>
              <button className="text-purple-400 hover:text-purple-300 inline-flex items-center font-medium">
                Start Chat <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative bg-gradient-to-r from-purple-900/50 to-teal-900/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 glow-text">Ready to Transform Your Space?</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Contact us today to discuss how our natural daylight and ventilation solutions can improve your building
            while reducing energy costs.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600 text-white rounded-full px-8"
          >
            Schedule a Consultation <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </main>
  )
}
