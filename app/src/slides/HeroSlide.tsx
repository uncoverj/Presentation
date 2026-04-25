import { motion } from 'framer-motion';
import { SlideWrapper } from '../components/SlideWrapper';
import { TagPill } from '../components/TagPill';
import { Sparkles } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.35,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const headlineWord = {
  hidden: { opacity: 0, y: 80, rotateX: -60, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    filter: 'blur(0px)',
    transition: { duration: 1.0, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function HeroSlide() {
  return (
    <SlideWrapper
      slideId="hero"
      particleVariant="default"
      accent="#7F77DD"
    >
      <div className="flex flex-col justify-between h-full px-12 py-16 pb-28">
        {/* Floating block symbols */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute font-mono text-[10px] text-electric-indigo/40"
              style={{
                top: `${10 + ((i * 17) % 70)}%`,
                left: `${5 + ((i * 23) % 85)}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 6 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.4,
                ease: 'easeInOut',
              }}
            >
              0x{Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0')}
            </motion.div>
          ))}
        </div>

        {/* Top section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6 relative z-10"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-3">
            <TagPill delay={0.3}>COSC 2670 · Network Security</TagPill>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-gold/80" />
            </motion.div>
          </motion.div>

          {/* Headline with per-word reveal */}
          <motion.h1
            variants={containerVariants}
            className="text-6xl md:text-7xl lg:text-8xl font-medium leading-[1.02] max-w-3xl perspective-1000"
            style={{ fontFamily: "'Space Grotesk', 'Inter', sans-serif" }}
          >
            <motion.span variants={headlineWord} className="inline-block shimmer-text pr-3">
              Blockchain
            </motion.span>
            <br />
            <motion.span variants={headlineWord} className="inline-block text-white/90 pr-3">
              for
            </motion.span>
            <motion.span
              variants={headlineWord}
              className="inline-block italic text-gradient-aurora pr-3"
            >
              Secure
            </motion.span>
            <motion.span
              variants={headlineWord}
              className="inline-block italic text-gradient-aurora"
            >
              Networks
            </motion.span>
          </motion.h1>

          <motion.div variants={itemVariants} className="flex items-center gap-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-electric-indigo to-transparent" />
            <p className="text-lg md:text-xl text-soft-lavender/80 tracking-wide max-w-md">
              Cryptographic trust · No central authority
            </p>
          </motion.div>

          {/* Stat strip */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-6 md:gap-10 mt-2 flex-wrap"
          >
            {[
              { v: '2008', l: 'Bitcoin whitepaper' },
              { v: '$2.3T', l: 'Market cap' },
              { v: '∞', l: 'Possibilities' },
            ].map((s, i) => (
              <motion.div
                key={s.l}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 + i * 0.15, duration: 0.6 }}
                className="flex flex-col"
              >
                <span className="font-mono text-2xl md:text-3xl text-white font-bold">
                  {s.v}
                </span>
                <span className="font-mono text-[10px] tracking-[0.2em] text-muted-blue uppercase mt-1">
                  {s.l}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Bottom section - Author cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex justify-between items-end gap-4 flex-wrap relative z-10"
        >
          <div className="flex gap-4 flex-wrap">
            <motion.div
              variants={itemVariants}
              whileHover={{
                scale: 1.04,
                y: -4,
                boxShadow: '0 15px 35px rgba(83, 74, 183, 0.35)',
              }}
              className="flex items-center gap-3 glass-card px-5 py-3 cursor-pointer"
              style={{ borderColor: 'rgba(83, 74, 183, 0.4)' }}
            >
              <motion.div
                className="w-11 h-11 rounded-full flex items-center justify-center text-white text-sm font-bold relative"
                style={{ background: 'linear-gradient(135deg, #7F77DD, #534AB7)' }}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                TC
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-neon-purple/50"
                  animate={{ scale: [1, 1.3, 1], opacity: [0.6, 0, 0.6] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                />
              </motion.div>
              <div className="flex flex-col">
                <span className="text-white font-medium text-sm">Timur Chelebiyev</span>
                <span className="text-[10px] font-mono text-soft-lavender/60 tracking-wider">
                  Author · s4074932
                </span>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{
                scale: 1.04,
                y: -4,
                boxShadow: '0 15px 35px rgba(29, 158, 117, 0.35)',
              }}
              className="flex items-center gap-3 glass-card px-5 py-3 cursor-pointer"
              style={{ borderColor: 'rgba(29, 158, 117, 0.4)' }}
            >
              <motion.div
                className="w-11 h-11 rounded-full flex items-center justify-center text-white text-sm font-bold relative"
                style={{ background: 'linear-gradient(135deg, #2ccc95, #1D9E75)' }}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                OZ
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-cyber-teal/50"
                  animate={{ scale: [1, 1.3, 1], opacity: [0.6, 0, 0.6] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 0.7 }}
                />
              </motion.div>
              <div className="flex flex-col">
                <span className="text-white font-medium text-sm">Oybek Zoyirov</span>
                <span className="text-[10px] font-mono text-soft-lavender/60 tracking-wider">
                  Co-author
                </span>
              </div>
            </motion.div>
          </div>

          {/* Scroll / navigate hint */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3 text-soft-lavender/60 font-mono text-xs tracking-[0.25em] uppercase"
          >
            <motion.div
              animate={{ x: [0, 6, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            >
              →
            </motion.div>
            <span>Begin</span>
          </motion.div>
        </motion.div>
      </div>
    </SlideWrapper>
  );
}
