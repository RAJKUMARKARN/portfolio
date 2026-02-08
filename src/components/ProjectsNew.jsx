import React from 'react';
import Lightning from './Lightning';

const ProjectsNew = () => {
  return (
    <div id="projects" className="w-full flex flex-col items-center bg-black px-4 py-12 md:py-16" style={{ marginTop: '50px' }}>
      <h3 className="font-michroma text-[#E9E9E9] font-bold text-lg md:text-xl lg:text-2xl mb-8 md:mb-10">
        Projects
      </h3>
      <div className="w-full flex flex-row flex-wrap items-stretch justify-center gap-4 md:gap-6">

      {[
        {
          icon: 'book.png',
          title: 'Life Flows',
          desc: 'Blood Donation Platform\nBuilt with MERN Stack',
          preview: 'book2.png',
          bg: '#DC143C',
          link: 'https://life-flows.vercel.app/',
        },
        {
          icon: 'book.png',
          title: 'E-book Selling Website',
          desc: 'Designed in Figma & Developed in MERN Stack',
          preview: 'book2.png',
          bg: '#961747',
          link: 'https://your-ebook-site.com',
        },
        {
          icon: 'gamedownload.png',
          title: 'Game Downloading Website',
          desc: 'Designed in Figma & Developed in basic HTML,\nCSS, JS',
          preview: 'game.png',
          bg: '#252D3F',
          link: 'https://github.com/RAJKUMARKARN/gaming-website',
        },
        {
          icon: 'snaplearnLogo.png',
          title: 'E-learning Website',
          desc: 'Designed in Figma & Developed in MERN Stack',
          preview: 'snapLearn.png',
          bg: '#36A18B',
          link: 'https://github.com/RAJKUMARKARN/16-galaxy',
        },
      ].map((proj, i) => (
        <a
          key={i}
          href={proj.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group w-full max-w-[350px] h-[480px] md:h-[500px] border border-[#2B2B2B] 
          hover:border-[#646cff] hover:shadow-[0_0_15px_rgba(100,108,255,0.5)]
          focus:border-[#646cff] focus:shadow-[0_0_15px_rgba(100,108,255,0.5)]
          active:border-[#646cff] active:shadow-[0_0_15px_rgba(100,108,255,0.5)]
          rounded-3xl overflow-hidden transition-all duration-300 block flex-shrink-0"
        >
          <div className="flex flex-col h-full bg-transparent relative overflow-hidden">
            
            {/* Lightning Background - Full Height - Blue */}
            <div className="absolute inset-0 z-0">
              <Lightning
                hue={230}
                xOffset={0}
                speed={0.8}
                intensity={0.8}
                size={1.2}
              />
            </div>

            {/* Image Section */}
            <div className="w-full h-[60%] flex justify-center items-center p-6 relative z-10">
              <img
                src={proj.preview}
                alt={`${proj.title} UI`}
                loading="lazy"
                decoding="async"
                className="max-h-[220px] w-auto object-contain"
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
              <img src={proj.icon} alt="Icon" loading="lazy" decoding="async" className="w-[28px] h-[28px] md:w-[33px] md:h-[33px] mb-3 md:mb-4" />
              <h2 className="text-lg md:text-xl font-semibold mb-2 
                text-white 
                group-hover:text-[#646cff] group-focus:text-[#646cff] group-active:text-[#646cff] 
                transition-colors duration-300">
                {proj.title}
              </h2>
              <p className="text-[#8A8A8A] text-xs md:text-sm font-medium whitespace-pre-line">
                {proj.desc}
              </p>
            </div>
          </div>
        </a>
      ))}
      </div>
    </div>
  );
};

export default ProjectsNew;
