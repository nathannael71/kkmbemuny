'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Deteksi scroll untuk mengubah tampilan header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-white/80 backdrop-blur-sm'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-semibold text-gray-900">OrganisasiMU</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/about" className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors">
              Tentang Kami
            </Link>
            <Link href="/programs" className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors">
              Program
            </Link>
            <Link href="/events" className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors">
              Acara
            </Link>
            <Link href="/resources" className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors">
              Sumber Daya
            </Link>
            <Link href="/contact" className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors">
              Kontak
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-gray-600 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">Buka menu utama</span>
              {/* Icon when menu is closed */}
              <svg
                className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Icon when menu is open */}
              <svg
                className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div
        className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-white/95 backdrop-blur-md shadow-lg`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 transition-colors">
            Tentang Kami
          </Link>
          <Link href="/programs" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 transition-colors">
            Program
          </Link>
          <Link href="/events" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 transition-colors">
            Acara
          </Link>
          <Link href="/resources" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 transition-colors">
            Sumber Daya
          </Link>
          <Link href="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 transition-colors">
            Kontak
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
