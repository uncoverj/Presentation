import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { SlideWrapper } from '../components/SlideWrapper';
import { TagPill } from '../components/TagPill';
import { useEffect } from 'react';
import { Hospital, Landmark, Package, Globe } from 'lucide-react';

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

const apps = [
  {
    icon: Hospital,
    label: 'Healthcare',
    color: '#534AB7',
    bg: 'rgba(83,74,183,0.12)',
    stat: '0',
    statSub: 'tampers',
    statSuffix: '',
    description: 'MedRec · MIT',
  },
  {
    icon: Landmark,
    label: 'Finance',
    color: '#1D9E75',
    bg: 'rgba(29,158,117,0.12)',
    stat: '3',
    statSub: 'vs 3 days',
    statSuffix: 's',
    description: 'Ripple · XRP',
  },
  {
    icon: Package,
    label: 'Supply Chain',
    color: '#EF9F27',
    bg: 'rgba(239,159,39,0.12)',
    stat: '2.2',
    statSub: 'vs 6 days',
    statSuffix: 's',
    description: 'IBM Food Trust',
  },
  {
    icon: Globe,
    label: 'IoT Networks',
    color: '#D4537E',
    bg: 'rgba(212,83,126,0.12)',
    stat: 'Fee',
    statSub: 'micro-tx',
    statSuffix: 'less',
    description: 'IOTA Tangle',
  },
];

function AnimatedStat({ value, suffix }: { value: string; suffix: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    if (isNaN(Number(value))) return value;
    const num = Number(value);
    if (num === 0) return '0';
    return latest.toFixed(1);
  });

  useEffect(() => {
    const num = Number(value);
    if (!isNaN(num) && num > 0) {
      const controls = animate(count, num, { duration: 1.5, ease: 'easeOut' });
      return controls.stop;
    }
  }, [count, value]);

  if (isNaN(Number(value))) {
    return <span>{value}</span>;
  }

  return (
    <span>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export function ApplicationsSlide() {
  return (
    <SlideWrapper
      slideId="applications"
      particleVariant="multi"
      accent="#D4537E"
    >
      <div className="flex flex-col h-full px-12 py-14 pb-24">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-8"
        >
          <motion.div variants={itemVariants}>
            <TagPill delay={0.2}>05 · Applications</TagPill>
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-6xl font-medium mt-4"
            style={{ fontFamily: "'Space Grotesk', 'Inter', sans-serif" }}
          >
            <span className="italic text-gradient-aurora">Real </span>
            <span className="shimmer-text">deployments</span>
          </motion.h2>
        </motion.div>

        {/* Application cards grid */}
        <div className="flex-1 flex items-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full max-w-5xl mx-auto">
            {apps.map((app, i) => (
              <motion.div
                key={app.label}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.4 + i * 0.15,
                  type: 'spring',
                  stiffness: 150,
                  damping: 15,
                }}
                whileHover={{
                  y: -8,
                  boxShadow: `0 20px 40px ${app.color}25`,
                }}
                className="glass-card p-5 md:p-6 flex flex-col items-center text-center gap-3 cursor-pointer transition-shadow"
                style={{ borderColor: `${app.color}30` }}
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: app.bg }}
                >
                  <app.icon className="w-7 h-7" style={{ color: app.color }} />
                </div>

                {/* Label */}
                <span className="text-sm font-medium" style={{ color: app.color }}>
                  {app.label}
                </span>

                {/* Description */}
                <span className="text-[10px] font-mono text-muted-blue">
                  {app.description}
                </span>

                {/* Stat */}
                <div
                  className="mt-2 px-4 py-2 rounded-lg w-full"
                  style={{ backgroundColor: app.bg }}
                >
                  <div className="stat-number" style={{ color: app.color, fontSize: '2rem' }}>
                    <AnimatedStat value={app.stat} suffix={app.statSuffix} />
                  </div>
                  <div className="text-[10px] font-mono mt-1" style={{ color: app.color, opacity: 0.6 }}>
                    {app.statSub}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
