import React from 'react';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold text-center mb-8">Welcome to My Website</h1>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-md">
          <p className="text-lg mb-4">
            This is the homepage of my website. I'm using Next.js 15.3.2 with a custom navbar 
            inspired by Apple.com.
          </p>
          
          <p className="text-lg mb-4">
            The navbar features a responsive design with dark mode toggle, language switcher,
            and search functionality.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-2">Features</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>Responsive design</li>
                <li>Dark mode support</li>
                <li>Multilingual (EN/ID)</li>
                <li>Search functionality</li>
                <li>Hamburger menu on mobile</li>
              </ul>
            </div>
            
            <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-2">Technologies</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>Next.js 15.3.2</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>React Hooks</li>
                <li>Vercel Deployment</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 text-center text-gray-500 dark:text-gray-400">
        <p>© 2024 My Website. All rights reserved.</p>
      </div>
    </main>
  );
}
