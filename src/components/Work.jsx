import React, { useEffect, useRef, memo } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  FiCalendar, 
  FiBriefcase, 
  FiCheckCircle, 
  FiZap,
  FiArrowRight,
  FiCode
} from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

const JOURNEY = [
  {
    id: 'techgiants',
    step: '01',
    period: '05/2024 - 01/2025',
    title: 'Tech Giants',
    subtitle: "IITM's Society",
    role: 'Frontend Developer',
    accentColor: '#00F0FF',
    accentGlow: 'rgba(0, 240, 255, 0.35)',
    accentGradient: 'from-cyan-400 via-sky-500 to-blue-600',
    logo: 'techgiants.png',
    summary: 'Spearheaded frontend web architecture and community design systems for the prestigious society at IITM.',
    highlights: [
      'Architected high-conversion student community interfaces and event portals',
      'Established cohesive component design tokens and UI prototypes in Figma',
      'Collaborated on rapid responsive deployments with pixel-perfect cross-browser fidelity'
    ],
    stack: ['Figma', 'UI/UX', 'WIX', 'JavaScript', 'HTML5/CSS3'],
    badge: 'FOUNDATION',
    isCurrent: false,
  },
  {
    id: 'proceedit',
    step: '02',
    period: '01/2025 - 07/2025',
    title: 'Proceedit',
    subtitle: 'Trading Automation Corp',
    role: 'Frontend Application Developer',
    accentColor: '#A855F7',
    accentGlow: 'rgba(168, 85, 247, 0.35)',
    accentGradient: 'from-purple-500 via-violet-500 to-indigo-600',
    logo: 'proceedit.png',
    summary: 'Crafted mission-critical trading automation interfaces, bridging complex algorithmic logic with intuitive mobile experiences.',
    highlights: [
      'Translated intricate financial algorithmic trading workflows into sleek Figma wireframes',
      'Developed high-performance cross-platform mobile and web application screens in FlutterFlow',
      'Optimized UI state transitions and real-time telemetry dashboards for trading operators'
    ],
    stack: ['Figma UI/UX', 'FlutterFlow', 'Mobile Systems', 'State Management'],
    badge: 'EXPANSION',
    isCurrent: false,
  },
  {
    id: 'lensup',
    step: '03',
    period: '08/2025 - 11/2025',
    title: 'LensUp Technologies',
    subtitle: 'Digital Tech Innovation',
    role: 'Backend Developer',
    accentColor: '#10B981',
    accentGlow: 'rgba(16, 185, 129, 0.35)',
    accentGradient: 'from-emerald-400 via-teal-500 to-cyan-600',
    logo: 'proceedit.png',
    summary: 'Engineered high-throughput backend services, resilient RESTful API endpoints, and scalable database schemas.',
    highlights: [
      'Engineered modular REST API pipelines in Node.js & Express with sub-100ms response targets',
      'Constructed optimized MongoDB document schemas and aggregation queries',
      'Implemented robust JWT authentication, data validation, and rate-limiting security layers'
    ],
    stack: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'JWT Security'],
    badge: 'DEEP SYSTEMS',
    isCurrent: false,
  },
  {
    id: 'cwy',
    step: '04',
    period: '12/2025 - Present',
    title: 'CWY Solutions',
    subtitle: 'Enterprise Software Systems',
    role: 'Full Stack Developer',
    accentColor: '#F59E0B',
    accentGlow: 'rgba(245, 158, 11, 0.4)',
    accentGradient: 'from-amber-400 via-orange-500 to-red-500',
    logo: 'proceedit.png',
    summary: 'Leading end-to-end full-stack development, architecting production MERN applications and modern responsive software.',
    highlights: [
      'Architecting enterprise full-stack web applications with React 19 and scalable Node.js services',
      'Developing reusable high-performance component systems with clean architectural separation',
      'Driving technical execution across the entire development lifecycle with continuous deployment'
    ],
    stack: ['MERN Stack', 'React 19', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    badge: 'CURRENT ROLE',
    isCurrent: true,
  }
];

