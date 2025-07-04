import React from "react";
import Image from "next/image";
import robot from "../assets/man_and_robo.jpg";
import automation from "../assets/auto.jpg";

const About = ({ inView }) => {
  return (
    <div className={`about-section ${inView && "about-in-view"} relative overflow-hidden`}>
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 -top-48 -right-48 bg-gradient-to-r from-cyan-500/8 to-blue-500/8 rounded-full blur-3xl" />
        <div className="absolute w-96 h-96 -bottom-48 -left-48 bg-gradient-to-r from-purple-500/8 to-pink-500/8 rounded-full blur-3xl" />
        
        {/* Grid Pattern */}
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
      </div>

      <div className="relative z-10 py-20 px-4">
        {/* Section Header */}
        <div className="max-w-screen-md mx-auto text-center mb-16">
          <h2 className="mb-6 text-4xl md:text-5xl tracking-tight font-extrabold text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text">
            About DeVinci Codes | AI Automation Experts
          </h2>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full mb-6" />
          <p className="text-slate-300 text-xl md:text-2xl leading-relaxed">
            Transform your business with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-semibold">
              intelligent AI agents{" "}
            </span>
            that work 24/7 to drive growth and efficiency
          </p>
        </div>

        {/* Main Content */}
        <div className="gap-16 items-center mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:px-6">
          {/* Text Content */}
          <div className="font-sans text-slate-300 sm:text-lg">
            <div className="relative">
              {/* Subtle glow effect behind text */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-2xl blur-xl" />
              
              <div className="relative bg-slate-900/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/30">
                <p className="mb-6 text-lg font-normal text-slate-300 leading-relaxed">
                  DeVinci Codes is the leading AI automation company specializing in intelligent agents that revolutionize how businesses operate. We build cutting-edge{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-semibold">
                    AI call agents
                  </span>
                  ,{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 font-semibold">
                    marketing automation systems
                  </span>
                  , and{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 font-semibold">
                    content generation pipelines
                  </span>
                  {" "}that work around the clock to boost your revenue, enhance customer experience, and streamline operations. Our expert team leverages advanced technologies like ElevenLabs, Synthflow, RetellAI, and N8N to create custom AI solutions that deliver measurable results.
                </p>
                
                <p className="mb-6 text-lg font-normal text-slate-300 leading-relaxed">
                  From AI-powered{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500 font-semibold">
                    inbound and outbound call agents
                  </span>
                  {" "}that handle customer inquiries and sales calls to sophisticated{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 font-semibold">
                    marketing automation
                  </span>
                  {" "}and{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-600 font-semibold">
                    lead generation systems
                  </span>
                  , we don't just build software – we engineer intelligent solutions that scale your business.
                </p>

                <p className="text-lg font-normal text-slate-300 leading-relaxed">
                  Our proven track record includes automating{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-500 font-semibold">
                    hospitality pricing
                  </span>
                  ,{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-500 font-semibold">
                    LinkedIn outreach
                  </span>
                  ,{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-500 font-semibold">
                    content creation
                  </span>
                  , and complete{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600 font-semibold">
                    CRM integrations
                  </span>
                  . Partner with DeVinci Codes to unlock the power of{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 font-semibold">
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
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-300 blur-sm" />
              <div className="relative bg-slate-900/50 rounded-2xl overflow-hidden border border-slate-700/50 backdrop-blur-sm">
                <Image
                  loading="lazy"
                  className="w-full rounded-2xl transition-transform duration-300 group-hover:scale-105"
                  src={robot}
                  alt="AI automation and artificial intelligence technology"
                  width={400}
                  height={300}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-300 blur-sm" />
              <div className="relative bg-slate-900/50 rounded-2xl overflow-hidden border border-slate-700/50 backdrop-blur-sm">
                <Image
                  loading="lazy"
                  className="w-full rounded-2xl transition-transform duration-300 group-hover:scale-105"
                  src={automation}
                  alt="AI automation and artificial intelligence technology"
                  width={400}
                  height={300}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: "24/7", label: "AI Automation", gradient: "from-cyan-400 to-blue-500" },
              { number: "300%", label: "ROI Increase", gradient: "from-blue-500 to-purple-600" },
              { number: "50+", label: "Businesses Automated", gradient: "from-purple-600 to-pink-500" }
            ].map((stat, index) => (
              <div key={index} className="text-center relative group">
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${stat.gradient} rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-300 blur-sm`} />
                <div className="relative bg-slate-900/50 rounded-2xl p-6 border border-slate-700/50 backdrop-blur-sm">
                  <div className={`text-4xl font-bold text-transparent bg-gradient-to-r ${stat.gradient} bg-clip-text mb-2`}>
                    {stat.number}
                  </div>
                  <div className="text-slate-300 font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;