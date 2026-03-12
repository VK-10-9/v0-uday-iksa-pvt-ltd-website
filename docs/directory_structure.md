# Directory Structure

This document explains the organization of the UDAY IKSA project files.

## Root Directory
- `/app`: The heart of the application, containing all routes, layouts, and pages.
- `/components`: Reusable React components organized by category.
- `/public`: Static assets including images, logos, and technical PDFs.
- `/lib`: Utility functions, configuration, and static data arrays.
- `/styles`: Global CSS and Tailwind configurations.
- `/docs`: Technical documentation (where this file is located).

## Detailed Breakdown

### `app/`
Contains the Next.js App Router structure.
- `(root)/page.jsx`: The homepage.
- `about/`: Company profile page.
- `products/`: 
    - `page.jsx`: Product index.
    - `nanosun/`, `nanovent/`, etc.: Specific product landing pages.
- `projects/`: Sector-specific portfolios (Industrial, Commercial, PSU).
- `privacy/`, `terms/`, `governance/`: Legal compliance pages.

### `components/`
- `ui/`: Core primitive components (Button, Progress, HoverButton).
- `navbar/`: Desktop and Mobile navigation logic.
- `home/`: Components specific to the homepage (Hero, Solutions, PatentedBanner).
- `product/`: Components shared across product pages (CredentialStrip).

### `lib/`
- `data/`: Centralized arrays for products, projects, and testimonials. 
    - *Example*: `products.js` powers the dynamic content of the innovations section.
- `utils.js`: Tailwind class merging and common formatting logic.

### `public/`
- `/images`: Organized by project/product type.
    - `installations/`: Real-world project photos.
    - `products/`: Renders and technical diagrams.
- `UDAY IKSA PVT LTD.pdf`: The official corporate profile.

### `styles/`
- `globals.css`: Contains custom variables, `@font-face` declarations, and the `brand-gradient` utility classes.