const Work = memo(() => {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const timelineRef = useRef(null);
  const beamRef = useRef(null);
  const milestoneRefs = useRef([]);
  const orbRefs = useRef([]);

  // GSAP Scroll-Driven Timeline Beam & Milestone Animations
  useEffect(() => {
    if (!containerRef.current || !timelineRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Header Reveal
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

      // 2. Continuous Scroll-Scrubbed Central Neon Beam
      if (beamRef.current) {
        gsap.fromTo(
          beamRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: timelineRef.current,
              start: 'top 65%',
              end: 'bottom 80%',
              scrub: 0.5,
            },
          }
        );
      }

      // 3. Staggered Milestone Cards & Beacon Orbs on Scroll
      milestoneRefs.current.forEach((milestone, idx) => {
        if (!milestone) return;

        const isEven = idx % 2 === 0;
        const orb = orbRefs.current[idx];

        // Card Slide-in: Even cards from left, Odd cards from right (or right on mobile)
        const xOffset = window.innerWidth >= 1024 ? (isEven ? -60 : 60) : 40;

        gsap.fromTo(
          milestone,
          {
            opacity: 0,
            x: xOffset,
            scale: 0.94,
            filter: 'blur(6px)',
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            filter: 'blur(0px)',
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: milestone,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );

        // Milestone Beacon Orb Pulse
        if (orb) {
          gsap.fromTo(
            orb,
            { scale: 0.5, opacity: 0.3 },
            {
              scale: 1,
              opacity: 1,
              duration: 0.6,
              ease: 'back.out(2)',
              scrollTrigger: {
                trigger: milestone,
                start: 'top 80%',
                toggleActions: 'play none none none',
              },
            }
          );
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      id="experience"
      ref={containerRef}
      className="relative w-full bg-black text-white px-4 sm:px-6 md:px-10 lg:px-12 py-16 md:py-24 select-none overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[400px] bg-purple-950/15 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/3 w-[600px] h-[400px] bg-cyan-950/15 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto flex flex-col gap-12 sm:gap-16">
        
        {/* Section Header */}
        <div ref={headerRef} className="flex flex-col items-center md:items-start text-center md:text-left gap-3 pb-6 border-b border-white/10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-purple-500/30 bg-purple-950/20 text-purple-400 text-xs sm:text-sm font-mono tracking-wider">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            <span>04 // CAREER TRAJECTORY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-michroma font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-100 to-neutral-400">
            THE EVOLUTION JOURNEY.
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 max-w-2xl font-normal leading-relaxed">
            A chronological timeline of roles, architectures engineered, and production problems solved across high-growth engineering teams.
          </p>
        </div>

        {/* Scroll-Driven Timeline Container */}
        <div
          ref={timelineRef}
          className="relative w-full flex flex-col py-6"
        >
          {/* Central Vertical Timeline Spine Track */}
          <div className="absolute top-0 bottom-0 left-6 lg:left-1/2 -translate-x-1/2 w-[2px] bg-white/10" />

          {/* Active Glowing Laser Beam (Drawn dynamically on scroll) */}
          <div
            ref={beamRef}
            className="absolute top-0 bottom-0 left-6 lg:left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-cyan-400 via-purple-500 to-amber-400 origin-top shadow-[0_0_12px_#00F0FF]"
          />

          {/* Journey Milestone Stops */}
          <div className="flex flex-col gap-12 sm:gap-16 lg:gap-20 w-full">
            {JOURNEY.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col lg:flex-row items-start lg:items-center w-full ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Central Node Waypoint Beacon Orb */}
                  <div
                    ref={(el) => (orbRefs.current[idx] = el)}
                    className="absolute left-6 lg:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center"
                  >
                    <div
                      className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-neutral-950 border-2 flex items-center justify-center transition-all duration-500 shadow-xl"
                      style={{
                        borderColor: item.accentColor,
                        boxShadow: `0 0 20px ${item.accentGlow}`
                      }}
                    >
                      {item.isCurrent ? (
                        <span className="relative flex h-3 w-3">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-400"></span>
                        </span>
                      ) : (
                        <span className="font-mono text-xs font-bold" style={{ color: item.accentColor }}>
                          {item.step}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Left / Right Card Container */}
                  <div
                    ref={(el) => (milestoneRefs.current[idx] = el)}
                    className={`w-full lg:w-[calc(50%-45px)] pl-16 lg:pl-0 ${
                      isEven ? 'lg:mr-auto' : 'lg:ml-auto'
                    }`}
                  >
                    <div
                      className="group relative rounded-3xl bg-neutral-950/85 border border-white/10 hover:border-white/25 p-6 sm:p-8 backdrop-blur-2xl transition-all duration-500 shadow-2xl hover:-translate-y-1 overflow-hidden"
                      style={{
                        boxShadow: `0 15px 40px -15px ${item.accentColor}20`
                      }}
                    >
                      {/* Ambient Card Glow */}
                      <div
                        className="absolute -top-24 -right-24 w-60 h-60 rounded-full blur-3xl pointer-events-none opacity-20 group-hover:opacity-35 transition-opacity"
                        style={{ backgroundColor: item.accentColor }}
                      />

                      {/* Top Meta Bar: Badge, Date, Logo */}
                      <div className="flex items-center justify-between gap-3 mb-4">
                        <div className="flex items-center gap-2">
                          <span
                            className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold tracking-wider uppercase border"
                            style={{
                              borderColor: `${item.accentColor}40`,
                              backgroundColor: `${item.accentColor}15`,
                              color: item.accentColor
                            }}
                          >
                            {item.badge}
                          </span>
                          <div className="flex items-center gap-1.5 text-neutral-400 text-xs font-mono">
                            <FiCalendar className="text-[11px]" />
                            <span>{item.period}</span>
                          </div>
                        </div>

                        {/* Company Logo in Glass Ring */}
                        <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center p-2 shrink-0 group-hover:scale-110 transition-transform">
                          <img
                            src={item.logo}
                            alt={`${item.title} logo`}
                            loading="lazy"
                            decoding="async"
                            className="max-h-full max-w-full object-contain"
                          />
                        </div>
                      </div>

                      {/* Role & Company Header */}
                      <div className="mb-3">
                        <h3 className="text-xl sm:text-2xl font-michroma font-bold text-white tracking-wide group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-cyan-300 transition-all duration-300">
                          {item.role}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-sm font-semibold text-neutral-200">{item.title}</span>
                          <span className="text-neutral-500 text-xs">•</span>
                          <span className="text-xs text-neutral-400 font-mono">{item.subtitle}</span>
                        </div>
                      </div>

                      {/* Summary Narrative */}
                      <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-4 font-normal">
                        {item.summary}
                      </p>

                      {/* Key Engineering Impact Highlights */}
                      <ul className="flex flex-col gap-2 pt-3 border-t border-white/5 mb-5">
                        {item.highlights.map((point, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2.5 text-xs text-neutral-300 leading-relaxed">
                            <FiCheckCircle
                              className="shrink-0 text-xs mt-0.5"
                              style={{ color: item.accentColor }}
                            />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                        {item.stack.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-white/[0.04] text-neutral-300 border border-white/5"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </div>
  );
});

Work.displayName = 'Work';

export default Work;
