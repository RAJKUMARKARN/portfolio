import React from 'react';

const ProjectsNew = () => {
  return (
    <div id="projects" className="min-h-screen w-full flex flex-col items-center bg-black px-4 py-10 space-y-10">
      <h3 className="font-michroma text-[#E9E9E9] font-bold text-lg md:text-xl lg:text-2xl">
        Projects
      </h3>

      {[
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
          className="group w-full max-w-5xl h-auto border border-[#2B2B2B] 
          hover:border-[#D5A9EF] focus:border-[#D5A9EF] active:border-[#D5A9EF] 
          rounded-lg overflow-hidden transition-colors duration-300 block"
        >
          <div className="flex flex-col-reverse md:flex-row h-full 
            bg-[#171717] 
            group-hover:bg-[#101010] group-focus:bg-[#101010] group-active:bg-[#101010]">
            {/* Text Section */}
            <div className="flex items-center px-6 py-8 md:py-0 md:px-10 w-full md:w-1/2">
              <div>
                <img src={proj.icon} alt="Icon" className="w-[33px] h-[33px] mb-4" />
                <h2 className="text-lg md:text-xl font-semibold mb-2 
                  text-white 
                  group-hover:text-[#D5A9EF] group-focus:text-[#D5A9EF] group-active:text-[#D5A9EF] 
                  transition-colors duration-300">
                  {proj.title}
                </h2>
                <p className="text-[#8A8A8A] 
                  group-hover:text-white group-focus:text-white group-active:text-white 
                  text-sm md:text-base font-medium whitespace-pre-line">
                  {proj.desc}
                </p>
              </div>
            </div>

            {/* Image Section */}
            <div
              className="w-full md:w-1/2 flex justify-center items-center p-6"
              style={{ backgroundColor: proj.bg }}
            >
              <img
                src={proj.preview}
                alt={`${proj.title} UI`}
                className="max-h-[180px] w-auto object-contain"
              />
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default ProjectsNew;
