import React from "react";
import StatsCard from "@/components/base/dashboard/statistic/statistic-card";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { getTotalFunds } from "@/service/dashboard-service";
import { Skeleton } from "@/components/ui/skeleton";

const StatisticCards = () => {
  const router = useRouter();

  const { data, isLoading, error } = useQuery({
    queryKey: "getTotalFunds",
    queryFn: getTotalFunds,
  });

  if (isLoading) {
    return (
      <div className="xl:col-span-2">
        <Skeleton className="w-full min-h-[150px]" />
      </div>
    );
  }

  if (error) {
    router.push("/404");
  }

  return (
    data && (
      <div className="xl:col-span-2">
        <StatsCard
          title="Fon Sayısı"
          description="Tefas üzerinde aktif olarak bulunan tüm fon sayısını gösterir."
          value={data.data}
        />
      </div>
    )
  );
};

export default StatisticCards;
