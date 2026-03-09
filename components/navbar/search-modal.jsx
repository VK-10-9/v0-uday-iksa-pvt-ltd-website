"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, X, Clock, TrendingUp, ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"

const searchSuggestions = [
  { title: "NANOSUN Daylight Systems", type: "Industrial Product", href: "/products" },
  { title: "Industrial Portfolio", type: "Projects", href: "/projects" },
  { title: "About Uday IKSA", type: "Corporate", href: "/about" },
  { title: "Contact Engineering", type: "Support", href: "/contact" },
  { title: "Awards & Recognition", type: "Excellence", href: "/awards" },
]

const recentSearches = ["NANOVENT Ventilation", "Commercial Audit", "Carbon Neutrality"]

const trendingSearches = ["Industrial Daylight", "Smart Ventilation", "Energy Optimization"]

export default function SearchModal({ isOpen, onClose, setIsOpen }) {
  const [query, setQuery] = useState("")
  const [filteredSuggestions, setFilteredSuggestions] = useState(searchSuggestions)

  useEffect(() => {
    if (query) {
      const filtered = searchSuggestions.filter((item) => item.title.toLowerCase().includes(query.toLowerCase()))
      setFilteredSuggestions(filtered)
    } else {
      setFilteredSuggestions(searchSuggestions)
    }
  }, [query])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose()
      if (e.key === "/" && !isOpen) {
        e.preventDefault()
        setIsOpen(true)
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, onClose, setIsOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-[200] flex items-start justify-center pt-32 px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-slate-900/95 backdrop-blur-2xl border border-white/10 rounded-[40px] w-full max-w-2xl overflow-hidden shadow-2xl relative"
            initial={{ scale: 0.95, y: -20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: -20, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-orange-500/50 to-transparent" />

            {/* Search Input */}
            <div className="flex items-center p-8 border-b border-white/5">
              <div className="bg-brand-orange-500/10 p-2.5 rounded-xl mr-5">
                <Search className="h-6 w-6 text-brand-orange-500" />
              </div>
              <input
                type="text"
                placeholder="DISCOVER SOLUTIONS..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1 bg-transparent text-white placeholder-gray-500 outline-none text-xl font-black uppercase tracking-widest"
                autoFocus
              />
              <button
                onClick={onClose}
                className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 transition-colors ml-4"
              >
                <X className="h-5 w-5 text-gray-400" />
              </button>
            </div>

            <div className="max-h-[500px] overflow-y-auto custom-scrollbar">
              {query ? (
                /* Search Results */
                <div className="p-8">
                  <h3 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] mb-6">Search Results</h3>
                  {filteredSuggestions.length > 0 ? (
                    <div className="space-y-3">
                      {filteredSuggestions.map((item, index) => (
                        <Link
                          key={index}
                          href={item.href}
                          onClick={onClose}
                          className="flex items-center justify-between p-5 bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-white/10 rounded-2xl transition-all group"
                        >
                          <div>
                            <div className="text-white font-black uppercase text-sm tracking-widest group-hover:text-brand-orange-400 transition-colors">{item.title}</div>
                            <div className="text-[10px] text-gray-500 font-bold uppercase mt-1.5 tracking-tighter">{item.type}</div>
                          </div>
                          <ArrowRight className="h-5 w-5 text-gray-600 group-hover:text-brand-orange-500 group-hover:translate-x-1 transition-all" />
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <Sparkles className="h-12 w-12 text-gray-800 mx-auto mb-4" />
                      <p className="text-gray-500 font-black uppercase tracking-widest text-xs">No metrics found for "{query}"</p>
                    </div>
                  )}
                </div>
              ) : (
                /* Default State */
                <div className="p-8 space-y-10">
                  {/* Recent / Trending Grid */}
                  <div className="grid md:grid-cols-2 gap-10">
                    <div>
                      <div className="flex items-center mb-6">
                        <Clock className="h-4 w-4 text-brand-orange-500 mr-3" />
                        <h3 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">Log History</h3>
                      </div>
                      <div className="space-y-3">
                        {recentSearches.map((search, index) => (
                          <button
                            key={index}
                            onClick={() => setQuery(search)}
                            className="block w-full text-left p-3 hover:bg-white/5 rounded-xl transition-all text-gray-400 hover:text-white font-bold text-xs uppercase tracking-widest"
                          >
                            {search}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center mb-6">
                        <TrendingUp className="h-4 w-4 text-brand-orange-500 mr-3" />
                        <h3 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">Trending Systems</h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {trendingSearches.map((search, index) => (
                          <button
                            key={index}
                            onClick={() => setQuery(search)}
                            className="px-4 py-2 bg-white/5 hover:bg-brand-orange-500 hover:text-white rounded-xl text-[10px] font-black text-gray-400 uppercase tracking-widest transition-all"
                          >
                            {search}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* High Imact Quick Links */}
                  <div>
                    <h3 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mb-6">Strategics</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {searchSuggestions.slice(0, 4).map((item, index) => (
                        <Link
                          key={index}
                          href={item.href}
                          onClick={onClose}
                          className="p-5 bg-white/[0.02] border border-white/5 hover:bg-white/[0.08] hover:border-white/10 rounded-2xl transition-all group"
                        >
                          <div className="text-white font-black text-xs uppercase tracking-widest group-hover:text-brand-orange-400 transition-colors">
                            {item.title}
                          </div>
                          <div className="text-[9px] text-gray-500 font-bold uppercase mt-2 tracking-tighter opacity-80">{item.type}</div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Global Keybind Info */}
            <div className="p-6 border-t border-white/5 bg-white/[0.02] flex items-center justify-between">
              <div className="flex gap-6">
                <div className="flex items-center gap-2">
                  <span className="text-[9px] font-black text-gray-600 uppercase tracking-widest">Close</span>
                  <kbd className="px-2 py-1 bg-white/5 border border-white/10 rounded-md text-[9px] font-black text-gray-400">ESC</kbd>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[9px] font-black text-gray-600 uppercase tracking-widest">Select</span>
                  <kbd className="px-2 py-1 bg-white/5 border border-white/10 rounded-md text-[9px] font-black text-gray-400">ENTER</kbd>
                </div>
              </div>
              <p className="text-[8px] font-black text-gray-700 uppercase tracking-[0.3em]">Uday IKSA Index v2.1</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
