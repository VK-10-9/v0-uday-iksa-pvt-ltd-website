"use client"


import Link from "next/link"
import { navItems } from "@/components/navbar/nav-items"

export default function DesktopNav() {
  return (
    <div className="hidden lg:flex items-center justify-center flex-1" role="menubar" aria-label="Desktop navigation">
      <nav className="flex gap-4 items-center bg-black/30 rounded-full px-6 py-2 shadow-lg">
        {navItems.map(({ label, href, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className="flex items-center gap-2 px-4 py-2 rounded-full text-gray-200 hover:text-white hover:bg-purple-700/20 font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
            tabIndex={0}
            aria-label={label}
          >
            <Icon className="h-5 w-5" /> {label}
          </Link>
        ))}
      </nav>
    </div>
  )
}