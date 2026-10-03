import React, { useEffect, useRef, memo } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

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

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const wordEls = wordElsRef.current.filter(Boolean);
      const finalEl = finalPhraseRef.current;
      const socialIcons = socialsRef.current ? Array.from(socialsRef.current.children) : [];

      // Initial state: first word is visible, others are pre-positioned below
      gsap.set(wordEls[0], {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: 'blur(0px)',
      });

      gsap.set([...wordEls.slice(1), finalEl], {
        opacity: 0,
        y: 50,
        scale: 0.94,
        filter: 'blur(10px)',
      });

      gsap.set(socialIcons, {
        opacity: 0,
        y: 30,
        scale: 0.8,
      });

      // Scroll-driven pinned timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=1000',
          pin: true,
          pinSpacing: true,
          scrub: 0.5,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Step smoothly through each word as the user scrolls
      wordEls.forEach((wordEl, index) => {
        // Hold current word for scroll progress
        tl.to({}, { duration: 0.4 });

        if (index < wordEls.length - 1) {
          const nextWord = wordEls[index + 1];

          // Outgoing word floats up with blur
          tl.to(wordEl, {
            opacity: 0,
            y: -40,
            scale: 1.04,
            filter: 'blur(8px)',
            duration: 0.6,
            ease: 'power2.inOut',
          });

          // Incoming word glides in from below
          tl.to(
            nextWord,
            {
              opacity: 1,
              y: 0,
              scale: 1,
              filter: 'blur(0px)',
              duration: 0.6,
              ease: 'power2.inOut',
            },
            '<'
          );
        } else {
          // Last word ('Deploy') floats out as final phrase enters
          tl.to(wordEl, {
            opacity: 0,
            y: -40,
            scale: 1.04,
            filter: 'blur(8px)',
            duration: 0.6,
            ease: 'power2.inOut',
          });

          tl.to(
            finalEl,
            {
              opacity: 1,
              y: 0,
              scale: 1,
              filter: 'blur(0px)',
              duration: 0.7,
              ease: 'power2.inOut',
            },
            '<'
          );
        }
      });

      // Stagger reveal of social media links
      if (socialIcons.length > 0) {
        tl.to(
          socialIcons,
          {
            opacity: 0.85,
            y: 0,
            scale: 1,
            stagger: 0.1,
            duration: 0.5,
            ease: 'power2.out',
          },
          '-=0.15'
        );
      }

      // Minimal exit buffer before seamless unpin into next section
      tl.to({}, { duration: 0.2 });
    }, section);

    // Refresh ScrollTrigger once below-the-fold elements settle
    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 400);

    return () => {
      clearTimeout(refreshTimer);
      ctx.revert();
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative w-full h-screen bg-black flex flex-col items-center justify-center px-4 overflow-hidden select-none"
    >
      {/* Subtle ambient backdrop radial glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[500px] h-[300px] sm:w-[700px] sm:h-[400px] rounded-full bg-radial from-purple-900/10 via-transparent to-transparent blur-3xl" />
      </div>

      {/* Main words display container - stable height prevents layout jumps */}
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
        className="relative z-10 flex gap-6 sm:gap-8 md:gap-10 items-center justify-center mt-6 sm:mt-8 md:mt-10 pointer-events-auto"
      >
        {SOCIAL_LINKS.map((item) => (
          <a
            key={item.alt}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-2 rounded-2xl transition-all duration-300 hover:scale-115 active:scale-95 pointer-events-auto"
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
