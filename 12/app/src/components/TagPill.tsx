import { motion } from 'framer-motion';

interface TagPillProps {
  children: React.ReactNode;
  delay?: number;
}

export function TagPill({ children, delay = 0.3 }: TagPillProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="tag-pill"
    >
      {children}
    </motion.div>
  );
}
