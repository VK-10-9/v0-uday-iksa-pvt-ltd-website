"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, Search, Bell } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import DesktopNav from "@/components/navbar/desktop-nav"
import MobileMenu from "@/components/navbar/mobile-menu"
import SearchModal from "@/components/navbar/search-modal"
import NotificationPanel from "@/components/navbar/notification-panel"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isNotificationOpen, setIsNotificationOpen] = useState(false)
  const [active, setActive] = useState(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "py-2 backdrop-blur-xl bg-black/80 border-b border-white/10" : "py-4 bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Enhanced Logo */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/" className="flex items-center z-60 relative group">
                <div className="relative h-12 w-12 mr-3">
                  <motion.div
                    className={`absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/30 to-pink-500/30 blur-md transition-all duration-300 group-hover:from-purple-500/50 group-hover:to-pink-500/50`}
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                  />
                  <div className="relative h-full w-full flex items-center justify-center">
                    <Image
                      src="/images/logo.png"
                      alt="Uday IKSA Logo"
                      width={48}
                      height={48}
                      className="object-contain filter drop-shadow-lg"
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    UdayIKSA
                  </span>
                  <span className="text-xs text-gray-400 -mt-1">Innovation & Excellence</span>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <DesktopNav active={active} setActive={setActive} />

            {/* Action Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Search Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsSearchOpen(true)}
                className="p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
              >
                <Search className="h-4 w-4" />
              </motion.button>

              {/* Notification Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsNotificationOpen(!isNotificationOpen)}
                className="relative p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
              >
                <Bell className="h-4 w-4" />
                <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full animate-pulse" />
              </motion.button>

              {/* CTA Button */}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
                >
                  Get Started
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden text-white z-60 relative p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
              onClick={() => setIsMobileMenuOpen(true)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Menu className="h-6 w-6" />
            </motion.button>
          </div>
        </div>

        {/* Progress Bar */}
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"
          style={{
            width: `${Math.min(((window?.scrollY || 0) / (document?.documentElement?.scrollHeight - window?.innerHeight || 1)) * 100, 100)}%`,
          }}
          transition={{ duration: 0.1 }}
        />
      </motion.header>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />

      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      {/* Notification Panel */}
      <NotificationPanel isOpen={isNotificationOpen} onClose={() => setIsNotificationOpen(false)} />
    </>
  )
}
