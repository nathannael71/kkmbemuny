'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { NavbarProps } from '@/types/navbar';
import NavLink from './NavLink';
import SearchBar from '@/components/ui/SearchBar';
import ThemeToggle from '@/components/ui/ThemeToggle';
import LanguageToggle from '@/components/ui/LanguageToggle';
import { Language, loadLanguage, saveLanguage, translate } from '@/lib/language';
import { initTheme } from '@/lib/theme';

export default function Navbar({ logo, links, translations }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState<Language>('en');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Initialize on client-side only
  useEffect(() => {
    initTheme();
    setLanguage(loadLanguage());
    setMounted(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update language when it changes
  useEffect(() => {
    const handleLanguageChange = () => {
      setLanguage(loadLanguage());
    };
    
    window.addEventListener('languageChange', handleLanguageChange);
    return () => window.removeEventListener('languageChange', handleLanguageChange);
  }, []);

  // Close menu when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isMenuOpen && !target.closest('.mobile-menu') && !target.closest('.hamburger-button')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  if (!mounted) return null; // Prevent hydration mismatch

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen
          ? 'bg-white/90 dark:bg-black/90 backdrop-blur-md'
          : 'bg-white dark:bg-black'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Left side */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={30}
                height={30}
                className="transition-opacity hover:opacity-80"
              />
            </Link>
          </div>

          {/* Desktop Navigation - Center */}
          <div className="hidden md:flex items-center justify-center flex-1 space-x-8">
            {links.map((link) => (
              <NavLink key={link.id} href={link.href}>
                {translate(link.label, translations, language)}
              </NavLink>
            ))}
          </div>

          {/* Right side items */}
          <div className="flex items-center space-x-4">
            {/* Search Bar */}
            <SearchBar placeholder={translate('search', translations, language)} />
            
            {/* Language Selector */}
            <LanguageToggle />
            
            {/* Theme Toggler */}
            <ThemeToggle />

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="hamburger-button md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none"
              aria-expanded={isMenuOpen ? 'true' : 'false'}
            >
              <span className="sr-only">{translate('toggleMenu', translations, language)}</span>
              <div className="relative w-5 h-5">
                <span 
                  className={`absolute h-[1.5px] w-5 bg-current transform transition-transform duration-300 ease-in-out ${
                    isMenuOpen ? 'rotate-45 translate-y-[7px]' : 'rotate-0'
                  }`}
                ></span>
                <span 
                  className={`absolute h-[1.5px] w-5 bg-current top-[7px] transition-opacity duration-300 ease-in-out ${
                    isMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                ></span>
                <span 
                  className={`absolute h-[1.5px] w-5 bg-current top-[14px] transform transition-transform duration-300 ease-in-out ${
                    isMenuOpen ? '-rotate-45 -translate-y-[7px]' : 'rotate-0'
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`mobile-menu md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-4 pt-2 pb-4 space-y-1 bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800">
          {/* Mobile Nav Links */}
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="block py-2.5 px-3 rounded-md text-base font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              {translate(link.label, translations, language)}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
