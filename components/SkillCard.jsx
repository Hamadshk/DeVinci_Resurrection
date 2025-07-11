import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tilt from "react-parallax-tilt";

import React, { useEffect, useState } from "react";
const SkillCard = ({ icon, badges, title, description }) => {
  let [reverse, setReverse] = useState(false);

  useEffect(() => {
    setReverse(window.innerWidth >= 600 ? false : true);
  }, []);

  return (
    <Tilt
      className="card-skills p-4 shadow-lg bg-glass-black backdrop-blur-cyber border border-glass-white hover:border-cyber-cyan rounded-lg transition-all duration-300"
      gyroscope
      tiltReverse={reverse}
    >
      <div className="card-info flex gap-4 justify-center items-center">
        <FontAwesomeIcon icon={icon} style={{ fontSize: "25px" }} className="text-cyber-cyan" />
        <h1 className="text-lg font-bold text-cyber-white font-inter">{title}</h1>
      </div>
      <p className="text-cyber-white/80 mb-4 font-inter">{description}</p>
      <div className="flex flex-wrap gap-2">{badges}</div>
    </Tilt>
  );
};

export default SkillCard;
