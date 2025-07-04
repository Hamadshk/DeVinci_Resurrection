import React from 'react';
import BeautifulPDFViewer from './BeautifulPDFViewer';

export default function Portfolio({ inView }) {
  return (
    <div className={`portfolio ${inView && "portfolio-in-view"} bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 min-h-screen py-16`}>
      <div className="max-w-screen-xl mx-auto px-4 lg:px-6">
        <div className="text-center mb-12">
          <h2 className="mb-6 text-5xl tracking-tight font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Portfolio Showcase
          </h2>
          <p className="text-slate-300 text-xl max-w-2xl mx-auto leading-relaxed">
            Experience our comprehensive portfolio with an enhanced, Chrome-compatible PDF viewer featuring detailed case studies, project highlights, and success stories that showcase our expertise in web development, mobile apps, and digital solutions.
          </p>
          
          {/* Decorative Elements */}
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
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 shadow-2xl">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-lg">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-white">What's Inside Our Portfolio</h3>
            </div>
            
            <div className="space-y-4">
              <div className="group">
                <h4 className="font-medium text-cyan-400 mb-3 group-hover:text-cyan-300 transition-colors">📋 Comprehensive Case Studies</h4>
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
          </div>

          {/* Project Categories Card */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 shadow-2xl">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-lg">🚀</span>
              </div>
              <h3 className="text-xl font-semibold text-white">Featured Project Categories</h3>
            </div>
            
            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-3">
                {[
                  { icon: '🌐', title: 'Web Development Projects', desc: 'Full-stack solutions & modern frameworks' },
                  { icon: '📱', title: 'Mobile App Development', desc: 'iOS & Android native & cross-platform' },
                  { icon: '🎨', title: 'UI/UX Design Solutions', desc: 'User-centered design & prototyping' },
                  { icon: '🛒', title: 'E-commerce Platforms', desc: 'Complete online business solutions' },
                ].map((category, index) => (
                  <div key={index} className="group p-3 rounded-lg hover:bg-slate-700/30 transition-all duration-200 cursor-pointer">
                    <div className="flex items-start space-x-3">
                      <span className="text-lg group-hover:scale-110 transition-transform">{category.icon}</span>
                      <div>
                        <h5 className="font-medium text-slate-200 group-hover:text-white transition-colors">{category.title}</h5>
                        <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">{category.desc}</p>
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
