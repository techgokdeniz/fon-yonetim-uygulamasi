import LineCharts from "@/components/base/chart/line-chart";
import React from "react";
import PropTypes from "prop-types";

const DashboardLineChart = (props) => {
  return (
    <LineCharts
      Datakey={props.Datakey}
      data={props.data}
      XAxisDataKey={props.XAxisDataKey}
      className={props.className}
    />
  );
};

DashboardLineChart.prototype = {
  data: PropTypes.array.isRequired,
  XAxisDataKey: PropTypes.string.isRequired,
  Datakey: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default DashboardLineChart;
