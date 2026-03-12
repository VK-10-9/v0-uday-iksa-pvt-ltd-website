"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { useState } from "react"
import Image from "next/image"
import { X, Phone, ChevronRight, ChevronDown, Home, Info, Lightbulb, Briefcase, Award, Mail, Zap, HelpCircle, Factory, Building, Star, ExternalLink, Sun, Wind, Sparkles, Camera } from "lucide-react"
import { HoverButton } from "@/components/ui/hover-button"

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
        { name: "Skylight Series (NANOSUN™)", href: "/products", isHeader: true },
        { name: "Skylight for Metal Roofs", href: "/products/nanosun" },
        { name: "Skylight for Concrete Roofs", href: "/products/nanosun-rcc" },
        { name: "Skylight for Tile Roofs", href: "/products/nanosun-tiles" },
        { name: "Openable Premium Skylight", href: "/products/skylight" },
        
        { name: "Ventilation Series (NANOVENT®)", href: "/products", isHeader: true },
        { name: "Natural Roof Ventilator", href: "/products/nanovent" },
        
        { name: "Tubular Light (SKYTUBE™)", href: "/products", isHeader: true },
        { name: "Standard Tubular", href: "/products/skytube" },
        { name: "Angled / Bend Configurations", href: "/products/skytube-angled" },
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
      name: "Gallery",
      href: "/gallery",
      icon: <Camera className="h-5 w-5" />,
      color: "text-brand-orange-500",
    },
    {
      name: "FAQ",
      href: "/faq",
      icon: <HelpCircle className="h-5 w-5" />,
      color: "text-brand-orange-500",
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
          <motion.div
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-[100] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            className="fixed top-0 right-0 h-full w-full sm:w-80 bg-slate-900 z-[101] lg:hidden overflow-y-auto border-l border-white/5 shadow-2xl"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="p-6 h-full flex flex-col">
              <div className="flex items-center justify-between mb-8">
                <Link href="/" className="flex items-center" onClick={onClose}>
                   <div className="relative h-10 w-10 mr-3">
                    <Image
                      src="/images/logo.png"
                      alt="Uday IKSA"
                      fill
                      className="object-contain scale-[1.3]"
                    />
                  </div>
                  <div>
                    <p className="text-lg font-black text-white uppercase tracking-tighter leading-none">UDAY <span className="brand-gradient-text">IKSA</span></p>
                  </div>
                </Link>

                <motion.button
                  className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 rounded-xl text-white"
                  onClick={onClose}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="h-5 w-5" />
                </motion.button>
              </div>

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
                          className={`flex items-center justify-between p-4 rounded-3xl transition-all duration-300
                            ${isExpanded ? 'bg-white/10 border-white/10' : 'bg-white/[0.03] border-white/5'}
                            border`}
                          onClick={() => hasSubLinks ? toggleExpand(link.name) : (onClose(), window.location.href = link.href)}
                        >
                          <div className="flex items-center gap-4">
                            <div className={`${link.color} transition-transform`}>{link.icon}</div>
                            <span className="text-base font-black text-white uppercase tracking-wider leading-none">{link.name}</span>
                          </div>
                          {hasSubLinks ? (
                            <ChevronDown className={`h-4 w-4 text-gray-600 transition-transform duration-300 ${isExpanded ? 'rotate-180 text-brand-orange-500' : ''}`} />
                          ) : (
                            <ChevronRight className="h-4 w-4 text-gray-600" />
                          )}
                        </div>

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
                                    className={`flex items-center gap-3 p-3 rounded-2xl transition-all ${
                                      sub.isHeader 
                                        ? 'text-brand-orange-500 font-black text-[7px] uppercase tracking-widest pointer-events-none mt-2 first:mt-0 opacity-80' 
                                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                                    }`}
                                    onClick={sub.isHeader ? (e) => e.preventDefault() : onClose}
                                  >
                                    {!sub.isHeader && <div className="h-1 w-1 rounded-full bg-brand-orange-500/40" />}
                                    <span className={sub.isHeader ? "" : "text-[8px] font-bold uppercase tracking-widest"}>{sub.name}</span>
                                    {!sub.isHeader && <ExternalLink className="h-3 w-3 ml-auto opacity-40 text-brand-orange-500" />}
                                  </Link>
                                ) )}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  )
                })}
              </nav>

              <div className="mt-8 space-y-4 pt-6 border-t border-white/5">
                <Link href="/contact" onClick={onClose} className="block">
                  <HoverButton className="w-full py-5 bg-white text-black hover:bg-brand-orange-500 hover:text-white rounded-xl text-xs font-black uppercase tracking-[0.2em] shadow-xl shadow-white/5 transition-all">
                    Consult Engineer
                  </HoverButton>
                </Link>
                <div className="flex justify-center flex-col items-center">
                    <p className="text-[5px] font-black text-gray-600 uppercase tracking-widest mb-1 text-center">Direct Line</p>
                    <p className="text-white font-black text-[9px] uppercase tracking-tighter self-center">+91 8792182631</p>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
