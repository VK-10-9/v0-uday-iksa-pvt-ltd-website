export default function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

// Organization Schema - matches SEO document exactly
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Uday IKSA Pvt Ltd",
  url: "https://udayiksa.com",
  logo: "https://udayiksa.com/logo.png",
  description: "India's leading manufacturer of natural daylighting and ventilation systems — NANOSUN™ and NANOVENT®.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "C-391, Gokul Industrial Estate, 2nd Gate Gokul Road",
    addressLocality: "Hubballi",
    addressRegion: "Karnataka",
    postalCode: "580030",
    addressCountry: "IN"
  },
  telephone: "+91-8792182631",
  email: "info@udayiksa.com",
  foundingDate: "2009",
  areaServed: "IN",
  sameAs: [
    "https://www.linkedin.com/company/udayiksa",
    "https://www.youtube.com/@udayiksa",
    "https://instagram.com/udayiksa",
    "https://facebook.com/udayiksa"
  ]
}

// Local Business Schema
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://udayiksa.com",
  name: "Uday IKSA Pvt Ltd",
  image: "https://udayiksa.com/logo.png",
  telephone: "+91-8792182631",
  email: "info@udayiksa.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "C-391, Gokul Industrial Estate, 2nd Gate Gokul Road",
    addressLocality: "Hubballi",
    addressRegion: "Karnataka",
    postalCode: "580030",
    addressCountry: "IN"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 15.3647,
    longitude: 75.1240
  },
  url: "https://udayiksa.com",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "09:00",
    closes: "18:00"
  },
  priceRange: "$$"
}

// Product Schema - NANOSUN PEB
export const nanosunPebSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "NANOSUN™ PEB Circular Daylight",
  description: "Natural daylighting system for PEB and metal sheet roofs. Optical polycarbonate dome with aluminium reflector. Available in 8 sizes from 200mm to 1200mm.",
  brand: {
    "@type": "Brand",
    name: "NANOSUN"
  },
  manufacturer: {
    "@type": "Organization",
    name: "Uday IKSA Pvt Ltd"
  },
  category: "Natural Daylighting Systems",
  countryOfOrigin: "IN",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    seller: {
      "@type": "Organization",
      name: "Uday IKSA Pvt Ltd"
    }
  }
}

// Product Schema - NANOSUN RCC
export const nanosunRccSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "NANOSUN™ RCC Circular Daylight",
  description: "Natural skylight for RCC & concrete flat roofs. 200mm to 1200mm sizes, up to 400 lux output. UV-filtered polycarbonate dome designed for Indian flat roof buildings.",
  brand: {
    "@type": "Brand",
    name: "NANOSUN"
  },
  manufacturer: {
    "@type": "Organization",
    name: "Uday IKSA Pvt Ltd"
  },
  category: "Natural Daylighting Systems",
  countryOfOrigin: "IN",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    seller: {
      "@type": "Organization",
      name: "Uday IKSA Pvt Ltd"
    }
  }
}

// Product Schema - SKYTUBE
export const skytubeSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "NANOSUN™ SKYTUBE Tubular Daylight",
  description: "Rectangular natural light strips for factory bays & warehouses. 280mm to 680mm wide, up to 4500mm long, 600 lux output. Zero electricity during day.",
  brand: {
    "@type": "Brand",
    name: "NANOSUN"
  },
  manufacturer: {
    "@type": "Organization",
    name: "Uday IKSA Pvt Ltd"
  },
  category: "Tubular Daylighting Systems",
  countryOfOrigin: "IN",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    seller: {
      "@type": "Organization",
      name: "Uday IKSA Pvt Ltd"
    }
  }
}

// Product Schema - NANOVENT
export const nanoventSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "NANOVENT® Natural Turbo Ventilator",
  description: "India's registered natural turbo ventilator. Wind-powered, zero electricity, zero maintenance. Stainless steel options. For factories, warehouses & industrial buildings.",
  brand: {
    "@type": "Brand",
    name: "NANOVENT"
  },
  manufacturer: {
    "@type": "Organization",
    name: "Uday IKSA Pvt Ltd"
  },
  category: "Natural Ventilation Systems",
  countryOfOrigin: "IN",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    seller: {
      "@type": "Organization",
      name: "Uday IKSA Pvt Ltd"
    }
  }
}

// Generic Product Schema Generator
export function getProductSchema(product) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.image,
    brand: {
      "@type": "Brand",
      name: product.brand || "NANOSUN"
    },
    manufacturer: {
      "@type": "Organization",
      name: "Uday IKSA Pvt Ltd"
    },
    category: product.category || "Natural Daylighting Systems",
    countryOfOrigin: "IN",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "Uday IKSA Pvt Ltd"
      }
    }
  }
}

// Website Schema
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Uday IKSA",
  url: "https://udayiksa.com",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://udayiksa.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}

// Breadcrumb Schema Generator
export const breadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url
  }))
})

// FAQ Schema - for FAQ page
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does a natural daylight system bring in heat along with light?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. NANOSUN uses an optical polycarbonate dome that is essentially opaque to wavelengths below 385 nanometres — meaning UV and excess infrared are blocked. Only visible light enters the building. In most cases, natural daylighting actually reduces the heat load compared to running electric lights all day."
      }
    },
    {
      "@type": "Question",
      name: "How much light (lux) does a NANOSUN unit provide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depending on the size and type, NANOSUN units deliver between 100 and 600 lux. Standard factory lighting requirements in India are 150–300 lux. The ambient outdoor sunlight is approximately 90,000 lux — our system captures and distributes a fraction of that, which is more than sufficient for most industrial applications."
      }
    },
    {
      "@type": "Question",
      name: "Will it leak during the monsoon?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Every NANOSUN unit has a pre-moulded flanged base with no joints in the dome — the entire collector is a single piece unit. The flange creates a watertight seal with the roof sheet. Our systems have been installed across coastal and heavy-rainfall regions of India including Goa, Kerala, and Assam without leakage issues."
      }
    },
    {
      "@type": "Question",
      name: "What is the lifespan of a NANOSUN daylighting unit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "NANOSUN units are designed for 20+ years of service life. The polycarbonate dome is UV-stabilized and the aluminium reflector maintains its reflectivity over time. With no moving parts or electrical components, there's virtually nothing to fail."
      }
    },
    {
      "@type": "Question",
      name: "How does NANOVENT work without electricity?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "NANOVENT is a wind-driven turbo ventilator. Even the slightest breeze causes the turbine to rotate, creating negative pressure that draws hot air out of the building. It works 24/7 as long as there's any air movement — which in India, there almost always is."
      }
    }
  ]
}
