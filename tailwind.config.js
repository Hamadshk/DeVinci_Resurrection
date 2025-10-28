/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,jsx,ts,tsx,mdx}',
        'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
    ],
    theme: {
      extend: {
        colors: {
          // Clean Professional Theme - Dark Blue, Red, White
          'primary': '#1e40af',        // Professional blue
          'primary-dark': '#1e3a8a',   // Darker blue
          'primary-light': '#3b82f6',  // Lighter blue
          'secondary': '#dc2626',      // Bold red accent
          'secondary-dark': '#991b1b', // Darker red
          'secondary-light': '#ef4444',// Lighter red
          'accent': '#dc2626',         // Red accent
          'dark': '#1f2937',           // Dark gray
          'light': '#ffffff',          // Pure white
          'gray-50': '#f9fafb',
          'gray-100': '#f3f4f6',
          'gray-200': '#e5e7eb',
          'gray-300': '#d1d5db',
          'gray-400': '#9ca3af',
          'gray-500': '#6b7280',
          'gray-600': '#4b5563',
          'gray-700': '#374151',
          'gray-800': '#1f2937',
          'gray-900': '#111827',
          'success': '#10b981',
          'warning': '#f59e0b',
          'error': '#dc2626',
          'info': '#3b82f6',
        },
        fontFamily: {
          'sans': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
          'display': ['Poppins', 'Inter', 'sans-serif'],
          'mono': ['JetBrains Mono', 'Courier New', 'monospace'],
        },
        backgroundImage: {
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
          'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          'hero-pattern': `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23dc2626' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          'dark-grid': `linear-gradient(to right, rgb(220 38 38 / 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgb(220 38 38 / 0.1) 1px, transparent 1px)`,
          'navy-gradient': 'linear-gradient(135deg, #0a1628 0%, #1e3a8a 100%)',
          'red-gradient': 'linear-gradient(135deg, #991b1b 0%, #dc2626 100%)',
        },
        animation: {
          'fade-in': 'fadeIn 0.6s ease-out',
          'fade-up': 'fadeUp 0.8s ease-out',
          'slide-in': 'slideIn 0.5s ease-out',
          'scale-in': 'scaleIn 0.5s ease-out',
          'bounce-gentle': 'bounceGentle 2s ease-in-out infinite',
          'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
          'spin-slow': 'spin 3s linear infinite',
          'float': 'float 3s ease-in-out infinite',
        },
        boxShadow: {
          'soft': '0 2px 15px 0 rgba(0, 0, 0, 0.3)',
          'medium': '0 4px 20px 0 rgba(0, 0, 0, 0.4)',
          'large': '0 10px 40px 0 rgba(0, 0, 0, 0.5)',
          'xl': '0 20px 50px 0 rgba(0, 0, 0, 0.6)',
          'red': '0 4px 20px 0 rgba(220, 38, 38, 0.4)',
          'primary': '0 4px 20px 0 rgba(220, 38, 38, 0.5)',
          'red-glow': '0 0 30px rgba(220, 38, 38, 0.3)',
          'blue-glow': '0 0 30px rgba(30, 58, 138, 0.3)',
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
          },
          fadeUp: {
            '0%': { opacity: '0', transform: 'translateY(30px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
          },
          slideIn: {
            '0%': { transform: 'translateX(-100%)' },
            '100%': { transform: 'translateX(0)' },
          },
          scaleIn: {
            '0%': { transform: 'scale(0.9)', opacity: '0' },
            '100%': { transform: 'scale(1)', opacity: '1' },
          },
          bounceGentle: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-10px)' },
          },
          float: {
            '0%, 100%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(-20px)' },
          },
        },
        spacing: {
          '18': '4.5rem',
          '88': '22rem',
          '112': '28rem',
          '128': '32rem',
        },
        borderRadius: {
          '4xl': '2rem',
        },
      },
    },
    plugins: [require('flowbite/plugin'), require("daisyui")],
  }
  