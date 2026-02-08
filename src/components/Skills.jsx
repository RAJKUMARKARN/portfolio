import React from 'react';
import LogoLoop from './LogoLoop';
import { SiReact, SiTailwindcss, SiNodedotjs, SiMongodb, SiMysql, SiJavascript, SiHtml5, SiCss3, SiBootstrap, SiExpress, SiGoogleplay, SiAppstore } from 'react-icons/si';
import { TbBrandReactNative, TbBrandCpp } from 'react-icons/tb';
import { FaJava } from 'react-icons/fa';
import { DiCode } from 'react-icons/di';

const techLogos = [
  { node: <FaJava />, title: "Java", href: "https://www.java.com" },
  { node: <TbBrandCpp />, title: "C++", href: "https://cplusplus.com" },
  { node: <SiJavascript />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { node: <SiHtml5 />, title: "HTML", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { node: <SiCss3 />, title: "CSS", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { node: <DiCode />, title: "C", href: "https://en.wikipedia.org/wiki/C_(programming_language)" },
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <TbBrandReactNative />, title: "React Native", href: "https://reactnative.dev" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiBootstrap />, title: "Bootstrap", href: "https://getbootstrap.com" },
  { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiExpress />, title: "Express.js", href: "https://expressjs.com" },
  { node: <SiMongodb />, title: "MongoDB", href: "https://www.mongodb.com" },
  { node: <SiMysql />, title: "MySQL", href: "https://www.mysql.com" },
  { node: <SiGoogleplay />, title: "Google Play Store", href: "https://play.google.com/console" },
  { node: <SiAppstore />, title: "Apple App Store", href: "https://developer.apple.com/app-store/" },
];

const Skills = () => {
  return (
    <div
      className="bg-cover bg-center rounded-xl min-h-[400px] md:min-h-[400px] shadow-xl flex flex-col items-center justify-center text-center px-4 py-12 md:py-12 w-full"
      style={{ 
        backgroundImage: "url('skills-bg.png')",
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        marginTop: '50px'
      }}
    >
      <h2 className="text-white font-michroma font-bold text-lg md:text-xl lg:text-2xl mb-8 md:mb-16">Skills</h2>

      {/* Logo Loop Section */}
      <div className="w-full max-w-7xl">
        <LogoLoop
          logos={techLogos}
          speed={20}
          direction="left"
          logoHeight={60}
          gap={80}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          fadeOutColor="#000000"
          ariaLabel="Technology stack"
        />
      </div>
    </div>
  );
};

export default Skills;
