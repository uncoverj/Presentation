import { motion } from 'framer-motion';
import { SlideWrapper } from '../components/SlideWrapper';
import { TagPill } from '../components/TagPill';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function HeroSlide() {
  return (
    <SlideWrapper backgroundImage="/hero-blockchain.jpg" particleVariant="default">
      <div className="flex flex-col justify-between h-full px-10 py-12 pb-24">
        {/* Top section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-4"
        >
          <motion.div variants={itemVariants}>
            <TagPill delay={0.3}>COSC 2670 · Network Security</TagPill>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-medium text-white leading-tight max-w-2xl"
          >
            Blockchain for
            <br />
            <span className="text-neon-purple italic">Secure Networks</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-blue max-w-md"
          >
            Cryptographic trust · No central authority
          </motion.p>
        </motion.div>

        {/* Bottom section - Author cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex gap-4 flex-wrap"
        >
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.03, backgroundColor: 'rgba(255,255,255,0.08)' }}
            className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3 backdrop-blur-sm"
          >
            <div className="w-10 h-10 rounded-full bg-electric-indigo flex items-center justify-center text-white text-sm font-bold">
              TC
            </div>
            <span className="text-white/90 text-sm">Timur Chelebiyev</span>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.03, backgroundColor: 'rgba(255,255,255,0.08)' }}
            className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3 backdrop-blur-sm"
          >
            <div className="w-10 h-10 rounded-full bg-cyber-teal flex items-center justify-center text-white text-sm font-bold">
              OZ
            </div>
            <span className="text-white/90 text-sm">Oybek Zoyirov</span>
          </motion.div>
        </motion.div>
      </div>
    </SlideWrapper>
  );
}
