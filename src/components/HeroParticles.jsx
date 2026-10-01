import React, { useRef, useEffect, memo } from 'react';
import { isLowEndDevice } from '../utils/performanceUtils';

const HeroParticles = memo(({ isVisible = true }) => {
  const canvasRef = useRef(null);
  const animFrameIdRef = useRef(null);
  const isRunningRef = useRef(true);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const isLowEnd = isLowEndDevice();
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let width = 0;
    let height = 0;
    let particles = [];

    const particleCount = isLowEnd ? 25 : 60;
    const colors = [
      'rgba(156, 40, 223, ', // purple
      'rgba(113, 196, 255, ', // cyan-blue
      'rgba(255, 255, 255, ', // soft white
      'rgba(100, 108, 255, ', // indigo
    ];

    const resize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * (isLowEnd ? 1.8 : 2.5) + 0.8,
          baseColor: colors[Math.floor(Math.random() * colors.length)],
          alpha: Math.random() * 0.6 + 0.2,
          speedX: (Math.random() - 0.5) * (prefersReducedMotion ? 0 : 0.4),
          speedY: (Math.random() - 0.5) * (prefersReducedMotion ? 0 : 0.4) - 0.15,
          pulseSpeed: Math.random() * 0.02 + 0.005,
          pulseVal: Math.random() * Math.PI,
        });
      }
    };

    resize();
    window.addEventListener('resize', resize, { passive: true });

    const handleMouseMove = (e) => {
      if (isLowEnd) return;
      const rect = canvas.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / width - 0.5) * 30;
      const y = ((e.clientY - rect.top) / height - 0.5) * 30;
      mouseRef.current.targetX = x;
      mouseRef.current.targetY = y;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    let lastTime = performance.now();

    const render = (time) => {
      if (!isRunningRef.current) return;

      const delta = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      // Smooth mouse follow
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // Render each particle with subtle glow
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (!prefersReducedMotion) {
          p.x += p.speedX;
          p.y += p.speedY;
          p.pulseVal += p.pulseSpeed;

          // Wrap edges smoothly
          if (p.x < -10) p.x = width + 10;
          if (p.x > width + 10) p.x = -10;
          if (p.y < -10) p.y = height + 10;
          if (p.y > height + 10) p.y = -10;
        }

        const currentAlpha = p.alpha + Math.sin(p.pulseVal) * 0.15;
        const finalX = p.x + mouseRef.current.x * (p.radius / 2);
        const finalY = p.y + mouseRef.current.y * (p.radius / 2);

        ctx.beginPath();
        ctx.arc(finalX, finalY, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.baseColor}${Math.max(0.1, currentAlpha)})`;
        ctx.fill();

        // Optional subtle outer halo for larger particles on non-low-end devices
        if (!isLowEnd && p.radius > 2.0) {
          ctx.beginPath();
          ctx.arc(finalX, finalY, p.radius * 2.2, 0, Math.PI * 2);
          ctx.fillStyle = `${p.baseColor}${Math.max(0.02, currentAlpha * 0.15)})`;
          ctx.fill();
        }
      }

      animFrameIdRef.current = requestAnimationFrame(render);
    };

    if (isVisible) {
      isRunningRef.current = true;
      animFrameIdRef.current = requestAnimationFrame(render);
    }

    return () => {
      isRunningRef.current = false;
      if (animFrameIdRef.current) cancelAnimationFrame(animFrameIdRef.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isVisible]);

  // Pause / resume when isVisible changes
  useEffect(() => {
    isRunningRef.current = isVisible;
    if (isVisible && !animFrameIdRef.current) {
      const render = (time) => {
        if (!isRunningRef.current) return;
        animFrameIdRef.current = requestAnimationFrame(render);
      };
      animFrameIdRef.current = requestAnimationFrame(render);
    }
  }, [isVisible]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      style={{ willChange: 'transform', transform: 'translateZ(0)' }}
    />
  );
});

HeroParticles.displayName = 'HeroParticles';

export default HeroParticles;
