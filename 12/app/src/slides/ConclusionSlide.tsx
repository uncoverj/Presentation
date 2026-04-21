import { motion } from 'framer-motion';
import { SlideWrapper } from '../components/SlideWrapper';
import { TagPill } from '../components/TagPill';
import { Link2, Globe, Lock } from 'lucide-react';

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
    color: '#534AB7',
    bg: 'rgba(83,74,183,0.12)',
  },
  {
    icon: Globe,
    label: 'Decentralized',
    sub: 'No single failure',
    color: '#1D9E75',
    bg: 'rgba(29,158,117,0.12)',
  },
  {
    icon: Lock,
    label: 'Cryptographic',
    sub: 'ECDSA · ZKP',
    color: '#EF9F27',
    bg: 'rgba(239,159,39,0.12)',
  },
];

export function ConclusionSlide() {
  return (
    <SlideWrapper backgroundImage="/network-crypto.jpg" particleVariant="multi">
      <div className="flex flex-col h-full px-10 py-12 pb-24">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-8 text-center"
        >
          <motion.div variants={itemVariants} className="flex justify-center">
            <TagPill delay={0.2}>Conclusion</TagPill>
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-medium mt-4"
          >
            <span className="text-neon-purple italic">Key</span>{' '}
            <span className="text-white">takeaways</span>
          </motion.h2>
        </motion.div>

        {/* Three takeaway cards */}
        <div className="flex-1 flex items-center justify-center">
          <div className="flex flex-col md:flex-row gap-6 max-w-4xl w-full">
            {takeaways.map((card, i) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 0.4 + i * 0.2,
                  type: 'spring',
                  stiffness: 150,
                  damping: 15,
                }}
                whileHover={{
                  y: -8,
                  boxShadow: `0 20px 40px ${card.color}30`,
                }}
                className="flex-1 glass-card p-8 flex flex-col items-center text-center gap-4 cursor-pointer"
                style={{ borderColor: `${card.color}30` }}
              >
                {/* Icon circle */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-20 h-20 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: card.bg }}
                >
                  <card.icon className="w-10 h-10" style={{ color: card.color }} />
                </motion.div>

                {/* Label */}
                <span className="text-xl font-medium text-white">
                  {card.label}
                </span>

                {/* Sub */}
                <span className="text-sm font-mono" style={{ color: card.color }}>
                  {card.sub}
                </span>

                {/* Glow pulse */}
                <motion.div
                  animate={{
                    boxShadow: [
                      `0 0 20px ${card.color}10`,
                      `0 0 40px ${card.color}30`,
                      `0 0 20px ${card.color}10`,
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                />
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
          <div className="relative w-64 h-px bg-white/10">
            <motion.div
              animate={{ left: ['0%', '100%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-electric-indigo"
            />
          </div>
        </motion.div>

        {/* Thank you */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-4xl md:text-5xl font-medium text-white mb-2">
            Thank you
          </h3>
          <p className="text-lg text-muted-blue">
            Questions welcome
          </p>
        </motion.div>

        {/* Author cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="flex justify-center gap-4 mt-6"
        >
          <div className="flex items-center gap-3 bg-electric-indigo/10 border border-electric-indigo/20 rounded-xl px-4 py-2">
            <div className="w-8 h-8 rounded-full bg-electric-indigo flex items-center justify-center text-white text-xs font-bold">
              TC
            </div>
            <span className="text-sm text-soft-lavender">Timur Chelebiyev</span>
          </div>
          <div className="flex items-center gap-3 bg-cyber-teal/10 border border-cyber-teal/20 rounded-xl px-4 py-2">
            <div className="w-8 h-8 rounded-full bg-cyber-teal flex items-center justify-center text-white text-xs font-bold">
              OZ
            </div>
            <span className="text-sm text-soft-lavender">Oybek Zoyirov</span>
          </div>
        </motion.div>

        {/* References */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 1.6 }}
          className="text-center text-[9px] font-mono text-muted-blue mt-4"
        >
          Nakamoto 2008 · Buterin 2014 · Hyperledger 2023 · NIST PQC 2024
        </motion.p>
      </div>
    </SlideWrapper>
  );
}
