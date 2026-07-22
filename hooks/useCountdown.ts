'use client';

import { useEffect, useRef, useState } from 'react';
import { WEDDING } from '@/lib/constants';
import { padTwo } from '@/lib/utils';

interface CountdownValues {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function useCountdown(): CountdownValues {
  const targetDate = WEDDING.date;

  const calculate = (): CountdownValues => {
    const now = new Date().getTime();
    const target = targetDate.getTime();
    const diff = Math.max(target - now, 0);

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((diff % (1000 * 60)) / 1000),
    };
  };

  const [values, setValues] = useState<CountdownValues>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setValues(calculate()); // Set immediately on mount
    const id = setInterval(() => {
      setValues(calculate());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return values;
}

export { padTwo };
