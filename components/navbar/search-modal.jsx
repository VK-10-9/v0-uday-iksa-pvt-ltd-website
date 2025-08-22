"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, X, Clock, TrendingUp, ArrowRight } from "lucide-react"
import Link from "next/link"

const searchSuggestions = [
  { title: "NANOSUN Daylight Systems", type: "Product", href: "/innovations/nanosun" },
  { title: "Industrial Projects", type: "Projects", href: "/projects/industrial" },
  { title: "About Our Company", type: "Page", href: "/about" },
  { title: "Contact Information", type: "Page", href: "/contact" },
  { title: "Awards & Recognition", type: "Page", href: "/awards" },
]

const recentSearches = ["NANOVENT Systems", "Commercial Projects", "Innovation Research"]

const trendingSearches = ["Sustainable Technology", "Green Building Solutions", "Energy Efficiency"]

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
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-start justify-center pt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-black/90 backdrop-blur-xl border border-white/20 rounded-2xl w-full max-w-2xl mx-4 overflow-hidden"
            initial={{ scale: 0.9, y: -20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: -20 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Search Input */}
            <div className="flex items-center p-6 border-b border-white/10">
              <Search className="h-5 w-5 text-gray-400 mr-3" />
              <input
                type="text"
                placeholder="Search products, projects, or pages..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1 bg-transparent text-white placeholder-gray-400 outline-none text-lg"
                autoFocus
              />
              <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                <X className="h-5 w-5 text-gray-400" />
              </button>
            </div>

            <div className="max-h-96 overflow-y-auto">
              {query ? (
                /* Search Results */
                <div className="p-4">
                  <h3 className="text-sm font-medium text-gray-400 mb-3">Search Results</h3>
                  {filteredSuggestions.length > 0 ? (
                    <div className="space-y-2">
                      {filteredSuggestions.map((item, index) => (
                        <Link
                          key={index}
                          href={item.href}
                          onClick={onClose}
                          className="flex items-center justify-between p-3 hover:bg-white/5 rounded-lg transition-colors group"
                        >
                          <div>
                            <div className="text-white font-medium">{item.title}</div>
                            <div className="text-sm text-gray-400">{item.type}</div>
                          </div>
                          <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-white transition-colors" />
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8 text-gray-400">No results found for "{query}"</div>
                  )}
                </div>
              ) : (
                /* Default State */
                <div className="p-4 space-y-6">
                  {/* Recent Searches */}
                  <div>
                    <div className="flex items-center mb-3">
                      <Clock className="h-4 w-4 text-gray-400 mr-2" />
                      <h3 className="text-sm font-medium text-gray-400">Recent Searches</h3>
                    </div>
                    <div className="space-y-1">
                      {recentSearches.map((search, index) => (
                        <button
                          key={index}
                          onClick={() => setQuery(search)}
                          className="block w-full text-left p-2 hover:bg-white/5 rounded-lg transition-colors text-gray-300 hover:text-white"
                        >
                          {search}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Trending Searches */}
                  <div>
                    <div className="flex items-center mb-3">
                      <TrendingUp className="h-4 w-4 text-gray-400 mr-2" />
                      <h3 className="text-sm font-medium text-gray-400">Trending</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {trendingSearches.map((search, index) => (
                        <button
                          key={index}
                          onClick={() => setQuery(search)}
                          className="px-3 py-1 bg-white/10 hover:bg-white/20 rounded-full text-sm text-gray-300 hover:text-white transition-colors"
                        >
                          {search}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Quick Links */}
                  <div>
                    <h3 className="text-sm font-medium text-gray-400 mb-3">Quick Links</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {searchSuggestions.slice(0, 4).map((item, index) => (
                        <Link
                          key={index}
                          href={item.href}
                          onClick={onClose}
                          className="p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-colors group"
                        >
                          <div className="text-white font-medium text-sm group-hover:text-purple-400 transition-colors">
                            {item.title}
                          </div>
                          <div className="text-xs text-gray-400 mt-1">{item.type}</div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-white/10 bg-white/5">
              <div className="flex items-center justify-between text-xs text-gray-400">
                <span>
                  Press <kbd className="px-2 py-1 bg-white/10 rounded">ESC</kbd> to close
                </span>
                <span>
                  Press <kbd className="px-2 py-1 bg-white/10 rounded">/</kbd> to search
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
