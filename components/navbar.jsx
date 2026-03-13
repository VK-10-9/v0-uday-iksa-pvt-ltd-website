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
        className={`fixed top-4 left-0 right-0 z-[100] transition-all duration-700 pointer-events-none`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex items-center justify-between pointer-events-auto rounded-2xl sm:rounded-[24px] border border-white/10 transition-all duration-500 ${
            isScrolled 
              ? "py-2 sm:py-3 px-4 sm:px-8 bg-slate-950/80 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4)]" 
              : "py-3 sm:py-4 px-4 sm:px-8 bg-white/[0.03] backdrop-blur-md"
          }`}>
            {/* Logo Section */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center relative group">
                <div className="relative h-8 w-8 sm:h-10 sm:w-10 transition-all duration-500 group-hover:scale-105">
                  <Image
                    src="/images/logo.png"
                    alt="Uday IKSA Logo"
                    fill
                    priority
                    className="object-contain"
                  />
                </div>
                <div className="ml-3 sm:ml-4 flex flex-col">
                  <span className="text-sm sm:text-base font-black text-white uppercase tracking-tighter leading-none">
                    UDAY <span className="brand-gradient-text">IKSA</span>
                  </span>
                  <span className="text-[5px] sm:text-[6px] font-bold text-gray-500 uppercase tracking-[0.3em] mt-1">
                    Sustainability Engineering
                  </span>
                </div>
              </Link>
            </div>

            {/* Main Navigation */}
            <div className="hidden lg:flex items-center">
              <DesktopNav active={active} setActive={setActive} />
            </div>

            {/* CTA Section */}
            <div className="hidden lg:flex items-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, y: -1 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-brand-orange-500 text-white px-6 py-2.5 rounded-xl font-black text-[9px] uppercase tracking-widest transition-all duration-300 shadow-lg shadow-brand-orange-500/20"
                >
                  Consult Now
                </motion.button>
              </Link>
            </div>

            {/* Mobile Actions */}
            <div className="lg:hidden flex items-center">
               <motion.button
                className="text-white w-9 h-9 flex items-center justify-center rounded-xl bg-white/5 border border-white/10"
                onClick={() => setIsMobileMenuOpen(true)}
                whileTap={{ scale: 0.9 }}
              >
                <Menu className="h-4 w-4" />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  )
}
