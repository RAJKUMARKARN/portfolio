import React, { useState, useEffect, useRef } from 'react';
import ProfileCard from './ProfileCard';

const Secondsection = () => {
  const [showHeading, setShowHeading] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [hideSection, setHideSection] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const headingTimer = setTimeout(() => setShowHeading(true), 400);
    const contentTimer = setTimeout(() => setShowContent(true), 1000);

    return () => {
      clearTimeout(headingTimer);
      clearTimeout(contentTimer);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setHideSection(!entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div className="w-full min-h-[500px] md:min-h-[600px] bg-black flex items-center justify-center px-4 md:px-8 py-12 md:py-16" style={{ marginTop: '50px' }}>
      <div
        id="about"
        ref={sectionRef}
        className={`transition-opacity duration-700 ease-in-out ${
          hideSection ? 'opacity-0 pointer-events-none' : 'opacity-100'
        } flex flex-col items-center w-full max-w-7xl`}
      >
        {/* Heading */}
        <h3
          className={`text-white text-lg md:text-xl lg:text-2xl font-michroma font-bold mb-8 md:mb-10 transition-opacity duration-700 w-full text-center ${
            showHeading ? 'opacity-100' : 'opacity-0'
          }`}
        >
          About Me
        </h3>

        {/* Content */}
        <div
          className={`mt-6 w-full flex flex-col md:flex-row items-center justify-center rounded-[40px] transition-opacity duration-700 ${
            showContent ? 'opacity-100' : 'opacity-0'
          } px-4 py-8 md:py-12 md:px-10`}
        >
          {/* Left (ProfileCard) */}
          <div className="w-full md:w-1/2 flex justify-center items-center mb-8 md:mb-0">
            <ProfileCard
              name="Raj Kumar Karn"
              title="Software Engineer"
              handle="rajkumarkarn"
              status="Available"
              contactText="Contact Me"
              avatarUrl="Picture.png"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() => window.location.href = '#contact'}
              behindGlowEnabled={true}
              behindGlowColor="rgba(125, 190, 255, 0.67)"
              innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
            />
          </div>

          {/* Right (Text + Icons) */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <div className="text-and-links text-center md:text-left">
              <p className="text-sm sm:text-base leading-relaxed" style={{ color: '#86868b' }}>
                Hello everyone,<br />
                My name is Raj Kumar Karn, and I'm someone who genuinely loves what I do. For me, coding isn't just about writing lines of code—it's about solving real problems and creating experiences that make a difference.
                <br /><br />
                I'm naturally curious and always exploring new technologies. Whether it's designing a beautiful interface or architecting a robust backend, I enjoy the entire process of bringing ideas to life. My journey started with a fascination for colors and design, which eventually led me to the world of software development.
                <br /><br />
                I believe in continuous growth, clean code, and building things that matter. When I'm not coding, you'll find me sketching UI concepts, solving algorithmic puzzles, or simply brainstorming the next big idea. I'm driven by challenges and motivated by the impact my work can have.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Secondsection;
