"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
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
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-black/80 backdrop-blur-md py-2" : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <div className="relative h-12 w-12 mr-2">
                <div
                  className={`absolute inset-0 rounded-full ${isScrolled ? "bg-purple-600/20" : "bg-purple-600/10"} blur-md transition-all duration-300`}
                ></div>
                <div className="relative h-full w-full flex items-center justify-center">
                  {/* Placeholder for logo - replace with actual logo */}
                  <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-teal-400">
                    UI
                  </div>
                </div>
              </div>
              <span className="text-xl font-bold">
                <span className="text-purple-500">Uday</span>
                <span className="text-teal-500">IKSA</span>
              </span>
            </Link>

            <nav className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <DropdownMenu key={link.name}>
                    <DropdownMenuTrigger asChild>
                      <button className="px-4 py-2 text-gray-300 hover:text-white transition-colors flex items-center">
                        {link.name} <ChevronDown className="ml-1 h-4 w-4" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-black/90 backdrop-blur-md border-purple-900/50">
                      {link.dropdown.map((item) => (
                        <DropdownMenuItem key={item.name} asChild>
                          <Link href={item.href} className="cursor-pointer hover:bg-purple-900/20">
                            {item.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="px-4 py-2 text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                ),
              )}
            </nav>

            <div className="hidden lg:flex items-center">
              <Button className="bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600 text-white rounded-full">
                <Phone className="mr-2 h-4 w-4" /> Contact Us
              </Button>
            </div>

            <button className="lg:hidden text-white" onClick={() => setIsMobileMenuOpen(true)}>
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
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
                    <div className="absolute inset-0 rounded-full bg-purple-600/20 blur-md"></div>
                    <div className="relative h-full w-full flex items-center justify-center">
                      <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-teal-400">
                        UI
                      </div>
                    </div>
                  </div>
                  <span className="text-xl font-bold">
                    <span className="text-purple-500">Uday</span>
                    <span className="text-teal-500">IKSA</span>
                  </span>
                </Link>

                <button className="text-white" onClick={() => setIsMobileMenuOpen(false)}>
                  <X className="h-6 w-6" />
                </button>
              </div>

              <nav className="space-y-6">
                {navLinks.map((link) => (
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
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        className="block text-xl font-medium text-white"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>

              <div className="mt-8">
                <Button className="w-full bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600 text-white rounded-full py-6">
                  <Phone className="mr-2 h-5 w-5" /> Contact Us
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
