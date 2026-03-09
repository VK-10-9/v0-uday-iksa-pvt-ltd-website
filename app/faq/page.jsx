import FAQSection from "@/components/home/faq-section"
import CTASection from "@/components/home/cta-section"

export const metadata = {
    title: "FAQ | Uday IKSA - Sustainable Engineering Solutions",
    description: "Find answers to frequently asked questions about NANOSUN, NANOVENT, and other sustainable engineering solutions from Uday IKSA.",
}

export default function FAQPage() {
    return (
        <main className="pt-20 overflow-hidden">
            <FAQSection />
            <CTASection />
        </main>
    )
}
