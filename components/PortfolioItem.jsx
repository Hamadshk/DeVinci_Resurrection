import React from "react";
import { Badge } from "flowbite-react";

const PortfolioItem = ({ title, video, description, techUsed }) => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-20 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-xl py-8 mx-4 shadow-2xl">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-white drop-shadow-lg">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 filter drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
          {title}
        </span>
      </h1>
      
      {/* Video Container */}
      <div className="relative w-full mb-8">
        <div className="aspect-video w-full rounded-lg overflow-hidden bg-slate-900/50">
          <iframe
            src={video}
            width="100%"
            height="100%"
            allow="autoplay"
            allowFullScreen
            className="rounded-lg border border-slate-600/30"
            title={title}
          ></iframe>
        </div>
      </div>
      
      {/* Project Information */}
      <div className="project-information">
        <div className="description">
          <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">Description</h2>
          <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-6">
            {description}
          </p>
          
          {/* Tech Stack */}
          <div className="space-y-3 mb-6">
            <h3 className="text-lg font-medium text-cyan-300">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {techUsed.map((tech, ind) => (
                <Badge 
                  key={ind}
                  className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border border-cyan-500/30 text-cyan-300 px-3 py-1 text-sm font-medium hover:from-cyan-600/30 hover:to-blue-600/30 transition-all duration-200"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
          
          {/* Worked with Companies */}
          <div className="space-y-4 mb-8">
            <h3 className="text-lg font-medium text-cyan-300">Worked with these companies</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
              {[
                { name: "Aedilo", logo: "/Company/Aedilo.svg" },
                { name: "BVC", logo: "/Company/BVC-Logo-Baja.png" },
                { name: "Clean Cubico", logo: "/Company/Clean Cubico.avif" },
                { name: "Cutco", logo: "/Company/Cutco.jpg" },
                { name: "Kitspire", logo: "/Company/Kitspire.png" },
                { name: "PxSquared", logo: "/Company/pxsquared_logo.jpg" },
                { name: "Radaro", logo: "/Company/Radaro.webp" },
                { name: "SemLocal", logo: "/Company/SemLocal_GreenOnly_Transparent.png" },
                { name: "TellAVision", logo: "/Company/TellAVision.svg" },
              ].map((company, index) => (
                <div 
                  key={index}
                  className="group relative bg-white/5 backdrop-blur-sm border border-slate-600/30 rounded-lg p-3 hover:bg-white/10 hover:border-slate-500/50 transition-all duration-300 hover:scale-105 transform"
                >
                  <div className="aspect-square flex items-center justify-center">
                    <img
                      src={company.logo}
                      alt={`${company.name} logo`}
                      className="max-w-full max-h-full object-contain transition-all duration-300"
                      style={{ maxHeight: '40px', maxWidth: '60px' }}
                    />
                  </div>
                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-slate-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                    {company.name}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Case Study Button */}
          <div className="flex justify-center sm:justify-start">
            <button className="group relative px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 transform overflow-hidden border border-purple-400/30 hover:border-purple-300/60">
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
              
              {/* Content */}
              <div className="relative flex items-center gap-2 z-10">
                <span className="text-sm sm:text-base font-bold">View Case Study</span>
                <svg 
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12 rounded-full"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
