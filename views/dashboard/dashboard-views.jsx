import React from "react";
import FundVolumeTable from "./fund-volume";
import CompanyVolumeTable from "./company-volume";
import DashboardLineChart from "./dashboard-line-chart";

const DashboardViews = () => {
  return (
    <div className="w-full grid grid-cols-1 gap-4">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        <FundVolumeTable />
        <CompanyVolumeTable />
      </div>
      {/* <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 p-4">
        <DashboardLineChart />
      </div> */}
    </div>
  );
};

export default DashboardViews;
