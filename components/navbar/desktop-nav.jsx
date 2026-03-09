"use client"

import Link from "next/link"
import { ExternalLink, Star, Award, Building, Factory } from "lucide-react"
import { HoveredLink, Menu as NavMenu, MenuItem, ProductItem } from "@/components/ui/navbar-menu"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { products } from "@/lib/data/products"

const projectCategories = [
  {
    name: "Industrial Projects",
    href: "/projects",
    icon: <Factory className="h-4 w-4" />,
    description: "Large-scale factory implementations",
    count: "50+ Projects",
  },
  {
    name: "Commercial Projects",
    href: "/projects",
    icon: <Building className="h-4 w-4" />,
    description: "Office and Retail complexes",
    count: "30+ Projects",
  },
  {
    name: "Institutional Projects",
    href: "/projects",
    icon: <Award className="h-4 w-4" />,
    description: "Educational and healthcare facilities",
    count: "25+ Projects",
  },
]

export default function DesktopNav({ active, setActive }) {
  return (
    <div className="flex items-center justify-center">
      <NavMenu setActive={setActive}>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            href="/"
            className="text-gray-400 hover:text-white text-xs font-black uppercase tracking-[0.2em] transition-all duration-300 hover:text-brand-orange-400"
          >
            Home
          </Link>
        </motion.div>

        <MenuItem setActive={setActive} active={active} item="About">
          <div className="flex flex-col space-y-6 text-sm w-72 p-2">
            <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest border-b border-white/5 pb-2">Corporate Profile</div>
            <div className="space-y-4">
              <HoveredLink href="/about" className="flex items-center justify-between group">
                <span className="font-bold text-white group-hover:text-brand-orange-400 transition-colors">Our Story</span>
                <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity text-brand-orange-500" />
              </HoveredLink>
              <HoveredLink href="/about" className="flex items-center justify-between group">
                <span className="font-bold text-white group-hover:text-brand-orange-400 transition-colors">Vision & Mission</span>
                <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity text-brand-orange-500" />
              </HoveredLink>
              <HoveredLink href="/about" className="flex items-center justify-between group">
                <span className="font-bold text-white group-hover:text-brand-orange-400 transition-colors">Engineering Leadership</span>
                <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity text-brand-orange-500" />
              </HoveredLink>
            </div>

            <div className="pt-4 mt-2 border-t border-white/10">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                  <div className="text-brand-orange-500 text-xl font-black">15+</div>
                  <div className="text-[8px] font-black text-gray-500 uppercase tracking-widest">Years Experience</div>
                </div>
                <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                  <div className="text-brand-orange-500 text-xl font-black">285+</div>
                  <div className="text-[8px] font-black text-gray-500 uppercase tracking-widest">Global Projects</div>
                </div>
              </div>
            </div>
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Products">
          <div className="text-sm grid p-8 w-[920px]">
            <div className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] mb-10 pb-4 border-b border-white/5">Industrial Product Line</div>
            <div className="grid grid-cols-2 gap-x-16 gap-y-12">
              {products.map((product) => (
                <ProductItem
                  key={product.id}
                  title={product.name}
                  href={product.link}
                  src={product.image}
                  description={product.shortNote || product.description}
                />
              ))}
            </div>

            <div className="pt-12 mt-12 border-t border-white/5">
              <Link
                href="/products"
                className="flex items-center justify-between group"
              >
                <span className="font-black tracking-[0.3em] uppercase text-[10px] text-brand-orange-400">View Comprehensive Solutions</span>
                <ExternalLink className="h-4 w-4 text-brand-orange-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Portfolio">
          <div className="flex flex-col space-y-6 text-sm w-96 p-2">
            <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest border-b border-white/5 pb-2">National Footprint</div>
            <div className="space-y-3">
              {projectCategories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <HoveredLink href={category.href} className="!block">
                    <div className="flex items-center space-x-4 p-4 rounded-2xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all group">
                      <div className="bg-brand-orange-500/10 p-3 rounded-xl text-brand-orange-500 group-hover:bg-brand-orange-500 group-hover:text-white transition-all">
                        {category.icon}
                      </div>
                      <div className="flex-1">
                        <div className="font-black text-white group-hover:text-brand-orange-400 transition-colors uppercase text-xs tracking-wider">
                          {category.name}
                        </div>
                        <div className="text-[10px] font-medium text-gray-500 mt-1">{category.description}</div>
                        <div className="text-[10px] font-black text-brand-orange-500 uppercase tracking-widest mt-1.5">{category.count}</div>
                      </div>
                      <ExternalLink className="h-4 w-4 text-gray-500 opacity-0 group-hover:opacity-100 transition-all" />
                    </div>
                  </HoveredLink>
                </motion.div>
              ))}
            </div>

            <div className="pt-4 border-t border-white/10">
              <Link
                href="/projects"
                className="flex items-center justify-between group"
              >
                <span className="font-black text-[10px] uppercase tracking-widest text-brand-orange-400">View Full Portfolio</span>
                <ExternalLink className="h-4 w-4 text-brand-orange-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="FAQ">
          <div className="flex flex-col space-y-6 text-sm w-96 p-4">
            <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest border-b border-white/5 pb-2">Common Questions</div>
            <div className="space-y-4">
              <div className="space-y-2">
                <p className="text-white font-bold text-xs uppercase tracking-tight">Does it let in heat?</p>
                <p className="text-gray-500 text-[10px] leading-relaxed">No. Our dome filters out infrared (heat) and UV rays, only bringing in comfortable light.</p>
              </div>
              <div className="space-y-2">
                <p className="text-white font-bold text-xs uppercase tracking-tight">Will it leak during rains?</p>
                <p className="text-gray-500 text-[10px] leading-relaxed">Every installation is 100% leak-proof and tested for Indian monsoon conditions.</p>
              </div>
              <div className="space-y-2">
                <p className="text-white font-bold text-xs uppercase tracking-tight">Where can it be used?</p>
                <p className="text-gray-500 text-[10px] leading-relaxed">Factories, warehouses, homes, schools—essentially any building with a roof!</p>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10">
              <Link
                href="/faq"
                className="flex items-center justify-between group"
              >
                <span className="font-black text-[10px] uppercase tracking-widest text-brand-orange-400">View All Questions</span>
                <ExternalLink className="h-4 w-4 text-brand-orange-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </MenuItem>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            href="/awards"
            className="text-gray-400 hover:text-white text-xs font-black uppercase tracking-[0.2em] transition-all duration-300 hover:text-brand-orange-400 flex items-center"
          >
            <Star className="h-4 w-4 mr-2 text-brand-orange-500" />
            Awards
          </Link>
        </motion.div>
      </NavMenu>
    </div>
  )
}
