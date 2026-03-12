# Data Management

The UDAY IKSA website uses a centralized data model stored in `lib/data/` to power its dynamic sections.

## Files
1. `products.js`: Contains all technical specs, features, and imagery for the product line.
2. `projects.js`: Contains names, locations, and descriptions of client installations.
3. `stats.js`: Corporate impact metrics (e.g., "500+ Buildings", "15+ Years").
4. `home-sections.js`: Copy and image paths for the complex sections on the homepage.

## Schema: Product Object
A typical product entry in `lib/data/products.js`:
```javascript
{
  id: "nanosun",
  name: "NANOSUN™ PEB Circular Daylight",
  category: "Natural Skylight",
  description: "High-performance daylighting...",
  stats: [
    { label: "Material", value: "Triple Glazed PC" }
  ],
  features: [
    { title: "Leak Proof", desc: "Engineered flashing..." }
  ]
}
```

## How to Update
- **To add a new project**: Simply append a new object to the `allProjects` array in `lib/data/projects.js`. The Sector pages will automatically filter and display the new project based on the `category` field.
- **To update product specs**: Modify the `stats` array in `lib/data/products.js`. The Technical Matrix on the product page will automatically re-render the new data.

## SEO Metadata
Metadata is managed within each `page.jsx` file using the Next.js `metadata` export.
- Key keywords: *Daylighting, Industrial Ventilation, Hubballi, Sustainable Engineering, NANOVENT, NANOSUN.*
