import React, { useState, useEffect, useCallback } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

// Set up the worker for better performance
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const OptimizedPDFViewer = ({ file, height = "700px" }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [pageWidth, setPageWidth] = useState(null);

  // Add timeout for loading
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (loading && loadingProgress < 100) {
        setError('PDF loading timeout. The file may be too large or unavailable. Please try opening it directly.');
        setLoading(false);
      }
    }, 30000); // 30 second timeout

    return () => clearTimeout(timeout);
  }, [loading, loadingProgress]);

  // Optimize for responsive viewing
  useEffect(() => {
    const updateWidth = () => {
      const container = document.getElementById('pdf-container');
      if (container) {
        setPageWidth(container.offsetWidth - 40); // Account for padding
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const onDocumentLoadSuccess = useCallback(({ numPages }) => {
    console.log('PDF loaded successfully with', numPages, 'pages');
    setNumPages(numPages);
    setLoading(false);
    setError(null);
  }, []);

  const onDocumentLoadError = useCallback((error) => {
    console.error('Error loading PDF:', error);
    setError(`Failed to load PDF: ${error.message || 'Unknown error'}`);
    setLoading(false);
  }, []);

  const onDocumentLoadProgress = useCallback(({ loaded, total }) => {
    if (total > 0) {
      const progress = Math.round((loaded / total) * 100);
      setLoadingProgress(progress);
    }
  }, []);

  const goToPrevPage = useCallback(() => {
    setPageNumber(prev => Math.max(1, prev - 1));
  }, []);

  const goToNextPage = useCallback(() => {
    setPageNumber(prev => Math.min(numPages || prev, prev + 1));
  }, [numPages]);

  const zoomIn = useCallback(() => {
    setScale(prev => Math.min(2.5, prev + 0.25));
  }, []);

  const zoomOut = useCallback(() => {
    setScale(prev => Math.max(0.5, prev - 0.25));
  }, []);

  const resetZoom = useCallback(() => {
    setScale(1.0);
  }, []);

  // PDF.js options for better performance with large files
  const options = {
    cMapUrl: `https://cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/cmaps/`,
    cMapPacked: true,
    standardFontDataUrl: `https://cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/standard_fonts/`,
    // Optimize for faster loading
    disableAutoFetch: false,
    disableStream: false,
    disableRange: false,
    // Add timeout to prevent infinite loading
    httpHeaders: null,
    withCredentials: false,
  };

  return (
    <div className="pdf-viewer-container" id="pdf-container">
      {/* Modern PDF Controls */}
      <div className="bg-white px-4 py-4 border-b border-gray-200 flex items-center justify-between flex-wrap gap-4 sticky top-0 z-10 shadow-sm">
        {/* Navigation Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={goToPrevPage}
            disabled={pageNumber <= 1 || loading}
            className="p-2 bg-primary text-white rounded-lg hover:bg-primary-dark disabled:bg-gray-300 disabled:cursor-not-allowed transition-all"
            title="Previous Page"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex items-center gap-2">
            <input
              type="number"
              min={1}
              max={numPages || 1}
              value={pageNumber}
              onChange={(e) => {
                const page = parseInt(e.target.value);
                if (page >= 1 && page <= numPages) {
                  setPageNumber(page);
                }
              }}
              disabled={loading}
              className="w-16 px-2 py-1.5 border-2 border-gray-200 rounded-lg text-sm text-center font-semibold focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all disabled:bg-gray-100"
            />
            <span className="text-sm font-medium text-gray-600">
              / {numPages || '--'}
            </span>
          </div>

          <button
            onClick={goToNextPage}
            disabled={pageNumber >= numPages || loading}
            className="p-2 bg-primary text-white rounded-lg hover:bg-primary-dark disabled:bg-gray-300 disabled:cursor-not-allowed transition-all"
            title="Next Page"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Zoom Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={zoomOut}
            disabled={loading || scale <= 0.5}
            className="p-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed transition-all"
            title="Zoom Out"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7" />
            </svg>
          </button>

          <button
            onClick={resetZoom}
            disabled={loading}
            className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 text-sm font-semibold disabled:bg-gray-100 transition-all"
          >
            {Math.round(scale * 100)}%
          </button>

          <button
            onClick={zoomIn}
            disabled={loading || scale >= 2.5}
            className="p-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed transition-all"
            title="Zoom In"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
            </svg>
          </button>
        </div>

      </div>

      {/* Loading Progress Bar */}
      {loading && (
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 px-4 py-4 border-b border-gray-200">
          <div className="flex items-center justify-between text-sm text-gray-700 mb-2">
            <span className="font-semibold">Loading PDF... {loadingProgress}%</span>
            {loadingProgress < 100 && (
              <span className="text-xs text-gray-500">Please wait, optimizing for viewing...</span>
            )}
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
            <div
              className="h-2.5 rounded-full transition-all duration-300 ease-out bg-gradient-to-r from-primary to-secondary"
              style={{ width: `${loadingProgress}%` }}
            ></div>
          </div>
        </div>
      )}

      {/* PDF Document Display */}
      <div
        className="pdf-content overflow-auto bg-gradient-to-br from-gray-50 to-gray-100 flex justify-center items-start"
        style={{ height }}
      >
        {loading && (
          <div className="flex flex-col items-center justify-center w-full h-full p-8">
            <div className="relative">
              <div className="animate-spin rounded-full h-16 w-16 border-4 border-gray-200 border-t-primary"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
                </svg>
              </div>
            </div>
            <div className="text-gray-700 font-semibold mt-6">Loading PDF Document...</div>
            <div className="text-gray-500 text-sm mt-2">Optimizing pages for viewing</div>
          </div>
        )}

        {error && (
          <div className="flex flex-col items-center justify-center w-full h-full p-8 text-center">
            <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8 max-w-md">
              <svg className="w-16 h-16 text-red-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div className="text-lg font-bold text-red-900 mb-2">Error Loading PDF</div>
              <div className="text-sm text-red-700 mb-4">{error}</div>
              <div className="text-xs text-gray-600 space-y-2 text-left">
                <p className="font-semibold">Troubleshooting:</p>
                <ul className="space-y-1 ml-4">
                  <li>• Check your internet connection</li>
                  <li>• Try refreshing the page</li>
                  <li>• The file may be temporarily unavailable</li>
                </ul>
              </div>
              <a
                href={file}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-4 inline-block"
              >
                Open PDF Directly
              </a>
            </div>
          </div>
        )}

        {!error && (
          <Document
            file={file}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={onDocumentLoadError}
            onLoadProgress={onDocumentLoadProgress}
            options={options}
            className="pdf-document"
            loading={
              <div className="flex items-center justify-center w-full h-full">
                <div className="text-gray-500">Initializing PDF viewer...</div>
              </div>
            }
          >
            <Page
              pageNumber={pageNumber}
              width={pageWidth}
              scale={scale}
              className="pdf-page shadow-xl mx-auto my-6 rounded-lg overflow-hidden bg-white"
              renderTextLayer={true}
              renderAnnotationLayer={false}
              loading={
                <div className="flex items-center justify-center w-full h-96 bg-white rounded-lg shadow-lg">
                  <div className="text-gray-500">Rendering page {pageNumber}...</div>
                </div>
              }
            />
          </Document>
        )}
      </div>

      {/* Footer Info */}
      {!loading && !error && (
        <div className="bg-white px-4 py-3 border-t border-gray-200 flex items-center justify-between text-sm">
          <div className="text-gray-600">
            <span className="font-semibold">Page {pageNumber}</span> of <span className="font-semibold">{numPages}</span>
          </div>
          <div className="flex items-center gap-4 text-gray-500">
            <span>Zoom: {Math.round(scale * 100)}%</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default OptimizedPDFViewer;
