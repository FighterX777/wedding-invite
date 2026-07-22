'use client';

import { cn } from '@/lib/utils';

interface GoldDividerProps {
  className?: string;
}

export function GoldDivider({ className }: GoldDividerProps) {
  return (
    <div className={cn('flex items-center justify-center gap-3 my-2', className)}>
      <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-[#C9A84C]" />
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path
          d="M8 0L9.5 6.5L16 8L9.5 9.5L8 16L6.5 9.5L0 8L6.5 6.5L8 0Z"
          fill="#C9A84C"
        />
      </svg>
      <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-[#C9A84C]" />
    </div>
  );
}
