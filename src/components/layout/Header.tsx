'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { getNavigation } from '@/lib/sanity-queries'
import { Navigation } from '@/types'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { cn } from '@/lib/utils'

export function Header() {
  const [navigation, setNavigation] = useState<Navigation[]>([])
  const [loading, setLoading] = useState(true)
  const [isOpen, setIsOpen] = useState(false)
  const [activeLang, setActiveLang] = useState('ID')
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const searchInputRef = useRef<HTMLInputElement>(null)
  
  useEffect(() => {
    async function fetchNavigation() {
      try {
        const navItems = await getNavigation() 
        setNavigation(navItems || [])
      } catch (error) {
        console.error('Error fetching navigation:', error)
      } finally {
        setLoading(false)
      }
    }
    
    fetchNavigation()
  }, [])

  useEffect(() => {
    // Focus the search input when search is opened
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }, [isSearchOpen])
  
  // Fallback navigation if Sanity fails
  const fallbackNavigation = [
    { title: "Products", url: "#products" },
    { title: "Features", url: "#features" },
    { title: "Careers", url: "#careers" },
    { title: "News", url: "#news" }
  ]
  
  const navItems = navigation.length > 0 ? navigation : fallbackNavigation

  // Handle click outside to close search
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        isSearchOpen &&
        searchInputRef.current &&
        !searchInputRef.current.contains(event.target as Node)
      ) {
        setIsSearchOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isSearchOpen])

  // Handle escape key to close search
  useEffect(() => {
    function handleEscKey(event: KeyboardEvent) {
      if (event.key === 'Escape' && isSearchOpen) {
        setIsSearchOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscKey)
    return () => {
      document.removeEventListener('keydown', handleEscKey)
    }
  }, [isSearchOpen])
  
  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-apple-darker/90 backdrop-blur-md transition-all duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo and left section */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-apple-blue font-semibold text-xl">Brand</span>
            </Link>
          </div>
          
          {/* Center navigation - desktop only */}
          <nav className={cn(
            "hidden md:flex space-x-8 absolute left-1/2 transform -translate-x-1/2",
            isSearchOpen && "opacity-0"
          )}>
            {loading ? (
              <div className="flex space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-4 w-16 bg-gray-200 dark:bg-gray-800 rounded animate-pulse"></div>
                ))}
              </div>
            ) : (
              <>
                {navItems.map((item) => (
                  <Link
                    key={item.title}
                    href={item.url}
                    className="text-apple-gray hover:text-apple-dark dark:hover:text-white text-sm font-medium transition-all duration-300"
                  >
                    {item.title}
                  </Link>
                ))}
              </>
            )}
          </nav>
          
          {/* Apple-style search bar (shown when search is active) */}
          <div 
            className={cn(
              "absolute left-1/2 transform -translate-x-1/2 w-full max-w-lg transition-all duration-300",
              isSearchOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
            )}
          >
            <div className="relative flex items-center">
              <svg 
                className="absolute left-4 w-4 h-4 text-gray-500 dark:text-gray-400" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                ref={searchInputRef}
                type="search"
                placeholder="Search apple.com"
                className="w-full bg-gray-200/70 dark:bg-gray-800/70 rounded-full py-2 pl-10 pr-4 text-sm text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 outline-none focus:ring-2 focus:ring-apple-blue"
                onBlur={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                    if (e.currentTarget.value === '') {
                      setIsSearchOpen(false)
                    }
                  }
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Escape') {
                    setIsSearchOpen(false)
                  }
                }}
              />
              <button 
                onClick={() => setIsSearchOpen(false)}
                className="absolute right-4 text-xs text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
              >
                Cancel
              </button>
            </div>
          </div>
          
          {/* Right section with search, theme, language, and mobile menu */}
          <div className="flex items-center gap-3">
            {/* Search toggle (Apple style) */}
            <button 
              onClick={() => setIsSearchOpen(true)}
              className={cn(
                "flex items-center justify-center text-gray-600 dark:text-gray-400 h-8 w-8 rounded-full hover:bg-gray-200/70 dark:hover:bg-gray-800/70 transition-all",
                isSearchOpen && "opacity-0"
              )}
              aria-label="Search"
            >
              <svg 
                className="w-4 h-4" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            
            {/* Language toggle */}
            <div className={cn(
              "hidden md:flex bg-gray-200/80 dark:bg-gray-800/80 rounded-full p-0.5 h-8 transition-all",
              isSearchOpen && "opacity-0"
            )}>
              <button 
                onClick={() => setActiveLang('ID')} 
                className={`px-2 flex items-center justify-center text-xs font-medium rounded-full transition-all duration-200 ${
                  activeLang === 'ID' 
                    ? 'bg-white dark:bg-gray-700 shadow-sm text-gray-800 dark:text-white' 
                    : 'text-gray-600 dark:text-gray-400'
                }`}
              >
                ID
              </button>
              <button 
                onClick={() => setActiveLang('EN')} 
                className={`px-2 flex items-center justify-center text-xs font-medium rounded-full transition-all duration-200 ${
                  activeLang === 'EN' 
                    ? 'bg-white dark:bg-gray-700 shadow-sm text-gray-800 dark:text-white' 
                    : 'text-gray-600 dark:text-gray-400'
                }`}
              >
                EN
              </button>
            </div>
            
            {/* Theme toggle */}
            <div className={cn(
              "transition-all",
              isSearchOpen && "opacity-0"
            )}>
              <ThemeToggle />
            </div>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "md:hidden flex items-center justify-center text-gray-600 dark:text-gray-400 h-8 w-8",
                isSearchOpen && "opacity-0"
              )}
              aria-label="Toggle menu"
            >
              <div className="relative w-5 h-5">
                <span 
                  className={`absolute h-[1.5px] w-5 bg-current transform transition-transform duration-300 ease-in-out ${
                    isOpen ? 'rotate-45 translate-y-[7px]' : 'rotate-0'
                  }`}
                ></span>
                <span 
                  className={`absolute h-[1.5px] w-5 bg-current top-[7px] transition-opacity duration-300 ease-in-out ${
                    isOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                ></span>
                <span 
                  className={`absolute h-[1.5px] w-5 bg-current top-[14px] transform transition-transform duration-300 ease-in-out ${
                    isOpen ? '-rotate-45 -translate-y-[7px]' : 'rotate-0'
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
        
        {/* Mobile menu with smooth height animation */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen 
              ? 'max-h-96 opacity-100' 
              : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 space-y-6">            
            {/* Mobile search */}
            <div className="px-2">
              <div className="relative flex items-center">
                <svg 
                  className="absolute left-4 w-4 h-4 text-gray-500 dark:text-gray-400" 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="search"
                  placeholder="Search apple.com"
                  className="w-full bg-gray-200/70 dark:bg-gray-800/70 rounded-lg py-2 pl-10 pr-4 text-sm text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 outline-none focus:ring-2 focus:ring-apple-blue"
                />
              </div>
            </div>
            
            {/* Mobile navigation */}
            <div className="flex flex-col space-y-3">
              {loading ? (
                <div className="flex flex-col space-y-4 items-center">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-4 w-32 bg-gray-200 dark:bg-gray-800 rounded animate-pulse"></div>
                  ))}
                </div>
              ) : (
                <>
                  {navItems.map((item) => (
                    <Link
                      key={item.title}
                      href={item.url}
                      onClick={() => setIsOpen(false)}
                      className="text-apple-gray hover:text-apple-dark dark:hover:text-white text-base font-medium transition-all duration-300 text-center py-2"
                    >
                      {item.title}
                    </Link>
                  ))}
                </>
              )}
            </div>
            
            {/* Mobile toggles */}
            <div className="flex flex-wrap gap-3 justify-center">
              <div className="flex bg-gray-200/80 dark:bg-gray-800/80 rounded-full p-0.5 h-8">
                <button 
                  onClick={() => setActiveLang('ID')} 
                  className={`px-2 flex items-center justify-center text-xs font-medium rounded-full transition-all duration-200 ${
                    activeLang === 'ID' 
                      ? 'bg-white dark:bg-gray-700 shadow-sm text-gray-800 dark:text-white' 
                      : 'text-gray-600 dark:text-gray-400'
                  }`}
                >
                  ID
                </button>
                <button 
                  onClick={() => setActiveLang('EN')} 
                  className={`px-2 flex items-center justify-center text-xs font-medium rounded-full transition-all duration-200 ${
                    activeLang === 'EN' 
                      ? 'bg-white dark:bg-gray-700 shadow-sm text-gray-800 dark:text-white' 
                      : 'text-gray-600 dark:text-gray-400'
                  }`}
                >
                  EN
                </button>
              </div>
              
              {/* Mobile theme toggle */}
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
