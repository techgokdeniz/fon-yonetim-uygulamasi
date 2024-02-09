import React from "react";
import { useRouter } from "next/router";
import { Skeleton } from "@/components/ui/skeleton";
import { getDailyStats } from "@/service/dashboard-service";
import { useQuery } from "@tanstack/react-query";
import StatisticTable from "@/components/base/dashboard/statistic/statistic-table";

const DailyFundsView = () => {
  const router = useRouter();

  const { data, isLoading, error } = useQuery({
    queryKey: ["getDailyStats"],
    queryFn: getDailyStats,
  });

  if (isLoading) {
    return <Skeleton className="w-full h-[150px]" />;
  }

  if (error) {
    router.push("/404");
  }


  console.log(data);

  return (
    <div className="p-4 grid grid-cols-1 xl:grid-cols-2 gap-4 gap-y-10">
      {data.data.map((item, index) => (
        <StatisticTable
          key={index}
          caption={item.caption}
          data={item.data}
          header={item.header}
        />
      ))}
    </div>
  );
};

export default DailyFundsView;
