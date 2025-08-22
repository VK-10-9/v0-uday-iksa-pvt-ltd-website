"use client"

import Link from "next/link"
import { Home, Info, Lightbulb, Building2, Award, Phone } from "lucide-react"

const navItems = [
  { label: "Home", href: "/", icon: Home },
  { label: "About Us", href: "/about", icon: Info },
  { label: "Innovations", href: "/innovations", icon: Lightbulb },
  { label: "Projects", href: "/projects", icon: Building2 },
  { label: "Awards", href: "/awards", icon: Award },
  { label: "Contact", href: "/contact", icon: Phone },
]

export default function DesktopNav() {
  // Optionally, get the current path to highlight the active link
  // const pathname = usePathname();
  return (
    <div className="hidden lg:flex items-center justify-center flex-1" role="menubar" aria-label="Desktop navigation">
      <nav className="flex gap-4 items-center bg-black/30 rounded-full px-6 py-2 shadow-lg">
        {navItems.map(({ label, href, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className={
              "flex items-center gap-2 px-4 py-2 rounded-full text-gray-200 hover:text-white hover:bg-purple-700/20 font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
            }
            tabIndex={0}
            aria-label={label}
            // aria-current={pathname === href ? "page" : undefined}
          >
            <Icon className="h-5 w-5" /> {label}
          </Link>
        ))}
      </nav>
    </div>
  )
}