# Design System: Premium Industrial Aesthetic

This document defines the visual rules and styling tokens used throughout the platform.

## Color Palette
| Token | HEX / Value | Purpose |
| :--- | :--- | :--- |
| **Slate-950** | `#020617` | Primary Background (Dark). |
| **Brand-Orange** | `#f97316` | Main brand color for CTA and accents. |
| **Brand-Red** | `#dc2626` | Secondary accent for technical warnings/highlights. |
| **Brand-Gradient** | `from-orange to-red`| Used for major headings and primary buttons. |

## Typography
- **Headings**: `font-black`, `uppercase`, `tracking-tighter`.
- **Labels**: `text-[9px]`, `font-black`, `uppercase`, `tracking-[0.3em]`.
- **Body**: `font-medium`, `text-gray-400`, `leading-relaxed`.

### Font Weights
We use extreme weights to create a high-contrast hierarchy:
- **900 (Black)**: For all major brand messaging.
- **500 (Medium)**: For technical descriptions.

## Components & Effects

### 1. Glassmorphism
Used for navigation bars and overlay cards.
- **Styling**: `bg-white/5`, `backdrop-blur-md`, `border-white/10`.

### 2. Technical Shadows
Double-layered shadows to provide depth on dark backgrounds.
- **Example**: `shadow-2xl shadow-brand-orange-500/10`.

### 3. Motion System (`Framer Motion`)
- **Entrance**: `initial={{ opacity: 0, y: 20 }}`.
- **Transitions**: Smooth duration (0.5s - 0.8s) with ease-out curves.
- **Hover**: Subtle scaling (`scale-105`) or color shifts.

## Section Rules
- **Paddings**: Standardized at `py-24` or `py-32` for desktop.
- **Grids**: Use `gap-6` or `gap-8` for technical data tables.
- **Borders**: Thin `border-white/5` used for section separators to maintain a clean "infinite" scroll feel.
