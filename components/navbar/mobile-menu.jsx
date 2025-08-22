"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { X, Phone, ChevronRight, Home, Info, Lightbulb, Briefcase, Award, Mail } from "lucide-react"
import { HoverButton } from "@/components/ui/hover-button"

const menuVariants = {
  closed: {
    x: "100%",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
  open: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
}

const itemVariants = {
  closed: { x: 50, opacity: 0 },
  open: (i) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: i * 0.1,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  }),
}

export default function MobileMenu({ isOpen, onClose }) {
  const mobileNavLinks = [
    {
      name: "Home",
      href: "/",
      icon: <Home className="h-5 w-5" />,
      color: "text-purple-400",
    },
    {
      name: "About Us",
      href: "/about",
      icon: <Info className="h-5 w-5" />,
      color: "text-blue-400",
      dropdown: [
        { name: "Our Story", href: "/about#story" },
        { name: "Vision & Mission", href: "/about#vision" },
        { name: "Team", href: "/about#team" },
      ],
    },
    {
      name: "Innovations",
      href: "/innovations",
      icon: <Lightbulb className="h-5 w-5" />,
      color: "text-yellow-400",
      dropdown: [
        { name: "NANOSUN", href: "/innovations/nanosun" },
        { name: "NANOVENT", href: "/innovations/nanovent" },
        { name: "Research & Development", href: "/innovations/research" },
      ],
    },
    {
      name: "Projects",
      href: "/projects",
      icon: <Briefcase className="h-5 w-5" />,
      color: "text-green-400",
      dropdown: [
        { name: "Industrial", href: "/projects/industrial" },
        { name: "Commercial", href: "/projects/commercial" },
        { name: "Institutional", href: "/projects/institutional" },
      ],
    },
    {
      name: "Awards",
      href: "/awards",
      icon: <Award className="h-5 w-5" />,
      color: "text-orange-400",
    },
    {
      name: "Contact",
      href: "/contact",
      icon: <Mail className="h-5 w-5" />,
      color: "text-pink-400",
    },
  ]

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Menu Panel */}
          <motion.div
            className="fixed top-0 right-0 h-full w-80 bg-black/95 backdrop-blur-xl border-l border-white/20 z-50 lg:hidden overflow-y-auto"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="p-6">
              {/* Header */}
              <motion.div
                className="flex items-center justify-between mb-8"
                custom={0}
                variants={itemVariants}
                initial="closed"
                animate="open"
              >
                <Link href="/" className="flex items-center" onClick={onClose}>
                  <div className="relative h-10 w-10 mr-3">
                    <div className="absolute inset-0 rounded-full bg-purple-500/20 blur-md"></div>
                    <div className="relative h-full w-full flex items-center justify-center">
                      <Image
                        src="/images/logo.png"
                        alt="Uday IKSA Logo"
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      UdayIKSA
                    </span>
                    <span className="text-xs text-gray-400 -mt-1">Innovation & Excellence</span>
                  </div>
                </Link>

                <motion.button
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                  onClick={onClose}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="h-6 w-6 text-white" />
                </motion.button>
              </motion.div>

              {/* Navigation Links */}
              <nav className="space-y-2">
                {mobileNavLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    custom={index + 1}
                    variants={itemVariants}
                    initial="closed"
                    animate="open"
                  >
                    {link.dropdown ? (
                      <div className="space-y-3">
                        <div className="flex items-center p-4 rounded-xl bg-white/5 border border-white/10">
                          <div className={`${link.color} mr-3`}>{link.icon}</div>
                          <span className="text-lg font-medium text-white">{link.name}</span>
                        </div>
                        <div className="pl-6 space-y-2">
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="flex items-center justify-between p-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300 group"
                              onClick={onClose}
                            >
                              <span>{item.name}</span>
                              <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                        onClick={onClose}
                      >
                        <div className="flex items-center">
                          <div className={`${link.color} mr-3`}>{link.icon}</div>
                          <span className="text-lg font-medium text-white">{link.name}</span>
                        </div>
                        <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
                      </Link>
                    )}
                  </motion.div>
                ))}
              </nav>

              {/* CTA Button */}
              <motion.div
                className="mt-8"
                custom={mobileNavLinks.length + 1}
                variants={itemVariants}
                initial="closed"
                animate="open"
              >
                <HoverButton className="w-full text-white py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                  <Phone className="mr-2 h-5 w-5" /> Get Started Today
                </HoverButton>
              </motion.div>

              {/* Footer Info */}
              <motion.div
                className="mt-8 pt-6 border-t border-white/10"
                custom={mobileNavLinks.length + 2}
                variants={itemVariants}
                initial="closed"
                animate="open"
              >
                <div className="text-center space-y-2">
                  <p className="text-sm text-gray-400">Ready to innovate?</p>
                  <p className="text-xs text-gray-500">Contact us for sustainable solutions</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
