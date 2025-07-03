import React from 'react';

const SimplePDFViewer = ({ file, height = "700px" }) => {
  return (
    <div className="simple-pdf-viewer bg-gray-50 border border-gray-200 rounded-lg overflow-hidden">
      {/* PDF Controls Header */}
      <div className="pdf-controls bg-white px-4 py-3 border-b border-gray-200 flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-3">
          <h3 className="text-lg font-medium text-gray-700">Portfolio & Case Studies</h3>
          <span className="text-sm text-gray-500">Interactive PDF Viewer</span>
        </div>
        
        <div className="flex items-center gap-3">
          <a 
            href={file} 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm font-medium"
          >
            Open Full Screen
          </a>
          <a 
            href={file} 
            download="DeVinci_Codes_Portfolio.pdf"
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 text-sm font-medium"
          >
            Download PDF
          </a>
        </div>
      </div>

      {/* PDF Embed using object tag - more compatible */}
      <div className="pdf-container bg-white" style={{ height }}>
        <object
          data={file}
          type="application/pdf"
          width="100%"
          height="100%"
          className="border-0"
        >
          {/* Fallback content if PDF cannot be embedded */}
          <div className="flex flex-col items-center justify-center h-full p-8 text-center">
            <div className="mb-6">
              <svg className="w-20 h-20 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Portfolio PDF</h3>
              <p className="text-gray-600 mb-6">Your browser doesn't support embedded PDFs, but you can view it using the buttons below.</p>
            </div>
            
            <div className="space-y-3">
              <a 
                href={file} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                📄 View PDF in New Tab
              </a>
              <a 
                href={file} 
                download="DeVinci_Codes_Portfolio.pdf"
                className="block px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
              >
                💾 Download Portfolio PDF
              </a>
            </div>
            
            <div className="mt-6 text-sm text-gray-500">
              <p>File Size: ~54MB</p>
              <p>Contains: Case studies, project highlights, and portfolio samples</p>
            </div>
          </div>
        </object>
      </div>

      {/* Footer with helpful info */}
      <div className="pdf-footer bg-gray-50 px-4 py-3 border-t border-gray-200">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <span>📁 DeVinci Codes Portfolio Collection</span>
          <span>📏 File Size: 54MB</span>
        </div>
        <div className="mt-1 text-xs text-gray-500">
          Use the controls above if the PDF doesn't display properly in your browser
        </div>
      </div>
    </div>
  );
};

export default SimplePDFViewer; 