import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getFundVolume } from "@/service/dashboard-service";
import { useRouter } from "next/router";
import StatisticTable from "@/components/base/dashboard/statistic/statistic-table";
import { Skeleton } from "@/components/ui/skeleton";

const FundVolumeTable = () => {

  const router = useRouter();

  const { data, isLoading, error } = useQuery({
    queryKey: "getfundVolume",
    queryFn: getFundVolume,
  });

  if (isLoading) {
    return  <Skeleton className='w-full h-[150px]' />
  }

  if (error) {
    router.push("/404");
  }

  const header = ["Fon Kodu", "Fon Adı"];

  return <div className="p-4">
    <StatisticTable caption={data.message} data={data.data} header={header} />
  </div>;
};

export default FundVolumeTable;
