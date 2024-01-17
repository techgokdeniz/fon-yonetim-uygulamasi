import React from "react";

import DashobardLayout from "@/layouts/dashobardLayout";
import DashboardViews from "@/views/dashboard/dashboard-views";

const DashboardPage = () => {
  return (
    <DashobardLayout pageTitle="Anasayfa">
      <DashboardViews />
    </DashobardLayout>
  );
};

export default DashboardPage;
