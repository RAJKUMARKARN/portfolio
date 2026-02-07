import { useState, useEffect, useRef, lazy, Suspense } from 'react';

const SplineLazy = lazy(() => import('@splinetool/react-spline'));

export default function SplineNext() {
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
    <div ref={containerRef} style={{ height: '100%', width: '100%' }}>
      {shouldLoad ? (
        <Suspense
          fallback={
            <div className="text-white flex justify-center items-center h-full bg-black">
              <div className="text-center">
                <div className="inline-block w-8 h-8 border-2 border-[#9C28DF] border-t-transparent rounded-full animate-spin mb-3" />
                <p className="text-sm text-[#8A8A8A]">Loading 3D scene...</p>
              </div>
            </div>
          }
        >
          <SplineLazy scene="https://prod.spline.design/MT1TC8N867oLDF4A/scene.splinecode" />
        </Suspense>
      ) : (
        <div className="text-white flex justify-center items-center h-full bg-black">
          <div className="text-center">
            <div className="inline-block w-8 h-8 border-2 border-[#9C28DF] border-t-transparent rounded-full animate-spin mb-3" />
            <p className="text-sm text-[#8A8A8A]">Loading 3D scene...</p>
          </div>
        </div>
      )}
    </div>
  );
}
