# Blockchain Presentation — Technical Specification

## Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| react | ^18.3.0 | UI framework |
| react-dom | ^18.3.0 | DOM renderer |
| typescript | ^5.6.0 | Type safety |
| vite | ^6.0.0 | Build tool |
| tailwindcss | ^3.4.0 | Utility CSS |
| @tailwindcss/typography | ^0.5.0 | Typography plugin |
| framer-motion | ^11.15.0 | React animations, gestures, AnimatePresence |
| @tsparticles/react | ^3.0.0 | Particle background system |
| @tsparticles/slim | ^3.0.0 | Slim particle preset (reduced bundle) |
| lucide-react | ^0.460.0 | Icon library |
| clsx | ^2.1.0 | Conditional class names |
| tailwind-merge | ^2.6.0 | Tailwind class deduplication |

> Note: three.js was considered for 3D chain but removed — CSS 3D transforms + SVG provide sufficient visual impact with far less bundle weight.

## Component Inventory

### Layout
| Component | Source | Notes |
|-----------|--------|-------|
| SlideDeck | Custom | Main container, manages slide state, keyboard/wheel listeners |
| Navigation | Custom | Dot navigation bar, fixed bottom-center |
| ParticleCanvas | Custom (tsParticles wrapper) | Per-slide particle config, sits between bg and content |

### Slides (9 total, all custom)
| Slide | Key Visual Complexity |
|-------|----------------------|
| HeroSlide | Ken Burns bg, staggered text reveal |
| ArchitectureSlide | 3D CSS chain cubes, hash labels |
| CryptographySlide | Rotating lock SVG, scrolling hash waterfalls |
| NetworkSlide | SVG network graph, animateMotion packets |
| ConsensusSlide | 5-step flow, hash visualizer with typewriter |
| ApplicationsSlide | 4 glassmorphism cards, countUp stats |
| TrilemmaSlide | SVG triangle draw-on, vertex pop-in |
| FutureSlide | Timeline axis draw-on, milestone markers |
| ConclusionSlide | 3 takeaway cards, thank you |

### Reusable Components
| Component | Source | Used By |
|-----------|--------|---------|
| TagPill | Custom | All slides |
| GlassCard | Custom | Slides 6, 9 |
| StatCounter | Custom (framer-motion useMotionValue) | Slides 6 |
| HashWaterfall | Custom (CSS animation) | Slide 3 |
| StepFlow | Custom | Slide 5 |
| Timeline | Custom | Slide 8 |

### Hooks
| Hook | Purpose |
|------|---------|
| useSlideNavigation | Keyboard arrows, wheel, dot click handling |
| useKenBurns | Background scale animation trigger |

## Animation Implementation

| Animation | Library | Approach | Complexity |
|-----------|---------|----------|------------|
| Slide transitions | framer-motion AnimatePresence | fade + translateY variants, mode="wait" | Low |
| Staggered text reveal | framer-motion | motion.div with staggerChildren, delayChildren | Low |
| Ken Burns background | CSS + framer-motion | animate scale 1.05→1 over 8s on mount | Low |
| Particle backgrounds | @tsparticles/react | Per-slide config objects, different colors/drift | Medium |
| 3D chain cubes | CSS 3D transforms | perspective, rotateY animation, pseudo-element beams | Medium |
| Holographic lock | CSS + SVG | rotateY 3D, orbiting text paths with animateMotion | Medium |
| Hash waterfalls | CSS @keyframes | translateY scroll, duplicate content for seamless loop | Low |
| Network graph | SVG + CSS | animateMotion for packets, CSS pulse for nodes | Medium |
| Triangle draw-on | framer-motion | pathLength 0→1, staggered vertex scale with spring | Medium |
| Timeline draw-on | framer-motion | pathLength animation, staggered marker drop | Medium |
| CountUp stats | framer-motion useMotionValue | animate from 0 to target, useTransform for display | Low |
| Hash typewriter | framer-motion | character-by-character reveal with stagger delay | Low |
| Card spring entrance | framer-motion | spring transition type, staggered | Low |
| Hover effects | framer-motion whileHover | scale, translateY, boxShadow transitions | Low |
| Traveling light dots | SVG animateMotion | infinite loop along path elements | Low |
| Glassmorphism | CSS | backdrop-filter blur, rgba backgrounds | Low |

## State & Logic

### Slide State
- `currentSlide: number` (0–8)
- Navigation: arrow keys, wheel delta, dot click
- AnimatePresence handles enter/exit transitions
- Each slide remounts on enter (key={currentSlide}) to restart animations

### Particle Config
- 9 per-slide config objects passed to ParticleCanvas
- Config differences: color array, drift direction, particle count, line color

### Performance Notes
- tsParticles uses "slim" preset to minimize bundle
- Background images: lazy loaded, will-change: transform for Ken Burns
- SVG animations use CSS where possible (GPU-accelerated)
- Particle count reduced on mobile via matchMedia

## Build Notes
- Vite for fast dev and optimized production build
- Images in public/ folder (no import needed)
- Tailwind config extended with custom color tokens
- Global CSS for keyframe animations (waterfalls, Ken Burns)
