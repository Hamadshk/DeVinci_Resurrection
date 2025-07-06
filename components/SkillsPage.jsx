import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import logo from "../public/images/logos/logo.png"; // Adjust path as necessary
import {
  faPhone,
  faPhoneFlip,
  faEnvelope,
  faVideo,
  faBuilding,
  faUsers,
  faRobot,
  faMagic,
  faChartLine,
  faClock,
  faGlobe,
  faBrain,
  faArrowRight,
  faSparkles,
  faCircuitBoard,
  faBolt
} from "@fortawesome/free-solid-svg-icons";
import { useRef, useState, useMemo } from "react";

// AI Services Data
const aiServices = [
  {
    title: "AI Inbound Call Agents",
    icon: faPhone,
    description:
      "Smart AI agents that handle incoming customer calls 24/7. They understand customer intent, answer questions, book appointments, and seamlessly transfer complex queries to human agents when needed.",
    features: [
      "24/7 Customer Support",
      "Intent Recognition",
      "Appointment Booking",
      "Lead Qualification",
      "CRM Integration",
      "Multi-language Support",
    ],
    techStack: ["ElevenLabs", "Synthflow", "RetellAI", "BlandAI", "N8N", "Make.com"],
    gradient: "from-cyan-400 via-blue-500 to-purple-600",
    accentColor: "cyan",
  },
  {
    title: "AI Outbound Call Agents",
    icon: faPhoneFlip,
    description:
      "Automated outbound calling agents that conduct sales calls, follow-ups, and customer surveys. They handle objections, qualify leads, and schedule meetings with prospects automatically.",
    features: [
      "Personalized Cold Calling",
      "Lead Qualification",
      "Objection Handling",
      "Meeting Scheduling",
      "Call Analytics",
      "Conversion Optimization",
    ],
    techStack: ["ElevenLabs", "Synthflow", "RetellAI", "BlandAI", "N8N", "Twilio"],
    gradient: "from-purple-400 via-pink-500 to-red-500",
    accentColor: "purple",
  },
  {
    title: "AI Marketing Automation",
    icon: faEnvelope,
    description:
      "Complete marketing automation suite with AI-powered cold email campaigns, drip sequences, and CRM integration. Personalized outreach that converts prospects into customers.",
    features: [
      "Cold Email Outreach",
      "Automated Drip Campaigns",
      "Smart Follow-up Sequences",
      "CRM Integration",
      "Performance Analytics",
      "A/B Testing Automation",
    ],
    techStack: ["N8N", "Make.com", "GoHighLevel", "Agile CRM", "SendGrid", "Mailgun"],
    gradient: "from-emerald-400 via-teal-500 to-blue-600",
    accentColor: "emerald",
  },
  {
    title: "AI Content Generation",
    icon: faVideo,
    description:
      "Automated content creation pipelines that generate videos, blogs, and social media posts from simple prompts. Complete content marketing automation at scale.",
    features: [
      "Automated Video Creation",
      "Blog Post Generation",
      "Social Media Content",
      "Voice-over Automation",
      "Image Generation",
      "Content Scheduling",
    ],
    techStack: ["ElevenLabs", "Kling AI", "Flux-Dev", "Creatomate", "0CodeKit", "N8N"],
    gradient: "from-orange-400 via-red-500 to-pink-600",
    accentColor: "orange",
  },
  {
    title: "Hospitality AI Automation",
    icon: faBuilding,
    description:
      "Smart pricing and communication automation for hotels and rental properties. Dynamic pricing optimization and automated guest messaging across all platforms.",
    features: [
      "Dynamic Pricing Automation",
      "Multi-platform Integration",
      "Automated Guest Messaging",
      "Booking Optimization",
      "Revenue Management",
      "Guest Experience Automation",
    ],
    techStack: ["Beds24", "Airbnb API", "Booking.com", "VRBO", "Expedia", "Twilio"],
    gradient: "from-indigo-400 via-blue-500 to-cyan-600",
    accentColor: "indigo",
  },
  {
    title: "AI Lead Generation & LinkedIn Outreach",
    icon: faUsers,
    description:
      "Comprehensive lead generation and LinkedIn automation system. Find, qualify, and engage with prospects automatically across multiple platforms.",
    features: [
      "Multi-source Lead Scraping",
      "LinkedIn Automation",
      "Prospect Qualification",
      "Automated Outreach",
      "Lead Scoring",
      "CRM Synchronization",
    ],
    techStack: ["Apollo", "ZoomInfo", "LinkedIn API", "Unipile", "Apify", "Google Maps"],
    gradient: "from-violet-400 via-purple-500 to-indigo-600",
    accentColor: "violet",
  },
];

