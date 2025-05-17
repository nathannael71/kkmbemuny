'use client';

export type Language = 'en' | 'id';

export const saveLanguage = (language: Language) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('language', language);
  }
};

export const loadLanguage = (): Language => {
  if (typeof window !== 'undefined') {
    const savedLanguage = localStorage.getItem('language');
    
    if (savedLanguage === 'en' || savedLanguage === 'id') {
      return savedLanguage;
    }
    
    // Default based on browser language
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('id')) {
      return 'id';
    }
  }
  
  return 'en';
};

export const translate = (
  key: string,
  translations: { en: Record<string, string>; id: Record<string, string> },
  language: Language
): string => {
  return translations[language][key] || key;
};
