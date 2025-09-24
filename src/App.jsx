import { useEffect, useRef } from 'react';
import './App.css';
import './index.css';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

import Nav from './components/Nav';
import Hero from './components/Hero';
import Secondsection from './components/Secondsection';
import Skills from './components/Skills';
import ProjectsNew from './components/ProjectsNew';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer2 from './components/Footer2';

function App() {
  const scrollRef = useRef(null);

  useEffect(() => {
    // Initialize Locomotive Scroll
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.1, // easing for smoothness
      multiplier: 1,
      mobile: { smooth: true },
    });

    return () => scroll.destroy(); // Cleanup on unmount
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container className="bg-black">
      {/* Navigation */}
      <Nav />

      {/* Hero Section */}
      <section data-scroll-section>
        <Hero />
      </section>

      {/* Second Section */}
      <section data-scroll-section>
        <Secondsection />
      </section>

      {/* Skills Section */}
      <section data-scroll-section>
        <Skills />
      </section>

      {/* Projects Section */}
      <section data-scroll-section>
        <ProjectsNew />
      </section>

      {/* Work Section */}
      <section data-scroll-section>
        <Work />
      </section>

      {/* Contact Section */}
      <section data-scroll-section>
        <Contact />
      </section>

      {/* Footer */}
      <section data-scroll-section>
        <Footer2 />
      </section>
    </div>
  );
}

export default App;
