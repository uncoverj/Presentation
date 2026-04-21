import { motion } from 'framer-motion';
import { SlideWrapper } from '../components/SlideWrapper';
import { TagPill } from '../components/TagPill';

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

const blocks = [
  { id: 0, label: 'GENESIS', color: '#1D9E75', hash: '0x1a3f...', prev: '0000' },
  { id: 1, label: 'BLOCK #1', color: '#534AB7', hash: '0x7c91...', prev: '0x1a3f' },
  { id: 2, label: 'BLOCK #2', color: '#534AB7', hash: '0xf4e8...', prev: '0x7c91' },
  { id: 3, label: 'BLOCK #3', color: '#534AB7', hash: '0x2b19...', prev: '0xf4e8' },
];

export function ArchitectureSlide() {
  return (
    <SlideWrapper backgroundImage="/blockchain-chain.jpg" particleVariant="gold">
      <div className="flex flex-col h-full px-10 py-12 pb-24">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-8"
        >
          <motion.div variants={itemVariants}>
            <TagPill delay={0.2}>01 · Architecture</TagPill>
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-medium text-white mt-4"
          >
            What is <span className="text-neon-purple italic">Blockchain?</span>
          </motion.h2>
        </motion.div>

        {/* 3D Chain Visualization */}
        <div className="flex-1 flex items-center justify-center">
          <div className="flex items-center gap-2 md:gap-4 perspective-1000">
            {blocks.map((block, i) => (
              <motion.div
                key={block.id}
                initial={{ opacity: 0, y: -30, scale: 0.8, rotateY: -30 }}
                animate={{ opacity: 1, y: 0, scale: 1, rotateY: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.4 + i * 0.25,
                  ease: "easeOut",
                }}
                className="relative"
              >
                {/* Connector arrow */}
                {i > 0 && (
                  <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 + i * 0.25 }}
                    className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 w-4 md:w-6 h-0.5 origin-right"
                    style={{ backgroundColor: '#534AB7' }}
                  >
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-l-4 border-l-electric-indigo border-t-2 border-b-2 border-t-transparent border-b-transparent" />
                  </motion.div>
                )}

                {/* Block cube */}
                <motion.div
                  animate={{
                    rotateY: [0, 5, 0, -5, 0],
                    boxShadow: [
                      `0 0 20px ${block.color}20`,
                      `0 0 40px ${block.color}40`,
                      `0 0 20px ${block.color}20`,
                    ],
                  }}
                  transition={{
                    rotateY: { duration: 6, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 },
                    boxShadow: { duration: 3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 },
                  }}
                  whileHover={{ scale: 1.1, z: 20 }}
                  className="relative w-24 h-28 md:w-32 md:h-36 rounded-xl border-2 preserve-3d cursor-pointer backdrop-blur-sm"
                  style={{
                    backgroundColor: `${block.color}15`,
                    borderColor: block.color,
                  }}
                >
                  {/* Top accent bar */}
                  <div
                    className="absolute top-0 left-0 right-0 h-1 rounded-t-xl"
                    style={{ backgroundColor: block.color }}
                  />

                  {/* Block content */}
                  <div className="flex flex-col items-center justify-center h-full p-2 gap-1">
                    <span
                      className="text-[9px] md:text-[10px] font-mono tracking-wider"
                      style={{ color: block.color }}
                    >
                      {block.label}
                    </span>
                    <span className="text-[8px] font-mono text-muted-blue">
                      prev: {block.prev}
                    </span>
                    <span
                      className="text-[8px] font-mono"
                      style={{ color: block.id === 0 ? '#1D9E75' : '#7F77DD' }}
                    >
                      {block.hash}
                    </span>

                    {/* Verified badge */}
                    <div
                      className="mt-1 px-2 py-0.5 rounded text-[7px] font-mono"
                      style={{
                        backgroundColor: `${block.color}20`,
                        color: block.color,
                      }}
                    >
                      {block.id === 0 ? 'verified ✓' : 'signed ✓'}
                    </div>
                  </div>
                </motion.div>

                {/* Hash label floating */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5 }}
                  transition={{ delay: 0.8 + i * 0.2 }}
                  className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[8px] font-mono text-electric-indigo whitespace-nowrap"
                >
                  {block.hash}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom stat bar */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex justify-center gap-8 md:gap-16 mt-8"
        >
          {['IMMUTABLE', 'DISTRIBUTED', 'TRUSTLESS'].map((stat) => (
            <motion.div
              key={stat}
              variants={itemVariants}
              className="text-center"
            >
              <span className="text-xs md:text-sm font-mono tracking-[0.2em] text-electric-indigo/70">
                {stat}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SlideWrapper>
  );
}
