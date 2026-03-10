# Noor Ul Hana Transport LLC Website

## Overview
A premium, cinematic single-page website for Noor Ul Hana Transport LLC, a UAE-based logistics and transportation company. Built with React, Tailwind CSS, and Framer Motion for smooth animations.

## Architecture
- **Frontend**: React + Tailwind CSS + Framer Motion (single-page site)
- **Backend**: Express.js (minimal - serves static content)
- **Styling**: Dark theme with gold/amber accent colors for premium feel

## Structure
- `client/src/pages/home.tsx` - Main single-page component with all sections (Hero, About, Services, Fleet, Why Us, Contact, Footer)
- `client/src/index.css` - Dark theme design tokens
- `client/index.html` - SEO meta tags and Google Fonts (Inter + Playfair Display)

## Design Decisions
- Dark background (220 15% 6%) with warm gold primary (38 75% 55%) for premium cinematic feel
- Font pairing: Inter (sans-serif body) + Playfair Display (serif headings)
- Glass morphism cards with subtle borders
- Scroll-triggered animations via Framer Motion
- Fully responsive with mobile hamburger menu
- No database needed - static content site

## Key Features
- Parallax hero section with scroll effects
- Animated section reveals on scroll
- Contact form (frontend-only)
- Fleet availability status indicators
- Statistics counters
- Mobile-responsive navigation
