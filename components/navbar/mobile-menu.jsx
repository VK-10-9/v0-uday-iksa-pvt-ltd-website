"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { X, Phone, ChevronRight, Home, Info, Lightbulb, Briefcase, Award, Mail, Zap } from "lucide-react"
import { HoverButton } from "@/components/ui/hover-button"
import { products } from "@/lib/data/products"

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
      color: "text-brand-orange-500",
    },
    {
      name: "About Us",
      href: "/about",
      icon: <Info className="h-5 w-5" />,
      color: "text-brand-amber-500",
    },
    {
      name: "Products",
      href: "/products",
      icon: <Lightbulb className="h-5 w-5" />,
      color: "text-brand-orange-400",
    },
    {
      name: "Portfolio",
      href: "/projects",
      icon: <Briefcase className="h-5 w-5" />,
      color: "text-brand-red-500",
    },
    {
      name: "Awards",
      href: "/awards",
      icon: <Award className="h-5 w-5" />,
      color: "text-brand-yellow-500",
    },
    {
      name: "Contact",
      href: "/contact",
      icon: <Mail className="h-5 w-5" />,
      color: "text-brand-orange-500",
    },
  ]

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-[100] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Menu Panel */}
          <motion.div
            className="fixed top-0 right-0 h-full w-full sm:w-96 bg-slate-900 z-[101] lg:hidden overflow-y-auto border-l border-white/5 shadow-2xl"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="p-8 h-full flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between mb-12">
                <Link href="/" className="flex items-center" onClick={onClose}>
                  <div className="relative h-10 w-10 mr-4">
                    <div className="absolute inset-0 rounded-xl bg-brand-orange-500/20 blur-lg animate-pulse" />
                    <div className="relative h-full w-full flex items-center justify-center bg-slate-800 border border-white/10 rounded-xl p-2">
                      <Image
                        src="/images/logo.png"
                        alt="Uday IKSA"
                        width={24}
                        height={24}
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-xl font-black text-white uppercase tracking-tighter leading-none">UDAY <span className="brand-gradient-text">IKSA</span></p>
                    <p className="text-[7px] font-black text-gray-500 uppercase tracking-[0.4em] mt-1">Sustainability Tech</p>
                  </div>
                </Link>

                <motion.button
                  className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-2xl text-white"
                  onClick={onClose}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="h-6 w-6" />
                </motion.button>
              </div>

              {/* Navigation Links */}
              <nav className="space-y-4 flex-1">
                {mobileNavLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    custom={index + 1}
                    variants={itemVariants}
                    initial="closed"
                    animate="open"
                  >
                    <Link
                      href={link.href}
                      className="flex items-center justify-between p-6 rounded-[32px] bg-white/[0.03] border border-white/5 hover:bg-white/[0.08] hover:border-white/10 transition-all duration-300 group"
                      onClick={onClose}
                    >
                      <div className="flex items-center gap-6">
                        <div className={`${link.color} group-hover:scale-110 transition-transform`}>{link.icon}</div>
                        <span className="text-xl font-black text-white uppercase tracking-widest leading-none">{link.name}</span>
                      </div>
                      <ChevronRight className="h-5 w-5 text-gray-600 group-hover:text-brand-orange-500 group-hover:translate-x-1 transition-all" />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Bottom Actions */}
              <div className="mt-12 space-y-6 pt-10 border-t border-white/5">
                <motion.div
                  custom={mobileNavLinks.length + 1}
                  variants={itemVariants}
                  initial="closed"
                  animate="open"
                >
                  <Link href="/contact" onClick={onClose} className="block">
                    <HoverButton className="w-full py-6 bg-white text-black hover:bg-brand-orange-500 hover:text-white rounded-2xl text-sm font-black uppercase tracking-[0.2em] shadow-xl shadow-white/5 transition-all">
                      Consult Engineer
                    </HoverButton>
                  </Link>
                </motion.div>

                <motion.div
                  className="flex justify-center gap-8"
                  custom={mobileNavLinks.length + 2}
                  variants={itemVariants}
                  initial="closed"
                  animate="open"
                >
                  <div className="flex flex-col items-center">
                    <p className="text-[8px] font-black text-gray-600 uppercase tracking-widest mb-2 text-center">Direct Line</p>
                    <p className="text-white font-black text-sm uppercase">+91 8792182631</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
