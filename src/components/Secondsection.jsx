import React, { useState, useEffect, useRef, useMemo } from 'react';
import ProfileCard from './ProfileCard';
import { 
  FiTerminal, 
  FiCode, 
  FiCpu, 
  FiLayers, 
  FiMapPin, 
  FiClock, 
  FiCheck, 
  FiCopy, 
  FiZap, 
  FiArrowUpRight,
  FiActivity
} from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi2';

const PERSONAS = {
  engineer: {
    title: 'Full-Stack Engineer',
    subtitle: 'System Design • Robust Architecture • Speed',
    badge: 'ENGINEERING',
    description:
      'For me, coding is an art of algorithmic problem solving. I specialize in architecting scalable frontends, clean component systems, and resilient backends that execute with sub-millisecond precision.',
    highlights: [
      { label: 'Core Philosophy', val: 'Write code that humans love reading and machines love running.' },
      { label: 'Preferred Stack', val: 'React 19, TypeScript, Node.js, Next.js, TailwindCSS' },
      { label: 'Performance Metric', val: 'Lighthouse 95+ & zero-layout-shift architecture' }
    ],
    codeSnippet: `// rajkumar.engineer.ts
export const engineerProfile = {
  name: "Raj Kumar Karn",
  role: "Full-Stack Software Engineer",
  focus: ["High-Performance Web Apps", "Distributed Systems", "Scalable UI"],
  principles: {
    cleanArchitecture: true,
    performanceObsessed: true,
    continuousLearning: Infinity
  },
  execute() {
    return "Transforming complex challenges into effortless digital solutions.";
  }
};`
  },
  designer: {
    title: 'Creative Technologist',
    subtitle: 'Motion Physics • Spatial UI • Visual Polish',
    badge: 'AESTHETICS',
    description:
      'I bridge the gap between Figma artboards and production-ready code. I obsess over micro-interactions, 60fps physics-driven animations, tactile glassmorphism, and typography that commands attention.',
    highlights: [
      { label: 'Design Obsession', val: 'Sub-pixel alignment & seamless micro-interactions' },
      { label: 'Animation Tooling', val: 'GSAP, Spline 3D, WebGL Shaders, CSS Keyframes' },
      { label: 'Experience Target', val: 'Interfaces that evoke delight from the very first frame' }
    ],
    codeSnippet: `// rajkumar.creative.ts
export const creativeVision = {
  style: "Futuristic • Cyber-Glass • Minimalist",
  motion: "60 FPS spring physics & buttery scrub",
  typography: ["Michroma", "Antonio", "Inter"],
  craft() {
    return "Where mathematical logic converges with aesthetic emotion.";
  }
};`
  },
  problemSolver: {
    title: 'Problem Solver & Builder',
    subtitle: 'Curiosity • Algorithmic Rigor • Product Impact',
    badge: 'MINDSET',
    description:
      'Every project is an opportunity to solve a real human problem. From solving competitive coding challenges to rapid prototyping of innovative web tools, I thrive at the frontier of unknown problems.',
    highlights: [
      { label: 'Daily Practice', val: 'Algorithmic puzzles on LeetCode & systems reading' },
      { label: 'Approach', val: 'First-principles breakdown & fast iterative execution' },
      { label: 'Mission', val: 'Building tools that leave an indelible impact on users' }
    ],
    codeSnippet: `// rajkumar.mindset.ts
export const mindset = {
  mindset: "First Principles & Unyielding Curiosity",
  streak: "100+ Algorithmic Challenges Mastered",
  drive: "Solving meaningful problems with durable impact",
  status: "Always ready to build the next extraordinary thing"
};`
  }
};

