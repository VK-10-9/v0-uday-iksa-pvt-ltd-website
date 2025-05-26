"use client"

import Link from "next/link"
import { Phone } from "lucide-react"
import { HoveredLink, Menu as NavMenu, MenuItem, ProductItem } from "@/components/ui/navbar-menu"
import { HoverButton } from "@/components/ui/hover-button"
import { cn } from "@/lib/utils"

export default function DesktopNav({ active, setActive }) {
  return (
    <div className="hidden lg:flex items-center justify-center flex-1">
      <div className={cn("max-w-4xl mx-auto")}>
        <NavMenu setActive={setActive}>
          <Link href="/" className="text-gray-300 hover:text-white font-medium">
            Home
          </Link>

          <MenuItem setActive={setActive} active={active} item="About Us">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/about">Our Story</HoveredLink>
              <HoveredLink href="/about#vision">Vision & Mission</HoveredLink>
              <HoveredLink href="/about#team">Team</HoveredLink>
            </div>
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item="Innovations">
            <div className="text-sm grid grid-cols-1 gap-6 p-2">
              <ProductItem
                title="NANOSUN Daylight Systems"
                href="/innovations/nanosun"
                src="/placeholder.svg?height=80&width=120&text=NANOSUN"
                description="Our flagship natural daylighting solution that maximizes sunlight while minimizing heat transfer."
              />
              <ProductItem
                title="NANOVENT Ventilation Systems"
                href="/innovations/nanovent"
                src="/placeholder.svg?height=80&width=120&text=NANOVENT"
                description="Revolutionary ventilation technology that harnesses natural air currents without electricity."
              />
              <ProductItem
                title="Research & Development"
                href="/innovations/research"
                src="/placeholder.svg?height=80&width=120&text=R&D"
                description="Our ongoing commitment to innovation through cutting-edge research in sustainable technologies."
              />
            </div>
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item="Projects">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/projects/industrial">Industrial Projects</HoveredLink>
              <HoveredLink href="/projects/commercial">Commercial Projects</HoveredLink>
              <HoveredLink href="/projects/institutional">Institutional Projects</HoveredLink>
              <HoveredLink href="/projects">View All Projects</HoveredLink>
            </div>
          </MenuItem>

          <Link href="/awards" className="text-gray-300 hover:text-white font-medium">
            Awards
          </Link>

          <Link href="/contact" className="text-gray-300 hover:text-white font-medium">
            Contact
          </Link>
        </NavMenu>
      </div>

      <div className="ml-8">
        <HoverButton className="text-white">
          <Phone className="mr-2 h-4 w-4" /> Contact Us
        </HoverButton>
      </div>
    </div>
  )
}
