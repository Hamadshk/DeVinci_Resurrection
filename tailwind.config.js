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
          'pure-black': '#000000',
          'cyber-cyan': '#00ffff',
          'cyber-white': '#ffffff',
          'glass-black': 'rgba(0, 0, 0, 0.8)',
          'glass-white': 'rgba(255, 255, 255, 0.1)',
          'neon-glow': 'rgba(0, 255, 255, 0.3)',
          // NEW: Enhanced tech color palette
          'matrix-green': '#00ff41',
          'circuit-blue': '#0080ff',
          'terminal-amber': '#ffb000',
          'holo-purple': '#b900ff',
          'data-orange': '#ff6500',
          'quantum-pink': '#ff0080',
          'neural-violet': '#8000ff',
          'ai-emerald': '#00ff80',
        },
        fontFamily: {
          'mono': ['Major Mono Display', 'monospace'],
          'inter': ['Inter', 'sans-serif'],
          'code': ['Courier New', 'monospace'],
        },
        backgroundImage: {
          'cyber-grid': `
            linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(180deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
          `,
          'hero-grid': `
            linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
            linear-gradient(180deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
          `,
          // NEW: Advanced tech patterns
          'binary-pattern': `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Ctext x='10' y='20' font-family='monospace' font-size='8' fill='%2300ffff' opacity='0.1'%3E01%3C/text%3E%3Ctext x='30' y='40' font-family='monospace' font-size='8' fill='%23ffffff' opacity='0.05'%3E10%3C/text%3E%3Ctext x='5' y='50' font-family='monospace' font-size='8' fill='%2300ffff' opacity='0.08'%3E11%3C/text%3E%3C/g%3E%3C/svg%3E")`,
          'circuit-pattern': `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%2300ffff' stroke-width='0.5' opacity='0.1'%3E%3Cpath d='M10 10h20M10 30h20M20 0v40M0 20h40'/%3E%3Ccircle cx='10' cy='10' r='2'/%3E%3Ccircle cx='30' cy='10' r='2'/%3E%3Ccircle cx='10' cy='30' r='2'/%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/svg%3E")`,
          'neural-pattern': `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%2300ffff' stroke-width='0.5' opacity='0.08'%3E%3Cline x1='20' y1='20' x2='80' y2='80'/%3E%3Cline x1='80' y1='20' x2='20' y2='80'/%3E%3Cline x1='50' y1='0' x2='50' y2='100'/%3E%3Cline x1='0' y1='50' x2='100' y2='50'/%3E%3Ccircle cx='20' cy='20' r='3'/%3E%3Ccircle cx='80' cy='20' r='3'/%3E%3Ccircle cx='20' cy='80' r='3'/%3E%3Ccircle cx='80' cy='80' r='3'/%3E%3Ccircle cx='50' cy='50' r='4'/%3E%3C/g%3E%3C/svg%3E")`,
          'terminal-pattern': `url("data:image/svg+xml,%3Csvg width='80' height='20' viewBox='0 0 80 20' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='2' y='14' font-family='monospace' font-size='10' fill='%2300ffff' opacity='0.1'%3E%24 npm run build%3C/text%3E%3C/svg%3E")`,
          'matrix-rain': `linear-gradient(180deg, transparent 0%, rgba(0, 255, 255, 0.1) 50%, transparent 100%)`,
          'data-flow': `linear-gradient(90deg, transparent 0%, rgba(0, 255, 255, 0.3) 50%, transparent 100%)`,
          'quantum-field': `radial-gradient(circle at center, rgba(0, 255, 255, 0.1) 0%, transparent 70%)`,
        },
        animation: {
          'scanline': 'scanline 3s linear infinite',
          'glow': 'glow 2s ease-in-out infinite alternate',
          'float': 'float 3s ease-in-out infinite',
          'energy-pulse': 'energyPulse 2s ease-in-out infinite',
          'glitch': 'digitalGlitch 0.3s ease-in-out infinite',
          // NEW: Advanced tech animations
          'matrix-rain': 'matrixDigitalRain 4s linear infinite',
          'binary-stream': 'binaryStream 8s linear infinite',
          'circuit-pulse': 'circuitPulse 2s ease-in-out infinite',
          'data-packet': 'dataPacket 6s linear infinite',
          'terminal-blink': 'terminalBlink 1s infinite',
          'neural-pulse': 'neuralPulse 3s ease-in-out infinite',
          'code-compile': 'codeCompile 2s ease-out forwards',
          'holo-flicker': 'holoFlicker 4s ease-in-out infinite',
          'quantum-particle': 'quantumParticle 5s ease-in-out infinite',
          'scanner-line': 'scannerLine 3s ease-in-out infinite',
          'particle-float': 'particleFloat 6s ease-in-out infinite',
          'data-stream': 'dataStreamFlow 4s linear infinite',
          'tech-pulse': 'techPulse 1.5s ease-in-out infinite',
        },
        boxShadow: {
          'neon-cyan': '0 0 20px rgba(0, 255, 255, 0.5)',
          'neon-white': '0 0 20px rgba(255, 255, 255, 0.3)',
          'cyber-card': '0 20px 40px rgba(0, 255, 255, 0.2), 0 0 0 1px rgba(0, 255, 255, 0.3)',
          // NEW: Enhanced tech shadows
          'matrix-glow': '0 0 30px rgba(0, 255, 65, 0.4)',
          'circuit-glow': '0 0 25px rgba(0, 128, 255, 0.3)',
          'terminal-glow': '0 0 15px rgba(255, 176, 0, 0.4)',
          'neural-glow': '0 0 35px rgba(128, 0, 255, 0.3)',
          'quantum-glow': '0 0 40px rgba(255, 0, 128, 0.2)',
        },
        backdropBlur: {
          'cyber': '20px',
          'terminal': '15px',
          'matrix': '25px',
        },
        // NEW: Tech-specific spacing and sizing
        spacing: {
          '18': '4.5rem',
          '88': '22rem',
          '112': '28rem',
          '128': '32rem',
        },
        // NEW: Border radius for tech elements
        borderRadius: {
          'circuit': '0.25rem',
          'terminal': '0.5rem',
          'hud': '0.125rem',
        },
        // NEW: Tech-themed gradients
        gradientColorStops: {
          'cyber-start': '#00ffff',
          'cyber-end': '#0080ff',
          'matrix-start': '#00ff41',
          'matrix-end': '#00aa2b',
          'neural-start': '#8000ff',
          'neural-end': '#b900ff',
        },
        // NEW: Custom keyframes for tech animations
        keyframes: {
          particleFloat: {
            '0%, 100%': { transform: 'translateY(0px) rotate(0deg)', opacity: '0.3' },
            '25%': { transform: 'translateY(-20px) rotate(90deg)', opacity: '0.8' },
            '50%': { transform: 'translateY(-40px) rotate(180deg)', opacity: '1' },
            '75%': { transform: 'translateY(-20px) rotate(270deg)', opacity: '0.8' },
          },
          dataStreamFlow: {
            '0%': { transform: 'translateX(-100%) scaleX(0)', opacity: '0' },
            '10%': { transform: 'translateX(-50%) scaleX(1)', opacity: '1' },
            '90%': { transform: 'translateX(50%) scaleX(1)', opacity: '1' },
            '100%': { transform: 'translateX(100%) scaleX(0)', opacity: '0' },
          },
          techPulse: {
            '0%, 100%': { 
              boxShadow: '0 0 5px rgba(0, 255, 255, 0.3)',
              transform: 'scale(1)',
            },
            '50%': { 
              boxShadow: '0 0 20px rgba(0, 255, 255, 0.8), 0 0 30px rgba(0, 255, 255, 0.4)',
              transform: 'scale(1.02)',
            },
          },
        },
        // NEW: Tech-themed typography
        fontSize: {
          'tech-xs': ['0.65rem', { lineHeight: '1rem', letterSpacing: '0.05em' }],
          'tech-sm': ['0.75rem', { lineHeight: '1.25rem', letterSpacing: '0.05em' }],
          'tech-base': ['0.875rem', { lineHeight: '1.5rem', letterSpacing: '0.02em' }],
          'hud': ['0.625rem', { lineHeight: '0.875rem', letterSpacing: '0.1em' }],
          'terminal': ['0.8125rem', { lineHeight: '1.375rem', letterSpacing: '0.025em' }],
        },
      },
    },
    plugins: [require('flowbite/plugin'), require("daisyui")],
  }
  