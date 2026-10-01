import React, { lazy, Suspense, useRef, useEffect, useState, memo } from 'react';
import { isLowEndDevice } from '../utils/performanceUtils';

const SplineLazy = lazy(() => import('@splinetool/react-spline'));

const SplineViewer = memo(({ onLoad, onError, isVisible = true }) => {
  const splineAppRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const isLowEnd = useRef(isLowEndDevice()).current;

  // Handle visibility changes: stop render loop when out of viewport
  useEffect(() => {
    if (!splineAppRef.current) return;

    try {
      if (isVisible) {
        if (typeof splineAppRef.current.play === 'function') {
          splineAppRef.current.play();
        }
      } else {
        if (typeof splineAppRef.current.stop === 'function') {
          splineAppRef.current.stop();
        }
      }
    } catch (e) {
      console.warn('Spline play/stop error:', e);
    }
  }, [isVisible]);

  // Cleanup on unmount: dispose WebGL context to prevent context leaks
  useEffect(() => {
    return () => {
      if (splineAppRef.current) {
        try {
          if (typeof splineAppRef.current.dispose === 'function') {
            splineAppRef.current.dispose();
          }
        } catch (e) {
          console.warn('Spline disposal error:', e);
        }
        splineAppRef.current = null;
      }
    };
  }, []);

  const handleSplineLoad = (splineApp) => {
    splineAppRef.current = splineApp;
    setIsLoaded(true);

    // Optimize pixel ratio on low-end hardware
    if (isLowEnd && typeof splineApp.setPixelRatio === 'function') {
      try {
        splineApp.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.25));
      } catch (err) {
        // ignore
      }
    }

    if (onLoad) {
      onLoad(splineApp);
    }
  };

  const handleSplineError = (err) => {
    console.warn('Failed to load Spline scene:', err);
    setHasError(true);
    if (onError) onError(err);
  };

  if (hasError) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center">
        <div className="w-20 h-20 rounded-full border border-purple-500/30 bg-purple-950/20 flex items-center justify-center mb-4">
          <span className="text-2xl">🤖</span>
        </div>
        <p className="text-sm font-michroma text-gray-400">3D Interactive Model</p>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full">
      {/* Sleek, ambient futuristic loader placeholder */}
      {!isLoaded && (
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none transition-opacity duration-700">
          <div className="relative flex flex-col items-center">
            {/* Pulsing ambient aura */}
            <div className="w-32 h-32 sm:w-48 sm:h-48 rounded-full bg-gradient-to-tr from-[#9C28DF]/20 to-[#00F0FF]/15 blur-2xl animate-pulse" />
            
            {/* Tech spinner ring */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="relative w-12 h-12">
                <div className="absolute inset-0 rounded-full border border-[#9C28DF]/30" />
                <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#00F0FF] border-r-[#9C28DF] animate-spin" />
              </div>
              <span className="mt-4 text-[11px] font-michroma tracking-widest text-gray-400/80 uppercase">
                Initializing 3D
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Spline 3D Scene with smooth fade-in */}
      <div
        className={`w-full h-full transition-opacity duration-700 ease-out ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Suspense fallback={null}>
          <SplineLazy
            scene="https://prod.spline.design/toH-nUTyiF8muFAv/scene.splinecode"
            onLoad={handleSplineLoad}
            onError={handleSplineError}
          />
        </Suspense>
      </div>
    </div>
  );
});

SplineViewer.displayName = 'SplineViewer';

export default SplineViewer;
