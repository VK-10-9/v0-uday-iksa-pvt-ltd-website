"use client"

import Link from "next/link"
import { ExternalLink, Star, Award, Building, Factory, Sun, Wind, Zap, Camera, ChevronRight } from "lucide-react"
import { HoveredLink, Menu as NavMenu, MenuItem, ProductItem } from "@/components/ui/navbar-menu"
import { motion } from "framer-motion"

const projectCategories = [
  {
    name: "Industrial Projects",
    href: "/projects",
    icon: <Factory className="h-4 w-4" />,
    description: "Large-scale factory solutions",
    count: "50+ Sites",
  },
  {
    name: "Commercial Projects",
    href: "/projects",
    icon: <Building className="h-4 w-4" />,
    description: "Retail and corporate offices",
    count: "30+ Sites",
  },
  {
    name: "Institutional Projects",
    href: "/projects",
    icon: <Award className="h-4 w-4" />,
    description: "Schools and Healthcare",
    count: "25+ Sites",
  },
]

export default function DesktopNav({ active, setActive }) {
  return (
    <div className="flex items-center">
      <NavMenu setActive={setActive}>
        {/* Simple Link Item */}
        <Link
          href="/"
          className="text-gray-400 hover:text-white text-xs font-black uppercase tracking-[0.2em] transition-all duration-300 hover:text-brand-orange-400 px-4"
        >
          Home
        </Link>

        <MenuItem setActive={setActive} active={active} item="About">
          <div className="flex flex-col space-y-4 w-64 p-2">
            <div className="text-[7px] font-black text-gray-500 uppercase tracking-widest border-b border-white/5 pb-2 ml-3">Identity</div>
            <div className="space-y-1">
              <HoveredLink href="/about">Our Story</HoveredLink>
              <HoveredLink href="/about">Vision & Mission</HoveredLink>
              <HoveredLink href="/about">Engineering Leadership</HoveredLink>
            </div>
            
            <div className="pt-4 mt-2 border-t border-white/10 px-3 pb-2">
               <div className="flex items-baseline gap-2">
                  <span className="text-brand-orange-500 text-lg font-black tracking-tighter">15+</span>
                  <span className="text-[6px] font-black text-gray-500 uppercase tracking-widest">Years Experience</span>
               </div>
            </div>
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Products">
          <div className="grid grid-cols-2 gap-x-6 gap-y-6 p-2 w-[820px]">
            {/* Skylight Series Section */}
            <div className="flex flex-col space-y-4">
              <div className="text-[7px] font-black text-brand-orange-500 uppercase tracking-widest border-b border-white/5 pb-2 flex items-center gap-2 ml-3">
                <Sun className="h-3 w-3" /> Skylight Series (NANOSUN™)
              </div>
              <div className="space-y-1">
                <ProductItem 
                  title="Skylight for Pitched Roofs" 
                  description="Industrial factory daylighting"
                  href="/products/nanosun"
                  src="/images/products/nanosun/IMG20250806155716.jpg"
                />
                <ProductItem 
                  title="Flat Roof Product" 
                  description="Solution for flat RCC roofs"
                  href="/products/nanosun-rcc"
                  src="/images/products/nanosun-rcc/circular dome design 300mm 1.1.jpg"
                />
                <ProductItem 
                  title="Skylight for Tile Roofs" 
                  description="Mangalore & Modern tiles"
                  href="/products/nanosun-tiles"
                  src="/images/products/nanosun-tiles/ChatGPT Image Feb 19, 2026, 06_13_49 PM.png"
                />
                <ProductItem 
                  title="Openable Premium Skylight" 
                  description="Luxury light + fresh air"
                  href="/products/skylight"
                  src="/images/products/nanosun/Skypipe installation at Tata Motors Lucknow.jpg"
                />
              </div>
            </div>

            {/* Ventilation & Tubular Section */}
             <div className="flex flex-col space-y-8">
               <div className="flex flex-col space-y-4">
                  <div className="text-[7px] font-black text-brand-orange-500 uppercase tracking-widest border-b border-white/5 pb-2 flex items-center gap-2 ml-3">
                    <Wind className="h-3 w-3" /> Ventilation Series (NANOVENT®)
                  </div>
                  <div className="space-y-1">
                    <ProductItem 
                      title="Natural Roof Ventilator" 
                      description="Power-free heat extraction"
                      href="/products/nanovent"
                      src="/images/gallery/nanovent/RCC - Turbo Ventilator .png"
                    />
                  </div>
               </div>

               <div className="flex flex-col space-y-4 border-t border-white/5 pt-6">
                  <div className="text-[7px] font-black text-brand-orange-500 uppercase tracking-widest border-b border-white/5 pb-2 flex items-center gap-2 ml-3">
                    <Zap className="h-3 w-3" /> Tubular Series (SKYTUBE™)
                  </div>
                  <div className="space-y-1 mt-2">
                      <ProductItem 
                        title="Standard Tubular" 
                        description="Direct light for inner rooms"
                        href="/products/skytube"
                        src="/images/gallery/skytube/WhatsApp Image 2024-04-30 at 1.24.14 PM (1).jpeg"
                      />
                      <ProductItem 
                        title="Angled / Bend Configurations" 
                        description="Custom routing around beams"
                        href="/products/skytube-angled"
                        src="/images/gallery/skytube/WhatsApp Image 2025-08-14 at 4.15.02 PM (1).jpeg"
                      />
                  </div>
               </div>
            </div>
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Portfolio">
           <div className="flex flex-col space-y-4 w-[380px] p-2">
            <div className="text-[7px] font-black text-gray-500 uppercase tracking-widest border-b border-white/5 pb-2 ml-4">National Impact</div>
            <div className="grid grid-cols-1 gap-2">
              {projectCategories.map((category) => (
                <Link 
                  key={category.name}
                  href={category.href}
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/5 transition-all group"
                >
                  <div className="bg-brand-orange-500/10 p-2.5 rounded-lg text-brand-orange-500 group-hover:bg-brand-orange-500 group-hover:text-white transition-all">
                    {category.icon}
                  </div>
                  <div className="flex-1">
                    <div className="font-black text-white group-hover:text-brand-orange-400 transition-colors uppercase text-[7px] tracking-wider">
                      {category.name}
                    </div>
                    <div className="text-[7px] font-medium text-gray-500">{category.description}</div>
                  </div>
                  <div className="text-[7px] font-black text-brand-orange-500 bg-brand-orange-500/10 px-2 py-0.5 rounded-full">{category.count}</div>
                </Link>
              ))}
            </div>
          </div>
        </MenuItem>

        <Link
          href="/gallery"
          className="text-gray-400 hover:text-white text-xs font-black uppercase tracking-[0.2em] transition-all duration-300 hover:text-brand-orange-400 px-4"
        >
          Gallery
        </Link>

        <MenuItem setActive={setActive} active={active} item="FAQ">
          <div className="flex flex-col space-y-4 w-72 p-3">
            <div className="text-[7px] font-black text-gray-500 uppercase tracking-widest border-b border-white/5 pb-2 ml-2">Quick Support</div>
            <div className="space-y-4 px-2">
               <div className="space-y-1">
                  <p className="text-white font-black text-[7px] uppercase tracking-tighter">Installation Quality?</p>
                  <p className="text-gray-500 text-[6px] leading-relaxed font-bold">Leak-proof certified by our master engineers.</p>
               </div>
               <div className="space-y-1">
                  <p className="text-white font-black text-[7px] uppercase tracking-tighter">Heat Resistance?</p>
                  <p className="text-gray-500 text-[6px] leading-relaxed font-bold">Blocks 99% UV and significant IR heat.</p>
               </div>
            </div>
            <div className="pt-3 border-t border-white/5">
                <HoveredLink href="/faq">All Questions</HoveredLink>
            </div>
          </div>
        </MenuItem>

         <Link
          href="/awards"
          className="text-gray-400 hover:text-white text-xs font-black uppercase tracking-[0.2em] transition-all duration-300 hover:text-brand-orange-400 px-4"
        >
          Awards
        </Link>
      </NavMenu>
    </div>
  )
}
