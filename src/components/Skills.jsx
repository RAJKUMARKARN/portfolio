import React, { useState, useEffect, useRef, useMemo } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LogoLoop from './LogoLoop';
import { 
  SiReact, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiMongodb, 
  SiMysql, 
  SiJavascript, 
  SiHtml5, 
  SiCss3, 
  SiBootstrap, 
  SiExpress, 
  SiGoogleplay, 
  SiAppstore 
} from 'react-icons/si';
import { TbBrandReactNative, TbBrandCpp } from 'react-icons/tb';
import { FaJava } from 'react-icons/fa';
import { DiCode } from 'react-icons/di';
import { FiCpu, FiLayers, FiCode as FiCodeIcon, FiSmartphone, FiDatabase, FiZap } from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

const SKILLS_DATA = [
  // Languages
  {
    name: 'JavaScript (ES6+)',
    category: 'languages',
    percentage: 94,
    level: 'Expert',
    icon: SiJavascript,
    color: '#F7DF1E',
    gradient: 'from-amber-400 via-yellow-500 to-amber-600',
    description: 'V8 Engine, Event Loop, Closures & Modern Async Patterns'
  },
  {
    name: 'Java',
    category: 'languages',
    percentage: 90,
    level: 'Advanced',
    icon: FaJava,
    color: '#ED8B00',
    gradient: 'from-orange-500 via-amber-500 to-orange-600',
    description: 'OOP, Multithreading, DSA & Algorithmic Problem Solving'
  },
  {
    name: 'C++',
    category: 'languages',
    percentage: 88,
    level: 'Advanced',
    icon: TbBrandCpp,
    color: '#00599C',
    gradient: 'from-blue-500 via-indigo-500 to-blue-600',
    description: 'STL, Competitive Programming & Memory Optimization'
  },
  {
    name: 'C Language',
    category: 'languages',
    percentage: 85,
    level: 'Proficient',
    icon: DiCode,
    color: '#A8B9CC',
    gradient: 'from-slate-400 via-neutral-400 to-slate-500',
    description: 'Low-Level Pointers, Memory Management & System Concepts'
  },

  // Frontend
  {
    name: 'React 19',
    category: 'frontend',
    percentage: 93,
    level: 'Expert',
    icon: SiReact,
    color: '#00D8FF',
    gradient: 'from-cyan-400 via-sky-500 to-blue-600',
    description: 'Server Components, Hooks Architecture, State Management & GSAP'
  },
  {
    name: 'Tailwind CSS',
    category: 'frontend',
    percentage: 96,
    level: 'Master',
    icon: SiTailwindcss,
    color: '#38BDF8',
    gradient: 'from-sky-400 via-teal-400 to-cyan-600',
    description: 'Design Tokens, JIT Engine, Responsive Layouts & Cyber Glass'
  },
  {
    name: 'HTML5 & CSS3',
    category: 'frontend',
    percentage: 95,
    level: 'Master',
    icon: SiHtml5,
    color: '#E34F26',
    gradient: 'from-orange-500 via-rose-500 to-red-600',
    description: 'Semantic Markup, Flexbox/Grid, Animations & Accessibility'
  },
  {
    name: 'Bootstrap',
    category: 'frontend',
    percentage: 86,
    level: 'Proficient',
    icon: SiBootstrap,
    color: '#7952B3',
    gradient: 'from-purple-500 via-violet-500 to-indigo-600',
    description: 'Rapid Prototyping, Grid Systems & Responsive Utility Layouts'
  },

  // Backend & Databases
  {
    name: 'Node.js',
    category: 'backend',
    percentage: 88,
    level: 'Advanced',
    icon: SiNodedotjs,
    color: '#68A063',
    gradient: 'from-emerald-400 via-green-500 to-emerald-600',
    description: 'Event-Driven Architecture, Microservices & Scalable APIs'
  },
  {
    name: 'Express.js',
    category: 'backend',
    percentage: 87,
    level: 'Advanced',
    icon: SiExpress,
    color: '#E5E5E5',
    gradient: 'from-neutral-200 via-neutral-300 to-neutral-400',
    description: 'RESTful API Engineering, Middleware Pipelines & Security'
  },
  {
    name: 'MongoDB',
    category: 'backend',
    percentage: 85,
    level: 'Advanced',
    icon: SiMongodb,
    color: '#47A248',
    gradient: 'from-green-400 via-emerald-500 to-green-600',
    description: 'NoSQL Schemas, Aggregation Pipelines & Document Modeling'
  },
  {
    name: 'MySQL',
    category: 'backend',
    percentage: 83,
    level: 'Proficient',
    icon: SiMysql,
    color: '#4479A1',
    gradient: 'from-blue-400 via-sky-500 to-cyan-600',
    description: 'Relational Schemas, Complex Joins, Indexing & Query Optimization'
  },

  // Mobile & Deployment
  {
    name: 'React Native',
    category: 'mobile',
    percentage: 86,
    level: 'Advanced',
    icon: TbBrandReactNative,
    color: '#61DAFB',
    gradient: 'from-cyan-400 via-indigo-500 to-blue-600',
    description: 'Cross-Platform iOS & Android Apps, Native Modules & Navigation'
  },
  {
    name: 'Google Play Store',
    category: 'mobile',
    percentage: 82,
    level: 'Proficient',
    icon: SiGoogleplay,
    color: '#01875F',
    gradient: 'from-emerald-500 via-teal-500 to-teal-600',
    description: 'App Bundles, Release Management, Console & Store Compliance'
  },
  {
    name: 'Apple App Store',
    category: 'mobile',
    percentage: 80,
    level: 'Proficient',
    icon: SiAppstore,
    color: '#0D96F6',
    gradient: 'from-blue-500 via-sky-400 to-cyan-500',
    description: 'TestFlight Distribution, App Review Process & iOS Signing'
  }
];

