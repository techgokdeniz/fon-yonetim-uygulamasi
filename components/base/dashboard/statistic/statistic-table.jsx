import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const StatisticTable = (props) => {
  const tableHeaders = Object.keys(props?.data[0] || {});

  return (
    <Table>
      <TableCaption>{props.caption}</TableCaption>
      <TableHeader>
        <TableRow>
          {props?.header?.map((item, index) => (
            <TableHead key={index}>{item}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {props?.data?.map((item, rowIndex) => (
          <TableRow key={rowIndex}>
            {tableHeaders.map((header, colIndex) => (
              <TableCell className="border" key={colIndex}>
                <div className="flex justify-between items-center">
                  <div className="text-sm text-muted-foreground">
                    {item[header]}
                  </div>
                </div>
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default StatisticTable;
