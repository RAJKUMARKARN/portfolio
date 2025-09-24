import { useState, useEffect, useRef } from 'react';
import Spline from '@splinetool/react-spline';

export default function SplineViewer() {
  const [showSpline, setShowSpline] = useState(false);
  const containerRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowSpline(true);
        }
      },
      { threshold: 0.25 } // Trigger when 25% of the element is visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  return (
    <div ref={containerRef} className="Spline" style={{ height: '500px', width: '100%' }}>
      {showSpline ? (
        <Spline scene="https://prod.spline.design/toH-nUTyiF8muFAv/scene.splinecode" />
      ) : (
        <div className="Spline-placeholder text-white flex justify-center items-center h-full">
          Loading 3D scene...
        </div>
      )}
    </div>
  );
}
