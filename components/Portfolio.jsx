import React from 'react';
import BeautifulPDFViewer from './BeautifulPDFViewer';
import { FuturisticIcon, ProjectIcons } from './FuturisticIcon';
import { HolographicCard, FuturisticGrid, NeonText } from './FuturisticComponents';

export default function Portfolio({ inView }) {
  return (
    <div className={`portfolio ${inView && "portfolio-in-view"} min-h-screen py-16 relative overflow-hidden bg-pure-black`}>
      {/* Futuristic Grid Background */}
      <div className="absolute inset-0 bg-cyber-grid bg-[length:50px_50px] opacity-20" />
      
      {/* Geometric corner accents */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-cyber-cyan opacity-30" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-cyber-cyan opacity-30" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-cyber-cyan opacity-30" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-cyber-cyan opacity-30" />

      <div className="max-w-screen-xl mx-auto px-4 lg:px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-cyber-white mb-6 font-mono">
            Portfolio Showcase
          </h2>
          
          {/* Geometric divider */}
          <div className="relative mb-8">
            <div className="h-0.5 w-32 mx-auto bg-cyber-cyan" />
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-cyber-cyan rounded-full animate-pulse" />
          </div>
          
          <p className="text-cyber-white text-xl max-w-2xl mx-auto leading-relaxed font-inter">
            Experience our comprehensive portfolio with an enhanced, Chrome-compatible PDF viewer featuring detailed case studies, project highlights, and success stories that showcase our expertise in web development, mobile apps, and digital solutions.
          </p>
          
          {/* Futuristic accent elements */}
          <div className="flex items-center justify-center space-x-8 mt-8">
            <div className="w-12 h-0.5 bg-cyber-cyan" />
            <div className="w-3 h-3 bg-cyber-cyan rounded-full animate-pulse" />
            <div className="w-12 h-0.5 bg-cyber-cyan" />
          </div>
        </div>

        {/* Beautiful PDF Portfolio Viewer */}
        <div className="portfolio-pdf-section mb-12">
          <BeautifulPDFViewer 
            file="/portfolio.pdf" 
            height="800px"
          />
        </div>
        
        {/* Portfolio Information Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Portfolio Features Card */}
          <div className="bg-glass-black backdrop-blur-cyber border border-glass-white rounded-lg p-8 hover:border-cyber-cyan transition-all duration-300">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-cyber-cyan rounded-lg flex items-center justify-center">
                <span className="text-pure-black text-xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-cyber-white font-inter">What's Inside Our Portfolio</h3>
            </div>
            
            <div className="space-y-4">
              <div className="group">
                <h4 className="font-medium text-cyber-cyan mb-3 font-inter">
                  Comprehensive Case Studies
                </h4>
                <ul className="space-y-2 text-cyber-white font-inter">
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-cyber-cyan rounded-full" />
                    <span>Complete project workflows & methodologies</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-cyber-cyan rounded-full" />
                    <span>Technical implementation details & architecture</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-cyber-cyan rounded-full" />
                    <span>Real client testimonials & measurable results</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-cyber-cyan rounded-full" />
                    <span>Before/after comparisons & success metrics</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Project Categories Card */}
          <div className="bg-glass-black backdrop-blur-cyber border border-glass-white rounded-lg p-8 hover:border-cyber-cyan transition-all duration-300">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-cyber-cyan rounded-lg flex items-center justify-center">
                <span className="text-pure-black text-xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold text-cyber-white font-inter">Featured Project Categories</h3>
            </div>
            
            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-3">
                {[
                  { 
                    title: 'Web Development Projects', 
                    desc: 'Full-stack solutions & modern frameworks',
                    icon: '🌐'
                  },
                  { 
                    title: 'Mobile App Development', 
                    desc: 'iOS & Android native & cross-platform',
                    icon: '📱'
                  },
                  { 
                    title: 'UI/UX Design Solutions', 
                    desc: 'User-centered design & prototyping',
                    icon: '🎨'
                  },
                  { 
                    title: 'E-commerce Platforms', 
                    desc: 'Complete online business solutions',
                    icon: '🛒'
                  },
                ].map((category, index) => (
                  <div key={index} className="group p-3 rounded-lg border border-glass-white hover:border-cyber-cyan transition-all duration-200 cursor-pointer">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-cyber-cyan rounded-lg flex items-center justify-center text-pure-black text-sm mt-1">
                        {category.icon}
                      </div>
                      <div>
                        <h5 className="font-medium text-cyber-white font-inter">{category.title}</h5>
                        <p className="text-sm text-cyber-white/80 font-inter">{category.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-glass-black border border-cyber-cyan rounded-lg text-cyber-cyan mb-4">
            <span className="animate-pulse">✨</span>
            <span className="text-sm font-medium font-inter">Your Vision Our Code</span>
            <span className="animate-pulse">✨</span>
          </div>
          <p className="text-cyber-white text-sm font-inter">
            DeVinci Codes
          </p>
        </div>
      </div>
    </div>
  );
}
