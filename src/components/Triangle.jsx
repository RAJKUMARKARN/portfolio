import { lazy, Suspense, useState, useEffect, useRef } from 'react';

const SplineLazy = lazy(() => import('@splinetool/react-spline'));

export default function Triangle() {
  const [shouldLoad, setShouldLoad] = useState(false);
  const containerRef = useRef();

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '200px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="triangle">
      {shouldLoad ? (
        <Suspense
          fallback={
            <div className="text-white flex justify-center items-center h-full bg-black">
              <p className="text-sm text-[#8A8A8A]">Loading 3D scene...</p>
            </div>
          }
        >
          <SplineLazy scene="https://prod.spline.design/j247cE8qXPrhLMOX/scene.splinecode" />
        </Suspense>
      ) : (
        <div className="text-white flex justify-center items-center h-full bg-black" />
      )}
    </div>
  );
}