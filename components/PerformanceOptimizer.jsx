import { useEffect } from 'react';
import { throttleScroll, createOptimizedObserver } from '../utils/performanceOptimizer';

const PerformanceOptimizer = ({ children }) => {
  useEffect(() => {
    // Create optimized intersection observer for animations
    const observer = createOptimizedObserver((entry, isVisible) => {
      const element = entry.target;
      
      // Manage animations based on visibility
      if (isVisible) {
        element.classList.add('in-viewport');
        element.classList.remove('animation-paused');
      } else {
        element.classList.remove('in-viewport');
        element.classList.add('animation-paused');
      }
    });

    // Observe all animated elements
    if (observer) {
      const animatedElements = document.querySelectorAll([
        '.animate-float',
        '.animate-glow',
        '.animate-matrix-rain',
        '.animate-binary-stream',
        '.animate-circuit-pulse',
        '.card-skills',
        '.special-text-header'
      ].join(', '));

      animatedElements.forEach(el => observer.observe(el));
    }

    // Optimized scroll handler for navbar and other scroll-dependent elements
    const handleScroll = throttleScroll(() => {
      const scrollY = window.scrollY;
      
      // Update CSS custom property for scroll-based animations
      document.documentElement.style.setProperty('--scroll-y', `${scrollY}px`);
      
      // Manage will-change properties based on scroll state
      const elements = document.querySelectorAll('.card-skills, .about-section, .portfolio, .contact');
      elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const isNearViewport = rect.top < window.innerHeight + 100 && rect.bottom > -100;
        
        if (isNearViewport) {
          element.style.willChange = 'transform, opacity';
        } else {
          element.style.willChange = 'auto';
        }
      });
    });

    // Add passive scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Performance monitoring
    let frameCount = 0;
    let lastTime = performance.now();
    
    const monitorPerformance = () => {
      frameCount++;
      const currentTime = performance.now();
      
      // Check FPS every second
      if (currentTime - lastTime >= 1000) {
        const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
        
        // Adjust performance based on FPS
        if (fps < 30) {
          document.body.classList.add('low-fps');
          // Disable heavy animations on low FPS
          const heavyAnimations = document.querySelectorAll('.animate-matrix-rain, .animate-binary-stream');
          heavyAnimations.forEach(el => el.style.animationPlayState = 'paused');
        } else {
          document.body.classList.remove('low-fps');
        }
        
        frameCount = 0;
        lastTime = currentTime;
      }
      
      requestAnimationFrame(monitorPerformance);
    };
    
    requestAnimationFrame(monitorPerformance);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return children;
};

export default PerformanceOptimizer;