const CATEGORIES = [
  { id: 'all', label: 'All Capabilities', icon: FiLayers },
  { id: 'languages', label: 'Core Languages', icon: FiCodeIcon },
  { id: 'frontend', label: 'Frontend & UI/UX', icon: FiCpu },
  { id: 'backend', label: 'Backend & Data', icon: FiDatabase },
  { id: 'mobile', label: 'Mobile & Deploy', icon: FiSmartphone }
];

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
  const [selectedCategory, setSelectedCategory] = useState('all');
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const tabsRef = useRef(null);
  const cardsContainerRef = useRef(null);

  const filteredSkills = useMemo(() => {
    if (selectedCategory === 'all') return SKILLS_DATA;
    return SKILLS_DATA.filter((s) => s.category === selectedCategory);
  }, [selectedCategory]);

  const averageProficiency = useMemo(() => {
    const total = SKILLS_DATA.reduce((acc, s) => acc + s.percentage, 0);
    return Math.round(total / SKILLS_DATA.length);
  }, []);

  // GSAP Animations: ScrollTrigger staggered reveal, fluid bar fills, and live number counting
  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Header entrance
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 35, filter: 'blur(6px)' },
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      // 2. Filter tabs entrance
      if (tabsRef.current) {
        const tabBtns = Array.from(tabsRef.current.children);
        gsap.fromTo(
          tabBtns,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.06,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 82%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      // 3. Skill Cards Staggered 3D Reveal
      const cards = cardsContainerRef.current?.querySelectorAll('.skill-card');
      if (cards && cards.length > 0) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 40, scale: 0.95, filter: 'blur(8px)' },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: 'blur(0px)',
            duration: 0.65,
            stagger: 0.05,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: cardsContainerRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );

        // 4. GSAP animated fluid progress bars & live counting numbers
        cards.forEach((card) => {
          const bar = card.querySelector('.skill-progress-bar');
          const numberEl = card.querySelector('.skill-percent-number');
          const targetPercent = parseInt(card.getAttribute('data-percent') || '0', 10);

          if (bar) {
            gsap.fromTo(
              bar,
              { width: '0%' },
              {
                width: `${targetPercent}%`,
                duration: 1.3,
                ease: 'power2.out',
                scrollTrigger: {
                  trigger: card,
                  start: 'top 90%',
                  toggleActions: 'play none none none',
                },
              }
            );
          }

          if (numberEl) {
            const counterObj = { val: 0 };
            gsap.to(counterObj, {
              val: targetPercent,
              duration: 1.3,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 90%',
                toggleActions: 'play none none none',
              },
              onUpdate: () => {
                numberEl.textContent = Math.round(counterObj.val).toString();
              },
            });
          }
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, [selectedCategory]);

  // Subtle interactive mouse spotlight on hover
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div
      id="skills"
      ref={containerRef}
      className="relative w-full bg-black text-white px-4 sm:px-6 md:px-10 lg:px-12 py-16 md:py-24 overflow-hidden select-none"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-10 w-[600px] h-[350px] bg-cyan-900/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[600px] h-[350px] bg-purple-900/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Header Block */}
        <div ref={headerRef} className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-white/10">
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-purple-500/30 bg-purple-950/20 text-purple-400 text-xs sm:text-sm font-mono tracking-wider">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              <span>TECHNICAL ARSENAL // PROFICIENCY METRICS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-michroma font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-100 to-neutral-400">
              CORE CAPABILITIES.
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 max-w-2xl font-normal leading-relaxed">
              Empirical mastery calibrated through hundreds of solved algorithmic problems and production deployments.
            </p>
          </div>

          {/* Quick Fluency Badge */}
          <div className="flex items-center gap-4 self-center md:self-auto p-3 sm:p-4 rounded-2xl bg-neutral-900/70 border border-white/10 backdrop-blur-xl shadow-lg">
            <div className="flex flex-col">
              <span className="text-[10px] font-mono uppercase text-neutral-500 tracking-wider">Cumulative Mastery</span>
              <div className="flex items-baseline gap-1 mt-0.5">
                <span className="text-2xl sm:text-3xl font-bold font-michroma text-cyan-400">{averageProficiency}%</span>
                <span className="text-xs text-neutral-400 font-mono">avg</span>
              </div>
            </div>
            <div className="h-10 w-[1px] bg-white/10" />
            <div className="flex flex-col">
              <span className="text-[10px] font-mono uppercase text-neutral-500 tracking-wider">Active Tech</span>
              <span className="text-2xl sm:text-3xl font-bold font-michroma text-purple-400">{SKILLS_DATA.length}</span>
            </div>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div ref={tabsRef} className="flex flex-wrap items-center justify-center md:justify-start gap-2 p-1.5 rounded-2xl bg-neutral-900/60 border border-white/10 backdrop-blur-md w-fit mx-auto md:mx-0">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-3.5 py-2 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-white border border-cyan-400/40 shadow-[0_0_15px_rgba(0,240,255,0.2)]'
                    : 'text-neutral-400 hover:text-white hover:bg-white/5 border border-transparent'
                }`}
              >
                <Icon className={`text-sm ${isSelected ? 'text-cyan-400' : 'text-neutral-400'}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* GSAP-Animated Skills Cards Grid */}
        <div ref={cardsContainerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill) => {
            const Icon = skill.icon;

            return (
              <div
                key={skill.name}
                data-percent={skill.percentage}
                onMouseMove={handleMouseMove}
                className="skill-card group relative rounded-2xl p-5 bg-gradient-to-b from-neutral-900/70 to-neutral-950/80 border border-white/10 hover:border-white/20 transition-all duration-500 backdrop-blur-xl flex flex-col justify-between overflow-hidden shadow-xl"
                style={{
                  boxShadow: `0 8px 30px -15px ${skill.color}25`
                }}
              >
                {/* Dynamic Cursor Spotlight Radial Follower */}
                <div
                  className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(350px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${skill.color}18, transparent 40%)`
                  }}
                />

                {/* Top Row: Icon, Title & Level Badge */}
                <div className="relative z-10 flex items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-xl shrink-0 border border-white/10 transition-transform duration-300 group-hover:scale-110"
                      style={{
                        backgroundColor: `${skill.color}15`,
                        color: skill.color,
                        boxShadow: `0 0 15px ${skill.color}30`
                      }}
                    >
                      <Icon />
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-white font-sans tracking-wide">
                        {skill.name}
                      </h4>
                      <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">
                        {skill.category}
                      </span>
                    </div>
                  </div>

                  {/* Level Pill */}
                  <span
                    className="px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold tracking-wider uppercase border"
                    style={{
                      borderColor: `${skill.color}40`,
                      backgroundColor: `${skill.color}15`,
                      color: skill.color
                    }}
                  >
                    {skill.level}
                  </span>
                </div>

                {/* Description Subtext */}
                <p className="relative z-10 text-xs text-neutral-400 mb-4 line-clamp-2 leading-relaxed min-h-[32px]">
                  {skill.description}
                </p>

                {/* Percentage & Innovative Cyber-Bar */}
                <div className="relative z-10 flex flex-col gap-1.5 pt-2 border-t border-white/5">
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="text-neutral-500 text-[11px] flex items-center gap-1">
                      <FiZap className="text-[10px] text-cyan-400" />
                      <span>Proficiency</span>
                    </span>
                    <div className="flex items-baseline gap-0.5">
                      <span className="skill-percent-number text-sm sm:text-base font-bold font-michroma text-white">
                        0
                      </span>
                      <span className="text-[10px] text-neutral-400">%</span>
                    </div>
                  </div>

                  {/* High-Tech HUD Progress Track */}
                  <div className="relative w-full h-3 rounded-full bg-neutral-950 border border-white/10 p-[2px] overflow-hidden">
                    {/* Background Tick Marks (25%, 50%, 75%) */}
                    <div className="absolute inset-0 flex justify-between px-2 pointer-events-none z-10 opacity-30">
                      <div className="w-[1px] h-full bg-white/20" />
                      <div className="w-[1px] h-full bg-white/20" />
                      <div className="w-[1px] h-full bg-white/20" />
                    </div>

                    {/* Fluid Glowing Gradient Fill (Animated by GSAP) */}
                    <div
                      className={`skill-progress-bar h-full rounded-full bg-gradient-to-r ${skill.gradient} relative will-change-[width]`}
                      style={{
                        width: '0%',
                        boxShadow: `0 0 14px ${skill.color}85`
                      }}
                    >
                      {/* Leading Pinpoint Shimmer Light */}
                      <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white shadow-[0_0_8px_#ffffff]" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Ambient Logo Marquee Ribbon */}
        <div className="pt-8 border-t border-white/10 flex flex-col items-center gap-4">
          <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-500">
            CONTINUOUS ECOSYSTEM // ALWAYS ROLLING
          </span>
          <div className="w-full">
            <LogoLoop
              logos={techLogos}
              speed={22}
              direction="left"
              logoHeight={45}
              gap={70}
              hoverSpeed={0}
              scaleOnHover
              fadeOut
              fadeOutColor="#000000"
              ariaLabel="Technology ecosystem marquee"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Skills;
