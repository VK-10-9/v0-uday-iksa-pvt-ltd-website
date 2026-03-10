"use client"

import { RetroTvError } from "@/components/ui/404-error-page"

export default function NotFound() {
    return (
        <div className="bg-slate-950 min-h-screen flex items-center justify-center pt-20">
            <RetroTvError
                errorCode="404"
                errorMessage="LIGHT NOT FOUND"
            />
        </div>
    )
}
