'use client';

// src/components/section/Section.tsx
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'light' | 'dark' | 'black';
  fullWidth?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export function Section({
  children,
  className,
  background = 'white',
  fullWidth = false,
  padding = 'lg',
}: SectionProps) {
  const backgroundStyles = {
    'white': 'bg-white text-apple-gray-600',
    'light': 'bg-apple-gray-50 text-apple-gray-600',
    'dark': 'bg-apple-gray-600 text-white',
    'black': 'bg-black text-white',
  };
  
  const paddingStyles = {
    'none': 'py-0',
    'sm': 'py-8 md:py-12',
    'md': 'py-[50px] md:py-[70px]',
    'lg': 'py-[70px] md:py-[100px]',
  };

  return (
    <section className={cn(backgroundStyles[background], paddingStyles[padding], className)}>
      <div className={cn(
        fullWidth ? 'w-full' : 'max-w-[980px] mx-auto px-6 md:px-8',
      )}>
        {children}
      </div>
    </section>
  );
}
