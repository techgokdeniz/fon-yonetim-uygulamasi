import FundsList from "@/components/base/dashboard/funds/funds-list";
import CustomPagination from "@/components/base/dashboard/funds/pagination";
import React from "react";
import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";
import SearchInput from "@/components/base/dashboard/funds/search-input";

const fetchFunds = async (page, search) => {
  const query = new URLSearchParams({ start: page * 10, limit: 10 });
  if (search) {
    query.append("search", search);
  }
  const response = await fetch(`/api/dashboard/getfunds?${query.toString()}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const FundsView = () => {
  const searchParams = useSearchParams();
  const page = parseInt(searchParams.get("page") || 1);
  const search = searchParams.get("search") || "";


  const { data, isLoading, isFetching, error } = useQuery(
    ['funds', page, search],
    () => fetchFunds(page, search),
    {
      keepPreviousData: true,
      staleTime: 0,
      cacheTime: 0,
    }
  );


  if (isLoading || isFetching) {
    return <Skeleton className="w-full min-h-[350px]" />;
  }

  if (error) return <div>Bir Hata Oluştu: {error.message}</div>;

  return (
    <div className="p-2 flex flex-col gap-4 w-full">
      <SearchInput />
      <FundsList data={data}/>
      {search ? null : <CustomPagination />}
    </div>
  );
};

export default FundsView;
