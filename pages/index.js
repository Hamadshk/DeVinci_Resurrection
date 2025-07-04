import { lazy, Suspense, useMemo, useCallback } from "react";
import { useInView } from "react-intersection-observer";
import { useState, useEffect, useRef } from "react";
import dynamic from 'next/dynamic';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Header = lazy(() => import("../components/Header"));
const SkillsPage = lazy(() => import("../components/SkillsPage"));
const VerticalTimeline = lazy(() => import("../components/VerticalTimeline"));
const About = lazy(() => import("../components/About"));
const Contact = lazy(() => import("../components/Contact"));
const Portfolio = lazy(() => import("../components/Portfolio"));
const Goals = lazy(() => import("../components/Goals"));
const TestimonialsCarousel = lazy(() => import("../components/TestimonialsCarousel"));
const FreeConsultation = lazy(() => import("../components/FreeConsultation"));

// Import components dynamically to avoid SSR issues
const NavBar = dynamic(() => import("../components/NavBar"), { ssr: false });

// Optimized loading spinner component
const LoadingSpinner = () => (
  <div className="flex justify-center items-center py-16 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
    <div className="w-8 h-8 border-2 border-slate-700 border-t-cyan-500 rounded-full animate-spin"></div>
    <span className="ml-3 text-slate-400 text-sm">Loading...</span>
  </div>
);

