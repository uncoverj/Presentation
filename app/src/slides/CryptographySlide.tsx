import { motion } from 'framer-motion';
import { SlideWrapper } from '../components/SlideWrapper';
import { TagPill } from '../components/TagPill';
import { Lock, Fingerprint, TreeDeciduous } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const leftHashes = [
  'SHA-256', 'a3f9e2b1c047d8...', '4d8f1a...', 'ECDSA verify',
  'pub_key: 04ab...', 'merkle_root', 'sig valid ✓', 'nonce: 29847',
  'PoW solved ✓', 'block_hash', '000000a4f...',
];

const rightHashes = [
  'ZKP verify', 'proof: π(x)', 'Merkle path', 'hash[0]: b9c3',
  'hash[1]: e7f1', 'root: 4a2d', 'tx valid ✓', 'PBFT round 3',
  '2/3 agree ✓', 'finalized',
];

const cryptoPills = [
  { icon: Fingerprint, label: 'SHA-256', sub: 'Hashing', color: '#534AB7', bg: 'rgba(83,74,183,0.15)' },
  { icon: Lock, label: 'ECDSA', sub: 'Signatures', color: '#1D9E75', bg: 'rgba(29,158,117,0.15)' },
  { icon: TreeDeciduous, label: 'MERKLE', sub: 'Tree proofs', color: '#EF9F27', bg: 'rgba(239,159,39,0.15)' },
];

export function CryptographySlide() {
  return (
    <SlideWrapper
      slideId="cryptography"
      particleVariant="cyan"
      accent="#1D9E75"
    >
      <div className="flex flex-col h-full px-12 py-14 pb-24">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-6"
        >
          <motion.div variants={itemVariants}>
            <TagPill delay={0.2}>02 · Cryptography</TagPill>
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-6xl font-medium mt-4"
            style={{ fontFamily: "'Space Grotesk', 'Inter', sans-serif" }}
          >
            <span className="italic text-gradient-aurora">Tamper-proof </span>
            <span className="shimmer-text">by math</span>
          </motion.h2>
        </motion.div>

        {/* Main content area */}
        <div className="flex-1 flex items-center justify-between gap-4">
          {/* Left hash waterfall */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 0.4, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="hidden md:flex flex-col gap-1 overflow-hidden h-64 w-40"
          >
            <div className="hash-waterfall flex flex-col gap-1">
              {[...leftHashes, ...leftHashes].map((hash, i) => (
                <span key={i} className="text-[10px] font-mono text-electric-indigo whitespace-nowrap">
                  {hash}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Central lock animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="relative flex-1 flex items-center justify-center"
          >
            {/* Rotating rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute w-48 h-48 md:w-64 md:h-64"
            >
              <svg viewBox="0 0 200 200" className="w-full h-full opacity-40">
                <circle cx="100" cy="100" r="80" fill="none" stroke="#534AB7" strokeWidth="0.5" strokeDasharray="5,5" />
                <circle cx="100" cy="100" r="65" fill="none" stroke="#7F77DD" strokeWidth="0.5" strokeDasharray="3,8" />
                <circle cx="100" cy="100" r="50" fill="none" stroke="#1D9E75" strokeWidth="0.5" strokeDasharray="2,6" />
              </svg>
            </motion.div>

            {/* Inner ring - opposite rotation */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              className="absolute w-36 h-36 md:w-48 md:h-48"
            >
              <svg viewBox="0 0 200 200" className="w-full h-full opacity-30">
                <circle cx="100" cy="100" r="70" fill="none" stroke="#534AB7" strokeWidth="0.3" strokeDasharray="8,4" />
              </svg>
            </motion.div>

            {/* Central lock icon */}
            <motion.div
              animate={{
                scale: [1, 1.03, 1],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="relative z-10 w-24 h-24 md:w-32 md:h-32 rounded-full flex items-center justify-center"
              style={{
                background: 'radial-gradient(circle, rgba(83,74,183,0.3) 0%, rgba(83,74,183,0.1) 70%, transparent 100%)',
              }}
            >
              <Lock className="w-12 h-12 md:w-16 md:h-16 text-neon-purple" strokeWidth={1.5} />
              {/* Glow pulse */}
              <motion.div
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.4, 0, 0.4],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-0 rounded-full border border-electric-indigo/30"
              />
            </motion.div>

            {/* Spark particles from keyhole */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-neon-purple rounded-full"
                style={{ top: '50%', left: '50%' }}
                animate={{
                  x: [0, (Math.random() - 0.5) * 100],
                  y: [0, (Math.random() - 0.5) * 100],
                  opacity: [1, 0],
                  scale: [1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.4,
                  ease: 'easeOut',
                }}
              />
            ))}
          </motion.div>

          {/* Right hash waterfall */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 0.4, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="hidden md:flex flex-col gap-1 overflow-hidden h-64 w-40"
          >
            <div className="hash-waterfall flex flex-col gap-1" style={{ animationDirection: 'reverse' }}>
              {[...rightHashes, ...rightHashes].map((hash, i) => (
                <span key={i} className="text-[10px] font-mono text-cyber-teal whitespace-nowrap">
                  {hash}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom crypto pills */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex justify-center gap-4 md:gap-8 mt-6"
        >
          {cryptoPills.map((pill) => (
            <motion.div
              key={pill.label}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -4 }}
              className="flex flex-col items-center gap-2 px-6 py-4 rounded-xl border backdrop-blur-sm cursor-pointer"
              style={{
                backgroundColor: pill.bg,
                borderColor: `${pill.color}44`,
              }}
            >
              <pill.icon className="w-6 h-6" style={{ color: pill.color }} />
              <span className="text-sm font-mono tracking-wider" style={{ color: pill.color }}>
                {pill.label}
              </span>
              <span className="text-xs font-mono" style={{ color: pill.color, opacity: 0.7 }}>
                {pill.sub}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SlideWrapper>
  );
}
