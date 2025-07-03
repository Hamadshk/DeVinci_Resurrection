import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

// Set up the worker with increased memory
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PDFViewer = ({ file, height = "600px" }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(0.8); // Start with smaller scale for large files
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [loadingProgress, setLoadingProgress] = useState(0);

  function onDocumentLoadSuccess({ numPages }) {
    console.log('PDF loaded successfully with', numPages, 'pages');
    setNumPages(numPages);
    setLoading(false);
    setError(null);
  }

  function onDocumentLoadError(error) {
    console.error('Error loading PDF:', error);
    setError(`Failed to load PDF: ${error.message || 'Unknown error'}`);
    setLoading(false);
  }

  function onDocumentLoadProgress({ loaded, total }) {
    if (total > 0) {
      const progress = Math.round((loaded / total) * 100);
      setLoadingProgress(progress);
      console.log(`Loading progress: ${progress}%`);
    }
  }

  const goToPrevPage = () => {
    setPageNumber(pageNumber <= 1 ? 1 : pageNumber - 1);
  };

  const goToNextPage = () => {
    setPageNumber(pageNumber >= numPages ? numPages : pageNumber + 1);
  };

  const zoomIn = () => {
    setScale(scale + 0.2);
  };

  const zoomOut = () => {
    setScale(scale > 0.4 ? scale - 0.2 : 0.4);
  };

  // Document options for better large file handling
  const options = {
    cMapUrl: 'cmaps/',
    cMapPacked: true,
    standardFontDataUrl: 'standard_fonts/',
  };

  return (
    <div className="pdf-viewer-container bg-gray-50 border border-gray-200 rounded-lg overflow-hidden">
      {/* PDF Controls */}
      <div className="pdf-controls bg-white px-4 py-3 border-b border-gray-200 flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-3">
          <button
            onClick={goToPrevPage}
            disabled={pageNumber <= 1 || loading}
            className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-sm"
          >
            Previous
          </button>
          <span className="text-sm font-medium text-gray-700">
            Page {pageNumber} of {numPages || '--'}
          </span>
          <button
            onClick={goToNextPage}
            disabled={pageNumber >= numPages || loading}
            className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-sm"
          >
            Next
          </button>
        </div>
        
        <div className="flex items-center gap-3">
          <button
            onClick={zoomOut}
            disabled={loading}
            className="px-3 py-1 bg-gray-600 text-white rounded hover:bg-gray-700 disabled:bg-gray-300 text-sm"
          >
            Zoom Out
          </button>
          <span className="text-sm font-medium text-gray-700">
            {Math.round(scale * 100)}%
          </span>
          <button
            onClick={zoomIn}
            disabled={loading}
            className="px-3 py-1 bg-gray-600 text-white rounded hover:bg-gray-700 disabled:bg-gray-300 text-sm"
          >
            Zoom In
          </button>
        </div>
      </div>

      {/* Loading Progress Bar */}
      {loading && (
        <div className="bg-white px-4 py-2 border-b border-gray-200">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <span>Loading PDF... {loadingProgress}%</span>
            <span className="text-xs">Large file - please wait</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
              style={{ width: `${loadingProgress}%` }}
            ></div>
          </div>
        </div>
      )}

      {/* PDF Document Display */}
      <div 
        className="pdf-content overflow-auto bg-gray-100 flex justify-center"
        style={{ height }}
      >
        {loading && (
          <div className="flex flex-col items-center justify-center w-full h-full">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
            <div className="text-gray-600">Loading large PDF file...</div>
            <div className="text-gray-500 text-sm mt-2">This may take a moment</div>
          </div>
        )}

        {error && (
          <div className="flex flex-col items-center justify-center w-full h-full text-red-600 p-8">
            <div className="text-lg font-semibold mb-2">Error Loading PDF</div>
            <div className="text-sm mb-4 text-center">{error}</div>
            <div className="text-xs text-gray-500 text-center">
              <p>Troubleshooting tips:</p>
              <ul className="mt-2 space-y-1">
                <li>• Check your internet connection</li>
                <li>• The PDF file is large (54MB) - it may take time to load</li>
                <li>• Try refreshing the page</li>
                <li>• <a href="/portfolio.pdf" target="_blank" className="text-blue-600 hover:underline">
                    Click here to view PDF directly
                  </a></li>
              </ul>
            </div>
          </div>
        )}
        
        {!loading && !error && (
          <Document
            file={file}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={onDocumentLoadError}
            onLoadProgress={onDocumentLoadProgress}
            loading={
              <div className="flex flex-col items-center justify-center w-full h-full">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
                <div className="text-gray-600">Initializing PDF...</div>
              </div>
            }
            error={
              <div className="flex items-center justify-center w-full h-full text-red-600">
                <div>Error loading PDF. Please check if the file exists.</div>
              </div>
            }
            options={options}
            className="pdf-document"
          >
            <Page
              pageNumber={pageNumber}
              scale={scale}
              className="pdf-page shadow-lg mx-auto my-4"
              renderTextLayer={false}
              renderAnnotationLayer={false}
              loading={
                <div className="flex items-center justify-center w-full h-96">
                  <div className="text-gray-600">Loading page {pageNumber}...</div>
                </div>
              }
            />
          </Document>
        )}
      </div>

      {/* Page Navigation at Bottom */}
      <div className="pdf-footer bg-white px-4 py-2 border-t border-gray-200">
        <div className="flex items-center justify-between">
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
              className="w-16 px-2 py-1 border border-gray-300 rounded text-sm text-center disabled:bg-gray-100"
            />
            <span className="text-sm text-gray-600">/ {numPages || '--'}</span>
          </div>
          
          {/* File size indicator */}
          <div className="text-xs text-gray-500">
            PDF Size: ~54MB
          </div>
        </div>
      </div>
    </div>
  );
};

export default PDFViewer; 