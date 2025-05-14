'use client';

// src/components/ui/Card.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface CardProps {
  title: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  href?: string;
  ctaText?: string;
  className?: string;
  eyebrow?: string;
  background?: 'white' | 'light' | 'dark' | 'black';
}

export function Card({
  title,
  description,
  imageSrc,
  imageAlt = '',
  href,
  ctaText = 'Learn more',
  className,
  eyebrow,
  background = 'white',
}: CardProps) {
  const backgroundStyles = {
    white: 'bg-white',
    light: 'bg-apple-gray-50',
    dark: 'bg-apple-gray-600 text-white',
    black: 'bg-black text-white',
  };

  const ChevronIcon = () => (
    <svg className="ml-[6px] w-[7px] h-[12px]" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.538574 1.26953L5.26776 6.00098L0.538574 10.7324" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );

  const content = (
    <>
      {imageSrc && (
        <div className="relative w-full aspect-[16/9] overflow-hidden">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col p-6 md:p-8">
        {eyebrow && <div className="text-[14px] uppercase tracking-[0.14em] mb-1 text-apple-gray-400">{eyebrow}</div>}
        <h3 className="text-[24px] md:text-[28px] font-semibold leading-[1.14]">{title}</h3>
        {description && <p className="mt-2 text-[17px] leading-[1.47059]">{description}</p>}

        {href && ctaText && (
          <div className="mt-4 flex items-center text-apple-blue">
            <span>{ctaText}</span>
            <ChevronIcon />
          </div>
        )}
      </div>
    </>
  );

  const wrapperClass = cn(
    'group flex flex-col overflow-hidden rounded-[20px] transition-all duration-300',
    backgroundStyles[background],
    href && 'hover:shadow-lg',
    className
  );

  return href ? (
    <Link href={href} className={wrapperClass}>
      {content}
    </Link>
  ) : (
    <div className={wrapperClass}>
      {content}
    </div>
  );
}
