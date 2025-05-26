"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import Image from "next/image"
import DesktopNav from "@/components/navbar/desktop-nav"
import MobileMenu from "@/components/navbar/mobile-menu"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [active, setActive] = useState(null)

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

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "py-2" : "py-4"}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center z-60 relative">
              <div className="relative h-12 w-12 mr-2">
                <div
                  className={`absolute inset-0 rounded-full ${
                    isScrolled ? "bg-brand-purple-500/20" : "bg-brand-purple-500/10"
                  } blur-md transition-all duration-300`}
                ></div>
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
                <span className="text-brand-gold-500">Uday</span>
                <span className="text-brand-gold-500">IKSA</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <DesktopNav active={active} setActive={setActive} />

            {/* Mobile Menu Button */}
            <button className="lg:hidden text-white z-60 relative" onClick={() => setIsMobileMenuOpen(true)}>
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  )
}
