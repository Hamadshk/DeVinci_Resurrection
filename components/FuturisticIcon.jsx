import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faRocket, 
  faGlobe, 
  faMobile, 
  faPalette, 
  faShoppingCart,
  faCode,
  faRobot,
  faBolt,
  faChart,
  faUsers,
  faCogs,
  faLightbulb,
  faShield,
  faCloud,
  faDatabase,
  faSearch,
  faBrain,
  faWifi,
  faDesktop,
  faAtom
} from '@fortawesome/free-solid-svg-icons';

// Futuristic Icon Component with consistent styling
export const FuturisticIcon = ({ 
  icon, 
  size = 'lg', 
  className = '', 
  glowColor = 'cyan',
  animated = false,
  variant = 'default' // default, contained, gradient
}) => {
  const glowColors = {
    cyan: 'text-cyan-400 drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]',
    blue: 'text-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]',
    purple: 'text-purple-400 drop-shadow-[0_0_10px_rgba(139,92,246,0.5)]',
    green: 'text-green-400 drop-shadow-[0_0_10px_rgba(34,197,94,0.5)]',
    pink: 'text-pink-400 drop-shadow-[0_0_10px_rgba(236,72,153,0.5)]',
    orange: 'text-orange-400 drop-shadow-[0_0_10px_rgba(251,146,60,0.5)]',
    red: 'text-red-400 drop-shadow-[0_0_10px_rgba(239,68,68,0.5)]',
  };

  const variants = {
    default: `${glowColors[glowColor]} ${animated ? 'animate-pulse' : ''}`,
    contained: `text-white bg-gradient-to-br from-${glowColor}-500 to-${glowColor}-600 p-3 rounded-xl shadow-lg`,
    gradient: `text-transparent bg-clip-text bg-gradient-to-r from-${glowColor}-400 to-${glowColor}-600`
  };

  return (
    <FontAwesomeIcon 
      icon={icon} 
      className={`${variants[variant]} ${className} transition-all duration-300 hover:scale-110`}
      size={size}
    />
  );
};

// Predefined futuristic icons for consistent use across the site
export const FuturisticIcons = {
  rocket: faRocket,
  globe: faGlobe,
  mobile: faMobile,
  palette: faPalette,
  shopping: faShoppingCart,
  code: faCode,
  robot: faRobot,
  bolt: faBolt,
  chart: faChart,
  users: faUsers,
  cogs: faCogs,
  lightbulb: faLightbulb,
  shield: faShield,
  cloud: faCloud,
  database: faDatabase,
  search: faSearch,
  brain: faBrain,
  wifi: faWifi,
  desktop: faDesktop,
  atom: faAtom
};

// Icon categories for project types
export const ProjectIcons = {
  web: { icon: faGlobe, color: 'cyan', label: 'Web Development' },
  mobile: { icon: faMobile, color: 'blue', label: 'Mobile Apps' },
  ai: { icon: faRobot, color: 'purple', label: 'AI Solutions' },
  design: { icon: faPalette, color: 'pink', label: 'UI/UX Design' },
  ecommerce: { icon: faShoppingCart, color: 'green', label: 'E-commerce' },
  automation: { icon: faBolt, color: 'orange', label: 'Automation' }
};

// Animation variants for icons
export const IconAnimations = {
  pulse: 'animate-pulse',
  bounce: 'animate-bounce',
  spin: 'animate-spin',
  ping: 'animate-ping',
  float: 'animate-[float_3s_ease-in-out_infinite]',
  glow: 'animate-[glow_2s_ease-in-out_infinite_alternate]'
};

export default FuturisticIcon;
