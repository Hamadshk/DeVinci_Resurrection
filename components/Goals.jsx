import Image from 'next/image';

const features = [
  {
    name: "Innovation",
    description:
      "We aim to be at the forefront of technological advancements, bringing innovative ideas to life.",
    icon: "🚀"
  },
  {
    name: "User-Centric Solutions",
    description:
      "Our focus is on creating software that serves the needs of users, enhancing their experiences.",
    icon: "👥"
  },
  {
    name: "Cutting-Edge Technologies",
    description:
      "We are committed to staying current with the latest technologies to provide state-of-the-art solutions.",
    icon: "⚡"
  },
  {
    name: "Exceptional Results",
    description:
      "Our goal is to deliver outstanding results, ensuring client satisfaction and success.",
    icon: "🎯"
  },
  {
    name: "Digital Transformation",
    description:
      "We help businesses thrive in the digital age, driving their digital transformation journeys.",
    icon: "🔄"
  },
  {
    name: "Client Dedication",
    description:
      "Our clients success is our success, and we are dedicated to helping them achieve their goals.",
    icon: "🤝"
  },
];

export default function Goals({ inView }) {
  return (
    <div className={`min-h-screen py-16 goals ${inView && "goals-in-view"} bg-pure-black relative overflow-hidden`}>
      {/* Futuristic Grid Background */}
      <div className="absolute inset-0 bg-cyber-grid bg-[length:50px_50px] opacity-20" />
      
      {/* Geometric corner accents */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-cyber-cyan opacity-30" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-cyber-cyan opacity-30" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-cyber-cyan opacity-30" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-cyber-cyan opacity-30" />
      
      <div className="max-w-screen-xl mx-auto px-4 lg:px-6 relative z-10">
        <div className="max-w-screen-md mb-12">
          <h2 className="mb-6 text-5xl tracking-tight font-extrabold text-cyber-white font-mono">
            Our Vision
          </h2>
          <p className="text-cyber-white text-xl max-w-2xl leading-relaxed font-inter">
            <span className="text-cyber-cyan font-semibold">
              DeVinci Codes{" "}
            </span>
            is devoted to providing innovative solutions that drive digital transformation and create exceptional user experiences.
          </p>
          
          {/* Futuristic accent elements */}
          <div className="flex items-center justify-center space-x-8 mt-8">
            <div className="w-12 h-0.5 bg-cyber-cyan" />
            <div className="w-3 h-3 bg-cyber-cyan rounded-full animate-pulse" />
            <div className="w-12 h-0.5 bg-cyber-cyan" />
          </div>
        </div>
        
        <div className="grid max-w-7xl grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
          {/* Features Grid */}
          <div>
            <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {features.map((feature, index) => (
                <div key={feature.name} className="group bg-glass-black backdrop-blur-cyber border border-glass-white rounded-lg p-6 shadow-2xl hover:border-cyber-cyan transition-all duration-300">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 bg-cyber-cyan rounded-lg flex items-center justify-center shadow-lg">
                      <span className="text-pure-black text-lg">
                        {feature.icon}
                      </span>
                    </div>
                    <dt className="text-lg font-semibold text-cyber-white font-inter">
                      {feature.name}
                    </dt>
                  </div>
                  <dd className="text-cyber-white/80 leading-relaxed font-inter">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          
          {/* Image Grid */}
          <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6">
            <div className="relative group overflow-hidden rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107"
                alt="AI Innovation and Digital Networks"
                width={1000}
                height={600}
                className="w-full h-48 object-cover rounded-lg group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
                quality={80}
              />
              <div className="absolute inset-0 bg-pure-black/40 rounded-lg" />
              <div className="absolute bottom-3 left-3 text-cyber-white font-medium font-inter">AI Innovation</div>
              <div className="absolute top-3 right-3 w-4 h-4 border-r-2 border-t-2 border-cyber-cyan opacity-60" />
            </div>
            
            <div className="relative group overflow-hidden rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
                alt="Data Analytics and Technology"
                width={1000}
                height={600}
                className="w-full h-48 object-cover rounded-lg group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
                quality={80}
              />
              <div className="absolute inset-0 bg-pure-black/40 rounded-lg" />
              <div className="absolute bottom-3 left-3 text-cyber-white font-medium font-inter">Data Analytics</div>
              <div className="absolute top-3 right-3 w-4 h-4 border-r-2 border-t-2 border-cyber-cyan opacity-60" />
            </div>
            
            <div className="relative group overflow-hidden rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43"
                alt="Digital Transformation"
                width={1000}
                height={600}
                className="w-full h-48 object-cover rounded-lg group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
                quality={80}
              />
              <div className="absolute inset-0 bg-pure-black/40 rounded-lg" />
              <div className="absolute bottom-3 left-3 text-cyber-white font-medium font-inter">Digital Solutions</div>
              <div className="absolute top-3 right-3 w-4 h-4 border-r-2 border-t-2 border-cyber-cyan opacity-60" />
            </div>
            
            <div className="relative group overflow-hidden rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995"
                alt="AI and Machine Learning Development"
                width={1000}
                height={600}
                className="w-full h-48 object-cover rounded-lg group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
                quality={80}
              />
              <div className="absolute inset-0 bg-pure-black/40 rounded-lg" />
              <div className="absolute bottom-3 left-3 text-cyber-white font-medium font-inter">AI Development</div>
              <div className="absolute top-3 right-3 w-4 h-4 border-r-2 border-t-2 border-cyber-cyan opacity-60" />
            </div>
          </div>
        </div>
        
        {/* Vision Statement */}
        <div className="text-center mt-16">
          <div className="bg-glass-black backdrop-blur-cyber border border-glass-white rounded-lg p-8 shadow-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-cyber-white mb-4 font-inter">
              Building Tomorrow's Digital Solutions Today
            </h3>
            <p className="text-cyber-white text-lg leading-relaxed font-inter">
              We believe in the power of technology to transform businesses and create meaningful connections. 
              Our mission is to bridge the gap between innovative ideas and practical solutions, delivering 
              exceptional results that exceed expectations.
            </p>
            <div className="flex items-center justify-center space-x-4 mt-6">
              <div className="w-2 h-2 bg-cyber-cyan rounded-full animate-pulse" />
              <span className="text-cyber-cyan text-sm font-medium font-inter">Innovate • Create • Transform</span>
              <div className="w-2 h-2 bg-cyber-cyan rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
