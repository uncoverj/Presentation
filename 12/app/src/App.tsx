import { AnimatePresence } from 'framer-motion';
import { useSlideNavigation } from './hooks/useSlideNavigation';
import { Navigation } from './components/Navigation';
import { HeroSlide } from './slides/HeroSlide';
import { ArchitectureSlide } from './slides/ArchitectureSlide';
import { CryptographySlide } from './slides/CryptographySlide';
import { NetworkSlide } from './slides/NetworkSlide';
import { ConsensusSlide } from './slides/ConsensusSlide';
import { ApplicationsSlide } from './slides/ApplicationsSlide';
import { TrilemmaSlide } from './slides/TrilemmaSlide';
import { FutureSlide } from './slides/FutureSlide';
import { ConclusionSlide } from './slides/ConclusionSlide';

const slides = [
  HeroSlide,
  ArchitectureSlide,
  CryptographySlide,
  NetworkSlide,
  ConsensusSlide,
  ApplicationsSlide,
  TrilemmaSlide,
  FutureSlide,
  ConclusionSlide,
];

function App() {
  const { currentSlide, goTo } = useSlideNavigation(slides.length);

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <div className="relative w-screen h-screen bg-deep-space overflow-hidden">
      {/* Slide content with AnimatePresence for transitions */}
      <AnimatePresence mode="wait">
        <div key={currentSlide} className="absolute inset-0">
          <CurrentSlideComponent />
        </div>
      </AnimatePresence>

      {/* Navigation dots */}
      <Navigation
        total={slides.length}
        current={currentSlide}
        onNavigate={goTo}
      />
    </div>
  );
}

export default App;
