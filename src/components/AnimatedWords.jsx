import React, { useEffect, useRef, memo } from 'react';
import gsap from 'gsap';

const WORDS = ['Design', 'Build', 'Develop', 'Deploy'];
const FINAL_PHRASE = "Now that's what I do";

const SOCIAL_LINKS = [
  {
    href: "https://leetcode.com/u/Rajkumarkarn/",
    img: "leetcode.png",
    alt: "LeetCode",
  },
  {
    href: "https://www.linkedin.com/in/raj-kumar-karn-55230a186/",
    img: "linkedin.png",
    alt: "LinkedIn",
  },
  {
    href: "https://github.com/RAJKUMARKARN",
    img: "github.png",
    alt: "GitHub",
  },
  {
    href: "mailto:rajkumarkarn002@gmail.com",
    img: "gmail.png",
    alt: "Gmail",
  },
];

const AnimatedWords = memo(() => {
  const sectionRef = useRef(null);
  const wordsContainerRef = useRef(null);
  const wordElsRef = useRef([]);
  const finalPhraseRef = useRef(null);
  const socialsRef = useRef(null);
  const hasTriggeredRef = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let ctx;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggeredRef.current) {
          hasTriggeredRef.current = true;

          ctx = gsap.context(() => {
            const wordEls = wordElsRef.current.filter(Boolean);
            const finalEl = finalPhraseRef.current;
            const socialIcons = socialsRef.current ? Array.from(socialsRef.current.children) : [];

            // Initial set: hide all elements with GPU-optimized transforms
            gsap.set([...wordEls, finalEl], {
              opacity: 0,
              y: 45,
              filter: 'blur(10px)',
              scale: 0.96,
            });

            gsap.set(socialIcons, {
              opacity: 0,
              y: 30,
              scale: 0.8,
            });

            const tl = gsap.timeline();

            // Word transition settings for buttery smooth motion
            const enterDuration = 0.7;
            const exitDuration = 0.55;
            const holdDuration = 0.65;

            // Loop through each word with seamless, overlapping cross-fade
            wordEls.forEach((wordEl, index) => {
              // Word Enters
              tl.to(
                wordEl,
                {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  filter: 'blur(0px)',
                  duration: enterDuration,
                  ease: 'power3.out',
                },
                index === 0 ? '+=0.15' : '<0.2'
              )
              // Word Exits
              .to(
                wordEl,
                {
                  opacity: 0,
                  y: -40,
                  scale: 1.04,
                  filter: 'blur(8px)',
                  duration: exitDuration,
                  ease: 'power3.in',
                },
                `+=${holdDuration}`
              );
            });

            // Final phrase: "Now that's what I do" glides in gracefully
            tl.to(
              finalEl,
              {
                opacity: 1,
                y: 0,
                scale: 1,
                filter: 'blur(0px)',
                duration: 0.9,
                ease: 'power3.out',
              },
              '<0.15'
            );

            // Staggered reveal for Social Media Handles with gentle spring
            if (socialIcons.length > 0) {
              tl.to(
                socialIcons,
                {
                  opacity: 0.85,
                  y: 0,
                  scale: 1,
                  duration: 0.65,
                  stagger: 0.1,
                  ease: 'back.out(1.6)',
                },
                '+=0.25'
              );
            }
          }, section);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative w-full min-h-[500px] md:min-h-[650px] lg:min-h-[750px] bg-black flex flex-col items-center justify-center px-4 py-16 md:py-24 overflow-hidden select-none"
    >
      {/* Subtle ambient backdrop radial glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[500px] h-[300px] sm:w-[700px] sm:h-[400px] rounded-full bg-radial from-purple-900/10 via-transparent to-transparent blur-3xl" />
      </div>

      {/* Main words display container - rock-solid height prevents layout jumps */}
      <div
        ref={wordsContainerRef}
        className="relative w-full max-w-5xl h-[160px] sm:h-[200px] md:h-[240px] lg:h-[280px] flex items-center justify-center"
      >
        {/* Dynamic cycling words: Design, Build, Develop, Deploy */}
        {WORDS.map((word, idx) => (
          <h2
            key={word}
            ref={(el) => (wordElsRef.current[idx] = el)}
            style={{
              fontSize: 'clamp(3.8rem, 13vw, 10.5rem)',
              lineHeight: 1,
            }}
            className="absolute inset-0 flex items-center justify-center text-center font-black tracking-tight uppercase text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-100 to-neutral-400 drop-shadow-[0_10px_40px_rgba(255,255,255,0.18)] will-change-transform"
          >
            {word}
          </h2>
        ))}

        {/* Final phrase: "Now that's what I do" */}
        <h2
          ref={finalPhraseRef}
          style={{
            fontSize: 'clamp(2.2rem, 6.5vw, 5rem)',
            lineHeight: 1.15,
          }}
          className="absolute inset-0 flex items-center justify-center text-center font-bold tracking-tight text-white drop-shadow-[0_8px_35px_rgba(255,255,255,0.22)] whitespace-nowrap will-change-transform"
        >
          {FINAL_PHRASE}
        </h2>
      </div>

      {/* Social Media Handles */}
      <div
        ref={socialsRef}
        className="relative z-10 flex gap-6 sm:gap-8 md:gap-10 items-center justify-center mt-6 sm:mt-8 md:mt-10"
      >
        {SOCIAL_LINKS.map((item) => (
          <a
            key={item.alt}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-2 rounded-2xl transition-all duration-300 hover:scale-115 active:scale-95"
          >
            <div className="absolute inset-0 rounded-2xl bg-white/0 group-hover:bg-white/10 transition-colors duration-300 blur-sm -z-10" />
            <img
              src={item.img}
              alt={item.alt}
              width="64"
              height="64"
              className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-18 lg:w-18 opacity-75 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
            />
          </a>
        ))}
      </div>
    </div>
  );
});

AnimatedWords.displayName = 'AnimatedWords';

export default AnimatedWords;
