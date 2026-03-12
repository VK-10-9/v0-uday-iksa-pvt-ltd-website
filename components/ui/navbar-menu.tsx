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
    <div onMouseEnter={() => setActive(item)} className="relative h-full flex items-center group/menu">
      <motion.div
        className="flex items-center"
      >
        <span
          className={`cursor-pointer text-gray-400 group-hover/menu:text-white text-xs font-black uppercase tracking-[0.2em] transition-all duration-300 relative py-2 ${
            active === item ? 'text-white' : ''
          }`}
        >
          {item}
          {active === item && (
             <motion.div 
               layoutId="underline"
               className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-orange-500 rounded-full"
               transition={{ type: "spring", stiffness: 380, damping: 30 }}
             />
          )}
        </span>
      </motion.div>
      
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active-content"
                className="bg-slate-900/90 backdrop-blur-3xl rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative"
              >
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-brand-orange-500/50 to-transparent" />
                <motion.div layout className="w-max h-full p-1.5">
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
      className="relative flex justify-center gap-x-10 h-10 items-center"
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
    <Link href={href} className="flex gap-5 group items-center p-3 rounded-2xl hover:bg-white/5 transition-all">
      <div className="relative w-32 h-20 rounded-xl overflow-hidden border border-white/5 shadow-xl transition-all duration-500 group-hover:scale-105 group-hover:border-brand-orange-500/30">
        <Image
          src={src || "/placeholder.svg"}
          fill
          alt={title}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <div className="max-w-[10rem]">
        <h4 className="text-[8px] font-black text-white group-hover:text-brand-orange-400 transition-colors uppercase tracking-wider leading-none mb-2">{title}</h4>
        <p className="text-gray-500 text-[7px] font-bold leading-relaxed group-hover:text-gray-400 transition-colors uppercase tracking-tighter">
          {description}
        </p>
      </div>
    </Link>
  )
}

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <Link
      {...rest}
      className="text-gray-400 hover:text-white transition-all duration-300 block py-2 px-3 rounded-lg hover:bg-white/5 font-black uppercase text-[7px] tracking-[0.15em]"
    >
      {children}
    </Link>
  )
}
