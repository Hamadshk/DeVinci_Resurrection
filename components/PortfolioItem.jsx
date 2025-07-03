import React from "react";
import { Badge } from "flowbite-react";
import Piechart from "./Piechart.jsx";

const PortfolioItem = ({ title, video, description, pieValues, techUsed }) => {
  return (
    <div className="px-40 bg-gray-100  rounded-lg py-8 ">
      <h1 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-l to-blue-900 from-green-400">
        {title}
      </h1>
      <iframe
        style={{ paddingBottom: "20px", height: "400px" }}
        src={video}
        width="100%"
        allow="autoplay"
        allowfullscreen

      ></iframe>
      <div className="project-information flex items-center justify-between flex-wrap">
        <div className="left w-1/2 ">
          <div className="description ">
            <h1 className="text-xl font-semibold ">Description</h1>
            <div className="text-wrap">{description}</div>
            <div className="flex flex-wrap gap-2 mt-8">
              {techUsed.map((tech, ind) => (
                <Badge color="success" key={ind}>
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
        <div className="right w-1/3">
          <div className="pie-chart">
            <Piechart pieValues={pieValues} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
