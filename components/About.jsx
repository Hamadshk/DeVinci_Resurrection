import React from "react";
import Image from "next/image";
import robot from "../assets/man_and_robo.jpg";
import automation from "../assets/auto.jpg";

const About = ({ inView }) => {
  return (
    <div className={`about-section ${inView && "about-in-view"} relative overflow-hidden bg-pure-black`}>
      {/* Futuristic Background Grid */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-cyber-grid bg-[length:50px_50px] opacity-20" />
        
        {/* Geometric corner accents */}
        <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-cyber-cyan opacity-30" />
        <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-cyber-cyan opacity-30" />
        <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-cyber-cyan opacity-30" />
        <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-cyber-cyan opacity-30" />
      </div>

      <div className="relative z-10 py-20 px-4">
        {/* Section Header */}
        <div className="max-w-screen-md mx-auto text-center mb-16">
          <h2 className="mb-6 text-4xl md:text-5xl tracking-tight font-extrabold text-cyber-white font-mono">
            About DeVinci Codes | AI Automation Experts
          </h2>
          
          {/* Minimal geometric divider */}
          <div className="relative mb-6">
            <div className="h-0.5 w-32 mx-auto bg-cyber-cyan" />
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-cyber-cyan rounded-full animate-pulse" />
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -ml-6 w-1 h-1 bg-cyber-white rounded-full animate-pulse delay-300" />
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 ml-6 w-1 h-1 bg-cyber-white rounded-full animate-pulse delay-300" />
          </div>
          
          <p className="text-cyber-white text-xl md:text-2xl leading-relaxed">
            Transform your business with{" "}
            <span className="text-cyber-cyan font-semibold">
              intelligent AI agents{" "}
            </span>
            that work 24/7 to drive growth and efficiency
          </p>
        </div>

        {/* Main Content */}
        <div className="gap-16 items-center mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:px-6">
          {/* Text Content */}
          <div className="font-inter text-cyber-white sm:text-lg">
            <div className="relative">
              {/* Clean card container */}
              <div className="relative bg-glass-black backdrop-blur-cyber rounded-lg p-8 border border-glass-white">
                {/* Subtle accent line */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-cyber-cyan" />
                
                <p className="mb-6 text-lg font-normal text-cyber-white leading-relaxed">
                  DeVinci Codes is the leading AI automation company specializing in intelligent agents that revolutionize how businesses operate. We build cutting-edge{" "}
                  <span className="text-cyber-cyan font-semibold">
                    AI call agents
                  </span>
                  ,{" "}
                  <span className="text-cyber-cyan font-semibold">
                    marketing automation systems
                  </span>
                  , and{" "}
                  <span className="text-cyber-cyan font-semibold">
                    content generation pipelines
                  </span>
                  {" "}that work around the clock to boost your revenue, enhance customer experience, and streamline operations. Our expert team leverages advanced technologies like ElevenLabs, Synthflow, RetellAI, and N8N to create custom AI solutions that deliver measurable results.
                </p>
                
                <p className="mb-6 text-lg font-normal text-cyber-white leading-relaxed">
                  From AI-powered{" "}
                  <span className="text-cyber-cyan font-semibold">
                    inbound and outbound call agents
                  </span>
                  {" "}that handle customer inquiries and sales calls to sophisticated{" "}
                  <span className="text-cyber-cyan font-semibold">
                    marketing automation
                  </span>
                  {" "}and{" "}
                  <span className="text-cyber-cyan font-semibold">
                    lead generation systems
                  </span>
                  , we don't just build software – we engineer intelligent solutions that scale your business.
                </p>

                <p className="text-lg font-normal text-cyber-white leading-relaxed">
                  Our proven track record includes automating{" "}
                  <span className="text-cyber-cyan font-semibold">
                    hospitality pricing
                  </span>
                  ,{" "}
                  <span className="text-cyber-cyan font-semibold">
                    LinkedIn outreach
                  </span>
                  ,{" "}
                  <span className="text-cyber-cyan font-semibold">
                    content creation
                  </span>
                  , and complete{" "}
                  <span className="text-cyber-cyan font-semibold">
                    CRM integrations
                  </span>
                  . Partner with DeVinci Codes to unlock the power of{" "}
                  <span className="text-cyber-cyan font-semibold">
                    AI automation
                  </span>
                  {" "}and stay ahead in today's competitive digital landscape.
                </p>
              </div>
            </div>
          </div>

          {/* Images Grid */}
          <div className="grid grid-cols-2 gap-6 mt-8 lg:mt-0">
            <div className="mt-16 relative group">
              {/* Clean image container */}
              <div className="relative bg-glass-black rounded-lg overflow-hidden border border-glass-white backdrop-blur-cyber">
                <Image
                  loading="lazy"
                  className="w-full rounded-lg transition-transform duration-300 group-hover:scale-105"
                  src={robot}
                  alt="AI automation and artificial intelligence technology"
                  width={400}
                  height={300}
                />
                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-cyber-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Corner accent */}
                <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-cyber-cyan opacity-60 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
            
            <div className="relative group">
              {/* Clean image container */}
              <div className="relative bg-glass-black rounded-lg overflow-hidden border border-glass-white backdrop-blur-cyber">
                <Image
                  loading="lazy"
                  className="w-full rounded-lg transition-transform duration-300 group-hover:scale-105"
                  src={automation}
                  alt="AI automation and artificial intelligence technology"
                  width={400}
                  height={300}
                />
                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-cyber-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Corner accent */}
                <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-cyber-cyan opacity-60 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;