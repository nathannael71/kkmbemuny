'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface SearchBarProps {
  placeholder: string;
}

export default function SearchBar({ placeholder }: SearchBarProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (inputRef.current && !inputRef.current.contains(e.target as Node)) {
        setIsExpanded(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchTerm)}`);
      setSearchTerm('');
      setIsExpanded(false);
    }
  };
  
  return (
    <div className="relative" ref={inputRef}>
      <div className={`flex items-center overflow-hidden transition-all duration-300 ${
        isExpanded 
          ? 'w-40 sm:w-48 bg-gray-100 dark:bg-gray-800 rounded-full' 
          : 'w-8 h-8'
      }`}>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center justify-center w-8 h-8 text-gray-600 dark:text-gray-300"
          aria-label="Search"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
            <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
          </svg>
        </button>
        
        {isExpanded && (
          <form onSubmit={handleSubmit} className="w-full">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={placeholder}
              className="w-full h-8 pl-1 pr-3 text-sm bg-transparent text-gray-900 dark:text-white border-0 focus:outline-none focus:ring-0"
              autoFocus
            />
          </form>
        )}
      </div>
    </div>
  );
}
