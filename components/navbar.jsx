"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import Image from "next/image"
import { motion, useScroll, useSpring } from "framer-motion"
import DesktopNav from "@/components/navbar/desktop-nav"
import MobileMenu from "@/components/navbar/mobile-menu"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
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
                <div className="relative h-24 w-24 mr-6 flex-shrink-0">
                  <motion.div
                    className="absolute inset-0 rounded-full bg-brand-orange-500/30 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                  <div className="relative h-full w-full flex items-center justify-center transition-all">
                    <Image
                      src="/images/logo.png"
                      alt="Uday IKSA Logo"
                      width={140}
                      height={140}
                      priority
                      className="w-full h-full object-contain scale-[1.8] transform transition-transform duration-500 group-hover:scale-[1.9]"
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-[12px] text-gray-400 font-black uppercase tracking-[0.5em] mt-1 group-hover:text-white transition-colors">Sustainability Engineering</span>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:block bg-white/5 border border-white/10 rounded-full px-8 py-2.5 backdrop-blur-md">
              <DesktopNav active={active} setActive={setActive} />
            </div>

            {/* Action Buttons */}
            <div className="hidden lg:flex items-center space-x-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="px-10 py-3.5 bg-white text-black hover:bg-brand-orange-500 hover:text-white rounded-2xl font-black uppercase tracking-widest text-xs transition-all duration-300 shadow-xl shadow-white/5 inline-block"
                >
                  Consult Now
                </Link>
              </motion.div>
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
    </>
  )
}
