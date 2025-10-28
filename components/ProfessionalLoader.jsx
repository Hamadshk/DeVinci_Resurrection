import React, { useState, useEffect } from 'react';

const ProfessionalLoader = () => {
  const [loadingText, setLoadingText] = useState('Loading');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Animated loading text
    const textInterval = setInterval(() => {
      setLoadingText(prev => {
        if (prev === 'Loading...') return 'Loading';
        return prev + '.';
      });
    }, 400);

    // Progress bar animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) return 100;
        return prev + Math.random() * 15;
      });
    }, 200);

    return () => {
      clearInterval(textInterval);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <div className="loader-container">
      {/* Logo or Brand Name */}
      <div className="mb-8 animate-fade-in">
        <h1 className="text-4xl font-bold text-gradient">DeVinci Codes</h1>
      </div>

      {/* Spinner */}
      <div className="loader"></div>

      {/* Loading Text */}
      <div className="loader-text">{loadingText}</div>

      {/* Progress Bar */}
      <div className="mt-8 w-64">
        <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-300 ease-out"
            style={{ width: `${Math.min(progress, 100)}%` }}
          ></div>
        </div>
      </div>

      {/* Tagline */}
      <p className="mt-6 text-sm text-gray-600 animate-fade-in" style={{ animationDelay: '0.5s', opacity: 0, animation: 'fadeIn 0.5s ease-out 0.5s forwards' }}>
        AI & Automation Solutions
      </p>
    </div>
  );
};

export default ProfessionalLoader;
