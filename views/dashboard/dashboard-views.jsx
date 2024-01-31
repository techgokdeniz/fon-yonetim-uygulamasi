import React from "react";
import FundVolumeTable from "./fund-volume";
import CompanyVolumeTable from "./company-volume";
import DashboardLineChart from "./dashboard-line-chart";
import StatisticCards from "./statistic-cards";
import WeeklyStats from "./weekly-stats";
import MonthlyStats from "./monthly-stats";

const DashboardViews = () => {
  return (
    <div className="w-full grid grid-cols-1 gap-4">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        <FundVolumeTable />
        <CompanyVolumeTable />
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 p-4">
        <StatisticCards />
        <WeeklyStats />
        <MonthlyStats />
      </div>
    </div>
  );
};

export default DashboardViews;
