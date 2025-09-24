import React, { useState, useEffect } from 'react';
import { ReactTyped } from "react-typed";
import Spline from "./Spline";

const Hero = () => {
  const [showIntro, setShowIntro] = useState(false);
  const [showName, setShowName] = useState(false);
  const [showRole, setShowRole] = useState(false);

  useEffect(() => {
    const introTimer = setTimeout(() => setShowIntro(true), 100);
    const nameTimer = setTimeout(() => setShowName(true), 500);
    const roleTimer = setTimeout(() => setShowRole(true), 800);

    return () => {
      clearTimeout(introTimer);
      clearTimeout(nameTimer);
      clearTimeout(roleTimer);
    };
  }, []);

  return (
    <div className="min-h-[600px] w-full bg-black text-white flex flex-col items-center justify-center px-4 pt- md:pt-[150px]">
      
      {/* TEXT SECTION */}
      <div className="text-center max-w-3xl space-y-4">
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
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-michroma font-extrabold text-[#C7C7C7]">
            Raj Kumar Karn
          </h1>
        </div>

        {/* "& I am a Professional" + Typed */}
        <div
          className={`transition-opacity duration-700 ease-in ${
            showRole ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <p className="font-michroma text-sm sm:text-base md:text-lg font-semibold text-[#8A8A8A]">
            & I am a Professional
          </p>
          <ReactTyped
            className="mt-3 block text-base sm:text-lg md:text-xl lg:text-2xl font-bold font-michroma text-[#9C28DF]"
            strings={["Frontend Developer", "UI/UX Developer"]}
            typeSpeed={100}
            backSpeed={30}
            loop
          />
        </div>
      </div>

      {/* SPLINE ROBOT */}
      <div className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] max-w-[1250px] overflow-hidden rounded-xl shadow-xl mt-6 sm:mt-8">
        <Spline />
      </div>
    </div>
  );
};

export default Hero;
