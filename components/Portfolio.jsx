import React from 'react';
import SimplePDFViewer from './SimplePDFViewer';

export default function Portfolio({ inView }) {
  return (
    <div className={`portfolio ${inView && "portfolio-in-view"}  `}>
      <div className="max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-blue-900 ">
          Highlights of our work |
        </h2>
        <p className="text-gray-500 sm:text-xl dark:text-gray-400">
          Explore our comprehensive portfolio and case studies of past projects
        </p>
      </div>
      <div className="py-8 px-4 lg:py-12 lg:px-6">
        {/* Simple PDF Portfolio Viewer - Compatible with all browsers */}
        <div className="portfolio-pdf-section">
          <SimplePDFViewer 
            file="/portfolio.pdf" 
            height="700px"
          />
        </div>
        
        {/* Additional Portfolio Info */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">
            📋 What's Inside Our Portfolio
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-blue-800">
            <div>
              <h4 className="font-medium mb-2">🎯 Case Studies Include:</h4>
              <ul className="space-y-1 text-blue-700">
                <li>• Complete project workflows</li>
                <li>• Technical implementation details</li>
                <li>• Client testimonials & results</li>
                <li>• Before/after comparisons</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">🚀 Project Categories:</h4>
              <ul className="space-y-1 text-blue-700">
                <li>• Web Development Projects</li>
                <li>• Mobile App Development</li>
                <li>• UI/UX Design Solutions</li>
                <li>• E-commerce Platforms</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
