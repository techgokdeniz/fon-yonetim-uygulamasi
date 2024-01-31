import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend
} from "recharts";
import PropTypes from "prop-types";

const LineCharts = ({ data, XAxisDataKey, Datakey, className }) => {
  if (!data || !XAxisDataKey || !Datakey)
    return (
      <div className="flex dark:dark items-center bg-red-700/30 justify-center w-full h-full min-h-[200px]">
        <span className="text-red-700">
          Could not find the data needed to create the line graph
        </span>
      </div>
    );

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data} className={className}>
        <Line type="monotone" dataKey={Datakey} stroke="#8884d8" strokeWidth={2} />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey={XAxisDataKey} />
        <YAxis />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
};

LineCharts.propTypes = {
  data: PropTypes.array.isRequired,
  XAxisDataKey: PropTypes.string.isRequired,
  Datakey: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default LineCharts;
