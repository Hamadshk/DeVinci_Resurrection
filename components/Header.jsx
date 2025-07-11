import React from 'react';
import { MatrixRain, BinaryStream, CircuitBoard, QuantumParticles, DataStream } from './FuturisticComponents';

const Header = () => {
  return (
    <header className="relative py-20 px-4 overflow-hidden w-full bg-pure-black">
      {/* Enhanced futuristic grid background with circuit pattern */}
      <div className="absolute inset-0 bg-cyber-grid bg-[length:50px_50px] opacity-30" />
      <div className="absolute inset-0 bg-circuit-pattern opacity-10" />
      
      {/* NEW: Matrix Digital Rain Effect */}
      <MatrixRain density={15} className="opacity-20" />
      
      {/* NEW: Binary Code Streams */}
      <BinaryStream direction="horizontal" className="opacity-30" />
      
      {/* NEW: Circuit Board Animation */}
      <CircuitBoard animated={true} className="opacity-15" />
      
      {/* NEW: Quantum Particles */}
      <QuantumParticles count={8} className="opacity-40" />
      
      {/* Enhanced animated scanlines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-cyber-cyan opacity-50 animate-pulse" />
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyber-cyan opacity-50 animate-pulse" />
        
        {/* NEW: Data streams across the header */}
        <div className="absolute top-1/4 left-0 right-0">
          <DataStream direction="right" className="opacity-60" />
        </div>
        <div className="absolute top-3/4 left-0 right-0">
          <DataStream direction="left" className="opacity-40" />
        </div>
      </div>

      {/* NEW: Cyberpunk corner HUD elements */}
      <div className="absolute top-4 left-4 hud-element">
        <div className="text-xs">SYS_STATUS</div>
        <div className="text-green-400 text-xs">● ONLINE</div>
      </div>
      
      <div className="absolute top-4 right-4 hud-element">
        <div className="text-xs">AI_AGENTS</div>
        <div className="text-cyber-cyan text-xs">24/7 ACTIVE</div>
      </div>

      <div className="max-w-screen-2xl mx-auto text-center relative z-10">
        {/* Main Logo/Brand with enhanced effects */}
        <div className="mb-8 flex flex-col items-center justify-center">
          <h1 className="special-text-header text-6xl md:text-8xl font-bold mb-4 w-full text-center text-cyber-white font-mono animate-holo-flicker">
            DeVinci CoDeS
          </h1>
          
          {/* Enhanced geometric accent with tech elements */}
          <div className="relative">
            <div className="h-0.5 w-32 mx-auto bg-cyber-cyan animate-code-compile" />
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-cyber-cyan rounded-full animate-pulse" />
            
            {/* NEW: Binary code accents */}
            <div className="absolute -top-6 left-0 text-cyber-cyan/40 text-xs font-mono">10110101</div>
            <div className="absolute -top-6 right-0 text-cyber-white/30 text-xs font-mono">01001010</div>
          </div>
        </div>

        {/* Enhanced tagline with terminal style */}
        <div className="relative">
          <p className="slogan text-xl md:text-2xl font-medium text-cyber-white text-center font-inter mb-4">
            Your Vision, Our Automation
          </p>
          
          {/* NEW: Terminal-style command below tagline */}
          <div className="terminal-content text-center mt-4">
            <span className="text-cyber-cyan text-sm font-mono">
              $ ./deploy_ai_automation --mode=enterprise --target=worldwide
            </span>
            <span className="terminal-cursor text-cyber-cyan">█</span>
          </div>
        </div>

        {/* Enhanced futuristic accent elements with tech theme */}
        <div className="flex justify-center items-center mt-8 space-x-8">
          <div className="w-1 h-8 bg-cyber-cyan opacity-60 animate-pulse" />
          <div className="w-1 h-4 bg-cyber-white opacity-40 animate-pulse delay-300" />
          <div className="w-1 h-6 bg-cyber-cyan opacity-80 animate-pulse delay-500" />
          
          {/* NEW: Tech status indicators */}
          <div className="flex flex-col items-center space-y-1">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-xs text-cyber-white/60 font-mono">AI</span>
          </div>
          
          <div className="flex flex-col items-center space-y-1">
            <div className="w-2 h-2 bg-cyber-cyan rounded-full animate-pulse delay-300" />
            <span className="text-xs text-cyber-white/60 font-mono">ML</span>
          </div>
          
          <div className="flex flex-col items-center space-y-1">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-600" />
            <span className="text-xs text-cyber-white/60 font-mono">NLP</span>
          </div>
        </div>
        
        {/* Enhanced geometric corner accents with circuit patterns */}
        <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-cyber-cyan opacity-50 animate-circuit-pulse" />
        <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-cyber-cyan opacity-50 animate-circuit-pulse" />
        <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-cyber-cyan opacity-50 animate-circuit-pulse" />
        <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-cyber-cyan opacity-50 animate-circuit-pulse" />
        
        {/* NEW: Additional tech corner elements */}
        <div className="absolute top-12 left-12 w-4 h-4">
          <div className="w-full h-0.5 bg-cyber-white opacity-30" />
          <div className="w-0.5 h-full bg-cyber-white opacity-30" />
        </div>
        <div className="absolute top-12 right-12 w-4 h-4">
          <div className="w-full h-0.5 bg-cyber-white opacity-30" />
          <div className="w-0.5 h-full bg-cyber-white opacity-30 ml-auto" />
        </div>
      </div>
    </header>
  );
};

export default Header;