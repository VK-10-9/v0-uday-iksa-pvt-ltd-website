"use client"

import { RetroTvError } from "@/components/ui/404-error-page"

export default function RetroTvErrorDemo() {
    return (
        <div className="bg-slate-950 min-h-screen pt-24 pb-20">
            <div className="container mx-auto px-6">
                <div className="mb-12 text-center">
                    <h2 className="text-2xl font-black text-white uppercase tracking-[0.3em] mb-4">Error System Preview</h2>
                    <div className="h-1 w-20 bg-brand-orange-500 mx-auto"></div>
                </div>

                <RetroTvError
                    errorCode="404"
                    errorMessage="SIGNAL INTERRUPTED"
                />

                <div className="mt-20 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                        <h3 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">System Status</h3>
                        <p className="text-gray-400 text-sm">Our automated daylighting systems periodically check for valid routes. When a path is blocked or deleted, the system enters a 'Signal Lost' state to prevent energy leakage.</p>
                    </div>
                    <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                        <h3 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Next Steps</h3>
                        <p className="text-gray-400 text-sm">Verify the URL in your browser console. If this is a broken link, please report it to the infrastructure team for immediate recalibration.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
