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
      className="relative card-bg rounded-2xl futuristic-glow overflow-hidden hover-scale w-full group will-change-transform"
    >
      {/* Gradient Header Bar */}
      <div className={`h-2 bg-gradient-to-r ${gradient}`}></div>

      <div className="p-8 relative z-10">
        {/* Icon and Title */}
        <div className="flex items-center mb-6">
          <div
            className={`flex justify-center items-center w-16 h-16 rounded-xl bg-gradient-to-br ${gradient} text-white shadow-lg`}
          >
            <FontAwesomeIcon icon={icon} className="text-3xl" />
          </div>
          <h3 className="ml-4 text-2xl font-bold text-blue-900">{title}</h3>
        </div>

        {/* Description */}
        <p className="text-purple-700 text-base leading-relaxed mb-6">{description}</p>

        {/* Key Features */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-purple-800 mb-3 flex items-center">
            <FontAwesomeIcon icon={faMagic} className="mr-2 text-blue-900" />
            Key Features
          </h4>
          <div className="grid grid-cols-2 gap-3">
            {features.slice(0, isExpanded ? features.length : 4).map((feature, idx) => (
              <div 
                key={idx} 
                className="flex items-center text-sm text-purple-700"
              >
                <span className="w-2 h-2 bg-blue-900 rounded-full mr-2"></span>
                {feature}
              </div>
            ))}
            {features.length > 4 && (
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="text-sm text-blue-900 font-semibold mt-2 hover:text-blue-700"
                onClick={() => setIsExpanded(!isExpanded)}
              >
                {isExpanded ? "Show Less" : `+${features.length - 4} More`}
              </motion.button>
            )}
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-purple-800 mb-3 flex items-center">
            <FontAwesomeIcon icon={faBrain} className="mr-2 text-blue-900" />
            Technology Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, idx) => (
              <span
                key={idx}
                className="text-xs bg-gray-100 border border-blue-200 px-3 py-1 rounded-full text-purple-700 font-medium transform hover:scale-105 transition-transform"
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
          className={`w-full bg-gradient-to-r ${gradient} text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center relative overflow-hidden group`}
        >
          <FontAwesomeIcon icon={faRobot} className="mr-2" />
          <span className="relative z-10">Explore Solution</span>
        </motion.button>
      </div>
    </motion.div>
  );
}