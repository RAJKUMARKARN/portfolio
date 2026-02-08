import React, { useState, useEffect, useRef } from 'react';

const AnimatedWords = () => {
  const words = ['Design', 'Build', 'Develop', 'Deploy', "Now that's what I do"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [hasCompleted, setHasCompleted] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [showSocials, setShowSocials] = useState(false);
  const sectionRef = useRef(null);

  // Detect when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted && !hasCompleted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 } // Start when 30% of section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasStarted, hasCompleted]);

  // Animation logic
  useEffect(() => {
    if (!hasStarted || hasCompleted || currentIndex === words.length - 1) return;

    const timer = setTimeout(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        const nextIndex = currentIndex + 1;
        
        if (nextIndex < words.length) {
          setCurrentIndex(nextIndex);
          setIsVisible(true);
        }
        
        // If we just moved to the last word, mark as completed
        if (nextIndex === words.length - 1) {
          setHasCompleted(true);
        }
      }, 350); // Wait for fade out
    }, 650); // Show each word for 0.65 seconds

    return () => clearTimeout(timer);
  }, [currentIndex, hasCompleted, hasStarted]);

  // Show socials after animation completes
  useEffect(() => {
    if (hasCompleted && currentIndex === words.length - 1) {
      const socialTimer = setTimeout(() => {
        setShowSocials(true);
      }, 2000); // Wait 2s after last word appears for smoother transition
      
      return () => clearTimeout(socialTimer);
    }
  }, [hasCompleted, currentIndex]);

  return (
    <div ref={sectionRef} className="w-full min-h-[500px] md:min-h-[700px] lg:min-h-[800px] bg-black flex flex-col items-center justify-center px-4 py-12 md:py-16 gap-8 md:gap-16" style={{ marginTop: '50px' }}>
      <h2
        className={`text-white font-black text-center max-w-6xl transition-all duration-[350ms] ease-in-out ${
          isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-8'
        }`}
        style={{ 
          fontSize: showSocials 
            ? 'clamp(1.5rem, 4vw, 3rem)' 
            : currentIndex === 4 
              ? 'clamp(2rem, 7vw, 6rem)' 
              : 'clamp(4rem, 15vw, 12rem)',
          lineHeight: '1.2',
          whiteSpace: currentIndex === 4 ? 'nowrap' : 'normal',
          transition: 'font-size 1s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      >
        {words[currentIndex]}
      </h2>

      {/* Social Media Handles */}
      {showSocials && (
        <div className={`flex gap-8 items-center justify-center transition-all duration-1000 ease-out ${
          showSocials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <a href="https://leetcode.com/u/Rajkumarkarn/" target="_blank" rel="noopener noreferrer">
            <img
              src="leetcode.png"
              alt="LeetCode"
              className="h-14 w-14 md:h-16 md:w-16 lg:h-20 lg:w-20 opacity-70 hover:opacity-100 transition"
            />
          </a>
          <a href="https://www.linkedin.com/in/raj-kumar-karn-55230a186/" target="_blank" rel="noopener noreferrer">
            <img
              src="linkedin.png"
              alt="LinkedIn"
              className="h-14 w-14 md:h-16 md:w-16 lg:h-20 lg:w-20 opacity-70 hover:opacity-100 transition"
            />
          </a>
          <a href="https://github.com/RAJKUMARKARN" target="_blank" rel="noopener noreferrer">
            <img
              src="github.png"
              alt="GitHub"
              className="h-14 w-14 md:h-16 md:w-16 lg:h-20 lg:w-20 opacity-70 hover:opacity-100 transition"
            />
          </a>
          <a href="mailto:rajkumarkarn002@gmail.com">
            <img
              src="gmail.png"
              alt="Gmail"
              className="h-14 w-14 md:h-16 md:w-16 lg:h-20 lg:w-20 opacity-70 hover:opacity-100 transition"
            />
          </a>
        </div>
      )}
    </div>
  );
};

export default AnimatedWords;
