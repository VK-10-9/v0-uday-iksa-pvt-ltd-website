"use client"

import Link from "next/link"
import { Phone, ExternalLink, Star, Award, Building, Factory } from "lucide-react"
import { HoveredLink, Menu as NavMenu, MenuItem, ProductItem } from "@/components/ui/navbar-menu"
import { HoverButton } from "@/components/ui/hover-button"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const projectCategories = [
  {
    name: "Industrial Projects",
    href: "/projects/industrial",
    icon: <Factory className="h-4 w-4" />,
    description: "Large-scale industrial implementations",
    count: "50+ Projects",
  },
  {
    name: "Commercial Projects",
    href: "/projects/commercial",
    icon: <Building className="h-4 w-4" />,
    description: "Office buildings and retail spaces",
    count: "30+ Projects",
  },
  {
    name: "Institutional Projects",
    href: "/projects/institutional",
    icon: <Award className="h-4 w-4" />,
    description: "Educational and healthcare facilities",
    count: "25+ Projects",
  },
]

export default function DesktopNav({ active, setActive }) {
  return (
    <div className="hidden lg:flex items-center justify-center flex-1">
      <div className={cn("max-w-5xl mx-auto")}>
        <NavMenu setActive={setActive}>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/"
              className="text-gray-300 hover:text-white font-medium transition-all duration-300 hover:text-purple-400"
            >
              Home
            </Link>
          </motion.div>

          <MenuItem setActive={setActive} active={active} item="About Us">
            <div className="flex flex-col space-y-4 text-sm w-60">
              <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">Company</div>
              <HoveredLink href="/about" className="flex items-center justify-between group">
                <span>Our Story</span>
                <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </HoveredLink>
              <HoveredLink href="/about#vision" className="flex items-center justify-between group">
                <span>Vision & Mission</span>
                <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </HoveredLink>
              <HoveredLink href="/about#team" className="flex items-center justify-between group">
                <span>Leadership Team</span>
                <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </HoveredLink>
              <div className="pt-2 border-t border-white/10">
                <div className="text-xs text-gray-500 mb-2">Quick Stats</div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-white/5 p-2 rounded">
                    <div className="text-purple-400 font-bold">15+</div>
                    <div className="text-gray-400">Years</div>
                  </div>
                  <div className="bg-white/5 p-2 rounded">
                    <div className="text-purple-400 font-bold">100+</div>
                    <div className="text-gray-400">Projects</div>
                  </div>
                </div>
              </div>
            </div>
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item="Innovations">
            <div className="text-sm grid grid-cols-1 gap-6 p-2 w-96">
              <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">Our Products</div>
              <ProductItem
                title="NANOSUN Daylight Systems"
                href="/innovations/nanosun"
                src="/placeholder.svg?height=80&width=120&text=NANOSUN"
                description="Revolutionary natural daylighting solution that maximizes sunlight while minimizing heat transfer for optimal indoor environments."
              />
              <ProductItem
                title="NANOVENT Ventilation Systems"
                href="/innovations/nanovent"
                src="/placeholder.svg?height=80&width=120&text=NANOVENT"
                description="Advanced ventilation technology that harnesses natural air currents without electricity for sustainable air circulation."
              />
              <ProductItem
                title="Research & Development"
                href="/innovations/research"
                src="/placeholder.svg?height=80&width=120&text=R&D"
                description="Our ongoing commitment to innovation through cutting-edge research in sustainable building technologies."
              />

              <div className="pt-4 border-t border-white/10">
                <Link
                  href="/innovations"
                  className="flex items-center justify-between text-purple-400 hover:text-purple-300 transition-colors group"
                >
                  <span className="font-medium">View All Innovations</span>
                  <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item="Projects">
            <div className="flex flex-col space-y-4 text-sm w-80">
              <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">Project Categories</div>
              {projectCategories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <HoveredLink href={category.href} className="!block">
                    <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/5 transition-colors group">
                      <div className="text-purple-400 group-hover:text-purple-300 transition-colors">
                        {category.icon}
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-white group-hover:text-purple-400 transition-colors">
                          {category.name}
                        </div>
                        <div className="text-xs text-gray-400 mt-1">{category.description}</div>
                        <div className="text-xs text-purple-400 mt-1">{category.count}</div>
                      </div>
                      <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-white opacity-0 group-hover:opacity-100 transition-all" />
                    </div>
                  </HoveredLink>
                </motion.div>
              ))}

              <div className="pt-4 border-t border-white/10">
                <Link
                  href="/projects"
                  className="flex items-center justify-between text-purple-400 hover:text-purple-300 transition-colors group"
                >
                  <span className="font-medium">View All Projects</span>
                  <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </MenuItem>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/awards"
              className="text-gray-300 hover:text-white font-medium transition-all duration-300 hover:text-purple-400 flex items-center"
            >
              <Star className="h-4 w-4 mr-1" />
              Awards
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/contact"
              className="text-gray-300 hover:text-white font-medium transition-all duration-300 hover:text-purple-400"
            >
              Contact
            </Link>
          </motion.div>
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
