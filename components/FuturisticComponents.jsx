import React from 'react';
import { motion } from 'framer-motion';

// Futuristic Grid Background Component
export const FuturisticGrid = ({ className = '', intensity = 'medium' }) => {
  const intensities = {
    light: 'opacity-20',
    medium: 'opacity-30',
    strong: 'opacity-40'
  };

  return (
    <div 
      className={`absolute inset-0 ${intensities[intensity]} ${className}`}
      style={{
        backgroundImage: `
          linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px),
          linear-gradient(180deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: "50px 50px"
      }}
    />
  );
};

// NEW: Matrix Digital Rain Effect
export const MatrixRain = ({ className = '', density = 20 }) => {
  const matrixChars = ['0', '1', 'X', 'A', 'B', 'X', 'Y', 'Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  
  const generateDrops = () => {
    const drops = [];
    for (let i = 0; i < density; i++) {
      const chars = [];
      const dropLength = Math.floor(Math.random() * 20) + 5;
      
      for (let j = 0; j < dropLength; j++) {
        chars.push(matrixChars[Math.floor(Math.random() * matrixChars.length)]);
      }
      
      drops.push({
        id: i,
        chars,
        left: Math.random() * 100,
        delay: Math.random() * 4,
        duration: Math.random() * 2 + 3
      });
    }
    return drops;
  };

  const drops = generateDrops();

  return (
    <div className={`matrix-rain-container ${className}`}>
      {drops.map((drop) => (
        <div
          key={drop.id}
          className="absolute top-0"
          style={{
            left: `${drop.left}%`,
            animationDelay: `${drop.delay}s`,
            animationDuration: `${drop.duration}s`
          }}
        >
          {drop.chars.map((char, index) => (
            <div
              key={index}
              className="matrix-char"
              style={{
                top: `${index * 20}px`,
                opacity: Math.max(0.1, 1 - (index * 0.1))
              }}
            >
              {char}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

// NEW: Binary Code Stream
export const BinaryStream = ({ className = '', direction = 'horizontal' }) => {
  const generateBinaryString = () => {
    return Array.from({ length: 50 }, () => Math.random() > 0.5 ? '1' : '0').join('');
  };

  const streams = Array.from({ length: 5 }, (_, i) => ({
    id: i,
    binary: generateBinaryString(),
    delay: i * 2,
    top: Math.random() * 100
  }));

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {streams.map((stream) => (
        <div
          key={stream.id}
          className={`absolute ${direction === 'horizontal' ? 'left-0 w-full' : 'top-0 h-full'}`}
          style={{
            [direction === 'horizontal' ? 'top' : 'left']: `${stream.top}%`,
            animationDelay: `${stream.delay}s`
          }}
        >
          <span className="binary-char text-xs text-cyber-cyan/30 font-mono">
            {stream.binary}
          </span>
        </div>
      ))}
    </div>
  );
};

// NEW: Terminal Window Component
export const TerminalWindow = ({ 
  children, 
  title = "DeVinci_Terminal", 
  className = '',
  animated = true 
}) => {
  const [currentTime, setCurrentTime] = React.useState(new Date());

  React.useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`terminal-window ${className}`}>
      <div className="terminal-header">
        <div className="terminal-dot red"></div>
        <div className="terminal-dot yellow"></div>
        <div className="terminal-dot green"></div>
        <span className="text-cyber-cyan text-xs ml-4">{title}</span>
        <span className="text-cyber-white/60 text-xs ml-auto">
          {currentTime.toLocaleTimeString()}
        </span>
      </div>
      <div className="terminal-content">
        <div className="text-cyber-cyan">
          $ <span className="terminal-cursor">DeVinci_Codes_AI_Automation</span>
        </div>
        <div className="text-cyber-white/80 mt-2">
          {children}
        </div>
      </div>
    </div>
  );
};

// NEW: Circuit Board Animation
export const CircuitBoard = ({ className = '', animated = true }) => {
  return (
    <div className={`absolute inset-0 ${className}`}>
      <svg className="w-full h-full" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="circuitPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <g stroke="rgba(0, 255, 255, 0.2)" strokeWidth="1" fill="none">
              <path d="M10 10h20M10 30h20M20 0v40M0 20h40" className={animated ? 'animate-circuit-pulse' : ''} />
              <circle cx="10" cy="10" r="2" fill="rgba(0, 255, 255, 0.4)" />
              <circle cx="30" cy="10" r="2" fill="rgba(0, 255, 255, 0.4)" />
              <circle cx="10" cy="30" r="2" fill="rgba(0, 255, 255, 0.4)" />
              <circle cx="30" cy="30" r="2" fill="rgba(0, 255, 255, 0.4)" />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuitPattern)" opacity="0.3" />
      </svg>
    </div>
  );
};

// NEW: Data Stream Visualization
export const DataStream = ({ className = '', direction = 'right' }) => {
  return (
    <div className={`data-stream ${className}`}>
      <div className="data-packet" style={{
        animationDirection: direction === 'left' ? 'reverse' : 'normal'
      }}></div>
    </div>
  );
};

// NEW: Cyberpunk HUD Element
export const CyberpunkHUD = ({ 
  children, 
  label = "SYSTEM", 
  status = "ONLINE",
  className = '' 
}) => {
  return (
    <div className={`hud-element ${className}`}>
      <div className="flex items-center justify-between mb-1">
        <span className="text-cyber-cyan text-xs font-bold">{label}</span>
        <span className={`text-xs ${status === 'ONLINE' ? 'text-green-400' : 'text-red-400'}`}>
          ● {status}
        </span>
      </div>
      <div className="text-cyber-white text-sm">
        {children}
      </div>
    </div>
  );
};

// NEW: Neural Network Visualization
export const NeuralNetwork = ({ className = '', animated = true }) => {
  const nodes = [
    { id: 1, x: 50, y: 50 },
    { id: 2, x: 150, y: 30 },
    { id: 3, x: 150, y: 70 },
    { id: 4, x: 250, y: 50 },
    { id: 5, x: 350, y: 50 }
  ];

  const connections = [
    { from: 1, to: 2 },
    { from: 1, to: 3 },
    { from: 2, to: 4 },
    { from: 3, to: 4 },
    { from: 4, to: 5 }
  ];

  return (
    <div className={`absolute inset-0 ${className}`}>
      <svg className="w-full h-full" viewBox="0 0 400 100" xmlns="http://www.w3.org/2000/svg">
        {/* Connections */}
        {connections.map((conn, index) => {
          const fromNode = nodes.find(n => n.id === conn.from);
          const toNode = nodes.find(n => n.id === conn.to);
          return (
            <line
              key={index}
              x1={fromNode.x}
              y1={fromNode.y}
              x2={toNode.x}
              y2={toNode.y}
              stroke="rgba(0, 255, 255, 0.4)"
              strokeWidth="1"
              className={animated ? 'animate-circuit-pulse' : ''}
            />
          );
        })}
        
        {/* Nodes */}
        {nodes.map((node) => (
          <circle
            key={node.id}
            cx={node.x}
            cy={node.y}
            r="4"
            fill="rgba(0, 255, 255, 0.8)"
            className={animated ? 'animate-neural-pulse' : ''}
          />
        ))}
      </svg>
    </div>
  );
};

// NEW: Quantum Particle Effect
export const QuantumParticles = ({ className = '', count = 10 }) => {
  const particles = Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 5
  }));

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-1 h-1 bg-cyber-cyan rounded-full animate-quantum-particle"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDelay: `${particle.delay}s`
          }}
        />
      ))}
    </div>
  );
};

// NEW: Code Compilation Bar
export const CodeCompilation = ({ 
  progress = 0, 
  label = "Compiling AI Models...", 
  className = '' 
}) => {
  return (
    <div className={`bg-pure-black border border-cyber-cyan/30 rounded p-3 ${className}`}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-cyber-cyan text-xs font-mono">{label}</span>
        <span className="text-cyber-white text-xs">{progress}%</span>
      </div>
      <div className="w-full bg-glass-black rounded-full h-2 overflow-hidden">
        <div 
          className="h-full bg-cyber-cyan transition-all duration-300 animate-code-compile"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

// Enhanced existing components with new tech features

// Glowing Border Component
export const GlowingBorder = ({ 
  children, 
  className = '', 
  glowColor = 'cyan',
  intensity = 'medium',
  animated = false 
}) => {
  const colors = {
    cyan: 'from-cyan-500/20 to-cyan-600/20 border-cyan-500/30',
    blue: 'from-blue-500/20 to-blue-600/20 border-blue-500/30',
    purple: 'from-purple-500/20 to-purple-600/20 border-purple-500/30',
    pink: 'from-pink-500/20 to-pink-600/20 border-pink-500/30',
    green: 'from-green-500/20 to-green-600/20 border-green-500/30'
  };

  const intensities = {
    light: 'shadow-lg',
    medium: 'shadow-xl',
    strong: 'shadow-2xl'
  };

  return (
    <div className={`relative ${className}`}>
      <div className={`absolute -inset-0.5 bg-gradient-to-r ${colors[glowColor]} rounded-xl opacity-60 blur-sm ${intensities[intensity]} ${animated ? 'animate-pulse' : ''}`} />
      <div className={`relative bg-slate-900/95 backdrop-blur-sm rounded-xl border ${colors[glowColor].split(' ')[2]}`}>
        {children}
      </div>
    </div>
  );
};

// Floating Particles Background
export const FloatingParticles = ({ count = 50, className = '' }) => {
  const particles = Array.from({ length: count }, (_, i) => (
    <motion.div
      key={i}
      className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-30"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
      animate={{
        y: [0, -100, 0],
        opacity: [0.3, 0.8, 0.3],
        scale: [1, 1.2, 1]
      }}
      transition={{
        duration: Math.random() * 3 + 2,
        repeat: Infinity,
        delay: Math.random() * 2
      }}
    />
  ));

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles}
    </div>
  );
};

// Neon Text Component
export const NeonText = ({ 
  children, 
  className = '', 
  color = 'cyan',
  size = 'text-4xl',
  animated = false 
}) => {
  const colors = {
    cyan: 'text-cyan-400 drop-shadow-[0_0_10px_rgba(6,182,212,0.8)]',
    blue: 'text-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]',
    purple: 'text-purple-400 drop-shadow-[0_0_10px_rgba(139,92,246,0.8)]',
    pink: 'text-pink-400 drop-shadow-[0_0_10px_rgba(236,72,153,0.8)]',
    green: 'text-green-400 drop-shadow-[0_0_10px_rgba(34,197,94,0.8)]'
  };

  return (
    <span className={`${size} font-bold ${colors[color]} ${animated ? 'animate-pulse' : ''} ${className}`}>
      {children}
    </span>
  );
};

// Holographic Card Component
export const HolographicCard = ({ 
  children, 
  className = '',
  hoverEffect = true,
  glowIntensity = 'medium' 
}) => {
  const intensity = {
    light: 'hover:shadow-cyan-500/10',
    medium: 'hover:shadow-cyan-500/20',
    strong: 'hover:shadow-cyan-500/30'
  };

  return (
    <motion.div
      className={`relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 
                  backdrop-blur-lg border border-slate-600/30 rounded-xl p-6 
                  shadow-xl ${hoverEffect ? intensity[glowIntensity] : ''} 
                  transition-all duration-300 ${className}`}
      whileHover={hoverEffect ? { 
        scale: 1.02, 
        boxShadow: "0 0 40px rgba(6, 182, 212, 0.3)" 
      } : {}}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent rounded-xl" />
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

// Circuit Pattern Background (Enhanced)
export const CircuitPattern = ({ 
  className = '', 
  animated = false,
  intensity = 'medium' 
}) => {
  const intensityClasses = {
    light: 'opacity-10',
    medium: 'opacity-20',
    strong: 'opacity-30'
  };

  return (
    <div className={`absolute inset-0 ${intensityClasses[intensity]} ${className}`}>
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="circuit-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <g stroke="currentColor" strokeWidth="0.5" fill="none">
              <path d="M30 10h40M30 90h40M10 30v40M90 30v40" />
              <circle cx="30" cy="30" r="3" fill="currentColor" opacity="0.6" />
              <circle cx="70" cy="30" r="3" fill="currentColor" opacity="0.6" />
              <circle cx="30" cy="70" r="3" fill="currentColor" opacity="0.6" />
              <circle cx="70" cy="70" r="3" fill="currentColor" opacity="0.6" />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit-pattern)" className="text-cyan-400" />
      </svg>
    </div>
  );
};

// Energy Orb Component
export const EnergyOrb = ({ 
  size = 'w-4 h-4', 
  color = 'cyan', 
  animated = true,
  className = '' 
}) => {
  const colors = {
    cyan: 'bg-cyan-400 shadow-cyan-400/50',
    blue: 'bg-blue-400 shadow-blue-400/50',
    purple: 'bg-purple-400 shadow-purple-400/50',
    pink: 'bg-pink-400 shadow-pink-400/50',
    green: 'bg-green-400 shadow-green-400/50'
  };

  return (
    <motion.div
      className={`${size} ${colors[color]} rounded-full ${animated ? 'animate-pulse' : ''} 
                  shadow-lg ${className}`}
      animate={animated ? {
        scale: [1, 1.2, 1],
        opacity: [0.7, 1, 0.7]
      } : {}}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );
};

// Status Indicator Component
export const StatusIndicator = ({ 
  status = 'online', 
  label,
  className = '' 
}) => {
  const statusColors = {
    online: 'text-green-400 bg-green-400',
    offline: 'text-red-400 bg-red-400',
    loading: 'text-yellow-400 bg-yellow-400',
    error: 'text-red-500 bg-red-500'
  };

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <div className={`w-2 h-2 rounded-full ${statusColors[status].split(' ')[1]} 
                      ${status === 'loading' ? 'animate-pulse' : ''}`} />
      {label && (
        <span className={`text-xs font-mono ${statusColors[status].split(' ')[0]}`}>
          {label}
        </span>
      )}
    </div>
  );
};

// NEW: Circuit Lines Component
export const CircuitLines = ({ 
  className = '', 
  animated = true,
  direction = 'horizontal',
  color = 'cyan',
  density = 'medium' 
}) => {
  const colors = {
    cyan: 'stroke-cyan-400',
    blue: 'stroke-blue-400',
    purple: 'stroke-purple-400',
    green: 'stroke-green-400',
    white: 'stroke-white'
  };

  const densities = {
    light: 3,
    medium: 5,
    dense: 8
  };

  const lineCount = densities[density];
  const lines = Array.from({ length: lineCount }, (_, i) => i);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
            <stop offset="50%" stopColor="currentColor" stopOpacity="0.8" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {lines.map((line, index) => {
          const position = (100 / (lineCount + 1)) * (index + 1);
          
          if (direction === 'horizontal') {
            return (
              <g key={index}>
                <line
                  x1="0"
                  y1={`${position}%`}
                  x2="100%"
                  y2={`${position}%`}
                  stroke="url(#circuitGradient)"
                  strokeWidth="1"
                  className={`${colors[color]} ${animated ? 'animate-circuit-pulse' : ''}`}
                  style={{ animationDelay: `${index * 0.3}s` }}
                />
                {/* Connection nodes */}
                <circle
                  cx="20%"
                  cy={`${position}%`}
                  r="2"
                  fill="currentColor"
                  className={`${colors[color]} ${animated ? 'animate-pulse' : ''}`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                />
                <circle
                  cx="80%"
                  cy={`${position}%`}
                  r="2"
                  fill="currentColor"
                  className={`${colors[color]} ${animated ? 'animate-pulse' : ''}`}
                  style={{ animationDelay: `${index * 0.4}s` }}
                />
              </g>
            );
          } else {
            return (
              <g key={index}>
                <line
                  x1={`${position}%`}
                  y1="0"
                  x2={`${position}%`}
                  y2="100%"
                  stroke="url(#circuitGradient)"
                  strokeWidth="1"
                  className={`${colors[color]} ${animated ? 'animate-circuit-pulse' : ''}`}
                  style={{ animationDelay: `${index * 0.3}s` }}
                />
                {/* Connection nodes */}
                <circle
                  cx={`${position}%`}
                  cy="20%"
                  r="2"
                  fill="currentColor"
                  className={`${colors[color]} ${animated ? 'animate-pulse' : ''}`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                />
                <circle
                  cx={`${position}%`}
                  cy="80%"
                  r="2"
                  fill="currentColor"
                  className={`${colors[color]} ${animated ? 'animate-pulse' : ''}`}
                  style={{ animationDelay: `${index * 0.4}s` }}
                />
              </g>
            );
          }
        })}
      </svg>
    </div>
  );
};

const FuturisticComponentsExport = {
  FuturisticGrid,
  MatrixRain,
  BinaryStream,
  TerminalWindow,
  CircuitBoard,
  DataStream,
  CyberpunkHUD,
  NeuralNetwork,
  QuantumParticles,
  CodeCompilation,
  GlowingBorder,
  FloatingParticles,
  NeonText,
  HolographicCard,
  CircuitPattern,
  CircuitLines,
  EnergyOrb,
  StatusIndicator
};

export default FuturisticComponentsExport;
