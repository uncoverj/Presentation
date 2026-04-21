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

const vertices = [
  { id: 'security', label: 'SECURITY', icon: '🔒', color: '#1D9E75', x: 200, y: 50 },
  { id: 'decentral', label: 'DECENTRAL', icon: '🌐', color: '#534AB7', x: 50, y: 280 },
  { id: 'scale', label: 'SCALABILITY', icon: '⚡', color: '#EF9F27', x: 350, y: 280 },
];

const examples = [
  { name: 'Bitcoin', colors: ['#1D9E75', '#534AB7'], tradeoff: '7 tx/s', positive: false },
  { name: 'Visa/Ripple', colors: ['#EF9F27', '#534AB7'], tradeoff: '24k tx/s', positive: true },
  { name: 'Ethereum PoS', colors: ['#534AB7', '#1D9E75', '#EF9F27'], tradeoff: '~100k tx/s', positive: true },
];

export function TrilemmaSlide() {
  return (
    <SlideWrapper backgroundImage="/trilemma.jpg" particleVariant="default">
      <div className="flex flex-col h-full px-10 py-12 pb-24">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-4"
        >
          <motion.div variants={itemVariants}>
            <TagPill delay={0.2}>06 · Challenges</TagPill>
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-medium mt-4"
          >
            <span className="text-white">Buterin's </span>
            <span className="text-neon-purple italic">Trilemma</span>
          </motion.h2>
        </motion.div>

        {/* Main content */}
        <div className="flex-1 flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Triangle visualization */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="relative w-full max-w-md h-80"
          >
            <svg viewBox="0 0 400 340" className="w-full h-full">
              {/* Outer triangle */}
              <motion.polygon
                points="200,50 50,280 350,280"
                fill="none"
                stroke="#534AB7"
                strokeWidth="1.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.5 }}
                transition={{ duration: 1.5, delay: 0.5 }}
              />

              {/* Inner fill */}
              <motion.polygon
                points="200,50 50,280 350,280"
                fill="#534AB7"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.06 }}
                transition={{ duration: 0.8, delay: 1.5 }}
              />

              {/* Inner dashed triangle */}
              <motion.polygon
                points="200,130 125,260 275,260"
                fill="#534AB7"
                stroke="#534AB7"
                strokeWidth="1"
                strokeDasharray="5,4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.15 }}
                transition={{ duration: 0.8, delay: 1.8 }}
              />

              {/* Traveling dots on edges */}
              {vertices.map((v, i) => {
                const next = vertices[(i + 1) % vertices.length];
                return (
                  <circle key={`dot-${i}`} r="3" fill={v.color} opacity="0.8">
                    <animateMotion
                      dur={`${2.5 + i * 0.3}s`}
                      repeatCount="indefinite"
                      path={`M${v.x},${v.y} L${next.x},${next.y}`}
                    />
                  </circle>
                );
              })}

              {/* Vertices */}
              {vertices.map((v, i) => (
                <motion.g
                  key={v.id}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    delay: 0.8 + i * 0.3,
                    type: 'spring',
                    stiffness: 200,
                    damping: 12,
                  }}
                >
                  {/* Glow ring */}
                  <motion.circle
                    cx={v.x}
                    cy={v.y}
                    r="30"
                    fill="none"
                    stroke={v.color}
                    strokeWidth="0.5"
                    opacity="0.3"
                    animate={{ r: [30, 38, 30], opacity: [0.3, 0.1, 0.3] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.5 }}
                  />
                  {/* Main circle */}
                  <circle
                    cx={v.x}
                    cy={v.y}
                    r="24"
                    fill="#0f0f28"
                    stroke={v.color}
                    strokeWidth="2"
                  />
                  {/* Icon */}
                  <text
                    x={v.x}
                    y={v.y - 2}
                    textAnchor="middle"
                    fontSize="20"
                  >
                    {v.icon}
                  </text>
                  {/* Label */}
                  <text
                    x={v.x}
                    y={v.y + 38}
                    textAnchor="middle"
                    fill={v.color}
                    fontSize="9"
                    fontWeight="500"
                    fontFamily="Inter"
                  >
                    {v.label}
                  </text>
                </motion.g>
              ))}

              {/* Center label */}
              <motion.g
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.8 }}
              >
                <rect
                  x="155"
                  y="185"
                  width="90"
                  height="28"
                  rx="8"
                  fill="rgba(226,75,74,0.1)"
                  stroke="rgba(226,75,74,0.4)"
                  strokeWidth="1"
                />
                <text
                  x="200"
                  y="203"
                  textAnchor="middle"
                  fill="#E24B4A"
                  fontSize="11"
                  fontWeight="500"
                  fontFamily="Inter"
                >
                  Choose 2 of 3
                </text>
              </motion.g>
            </svg>
          </motion.div>

          {/* Side examples */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.7 }}
            className="flex flex-col gap-3 w-full max-w-xs"
          >
            {examples.map((ex, i) => (
              <motion.div
                key={ex.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 + i * 0.2 }}
                whileHover={{ x: -4, backgroundColor: 'rgba(255,255,255,0.08)' }}
                className="glass-card p-4 flex flex-col gap-1 cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  {ex.colors.map((c, j) => (
                    <div key={j} className="w-2 h-2 rounded-full" style={{ backgroundColor: c }} />
                  ))}
                  <span className="text-sm font-medium text-white ml-1">{ex.name}</span>
                </div>
                <span
                  className="text-lg font-mono font-bold"
                  style={{ color: ex.positive ? ex.colors[0] : '#E24B4A' }}
                >
                  {ex.tradeoff}
                </span>
              </motion.div>
            ))}

            {/* Quantum warning */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="mt-2 px-4 py-2 rounded-lg border border-crimson-alert/20 bg-crimson-alert/5"
            >
              <p className="text-[10px] font-mono text-crimson-alert/80 text-center">
                ⚠ Quantum threat · NIST Post-Quantum standards 2024
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </SlideWrapper>
  );
}
