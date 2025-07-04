import React from 'react';
import BeautifulPDFViewer from './BeautifulPDFViewer';
import { FuturisticIcon, ProjectIcons } from './FuturisticIcon';
import { HolographicCard, FuturisticGrid, NeonText } from './FuturisticComponents';

export default function Portfolio({ inView }) {
  return (
    <div className={`portfolio ${inView && "portfolio-in-view"} min-h-screen py-16 relative overflow-hidden`}>
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 -top-48 -right-48 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute w-96 h-96 -bottom-48 -left-48 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        
        {/* Enhanced Grid Pattern */}
        <FuturisticGrid intensity="medium" />
      </div>

      <div className="max-w-screen-xl mx-auto px-4 lg:px-6 relative z-10">
        <div className="text-center mb-12">
          <NeonText size="text-5xl" color="cyan" animated className="mb-6">
            Portfolio Showcase
          </NeonText>
          <p className="text-slate-300 text-xl max-w-2xl mx-auto leading-relaxed">
            Experience our comprehensive portfolio with an enhanced, Chrome-compatible PDF viewer featuring detailed case studies, project highlights, and success stories that showcase our expertise in web development, mobile apps, and digital solutions.
          </p>
          
          {/* Enhanced Decorative Elements */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-cyan-500"></div>
            <div className="w-3 h-3 bg-cyan-500 rounded-full animate-pulse"></div>
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-cyan-500"></div>
          </div>
        </div>

        {/* Beautiful PDF Portfolio Viewer - Chrome Compatible */}
        <div className="portfolio-pdf-section mb-12">
          <BeautifulPDFViewer 
            file="/portfolio.pdf" 
            height="800px"
          />
        </div>
        
        {/* Enhanced Portfolio Information Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Portfolio Features Card */}
          <HolographicCard className="p-8">
            <div className="flex items-center space-x-3 mb-6">
              <FuturisticIcon 
                icon={ProjectIcons.web.icon} 
                variant="contained" 
                glowColor="cyan" 
                size="lg"
              />
              <h3 className="text-xl font-semibold text-white">What's Inside Our Portfolio</h3>
            </div>
            
            <div className="space-y-4">
              <div className="group">
                <h4 className="font-medium text-cyan-400 mb-3 group-hover:text-cyan-300 transition-colors flex items-center">
                  <FuturisticIcon icon={ProjectIcons.web.icon} glowColor="cyan" className="mr-2" />
                  Comprehensive Case Studies
                </h4>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-center space-x-2 hover:text-white transition-colors">
                    <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div>
                    <span>Complete project workflows & methodologies</span>
                  </li>
                  <li className="flex items-center space-x-2 hover:text-white transition-colors">
                    <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div>
                    <span>Technical implementation details & architecture</span>
                  </li>
                  <li className="flex items-center space-x-2 hover:text-white transition-colors">
                    <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div>
                    <span>Real client testimonials & measurable results</span>
                  </li>
                  <li className="flex items-center space-x-2 hover:text-white transition-colors">
                    <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div>
                    <span>Before/after comparisons & success metrics</span>
                  </li>
                </ul>
              </div>
            </div>
          </HolographicCard>

          {/* Project Categories Card */}
          <HolographicCard className="p-8">
            <div className="flex items-center space-x-3 mb-6">
              <FuturisticIcon 
                icon={ProjectIcons.ai.icon} 
                variant="contained" 
                glowColor="purple" 
                size="lg"
              />
              <h3 className="text-xl font-semibold text-white">Featured Project Categories</h3>
            </div>
            
            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-3">
                {[
                  { 
                    iconConfig: ProjectIcons.web, 
                    title: 'Web Development Projects', 
                    desc: 'Full-stack solutions & modern frameworks' 
                  },
                  { 
                    iconConfig: ProjectIcons.mobile, 
                    title: 'Mobile App Development', 
                    desc: 'iOS & Android native & cross-platform' 
                  },
                  { 
                    iconConfig: ProjectIcons.design, 
                    title: 'UI/UX Design Solutions', 
                    desc: 'User-centered design & prototyping' 
                  },
                  { 
                    iconConfig: ProjectIcons.ecommerce, 
                    title: 'E-commerce Platforms', 
                    desc: 'Complete online business solutions' 
                  },
                ].map((category, index) => (
                  <div key={index} className="group p-3 rounded-lg hover:bg-slate-700/30 transition-all duration-200 cursor-pointer">
                    <div className="flex items-start space-x-3">
                      <FuturisticIcon 
                        icon={category.iconConfig.icon} 
                        glowColor={category.iconConfig.color}
                        animated
                        className="group-hover:scale-110 transition-transform mt-1"
                      />
                      <div>
                        <h5 className="font-medium text-slate-200 group-hover:text-white transition-colors">{category.title}</h5>
                        <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">{category.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </HolographicCard>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border border-cyan-500/30 rounded-full text-cyan-300 mb-4">
            <span className="animate-pulse">✨</span>
            <span className="text-sm font-medium">Enhanced PDF viewer with Chrome optimization & fullscreen support</span>
            <span className="animate-pulse">✨</span>
          </div>
          <p className="text-slate-400 text-sm">
            Scroll through the interactive PDF above or use the "View Full Screen" button for the best experience
          </p>
        </div>
      </div>
    </div>
  );
}
