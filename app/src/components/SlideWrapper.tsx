import { motion } from 'framer-motion';
import { ParticleBackground } from './ParticleBackground';
import '../styles/slide-backgrounds.css';

interface SlideWrapperProps {
  children: React.ReactNode;
  slideId: 'hero' | 'architecture' | 'cryptography' | 'network' | 'consensus' | 'applications' | 'trilemma' | 'future' | 'conclusion';
  particleVariant?: 'default' | 'gold' | 'cyan' | 'network' | 'amber' | 'multi' | 'aurora';
  accent?: string;
}

const slideBackgrounds: Record<string, string> = {
  hero: 'bg-hero',
  architecture: 'bg-architecture',
  cryptography: 'bg-cryptography',
  network: 'bg-network',
  consensus: 'bg-consensus',
  applications: 'bg-applications',
  trilemma: 'bg-trilemma',
  future: 'bg-future',
  conclusion: 'bg-conclusion',
};

export function SlideWrapper({
  children,
  slideId,
  particleVariant = 'default',
  accent = '#7F77DD',
}: SlideWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.015, filter: 'blur(6px)' }}
      animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
      exit={{ opacity: 0, scale: 0.985, filter: 'blur(6px)' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="absolute inset-0 w-full h-full overflow-hidden"
    >
      {/* CSS-based animated background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className={`absolute inset-0 z-0 ${slideBackgrounds[slideId] || 'bg-hero'}`}
      >
        <div className="absolute inset-0 bg-overlay" />
        <div className="absolute inset-0 bg-gradient-to-r from-deep-space/70 via-transparent to-deep-space/50" />
      </motion.div>

      {/* Animated mesh gradient overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="absolute inset-0 z-[1] mesh-animated pointer-events-none"
      />

      {/* Dynamic color accent gradient */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 30% 20%, ${accent}15 0%, transparent 50%),
                      radial-gradient(ellipse at 70% 80%, ${accent}10 0%, transparent 50%)`,
        }}
      />

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 z-[1] grid-layer" />

      {/* Particle overlay */}
      <ParticleBackground variant={particleVariant} />

      {/* Noise texture */}
      <div className="absolute inset-0 z-[2] noise-layer" />

      {/* Color wash accent */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none opacity-30 mix-blend-screen"
        style={{
          background: `radial-gradient(circle at 85% 15%, ${accent}22 0%, transparent 50%)`,
        }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 z-[3] vignette" />

      {/* Animated scan line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute inset-0 z-[3] pointer-events-none overflow-hidden"
      >
        <div className="scan-line" />
      </motion.div>

      {/* Entrance scan line */}
      <motion.div
        className="absolute left-0 right-0 z-[4] h-[2px] pointer-events-none"
        style={{
          background: `linear-gradient(90deg, transparent 0%, ${accent}88 50%, transparent 100%)`,
          boxShadow: `0 0 20px ${accent}`,
        }}
        initial={{ top: 0, opacity: 0 }}
        animate={{ top: '100%', opacity: [0, 1, 1, 0] }}
        transition={{ duration: 1.4, ease: 'easeOut', times: [0, 0.1, 0.9, 1] }}
      />

      {/* Corner HUD frames */}
      <div className="hud-frame tl z-[4]" />
      <div className="hud-frame tr z-[4]" />
      <div className="hud-frame bl z-[4]" />
      <div className="hud-frame br z-[4]" />

      {/* Content */}
      <div className="relative z-10 w-full h-full">{children}</div>
    </motion.div>
  );
}
