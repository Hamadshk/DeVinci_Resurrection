import { lazy, Suspense, useMemo } from "react";
import { useInView } from "react-intersection-observer";
import { useState, useEffect, useRef } from "react";
import dynamic from 'next/dynamic';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { initPerformanceOptimizations } from "../utils/performanceOptimizer";

const Header = lazy(() => import("../components/Header"));
const SkillsPage = lazy(() => import("../components/SkillsPage"));
const VerticalTimeline = lazy(() => import("../components/VerticalTimeline"));
const About = lazy(() => import("../components/About"));
const Contact = lazy(() => import("../components/Contact"));
const CompaniesCarousel = lazy(() => import("../components/CompaniesCarousel"));
const Goals = lazy(() => import("../components/Goals"));
const TestimonialsCarousel = lazy(() => import("../components/TestimonialsCarousel"));
const FreeConsultation = lazy(() => import("../components/FreeConsultation"));
const Portfolio = lazy(() => import("../components/Portfolio"));

// Import components dynamically to avoid SSR issues
const NavBar = dynamic(() => import("../components/NavBar"), { ssr: false });

// Updated loading spinner for black theme
const LoadingSpinner = () => (
  <div className="flex justify-center items-center py-16 bg-pure-black">
    <div className="w-8 h-8 border-2 border-glass-white border-t-cyber-cyan rounded-full animate-spin"></div>
    <span className="ml-3 text-cyber-white text-sm font-inter">Loading...</span>
  </div>
);

const Home = () => {
  const [mounted, setMounted] = useState(false);
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const myRef = useRef(null);

  useEffect(() => {
    setMounted(true);
    
    // Initialize performance optimizations immediately
    initPerformanceOptimizations();
    
    // Ensure all critical components are loaded before showing content
    const timer = setTimeout(() => {
      setIsInitialLoading(false);
    }, 100); // Reduced from 150ms for faster loading

    return () => clearTimeout(timer);
  }, []);

  // Highly optimized intersection observer options for better performance
  const observerOptions = useMemo(() => ({
    root: null,
    threshold: 0.05, // Lower threshold for even earlier loading
    triggerOnce: true,
    rootMargin: '150px 0px', // Larger margin for pre-loading
  }), []);

  // Consolidated intersection observers with performance optimization
  const [aboutRef, aboutInView] = useInView(observerOptions);
  const [skillsRef, skillsInView] = useInView(observerOptions);
  const [timelineRef, timelineInView] = useInView(observerOptions);
  const [contactRef, contactInView] = useInView(observerOptions);
  const [portfolioRef, portfolioInView] = useInView(observerOptions);
  const [goalsRef, goalsInView] = useInView(observerOptions);

  if (!mounted || isInitialLoading) {
    return (
      <div className="min-h-screen bg-pure-black flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 border-2 border-glass-white border-t-cyber-cyan rounded-full animate-spin"></div>
          <span className="text-cyber-white text-sm mt-2 font-inter">Preparing your experience...</span>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="bg-pure-black min-h-screen opacity-0 animate-fade-in"
      style={{
        // Optimize for smooth scrolling with hardware acceleration
        WebkitOverflowScrolling: 'touch',
        overflowY: 'auto',
        animationDelay: '0.1s',
        animationFillMode: 'forwards',
        transform: 'translate3d(0, 0, 0)', // Force hardware acceleration
        backfaceVisibility: 'hidden',
      }}
    >
      <section 
        ref={myRef} 
        className="home-page h-screen relative overflow-hidden bg-pure-black"
        style={{
          // Optimize hero section with hardware acceleration
          transform: 'translate3d(0, 0, 0)',
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
        }}
      >
        {/* Futuristic grid background */}
        <div className="absolute inset-0 bg-cyber-grid bg-[length:50px_50px] opacity-20" />
        
        {/* Geometric corner accents */}
        <div className="absolute top-8 left-8 w-20 h-20 border-l-2 border-t-2 border-cyber-cyan opacity-30" />
        <div className="absolute top-8 right-8 w-20 h-20 border-r-2 border-t-2 border-cyber-cyan opacity-30" />

        <div className="relative z-10">
          <NavBar />
          <section 
            className="pt-20 px-4 mx-auto max-w-7xl sm:py-16 lg:px-6 flex flex-col items-center justify-center gap-8" 
            style={{ 
              minHeight: 'calc(100vh - 80px)',
            }}
          >
            <Header />
            <Suspense fallback={<LoadingSpinner />}>
              <FreeConsultation className="mt-8" />
            </Suspense>
          </section>
        </div>
      </section>

      {/* Main Content Sections */}
      <Suspense fallback={<LoadingSpinner />}>
        <section
          id="about"
          ref={aboutRef}
          className="flex justify-center py-8 items-center px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6"
        >
          <About inView={aboutInView} />
        </section>
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <section 
          id="skills" 
          ref={skillsRef} 
          className="py-8"
        >
          <SkillsPage inView={skillsInView} />
        </section>
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <section 
          id="testimonials" 
          className="py-8"
        >
          <TestimonialsCarousel />
        </section>
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <section
          id="companies"
          ref={portfolioRef}
          className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6"
        >
          <CompaniesCarousel />
        </section>
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <section
          id="portfolio"
          className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6"
        >
          <Portfolio inView={portfolioInView} />
        </section>
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <section
          id="contact"
          ref={contactRef}
          className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6"
        >
          <Contact inView={contactInView} />
        </section>
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <section
          id="vision"
          ref={goalsRef}
          className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6"
        >
          <Goals inView={goalsInView} />
        </section>
      </Suspense>
    </div>
  );
};

export default Home;