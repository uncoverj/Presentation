import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface NavigationProps {
  total: number;
  current: number;
  onNavigate: (index: number) => void;
}

export function Navigation({ total, current, onNavigate }: NavigationProps) {
  const progress = ((current + 1) / total) * 100;

  return (
    <>
      {/* Top progress bar */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="fixed top-0 left-0 right-0 z-50 h-[2px] bg-white/5 origin-left"
      >
        <motion.div
          className="h-full origin-left"
          style={{
            background: 'linear-gradient(90deg, #7F77DD 0%, #1D9E75 50%, #EF9F27 100%)',
            boxShadow: '0 0 10px rgba(127,119,221,0.6)',
          }}
          animate={{ width: `${progress}%` }}
          transition={{ type: 'spring', stiffness: 80, damping: 20 }}
        />
      </motion.div>

      {/* Top-right slide counter */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="fixed top-5 right-5 z-50 flex items-center gap-2 font-mono text-[10px] tracking-[0.25em] text-soft-lavender/70"
      >
        <span className="text-white font-bold">
          {String(current + 1).padStart(2, '0')}
        </span>
        <span className="text-white/30">/</span>
        <span>{String(total).padStart(2, '0')}</span>
      </motion.div>

      {/* Top-left brand tick */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="fixed top-5 left-6 z-50 flex items-center gap-2"
      >
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-1.5 h-1.5 rounded-full bg-cyber-teal"
        />
        <span className="font-mono text-[10px] tracking-[0.3em] text-soft-lavender/60 uppercase">
          COSC 2670 · Live
        </span>
      </motion.div>

      {/* Arrow buttons */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: current > 0 ? 1 : 0, x: 0 }}
        transition={{ duration: 0.4 }}
        onClick={() => onNavigate(current - 1)}
        disabled={current === 0}
        whileHover={{ scale: 1.1, x: -4 }}
        whileTap={{ scale: 0.9 }}
        className="fixed left-5 top-1/2 -translate-y-1/2 z-50 w-10 h-10 rounded-full glass-card flex items-center justify-center text-soft-lavender hover:text-white hover:border-electric-indigo/60 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </motion.button>

      <motion.button
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: current < total - 1 ? 1 : 0, x: 0 }}
        transition={{ duration: 0.4 }}
        onClick={() => onNavigate(current + 1)}
        disabled={current === total - 1}
        whileHover={{ scale: 1.1, x: 4 }}
        whileTap={{ scale: 0.9 }}
        className="fixed right-5 top-1/2 -translate-y-1/2 z-50 w-10 h-10 rounded-full glass-card flex items-center justify-center text-soft-lavender hover:text-white hover:border-electric-indigo/60 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5" />
      </motion.button>

      {/* Bottom dot navigation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2.5 px-4 py-2.5 rounded-full glass-card"
      >
        {Array.from({ length: total }).map((_, i) => (
          <motion.button
            key={i}
            onClick={() => onNavigate(i)}
            className="relative h-2 rounded-full cursor-pointer transition-all duration-300"
            style={{
              width: current === i ? 28 : 8,
              backgroundColor:
                current === i ? '#7F77DD' : 'rgba(175, 169, 236, 0.25)',
              boxShadow: current === i ? '0 0 14px rgba(127,119,221,0.7)' : 'none',
            }}
            whileHover={{ scale: 1.25, backgroundColor: 'rgba(175, 169, 236, 0.5)' }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </motion.div>

      {/* Keyboard hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="fixed bottom-6 right-6 z-50 hidden md:flex items-center gap-1.5 font-mono text-[9px] tracking-widest text-soft-lavender/60 uppercase"
      >
        <kbd className="px-1.5 py-0.5 border border-white/10 rounded text-[9px]">←</kbd>
        <kbd className="px-1.5 py-0.5 border border-white/10 rounded text-[9px]">→</kbd>
        <span className="ml-1">Navigate</span>
      </motion.div>
    </>
  );
}
