import { lazy, Suspense } from 'react';
import './index.css';

import Nav from './components/Nav';
import Hero from './components/Hero';
import AnimatedWords from './components/AnimatedWords';

// Lazy load below-the-fold components so they don't block initial paint
const Secondsection = lazy(() => import('./components/Secondsection'));
const Skills = lazy(() => import('./components/Skills'));
const ProjectsNew = lazy(() => import('./components/ProjectsNew'));
const Work = lazy(() => import('./components/Work'));
const Contact = lazy(() => import('./components/Contact'));
const Footer2 = lazy(() => import('./components/Footer2'));

// Minimal loading placeholder (matches dark bg so no flash)
const SectionFallback = () => (
  <div className="min-h-[200px] w-full bg-black" />
);

function App() {
  return (
    <div className="bg-black overflow-x-hidden w-full">
      {/* Navigation - always loaded immediately */}
      <Nav />

      {/* Hero Section - always loaded immediately (above the fold) */}
      <section>
        <Hero />
      </section>

      {/* Animated Words Section */}
      <AnimatedWords />

      {/* Below-the-fold sections load on demand */}
      <Suspense fallback={<SectionFallback />}>

        <section>
          <Secondsection />
        </section>

        <section>
          <Skills />
        </section>

        <section>
          <ProjectsNew />
        </section>

        <section>
          <Work />
        </section>

        <section>
          <Contact />
        </section>

        <section>
          <Footer2 />
        </section>
      </Suspense>
    </div>
  );
}

export default App;
