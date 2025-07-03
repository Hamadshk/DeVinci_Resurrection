import React, { useState, useEffect } from 'react';

const PDFViewerEmbedded = ({ file, height = "700px" }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [pdfUrl, setPdfUrl] = useState('');

  useEffect(() => {
    // Create the PDF URL with PDF.js viewer
    const baseUrl = window.location.origin;
    const pdfJsUrl = `${baseUrl}/_next/static/pdf/web/viewer.html?file=${encodeURIComponent(`${baseUrl}${file}`)}`;
    
    // Fallback to direct embed
    const directUrl = `${baseUrl}${file}#toolbar=1&navpanes=1&scrollbar=1&view=FitH`;
    
    setPdfUrl(directUrl);
  }, [file]);

  const handleIframeLoad = () => {
    setLoading(false);
    setError(false);
  };

  const handleIframeError = () => {
    setLoading(false);
    setError(true);
  };

  return (
    <div className="pdf-viewer-embedded bg-gray-50 border border-gray-200 rounded-lg overflow-hidden">
      {/* PDF Controls Header */}
      <div className="pdf-controls bg-white px-4 py-3 border-b border-gray-200 flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-3">
          <h3 className="text-lg font-medium text-gray-700">Portfolio PDF</h3>
          <span className="text-sm text-gray-500">Interactive PDF Viewer</span>
        </div>
        
        <div className="flex items-center gap-3">
          <a 
            href={file} 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
          >
            Open in New Tab
          </a>
          <a 
            href={file} 
            download="DeVinci_Codes_Portfolio.pdf"
            className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 text-sm"
          >
            Download PDF
          </a>
        </div>
      </div>

      {/* Loading Indicator */}
      {loading && (
        <div className="absolute inset-0 bg-white bg-opacity-90 flex flex-col items-center justify-center z-10">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
          <div className="text-gray-600">Loading PDF viewer...</div>
          <div className="text-gray-500 text-sm mt-2">Large file - please wait</div>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="flex flex-col items-center justify-center p-8 text-center" style={{ height }}>
          <div className="text-red-600 mb-4">
            <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-lg font-semibold mb-2">PDF Viewer Error</h3>
            <p className="text-sm text-gray-600 mb-4">The embedded PDF viewer couldn't load the file.</p>
          </div>
          
          <div className="space-y-3">
            <a 
              href={file} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              View PDF in New Tab
            </a>
            <a 
              href={file} 
              download="DeVinci_Codes_Portfolio.pdf"
              className="block px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              Download PDF
            </a>
          </div>
        </div>
      )}

      {/* PDF Embedded Viewer */}
      {!error && (
        <div className="pdf-embed-container relative" style={{ height }}>
          <iframe
            src={pdfUrl}
            width="100%"
            height="100%"
            style={{ border: 'none' }}
            title="Portfolio PDF"
            onLoad={handleIframeLoad}
            onError={handleIframeError}
            allow="fullscreen"
            sandbox="allow-same-origin allow-scripts allow-forms"
          />
        </div>
      )}

      {/* Footer with file info */}
      <div className="pdf-footer bg-white px-4 py-2 border-t border-gray-200 text-center">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <span>DeVinci Codes Portfolio</span>
          <span>File Size: ~54MB</span>
        </div>
      </div>
    </div>
  );
};

export default PDFViewerEmbedded; 