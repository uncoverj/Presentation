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

const nodes = [
  { id: 'A', x: 340, y: 60, color: '#1D9E75', label: 'node_A' },
  { id: 'B', x: 160, y: 100, color: '#534AB7', label: 'node_B' },
  { id: 'C', x: 520, y: 100, color: '#534AB7', label: 'node_C' },
  { id: 'D', x: 120, y: 240, color: '#EF9F27', label: 'node_D' },
  { id: 'E', x: 560, y: 240, color: '#EF9F27', label: 'node_E' },
  { id: 'F', x: 200, y: 340, color: '#534AB7', label: 'node_F' },
  { id: 'G', x: 480, y: 340, color: '#1D9E75', label: 'node_G' },
];

const connections = [
  { from: 'A', to: 'B' }, { from: 'A', to: 'C' },
  { from: 'B', to: 'D' }, { from: 'C', to: 'E' },
  { from: 'D', to: 'F' }, { from: 'E', to: 'G' },
  { from: 'F', to: 'G' }, { from: 'B', to: 'C' },
  { from: 'D', to: 'E' },
];

export function NetworkSlide() {
  const centerNode = { x: 340, y: 210 };

  return (
    <SlideWrapper backgroundImage="/p2p-network.jpg" particleVariant="network">
      <div className="flex flex-col h-full px-10 py-12 pb-24">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-4"
        >
          <motion.div variants={itemVariants}>
            <TagPill delay={0.2}>03 · Network</TagPill>
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-medium mt-4"
          >
            <span className="text-neon-purple italic">Decentralized</span>{' '}
            <span className="text-white">P2P</span>
          </motion.h2>
        </motion.div>

        {/* Network visualization */}
        <div className="flex-1 flex items-center justify-center">
          <svg
            viewBox="0 0 680 400"
            className="w-full max-w-3xl h-auto"
            style={{ filter: 'drop-shadow(0 0 10px rgba(83,74,183,0.3))' }}
          >
            {/* Connection lines */}
            {connections.map((conn, i) => {
              const fromNode = nodes.find(n => n.id === conn.from);
              const toNode = nodes.find(n => n.id === conn.to);
              if (!fromNode || !toNode) return null;
              return (
                <motion.line
                  key={`${conn.from}-${conn.to}`}
                  x1={fromNode.x}
                  y1={fromNode.y}
                  x2={toNode.x}
                  y2={toNode.y}
                  stroke="#534AB7"
                  strokeWidth="0.8"
                  strokeDasharray="4,4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.35 }}
                  transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
                />
              );
            })}

            {/* Lines to center */}
            {nodes.map((node, i) => (
              <motion.line
                key={`center-${node.id}`}
                x1={centerNode.x}
                y1={centerNode.y}
                x2={node.x}
                y2={node.y}
                stroke="#534AB7"
                strokeWidth="0.6"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.25 }}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.08 }}
              />
            ))}

            {/* Animated data packets */}
            {connections.slice(0, 4).map((conn, i) => {
              const fromNode = nodes.find(n => n.id === conn.from);
              const toNode = nodes.find(n => n.id === conn.to);
              if (!fromNode || !toNode) return null;
              const colors = ['#534AB7', '#1D9E75', '#EF9F27'];
              return (
                <circle key={`packet-${i}`} r="3" fill={colors[i % 3]} opacity="0.8">
                  <animateMotion
                    dur={`${2 + i * 0.5}s`}
                    repeatCount="indefinite"
                    path={`M${fromNode.x},${fromNode.y} L${toNode.x},${toNode.y}`}
                  />
                </circle>
              );
            })}

            {/* Peripheral nodes */}
            {nodes.map((node, i) => (
              <motion.g
                key={node.id}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  delay: 0.4 + i * 0.12,
                  type: 'spring',
                  stiffness: 200,
                  damping: 15,
                }}
              >
                {/* Glow ring */}
                <motion.circle
                  cx={node.x}
                  cy={node.y}
                  r="18"
                  fill="none"
                  stroke={node.color}
                  strokeWidth="0.5"
                  opacity="0.3"
                  animate={{ r: [18, 22, 18], opacity: [0.3, 0.1, 0.3] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.3 }}
                />
                {/* Node circle */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r="10"
                  fill="#0f0f28"
                  stroke={node.color}
                  strokeWidth="1.5"
                />
                <circle
                  cx={node.x}
                  cy={node.y}
                  r="5"
                  fill={node.color}
                />
                {/* Label */}
                <text
                  x={node.x}
                  y={node.y + 24}
                  textAnchor="middle"
                  fill={node.color}
                  opacity="0.7"
                  fontSize="8"
                  fontFamily="monospace"
                >
                  {node.label}
                </text>
              </motion.g>
            ))}

            {/* Center node */}
            <motion.g
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200, damping: 15 }}
            >
              <motion.circle
                cx={centerNode.x}
                cy={centerNode.y}
                r="30"
                fill="none"
                stroke="#534AB7"
                strokeWidth="0.5"
                animate={{ r: [30, 36, 30], opacity: [0.5, 0.2, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <circle
                cx={centerNode.x}
                cy={centerNode.y}
                r="22"
                fill="rgba(83,74,183,0.2)"
                stroke="#534AB7"
                strokeWidth="2"
              />
              <circle
                cx={centerNode.x}
                cy={centerNode.y}
                r="14"
                fill="rgba(83,74,183,0.35)"
              />
              <circle
                cx={centerNode.x}
                cy={centerNode.y}
                r="7"
                fill="#7F77DD"
              />
            </motion.g>
          </svg>
        </div>

        {/* Bottom banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex justify-center mt-4"
        >
          <div className="px-6 py-2 rounded-lg border border-crimson-alert/30 bg-crimson-alert/10">
            <span className="text-sm font-mono text-crimson-alert tracking-wide">
              No single point of failure
            </span>
          </div>
        </motion.div>
      </div>
    </SlideWrapper>
  );
}
