// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sf-pro-text)', 'system-ui', 'sans-serif'],
        display: ['var(--font-sf-pro)', 'system-ui', 'sans-serif'],
      },
      colors: {
        apple: {
          blue: '#0071e3',
          'blue-dark': '#0077ED',
          gray: {
            50: '#fbfbfd',
            100: '#f5f5f7',
            200: '#e8e8ed',
            300: '#d2d2d7',
            400: '#86868b',
            500: '#6e6e73',
            600: '#1d1d1f',
            700: '#000000',
          }
        },
      },
    },
  },
  plugins: [],
}
