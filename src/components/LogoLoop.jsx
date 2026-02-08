import React, { useRef, useEffect, useState } from 'react';

const LogoLoop = ({
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
          animation: isHovered && hoverSpeed === 0 ? 'none' : `scroll-${direction} ${speed}s linear infinite`,
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
};

export default LogoLoop;
