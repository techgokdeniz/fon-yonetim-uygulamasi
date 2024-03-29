import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getCompanyVolume } from "@/service/dashboard-service";
import { useRouter } from "next/router";
import StatisticTable from "@/components/base/dashboard/statistic/statistic-table";
import { Skeleton } from "@/components/ui/skeleton";

const CompanyVolumeTable = () => {

  const router = useRouter();

  const { data, isLoading, error } = useQuery({
    queryKey: "getCompanyVolume",
    queryFn: getCompanyVolume,
  });

  if (isLoading) {
    return  <Skeleton  className='w-full h-[150px]'/>
  }

  if (error) {
    router.push("/404");
  }

  const header = ["Aracı Kurum"];

  return <div className="p-4">
    <StatisticTable caption={data.message} data={data.data} header={header} />
  </div>;
};

export default CompanyVolumeTable;
