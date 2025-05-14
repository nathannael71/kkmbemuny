'use client';

// src/components/header/Header.tsx
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface NavigationItem {
  label: string;
  href: string;
}

const navigation: NavigationItem[] = [
  { label: 'Store', href: '/store' },
  { label: 'Mac', href: '/mac' },
  { label: 'iPad', href: '/ipad' },
  { label: 'iPhone', href: '/iphone' },
  { label: 'Watch', href: '/watch' },
  { label: 'Vision', href: '/vision' },
  { label: 'AirPods', href: '/airpods' },
  { label: 'TV & Home', href: '/tv-home' },
  { label: 'Entertainment', href: '/entertainment' },
  { label: 'Accessories', href: '/accessories' },
  { label: 'Support', href: '/support' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-apple-gray-50/80 backdrop-blur-lg' : 'bg-apple-gray-50/80 backdrop-blur-lg'
    }`}>
      <div className="max-w-[980px] mx-auto">
        <div className="flex items-center justify-between h-[44px] mx-auto px-4 md:px-8">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <svg height="44" viewBox="0 0 14 44" width="14" className="h-[44px] w-[14px] fill-apple-gray-600">
              <path d="m13.0729 17.6825a3.61 3.61 0 0 0 -1.7248 3.0365 3.5132 3.5132 0 0 0 2.1379 3.2223 8.394 8.394 0 0 1 -1.0948 2.2618c-.6816.9812-1.3943 1.9623-2.4787 1.9623s-1.3633-.63-2.613-.63c-1.2187 0-1.6525.6507-2.644.6507s-1.6834-.9089-2.4787-2.0243a9.7842 9.7842 0 0 1 -1.6628-5.2776c0-3.0984 2.014-4.7405 3.9969-4.7405 1.0535 0 1.9314.6919 2.5924.6919.63 0 1.6112-.7333 2.8092-.7333a3.7579 3.7579 0 0 1 3.1604 1.5968zm-3.7284-2.8918a3.5615 3.5615 0 0 0 .8247-2.5617 3.6182 3.6182 0 0 0 -2.3849 1.2392 3.4039 3.4039 0 0 0 -.8557 2.4787 3.0019 3.0019 0 0 0 2.4159-1.1562z"></path>
            </svg>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex justify-center flex-1">
            <ul className="flex space-x-8 items-center">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href}
                    className="apple-nav-link transition-opacity"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Search and Bag icons */}
          <div className="flex items-center space-x-6">
            <button aria-label="Search" className="text-apple-gray-600 hover:text-apple-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[17px] h-[17px]">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </button>
            <button aria-label="Shopping Bag" className="text-apple-gray-600 hover:text-apple-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[17px] h-[17px]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
            </button>
            <button 
              className="md:hidden text-apple-gray-600 hover:text-apple-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[17px] h-[17px]">
                <path strokeLinecap="round" strokeLinejoin="round" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-apple-gray-50 border-t border-apple-gray-200 overflow-hidden transition-all duration-300">
          <div className="py-2 px-8">
            {navigation.map((item) => (
              <Link 
                key={item.href} 
                href={item.href}
                className="block py-2 text-[17px] text-apple-gray-600 font-normal"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
