import React from "react";
import { Badge } from "flowbite-react";

const PortfolioItem = ({ title, video, description, techUsed }) => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-20 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl py-8 mx-4 shadow-2xl">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
        {title}
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
          <div className="space-y-3">
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
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
