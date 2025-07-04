import { lazy, Suspense, useMemo } from "react";
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
const CompaniesCarousel = lazy(() => import("../components/CompaniesCarousel"));
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
  const [mounted, setMounted] = useState(false);
  const myRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

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
      }}
    >
      <section 
        ref={myRef} 
        className="home-page h-screen hero-grid-bg relative overflow-hidden"
        style={{
          // Only apply GPU acceleration to hero section
          willChange: 'transform',
          transform: 'translate3d(0, 0, 0)',
        }}
      >
        {/* Static background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Static gradient overlays for visual interest */}
          <div 
            className="absolute w-96 h-96 -top-48 -right-48 bg-gradient-to-r from-cyan-500/8 to-blue-500/8 rounded-full blur-3xl"
          />
          <div 
            className="absolute w-96 h-96 -bottom-48 -left-48 bg-gradient-to-r from-purple-500/8 to-pink-500/8 rounded-full blur-3xl"
          />
        </div>

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

      {/* Optimized Sections with Grid Backgrounds */}
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
          className=""
        >
          <SkillsPage inView={skillsInView} />
        </section>
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <section 
          id="testimonials" 
          className=""
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

      {/* <Suspense fallback={<LoadingSpinner />}>
        <section
          id="timeline"
          ref={timelineRef}
          className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6"
        >
          <VerticalTimeline inView={timelineInView} />
        </section>
      </Suspense> */}

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