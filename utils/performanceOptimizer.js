// Performance optimization utilities for smooth scrolling
let ticking = false;

// Throttled scroll handler using requestAnimationFrame
export const throttleScroll = (callback) => {
  return function() {
    if (!ticking) {
      requestAnimationFrame(() => {
        callback.apply(this, arguments);
        ticking = false;
      });
      ticking = true;
    }
  };
};

// Debounced function for scroll events
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Check if user prefers reduced motion
export const prefersReducedMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Check device performance level
export const getDevicePerformanceLevel = () => {
  // Basic performance detection
  const canvas = document.createElement('canvas');
  const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
  
  if (!gl) return 'low';
  
  const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
  if (debugInfo) {
    const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
    // Basic GPU detection for performance level
    if (renderer.includes('Intel') || renderer.includes('Qualcomm')) {
      return 'medium';
    }
    if (renderer.includes('NVIDIA') || renderer.includes('AMD') || renderer.includes('Apple')) {
      return 'high';
    }
  }
  
  // Check hardware concurrency
  if (navigator.hardwareConcurrency >= 8) return 'high';
  if (navigator.hardwareConcurrency >= 4) return 'medium';
  return 'low';
};

// Optimize will-change property dynamically
export const optimizeWillChange = (element, property) => {
  // Set will-change before animation
  element.style.willChange = property;
  
  // Remove will-change after animation completes
  const removeWillChange = () => {
    element.style.willChange = 'auto';
  };
  
  // Listen for animation end
  element.addEventListener('animationend', removeWillChange, { once: true });
  element.addEventListener('transitionend', removeWillChange, { once: true });
  
  // Fallback timeout
  setTimeout(removeWillChange, 1000);
};

// Intersection Observer for animation performance
export const createOptimizedObserver = (callback, options = {}) => {
  const defaultOptions = {
    root: null,
    rootMargin: '50px',
    threshold: 0.1,
  };
  
  const observerOptions = { ...defaultOptions, ...options };
  
  if ('IntersectionObserver' in window) {
    return new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Element is visible, enable animations
          entry.target.classList.remove('animation-paused');
          callback(entry, true);
        } else {
          // Element is not visible, pause animations
          entry.target.classList.add('animation-paused');
          callback(entry, false);
        }
      });
    }, observerOptions);
  }
  
  // Fallback for browsers without IntersectionObserver
  return null;
};

// Apply performance optimizations based on device capabilities
export const applyPerformanceOptimizations = () => {
  const performanceLevel = getDevicePerformanceLevel();
  const body = document.body;
  
  // Add performance class to body
  body.classList.add(`performance-${performanceLevel}`);
  
  // Disable heavy animations on low-performance devices
  if (performanceLevel === 'low' || prefersReducedMotion()) {
    body.classList.add('reduce-animations');
  }
  
  // Enable smooth scrolling optimizations
  document.documentElement.style.scrollBehavior = 'smooth';
  
  // Add passive event listeners for better scroll performance
  const passiveSupported = (() => {
    let passive = false;
    try {
      const options = {
        get passive() {
          passive = true;
          return false;
        }
      };
      window.addEventListener('test', null, options);
      window.removeEventListener('test', null, options);
    } catch (err) {}
    return passive;
  })();
  
  if (passiveSupported) {
    // Add passive scroll listeners
    const passiveEvents = ['scroll', 'touchstart', 'touchmove', 'wheel'];
    passiveEvents.forEach(event => {
      document.addEventListener(event, () => {}, { passive: true });
    });
  }
};

// Initialize performance optimizations
export const initPerformanceOptimizations = () => {
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyPerformanceOptimizations);
  } else {
    applyPerformanceOptimizations();
  }
  
  // Apply optimizations immediately for better initial performance
  requestAnimationFrame(() => {
    applyPerformanceOptimizations();
  });
}; 