import React from 'react';

const Header = () => {
  return (
    <header className="relative py-20 px-4 overflow-hidden w-full bg-transparent">
      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Main Logo/Brand */}
        <div className="mb-8 flex flex-col items-center justify-center">
          <h1 className="special-text-header text-6xl md:text-8xl font-bold mb-4 w-full text-center">
            DeVinci CoDeS
          </h1>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full" />
        </div>

        {/* Tagline */}
        <p className="slogan text-xl md:text-2xl font-medium text-transparent bg-gradient-to-r from-slate-300 via-white to-slate-300 bg-clip-text text-center">
          Your Vision, Our Automation
        </p>

        {/* Subtle accent elements */}
        <div className="flex justify-center items-center mt-8 space-x-4">
          <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse" />
          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse delay-150" />
          <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full animate-pulse delay-300" />
        </div>
      </div>
    </header>
  );
};

export default Header;