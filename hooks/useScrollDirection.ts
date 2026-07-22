'use client';

import { useEffect, useRef, useState } from 'react';

type ScrollDirection = 'up' | 'down' | null;

export function useScrollDirection(): ScrollDirection {
  const [direction, setDirection] = useState<ScrollDirection>(null);
  const lastY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      if (y > lastY.current + 5) setDirection('down');
      else if (y < lastY.current - 5) setDirection('up');
      lastY.current = y;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return direction;
}
