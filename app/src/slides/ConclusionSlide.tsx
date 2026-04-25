import { motion } from 'framer-motion';
import { SlideWrapper } from '../components/SlideWrapper';
import { TagPill } from '../components/TagPill';
import { Link2, Globe, Lock, Sparkles } from 'lucide-react';

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

const takeaways = [
  {
    icon: Link2,
    label: 'Immutable',
    sub: 'SHA-256 chaining',
    color: '#7F77DD',
    bg: 'rgba(127,119,221,0.14)',
  },
  {
    icon: Globe,
    label: 'Decentralized',
    sub: 'No single failure',
    color: '#1D9E75',
    bg: 'rgba(29,158,117,0.14)',
  },
  {
    icon: Lock,
    label: 'Cryptographic',
    sub: 'ECDSA · ZKP',
    color: '#EF9F27',
    bg: 'rgba(239,159,39,0.14)',
  },
];

export function ConclusionSlide() {
  return (
    <SlideWrapper
      slideId="conclusion"
      particleVariant="multi"
      accent="#7F77DD"
    >
      <div className="flex flex-col h-full px-10 py-12 pb-24">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-6 text-center"
        >
          <motion.div variants={itemVariants} className="flex justify-center">
            <TagPill delay={0.2}>Conclusion</TagPill>
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-6xl font-medium mt-4"
            style={{ fontFamily: "'Space Grotesk', 'Inter', sans-serif" }}
          >
            <span className="shimmer-text">Key </span>
            <span className="italic text-gradient-aurora">takeaways</span>
          </motion.h2>
        </motion.div>

        {/* Three takeaway cards */}
        <div className="flex-1 flex items-center justify-center">
          <div className="flex flex-col md:flex-row gap-6 max-w-5xl w-full">
            {takeaways.map((card, i) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 40, scale: 0.92, rotateX: -15 }}
                animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.4 + i * 0.15,
                  type: 'spring',
                  stiffness: 140,
                  damping: 16,
                }}
                whileHover={{
                  y: -10,
                  boxShadow: `0 25px 60px ${card.color}40`,
                  borderColor: `${card.color}80`,
                }}
                className="relative flex-1 glass-card p-8 flex flex-col items-center text-center gap-4 cursor-pointer overflow-hidden"
                style={{ borderColor: `${card.color}30` }}
              >
                {/* Animated gradient wash */}
                <motion.div
                  className="absolute inset-0 opacity-0 pointer-events-none"
                  whileHover={{ opacity: 1 }}
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${card.color}25 0%, transparent 60%)`,
                  }}
                />

                {/* Icon circle */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.08 }}
                  transition={{ duration: 0.7 }}
                  className="w-24 h-24 rounded-full flex items-center justify-center relative"
                  style={{ backgroundColor: card.bg, border: `1px solid ${card.color}40` }}
                >
                  <card.icon className="w-11 h-11" style={{ color: card.color }} />
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{ border: `1px solid ${card.color}60` }}
                    animate={{ scale: [1, 1.3, 1], opacity: [0.6, 0, 0.6] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                  />
                </motion.div>

                {/* Label */}
                <span className="text-2xl font-medium text-white">{card.label}</span>

                {/* Sub */}
                <span className="text-sm font-mono tracking-wider" style={{ color: card.color }}>
                  {card.sub}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Divider with traveling dot */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex justify-center my-6"
        >
          <div className="relative w-80 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent">
            <motion.div
              animate={{ left: ['0%', '100%'] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
              className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full"
              style={{
                backgroundColor: '#7F77DD',
                boxShadow: '0 0 20px #7F77DD, 0 0 40px #7F77DD',
              }}
            />
          </div>
        </motion.div>

        {/* Thank you with sparkle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.7 }}
          className="text-center relative"
        >
          <motion.div
            className="absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          >
            <Sparkles className="w-5 h-5 text-amber-gold/70" />
          </motion.div>
          <h3
            className="text-5xl md:text-6xl font-medium mb-2"
            style={{ fontFamily: "'Space Grotesk', 'Inter', sans-serif" }}
          >
            <span className="shimmer-text">Thank you</span>
          </h3>
          <p className="text-lg text-soft-lavender/70 tracking-wide">
            Questions welcome
          </p>
        </motion.div>

        {/* Author cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="flex justify-center gap-4 mt-6 flex-wrap"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -3 }}
            className="flex items-center gap-3 glass-card px-5 py-2.5"
            style={{ borderColor: 'rgba(83, 74, 183, 0.4)' }}
          >
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold"
              style={{ background: 'linear-gradient(135deg, #7F77DD, #534AB7)' }}
            >
              TC
            </div>
            <span className="text-sm text-soft-lavender font-medium">Timur Chelebiyev</span>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, y: -3 }}
            className="flex items-center gap-3 glass-card px-5 py-2.5"
            style={{ borderColor: 'rgba(29, 158, 117, 0.4)' }}
          >
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold"
              style={{ background: 'linear-gradient(135deg, #2ccc95, #1D9E75)' }}
            >
              OZ
            </div>
            <span className="text-sm text-soft-lavender font-medium">Oybek Zoyirov</span>
          </motion.div>
        </motion.div>

        {/* References */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 1.6 }}
          className="text-center text-[10px] font-mono text-muted-blue mt-5 tracking-wider"
        >
          Nakamoto 2008 · Buterin 2014 · Hyperledger 2023 · NIST PQC 2024
        </motion.p>
      </div>
    </SlideWrapper>
  );
}
