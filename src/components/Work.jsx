import React from 'react';

const workData = [
  {
    logo: 'proceedit.png',
    title: 'Proceedit',
    subtitle: 'Trading Automation',
    role: 'Frontend Application Developer',
    design: 'Designed in Figma',
    dev: 'Developed in Flutterflow',
    date: '05/01/2025 - 02/07/2025',
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
    date: '04/05/2024 - 04/01/2025',
    btnWidth: '150px',
    btnHover: '180px',
  },
  {
    logo: 'techholics.png',
    title: 'Tech Holics',
    subtitle: 'E-learning Platform',
    role: 'Frontend Developer',
    design: 'Designed in HTML, CSS, JS',
    dev: 'Developed in Flutterflow',
    date: '04/05/2024 - 04/01/2025',
    btnWidth: '150px',
    btnHover: '180px',
  },
];

const Work = () => {
  return (
    <div id="experience" className="w-full min-h-[600px] flex flex-col bg-black items-center px-4">
      <h3 className="text-white font-michroma text-xl mt-6">Work Experience</h3>

      <div className="flex flex-wrap justify-center gap-6 mt-8">
        {workData.map((exp, i) => (
          <div
            key={i}
            className="bg-[#171717] group border border-[#2B2B2B] w-full sm:w-[400px] h-[500px] rounded-[30px] sm:rounded-[60px] flex flex-col justify-between p-6 transition-all duration-300
              hover:bg-[#101010] focus:bg-[#101010] active:bg-[#101010]
              hover:border-[#D5A9EF] focus:border-[#D5A9EF] active:border-[#D5A9EF]"
          >
            {/* Top Content */}
            <div className="flex flex-col items-center">
              <img
                src={exp.logo}
                className={`${
                  i === 1 ? 'w-[50px] h-[50px]' : 'w-[184px] h-[40px]'
                } mt-2 sm:mt-4 mx-auto opacity-50
                  group-hover:opacity-100 group-focus:opacity-100 group-active:opacity-100`}
                alt=""
              />
              <div className="mt-6 text-center">
                <h1 className="text-[28px] sm:text-[36px] font-bold font-Work-Sans text-white 
                  group-hover:text-[#D5A9EF] group-focus:text-[#D5A9EF] group-active:text-[#D5A9EF]">
                  {exp.title}
                </h1>
                <p className="text-[18px] sm:text-[24px] font-bold text-white 
                  group-hover:text-[#D5A9EF] group-focus:text-[#D5A9EF] group-active:text-[#D5A9EF]">
                  {exp.subtitle}
                </p>
                <p className="text-[16px] text-[#A8A1A1] font-bold mt-4 
                  group-hover:text-white group-focus:text-white group-active:text-white">
                  {exp.role}
                </p>
                <div className="text-[12px] text-[#9B9B9B] mt-2 space-y-1 
                  group-hover:text-white group-focus:text-white group-active:text-white">
                  <p>{exp.design}</p>
                  <p>{exp.dev}</p>
                  <p className="font-bold">{exp.date}</p>
                </div>
              </div>
            </div>

            {/* Button */}
            <button
              style={{
                width: exp.btnWidth,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.width = exp.btnHover)}
              onMouseLeave={(e) => (e.currentTarget.style.width = exp.btnWidth)}
              onTouchStart={(e) => (e.currentTarget.style.width = exp.btnHover)}
              onTouchEnd={(e) => (e.currentTarget.style.width = exp.btnWidth)}
              className="group relative flex items-center justify-center text-white bg-[#676767] font-bold h-[35px] mt-6 sm:mt-4 mx-auto rounded-[15px] px-4 transition-all duration-300 ease-in-out hover:bg-[#9C28DF] focus:bg-[#9C28DF] active:bg-[#9C28DF]"
            >
              <span className="whitespace-nowrap">More Info</span>
              <span className="flex items-center ml-1 overflow-hidden transition-all duration-300 w-0 
                group-hover:w-6 group-focus:w-6 group-active:w-6">
                <img
                  src="/arrow2.png"
                  alt=""
                  className="w-4 h-4 transform translate-x-2 opacity-0 transition-all duration-300 
                    group-hover:translate-x-0 group-hover:opacity-100 
                    group-focus:translate-x-0 group-focus:opacity-100 
                    group-active:translate-x-0 group-active:opacity-100"
                />
              </span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
