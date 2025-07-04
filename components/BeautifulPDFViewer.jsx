import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFileAlt,
  faSpinner
} from '@fortawesome/free-solid-svg-icons';

const BeautifulPDFViewer = ({ file, height = "700px" }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isChrome, setIsChrome] = useState(false);
  const [useEmbedFallback, setUseEmbedFallback] = useState(false);

  // Detect Chrome browser for better compatibility
  useEffect(() => {
    const detectBrowser = () => {
      const isChromeBrowser = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
      setIsChrome(isChromeBrowser);
      
      // For Chrome, we might need to use embed fallback for large PDFs
      if (isChromeBrowser) {
        setUseEmbedFallback(true);
      }
    };
    
    detectBrowser();
  }, []);

  useEffect(() => {
    // Set loading to false after a short delay
    const loadTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => {
      clearTimeout(loadTimeout);
    };
  }, []);

  // Validate file prop
  if (!file || typeof file !== 'string') {
    console.error('BeautifulPDFViewer: file prop must be a valid string URL');
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
        <p>Error: Invalid PDF file path provided</p>
      </div>
    );
  }

  const handleIframeLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleIframeError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <div className="pdf-viewer-bezeless relative w-full h-full bg-white rounded-lg overflow-hidden shadow-lg">
      {/* Custom styles for scrollbar control */}
      <style jsx>{`
        .pdf-content {
          overflow-x: hidden !important;
          overflow-y: auto;
        }
        
        .pdf-content::-webkit-scrollbar {
          width: 2px;
        }
        
        .pdf-content::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 2px;
        }
        
        .pdf-content::-webkit-scrollbar-thumb {
          background: #c1c1c1;
          border-radius: 2px;
        }
        
        .pdf-content::-webkit-scrollbar-thumb:hover {
          background: #a8a8a8;
        }
        
        /* Firefox scrollbar styling */
        .pdf-content {
          scrollbar-width: thin;
          scrollbar-color: #c1c1c1 #f1f1f1;
        }
        
        /* Ensure PDF elements don't create horizontal scroll */
        .pdf-content iframe,
        .pdf-content object,
        .pdf-content embed {
          overflow-x: hidden !important;
          max-width: 100% !important;
        }
      `}</style>
      
      {/* PDF Content Area */}
      <div 
        className="pdf-content relative w-full h-full"
        style={{ height: height, overflowX: 'hidden', overflowY: 'auto' }}
      >
        {/* Loading State */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white">
            <div className="text-center">
              <FontAwesomeIcon icon={faSpinner} className="text-gray-400 text-2xl animate-spin mb-2" />
              <p className="text-gray-600 text-sm">Loading PDF...</p>
            </div>
          </div>
        )}

        {/* Error State */}
        {hasError && !isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white">
            <div className="text-center">
              <FontAwesomeIcon icon={faFileAlt} className="text-gray-400 text-2xl mb-2" />
              <p className="text-gray-600 text-sm">Unable to load PDF</p>
            </div>
          </div>
        )}

        {/* PDF Viewer */}
        {!isLoading && !hasError && (
          <div className="w-full h-full" style={{ overflowX: 'hidden' }}>
            {isChrome && useEmbedFallback ? (
              <embed
                src={`${file}#toolbar=0&navpanes=0&scrollbar=0&zoom=page-fit`}
                type="application/pdf"
                width="100%"
                height="100%"
                className="border-0"
                style={{ maxWidth: '100%', overflowX: 'hidden' }}
                onLoad={handleIframeLoad}
                onError={() => {
                  setUseEmbedFallback(false);
                }}
              />
            ) : (
              <object
                data={`${file}#toolbar=0&navpanes=0&scrollbar=0&zoom=page-fit`}
                type="application/pdf"
                width="100%"
                height="100%"
                className="border-0"
                style={{ maxWidth: '100%', overflowX: 'hidden' }}
              >
                <iframe
                  src={`${file}#toolbar=0&navpanes=0&scrollbar=0&zoom=page-fit`}
                  width="100%"
                  height="100%"
                  className="border-0"
                  style={{ maxWidth: '100%', overflowX: 'hidden' }}
                  onLoad={handleIframeLoad}
                  onError={handleIframeError}
                  title="PDF Viewer"
                  frameBorder="0"
                  loading="lazy"
                />
              </object>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default BeautifulPDFViewer;
