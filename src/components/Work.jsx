import React from 'react';
import RippleGrid from './RippleGrid';

const workData = [
  {
    logo: 'proceedit.png',
    title: 'CWY',
    subtitle: 'Software Solutions',
    role: 'Full Stack Developer',
    design: 'MERN Stack',
    dev: 'React & Node.js',
    date: '12/2025 - Present',
    btnWidth: '130px',
    btnHover: '150px',
  },
  {
    logo: 'proceedit.png',
    title: 'LensUp Technologies',
    subtitle: 'Tech Company',
    role: 'Backend Developer',
    design: 'Node.js & Express.js',
    dev: 'MongoDB & REST APIs',
    date: '08/2025 - 11/2025',
    btnWidth: '130px',
    btnHover: '150px',
  },
  {
    logo: 'proceedit.png',
    title: 'Proceedit',
    subtitle: 'Trading Automation',
    role: 'Frontend Application Developer',
    design: 'Designed in Figma',
    dev: 'Developed in Flutterflow',
    date: '01/2025 - 07/2025',
    btnWidth: '130px',
    btnHover: '150px',
  },
  {
    logo: 'techgiants.png',
    title: 'Tech Giants',
    subtitle: "IITM's Society",
    role: 'Frontend Developer',
    design: 'Designed in Figma',
    dev: 'Developed in WIX',
    date: '05/2024 - 01/2025',
    btnWidth: '150px',
    btnHover: '180px',
  },
];

const Work = () => {
  return (
    <div id="experience" className="w-full min-h-[600px] flex flex-col bg-black items-center px-4 py-12 md:py-16" style={{ marginTop: '50px' }}>
      <h3 className="text-white font-michroma text-lg md:text-xl lg:text-2xl mb-8 md:mb-10">Work Experience</h3>

      <div className="flex flex-wrap lg:flex-nowrap justify-center gap-4 md:gap-4 w-full max-w-[1600px]">
        {workData.map((exp, i) => (
          <div
            key={i}
            className="group w-full max-w-[350px] h-[480px] md:h-[500px] border border-[#2B2B2B] 
            hover:border-[#646cff] hover:shadow-[0_0_15px_rgba(100,108,255,0.5)]
            focus:border-[#646cff] focus:shadow-[0_0_15px_rgba(100,108,255,0.5)]
            active:border-[#646cff] active:shadow-[0_0_15px_rgba(100,108,255,0.5)]
            rounded-3xl overflow-hidden transition-all duration-300 block flex-shrink-0"
          >
            <div className="flex flex-col h-full bg-transparent relative overflow-hidden">
              
              {/* RippleGrid Background - Full Height */}
              <div className="absolute inset-0 z-0">
                <RippleGrid
                  enableRainbow={false}
                  gridColor="#646cff"
                  rippleIntensity={0.05}
                  gridSize={10}
                  gridThickness={15}
                  mouseInteraction={true}
                  mouseInteractionRadius={1.2}
                  opacity={0.6}
                />
              </div>

              {/* Logo Section */}
              <div className="w-full h-[60%] flex justify-center items-center p-6 relative z-10">
                <img
                  src={exp.logo}
                  loading="lazy"
                  decoding="async"
                  className={`${
                    i === 3 ? 'w-[80px] h-[80px]' : 'max-w-[200px] h-[60px]'
                  } object-contain opacity-80`}
                  alt={exp.title}
                />
              </div>

              {/* Text Section with Glass Effect */}
              <div className="flex flex-col justify-center px-6 md:px-8 py-4 md:py-6 h-[40%] m-3 md:m-4 rounded-2xl relative z-10"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                <h2 className="text-lg md:text-xl font-semibold mb-1 
                  text-white 
                  group-hover:text-[#646cff] group-focus:text-[#646cff] group-active:text-[#646cff] 
                  transition-colors duration-300">
                  {exp.title}
                </h2>
                <p className="text-xs md:text-sm text-[#A8A1A1] font-medium mb-2">
                  {exp.role}
                </p>
                <p className="text-[#8A8A8A] text-xs md:text-sm font-medium">
                  {exp.design}<br />{exp.dev}
                </p>
                <p className="text-[#8A8A8A] text-xs font-bold mt-2">
                  {exp.date}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
