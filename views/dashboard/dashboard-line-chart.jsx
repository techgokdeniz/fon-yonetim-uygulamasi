import LineCharts from "@/components/base/chart/line-chart";
import React from "react";

const DashboardLineChart = () => {
  const data = [
    { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
    { name: "Page A", uv: 200, pv: 240, amt: 2400 },
    { name: "Page A", uv: 201, pv: 200, amt: 2400 },
  ];

  return (
    <LineCharts
      data={data}
      XAxisDataKey={`name`}
      className="mt-4"
    />
  );
};

export default DashboardLineChart;