// Optimized Service Card Component
function OptimizedServiceCard({ service, index }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.2, margin: "100px" });

  // Memoize animation variants to prevent recreating on each render
  const cardVariants = useMemo(() => ({
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }), [index]);

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover={{
        scale: 1.02,
        y: -5,
        transition: { duration: 0.2, ease: "easeOut" }
      }}
      className="relative group will-change-transform"
    >
      {/* Simplified Background Glow */}
      <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradient} rounded-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-300 blur-sm`} />
      
      {/* Main Card */}
      <div className="relative bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-slate-900/95 rounded-3xl overflow-hidden border border-slate-700/50 backdrop-blur-sm">
        {/* Simplified Top Bar */}
        <div className={`h-1 bg-gradient-to-r ${service.gradient}`} />

        <div className="p-8 relative z-10">
          {/* Icon and Title Section */}
          <div className="flex items-center mb-6 relative">
            <div className={`relative flex justify-center items-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} shadow-lg`}>
              <FontAwesomeIcon icon={service.icon} className="text-2xl text-white" />
            </div>
            
            <div className="ml-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                {service.title}
              </h3>
              <motion.div
                className="h-0.5 bg-gradient-to-r from-cyan-400 to-transparent mt-2"
                initial={{ width: 0 }}
                animate={isInView ? { width: "100%" } : { width: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
              />
            </div>
          </div>

          {/* Description */}
          <p className="text-slate-300 text-base leading-relaxed mb-6">
            {service.description}
          </p>

          {/* Key Features */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-white mb-4 flex items-center">
              <FontAwesomeIcon icon={faBolt} className="mr-2 text-yellow-400" />
              Key Features
            </h4>
            <div className="grid grid-cols-1 gap-3">
              {service.features.slice(0, isExpanded ? service.features.length : 4).map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: index * 0.1 + idx * 0.05 }}
                  className="flex items-center text-sm text-slate-300 hover:text-cyan-300 transition-colors duration-200"
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mr-3" />
                  <span>{feature}</span>
                </motion.div>
              ))}
              {service.features.length > 4 && (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="text-sm text-cyan-400 font-semibold mt-2 hover:text-cyan-300 transition-colors flex items-center"
                  onClick={() => setIsExpanded(!isExpanded)}
                >
                  {isExpanded ? "Show Less" : `+${service.features.length - 4} More`}
                  <FontAwesomeIcon icon={faArrowRight} className="ml-2 text-xs" />
                </motion.button>
              )}
            </div>
          </div>

          {/* Technology Stack */}
          <div className="mb-8">
            <h4 className="text-sm font-semibold text-white mb-4 flex items-center">
              <FontAwesomeIcon icon={faCircuitBoard} className="mr-2 text-purple-400" />
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {service.techStack.map((tech, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: index * 0.1 + idx * 0.03 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-xs bg-gradient-to-r from-slate-800 to-slate-700 border border-slate-600 px-3 py-2 rounded-xl text-slate-300 font-medium cursor-pointer hover:border-cyan-400/50 hover:text-cyan-300 transition-all duration-200"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Action Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full bg-gradient-to-r ${service.gradient} text-white font-bold py-4 px-6 rounded-2xl shadow-lg relative overflow-hidden group/btn transition-all duration-200`}
          >
            <div className="relative z-10 flex items-center justify-center">
              <FontAwesomeIcon icon={faRobot} className="mr-3" />
              <span>Explore Solution</span>
              <FontAwesomeIcon icon={faArrowRight} className="ml-3" />
            </div>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

