"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion"
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled 
            ? "py-3 bg-slate-950/80 backdrop-blur-2xl border-b border-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.4)]" 
            : "py-6 bg-transparent"
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center relative group">
                <div className="relative h-12 w-12 md:h-14 md:w-14 transition-all duration-500 group-hover:scale-105">
                  <Image
                    src="/images/logo.png"
                    alt="Uday IKSA Logo"
                    fill
                    priority
                    className="object-contain scale-[1.6]"
                  />
                </div>
                <div className="ml-4 flex flex-col">
                  <span className="text-lg md:text-xl font-black text-white uppercase tracking-tighter leading-none">
                    UDAY <span className="brand-gradient-text">IKSA</span>
                  </span>
                  <span className="text-[6px] md:text-[7px] font-bold text-gray-500 uppercase tracking-[0.3em] mt-1">
                    Sustainability Engineering
                  </span>
                </div>
              </Link>
            </div>

            {/* Main Navigation - Integrated into the bar, no separate pill */}
            <div className="hidden lg:flex items-center">
              <DesktopNav active={active} setActive={setActive} />
            </div>

            {/* CTA Section */}
            <div className="hidden lg:flex items-center gap-6">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative group overflow-hidden bg-white text-black px-8 py-3 rounded-xl font-black text-[8px] uppercase tracking-widest transition-all duration-500 hover:text-white"
                >
                  <div className="absolute inset-0 bg-brand-orange-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                  <span className="relative z-10">Consult Now</span>
                </motion.button>
              </Link>
            </div>

            {/* Mobile Actions */}
            <div className="lg:hidden flex items-center gap-4">
               <motion.button
                className="text-white w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10"
                onClick={() => setIsMobileMenuOpen(true)}
                whileTap={{ scale: 0.9 }}
              >
                <Menu className="h-5 w-5" />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Improved Scroll Progress */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-brand-orange-500 via-brand-amber-500 to-brand-orange-500 origin-left z-50 opacity-50"
          style={{ scaleX }}
        />
      </motion.header>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  )
}
