import React from "react";
import { PieChart } from "react-minimal-pie-chart";

const Piechart = ({ pieValues }) => {
  const defaultLabelStyle = {
    fontSize: "5px",
    fontFamily: "sans-serif",
  };
  return (
    <PieChart
      data={pieValues}
      label={({ dataEntry }) => dataEntry.title}
      labelStyle={defaultLabelStyle}
    />
  );
};

export default Piechart;
