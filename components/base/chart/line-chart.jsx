import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";


const LineCharts = ({ data, XAxisDataKey, Datakey, className }) => {
  if (!data || !XAxisDataKey || !Datakey)
    return (
      <div className="flex dark:dark items-center bg-red-700/30 justify-center w-full h-full min-h-[200px]">
        <span className="text-red-700">Could not find the data needed to create the line graph</span>
      </div>
    );

  return (
    <LineChart width={600} height={300} data={data} className={className}>
      <Line type="monotone" dataKey={Datakey} stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey={XAxisDataKey} />
      <YAxis />
    </LineChart>
  );
};

export default LineCharts;
