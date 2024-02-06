import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useSearchParams } from "next/navigation";

const CustomPagination = () => {
  const searchParams = useSearchParams();

  const TotalPage = 187;
  const CurrentPage = parseInt(searchParams.get("page") || 1);

  const showPageCount = 10;
  const startPage = Math.max(1, CurrentPage - Math.floor(showPageCount / 2));
  const endPage = Math.min(TotalPage, startPage + showPageCount - 1);

  return (
    <Pagination>
      <PaginationContent>
        {CurrentPage != 1 && (
          <PaginationItem>
            <PaginationPrevious
              href={`/dashboard/funds?page=${Math.max(1, CurrentPage - 1)}`}
            />
          </PaginationItem>
        )}
        {Array.from({ length: endPage - startPage + 1 }, (_, i) => (
          <PaginationItem key={i}>
            <PaginationLink
              href={`/dashboard/funds?page=${startPage + i}`}
              isActive={CurrentPage == startPage + i}
            >
              {startPage + i}
            </PaginationLink>
          </PaginationItem>
        ))}
        {TotalPage > endPage && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}
        {CurrentPage != TotalPage && (
          <PaginationItem>
            <PaginationNext
              href={`/dashboard/funds?page=${Math.min(
                TotalPage,
                CurrentPage + 1
              )}`}
            />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};

export default CustomPagination;
