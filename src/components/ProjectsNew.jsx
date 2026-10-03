import React, { useEffect, useRef, memo } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  FiExternalLink, 
  FiGithub, 
  FiArrowUpRight, 
  FiCheckCircle, 
  FiGlobe
} from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
  {
    id: 'lifeflows',
    number: '01',
    title: 'Life Flows',
    tagline: 'Emergency Blood Donation & Donor Network',
    category: 'Full-Stack MERN',
    desc: 'Humanitarian web platform connecting voluntary blood donors directly with recipients during urgent emergencies with real-time location filtering and request feeds.',
    preview: 'book2.png',
    accentColor: '#EF4444',
    tags: ['React 19', 'Node.js', 'MongoDB', 'TailwindCSS'],
    highlights: [
      'Real-time donor geolocation matching',
      'Emergency broadcast notification feed'
    ],
    urlDisplay: 'life-flows.vercel.app',
    demoLink: 'https://life-flows.vercel.app/',
    githubLink: 'https://github.com/RAJKUMARKARN',
  },
  {
    id: 'ebooks',
    number: '02',
    title: 'E-Book Store',
    tagline: 'Digital Publishing & Content Marketplace',
    category: 'MERN & Figma',
    desc: 'Digital publishing marketplace designed in Figma and developed in MERN. Features instant in-browser digital reader preview, shopping cart checkout, and digital asset security.',
    preview: 'book2.png',
    accentColor: '#A855F7',
    tags: ['React', 'Node.js', 'Express', 'JWT Auth'],
    highlights: [
      'Sub-pixel Figma-to-code design fidelity',
      'Protected digital download streaming'
    ],
    urlDisplay: 'ebooks-store.vercel.app',
    demoLink: 'https://life-flows.vercel.app/',
    githubLink: 'https://github.com/RAJKUMARKARN',
  },
  {
    id: 'gaming',
    number: '03',
    title: 'Galaxy Gaming',
    tagline: 'Indie Game Discovery & Telemetry Hub',
    category: 'Creative Web App',
    desc: 'Cyberpunk-themed gaming platform showcasing indie game releases, system requirements compatibility telemetry, and direct optimized downloads.',
    preview: 'game.png',
    accentColor: '#00F0FF',
    tags: ['JavaScript', 'Figma UI/UX', 'CSS Grid', 'WebGL'],
    highlights: [
      '60 FPS fluid micro-animations & HUD',
      'Hardware requirements & GPU validator'
    ],
    urlDisplay: 'galaxy-games.dev',
    demoLink: 'https://github.com/RAJKUMARKARN/gaming-website',
    githubLink: 'https://github.com/RAJKUMARKARN/gaming-website',
  },
  {
    id: 'snaplearn',
    number: '04',
    title: 'SnapLearn',
    tagline: 'Interactive Modular Education Platform',
    category: 'EdTech & MERN',
    desc: 'Full-stack learning application featuring structured multimedia courses, student progress telemetry, and interactive quizzes for intuitive tech education.',
    preview: 'snapLearn.png',
    accentColor: '#10B981',
    tags: ['React.js', 'Express.js', 'MongoDB', 'Tailwind'],
    highlights: [
      'Modular course tracks with progress sync',
      'Sub-second initial paint with mobile UI'
    ],
    urlDisplay: 'snaplearn.edu',
    demoLink: 'https://github.com/RAJKUMARKARN/16-galaxy',
    githubLink: 'https://github.com/RAJKUMARKARN/16-galaxy',
  }
];

