import { motion } from 'framer-motion';

interface NavigationProps {
  total: number;
  current: number;
  onNavigate: (index: number) => void;
}

export function Navigation({ total, current, onNavigate }: NavigationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2"
    >
      {Array.from({ length: total }).map((_, i) => (
        <motion.button
          key={i}
          onClick={() => onNavigate(i)}
          className="relative h-3 rounded-full transition-all duration-300 cursor-pointer"
          style={{
            width: current === i ? 32 : 12,
            backgroundColor: current === i ? '#534AB7' : 'rgba(83, 74, 183, 0.3)',
          }}
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.9 }}
          aria-label={`Go to slide ${i + 1}`}
        >
          {current === i && (
            <motion.div
              layoutId="activeDot"
              className="absolute inset-0 rounded-full"
              style={{ backgroundColor: '#534AB7' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            />
          )}
        </motion.button>
      ))}
    </motion.div>
  );
}
