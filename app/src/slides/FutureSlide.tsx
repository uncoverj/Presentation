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

const milestones = [
  { year: '2008', icon: '₿', label: 'Bitcoin', sub: 'whitepaper', color: '#534AB7', position: 'top' },
  { year: '2015', icon: 'Ξ', label: 'Ethereum', sub: 'smart contracts', color: '#7F77DD', position: 'bottom' },
  { year: '2022', icon: '🌿', label: 'ETH Merge', sub: '-99.95% energy', color: '#1D9E75', position: 'top' },
  { year: '2024', icon: '🛡️', label: 'Post-Quantum', sub: 'NIST standards', color: '#EF9F27', position: 'bottom' },
  { year: '2026+', icon: '🚀', label: 'AI + Chain', sub: 'L2 ubiquity', color: '#D4537E', position: 'top', future: true },
];

export function FutureSlide() {
  return (
    <SlideWrapper
      slideId="future"
      particleVariant="aurora"
      accent="#D4537E"
    >
      <div className="flex flex-col h-full px-12 py-14 pb-24">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-4"
        >
          <motion.div variants={itemVariants}>
            <TagPill delay={0.2}>07 · Future</TagPill>
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-6xl font-medium mt-4"
            style={{ fontFamily: "'Space Grotesk', 'Inter', sans-serif" }}
          >
            <span className="shimmer-text">The </span>
            <span className="italic text-gradient-aurora">roadmap</span>
            <span className="shimmer-text"> ahead</span>
          </motion.h2>
        </motion.div>

        {/* Timeline */}
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-5xl">
            <svg viewBox="0 0 900 220" className="w-full h-auto">
              {/* Timeline axis */}
              <motion.line
                x1="80"
                y1="110"
                x2="820"
                y2="110"
                stroke="#1a1a35"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: 'easeInOut' }}
              />

              {/* Animated dash line overlay */}
              <motion.line
                x1="80"
                y1="110"
                x2="820"
                y2="110"
                stroke="#534AB7"
                strokeWidth="1"
                strokeDasharray="4,8"
                opacity="0.3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: 'easeInOut' }}
              />

              {/* Traveling light dot */}
              <circle r="4" fill="#534AB7" opacity="0.8">
                <animateMotion
                  dur="4s"
                  repeatCount="indefinite"
                  path="M80,110 L820,110"
                />
              </circle>

              {/* Milestones */}
              {milestones.map((m, i) => {
                const x = 100 + i * 170;
                const cardY = m.position === 'top' ? 20 : 140;
                const cardHeight = 75;

                return (
                  <motion.g
                    key={m.year}
                    initial={{ opacity: 0, y: m.position === 'top' ? -20 : 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.5 + i * 0.25,
                      duration: 0.5,
                      ease: "easeOut",
                    }}
                  >
                    {/* Connecting line */}
                    <motion.line
                      x1={x}
                      y1={110}
                      x2={x}
                      y2={m.position === 'top' ? cardY + cardHeight : cardY}
                      stroke={m.color}
                      strokeWidth="1"
                      opacity="0.5"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ delay: 0.6 + i * 0.25, duration: 0.3 }}
                    />

                    {/* Pulse ring for future */}
                    {m.future && (
                      <motion.circle
                        cx={x}
                        cy={110}
                        r="18"
                        fill="none"
                        stroke={m.color}
                        strokeWidth="0.5"
                        opacity="0.4"
                        animate={{ r: [18, 26, 18], opacity: [0.4, 0.1, 0.4] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    )}

                    {/* Marker circle */}
                    <motion.circle
                      cx={x}
                      cy={110}
                      r={m.future ? 10 : 8}
                      fill={m.color}
                      stroke={m.color}
                      strokeWidth="2"
                      strokeDasharray={m.future ? '4,3' : 'none'}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        delay: 0.5 + i * 0.25,
                        type: 'spring',
                        stiffness: 300,
                      }}
                    />

                    {/* Card */}
                    <motion.g
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.7 + i * 0.25 }}
                    >
                      <rect
                        x={x - 55}
                        y={cardY}
                        width="110"
                        height={cardHeight}
                        rx="10"
                        fill="#0f0f28"
                        stroke={`${m.color}44`}
                        strokeWidth="0.5"
                      />

                      {/* Icon */}
                      <text
                        x={x}
                        y={cardY + 28}
                        textAnchor="middle"
                        fontSize="20"
                      >
                        {m.icon}
                      </text>

                      {/* Year */}
                      <text
                        x={x}
                        y={cardY + 48}
                        textAnchor="middle"
                        fill={m.color}
                        fontSize="11"
                        fontWeight="500"
                        fontFamily="Inter"
                      >
                        {m.year}
                      </text>

                      {/* Label */}
                      <text
                        x={x}
                        y={cardY + 64}
                        textAnchor="middle"
                        fill="#555588"
                        fontSize="9"
                        fontFamily="monospace"
                      >
                        {m.sub}
                      </text>
                    </motion.g>
                  </motion.g>
                );
              })}
            </svg>
          </div>
        </div>

        {/* Bottom tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="flex justify-center mt-4"
        >
          <div className="px-8 py-3 rounded-xl border border-electric-indigo/20 bg-electric-indigo/10">
            <span className="text-sm font-mono text-soft-lavender tracking-wide">
              Blockchain becomes the trust layer of every network
            </span>
          </div>
        </motion.div>
      </div>
    </SlideWrapper>
  );
}
