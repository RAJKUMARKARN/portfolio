import React, { useState, useEffect, useRef, memo, useCallback } from 'react';
import Spline from "./Spline";
import HeroParticles from "./HeroParticles";
import RoleTicker from "./RoleTicker";

const Hero = memo(() => {
  const [showIntro, setShowIntro] = useState(false);
  const [showName, setShowName] = useState(false);
  const [showRole, setShowRole] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [isHeroVisible, setIsHeroVisible] = useState(true);

  const heroRef = useRef(null);

  // Monitor visibility of the Hero section:
  // When scrolled away, pause 3D loops to preserve 100% GPU for lower sections
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeroVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  // Coordinated entrance animation sequence
  useEffect(() => {
    const introTimer = setTimeout(() => setShowIntro(true), 100);
    const nameTimer = setTimeout(() => setShowName(true), 350);
    const roleTimer = setTimeout(() => setShowRole(true), 550);
    const buttonTimer = setTimeout(() => setShowButton(true), 800);

    return () => {
      clearTimeout(introTimer);
      clearTimeout(nameTimer);
      clearTimeout(roleTimer);
      clearTimeout(buttonTimer);
    };
  }, []);

  const handleSplineLoaded = useCallback(() => {
    // Ensure button is visible once 3D scene finishes loading
    setShowButton(true);
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative w-full bg-black text-white overflow-hidden min-h-[calc(100vh-70px)] md:min-h-screen h-[calc(100dvh-70px)] md:h-screen"
    >
      {/* AMBIENT GLOW BACKDROP - zero GPU cost, instant visual depth */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Deep purple ambient glow at center-top */}
        <div className="absolute -top-[10%] left-1/2 -translate-x-1/2 w-[600px] h-[500px] sm:w-[850px] sm:h-[600px] rounded-full bg-radial from-[#9C28DF]/15 via-[#60496e]/05 to-transparent blur-3xl opacity-75" />
        
        {/* Subtle cyan accent glow */}
        <div className="absolute top-[25%] left-1/4 w-[350px] h-[350px] rounded-full bg-radial from-[#00F0FF]/08 via-[#00F0FF]/02 to-transparent blur-3xl opacity-50" />
      </div>

      {/* LIGHTWEIGHT PARTICLES - GPU-optimized 2D canvas, pauses when scrolled away */}
      <div className="absolute inset-0 z-0 w-full h-full pointer-events-none">
        <HeroParticles isVisible={isHeroVisible} />
      </div>

      {/* TEXT SECTION - positioned above background, behind the interactive robot */}
      <div className="relative flex flex-col items-center justify-center text-center pt-[95px] sm:pt-[115px] md:pt-[130px] lg:pt-[145px] px-2 pointer-events-none select-none w-full">
        <div className="w-full max-w-[98vw] flex flex-col items-center">
          {/* "Hello, My name is" */}
          <div
            className={`relative z-[5] transition-all duration-700 ease-out transform mb-4 sm:mb-6 md:mb-8 lg:mb-10 ${
              showIntro ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}
          >
            <p className="font-michroma text-xs sm:text-sm md:text-base text-[#8A8A8A] font-semibold text-center tracking-[0.2em] uppercase mx-auto">
              Hello, My name is
            </p>
          </div>

          {/* "Raj Kumar Karn" with Role Ticker anchored to the end of the name */}
          <div
            className={`relative inline-block transition-all duration-700 ease-out transform ${
              showName ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-3 scale-95'
            }`}
          >
            <h1
              style={{
                fontFamily: "'Antonio', 'Bebas Neue', sans-serif",
                fontWeight: 900,
                fontSize: 'clamp(3.4rem, 13.8vw, 17.5rem)',
                lineHeight: 0.82,
              }}
              className="relative z-[5] uppercase text-white text-center tracking-tighter select-none drop-shadow-[0_15px_50px_rgba(0,0,0,0.95)] whitespace-nowrap transform scale-y-[1.15] origin-center inline-block"
            >
              Raj Kumar Karn
            </h1>

            {/* GSAP 3D Slot-Machine Role Ticker - anchored at the right end under 'KARN' */}
            <div
              className={`absolute right-0 top-full mt-4 sm:mt-6 md:mt-7 z-20 flex justify-end pointer-events-none transition-all duration-700 ease-out transform ${
                showRole ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="inline-flex items-center justify-center px-4 sm:px-5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.8)]">
                <RoleTicker />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA BUTTON: "Contact Me" - smooth fade & slide entrance */}
      <div
        className={`absolute bottom-[75px] sm:bottom-[95px] md:bottom-[115px] lg:bottom-[130px] left-1/2 -translate-x-1/2 z-20 flex justify-center transition-all duration-500 ease-out transform ${
          showButton ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <a
          href="#contact"
          className="group relative inline-flex items-center bg-[#1E1E1E]/90 backdrop-blur-md border border-[#535353] text-[#989898] font-semibold rounded-full shadow-lg px-8 py-3 sm:px-12 sm:py-4 transition-all duration-300 ease-in-out whitespace-nowrap
            hover:bg-[#141414] hover:border-[#646cff] hover:shadow-[0_0_20px_rgba(100,108,255,0.5)] hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#646cff]"
        >
          <span className="text-sm sm:text-lg text-[#989898] transition-colors duration-300 group-hover:text-white">
            Contact Me
          </span>
          <span className="flex items-center ml-1 overflow-hidden transition-all duration-300 w-0 group-hover:w-6">
            <img
              src="/arrow2.png"
              alt=""
              width="16"
              height="16"
              loading="eager"
              decoding="async"
              className="w-4 h-4 transform translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
            />
          </span>
        </a>
      </div>

      {/* SPLINE 3D ROBOT - high performance container with viewport-aware pausing */}
      <div className="absolute inset-0 z-10 pointer-events-auto w-full h-full max-w-[1400px] mx-auto left-0 right-0 top-[180px] sm:top-[160px] md:top-[145px] lg:top-[155px]">
        <Spline
          isVisible={isHeroVisible}
          onLoad={handleSplineLoaded}
        />
      </div>
    </div>
  );
});

Hero.displayName = 'Hero';

export default Hero;
