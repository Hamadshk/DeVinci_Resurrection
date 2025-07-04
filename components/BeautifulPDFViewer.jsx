import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faExpand, 
  faCompress, 
  faEye, 
  faFileAlt,
  faCog,
  faSpinner
} from '@fortawesome/free-solid-svg-icons';

const BeautifulPDFViewer = ({ file, height = "700px" }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);
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

  // Validate file prop
  if (!file || typeof file !== 'string') {
    console.error('BeautifulPDFViewer: file prop must be a valid string URL');
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
        <p>Error: Invalid PDF file path provided</p>
      </div>
    );
  }

  useEffect(() => {
    // Simulate loading progress for large files
    const progressInterval = setInterval(() => {
      setLoadProgress(prev => {
        if (prev >= 95) {
          clearInterval(progressInterval);
          setIsLoading(false);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    // Set a timeout for loading
    const loadTimeout = setTimeout(() => {
      setIsLoading(false);
      setLoadProgress(100);
    }, 3000);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(loadTimeout);
    };
  }, []);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const openInNewTab = () => {
    if (file && typeof file === 'string') {
      try {
        window.open(file, '_blank', 'noopener,noreferrer');
      } catch (error) {
        console.error('Error opening PDF in new tab:', error);
        // Fallback: try to download the file
        const link = document.createElement('a');
        link.href = file;
        link.download = 'portfolio.pdf';
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    }
  };

  const handleIframeLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleIframeError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <div className={`pdf-viewer-beautiful ${isFullscreen ? 'fixed inset-0 z-50' : 'relative'} bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 rounded-xl overflow-hidden shadow-2xl border border-slate-700/50`}>
      {/* Beautiful Header */}
      <div className="pdf-header bg-gradient-to-r from-slate-900/90 to-slate-800/90 backdrop-blur-sm px-6 py-4 border-b border-slate-700/50">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                <FontAwesomeIcon icon={faFileAlt} className="text-white text-lg" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Portfolio & Case Studies</h3>
                <p className="text-sm text-slate-400">DeVinci Codes - Professional Portfolio</p>
              </div>
            </div>
            
            {/* Status Indicator */}
            <div className="flex items-center space-x-2">
              <div className={`w-2 h-2 rounded-full ${isLoading ? 'bg-yellow-400 animate-pulse' : hasError ? 'bg-red-400' : 'bg-green-400'}`}></div>
              <span className="text-xs text-slate-400">
                {isLoading ? 'Loading...' : hasError ? 'Failed' : 'Ready'}
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            {/* View Options */}
            <button
              onClick={openInNewTab}
              className="px-4 py-2 bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-700 hover:to-cyan-800 text-white rounded-lg transition-all duration-200 shadow-lg hover:shadow-cyan-500/25 text-sm font-medium flex items-center space-x-2"
            >
              <FontAwesomeIcon icon={faEye} className="text-sm" />
              <span>View Full Screen</span>
            </button>

            {/* Fullscreen Toggle */}
            <button
              onClick={toggleFullscreen}
              className="w-10 h-10 bg-slate-700 hover:bg-slate-600 text-slate-300 hover:text-white rounded-lg transition-all duration-200 flex items-center justify-center shadow-lg"
            >
              <FontAwesomeIcon icon={isFullscreen ? faCompress : faExpand} className="text-sm" />
            </button>
          </div>
        </div>

        {/* Loading Progress Bar */}
        {isLoading && (
          <div className="mt-4">
            <div className="flex items-center justify-between text-sm text-slate-400 mb-2">
              <span className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
                <span>Loading PDF Document...</span>
              </span>
              <span>{Math.round(loadProgress)}%</span>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-cyan-500 to-blue-600 h-2 rounded-full transition-all duration-300 shadow-lg"
                style={{ width: `${loadProgress}%` }}
              />
            </div>
            <div className="mt-2 text-xs text-slate-500 text-center">
              <div className="flex items-center justify-center space-x-2">
                <span>Large file (58MB) - Optimizing for {isChrome ? 'Chrome' : 'your browser'}</span>
                {isChrome && <span className="text-blue-400">🚀</span>}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* PDF Content Area */}
      <div 
        className="pdf-content relative bg-slate-900/50"
        style={{ height: isFullscreen ? 'calc(100vh - 120px)' : height }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px),
                linear-gradient(180deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-slate-950/90 to-slate-900/90 backdrop-blur-sm">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center shadow-2xl mb-6 mx-auto">
                <FontAwesomeIcon icon={faSpinner} className="text-white text-xl animate-spin" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Preparing Your Portfolio</h4>
              <p className="text-slate-400 mb-4">Loading comprehensive case studies and project highlights</p>
              <div className="flex items-center justify-center space-x-2 text-sm text-slate-500">
                <FontAwesomeIcon icon={faCog} className="animate-spin" />
                <span>Optimizing for best viewing experience...</span>
              </div>
            </div>
          </div>
        )}

        {/* Enhanced Error State with Chrome-specific guidance */}
        {hasError && !isLoading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-slate-950/90 to-slate-900/90 backdrop-blur-sm">
            <div className="text-center max-w-md">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-2xl mb-6 mx-auto">
                <FontAwesomeIcon icon={faFileAlt} className="text-white text-xl" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">
                {isChrome ? 'Chrome Display Optimization' : 'Display Issue Detected'}
              </h4>
              <p className="text-slate-400 mb-4">
                {isChrome ? 
                  'For the best experience with large PDFs in Chrome, please use the external viewer.' :
                  'The PDF is too large for inline viewing. Please use the "View Full Screen" button for the best experience.'
                }
              </p>
              {isChrome && (
                <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-3 mb-4 text-sm text-blue-200">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">i</span>
                    </div>
                    <span className="font-medium">Chrome Tip:</span>
                  </div>
                  <p>Chrome handles large PDFs best in a dedicated tab with built-in PDF controls.</p>
                </div>
              )}
              <button
                onClick={openInNewTab}
                className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-700 hover:to-cyan-800 text-white rounded-lg transition-all duration-200 shadow-lg hover:shadow-cyan-500/25 font-medium"
              >
                Open Portfolio in New Tab
              </button>
            </div>
          </div>
        )}

        {/* Chrome-Optimized PDF Rendering */}
        {!isLoading && !hasError && (
          <div className="relative w-full h-full">
            {/* Chrome-specific rendering with enhanced fallbacks */}
            {isChrome && useEmbedFallback ? (
              // Chrome-optimized embed approach
              <div className="w-full h-full relative">
                <embed
                  src={`${file}#view=FitH&toolbar=1&navpanes=1&scrollbar=1`}
                  type="application/pdf"
                  width="100%"
                  height="100%"
                  className="border-0 bg-white rounded-lg shadow-inner"
                  onLoad={handleIframeLoad}
                  onError={() => {
                    console.log('Embed failed, trying iframe fallback');
                    setUseEmbedFallback(false);
                  }}
                />
                {/* Additional Chrome fallback notice */}
                <div className="absolute bottom-4 right-4 bg-slate-800/90 backdrop-blur-sm rounded-lg px-3 py-2 text-xs text-slate-300 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Chrome Optimized</span>
                  </div>
                </div>
              </div>
            ) : (
              // Standard object/iframe approach for other browsers or Chrome fallback
              <>
                <object
                  data={`${file}#view=FitH&toolbar=1&navpanes=1&scrollbar=1`}
                  type="application/pdf"
                  width="100%"
                  height="100%"
                  className="border-0 bg-white rounded-lg shadow-inner"
                >
                  {/* Enhanced iframe fallback with Chrome-specific parameters */}
                  <iframe
                    src={isChrome ? 
                      `${file}#view=FitH&toolbar=1&navpanes=1&scrollbar=1&zoom=page-width` : 
                      `${file}#view=FitH&toolbar=1&navpanes=1&scrollbar=1`
                    }
                    width="100%"
                    height="100%"
                    className="border-0 bg-white rounded-lg shadow-inner"
                    onLoad={handleIframeLoad}
                    onError={handleIframeError}
                    title="Portfolio PDF Viewer"
                    frameBorder="0"
                    allow="fullscreen"
                    loading="lazy"
                  />
                </object>
                {/* Browser compatibility indicator */}
                <div className="absolute bottom-4 right-4 bg-slate-800/90 backdrop-blur-sm rounded-lg px-3 py-2 text-xs text-slate-300 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full ${isChrome ? 'bg-blue-400' : 'bg-green-400'}`}></div>
                    <span>{isChrome ? 'Chrome Compatible' : 'Universal Mode'}</span>
                  </div>
                </div>
              </>
            )}
          </div>
        )}
      </div>

      {/* Beautiful Footer */}
      <div className="pdf-footer bg-gradient-to-r from-slate-900/90 to-slate-800/90 backdrop-blur-sm px-6 py-3 border-t border-slate-700/50">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-slate-400">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <span>Portfolio Experience</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-3 text-xs text-slate-500">
            <span>📄 Professional Portfolio</span>
            <span>•</span>
            <span>🎯 Case Studies</span>
            <span>•</span>
          </div>
        </div>
      </div>

      {/* Fullscreen overlay background */}
      {isFullscreen && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm -z-10" onClick={toggleFullscreen} />
      )}
    </div>
  );
};

export default BeautifulPDFViewer;
