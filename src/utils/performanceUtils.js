/**
 * Performance utilities for detecting device capabilities and optimizing animations
 */

// Detect if device is low-end based on multiple factors
export const isLowEndDevice = () => {
  // Check hardware concurrency (CPU cores)
  const cores = navigator.hardwareConcurrency || 2;
  
  // Check memory if available (in GB)
  const memory = navigator.deviceMemory || 4;
  
  // Check if running on Windows (often has performance issues with WebGL)
  const isWindows = /Windows/i.test(navigator.userAgent);
  
  // Check if mobile
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
  // Device is low-end if:
  // - Less than 4 cores
  // - Less than 4GB RAM
  // - Mobile device
  // - Windows with less than 6 cores
  return cores < 4 || memory < 4 || isMobile || (isWindows && cores < 6);
};

// Get optimal device pixel ratio (prevent over-rendering on high DPI displays)
export const getOptimalDPR = () => {
  const dpr = window.devicePixelRatio || 1;
  
  // Limit DPR on low-end devices
  if (isLowEndDevice()) {
    return Math.min(dpr, 1.5);
  }
  
  // Cap at 2 for all devices to save performance
  return Math.min(dpr, 2);
};

// Check if WebGL is available and working
export const isWebGLAvailable = () => {
  try {
    const canvas = document.createElement('canvas');
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch (e) {
    return false;
  }
};

// Debounce utility for resize handlers
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Throttle utility for scroll handlers
export const throttle = (func, limit) => {
  let inThrottle;
  return function executedFunction(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// Get performance config based on device capabilities
export const getPerformanceConfig = () => {
  const lowEnd = isLowEndDevice();
  
  return {
    // WebGL settings
    enableWebGL: isWebGLAvailable() && !lowEnd,
    dpr: getOptimalDPR(),
    
    // Animation settings
    reducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    animationQuality: lowEnd ? 'low' : 'high',
    
    // Lightning shader settings
    lightningOctaves: lowEnd ? 5 : 10,
    lightningSpeed: lowEnd ? 0.5 : 1,
    lightningIntensity: lowEnd ? 0.6 : 0.8,
    
    // RippleGrid settings
    rippleGridSize: lowEnd ? 8 : 10,
    rippleGridThickness: lowEnd ? 12 : 15,
    
    // General settings
    enableParallax: !lowEnd,
    enableComplexAnimations: !lowEnd,
    
    // Spline 3D settings
    splineQuality: lowEnd ? 'low' : 'high',
    deferSpline: lowEnd,
  };
};

// Monitor FPS and adjust quality dynamically
export class PerformanceMonitor {
  constructor(callback) {
    this.callback = callback;
    this.frames = [];
    this.lastTime = performance.now();
    this.running = false;
  }

  start() {
    this.running = true;
    this.measure();
  }

  stop() {
    this.running = false;
  }

  measure = () => {
    if (!this.running) return;

    const now = performance.now();
    const delta = now - this.lastTime;
    this.lastTime = now;

    // Calculate FPS
    const fps = 1000 / delta;
    this.frames.push(fps);

    // Keep only last 60 frames
    if (this.frames.length > 60) {
      this.frames.shift();
    }

    // Calculate average FPS
    if (this.frames.length === 60) {
      const avgFps = this.frames.reduce((a, b) => a + b) / this.frames.length;
      
      // If FPS drops below 30, notify callback
      if (avgFps < 30) {
        this.callback('low', avgFps);
      } else if (avgFps < 45) {
        this.callback('medium', avgFps);
      }
    }

    requestAnimationFrame(this.measure);
  };
}

export default {
  isLowEndDevice,
  getOptimalDPR,
  isWebGLAvailable,
  debounce,
  throttle,
  getPerformanceConfig,
  PerformanceMonitor,
};
