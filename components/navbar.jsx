"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, Search, Bell } from "lucide-react"
import Image from "next/image"
import { motion, useScroll, useSpring } from "framer-motion"
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

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "py-4 backdrop-blur-2xl bg-slate-950/80 border-b border-white/5 shadow-2xl" : "py-8 bg-transparent"
          }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between">
            {/* Enhanced Logo */}
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link href="/" className="flex items-center z-60 relative group">
                <div className="relative h-12 w-12 mr-4">
                  <motion.div
                    className={`absolute inset-0 rounded-2xl bg-brand-orange-500/20 blur-xl transition-all duration-500 group-hover:bg-brand-orange-500/40`}
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 90, 180, 270, 360],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  <div className="relative h-full w-full flex items-center justify-center bg-slate-900 border border-white/10 rounded-2xl p-2 group-hover:border-brand-orange-500/50 transition-colors">
                    <Image
                      src="/images/logo.png"
                      alt="Uday IKSA Logo"
                      width={32}
                      height={32}
                      priority
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-black text-white uppercase tracking-tighter leading-none">
                    Uday <span className="brand-gradient-text">IKSA</span>
                  </span>
                  <span className="text-[8px] text-gray-500 font-black uppercase tracking-[0.4em] mt-1">Sustainability Engineering</span>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:block bg-white/5 border border-white/10 rounded-full px-8 py-2.5 backdrop-blur-md">
              <DesktopNav active={active} setActive={setActive} />
            </div>

            {/* Action Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.15)" }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsSearchOpen(true)}
                className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-white transition-all duration-300"
              >
                <Search className="h-5 w-5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.15)" }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsNotificationOpen(!isNotificationOpen)}
                className="relative w-12 h-12 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-white transition-all duration-300"
              >
                <Bell className="h-5 w-5" />
                <span className="absolute top-3 right-3 h-2 w-2 bg-brand-orange-500 rounded-full animate-pulse shadow-lg shadow-brand-orange-500/50" />
              </motion.button>

              <Link href="/contact" className="block">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-white text-black hover:bg-brand-orange-500 hover:text-white rounded-2xl font-black uppercase tracking-widest text-xs transition-all duration-300 shadow-xl shadow-white/5"
                >
                  Consult Now
                </motion.button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden text-white z-60 relative w-12 h-12 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md"
              onClick={() => setIsMobileMenuOpen(true)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Menu className="h-6 w-6" />
            </motion.button>
          </div>
        </div>

        {/* High-End Scroll Progress Bar */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-orange-500 origin-left z-50"
          style={{ scaleX }}
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
