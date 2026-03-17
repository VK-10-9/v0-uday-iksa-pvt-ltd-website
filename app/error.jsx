"use client"

import { useEffect } from "react"
import Link from "next/link"
import { AlertTriangle, Home, RefreshCw } from "lucide-react"

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log error to console in development
    console.error("Application error:", error)
  }, [error])

  return (
    <div className="bg-slate-950 min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="max-w-lg w-full text-center">
        {/* Error Icon */}
        <div className="w-24 h-24 bg-brand-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-8">
          <AlertTriangle className="w-12 h-12 text-brand-orange-500" />
        </div>

        {/* Error Message */}
        <h1 className="text-3xl font-black text-white uppercase tracking-tighter mb-4">
          System Error
        </h1>
        <p className="text-gray-400 mb-8 leading-relaxed">
          Something went wrong while processing your request. Our engineers have been notified.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-orange-500 text-white rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-brand-orange-600 transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
            Try Again
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-white rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-white/10 transition-colors"
          >
            <Home className="w-4 h-4" />
            Go Home
          </Link>
        </div>
      </div>
    </div>
  )
}