const Secondsection = () => {
  const [activeTab, setActiveTab] = useState('engineer');
  const [activeCodeTab, setActiveCodeTab] = useState('code');
  const [copied, setCopied] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const sectionRef = useRef(null);

  // Live Clock (India Standard Time)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      });
      setCurrentTime(timeStr);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('rajkumarkarn002@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const currentPersona = useMemo(() => PERSONAS[activeTab], [activeTab]);

  return (
    <div
      id="about"
      ref={sectionRef}
      className="relative w-full bg-black text-white px-4 sm:px-6 md:px-10 lg:px-12 py-16 md:py-24 overflow-hidden select-none"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-cyan-900/15 via-purple-900/15 to-transparent blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[300px] bg-blue-900/10 blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/20 text-cyan-400 text-xs sm:text-sm font-mono tracking-wider">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span>DOSSIER // IDENTITY & CRAFT</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-michroma font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-100 to-neutral-400">
            ENGINEERING WITH INTENT.
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-neutral-400 max-w-2xl font-normal leading-relaxed">
            I don&apos;t just write code — I build responsive, living digital experiences where algorithmic precision converges with high-fidelity visual design.
          </p>
        </div>

        {/* Persona Mode Switcher Pills */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-3 p-1.5 rounded-2xl bg-neutral-900/60 border border-white/10 backdrop-blur-md w-fit mx-auto md:mx-0">
          {[
            { id: 'engineer', label: 'Full-Stack Engineer', icon: FiCode },
            { id: 'designer', label: 'Creative Technologist', icon: HiSparkles },
            { id: 'problemSolver', label: 'Problem Solver', icon: FiZap }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl font-medium text-xs sm:text-sm transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-white border border-cyan-400/40 shadow-[0_0_20px_rgba(0,240,255,0.2)]'
                    : 'text-neutral-400 hover:text-white hover:bg-white/5 border border-transparent'
                }`}
              >
                <Icon className={`text-base ${isActive ? 'text-cyan-400' : 'text-neutral-400'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Master Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Bento Card 1: 3D Profile Card & Live Telemetry (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="relative group rounded-3xl p-6 bg-gradient-to-b from-neutral-900/80 to-neutral-950/80 border border-white/10 backdrop-blur-xl shadow-2xl flex flex-col items-center justify-center overflow-hidden transition-all duration-500 hover:border-cyan-500/30">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10 group-hover:bg-cyan-500/20 transition-all duration-500" />
              
              {/* Interactive Holographic Profile Card */}
              <div className="w-full flex justify-center py-2">
                <ProfileCard
                  name="Raj Kumar Karn"
                  title={currentPersona.title}
                  handle="rajkumarkarn"
                  status="Available for Work"
                  contactText="Connect With Me"
                  avatarUrl="Picture.png"
                  showUserInfo={true}
                  enableTilt={true}
                  enableMobileTilt={false}
                  onContactClick={() => {
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                    else window.location.href = '#contact';
                  }}
                  behindGlowEnabled={true}
                  behindGlowColor="rgba(0, 240, 255, 0.45)"
                  innerGradient="linear-gradient(145deg, #180e29 0%, #0c2136 100%)"
                />
              </div>

              {/* Status / Location Meta Footer inside card */}
              <div className="w-full grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-white/10 text-xs font-mono">
                <div className="flex items-center gap-2 text-neutral-300">
                  <FiMapPin className="text-cyan-400 shrink-0 text-sm" />
                  <span className="truncate">India • Global Remote</span>
                </div>
                <div className="flex items-center gap-2 text-neutral-300 justify-end">
                  <FiClock className="text-purple-400 shrink-0 text-sm" />
                  <span className="font-mono">{currentTime || 'IST'}</span>
                </div>
              </div>
            </div>

            {/* Quick Action Contact Pill */}
            <div className="flex items-center justify-between p-4 rounded-2xl bg-neutral-900/60 border border-white/10 backdrop-blur-md">
              <div className="flex flex-col">
                <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500">Direct Inquiries</span>
                <span className="text-xs sm:text-sm font-mono text-neutral-200 truncate">rajkumarkarn002@gmail.com</span>
              </div>
              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 active:scale-95 transition-all text-xs font-medium text-white cursor-pointer"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <FiCheck className="text-emerald-400 text-sm" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <FiCopy className="text-neutral-300 text-sm" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Bento Card 2: Interactive Terminal & Dynamic Dossier (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Terminal Window Card */}
            <div className="flex-1 rounded-3xl border border-white/10 bg-neutral-950/90 backdrop-blur-xl shadow-2xl overflow-hidden flex flex-col transition-all duration-500 hover:border-cyan-500/30">
              
              {/* MacOS Window Chrome Header */}
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10 bg-neutral-900/70">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-3 font-mono text-xs text-neutral-400 flex items-center gap-1.5">
                    <FiTerminal className="text-cyan-400" />
                    <span>rajkumar-dossier</span>
                  </span>
                </div>

                {/* Terminal Sub-Tabs */}
                <div className="flex items-center gap-1 bg-black/40 p-1 rounded-lg border border-white/5">
                  <button
                    onClick={() => setActiveCodeTab('code')}
                    className={`px-2.5 py-1 rounded text-xs font-mono transition-colors ${
                      activeCodeTab === 'code' ? 'bg-white/15 text-cyan-300' : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    config.ts
                  </button>
                  <button
                    onClick={() => setActiveCodeTab('narrative')}
                    className={`px-2.5 py-1 rounded text-xs font-mono transition-colors ${
                      activeCodeTab === 'narrative' ? 'bg-white/15 text-purple-300' : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    manifesto.md
                  </button>
                </div>
              </div>

              {/* Terminal Content Area */}
              <div className="p-6 font-mono text-xs sm:text-sm flex flex-col justify-between flex-1">
                {activeCodeTab === 'code' ? (
                  <div className="overflow-x-auto">
                    <pre className="text-neutral-300 leading-relaxed">
                      <code>
                        {currentPersona.codeSnippet.split('\n').map((line, idx) => (
                          <div key={idx} className="flex">
                            <span className="w-6 shrink-0 text-neutral-600 select-none text-right pr-3">{idx + 1}</span>
                            <span className={
                              line.startsWith('//') ? 'text-neutral-500 italic' :
                              line.includes('export') || line.includes('const') ? 'text-purple-400' :
                              line.includes(':') && !line.includes('http') ? 'text-cyan-300' :
                              line.includes('"') ? 'text-emerald-300' : 'text-neutral-200'
                            }>
                              {line}
                            </span>
                          </div>
                        ))}
                      </code>
                    </pre>
                  </div>
                ) : (
                  <div className="flex flex-col gap-4 font-sans text-neutral-300 leading-relaxed">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-purple-500/20 text-purple-300 border border-purple-500/30">
                        {currentPersona.badge}
                      </span>
                      <h4 className="text-base sm:text-lg font-bold text-white font-michroma">{currentPersona.title}</h4>
                    </div>

                    <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                      {currentPersona.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-white/10">
                      {currentPersona.highlights.map((h, i) => (
                        <div key={i} className="flex flex-col p-3 rounded-xl bg-white/[0.03] border border-white/5">
                          <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">{h.label}</span>
                          <span className="text-xs text-neutral-200 mt-1 font-medium">{h.val}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Terminal Live Bar */}
                <div className="flex items-center justify-between pt-4 mt-6 border-t border-white/10 text-[11px] text-neutral-500 font-mono">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>STATUS: ACTIVE & ACCELERATING</span>
                  </div>
                  <span>UTF-8 // REACT 19</span>
                </div>
              </div>
            </div>

            {/* Quick Metrics Bento Sub-Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              
              {/* Stat 1: Algorithmic Depth */}
              <div className="group rounded-2xl p-4 bg-neutral-900/60 border border-white/10 backdrop-blur-md hover:border-cyan-500/30 transition-all duration-300 flex flex-col justify-between">
                <div className="flex items-center justify-between text-neutral-400 mb-2">
                  <FiCpu className="text-cyan-400 text-lg group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500">Problem Solving</span>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold font-michroma text-white">100+</div>
                  <p className="text-xs text-neutral-400 mt-1">Algorithms solved with high time-space efficiency</p>
                </div>
              </div>

              {/* Stat 2: 60FPS Fluid Motion */}
              <div className="group rounded-2xl p-4 bg-neutral-900/60 border border-white/10 backdrop-blur-md hover:border-purple-500/30 transition-all duration-300 flex flex-col justify-between">
                <div className="flex items-center justify-between text-neutral-400 mb-2">
                  <FiActivity className="text-purple-400 text-lg group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500">Fluid Motion</span>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold font-michroma text-white">60 FPS</div>
                  <p className="text-xs text-neutral-400 mt-1">GSAP ScrollTrigger & sub-pixel WebGL rendering</p>
                </div>
              </div>

              {/* Stat 3: Architecture & Scalability */}
              <div className="group rounded-2xl p-4 bg-neutral-900/60 border border-white/10 backdrop-blur-md hover:border-emerald-500/30 transition-all duration-300 flex flex-col justify-between">
                <div className="flex items-center justify-between text-neutral-400 mb-2">
                  <FiLayers className="text-emerald-400 text-lg group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500">Architecture</span>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold font-michroma text-white">Full-Stack</div>
                  <p className="text-xs text-neutral-400 mt-1">Modular, component-driven, production-ready code</p>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Bottom Feature Strip: Philosophy & Work Ethic */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <div className="rounded-2xl p-5 bg-gradient-to-br from-neutral-900/50 to-neutral-950/50 border border-white/10 flex flex-col gap-2 hover:border-white/20 transition-all">
            <div className="flex items-center gap-2 text-cyan-400">
              <FiCode className="text-lg" />
              <h3 className="font-bold text-sm tracking-wide text-white">Pixel-Obsessed Craft</h3>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Every shadow, easing curve, and spacing token is intentional. I treat UI design as a direct extension of user respect.
            </p>
          </div>

          <div className="rounded-2xl p-5 bg-gradient-to-br from-neutral-900/50 to-neutral-950/50 border border-white/10 flex flex-col gap-2 hover:border-white/20 transition-all">
            <div className="flex items-center gap-2 text-purple-400">
              <FiZap className="text-lg" />
              <h3 className="font-bold text-sm tracking-wide text-white">Clean, Scalable Architecture</h3>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Code that is robust, testable, and effortless to maintain. I build architectures engineered to scale smoothly without friction.
            </p>
          </div>

          <div className="rounded-2xl p-5 bg-gradient-to-br from-neutral-900/50 to-neutral-950/50 border border-white/10 flex flex-col gap-2 hover:border-white/20 transition-all">
            <div className="flex items-center gap-2 text-emerald-400">
              <HiSparkles className="text-lg" />
              <h3 className="font-bold text-sm tracking-wide text-white">Relentless Curiosity</h3>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Never resting on what I know. Continuously experimenting at the cutting edge of WebGL, distributed backends, and modern design systems.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Secondsection;
