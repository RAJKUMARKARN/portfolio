import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const ROLES = [
  'UI/UX Designer',
  'Frontend Developer',
  'Full Stack Developer',
  'Creative Developer',
  'App Developer',
];

const RoleTicker = () => {
  const containerRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const items = itemsRef.current.filter(Boolean);
    if (!items || items.length === 0) return;

    const ctx = gsap.context(() => {
      // Set 3D perspective stage on container
      gsap.set(containerRef.current, { perspective: 800 });

      // Initial state: hide all items except the first one
      items.forEach((item, index) => {
        if (index === 0) {
          gsap.set(item, {
            yPercent: 0,
            rotateX: 0,
            opacity: 1,
            filter: 'blur(0px)',
            transformOrigin: '50% 50% -35px',
          });
        } else {
          gsap.set(item, {
            yPercent: 130,
            rotateX: -75,
            opacity: 0,
            filter: 'blur(8px)',
            transformOrigin: '50% 50% -35px',
          });
        }
      });

      const tl = gsap.timeline({ repeat: -1 });
      const displayDuration = 2.2;
      const transitionDuration = 0.75;

      items.forEach((item, index) => {
        const nextIndex = (index + 1) % items.length;
        const nextItem = items[nextIndex];

        tl.to(
          item,
          {
            yPercent: -130,
            rotateX: 75,
            opacity: 0,
            filter: 'blur(8px)',
            duration: transitionDuration,
            ease: 'power3.inOut',
          },
          `+=${displayDuration}`
        ).to(
          nextItem,
          {
            yPercent: 0,
            rotateX: 0,
            opacity: 1,
            filter: 'blur(0px)',
            duration: transitionDuration,
            ease: 'power3.inOut',
          },
          `<`
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative flex items-center justify-center pointer-events-none select-none"
    >
      <div className="relative h-8 sm:h-9 md:h-10 w-[280px] sm:w-[360px] md:w-[440px] overflow-hidden flex items-center justify-center">
        {ROLES.map((role, i) => (
          <div
            key={role}
            ref={(el) => (itemsRef.current[i] = el)}
            className="absolute inset-0 flex items-center justify-center text-center will-change-transform"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <span className="font-michroma text-xs sm:text-sm md:text-base font-bold tracking-[0.22em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 via-white to-neutral-200 drop-shadow-[0_2px_15px_rgba(255,255,255,0.4)] whitespace-nowrap">
              {role}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(RoleTicker);
