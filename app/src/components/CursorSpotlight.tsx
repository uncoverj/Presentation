import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export function CursorSpotlight() {
  const x = useMotionValue(-500);
  const y = useMotionValue(-500);
  const sx = useSpring(x, { stiffness: 140, damping: 20, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 140, damping: 20, mass: 0.6 });

  useEffect(() => {
    const handle = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener('pointermove', handle);
    return () => window.removeEventListener('pointermove', handle);
  }, [x, y]);

  return (
    <>
      {/* Big soft radial following the cursor */}
      <motion.div
        aria-hidden
        className="fixed z-[5] pointer-events-none"
        style={{
          x: sx,
          y: sy,
          translateX: '-50%',
          translateY: '-50%',
          width: 600,
          height: 600,
          background:
            'radial-gradient(circle, rgba(127,119,221,0.12) 0%, rgba(127,119,221,0.04) 35%, transparent 70%)',
          mixBlendMode: 'screen',
        }}
      />
      {/* Tight dot */}
      <motion.div
        aria-hidden
        className="fixed z-[5] pointer-events-none rounded-full"
        style={{
          x: sx,
          y: sy,
          translateX: '-50%',
          translateY: '-50%',
          width: 10,
          height: 10,
          background: 'radial-gradient(circle, rgba(175,169,236,0.9) 0%, rgba(175,169,236,0) 70%)',
          mixBlendMode: 'screen',
        }}
      />
    </>
  );
}
