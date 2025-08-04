import React from 'react';

const Skills = () => {
  return (
    <div
      className="bg-cover bg-center rounded-xl min-h-[700px] shadow-xl flex flex-col items-center justify-center text-center px-4 w-full"
      style={{ backgroundImage: "url('skills-bg.png')" }}
    >
      <h2 className="text-white font-michroma font-bold text-lg md:text-xl lg:text-2xl">Skills</h2>

      <div className="flex flex-wrap justify-center gap-6 mt-12 mb-24 w-full max-w-7xl px-4">
        {/* Card Template */}
        {[
          {
            title: 'Programming Skills',
            items: ['Java', 'C++', 'JavaScript', 'HTML', 'CSS', 'C'],
          },
          {
            title: 'Libraries/Frameworks',
            items: ['React', 'Tailwind JS', 'Bootstrap', 'Node JS'],
          },
          {
            title: 'Databases',
            items: ['MongoDB', 'MySQL'],
          },
        ].map((section, idx) => (
          <div
            key={idx}
            className="group bg-[#000000] rounded-[16px] border border-[#191919] hover:border-[#D5A9EF] p-5 w-full max-w-[300px] h-[300px] overflow-y-auto transition-all duration-300"
          >
            <h1 className="text-sm text-[#B2B2B2] group-hover:text-white text-center font-bold mb-4">
              {section.title}
            </h1>

            <div className="flex flex-wrap justify-center mt-10 gap-2">
              {section.items.map((item, i) => (
                <div
                  key={i}
                  className="group relative flex items-center justify-center text-white bg-[#1E1E1E] font-bold h-[35px] rounded-[15px] px-4 transition-all duration-300 ease-in-out w-[100px] hover:w-[110px] hover:bg-[#9C28DF]"
                >
                  <span className="whitespace-nowrap text-[12px]">{item}</span>
                  <span className="flex items-center ml-1 overflow-hidden transition-all duration-300 w-0 group-hover:w-6">
                    <img
                      src="/arrow2.png"
                      alt=""
                      className="w-4 h-4 transform translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                    />
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