const Home = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const [mounted, setMounted] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const myRef = useRef(null);
  const scrollTimeoutRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Scroll optimization: Pause heavy animations during scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!isScrolling) {
        setIsScrolling(true);
        // Reduce Vanta effect intensity during scroll
        if (vantaEffect) {
          vantaEffect.setOptions({
            points: 3, // Reduce complexity during scroll
            maxDistance: 15,
          });
        }
      }

      // Clear existing timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      // Restore after scroll ends
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
        if (vantaEffect) {
          // Restore original settings
          let initialWidth = 1600;
          let rateOfDecrease = 250;
          let currentWidth = window.innerWidth;
          let pointsValue = Math.max(5, 10 - Math.trunc((initialWidth - currentWidth) / rateOfDecrease));
          
          vantaEffect.setOptions({
            points: Math.min(pointsValue, 8),
            maxDistance: 20,
          });
        }
      }, 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [vantaEffect, isScrolling]);

  // Optimized Vanta effect with performance settings and attached lines
  const initVanta = useCallback(async () => {
    if (!mounted || !myRef.current || vantaEffect) return;

    try {
      // Import THREE.js first, then Vanta
      const THREE = await import('three');
      window.THREE = THREE.default || THREE;
      
      const NET = (await import("vanta/dist/vanta.net.min")).default;
      
      let initialWidth = 1600;
      let rateOfDecrease = 250;
      let currentWidth = window.innerWidth;
      let pointsValue = Math.max(8, 15 - Math.trunc((initialWidth - currentWidth) / rateOfDecrease));

      const vantaInstance = NET({
        el: myRef.current,
        THREE: window.THREE, // Explicitly pass THREE
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 0.8,
        color: 0x06B6D4, // Cyan color for lines
        backgroundColor: 0x0F172A, // Dark slate background
        spacing: 30, // Closer spacing for more lines
        points: Math.min(pointsValue, 12), // More points for more connections
        maxDistance: 25, // Longer lines
        showDots: true, // Show dots at connection points
      });

      setVantaEffect(vantaInstance);
      console.log('Vanta effect with attached lines initialized successfully');
    } catch (error) {
      console.warn('Vanta effect failed to load:', error);
      // Enhanced fallback with animated background
      if (myRef.current) {
        myRef.current.style.background = `
          linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%),
          radial-gradient(circle at 20% 50%, rgba(6, 182, 212, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 50%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)
        `;
        myRef.current.style.backgroundSize = '100% 100%, 400px 400px, 400px 400px';
        myRef.current.style.animation = 'gradientShift 15s ease infinite';
      }
    }
  }, [mounted, vantaEffect]);

  useEffect(() => {
    if (mounted) {
      // Small delay to ensure DOM is ready
      const timer = setTimeout(() => {
        initVanta();
      }, 100);
      
      return () => clearTimeout(timer);
    }

    return () => {
      if (vantaEffect) {
        try {
          vantaEffect.destroy();
        } catch (error) {
          console.warn('Error destroying Vanta effect:', error);
        }
        setVantaEffect(null);
      }
    };
  }, [mounted, initVanta]);

  // Optimized intersection observer options with better performance
  const observerOptions = useMemo(() => ({
    root: null,
    threshold: 0.1, // Lower threshold for earlier loading
    triggerOnce: true,
    rootMargin: '100px 0px', // Larger margin for smoother loading
  }), []);

  // Consolidated intersection observers
  const [aboutRef, aboutInView] = useInView(observerOptions);
  const [skillsRef, skillsInView] = useInView(observerOptions);
  const [timelineRef, timelineInView] = useInView(observerOptions);
  const [contactRef, contactInView] = useInView(observerOptions);
  const [portfolioRef, portfolioInView] = useInView(observerOptions);
  const [goalsRef, goalsInView] = useInView(observerOptions);

  if (!mounted) {
    return null;
  }

  return (
    <div 
      className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 min-h-screen"
      style={{
        // Optimize for smooth scrolling
        scrollBehavior: 'smooth',
        WebkitOverflowScrolling: 'touch',
        overflowY: 'auto',
        height: '100vh',
        // Remove excessive GPU acceleration
      }}
    >
      <section 
        ref={myRef} 
        className="home-page h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden"
        style={{
          // Only apply GPU acceleration to hero section
          willChange: 'transform',
          transform: 'translate3d(0, 0, 0)',
        }}
      >
        {/* Optimized Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Reduce number of background elements */}
          <div 
            className="absolute w-96 h-96 -top-48 -right-48 bg-gradient-to-r from-cyan-500/6 to-blue-500/6 rounded-full blur-3xl"
          />
          <div 
            className="absolute w-96 h-96 -bottom-48 -left-48 bg-gradient-to-r from-purple-500/6 to-pink-500/6 rounded-full blur-3xl"
          />
          
          {/* Simplified Grid Pattern */}
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(90deg, rgba(6, 182, 212, 0.03) 1px, transparent 1px),
                linear-gradient(180deg, rgba(6, 182, 212, 0.03) 1px, transparent 1px)
              `,
              backgroundSize: "80px 80px", // Larger grid for better performance
            }}
          />
        </div>

        <div className="relative z-10">
          <NavBar />
          <section 
            className="pt-20 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 flex flex-col items-center justify-center gap-8" 
            style={{ 
              minHeight: 'calc(100vh - 80px)',
            }}
          >
            <Header />
            <Suspense fallback={<LoadingSpinner />}>
              <FreeConsultation className="mt-8" />
            </Suspense>
          </section>
          <a
            href="#contact"
            className="flex justify-center items-center contact-shortcut fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50"
            style={{
              willChange: 'transform',
              transform: 'translate3d(0, 0, 0)',
            }}
          >
            <FontAwesomeIcon icon={faPhone} className="text-white text-xl" />
          </a>
        </div>
      </section>

      {/* Optimized Sections - Remove excessive GPU acceleration */}
      <Suspense fallback={<LoadingSpinner />}>
        <section
          id="about"
          ref={aboutRef}
          className="flex justify-center py-8 items-center px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
        >
          <About inView={aboutInView} />
        </section>
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <section 
          id="skills" 
          ref={skillsRef} 
          className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
        >
          <SkillsPage inView={skillsInView} />
        </section>
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <section 
          id="testimonials" 
          className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
        >
          <TestimonialsCarousel />
        </section>
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <section
          id="portfolio"
          ref={portfolioRef}
          className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
        >
          <Portfolio inView={portfolioInView} />
        </section>
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <section
          id="timeline"
          ref={timelineRef}
          className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
        >
          <VerticalTimeline inView={timelineInView} />
        </section>
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <section
          id="contact"
          ref={contactRef}
          className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
        >
          <Contact inView={contactInView} />
        </section>
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <section
          id="vision"
          ref={goalsRef}
          className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
        >
          <Goals inView={goalsInView} />
        </section>
      </Suspense>
    </div>
  );
};

export default Home;