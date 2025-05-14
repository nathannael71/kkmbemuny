'use client'

// src/components/ui/Button.tsx
import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg';
  asChild?: boolean;
  href?: string;
  chevron?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'default', asChild = false, href, chevron = false, children, ...props }, ref) => {
    const Comp = asChild ? React.Fragment : 'button';
    
    const styles = cn(
      'inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50',
      {
        // Primary button like Apple's blue buttons
        'rounded-full bg-apple-blue text-white hover:bg-apple-blue-dark': variant === 'primary',
        // Secondary button like Apple's transparent buttons with borders
        'rounded-full bg-transparent border border-apple-gray-300 text-apple-gray-600 hover:bg-apple-gray-100': variant === 'secondary',
        // Ghost buttons (no background or border)
        'bg-transparent text-apple-gray-600 hover:text-apple-gray-700': variant === 'ghost',
        // Link style
        'bg-transparent text-apple-blue hover:underline p-0': variant === 'link',
        // Sizes
        'h-[36px] px-[22px] text-[17px] leading-none': size === 'default' && variant !== 'link',
        'h-[28px] px-[16px] text-[14px] leading-none': size === 'sm' && variant !== 'link',
        'h-[40px] px-[30px] text-[17px] leading-none': size === 'lg' && variant !== 'link',
        'text-[17px]': size === 'default' && variant === 'link',
        'text-[14px]': size === 'sm' && variant === 'link',
        'text-[19px]': size === 'lg' && variant === 'link',
      },
      className
    );
    
    const ChevronIcon = () => (
      <svg className="ml-[6px] w-[7px] h-[12px]" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.538574 1.26953L5.26776 6.00098L0.538574 10.7324" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    );
    
    if (href) {
      return (
        <Link href={href} className={styles}>
          <span>{children}</span>
          {chevron && <ChevronIcon />}
        </Link>
      );
    }
    
    return (
      <Comp ref={ref} className={styles} {...props}>
        <span>{children}</span>
        {chevron && <ChevronIcon />}
      </Comp>
    );
  }
);

Button.displayName = 'Button';

export { Button };
