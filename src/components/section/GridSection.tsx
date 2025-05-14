'use client';

// src/components/section/GridSection.tsx
import React from 'react';
import { Section } from './Section';
import { cn } from '@/lib/utils';

interface GridSectionProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  columns?: 1 | 2 | 3 | 4;
  background?: 'white' | 'light' | 'dark' | 'black';
  className?: string;
  gap?: 'sm' | 'md' | 'lg';
}

export function GridSection({
  eyebrow,
  title,
  subtitle,
  children,
  columns = 3,
  background = 'white',
  className,
  gap = 'md',
}: GridSectionProps) {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
  };

  const gridGap = {
    'sm': 'gap-4',
    'md': 'gap-6',
    'lg': 'gap-8',
  };

  return (
    <Section background={background} className={className}>
      {(eyebrow || title || subtitle) && (
        <div className="mb-12 text-center">
          {eyebrow && <div className="eyebrow mb-1">{eyebrow}</div>}
          {title && <h2 className="text-[32px] md:text-[48px] font-semibold mb-4 leading-[1.1] tracking-[-0.003em]">{title}</h2>}
          {subtitle && <p className="text-[21px] md:text-[24px] leading-[1.2381] max-w-[600px] mx-auto">{subtitle}</p>}
        </div>
      )}
      
      <div className={cn('grid', gridCols[columns], gridGap[gap])}>
        {children}
      </div>
    </Section>
  );
}
