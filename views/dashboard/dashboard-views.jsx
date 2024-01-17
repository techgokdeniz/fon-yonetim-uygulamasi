import React from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import FundVolumeTable from "./fund-volume";
import CompanyVolumeTable from "./company-volume";

const DashboardViews = () => {


  return (
    <div className="w-full border grid grid-cols-1 lg:grid-cols-2">
      <FundVolumeTable />
      <CompanyVolumeTable />
    </div>
  );
};

export default DashboardViews;
