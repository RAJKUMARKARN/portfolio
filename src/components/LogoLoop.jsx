import React, { useRef, useEffect, useState, memo } from 'react';

const LogoLoop = memo(({
  logos = [],
  speed = 100,
  direction = 'left',
  logoHeight = 60,
  gap = 60,
  hoverSpeed = 0,
  scaleOnHover = false,
  fadeOut = false,
  fadeOutColor = '#ffffff',
  ariaLabel = 'Logo carousel',
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const containerRef = useRef(null);

  // Pause animation when not visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const renderLogo = (logo, index, key) => {
    const LogoContent = () => {
      if (logo.node) {
        return <div style={{ fontSize: logoHeight, color: '#fff' }}>{logo.node}</div>;
      } else if (logo.src) {
        return <img src={logo.src} alt={logo.alt || `Logo ${index}`} style={{ height: logoHeight }} />;
      }
      return null;
    };

    const content = (
      <div
        key={key}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: gap,
          transition: scaleOnHover ? 'transform 0.3s ease' : 'none',
          transform: isHovered && scaleOnHover ? 'scale(1.1)' : 'scale(1)',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <LogoContent />
      </div>
    );

    if (logo.href) {
      return (
        <a
          key={key}
          href={logo.href}
          target="_blank"
          rel="noopener noreferrer"
          title={logo.title || logo.alt}
          style={{ textDecoration: 'none', display: 'inline-flex' }}
        >
          {content}
        </a>
      );
    }

    return content;
  };

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        height: logoHeight + 40,
        overflow: 'hidden',
      }}
      aria-label={ariaLabel}
    >
      {fadeOut && (
        <>
          <div
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              bottom: 0,
              width: '100px',
              background: `linear-gradient(to right, ${fadeOutColor}, transparent)`,
              zIndex: 1,
              pointerEvents: 'none',
            }}
          />
          <div
            style={{
              position: 'absolute',
              right: 0,
              top: 0,
              bottom: 0,
              width: '100px',
              background: `linear-gradient(to left, ${fadeOutColor}, transparent)`,
              zIndex: 1,
              pointerEvents: 'none',
            }}
          />
        </>
      )}
      <div
        className="logo-loop-mobile"
        style={{
          display: 'flex',
          alignItems: 'center',
          whiteSpace: 'nowrap',
          animation: !isVisible || (isHovered && hoverSpeed === 0) ? 'none' : `scroll-${direction} ${speed}s linear infinite`,
          willChange: isVisible ? 'transform' : 'auto',
        }}
      >
        {logos.map((logo, index) => renderLogo(logo, index, `logo-1-${index}`))}
        {logos.map((logo, index) => renderLogo(logo, index, `logo-2-${index}`))}
      </div>

      <style>
        {`
          @keyframes scroll-left {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }
          
          @keyframes scroll-right {
            from {
              transform: translateX(-50%);
            }
            to {
              transform: translateX(0);
            }
          }

          @media (max-width: 768px) {
            .logo-loop-mobile {
              animation-duration: ${speed * 0.5}s !important;
            }
          }
        `}
      </style>
    </div>
  );
});

LogoLoop.displayName = 'LogoLoop';

export default LogoLoop;
