import { Sun, Wind, CheckCircle2, Factory, Sparkles, Building2, Home, Target, Eye, Heart, Trophy, Award, Star, Quote, Zap, TrendingUp, Lightbulb, Users } from "lucide-react"

export const solutionsData = {
    badge: {
        icon: [Home, Building2],
        text: "Home & Company Solutions"
    },
    title: {
        plain: "Pure Light ",
        gradient: "Anywhere"
    },
    description: "Whether it's a massive factory floor or your favorite reading nook at home—we bring the sun inside.",
    howItWorks: {
        title: "How we light your space",
        steps: [
            {
                number: "1",
                title: "Collect",
                description: "A clear, unbreakable dome on your roof collects the sunlight from every direction."
            },
            {
                number: "2",
                title: "Move",
                description: "A highly reflective pipe moves that light downward—even through your ceiling or attic."
            },
            {
                number: "3",
                title: "Spread",
                description: "A soft glass panel at the ceiling spreads the light evenly so your whole room glows beautifully."
            }
        ]
    },
    features: [
        { title: "No Electricity", description: "Nature provides the light for free—your lights stay off all day, at home or work." },
        { title: "Pure Comfort", description: "Blocks heat and UV rays—so your space stays cool and your furniture doesn't fade." },
        { title: "Lifetime Leak-Proof", description: "Precision seals for metal roofs or concrete. Zero rain enters your building." },
        { title: "Health First", description: "Natural light helps you focus better at work and sleep better at home." },
    ],
    experienceBadge: {
        number: "15+",
        label: "Years Service"
    }
}

export const aboutData = {
    badge: "The Uday IKSA Story",
    title: {
        plain: "Lighting Up ",
        gradient: "India, Naturally"
    },
    description: [
        "Uday IKSA started with one simple idea: buildings shouldn't need to burn electricity just to stay bright during the day.",
        "Based in Hubballi, Karnataka, we design and manufacture natural sky lights and roof ventilation systems that are installed across India — in factories, warehouses, schools, hospitals, offices, and even homes.",
        "Trusted by 500+ customers, from small workshops to giants like Tata, HAL, and Indian Railways."
    ],
    stats: [
        { icon: Building2, number: "500+", label: "Projects Delivered" },
        { icon: Users, number: "15+", label: "Years in Business" },
        { icon: Award, number: "10+", label: "Industry Awards" },
    ],
    values: [
        {
            icon: Eye,
            title: "Vision",
            description: "A future where every building in India uses the sun's free energy — instead of paying for artificial light.",
        },
        {
            icon: Target,
            title: "Mission",
            description: "To make natural daylighting and ventilation easy, affordable, and accessible for every type of building — from a small home to a large factory.",
        },
        {
            icon: Heart,
            title: "Values",
            description: "Honest engineering. What we promise, we deliver — safely, sustainably, and with care for the people who use our products.",
        },
    ]
}

export const clientData = {
    badge: "Our Network",
    title: "Trusted by Industry Leaders",
    description: "Partnering with global giants to deliver sustainable engineering excellence across various sectors.",
    clients: [
        "BOSCH", "SIEMENS", "SCHNEIDER ELECTRIC", "INDIAN OIL", "GENERIC", "BHARAT ELECTRONICS",
        "ADITYA BIRLA", "BM ASSOCIATES", "INDIAN RAILWAYS", "ADITI CONSULTING", "ANANT ENGINEERING",
        "JK PAPER", "KVB", "CENTRAL MARINE", "OBEE", "OMKAR INDUSTRIES", "SHANKER STEELS", "DANA",
        "EXEDY", "FAP", "KARNATAKA", "MAX SPARE", "UVDHL", "USHA CONSTRUCTIONS", "SANOFI", "ULTRA",
        "GHV", "GAIL"
    ]
}

export const testimonialData = {
    badge: "Industry Voice",
    title: "Client Success",
    description: "Real impact stories from India's leading industrial and commercial organizations who transitioned to sustainable engineering.",
    testimonials: [
        {
            id: 1,
            name: "Krishnappa",
            position: "Senior Engineer",
            company: "Bharat Electronics Limited (BEL)",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Krishnappa",
            rating: 5,
            testimonial: "We installed NANOSUN in our production facility and stopped using tube lights during the day entirely. The difference in our electricity bill was visible from the first month. The installation team was clean and professional.",
            project: "Production Facility",
            savings: "Zero Day-Light Bills",
            impact: "Visible ROI Month 1"
        },
        {
            id: 2,
            name: "Indushekhar",
            position: "Director",
            company: "Volvo Groups",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Indushekhar",
            rating: 5,
            testimonial: "Uday IKSA understood our building's requirements and gave us a solution that fit perfectly. The natural light has made our workspace noticeably better — and the installation was done without disrupting our operations.",
            project: "Corporate Workspace",
            savings: "Custom Engineering",
            impact: "Uninterrupted Operations"
        },
        {
            id: 3,
            name: "Satish",
            position: "Engineering Head",
            company: "Exedy Clutch India Pvt Ltd",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Satish",
            rating: 5,
            testimonial: "Our workers are happier. The light feels natural and comfortable, not harsh. And yes — the energy savings are real. We'd recommend Uday IKSA to any manufacturing company.",
            project: "Manufacturing Hub",
            savings: "Measurable Energy Drop",
            impact: "Workforce Well-being"
        },
    ]
}
