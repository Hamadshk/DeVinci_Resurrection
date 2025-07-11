'use client';

import React from 'react';
import Image from 'next/image';

const CompaniesCarousel = () => {
  // Company logos data - Real client companies we've worked with
  const companies = [
    {
      name: "BVC",
      logo: "/Company/BVC-Logo-Baja.png",
      width: 120,
      height: 40
    },
    {
      name: "Clean Cubico",
      logo: "/Company/Clean Cubico.avif",
      width: 120,
      height: 40
    },
    {
      name: "Cutco",
      logo: "/Company/Cutco.jpg",
      width: 120,
      height: 40
    },
    {
      name: "Kitspire",
      logo: "/Company/Kitspire.png",
      width: 120,
      height: 40
    },
    {
      name: "PxSquared",
      logo: "/Company/pxsquared_logo.jpg",
      width: 120,
      height: 40
    },
    {
      name: "Radaro",
      logo: "/Company/Radaro.webp",
      width: 120,
      height: 40
    },
    {
      name: "SemLocal",
      logo: "/Company/SemLocal_GreenOnly_Transparent.png",
      width: 120,
      height: 40
    },
    {
      name: "TellAVision",
      logo: "/Company/TellAVision.svg",
      width: 120,
      height: 40
    }
  ];

  // Duplicate the array to create seamless loop
  const duplicatedCompanies = [...companies, ...companies];

  return (
    <section className="py-16 px-4 overflow-hidden bg-pure-black relative">
      {/* Futuristic Grid Background */}
      <div className="absolute inset-0 bg-cyber-grid bg-[length:50px_50px] opacity-20" />
      
      <div className="max-w-screen-xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-cyber-white font-mono">
            Trusted by Industry Leaders
          </h2>
          <p className="text-cyber-white text-xl max-w-3xl mx-auto leading-relaxed font-inter">
            We've had the privilege of working with innovative companies and startups, 
            helping them transform their digital presence and achieve their goals.
          </p>
          
          {/* Futuristic accent elements */}
          <div className="flex items-center justify-center space-x-8 mt-8">
            <div className="w-12 h-0.5 bg-cyber-cyan" />
            <div className="w-3 h-3 bg-cyber-cyan rounded-full animate-pulse" />
            <div className="w-12 h-0.5 bg-cyber-cyan" />
          </div>
        </div>

        {/* Auto-Scrolling Carousel */}
        <div className="relative">
          {/* Clean edge overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-pure-black via-pure-black/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-pure-black via-pure-black/80 to-transparent z-10 pointer-events-none" />
          
          {/* Scrolling Container */}
          <div className="overflow-hidden">
            <div className="flex animate-scroll-left space-x-12 md:space-x-16">
              {duplicatedCompanies.map((company, index) => (
                <div 
                  key={`${company.name}-${index}`}
                  className="group flex-shrink-0 flex items-center justify-center h-20 px-8 bg-glass-black backdrop-blur-cyber border border-glass-white rounded-lg hover:border-cyber-cyan transition-all duration-300 hover:scale-105"
                  style={{ minWidth: '200px' }}
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={company.logo}
                      alt={`${company.name} logo`}
                      width={company.width}
                      height={company.height}
                      className="object-contain opacity-100 transition-opacity duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-cyber-white/80 text-sm font-inter">
            <span className="inline-flex items-center space-x-2">
              <div className="w-2 h-2 bg-cyber-cyan rounded-full animate-pulse" />
              <span>Currently working with 20+ clients worldwide</span>
            </span>
          </p>
        </div>
      </div>

      {/* Custom CSS for auto-scroll animation */}
      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll-left {
          animation: scroll-left 50s linear infinite !important;
          animation-duration: 50s !important;
        }
        
        .animate-scroll-left:hover {
          animation-play-state: paused !important;
        }
      `}</style>
    </section>
  );
};

export default CompaniesCarousel;
