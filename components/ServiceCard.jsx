import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagic, faBrain, faRobot } from "@fortawesome/free-solid-svg-icons";

export default function ServiceCard({
  title,
  icon,
  description,
  features,
  techStack,
  gradient,
  color,
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.3 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative bg-glass-black backdrop-blur-cyber rounded-lg border border-glass-white hover:border-cyber-cyan overflow-hidden transition-all duration-300 w-full group will-change-transform"
    >
      {/* Clean accent bar */}
      <div className="h-0.5 bg-cyber-cyan" />

      <div className="p-8 relative z-10">
        {/* Icon and Title */}
        <div className="flex items-center mb-6">
          <div className="flex justify-center items-center w-16 h-16 rounded-lg bg-cyber-cyan text-pure-black shadow-lg">
            <FontAwesomeIcon icon={icon} className="text-3xl" />
          </div>
          <h3 className="ml-4 text-2xl font-bold text-cyber-white font-inter">{title}</h3>
        </div>

        {/* Description */}
        <p className="text-cyber-white text-base leading-relaxed mb-6 font-inter">{description}</p>

        {/* Key Features */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-cyber-cyan mb-3 flex items-center font-inter">
            <FontAwesomeIcon icon={faMagic} className="mr-2 text-cyber-cyan" />
            Key Features
          </h4>
          <div className="grid grid-cols-2 gap-3">
            {features.slice(0, isExpanded ? features.length : 4).map((feature, idx) => (
              <div 
                key={idx} 
                className="flex items-center text-sm text-cyber-white font-inter"
              >
                <span className="w-2 h-2 bg-cyber-cyan rounded-full mr-2" />
                {feature}
              </div>
            ))}
            {features.length > 4 && (
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="text-sm text-cyber-cyan font-semibold mt-2 hover:text-cyber-white transition-colors font-inter"
                onClick={() => setIsExpanded(!isExpanded)}
              >
                {isExpanded ? "Show Less" : `+${features.length - 4} More`}
              </motion.button>
            )}
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-cyber-cyan mb-3 flex items-center font-inter">
            <FontAwesomeIcon icon={faBrain} className="mr-2 text-cyber-cyan" />
            Technology Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, idx) => (
              <span
                key={idx}
                className="text-xs bg-glass-black border border-cyber-cyan px-3 py-1 rounded-full text-cyber-cyan font-medium transform hover:scale-105 transition-transform font-inter"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-cyber-cyan hover:bg-cyber-white text-pure-black font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 flex items-center justify-center relative overflow-hidden group font-inter"
        >
          <FontAwesomeIcon icon={faRobot} className="mr-2" />
          <span className="relative z-10">Explore Solution</span>
        </motion.button>
      </div>
    </motion.div>
  );
}