const ProjectCard = memo(({ project, index }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

    gsap.to(card, {
      rotateX: rotateX,
      rotateY: rotateY,
      duration: 0.3,
      ease: 'power2.out',
      transformPerspective: 1000,
    });
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
      ease: 'power2.out',
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="project-card group relative w-full rounded-3xl bg-neutral-950/85 border border-white/10 hover:border-white/25 transition-all duration-500 backdrop-blur-2xl flex flex-col justify-between overflow-hidden shadow-2xl hover:-translate-y-2"
      style={{
        boxShadow: `0 15px 35px -15px ${project.accentColor}25`
      }}
    >
      {/* Subtle cursor spotlight follower */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10"
        style={{
          background: `radial-gradient(300px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${project.accentColor}20, transparent 40%)`
        }}
      />

      <div className="relative z-10 p-5 sm:p-6 flex flex-col justify-between h-full">
        
        {/* Preview Frame */}
        <div className="rounded-2xl bg-neutral-900/90 border border-white/10 overflow-hidden mb-4 group-hover:border-white/20 transition-all duration-300 shadow-lg">
          {/* Header Bar */}
          <div className="flex items-center justify-between px-3 py-2 bg-neutral-900 border-b border-white/10 text-xs font-mono">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-rose-500/80" />
              <div className="w-2 h-2 rounded-full bg-amber-500/80" />
              <div className="w-2 h-2 rounded-full bg-emerald-500/80" />
            </div>

            <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-black/50 border border-white/10 text-[10px] text-neutral-400">
              <FiGlobe className="text-[9px] text-cyan-400" />
              <span className="truncate max-w-[120px]">{project.urlDisplay}</span>
            </div>

            <div className="w-4" />
          </div>

          {/* Screenshot Viewport */}
          <div className="relative w-full h-[180px] bg-black/80 flex items-center justify-center p-4 overflow-hidden">
            <div
              className="absolute inset-0 opacity-15 pointer-events-none"
              style={{
                background: `radial-gradient(circle at center, ${project.accentColor} 0%, transparent 70%)`
              }}
            />

            <img
              src={project.preview}
              alt={`${project.title} screenshot`}
              loading="lazy"
              decoding="async"
              className="max-h-[150px] w-auto object-contain transition-transform duration-700 ease-out group-hover:scale-106 drop-shadow-[0_10px_25px_rgba(0,0,0,0.9)]"
            />
          </div>
        </div>

        {/* Project Content Area */}
        <div className="flex flex-col gap-3 flex-1 justify-between">
          
          <div>
            {/* Meta Row */}
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="font-mono text-xs text-neutral-500 font-bold">
                {project.number} //
              </span>
              <span
                className="px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold tracking-wider uppercase border"
                style={{
                  borderColor: `${project.accentColor}40`,
                  backgroundColor: `${project.accentColor}15`,
                  color: project.accentColor
                }}
              >
                {project.category}
              </span>
            </div>

            {/* Title & Tagline */}
            <h3 className="text-lg sm:text-xl font-michroma font-bold text-white tracking-wide group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-cyan-300 transition-all duration-300">
              {project.title}
            </h3>
            <p className="text-[11px] font-mono text-neutral-400 mt-0.5 mb-2 line-clamp-1">
              {project.tagline}
            </p>

            {/* Description */}
            <p className="text-xs text-neutral-300 leading-relaxed font-normal line-clamp-3 mb-3">
              {project.desc}
            </p>

            {/* Feature Highlights */}
            <ul className="flex flex-col gap-1.5 mb-3">
              {project.highlights.map((item, hIdx) => (
                <li key={hIdx} className="flex items-start gap-1.5 text-[11px] text-neutral-300 leading-snug">
                  <FiCheckCircle className="text-emerald-400 shrink-0 text-xs mt-0.5" />
                  <span className="line-clamp-1">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-1 mb-4">
              {project.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-white/[0.04] text-neutral-300 border border-white/5"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Bottom Actions */}
            <div className="pt-3 border-t border-white/10 flex items-center gap-2">
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-semibold bg-white text-black hover:bg-neutral-200 transition-all active:scale-95 shadow-[0_0_15px_rgba(255,255,255,0.25)]"
              >
                <span>Live Demo</span>
                <FiArrowUpRight className="text-xs" />
              </a>

              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View source code"
                className="p-2 rounded-xl text-neutral-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all active:scale-95"
              >
                <FiGithub className="text-xs" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
});

ProjectCard.displayName = 'ProjectCard';

const ProjectsNew = memo(() => {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const rowRef = useRef(null);

  // GSAP ScrollTrigger 4-Cards Stagger Entrance
  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Header reveal
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

      // 2. 4 Cards Staggered Entrance in a Row
      const cards = rowRef.current?.querySelectorAll('.project-card');
      if (cards && cards.length > 0) {
        gsap.fromTo(
          cards,
          {
            opacity: 0,
            y: 50,
            scale: 0.95,
            filter: 'blur(8px)',
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: 'blur(0px)',
            duration: 0.75,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: rowRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      id="projects"
      ref={containerRef}
      className="relative w-full bg-black text-white px-4 sm:px-6 md:px-8 lg:px-10 py-16 md:py-24 select-none"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-1/4 w-[700px] h-[400px] bg-cyan-950/15 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-1/4 w-[700px] h-[400px] bg-purple-950/15 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-[1600px] mx-auto flex flex-col gap-10">
        
        {/* Section Header */}
        <div ref={headerRef} className="flex flex-col items-center md:items-start text-center md:text-left gap-3 pb-6 border-b border-white/10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/20 text-cyan-400 text-xs sm:text-sm font-mono tracking-wider">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span>03 // PORTFOLIO SHOWCASE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-michroma font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-100 to-neutral-400">
            FEATURED PROJECTS.
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 max-w-2xl font-normal leading-relaxed">
            Curated collection of full-stack web applications, mobile platforms, and creative engineering experiments.
          </p>
        </div>

        {/* 4 Divs in a Single Row on Large Screens */}
        <div
          ref={rowRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch w-full"
        >
          {PROJECTS.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={idx}
            />
          ))}
        </div>

      </div>
    </div>
  );
});

ProjectsNew.displayName = 'ProjectsNew';

export default ProjectsNew;
