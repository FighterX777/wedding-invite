'use client';

import { useEffect, useRef, useState } from 'react';

type ScrollDirection = 'up' | 'down' | null;

export function useScrollDirection(): ScrollDirection {
  const [direction, setDirection] = useState<ScrollDirection>(null);
  const lastY = useRef(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const y = window.scrollY;
          const delta = y - lastY.current;
          if (Math.abs(delta) > 15) {
            if (delta > 0 && direction !== 'down') {
              setDirection('down');
            } else if (delta < 0 && direction !== 'up') {
              setDirection('up');
            }
            lastY.current = y;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [direction]);

  return direction;
}
