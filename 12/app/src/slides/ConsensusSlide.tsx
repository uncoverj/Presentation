import { motion } from 'framer-motion';
import { SlideWrapper } from '../components/SlideWrapper';
import { TagPill } from '../components/TagPill';
import { useState, useEffect } from 'react';

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

const steps = [
  { num: '1', icon: '📡', label: 'BROADCAST', sub: 'signed tx', color: '#534AB7', bg: 'rgba(83,74,183,0.15)' },
  { num: '2', icon: '🔑', label: 'VERIFY SIG', sub: 'ECDSA check', color: '#7F77DD', bg: 'rgba(127,119,221,0.15)' },
  { num: '3', icon: '⛏️', label: 'CONSENSUS', sub: 'PoW / PoS', color: '#EF9F27', bg: 'rgba(239,159,39,0.15)' },
  { num: '4', icon: '#️⃣', label: 'SHA-256', sub: 'block sealed', color: '#1D9E75', bg: 'rgba(29,158,117,0.15)' },
  { num: '5', icon: '✅', label: 'PERMANENT', sub: 'immutable', color: '#1D9E75', bg: 'rgba(29,158,117,0.2)' },
];

export function ConsensusSlide() {
  const [hashText, setHashText] = useState('');
  const fullHash = '000000000000a3f9e2b1c047d81a4b2c9e7f3d6a8b1c0e4f7a2b5c8d9e1f2a4b6';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullHash.length) {
        setHashText(fullHash.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <SlideWrapper backgroundImage="/consensus.jpg" particleVariant="amber">
      <div className="flex flex-col h-full px-10 py-12 pb-24">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-6"
        >
          <motion.div variants={itemVariants}>
            <TagPill delay={0.2}>04 · Process</TagPill>
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-medium mt-4"
          >
            <span className="text-white">How </span>
            <span className="text-neon-purple italic">validation</span>
            <span className="text-white"> works</span>
          </motion.h2>
        </motion.div>

        {/* 5-step flow */}
        <div className="flex-1 flex flex-col justify-center gap-6">
          <div className="flex items-center justify-center gap-2 md:gap-4 flex-wrap">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: -20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.3 + i * 0.2,
                  ease: "easeOut",
                }}
                className="relative flex items-center"
              >
                {/* Arrow between steps */}
                {i > 0 && (
                  <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{ duration: 0.3, delay: 0.4 + i * 0.2 }}
                    className="hidden md:block absolute -left-4 top-1/2 -translate-y-1/2 w-4 h-0.5 origin-right"
                    style={{ backgroundColor: '#534AB7' }}
                  >
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-l-4 border-l-electric-indigo border-t-2 border-b-2 border-t-transparent border-b-transparent" />
                  </motion.div>
                )}

                <motion.div
                  whileHover={{ y: -6, boxShadow: `0 10px 30px ${step.color}30` }}
                  className="flex flex-col items-center gap-2 px-4 py-4 md:px-6 md:py-5 rounded-xl border backdrop-blur-sm min-w-[90px] md:min-w-[110px]"
                  style={{
                    backgroundColor: step.bg,
                    borderColor: `${step.color}44`,
                  }}
                >
                  {/* Number circle */}
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{
                      backgroundColor: `${step.color}22`,
                      color: step.color,
                      border: `1px solid ${step.color}66`,
                    }}
                  >
                    {step.num}
                  </div>

                  <span className="text-2xl">{step.icon}</span>
                  <span className="text-[10px] md:text-xs tracking-wider" style={{ color: step.color }}>
                    {step.label}
                  </span>
                  <span className="text-[8px] md:text-[9px] font-mono text-muted-blue">
                    {step.sub}
                  </span>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Hash Visualizer */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.7 }}
            className="mt-4 mx-auto w-full max-w-2xl"
          >
            <div className="glass-card p-6">
              {/* Input */}
              <div className="text-center mb-4">
                <span className="text-[10px] font-mono tracking-widest text-muted-blue uppercase">
                  Input Data
                </span>
                <div className="mt-2 px-4 py-2 rounded-lg bg-electric-indigo/10 border border-electric-indigo/20">
                  <span className="text-xs font-mono text-soft-lavender">
                    Alice sends 2.5 BTC to Bob · nonce=82947
                  </span>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex flex-col items-center my-3">
                <motion.div
                  animate={{ y: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-electric-indigo text-lg"
                >
                  ▼
                </motion.div>
                <span className="text-xs font-mono text-electric-indigo tracking-wider">
                  SHA-256
                </span>
              </div>

              {/* Output */}
              <div className="text-center">
                <span className="text-[10px] font-mono tracking-widest text-muted-blue uppercase">
                  Output Hash (256 bits)
                </span>
                <div className="mt-2 px-4 py-2 rounded-lg bg-cyber-teal/10 border border-cyber-teal/20">
                  <span className="text-xs font-mono text-cyber-teal break-all">
                    {hashText}
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.5, repeat: Infinity }}
                    >
                      |
                    </motion.span>
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bottom note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 1.5 }}
            className="text-center text-xs font-mono text-crimson-alert mt-2"
          >
            change 1 bit → hash changes completely → chain breaks
          </motion.p>
        </div>
      </div>
    </SlideWrapper>
  );
}
