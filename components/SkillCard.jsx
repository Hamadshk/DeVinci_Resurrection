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
      className="card-skills p-4  shadow-lg "
      gyroscope
      tiltReverse={reverse}
    >
      <div className=" card-info flex gap-4 justify-center items-center ">
        <FontAwesomeIcon icon={icon} style={{ fontSize: "25px" }} />

        <h1 className="text-lg font-bold text-blue"> {title}</h1>
      </div>
      <p className="text-gray-500 dark:text-gray-400 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">{badges}</div>
    </Tilt>
  );
};

export default SkillCard;
