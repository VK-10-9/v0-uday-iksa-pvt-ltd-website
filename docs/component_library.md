# Component Library

Documentation of the core UI and layout components used in the project.

## Layout Components

### `Navbar` (`components/navbar/`)
- **`DesktopNav`**: Dual-layer menu with "Glassmorphism" effects. Supports brand-specific color themes for product dropdowns.
- **`MobileMenu`**: Responsive slide-out menu with smooth `framer-motion` transitions and nested category navigation.

### `Footer` (`components/footer.jsx`)
- Multi-column layout containing Corporate info, Product index, Social links, and Legal compliance bar.
- Features an "Ambient Atmosphere" glow effect.

## UI Elements (`components/ui/`)

### `Button`
- Standard industrial button with `framer-motion` hover states. 
- Props: `variant` (outline, ghost, link), `asChild` (for Link nesting), `className`.

### `HoverButton`
- A premium variant used for primary CTAs. Feature a 3D-like hover lift and brand-gradient backgrounds.

### `404-error-page` (`RetroTvError`)
- A specialized component used for the 404 handler.
- Features CRT-style scanline animations and glitch effects.

## Specific Section Components

### `CredentialStrip` (`components/product/`)
- A horizontal marquee-style component used on product pages to show corporate certifications and trust markers (CE, ISO, Made in India).

### `PatentedBanner` (`components/home/`)
- A high-impact banner highlighting UDAY IKSA's patents and "Energy Revolution" branding.
