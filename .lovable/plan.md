
# AI Design Agency Landing Page

## Summary
Build a premium dark-themed single-page landing page for an AI-powered web design agency with liquid glass effects, cinematic video backgrounds, and editorial typography.

## Plan

### 1. Setup foundations
- Install `motion` (framer-motion) and `hls.js` dependencies
- Add Google Fonts link (Instrument Serif + Barlow) to `index.html`
- Update `tailwind.config.ts` with `font-heading` and `font-body` font families
- Replace CSS custom properties in `index.css` with the new color theme
- Add `.liquid-glass` and `.liquid-glass-strong` utility classes to `index.css`
- Download the two feature GIFs to `src/assets/` and create a placeholder logo icon

### 2. Build reusable components
- **BlurText** — word-by-word blur/fade/translate animation triggered by IntersectionObserver
- **HlsVideo** — video component that uses hls.js for Mux HLS streams with autoplay/loop/muted
- **SectionBadge** — reusable liquid-glass pill badge for section labels
- **SectionHeading** — reusable heading with consistent typography

### 3. Build page sections (top to bottom)
- **Navbar** — fixed floating nav with logo, liquid-glass pill nav links, and "Get Started" button
- **Hero** — 1000px tall section with CloudFront MP4 video background, BlurText heading, blur-in subtext and CTA buttons, partner logos bar, gradient overlays
- **StartSection** ("How It Works") — HLS video background, badge, heading, subtext, CTA
- **FeaturesChess** — alternating text/GIF rows with liquid-glass image containers
- **FeaturesGrid** — 4-column card grid (Zap, Palette, BarChart3, Shield icons) with liquid-glass cards
- **Stats** — desaturated HLS video background, liquid-glass card with 4 stat columns
- **Testimonials** — 3-column grid of liquid-glass quote cards
- **CTA + Footer** — HLS video background, heading, dual CTA buttons, footer links

### 4. Animations
- BlurText word-by-word stagger on hero heading
- Blur-in transitions on hero subtext and CTA (staggered delays)
- All video sections with gradient fade overlays (top/bottom)

All sections composed into the Index page as a single scrollable layout.
