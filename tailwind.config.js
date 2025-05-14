//** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        apple: {
          blue: "#0071e3",
          gray: "#86868b",
          dark: "#1d1d1f",
          darker: "#000000",
          light: "#f5f5f7",
        },
      },
      fontFamily: {
        sans: ['var(--font-sf-pro)', 'system-ui', 'sans-serif'],
      },
      transitionTimingFunction: {
        'ios': 'cubic-bezier(0.23, 1, 0.32, 1)',
      },
    },
  },
  plugins: [],
}
