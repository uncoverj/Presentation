import { useEffect, useMemo } from 'react';
import { loadSlim } from '@tsparticles/slim';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import type { ISourceOptions, Engine } from '@tsparticles/engine';

interface ParticleBackgroundProps {
  variant?: 'default' | 'gold' | 'cyan' | 'network' | 'amber' | 'multi' | 'aurora';
}

const variants: Record<string, ISourceOptions> = {
  default: {
    particles: {
      number: { value: 60, density: { enable: true, width: 800, height: 800 } },
      color: { value: ['#534AB7', '#7F77DD', '#1D9E75'] },
      shape: { type: 'circle' },
      opacity: { value: { min: 0.2, max: 0.5 } },
      size: { value: { min: 1, max: 3 } },
      move: {
        enable: true,
        speed: 0.5,
        direction: 'none',
        random: true,
        straight: false,
        outModes: { default: 'bounce' },
      },
      links: {
        enable: true,
        distance: 120,
        color: '#534AB7',
        opacity: 0.15,
        width: 0.5,
      },
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: 'repulse' },
      },
      modes: {
        repulse: { distance: 100, duration: 0.4 },
      },
    },
  },
  gold: {
    particles: {
      number: { value: 50, density: { enable: true, width: 800, height: 800 } },
      color: { value: ['#EF9F27', '#534AB7', '#7F77DD'] },
      shape: { type: 'circle' },
      opacity: { value: { min: 0.2, max: 0.5 } },
      size: { value: { min: 1, max: 3 } },
      move: {
        enable: true,
        speed: 0.4,
        direction: 'none',
        random: true,
        straight: false,
        outModes: { default: 'bounce' },
      },
      links: {
        enable: true,
        distance: 100,
        color: '#EF9F27',
        opacity: 0.12,
        width: 0.5,
      },
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: 'repulse' },
      },
      modes: {
        repulse: { distance: 100, duration: 0.4 },
      },
    },
  },
  cyan: {
    particles: {
      number: { value: 55, density: { enable: true, width: 800, height: 800 } },
      color: { value: ['#1D9E75', '#534AB7', '#7F77DD'] },
      shape: { type: 'circle' },
      opacity: { value: { min: 0.2, max: 0.5 } },
      size: { value: { min: 1, max: 3 } },
      move: {
        enable: true,
        speed: 0.6,
        direction: 'top',
        random: true,
        straight: false,
        outModes: { default: 'bounce' },
      },
      links: {
        enable: true,
        distance: 110,
        color: '#1D9E75',
        opacity: 0.12,
        width: 0.5,
      },
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: 'repulse' },
      },
      modes: {
        repulse: { distance: 100, duration: 0.4 },
      },
    },
  },
  network: {
    particles: {
      number: { value: 70, density: { enable: true, width: 800, height: 800 } },
      color: { value: ['#534AB7', '#1D9E75', '#EF9F27'] },
      shape: { type: 'circle' },
      opacity: { value: { min: 0.3, max: 0.6 } },
      size: { value: { min: 1, max: 4 } },
      move: {
        enable: true,
        speed: 0.3,
        direction: 'none',
        random: true,
        straight: false,
        outModes: { default: 'bounce' },
      },
      links: {
        enable: true,
        distance: 140,
        color: '#534AB7',
        opacity: 0.2,
        width: 0.8,
      },
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: 'grab' },
      },
      modes: {
        grab: { distance: 150, links: { opacity: 0.4 } },
      },
    },
  },
  amber: {
    particles: {
      number: { value: 45, density: { enable: true, width: 800, height: 800 } },
      color: { value: ['#EF9F27', '#534AB7'] },
      shape: { type: 'circle' },
      opacity: { value: { min: 0.2, max: 0.5 } },
      size: { value: { min: 1, max: 3 } },
      move: {
        enable: true,
        speed: 0.4,
        direction: 'top',
        random: true,
        straight: false,
        outModes: { default: 'bounce' },
      },
      links: {
        enable: true,
        distance: 100,
        color: '#EF9F27',
        opacity: 0.1,
        width: 0.5,
      },
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: 'repulse' },
      },
      modes: {
        repulse: { distance: 100, duration: 0.4 },
      },
    },
  },
  multi: {
    particles: {
      number: { value: 65, density: { enable: true, width: 800, height: 800 } },
      color: { value: ['#534AB7', '#1D9E75', '#EF9F27', '#D4537E'] },
      shape: { type: 'circle' },
      opacity: { value: { min: 0.2, max: 0.5 } },
      size: { value: { min: 1, max: 3 } },
      move: {
        enable: true,
        speed: 0.5,
        direction: 'none',
        random: true,
        straight: false,
        outModes: { default: 'bounce' },
      },
      links: {
        enable: true,
        distance: 120,
        color: '#534AB7',
        opacity: 0.1,
        width: 0.5,
      },
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: 'repulse' },
      },
      modes: {
        repulse: { distance: 100, duration: 0.4 },
      },
    },
  },
  aurora: {
    particles: {
      number: { value: 55, density: { enable: true, width: 800, height: 800 } },
      color: { value: ['#7F77DD', '#D4537E', '#1D9E75'] },
      shape: { type: 'circle' },
      opacity: { value: { min: 0.2, max: 0.5 } },
      size: { value: { min: 1, max: 3 } },
      move: {
        enable: true,
        speed: 0.5,
        direction: 'top',
        random: true,
        straight: false,
        outModes: { default: 'bounce' },
      },
      links: {
        enable: true,
        distance: 110,
        color: '#7F77DD',
        opacity: 0.12,
        width: 0.5,
      },
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: 'repulse' },
      },
      modes: {
        repulse: { distance: 100, duration: 0.4 },
      },
    },
  },
};

// Initialize engine once
let engineInitialized = false;

export function ParticleBackground({ variant = 'default' }: ParticleBackgroundProps) {
  useEffect(() => {
    if (!engineInitialized) {
      engineInitialized = true;
      initParticlesEngine(async (engine: Engine) => {
        await loadSlim(engine);
      });
    }
  }, []);

  const options = useMemo(() => {
    return {
      fullScreen: { enable: false },
      ...variants[variant],
      detectRetina: true,
    };
  }, [variant]);

  return (
    <div className="absolute inset-0 z-[1]">
      <Particles
        id={`particles-${variant}`}
        options={options}
        className="w-full h-full"
      />
    </div>
  );
}
