"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { X, Phone, ChevronRight, ChevronDown, Home, Info, Lightbulb, Briefcase, Award, Mail, Zap, HelpCircle, Factory, Building, Star, ExternalLink, Sun, Wind, Sparkles } from "lucide-react"
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
      delay: i * 0.05,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  }),
}

const subItemVariants = {
  closed: { height: 0, opacity: 0, marginTop: 0 },
  open: {
    height: "auto",
    opacity: 1,
    marginTop: 16,
    transition: {
      duration: 0.3,
      ease: "circOut"
    }
  },
}

import { useState } from "react"

export default function MobileMenu({ isOpen, onClose }) {
  const [expandedItem, setExpandedItem] = useState(null)

  const toggleExpand = (name) => {
    setExpandedItem(expandedItem === name ? null : name)
  }

  const projectCategories = [
    { name: "Industrial", href: "/projects", icon: <Factory className="h-4 w-4" /> },
    { name: "Commercial", href: "/projects", icon: <Building className="h-4 w-4" /> },
    { name: "Institutional", href: "/projects", icon: <Award className="h-4 w-4" /> },
  ]

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
      subLinks: [
        { name: "Our Story", href: "/about" },
        { name: "Vision & Mission", href: "/about" },
        { name: "Engineering Leadership", href: "/about" },
      ]
    },
    {
      name: "Products",
      href: "/products",
      icon: <Sparkles className="h-5 w-5" />,
      color: "text-brand-orange-500",
      subLinks: [
        { name: "NANOSUN™ Series", href: "/products" },
        { name: "NANOVENT® Series", href: "/products" },
        { name: "SKYTUBE™ Series", href: "/products" },
        { name: "Architectural iWINDOW", href: "/products" },
      ]
    },
    {
      name: "Portfolio",
      href: "/projects",
      icon: <Briefcase className="h-5 w-5" />,
      color: "text-brand-red-500",
      subLinks: projectCategories.map(c => ({ name: c.name, href: c.href, icon: c.icon }))
    },
    {
      name: "Awards",
      href: "/awards",
      icon: <Award className="h-5 w-5" />,
      color: "text-brand-yellow-500",
    },
    {
      name: "FAQ",
      href: "/faq",
      icon: <HelpCircle className="h-5 w-5" />,
      color: "text-brand-orange-500",
      subLinks: [
        { name: "View All Questions", href: "/faq" },
      ]
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
            className="fixed top-0 right-0 h-full w-full sm:w-80 bg-slate-900 z-[101] lg:hidden overflow-y-auto border-l border-white/5 shadow-2xl"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="p-6 h-full flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <Link href="/" className="flex items-center" onClick={onClose}>
                  <div className="relative h-8 w-8 mr-3">
                    <div className="absolute inset-0 rounded-xl bg-brand-orange-500/20 blur-lg animate-pulse" />
                    <div className="relative h-full w-full flex items-center justify-center bg-slate-800 border border-white/10 rounded-xl p-1.5">
                      <Image
                        src="/images/logo.png"
                        alt="Uday IKSA"
                        width={20}
                        height={20}
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-lg font-black text-white uppercase tracking-tighter leading-none">UDAY <span className="brand-gradient-text">IKSA</span></p>
                    <p className="text-[6px] font-black text-gray-500 uppercase tracking-[0.4em] mt-1">Sustainability Tech</p>
                  </div>
                </Link>

                <motion.button
                  className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 rounded-xl text-white"
                  onClick={onClose}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="h-5 w-5" />
                </motion.button>
              </div>

              {/* Navigation Links */}
              <nav className="space-y-3 flex-1">
                {mobileNavLinks.map((link, index) => {
                  const isExpanded = expandedItem === link.name;
                  const hasSubLinks = link.subLinks && link.subLinks.length > 0;

                  return (
                    <motion.div
                      key={link.name}
                      custom={index + 1}
                      variants={itemVariants}
                      initial="closed"
                      animate="open"
                    >
                      <div className="flex flex-col">
                        <div
                          className={`flex items-center justify-between p-4 rounded-3xl transition-all duration-300 group
                            ${isExpanded ? 'bg-white/10 border-white/10' : 'bg-white/[0.03] border-white/5 hover:bg-white/[0.08] hover:border-white/10'}
                            border`}
                          onClick={() => hasSubLinks ? toggleExpand(link.name) : (onClose(), window.location.href = link.href)}
                        >
                          <div className="flex items-center gap-4">
                            <div className={`${link.color} ${isExpanded ? 'scale-110' : 'group-hover:scale-110'} transition-transform`}>{link.icon}</div>
                            <span className="text-base font-black text-white uppercase tracking-wider leading-none">{link.name}</span>
                          </div>
                          {hasSubLinks ? (
                            <ChevronDown className={`h-4 w-4 text-gray-600 transition-transform duration-300 ${isExpanded ? 'rotate-180 text-brand-orange-500' : ''}`} />
                          ) : (
                            <ChevronRight className="h-4 w-4 text-gray-600 group-hover:text-brand-orange-500 group-hover:translate-x-1 transition-all" />
                          )}
                        </div>

                        {/* Sub Links Accordion */}
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              variants={subItemVariants}
                              initial="closed"
                              animate="open"
                              exit="closed"
                              className="overflow-hidden bg-white/5 rounded-3xl mx-2 border border-white/5"
                            >
                              <div className="p-3 space-y-1">
                                {link.subLinks.map((sub, idx) => (
                                  <Link
                                    key={idx}
                                    href={sub.href}
                                    className="flex items-center gap-3 p-3 rounded-2xl hover:bg-white/5 text-gray-400 hover:text-white transition-all group/sub"
                                    onClick={onClose}
                                  >
                                    <div className="h-1 w-1 rounded-full bg-brand-orange-500/40 group-hover/sub:bg-brand-orange-500 group-hover/sub:scale-150 transition-all" />
                                    <span className="text-[11px] font-bold uppercase tracking-widest">{sub.name}</span>
                                    <ExternalLink className="h-3 w-3 ml-auto opacity-0 group-hover/sub:opacity-100 transition-opacity text-brand-orange-500" />
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  )
                })}
              </nav>

              {/* Bottom Actions */}
              <div className="mt-8 space-y-4 pt-6 border-t border-white/5">
                <motion.div
                  custom={mobileNavLinks.length + 1}
                  variants={itemVariants}
                  initial="closed"
                  animate="open"
                >
                  <Link href="/contact" onClick={onClose} className="block">
                    <HoverButton className="w-full py-5 bg-white text-black hover:bg-brand-orange-500 hover:text-white rounded-xl text-xs font-black uppercase tracking-[0.2em] shadow-xl shadow-white/5 transition-all">
                      Consult Engineer
                    </HoverButton>
                  </Link>
                </motion.div>

                <motion.div
                  className="flex justify-center gap-6"
                  custom={mobileNavLinks.length + 2}
                  variants={itemVariants}
                  initial="closed"
                  animate="open"
                >
                  <div className="flex flex-col items-center">
                    <p className="text-[7px] font-black text-gray-600 uppercase tracking-widest mb-1 text-center">Direct Line</p>
                    <p className="text-white font-black text-xs uppercase">+91 8792182631</p>
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
