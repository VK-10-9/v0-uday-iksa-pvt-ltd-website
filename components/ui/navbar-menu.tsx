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
    <div onMouseEnter={() => setActive(item)} className="relative">
      <motion.p transition={{ duration: 0.3 }} className="cursor-pointer text-gray-300 hover:text-white font-medium">
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active"
                className="bg-black/90 backdrop-blur-md rounded-2xl overflow-hidden border border-purple-900/50 shadow-xl glow-border"
              >
                <motion.div layout className="w-max h-full p-4">
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
      className="relative rounded-full border border-purple-900/30 bg-black/80 backdrop-blur-md shadow-xl flex justify-center space-x-8 px-8 py-4 glow-border"
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
    <Link href={href} className="flex space-x-3 group">
      <Image
        src={src || "/placeholder.svg"}
        width={120}
        height={80}
        alt={title}
        className="flex-shrink-0 rounded-lg shadow-lg group-hover:shadow-purple-500/20 transition-shadow duration-300"
      />
      <div>
        <h4 className="text-lg font-bold mb-2 gradient-text group-hover:text-white transition-colors">{title}</h4>
        <p className="text-gray-300 text-sm max-w-[12rem] group-hover:text-gray-200 transition-colors">{description}</p>
      </div>
    </Link>
  )
}

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <Link
      {...rest}
      className="text-gray-300 hover:text-white hover:gradient-text transition-colors duration-200 block py-1"
    >
      {children}
    </Link>
  )
}
