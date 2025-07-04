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
      className={`relative bg-gradient-to-br from-slate-900/50 via-slate-800/50 to-slate-900/50 
                  backdrop-blur-xl border border-slate-700/50 rounded-xl overflow-hidden
                  ${hoverEffect ? `hover:border-cyan-500/50 transition-all duration-300 ${intensity[glowIntensity]}` : ''}
                  ${className}`}
      whileHover={hoverEffect ? { scale: 1.02, y: -5 } : {}}
      transition={{ duration: 0.3 }}
    >
      {/* Holographic shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent 
                      translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-1000" />
      {children}
    </motion.div>
  );
};

// Circuit Lines Component
export const CircuitLines = ({ className = '', animated = true }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="circuit-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(6,182,212,0)" />
            <stop offset="50%" stopColor="rgba(6,182,212,0.5)" />
            <stop offset="100%" stopColor="rgba(6,182,212,0)" />
          </linearGradient>
        </defs>
        
        {/* Horizontal lines */}
        <motion.line
          x1="0" y1="20" x2="100" y2="20"
          stroke="url(#circuit-gradient)"
          strokeWidth="0.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: animated ? 1 : 0 }}
          transition={{ duration: 2, repeat: animated ? Infinity : 0, repeatType: "loop" }}
        />
        <motion.line
          x1="0" y1="40" x2="100" y2="40"
          stroke="url(#circuit-gradient)"
          strokeWidth="0.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: animated ? 1 : 0 }}
          transition={{ duration: 2.5, repeat: animated ? Infinity : 0, repeatType: "loop", delay: 0.5 }}
        />
        <motion.line
          x1="0" y1="60" x2="100" y2="60"
          stroke="url(#circuit-gradient)"
          strokeWidth="0.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: animated ? 1 : 0 }}
          transition={{ duration: 3, repeat: animated ? Infinity : 0, repeatType: "loop", delay: 1 }}
        />
        
        {/* Vertical lines */}
        <motion.line
          x1="30" y1="0" x2="30" y2="100"
          stroke="url(#circuit-gradient)"
          strokeWidth="0.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: animated ? 1 : 0 }}
          transition={{ duration: 2.2, repeat: animated ? Infinity : 0, repeatType: "loop", delay: 0.3 }}
        />
        <motion.line
          x1="70" y1="0" x2="70" y2="100"
          stroke="url(#circuit-gradient)"
          strokeWidth="0.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: animated ? 1 : 0 }}
          transition={{ duration: 2.8, repeat: animated ? Infinity : 0, repeatType: "loop", delay: 0.8 }}
        />
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
  const statusConfig = {
    online: { color: 'bg-green-400', glow: 'shadow-green-400/50', text: 'Online' },
    loading: { color: 'bg-yellow-400', glow: 'shadow-yellow-400/50', text: 'Loading' },
    error: { color: 'bg-red-400', glow: 'shadow-red-400/50', text: 'Error' },
    offline: { color: 'bg-gray-400', glow: 'shadow-gray-400/50', text: 'Offline' }
  };

  const config = statusConfig[status];

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <div className={`w-2 h-2 ${config.color} rounded-full shadow-lg ${config.glow} animate-pulse`} />
      <span className="text-xs text-slate-400">{label || config.text}</span>
    </div>
  );
};

const FuturisticComponentsExport = {
  FuturisticGrid,
  GlowingBorder,
  FloatingParticles,
  NeonText,
  HolographicCard,
  CircuitLines,
  EnergyOrb,
  StatusIndicator
};

export default FuturisticComponentsExport;
