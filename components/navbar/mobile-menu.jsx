"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { X, Phone } from "lucide-react"
import { HoverButton } from "@/components/ui/hover-button"

export default function MobileMenu({ isOpen, onClose }) {
  const mobileNavLinks = [
    { name: "Home", href: "/" },
    {
      name: "About Us",
      href: "/about",
      dropdown: [
        { name: "Our Story", href: "/about#story" },
        { name: "Vision & Mission", href: "/about#vision" },
        { name: "Team", href: "/about#team" },
      ],
    },
    {
      name: "Innovations",
      href: "/innovations",
      dropdown: [
        { name: "NANOSUN", href: "/innovations/nanosun" },
        { name: "NANOVENT", href: "/innovations/nanovent" },
        { name: "Research & Development", href: "/innovations/research" },
      ],
    },
    {
      name: "Projects",
      href: "/projects",
      dropdown: [
        { name: "Industrial", href: "/projects/industrial" },
        { name: "Commercial", href: "/projects/commercial" },
        { name: "Institutional", href: "/projects/institutional" },
      ],
    },
    { name: "Awards", href: "/awards" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/95 z-50 lg:hidden overflow-y-auto"
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-between mb-8">
              <Link href="/" className="flex items-center">
                <div className="relative h-12 w-12 mr-2">
                  <div className="absolute inset-0 rounded-full bg-[#d4af37]/20 blur-md"></div>
                  <div className="relative h-full w-full flex items-center justify-center">
                    <Image
                      src="/images/logo.png"
                      alt="Uday IKSA Logo"
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                </div>
                <span className="text-xl font-bold">
                  <span className="text-[#d4af37]">Uday</span>
                  <span className="text-[#d4af37]">IKSA</span>
                </span>
              </Link>

              <button className="text-white" onClick={onClose}>
                <X className="h-6 w-6" />
              </button>
            </div>

            <nav className="space-y-6">
              {mobileNavLinks.map((link) => (
                <div key={link.name} className="border-b border-gray-800 pb-4">
                  {link.dropdown ? (
                    <div className="space-y-4">
                      <div className="text-xl font-medium text-white mb-2">{link.name}</div>
                      <div className="pl-4 space-y-3">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="block text-gray-400 hover:text-white transition-colors"
                            onClick={onClose}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link href={link.href} className="block text-xl font-medium text-white" onClick={onClose}>
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            <div className="mt-8">
              <HoverButton className="w-full text-white py-6">
                <Phone className="mr-2 h-5 w-5" /> Contact Us
              </HoverButton>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
