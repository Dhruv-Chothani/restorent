import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      background: '#faf8f3',
      foreground: '#1a1410',
      primary: '#2d2017',
      secondary: '#d4af37',
      accent: '#8b7355',
      light: '#f5f0e8',
      dark: '#0f0a06',
      white: '#ffffff',
      black: '#000000',
    },
    fontFamily: {
      sans: ['var(--font-geist-sans)', 'system-ui'],
      serif: ['var(--font-playfair)', 'Georgia'],
    },
    extend: {
      animation: {
        fadeIn: 'fadeIn 0.8s ease-out',
        slideUp: 'slideUp 0.8s ease-out',
        slideDown: 'slideDown 0.8s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
