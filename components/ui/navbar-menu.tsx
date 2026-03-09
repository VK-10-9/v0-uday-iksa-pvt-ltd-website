"use client"
import type React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
}

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void
  active: string | null
  item: string
  children?: React.ReactNode
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative h-full flex items-center">
      <motion.p
        transition={{ duration: 0.3 }}
        className={`cursor-pointer text-gray-400 hover:text-brand-orange-400 text-xs font-black uppercase tracking-[0.2em] transition-all duration-300 ${active === item ? 'text-brand-orange-400 scale-105' : ''}`}
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.5rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active"
                className="bg-slate-900/95 backdrop-blur-2xl rounded-[40px] overflow-hidden border border-white/10 shadow-2xl relative"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-orange-500/50 to-transparent" />
                <motion.div layout className="w-max h-full p-2">
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  )
}

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void
  children: React.ReactNode
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="relative flex justify-center gap-x-12 px-6 h-10 items-center"
    >
      {children}
    </nav>
  )
}

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string
  description: string
  href: string
  src: string
}) => {
  return (
    <Link href={href} className="flex gap-6 group items-center">
      <div className="relative w-40 h-28 rounded-2xl overflow-hidden border border-white/5 shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:border-brand-orange-500/50">
        <Image
          src={src || "/placeholder.svg"}
          fill
          alt={title}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <div className="max-w-[14rem]">
        <h4 className="text-lg font-black text-white group-hover:text-brand-orange-500 transition-colors uppercase tracking-tighter leading-none mb-3">{title}</h4>
        <p className="text-gray-500 text-xs font-medium leading-relaxed group-hover:text-gray-400 transition-colors">{description}</p>
      </div>
    </Link>
  )
}

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <Link
      {...rest}
      className="text-gray-400 hover:text-white transition-all duration-200 block py-1.5 font-bold uppercase text-[11px] tracking-widest"
    >
      {children}
    </Link>
  )
}
