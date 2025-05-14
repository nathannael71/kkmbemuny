'use client';

// src/components/section/HeroSection.tsx
import React from 'react';
import Image from 'next/image';
import { Button } from '../ui/Button';
import { cn } from '@/lib/utils';

interface HeroSectionProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  imageSrc?: string;
  imageAlt?: string;
  background?: 'white' | 'light' | 'dark' | 'black';
  textColor?: 'light' | 'dark';
  textAlignment?: 'center' | 'left' | 'right';
  className?: string;
  imagePosition?: 'top' | 'bottom' | 'background';
  fullHeight?: boolean;
}

export function HeroSection({
  eyebrow,
  title,
  subtitle,
  ctaText,
  ctaLink = '#',
  secondaryCtaText,
  secondaryCtaLink = '#',
  imageSrc,
  imageAlt = '',
  background = 'white',
  textColor = 'dark',
  textAlignment = 'center',
  className,
  imagePosition = 'bottom',
  fullHeight = false,
}: HeroSectionProps) {
  const alignmentClasses = {
    'center': 'text-center items-center',
    'left': 'text-left items-start',
    'right': 'text-right items-end',
  };

  const textColorClasses = {
    'light': 'text-white',
    'dark': 'text-apple-gray-600',
  };

  const backgroundStyles = {
    'white': 'bg-white',
    'light': 'bg-apple-gray-50',
    'dark': 'bg-apple-gray-600',
    'black': 'bg-black',
  };

  return (
    <div 
      className={cn(
        'relative overflow-hidden', 
        backgroundStyles[background],
        fullHeight && 'min-h-screen', 
        className
      )}
    >
      {imageSrc && imagePosition === 'background' && (
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          className="object-cover z-0"
        />
      )}
      
      <div className={cn(
        'relative z-10 flex flex-col max-w-[980px] mx-auto px-6 md:px-8 py-[50px] md:py-[70px]',
        alignmentClasses[textAlignment],
        textColorClasses[textColor],
        fullHeight && 'min-h-[calc(100vh-44px)] justify-center',
      )}>
        <div className="space-y-3 max-w-[600px]">
          {eyebrow && <div className="eyebrow">{eyebrow}</div>}
          <h1 className="headline">{title}</h1>
          {subtitle && <p className="subhead mt-1">{subtitle}</p>}
          
          {(ctaText || secondaryCtaText) && (
            <div className={cn(
              "flex flex-wrap gap-4 mt-6",
              textAlignment === 'center' && "justify-center",
              textAlignment === 'right' && "justify-end"
            )}>
              {ctaText && (
                <Button href={ctaLink} chevron>{ctaText}</Button>
              )}
              {secondaryCtaText && (
                <Button variant="link" href={secondaryCtaLink} chevron>{secondaryCtaText}</Button>
              )}
            </div>
          )}
        </div>
        
        {imageSrc && imagePosition === 'top' && (
          <div className="mt-8 relative w-full">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={980}
              height={550}
              className="object-cover w-full"
            />
          </div>
        )}
      </div>
      
      {imageSrc && imagePosition === 'bottom' && (
        <div className="relative w-full">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={980}
            height={550}
            className="object-cover w-full"
          />
        </div>
      )}
    </div>
  );
}
