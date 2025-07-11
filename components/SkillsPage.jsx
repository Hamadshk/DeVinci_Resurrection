import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import logo from "../public/images/logos/logo.png";
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
import { 
  CircuitBoard, 
  BinaryStream, 
  TerminalWindow, 
  CyberpunkHUD, 
  DataStream,
  QuantumParticles 
} from './FuturisticComponents';

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
    gradient: "border-cyber-cyan",
    accentColor: "cyber-cyan",
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
    gradient: "border-cyber-white",
    accentColor: "cyber-white",
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
    gradient: "border-cyber-cyan",
    accentColor: "cyber-cyan",
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
    gradient: "border-cyber-white",
    accentColor: "cyber-white",
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
    gradient: "border-cyber-cyan",
    accentColor: "cyber-cyan",
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
    gradient: "border-cyber-white",
    accentColor: "cyber-white",
  },
];

// Optimized Service Card Component
function OptimizedServiceCard({ service, index }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.2, margin: "100px" });

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
      {/* Enhanced futuristic card background with circuit patterns */}
      <div className="relative bg-glass-black backdrop-blur-cyber rounded-lg overflow-hidden border border-glass-white hover:border-cyber-cyan transition-all duration-300">
        
        {/* NEW: Circuit Board Background Animation */}
        <CircuitBoard animated={true} className="opacity-5" />
        
        {/* NEW: Binary Stream Effect */}
        <BinaryStream direction="horizontal" className="opacity-10" />
        
        {/* NEW: Quantum Particles */}
        <QuantumParticles count={3} className="opacity-30" />

        {/* Clean accent line with enhanced animation */}
        <div className={`h-0.5 ${service.gradient.includes('cyan') ? 'bg-cyber-cyan animate-code-compile' : 'bg-cyber-white animate-code-compile'}`} />

        <div className="p-8 relative z-10">
          {/* Enhanced Icon and Title Section */}
          <div className="flex items-center mb-6 relative">
            <div className={`relative flex justify-center items-center w-16 h-16 rounded-lg ${service.gradient.includes('cyan') ? 'bg-cyber-cyan' : 'bg-cyber-white'} shadow-lg group-hover:animate-energy-pulse`}>
              <FontAwesomeIcon icon={service.icon} className={`text-2xl ${service.gradient.includes('cyan') ? 'text-pure-black' : 'text-pure-black'}`} />
              
              {/* NEW: Circuit corners on icon */}
              <div className="absolute -top-1 -left-1 w-3 h-3 border-l border-t border-cyber-cyan opacity-50" />
              <div className="absolute -top-1 -right-1 w-3 h-3 border-r border-t border-cyber-cyan opacity-50" />
              <div className="absolute -bottom-1 -left-1 w-3 h-3 border-l border-b border-cyber-cyan opacity-50" />
              <div className="absolute -bottom-1 -right-1 w-3 h-3 border-r border-b border-cyber-cyan opacity-50" />
            </div>
            
            <div className="ml-6 flex-1">
              <h3 className="text-2xl font-bold text-cyber-white font-inter">
                {service.title}
              </h3>
              <motion.div
                className={`h-0.5 ${service.gradient.includes('cyan') ? 'bg-cyber-cyan' : 'bg-cyber-white'} mt-2`}
                initial={{ width: 0 }}
                animate={isInView ? { width: "100%" } : { width: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
              />
              
              {/* NEW: Tech status indicator */}
              <div className="flex items-center space-x-2 mt-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-xs text-cyber-white/60 font-mono">STATUS: ACTIVE</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-cyber-white text-base leading-relaxed mb-6 font-inter">
            {service.description}
          </p>

          {/* Features List with enhanced styling */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
            {service.features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 + idx * 0.1 }}
                className="flex items-center space-x-3 group/feature"
              >
                <div className={`w-2 h-2 rounded-full ${service.gradient.includes('cyan') ? 'bg-cyber-cyan' : 'bg-cyber-white'} group-hover/feature:animate-pulse`} />
                <span className="text-cyber-white text-sm font-inter group-hover/feature:text-cyber-cyan transition-colors">{feature}</span>
              </motion.div>
            ))}
          </div>

          {/* Enhanced Tech Stack with terminal styling */}
          <div className="mb-6">
            <h4 className={`text-sm font-semibold mb-3 ${service.gradient.includes('cyan') ? 'text-cyber-cyan' : 'text-cyber-white'} font-inter flex items-center`}>
              <FontAwesomeIcon icon={faCircuitBoard} className="mr-2" />
              TECH STACK
            </h4>
            <div className="flex flex-wrap gap-2">
              {service.techStack.map((tech, idx) => (
                <motion.span
                  key={idx}
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 + idx * 0.05 }}
                  className={`px-3 py-1 text-xs rounded-full border ${service.gradient.includes('cyan') ? 'border-cyber-cyan text-cyber-cyan bg-cyber-cyan/10' : 'border-cyber-white text-cyber-white bg-cyber-white/10'} font-inter font-mono hover:bg-opacity-20 transition-all cursor-default`}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          {/* NEW: Performance Metrics Section */}
          <div className="border-t border-glass-white/20 pt-4">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="flex flex-col items-center">
                <div className="text-cyber-cyan text-lg font-bold font-mono">99.9%</div>
                <div className="text-cyber-white/60 text-xs font-inter">UPTIME</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-cyber-cyan text-lg font-bold font-mono">&lt;50ms</div>
                <div className="text-cyber-white/60 text-xs font-inter">LATENCY</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-cyber-cyan text-lg font-bold font-mono">24/7</div>
                <div className="text-cyber-white/60 text-xs font-inter">SUPPORT</div>
              </div>
            </div>
          </div>
        </div>

        {/* NEW: Hover effect overlay with data streams */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <DataStream direction="right" className="absolute top-1/4 opacity-40" />
          <DataStream direction="left" className="absolute top-3/4 opacity-30" />
        </div>
      </div>
    </motion.div>
  );
}

