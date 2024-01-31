import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { getMonthlyFunds } from "@/service/dashboard-service";
import DashboardLineChart from "./dashboard-line-chart";
import { Skeleton } from "@/components/ui/skeleton";

const MonthlyStats = () => {
  const router = useRouter();

  const { data,isLoading, error } = useQuery({
    queryKey: "getMonthlyFunds",
    queryFn: getMonthlyFunds,
  });

  if(isLoading){
    return <Skeleton className="w-full min-h-[350px]" />;
  }

  if (error) {
    router.push("/404");
  }

  return (
    data && <div className="flex flex-col gap-2 text-center mt-4">
      <h1 className="text-xl text-primary">Aylık Getiri Tablosu (%)</h1>
      <DashboardLineChart className="w-full" data={data.data} Datakey="FONDONEMGETIRI" XAxisDataKey="FONTURACIKLAMA" />
    </div>
  );
};

export default MonthlyStats;
