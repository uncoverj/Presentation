import { motion } from 'framer-motion';
import { ParticleBackground } from './ParticleBackground';

interface SlideWrapperProps {
  children: React.ReactNode;
  backgroundImage: string;
  particleVariant?: 'default' | 'gold' | 'cyan' | 'network' | 'amber' | 'multi' | 'aurora';
}

export function SlideWrapper({ children, backgroundImage, particleVariant = 'default' }: SlideWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="absolute inset-0 w-full h-full overflow-hidden"
    >
      {/* Background image with Ken Burns effect */}
      <motion.div
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: 'easeOut' }}
        className="absolute inset-0 z-0"
      >
        <img
          src={backgroundImage}
          alt=""
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-overlay" />
        <div className="absolute inset-0 bg-gradient-to-r from-deep-space/60 via-transparent to-deep-space/40" />
      </motion.div>

      {/* Particle overlay */}
      <ParticleBackground variant={particleVariant} />

      {/* Content */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </motion.div>
  );
}
