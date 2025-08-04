import React, { useState, useEffect, useRef } from 'react';

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
    <div className="w-full min-h-screen bg-black flex items-center justify-center px-4 md:px-8">
      <div
        id="about"
        ref={sectionRef}
        className={`transition-opacity duration-700 ease-in-out ${
          hideSection ? 'opacity-0 pointer-events-none' : 'opacity-100'
        } flex flex-col items-center w-full max-w-7xl`}
      >
        {/* Heading */}
        <h3
          className={`text-white text-xl md:text-2xl font-michroma font-bold mb-6 transition-opacity duration-700 ${
            showHeading ? 'opacity-100' : 'opacity-0'
          }`}
        >
          About Me
        </h3>

        {/* Content */}
        <div
          className={`mt-6 w-full flex flex-col md:flex-row items-center justify-center rounded-[40px] border transition-opacity duration-700 ${
            showContent ? 'opacity-100' : 'opacity-0'
          } px-4 py-8 md:py-12 md:px-10`}
        >
          {/* Left (Image) */}
          <div className="w-full md:w-1/2 flex justify-center items-center mb-8 md:mb-0">
            <img
              src="Picture.png"
              alt="my image"
              className="w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px] xl:w-[450px] h-auto object-contain"
            />
          </div>

          {/* Right (Text + Icons) */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <div className="text-and-links text-center md:text-left">
              <p className="text-white text-sm sm:text-base leading-relaxed">
                Hello everyone,<br />
                My Name is RajKumar Karn. I am a passionate web developer and currently learning full-stack development.
                I have completed B.Tech CSE from Delhi Global Institute of Technology, Haryana with 7.5 CGPA.
                <br /><br />
                <strong>EDUCATION:</strong><br />
                I have completed my graduation in Computer Science Engineering (2025). I completed my senior secondary
                education from Vishwa Bharti Public School(CBSE). My passion for
                UI/UX and frontend engineering started from my love for color, drawing, and design. I now enjoy building
                modern interfaces with React.
              </p>

              {/* Icon Row */}
              <div className="flex justify-center md:justify-start space-x-4 mt-6">
                <a href="https://leetcode.com/u/Rajkumarkarn/">
                  <img
                    src="leetcode.png"
                    alt="LeetCode"
                    className="h-7 w-7 opacity-50 hover:opacity-100 focus:opacity-100 active:opacity-100 transition"
                  />
                </a>
                <a href="https://www.linkedin.com/in/raj-kumar-karn-55230a186/">
                  <img
                    src="linkedin.png"
                    alt="LinkedIn"
                    className="h-7 w-7 opacity-50 hover:opacity-100 focus:opacity-100 active:opacity-100 transition"
                  />
                </a>
                <a href="https://github.com/RAJKUMARKARN">
                  <img
                    src="github.png"
                    alt="GitHub"
                    className="h-7 w-7 opacity-50 hover:opacity-100 focus:opacity-100 active:opacity-100 transition"
                  />
                </a>
                <a href="mailto:rajkumarkarn002@gmail.com">
                  <img
                    src="gmail.png"
                    alt="Gmail"
                    className="h-7 w-7 opacity-50 hover:opacity-100 focus:opacity-100 active:opacity-100 transition"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Secondsection;
