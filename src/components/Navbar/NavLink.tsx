'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

export default function NavLink({ href, className = '', children }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;
  
  return (
    <Link 
      href={href} 
      className={`text-sm font-medium transition-colors ${
        isActive 
          ? 'text-black dark:text-white' 
          : 'text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white'
      } ${className}`}
    >
      {children}
    </Link>
  );
}
