/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-syne)', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
        body: ['var(--font-dm)', 'sans-serif'],
      },
      colors: {
        bg: '#030712',
        surface: '#0d1526',
        'surface-2': '#111d35',
        cyan: {
          glow: '#00D4FF',
          DEFAULT: '#00B4D8',
          dark: '#0077A8',
        },
        violet: {
          glow: '#A855F7',
          DEFAULT: '#7C3AED',
          dark: '#5B21B6',
        },
        amber: {
          glow: '#FCD34D',
          DEFAULT: '#F59E0B',
        },
        'text-primary': '#E2E8F0',
        'text-secondary': '#94A3B8',
        'text-muted': '#475569',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'grid-pattern':
          "linear-gradient(to right, rgba(0,212,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,212,255,0.05) 1px, transparent 1px)",
      },
      backgroundSize: {
        'grid': '60px 60px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.8s ease forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(0,212,255,0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(0,212,255,0.8)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(40px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      boxShadow: {
        'cyan-glow': '0 0 30px rgba(0,212,255,0.4)',
        'violet-glow': '0 0 30px rgba(168,85,247,0.4)',
        'amber-glow': '0 0 30px rgba(245,158,11,0.4)',
      },
    },
  },
  plugins: [],
};
