import React, { useState, useEffect } from 'react';
import { ReactTyped } from "react-typed";
import Spline from "./Spline";
import SplineNext from "./SplineNext";

const Hero = () => {
  const [showIntro, setShowIntro] = useState(false);
  const [showName, setShowName] = useState(false);
  const [showRole, setShowRole] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const introTimer = setTimeout(() => setShowIntro(true), 100);
    const nameTimer = setTimeout(() => setShowName(true), 500);
    const roleTimer = setTimeout(() => setShowRole(true), 800);
    const buttonTimer = setTimeout(() => setShowButton(true), 3000); // show after Spline loads

    return () => {
      clearTimeout(introTimer);
      clearTimeout(nameTimer);
      clearTimeout(roleTimer);
      clearTimeout(buttonTimer);
    };
  }, []);

  return (
    <div className="relative min-h-[700px] sm:min-h-[750px] md:min-h-[850px] lg:min-h-[900px] w-full bg-black text-white overflow-hidden">
      
      {/* SPLINE NEXT - background behind everything */}
      <div className="absolute inset-0 z-0 w-full h-full pointer-events-none">
        <SplineNext />
      </div>

      {/* TEXT SECTION - behind the robot */}
      <div className="relative z-[5] flex flex-col items-center justify-center text-center pt-[80px] sm:pt-[90px] md:pt-[100px] px-4">
        <div className="max-w-5xl space-y-4">
          {/* "Hello, My name is" */}
          <div
            className={`transition-opacity duration-700 ease-in ${
              showIntro ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <p className="font-michroma text-sm sm:text-base md:text-lg text-[#8A8A8A] font-semibold">
              Hello, My name is
            </p>
          </div>

          {/* "Raj Kumar Karn" */}
          <div
            className={`transition-opacity duration-700 ease-in ${
              showName ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <h1 style={{ fontFamily: "'Inter', sans-serif" }} className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black uppercase bg-gradient-to-r from-[#777777] to-white bg-clip-text text-transparent">
              Raj Kumar Karn
            </h1>
          </div>

        </div>
      </div>

      {/* "& I am a Professional" on left | SPLINE ROBOT center | Typed text on right */}
      <div className="relative z-20 flex items-center justify-between w-full max-w-[995px] mx-auto px-6 mt-4">
        {/* Left - "& I am a Professional" */}
        <div
          className={`transition-opacity duration-700 ease-in ${
            showRole ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <p className="font-michroma text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-[#8A8A8A] text-left whitespace-nowrap">
            & I am a Professional
          </p>
        </div>

        {/* Right - Typed role */}
        <div
          className={`transition-opacity duration-700 ease-in ${
            showRole ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <ReactTyped
            className="block text-sm sm:text-base md:text-lg lg:text-2xl font-bold font-michroma text-white text-right"
            strings={["Frontend Developer", "UI/UX Developer"]}
            typeSpeed={100}
            backSpeed={30}
            loop
          />
        </div>
      </div>

      {/* Contact Me Button - appears after Spline loads */}
      <div className={`absolute bottom-[100px] left-1/2 -translate-x-1/2 z-20 flex justify-center transition-opacity duration-700 ease-in ${showButton ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <a
          href="#contact"
          className="group relative inline-flex items-center bg-[#1E1E1E] border border-[#535353] text-[#989898] font-semibold rounded-full shadow-md px-12 py-4 transition-all duration-300 ease-in-out whitespace-nowrap
            hover:bg-[#141414] hover:border-[#646cff] hover:shadow-[0_0_15px_rgba(100,108,255,0.5)] focus:bg-[#141414] focus:border-[#646cff] active:bg-[#141414] active:border-[#646cff]"
        >
          <span className="text-lg text-[#989898] transition-all duration-300 group-hover:text-white group-focus:text-white group-active:text-white">
            Contact Me
          </span>
          <span className="flex items-center ml-1 overflow-hidden transition-all duration-300
            w-0 group-hover:w-6 group-focus:w-6 group-active:w-6">
            <img
              src="/arrow2.png"
              alt=""
              className="w-4 h-4 transform translate-x-2 opacity-0 transition-all duration-300
                group-hover:translate-x-0 group-hover:opacity-100
                group-focus:translate-x-0 group-focus:opacity-100
                group-active:translate-x-0 group-active:opacity-100"
            />
          </span>
        </a>
      </div>

      {/* SPLINE ROBOT - absolute, overlaps onto the text */}
      <div className="absolute inset-0 z-10 pointer-events-auto w-full h-full max-w-[1400px] mx-auto left-0 right-0 top-[150px] sm:top-[120px] md:top-[100px]">
        <Spline />
      </div>
    </div>
  );
};

export default Hero;
