/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        nova: {
          primary: '#6c5ce7',
          'primary-dark': '#5847d1',
          'primary-light': '#ede9ff',
          'primary-glow': 'rgba(108, 92, 231, 0.35)',
          accent: '#00c2a8',
          'accent-glow': 'rgba(0, 194, 168, 0.35)',
          dark: {
            bg: '#0e0e16',
            surface: '#15151f',
            raised: '#1b1b28',
            border: '#2a2a3a',
            text: '#f3f3f8',
            muted: '#a3a3b8',
            primary: '#8b7cf6',
            'primary-dark': '#7666e8',
            'primary-light': '#241f3d',
            accent: '#2de3c8',
          },
          light: {
            bg: '#ffffff',
            surface: '#f7f7fb',
            raised: '#ffffff',
            border: '#e6e6ef',
            text: '#14141f',
            muted: '#5c5c70',
          }
        }
      },
      borderRadius: {
        'nova-sm': '8px',
        'nova-md': '14px',
        'nova-lg': '22px',
        'nova-full': '999px',
      },
      boxShadow: {
        'nova-sm': '0 1px 2px rgba(20, 20, 31, 0.06)',
        'nova-md': '0 8px 24px rgba(20, 20, 31, 0.08)',
        'nova-lg': '0 20px 48px rgba(20, 20, 31, 0.14)',
        'nova-glow': '0 0 35px -5px rgba(108, 92, 231, 0.45)',
        'nova-accent-glow': '0 0 35px -5px rgba(0, 194, 168, 0.45)',
        'nova-dark-sm': '0 1px 2px rgba(0, 0, 0, 0.3)',
        'nova-dark-md': '0 8px 24px rgba(0, 0, 0, 0.35)',
        'nova-dark-lg': '0 20px 48px rgba(0, 0, 0, 0.5)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'spin-slow': 'spin 18s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.85' },
        }
      }
    },
  },
  plugins: [],
}