export default function SkillsPage({ inView }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Optimized scroll-based animations
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section 
      ref={containerRef}
      className={`skills relative min-h-screen bg-pure-black overflow-hidden ${inView ? "skills-in-view" : ""}`}
    >
      {/* Enhanced background with multiple tech patterns */}
      <div className="absolute inset-0 bg-cyber-grid bg-[length:50px_50px] opacity-20" />
      <div className="absolute inset-0 bg-binary-pattern opacity-5" />
      <div className="absolute inset-0 bg-neural-pattern opacity-8" />
      
      {/* NEW: Matrix-style background elements */}
      <BinaryStream direction="horizontal" className="opacity-20" />
      <QuantumParticles count={15} className="opacity-30" />

      {/* Animated geometric elements */}
      <motion.div
        style={{ y, opacity }}
        className="absolute top-20 left-10 w-20 h-20 border-2 border-cyber-cyan opacity-30 animate-float"
      />
      <motion.div
        style={{ y: y.current * -1, opacity }}
        className="absolute bottom-20 right-10 w-16 h-16 border-2 border-cyber-white opacity-20 animate-float delay-500"
      />

      <div className="container mx-auto px-4 py-20 relative z-10">
        {/* Enhanced Header Section */}
        <div className="text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-cyber-white mb-6 font-mono"
          >
            AI Automation Services
          </motion.h1>
          
          {/* Enhanced geometric divider with circuit elements */}
          <div className="relative mb-8">
            <div className="h-0.5 w-40 mx-auto bg-cyber-cyan animate-code-compile" />
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyber-cyan rounded-full animate-pulse" />
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -ml-8 w-2 h-2 bg-cyber-white rounded-full animate-pulse delay-300" />
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 ml-8 w-2 h-2 bg-cyber-white rounded-full animate-pulse delay-300" />
            
            {/* NEW: Circuit connections */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -ml-16 w-4 h-0.5 bg-cyber-cyan/50" />
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 ml-12 w-4 h-0.5 bg-cyber-cyan/50" />
          </div>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-cyber-white max-w-4xl mx-auto leading-relaxed font-inter"
          >
            Transform your business with cutting-edge{" "}
            <span className="text-cyber-cyan font-semibold">AI automation solutions</span>
            {" "}that work 24/7 to drive growth, efficiency, and innovation
          </motion.p>

          {/* NEW: Terminal-style system info */}
          <div className="mt-8 flex justify-center">
            <TerminalWindow title="AI_Services_Status" className="max-w-md">
              <div className="space-y-1">
                <div className="text-green-400">● All systems operational</div>
                <div className="text-cyber-cyan">→ {aiServices.length} services available</div>
                <div className="text-cyber-white/80">→ Ready for deployment</div>
              </div>
            </TerminalWindow>
          </div>
        </div>

        {/* Enhanced Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {aiServices.map((service, index) => (
            <OptimizedServiceCard 
              key={index} 
              service={service} 
              index={index} 
            />
          ))}
        </div>

        {/* NEW: Tech Stats Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-glass-black backdrop-blur-cyber border border-glass-white rounded-lg p-8 max-w-4xl mx-auto relative overflow-hidden">
            {/* Background tech elements */}
            <CircuitBoard animated={true} className="opacity-5" />
            
            <h3 className="text-2xl font-semibold text-cyber-white mb-6 font-inter">
              Enterprise-Grade AI Infrastructure
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyber-cyan font-mono mb-2">50M+</div>
                <div className="text-cyber-white/80 text-sm font-inter">API Calls/Month</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyber-cyan font-mono mb-2">99.99%</div>
                <div className="text-cyber-white/80 text-sm font-inter">Reliability</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyber-cyan font-mono mb-2">&lt;100ms</div>
                <div className="text-cyber-white/80 text-sm font-inter">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyber-cyan font-mono mb-2">24/7</div>
                <div className="text-cyber-white/80 text-sm font-inter">Monitoring</div>
              </div>
            </div>

            {/* Data stream effects */}
            <div className="absolute bottom-0 left-0 right-0">
              <DataStream direction="right" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}