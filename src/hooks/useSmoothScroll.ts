import Lenis from 'lenis';
import { useEffect, useRef } from 'react';

const useSmoothScroll = () => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      // duration: 1.2, // Adjust duration for scroll "lag"
      // easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Example easing function
      // smoothWheel: true, // Enable smooth scrolling for mouse wheel
      // smoothTouch: false, // Usually better to keep native touch scrolling
      // touchMultiplier: 2,
      // wheelMultiplier: 1, // Adjust scroll speed
      // lerp: 0.1, // Adjust for smoothness/responsiveness. Lower is smoother but more "laggy".
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Clean up on component unmount
    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return lenisRef; // Optionally return the ref if you need to access Lenis instance elsewhere
};

export default useSmoothScroll;