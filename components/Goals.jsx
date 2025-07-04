const features = [
  {
    name: "Innovation",
    description:
      "We aim to be at the forefront of technological advancements, bringing innovative ideas to life.",
  },
  {
    name: "User-Centric Solutions",
    description:
      "Our focus is on creating software that serves the needs of users, enhancing their experiences.",
  },
  {
    name: "Cutting-Edge Technologies",
    description:
      "We are committed to staying current with the latest technologies to provide state-of-the-art solutions.",
  },
  {
    name: "Exceptional Results",
    description:
      "Our goal is to deliver outstanding results, ensuring client satisfaction and success.",
  },
  {
    name: "Digital Transformation",
    description:
      "We help businesses thrive in the digital age, driving their digital transformation journeys.",
  },
  {
    name: "Client Dedication",
    description:
      "Our clients success is our success, and we are dedicated to helping them achieve their goals.",
  },
];

export default function Goals({ inView }) {
  return (
    <div className={`bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 min-h-screen py-16 goals ${inView && "goals-in-view"}`}>
      <div className="max-w-screen-xl mx-auto px-4 lg:px-6">
        <div className="max-w-screen-md mb-12">
          <h2 className="mb-6 text-5xl tracking-tight font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Our Vision
          </h2>
          <p className="text-slate-300 text-xl max-w-2xl leading-relaxed">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-semibold">
              DeVinci Codes{" "}
            </span>
            is devoted to providing innovative solutions that drive digital transformation and create exceptional user experiences.
          </p>
          
          {/* Decorative Elements */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-cyan-500"></div>
            <div className="w-3 h-3 bg-cyan-500 rounded-full animate-pulse"></div>
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-cyan-500"></div>
          </div>
        </div>
        
        <div className="grid max-w-7xl grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
          {/* Features Grid */}
          <div>
            <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {features.map((feature, index) => (
                <div key={feature.name} className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 hover:border-cyan-500/30">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                      <span className="text-white text-lg">
                        {['🚀', '👥', '⚡', '🎯', '🔄', '🤝'][index]}
                      </span>
                    </div>
                    <dt className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      {feature.name}
                    </dt>
                  </div>
                  <dd className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          
          {/* Image Grid */}
          <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6">
            <div className="relative group overflow-hidden rounded-xl">
              <img
                loading="lazy"
                src="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0"
                alt="AI Innovation and Digital Networks"
                className="w-full h-48 object-cover rounded-xl group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent rounded-xl"></div>
              <div className="absolute bottom-3 left-3 text-white font-medium">AI Innovation</div>
            </div>
            
            <div className="relative group overflow-hidden rounded-xl">
              <img
                loading="lazy"
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0"
                alt="Data Analytics and Technology"
                className="w-full h-48 object-cover rounded-xl group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent rounded-xl"></div>
              <div className="absolute bottom-3 left-3 text-white font-medium">Data Analytics</div>
            </div>
            
            <div className="relative group overflow-hidden rounded-xl">
              <img
                loading="lazy"
                src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0"
                alt="Digital Transformation"
                className="w-full h-48 object-cover rounded-xl group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent rounded-xl"></div>
              <div className="absolute bottom-3 left-3 text-white font-medium">Digital Solutions</div>
            </div>
            
            <div className="relative group overflow-hidden rounded-xl">
              <img
                loading="lazy"
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0"
                alt="AI and Machine Learning Development"
                className="w-full h-48 object-cover rounded-xl group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent rounded-xl"></div>
              <div className="absolute bottom-3 left-3 text-white font-medium">AI Development</div>
            </div>
          </div>
        </div>
        
        {/* Vision Statement */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 shadow-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Building Tomorrow's Digital Solutions Today
            </h3>
            <p className="text-slate-300 text-lg leading-relaxed">
              We believe in the power of technology to transform businesses and create meaningful connections. 
              Our mission is to bridge the gap between innovative ideas and practical solutions, delivering 
              exceptional results that exceed expectations.
            </p>
            <div className="flex items-center justify-center space-x-2 mt-6">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <span className="text-cyan-300 text-sm font-medium">Innovate • Create • Transform</span>
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