export default function OptimizedSkillsPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Reduced parallax effect for smoother scrolling
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "100px" });

  return (
    <>
      {/* Global Styles for Smooth Scrolling */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        
        body {
          overflow-x: hidden;
        }
        
        * {
          -webkit-transform: translateZ(0);
          transform: translateZ(0);
        }
        
        .will-change-transform {
          will-change: transform;
        }
        
        .smooth-scroll {
          -webkit-overflow-scrolling: touch;
        }
        
        /* Optimize animations for performance */
        .optimized-animation {
          transform: translate3d(0, 0, 0);
          backface-visibility: hidden;
          perspective: 1000px;
        }
      `}</style>

      <div 
        ref={containerRef} 
        className="min-h-screen relative overflow-hidden smooth-scroll"
      >
        {/* Simplified Background Elements */}
        <motion.div 
          className="absolute inset-0 overflow-hidden pointer-events-none will-change-transform"
          style={{ y: backgroundY }}
        >
          {/* Reduced number of floating orbs */}
          <div className="absolute w-96 h-96 -top-48 -right-48 bg-gradient-to-r from-cyan-500/8 to-blue-500/8 rounded-full blur-3xl" />
          <div className="absolute w-96 h-96 -bottom-48 -left-48 bg-gradient-to-r from-purple-500/8 to-pink-500/8 rounded-full blur-3xl" />
          
          {/* Static Grid (removed animation) */}
          <div 
            className="absolute inset-0 opacity-3"
            style={{
              backgroundImage: `
                linear-gradient(90deg, rgba(6, 182, 212, 0.05) 1px, transparent 1px),
                linear-gradient(180deg, rgba(6, 182, 212, 0.05) 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px"
            }}
          />
        </motion.div>

        <section className="py-20 px-4 mx-auto max-w-7xl relative z-10">
          {/* Optimized Header Section */}
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0 }}
            animate={isHeaderInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mb-20 mx-auto text-center"
          >
            <motion.div
              className="flex items-center justify-center mb-8"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isHeaderInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative">
                <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-2xl">
                  <Image 
                    src={logo} 
                    alt="DeVinci Codes Logo" 
                    width={128}
                    height={128}
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="absolute -inset-4 border-2 border-cyan-400/20 rounded-full" />
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-5xl md:text-7xl font-bold mb-6 relative"
            >
              <span className="text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text">
                AI Agent Solutions
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-slate-300 text-xl md:text-2xl leading-relaxed mb-12"
            >
              At <span className="text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text font-bold">DeVinci Codes</span>, we empower
              businesses with next-generation AI automation that drives growth and efficiency 24/7.
            </motion.p>

            {/* Simplified Stats Bar */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
            >
              {[
                { icon: faClock, value: "24/7", label: "AI Automation", color: "from-green-400 to-emerald-600" },
                { icon: faChartLine, value: "300%", label: "ROI Increase", color: "from-blue-400 to-cyan-600" },
                { icon: faGlobe, value: "50+", label: "Businesses Automated", color: "from-purple-400 to-pink-600" },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isHeaderInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: 1 + idx * 0.1 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="relative group will-change-transform"
                >
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${stat.color} rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-200 blur-sm`} />
                  <div className="relative bg-slate-900/90 rounded-2xl p-6 border border-slate-700/50 backdrop-blur-sm">
                    <div className="flex items-center justify-center">
                      <FontAwesomeIcon
                        icon={stat.icon}
                        className={`text-3xl text-transparent bg-gradient-to-r ${stat.color} bg-clip-text mr-4`}
                      />
                      <div>
                        <p className={`text-4xl font-bold text-transparent bg-gradient-to-r ${stat.color} bg-clip-text`}>
                          {stat.value}
                        </p>
                        <p className="text-sm text-slate-400">{stat.label}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Optimized Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {aiServices.map((service, index) => (
              <OptimizedServiceCard key={index} service={service} index={index} />
            ))}
          </div>

          {/* Testimonials Section */}

          {/* Enhanced Call to Action with Robot Background Images */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3, margin: "100px" }}
            transition={{ duration: 0.8 }}
            className="text-center relative overflow-hidden"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 rounded-3xl opacity-20 blur-sm" />
            
            <div className="relative bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-slate-900/95 rounded-3xl p-12 border border-slate-700/50 backdrop-blur-sm overflow-hidden">
              {/* Background Dollar Signs Only */}
              <div className="absolute inset-0 pointer-events-none">
                {/* Dollar Sign - top left */}
                <div className="absolute top-8 left-16 w-16 h-16 opacity-3">
                  <svg viewBox="0 0 100 100" className="w-full h-full text-green-400">
                    <path d="M50 10 L50 20 M50 80 L50 90 M40 25 Q30 25 30 35 Q30 45 40 45 L60 45 Q70 45 70 55 Q70 65 60 65 L35 65 M35 25 L65 25" 
                          stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round"/>
                  </svg>
                </div>
                
                {/* Dollar Sign - top center */}
                <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-20 h-20 opacity-2">
                  <svg viewBox="0 0 100 100" className="w-full h-full text-green-500">
                    <path d="M50 10 L50 20 M50 80 L50 90 M40 25 Q30 25 30 35 Q30 45 40 45 L60 45 Q70 45 70 55 Q70 65 60 65 L35 65 M35 25 L65 25" 
                          stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round"/>
                  </svg>
                </div>
                
                {/* Dollar Sign - top right */}
                <div className="absolute top-8 right-16 w-14 h-14 opacity-3">
                  <svg viewBox="0 0 100 100" className="w-full h-full text-green-300">
                    <path d="M50 10 L50 20 M50 80 L50 90 M40 25 Q30 25 30 35 Q30 45 40 45 L60 45 Q70 45 70 55 Q70 65 60 65 L35 65 M35 25 L65 25" 
                          stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round"/>
                  </svg>
                </div>
                
                {/* Dollar Sign - center left */}
                <div className="absolute left-8 top-1/2 transform -translate-y-1/2 w-18 h-18 opacity-2">
                  <svg viewBox="0 0 100 100" className="w-full h-full text-green-400">
                    <path d="M50 10 L50 20 M50 80 L50 90 M40 25 Q30 25 30 35 Q30 45 40 45 L60 45 Q70 45 70 55 Q70 65 60 65 L35 65 M35 25 L65 25" 
                          stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round"/>
                  </svg>
                </div>
                
                {/* Dollar Sign - center right */}
                <div className="absolute right-8 top-1/2 transform -translate-y-1/2 w-18 h-18 opacity-2">
                  <svg viewBox="0 0 100 100" className="w-full h-full text-green-500">
                    <path d="M50 10 L50 20 M50 80 L50 90 M40 25 Q30 25 30 35 Q30 45 40 45 L60 45 Q70 45 70 55 Q70 65 60 65 L35 65 M35 25 L65 25" 
                          stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round"/>
                  </svg>
                </div>
                
                {/* Dollar Sign - bottom left */}
                <div className="absolute bottom-8 left-20 w-16 h-16 opacity-3">
                  <svg viewBox="0 0 100 100" className="w-full h-full text-green-300">
                    <path d="M50 10 L50 20 M50 80 L50 90 M40 25 Q30 25 30 35 Q30 45 40 45 L60 45 Q70 45 70 55 Q70 65 60 65 L35 65 M35 25 L65 25" 
                          stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round"/>
                  </svg>
                </div>
                
                {/* Dollar Sign - bottom center */}
                <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-14 h-14 opacity-2">
                  <svg viewBox="0 0 100 100" className="w-full h-full text-green-400">
                    <path d="M50 10 L50 20 M50 80 L50 90 M40 25 Q30 25 30 35 Q30 45 40 45 L60 45 Q70 45 70 55 Q70 65 60 65 L35 65 M35 25 L65 25" 
                          stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round"/>
                  </svg>
                </div>
                
                {/* Dollar Sign - bottom right */}
                <div className="absolute bottom-8 right-20 w-16 h-16 opacity-3">
                  <svg viewBox="0 0 100 100" className="w-full h-full text-green-500">
                    <path d="M50 10 L50 20 M50 80 L50 90 M40 25 Q30 25 30 35 Q30 45 40 45 L60 45 Q70 45 70 55 Q70 65 60 65 L35 65 M35 25 L65 25" 
                          stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round"/>
                  </svg>
                </div>
                
                {/* Subtle grid pattern */}
                <div 
                  className="absolute inset-0 opacity-2"
                  style={{
                    backgroundImage: `
                      linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px),
                      linear-gradient(180deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: "50px 50px"
                  }}
                />
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <FontAwesomeIcon icon={faRobot} className="text-8xl text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text mb-8" />
                
                <h3 className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text mb-6">
                  Transform Your Business with AI
                </h3>
                
                <p className="text-slate-300 text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
                  Discover how our AI agents can revolutionize your operations and boost revenue
                  around the clock. Start with a free consultation today.
                </p>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-bold py-5 px-12 rounded-2xl transition-all duration-200 shadow-lg text-lg will-change-transform hover:shadow-2xl hover:shadow-cyan-500/25"
                >
                  <span className="flex items-center">
                    <FontAwesomeIcon icon={faSparkles} className="mr-3" />
                    Schedule Free Consultation
                    <FontAwesomeIcon icon={faArrowRight} className="ml-3" />
                  </span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </>
  );
}