'use client';

import { useEffect, useState } from 'react';
import { Language, loadLanguage, saveLanguage } from '@/lib/language';

interface LanguageToggleProps {
  className?: string;
}

export default function LanguageToggle({ className = '' }: LanguageToggleProps) {
  const [language, setLanguage] = useState<Language>('en');
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setLanguage(loadLanguage());
    setMounted(true);
  }, []);
  
  const toggleLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
    saveLanguage(newLanguage);
  };
  
  if (!mounted) return null;
  
  return (
    <div className={`flex bg-gray-100/80 dark:bg-gray-800/80 rounded-full p-0.5 h-8 ${className}`}>
      <button 
        onClick={() => toggleLanguage('id')} 
        className={`px-2 flex items-center justify-center text-xs font-medium rounded-full transition-all duration-200 ${
          language === 'id' 
            ? 'bg-white dark:bg-gray-700 shadow-sm text-gray-800 dark:text-white' 
            : 'text-gray-600 dark:text-gray-400'
        }`}
        aria-label="Bahasa Indonesia"
      >
        ID
      </button>
      <button 
        onClick={() => toggleLanguage('en')} 
        className={`px-2 flex items-center justify-center text-xs font-medium rounded-full transition-all duration-200 ${
          language === 'en' 
            ? 'bg-white dark:bg-gray-700 shadow-sm text-gray-800 dark:text-white' 
            : 'text-gray-600 dark:text-gray-400'
        }`}
        aria-label="English"
      >
        EN
      </button>
    </div>
  );
}
